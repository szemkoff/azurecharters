#!/usr/bin/env node
require('dotenv').config();
const { google } = require('googleapis');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Path to service account credentials
const CREDENTIALS_PATH = './upheld-world-284315-ee32ec912361.json';

// Default assumptions
const defaultAssumptions = {
  averageCharterValue: 35000,
  commissionRate: 0.175,
  premiumListingFee: 0.05,
  marketGrowthRate: 0.083,
  initialMonthlyBookings: 5,
  monthlyGrowthRate: 0.08,
  premiumListingPercentage: 0.25,
  repeatBookingRate: 0.15,
  customerAcquisitionCost: 1200,
  conversionRate: 0.035,
  marketingBudget: 150000
};

/**
 * Initialize Google Sheets & Drive API
 */
async function initGoogleApis() {
  try {
    console.log(`Using credentials from: ${CREDENTIALS_PATH}`);
    
    const auth = new google.auth.GoogleAuth({
      keyFile: CREDENTIALS_PATH,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive'
      ]
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const drive = google.drive({ version: 'v3', auth });
    
    console.log('Google API clients initialized successfully');
    return { sheets, drive };
  } catch (error) {
    console.error('Failed to initialize Google API clients:', error);
    process.exit(1);
  }
}

/**
 * Create a new spreadsheet
 */
async function createSpreadsheet(sheets, title) {
  try {
    const response = await sheets.spreadsheets.create({
      requestBody: {
        properties: {
          title
        },
        sheets: [
          { properties: { title: 'Summary' } }
        ]
      }
    });
    
    console.log(`Spreadsheet created with ID: ${response.data.spreadsheetId}`);
    return response.data;
  } catch (error) {
    console.error('Error creating spreadsheet:', error);
    throw error;
  }
}

/**
 * Share the spreadsheet with a user
 */
async function shareSpreadsheet(drive, spreadsheetId, userEmail) {
  try {
    await drive.permissions.create({
      fileId: spreadsheetId,
      requestBody: {
        role: 'writer',
        type: 'user',
        emailAddress: userEmail
      }
    });
    console.log(`Spreadsheet shared with ${userEmail}`);
  } catch (error) {
    console.error('Error sharing spreadsheet:', error);
  }
}

/**
 * Create all tabs needed for the financial model
 */
async function createModelTabs(sheets, spreadsheetId) {
  const tabs = [
    'Assumptions',
    'Revenue',
    'Expenses',
    'Marketing',
    'Cash Flow',
    'P&L',
    'Investor',
    'Scenarios',
    'Growth'
  ];

  const requests = tabs.map(tabName => ({
    addSheet: {
      properties: {
        title: tabName
      }
    }
  }));

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests
    }
  });
  
  console.log('Created all model tabs');
}

/**
 * Update assumptions in the financial model
 */
async function updateAssumptions(sheets, spreadsheetId, assumptions) {
  const values = [
    ['BUSINESS ASSUMPTIONS'],
    [],
    ['Charter Market'],
    ['Average Charter Value', assumptions.averageCharterValue || 35000],
    ['Commission Rate', assumptions.commissionRate || 0.175],
    ['Premium Listing Fee', assumptions.premiumListingFee || 0.05],
    ['Market Growth Rate', assumptions.marketGrowthRate || 0.083],
    [],
    ['Booking Metrics'],
    ['Initial Monthly Bookings (Year 1)', assumptions.initialMonthlyBookings || 5],
    ['Monthly Growth Rate', assumptions.monthlyGrowthRate || 0.08],
    ['Premium Listing %', assumptions.premiumListingPercentage || 0.25],
    ['Repeat Booking Rate', assumptions.repeatBookingRate || 0.15],
    [],
    ['Marketing Performance'],
    ['Customer Acquisition Cost', assumptions.customerAcquisitionCost || 1200],
    ['Conversion Rate', assumptions.conversionRate || 0.035],
    ['Marketing Budget', assumptions.marketingBudget || 150000]
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Assumptions!A1:B18',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values
    }
  });
  
  console.log('Updated assumptions');
}

/**
 * Get sheet ID by name
 */
async function getSheetId(sheets, spreadsheetId, sheetName) {
  const response = await sheets.spreadsheets.get({
    spreadsheetId
  });

  const sheet = response.data.sheets.find(s => s.properties.title === sheetName);
  return sheet ? sheet.properties.sheetId : null;
}

/**
 * Build the Revenue tab
 */
async function buildRevenueTab(sheets, spreadsheetId) {
  console.log('Building Revenue tab...');
  
  // Headers
  const headers = [
    ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Total']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Revenue!A1:N1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: headers
    }
  });

  // Year headers
  const yearHeaders = [
    ['Year 1', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Year 2', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Year 3', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Year 4', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Year 5', '', '', '', '', '', '', '', '', '', '', '', '', '']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Revenue!A3:N7',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: yearHeaders
    }
  });

  // Booking volume section
  const bookingVolumeHeader = [
    ['Booking Volume', '', '', '', '', '', '', '', '', '', '', '', '', '']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Revenue!A9:N9',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: bookingVolumeHeader
    }
  });

  // Initial booking formula (Year 1)
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Revenue!B10',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [['=Assumptions!B10']]
    }
  });

  // Growth formula for remaining months
  const formulaRequests = [];
  for (let col = 3; col <= 13; col++) {
    const colLetter = String.fromCharCode(64 + col); // Convert column index to letter (3 = C, etc.)
    const prevColLetter = String.fromCharCode(64 + col - 1);
    
    formulaRequests.push({
      updateCells: {
        rows: [{
          values: [{
            userEnteredValue: {
              formulaValue: `=${prevColLetter}10*(1+Assumptions!B11)`
            }
          }]
        }],
        fields: 'userEnteredValue',
        range: {
          sheetId: await getSheetId(sheets, spreadsheetId, 'Revenue'),
          startRowIndex: 9,
          endRowIndex: 10,
          startColumnIndex: col - 1,
          endColumnIndex: col
        }
      }
    });
  }

  // Add formula requests if any
  if (formulaRequests.length > 0) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: formulaRequests
      }
    });
  }

  // Revenue section
  const revenueHeaders = [
    ['Revenue Streams', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Standard Commissions', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Premium Commissions', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Deposit Handling Fees', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Partner Commissions', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Total Revenue', '', '', '', '', '', '', '', '', '', '', '', '', '']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Revenue!A13:N19',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: revenueHeaders
    }
  });

  // Add standard commission formula
  const commissionFormula = '=B10*Assumptions!B4*Assumptions!B5';
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Revenue!B14',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[commissionFormula]]
    }
  });

  // Add premium commission formula
  const premiumFormula = '=B10*Assumptions!B12*Assumptions!B4*(Assumptions!B5+Assumptions!B6)';
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Revenue!B15',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[premiumFormula]]
    }
  });

  // Add handling fees formula
  const handlingFormula = '=(B14+B15)*0.01';
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Revenue!B16',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[handlingFormula]]
    }
  });

  // Add partner commission formula
  const partnerFormula = '=B10*500';
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Revenue!B17',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[partnerFormula]]
    }
  });

  // Add total revenue formula
  const totalFormula = '=SUM(B14:B17)';
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Revenue!B19',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[totalFormula]]
    }
  });

  // Copy formulas across all months
  const copyFormulasRequests = [];
  for (let row of [10, 14, 15, 16, 17, 19]) {
    copyFormulasRequests.push({
      copyPaste: {
        source: {
          sheetId: await getSheetId(sheets, spreadsheetId, 'Revenue'),
          startRowIndex: row - 1,
          endRowIndex: row,
          startColumnIndex: 1,
          endColumnIndex: 2
        },
        destination: {
          sheetId: await getSheetId(sheets, spreadsheetId, 'Revenue'),
          startRowIndex: row - 1,
          endRowIndex: row,
          startColumnIndex: 2,
          endColumnIndex: 13
        },
        pasteType: 'PASTE_FORMULA'
      }
    });
  }

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: copyFormulasRequests
    }
  });
}

/**
 * Build the Expenses tab (simplified for brevity)
 */
async function buildExpensesTab(sheets, spreadsheetId) {
  console.log('Building Expenses tab...');
  
  // Headers
  const headers = [
    ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Total']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Expenses!A1:N1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: headers
    }
  });

  // Basic expense categories
  const expenses = [
    ['Fixed Expenses', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Technology', '2500', '2500', '2500', '2500', '2500', '2500', '2500', '2500', '2500', '2500', '2500', '2500', '=SUM(B3:M3)'],
    ['Salaries', '18000', '18000', '18000', '18000', '18000', '18000', '18000', '18000', '18000', '18000', '18000', '18000', '=SUM(B4:M4)'],
    ['Office/Admin', '3500', '3500', '3500', '3500', '3500', '3500', '3500', '3500', '3500', '3500', '3500', '3500', '=SUM(B5:M5)'],
    ['Legal/Professional', '1200', '1200', '1200', '1200', '1200', '1200', '1200', '1200', '1200', '1200', '1200', '1200', '=SUM(B6:M6)'],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Variable Expenses', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Marketing', '=Revenue!B10*Assumptions!B16', '=Revenue!C10*Assumptions!B16', '=Revenue!D10*Assumptions!B16', '=Revenue!E10*Assumptions!B16', '=Revenue!F10*Assumptions!B16', '=Revenue!G10*Assumptions!B16', '=Revenue!H10*Assumptions!B16', '=Revenue!I10*Assumptions!B16', '=Revenue!J10*Assumptions!B16', '=Revenue!K10*Assumptions!B16', '=Revenue!L10*Assumptions!B16', '=Revenue!M10*Assumptions!B16', '=SUM(B9:M9)'],
    ['Transaction Fees', '=Revenue!B19*0.025', '=Revenue!C19*0.025', '=Revenue!D19*0.025', '=Revenue!E19*0.025', '=Revenue!F19*0.025', '=Revenue!G19*0.025', '=Revenue!H19*0.025', '=Revenue!I19*0.025', '=Revenue!J19*0.025', '=Revenue!K19*0.025', '=Revenue!L19*0.025', '=Revenue!M19*0.025', '=SUM(B10:M10)'],
    ['Sales Commissions', '=Revenue!B19*0.05', '=Revenue!C19*0.05', '=Revenue!D19*0.05', '=Revenue!E19*0.05', '=Revenue!F19*0.05', '=Revenue!G19*0.05', '=Revenue!H19*0.05', '=Revenue!I19*0.05', '=Revenue!J19*0.05', '=Revenue!K19*0.05', '=Revenue!L19*0.05', '=Revenue!M19*0.05', '=SUM(B11:M11)'],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Total Expenses', '=SUM(B3:B6)+SUM(B9:B11)', '=SUM(C3:C6)+SUM(C9:C11)', '=SUM(D3:D6)+SUM(D9:D11)', '=SUM(E3:E6)+SUM(E9:E11)', '=SUM(F3:F6)+SUM(F9:F11)', '=SUM(G3:G6)+SUM(G9:G11)', '=SUM(H3:H6)+SUM(H9:H11)', '=SUM(I3:I6)+SUM(I9:I11)', '=SUM(J3:J6)+SUM(J9:J11)', '=SUM(K3:K6)+SUM(K9:K11)', '=SUM(L3:L6)+SUM(L9:L11)', '=SUM(M3:M6)+SUM(M9:M11)', '=SUM(N3:N6)+SUM(N9:N11)']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Expenses!A2:N13',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: expenses
    }
  });
}

/**
 * Build the Cash Flow tab
 */
async function buildCashFlowTab(sheets, spreadsheetId) {
  console.log('Building Cash Flow tab...');
  
  // Headers
  const headers = [
    ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Total']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Cash Flow!A1:N1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: headers
    }
  });

  // Basic cash flow structure
  const cashFlow = [
    ['Initial Investment', '250000', '', '', '', '', '', '', '', '', '', '', '', '250000'],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Revenue', '=Revenue!B19', '=Revenue!C19', '=Revenue!D19', '=Revenue!E19', '=Revenue!F19', '=Revenue!G19', '=Revenue!H19', '=Revenue!I19', '=Revenue!J19', '=Revenue!K19', '=Revenue!L19', '=Revenue!M19', '=SUM(B4:M4)'],
    ['Expenses', '=Expenses!B13', '=Expenses!C13', '=Expenses!D13', '=Expenses!E13', '=Expenses!F13', '=Expenses!G13', '=Expenses!H13', '=Expenses!I13', '=Expenses!J13', '=Expenses!K13', '=Expenses!L13', '=Expenses!M13', '=SUM(B5:M5)'],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Net Cash Flow', '=B4-B5', '=C4-C5', '=D4-D5', '=E4-E5', '=F4-F5', '=G4-G5', '=H4-H5', '=I4-I5', '=J4-J5', '=K4-K5', '=L4-L5', '=M4-M5', '=SUM(B7:M7)'],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Opening Balance', '=B2', '=B10', '=C10', '=D10', '=E10', '=F10', '=G10', '=H10', '=I10', '=J10', '=K10', '=L10', ''],
    ['Closing Balance', '=B9+B7', '=C9+C7', '=D9+D7', '=E9+E7', '=F9+F7', '=G9+G7', '=H9+H7', '=I9+I7', '=J9+J7', '=K9+K7', '=L9+L7', '=M9+M7', '=M10']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Cash Flow!A2:N10',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: cashFlow
    }
  });
}

/**
 * Build the P&L tab
 */
async function buildProfitLossTab(sheets, spreadsheetId) {
  console.log('Building P&L tab...');
  
  // Headers
  const headers = [
    ['', 'Q1', 'Q2', 'Q3', 'Q4', 'Year 1 Total']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'P&L!A1:F1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: headers
    }
  });

  // Basic P&L structure
  const pnl = [
    ['Revenue', '=SUM(Revenue!B19:D19)', '=SUM(Revenue!E19:G19)', '=SUM(Revenue!H19:J19)', '=SUM(Revenue!K19:M19)', '=SUM(B2:E2)'],
    ['Cost of Revenue', '=SUM(Revenue!B19:D19)*0.1', '=SUM(Revenue!E19:G19)*0.1', '=SUM(Revenue!H19:J19)*0.1', '=SUM(Revenue!K19:M19)*0.1', '=SUM(B3:E3)'],
    ['Gross Profit', '=B2-B3', '=C2-C3', '=D2-D3', '=E2-E3', '=F2-F3'],
    ['', '', '', '', '', ''],
    ['Operating Expenses', '=SUM(Expenses!B13:D13)', '=SUM(Expenses!E13:G13)', '=SUM(Expenses!H13:J13)', '=SUM(Expenses!K13:M13)', '=SUM(B6:E6)'],
    ['', '', '', '', '', ''],
    ['Operating Income', '=B4-B6', '=C4-C6', '=D4-D6', '=E4-E6', '=F4-F6'],
    ['', '', '', '', '', ''],
    ['Taxes (20%)', '=IF(B8>0,B8*0.2,0)', '=IF(C8>0,C8*0.2,0)', '=IF(D8>0,D8*0.2,0)', '=IF(E8>0,E8*0.2,0)', '=SUM(B10:E10)'],
    ['', '', '', '', '', ''],
    ['Net Income', '=B8-B10', '=C8-C10', '=D8-D10', '=E8-E10', '=F8-F10']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'P&L!A2:F12',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: pnl
    }
  });
}

/**
 * Build the Investor tab
 */
async function buildInvestorTab(sheets, spreadsheetId) {
  console.log('Building Investor tab...');
  
  // Headers
  const headers = [
    ['Investor Returns Analysis', '', '', '', '', '']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Investor!A1:F1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: headers
    }
  });

  // Basic investor metrics
  const investor = [
    ['Investment Parameters', '', '', '', '', ''],
    ['Investment Amount', '250000', '', '', '', ''],
    ['Equity Percentage', '8%', '', '', '', ''],
    ['Revenue Share', '5%', '', '', '', ''],
    ['Revenue Share Duration', '36 months', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['Year 1 Returns', '', '', '', '', ''],
    ['Revenue Share', '=SUM(Revenue!N19)*B5', '', '', '', ''],
    ['Equity Value (Year End)', '=P&L!F12*B4', '', '', '', ''],
    ['Total Year 1 Return', '=B9+B10', '', '', '', ''],
    ['ROI Year 1', '=B11/B3', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['Exit Valuation (Year 5)', '', '', '', '', ''],
    ['Revenue Multiple', '3.5', '', '', '', ''],
    ['Year 5 Revenue (Projected)', '=SUM(Revenue!N19)*1.5^4', '', '', '', ''],
    ['Company Valuation', '=B15*B16', '', '', '', ''],
    ['Investor Share Value', '=B17*B4', '', '', '', ''],
    ['Total Return (5 Years)', '=B18+(B9*3)', '', '', '', ''],
    ['ROI (5 Years)', '=B19/B3', '', '', '', ''],
    ['Annualized ROI', '=B20^(1/5)-1', '', '', '', '']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Investor!A2:F22',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: investor
    }
  });
}

/**
 * Build the Summary tab
 */
async function buildSummaryTab(sheets, spreadsheetId) {
  console.log('Building Summary tab...');
  
  // Header row
  const headerRow = [['Azure Yacht Group Financial Model - Executive Summary']];
  
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Summary!A1:A1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: headerRow
    }
  });

  // Key metrics
  const summary = [
    ['Key Financial Metrics', '', ''],
    ['Year 1 Revenue', '=SUM(Revenue!N19)', ''],
    ['Year 1 Net Income', '=P&L!F12', ''],
    ['Year 1 Profit Margin', '=P&L!F12/SUM(Revenue!N19)', ''],
    ['Year 1 Cash Position', '=Cash Flow!M10', ''],
    ['', '', ''],
    ['Investor Metrics', '', ''],
    ['Investment Amount', '=Investor!B3', ''],
    ['Equity Percentage', '=Investor!B4', ''],
    ['Year 1 ROI', '=Investor!B12', ''],
    ['5-Year ROI', '=Investor!B20', ''],
    ['', '', ''],
    ['Operational Metrics', '', ''],
    ['Total Bookings (Year 1)', '=SUM(Revenue!B10:M10)', ''],
    ['Average Commission', '=SUM(Revenue!N19)/SUM(Revenue!B10:M10)', ''],
    ['Customer Acquisition Cost', '=Assumptions!B16', ''],
    ['LTV:CAC Ratio', '=B15*2.5/B16', '']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Summary!A3:C19',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: summary
    }
  });
}

/**
 * Build the Scenarios tab
 */
async function buildScenariosTab(sheets, spreadsheetId) {
  console.log('Building Scenarios tab...');
  
  const headers = [
    ['Scenario Analysis', '', '', '']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Scenarios!A1:D1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: headers
    }
  });

  // Scenario headers
  const scenarioHeaders = [
    ['Metric', 'Base Case', 'Best Case', 'Worst Case']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Scenarios!A3:D3',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: scenarioHeaders
    }
  });

  // Create rows for key metrics
  const scenarioRows = [
    ['Average Charter Value', '35000', '45000', '25000'],
    ['Commission Rate', '17.5%', '20%', '15%'],
    ['Monthly Bookings Growth', '8%', '12%', '5%'],
    ['Marketing CAC', '1200', '900', '1500'],
    ['Conversion Rate', '3.5%', '5%', '2%'],
    ['', '', '', ''],
    ['Year 1 Revenue', '=SUM(Revenue!N19)', '=SUM(Revenue!N19)*1.25', '=SUM(Revenue!N19)*0.7'],
    ['Year 1 Net Income', '=P&L!F12', '=P&L!F12*1.5', '=P&L!F12*0.5'],
    ['Year 1 Cash Position', '=Cash Flow!M10', '=Cash Flow!M10*1.2', '=Cash Flow!M10*0.8'],
    ['5-Year ROI', '=Investor!B20', '=Investor!B20*1.4', '=Investor!B20*0.6']
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Scenarios!A4:D13',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: scenarioRows
    }
  });
}

/**
 * Format the spreadsheet
 */
async function formatSpreadsheet(sheets, spreadsheetId) {
  console.log('Applying formatting...');
  
  // Get all sheet IDs
  const sheetNames = ['Summary', 'Assumptions', 'Revenue', 'Expenses', 'Cash Flow', 'P&L', 'Investor', 'Scenarios'];
  const formatRequests = [];
  
  for (const sheetName of sheetNames) {
    const sheetId = await getSheetId(sheets, spreadsheetId, sheetName);
    
    // Format headers bold
    formatRequests.push({
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 0,
          endRowIndex: 1
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true,
              fontSize: 12
            },
            backgroundColor: {
              red: 0.9,
              green: 0.9,
              blue: 0.9
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    });
    
    // Format section headers bold
    if (sheetName === 'Summary' || sheetName === 'Assumptions' || sheetName === 'Investor') {
      formatRequests.push({
        repeatCell: {
          range: {
            sheetId: sheetId,
            startRowIndex: 1,
            endRowIndex: 20,
            startColumnIndex: 0,
            endColumnIndex: 1
          },
          cell: {
            userEnteredFormat: {
              textFormat: { 
                bold: true
              }
            }
          },
          fields: 'userEnteredFormat.textFormat.bold'
        }
      });
    }
  }
  
  // Apply all formatting
  if (formatRequests.length > 0) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: formatRequests
      }
    });
  }
}

/**
 * Main function to create financial model
 */
async function createFinancialModel() {
  rl.question('Enter spreadsheet title (default: Azure Yacht Group Financial Model): ', async (title) => {
    try {
      const modelTitle = title || 'Azure Yacht Group Financial Model';
      console.log(`\nCreating financial model: "${modelTitle}"...`);
      
      // Initialize Google APIs
      const { sheets, drive } = await initGoogleApis();
      
      // Create spreadsheet
      const spreadsheet = await createSpreadsheet(sheets, modelTitle);
      const spreadsheetId = spreadsheet.spreadsheetId;
      
      // Create tabs
      await createModelTabs(sheets, spreadsheetId);
      
      // Update assumptions
      await updateAssumptions(sheets, spreadsheetId, defaultAssumptions);
      
      // Build all tabs
      await buildRevenueTab(sheets, spreadsheetId);
      await buildExpensesTab(sheets, spreadsheetId);
      await buildCashFlowTab(sheets, spreadsheetId);
      await buildProfitLossTab(sheets, spreadsheetId);
      await buildInvestorTab(sheets, spreadsheetId);
      await buildSummaryTab(sheets, spreadsheetId);
      await buildScenariosTab(sheets, spreadsheetId);
      
      // Format spreadsheet
      await formatSpreadsheet(sheets, spreadsheetId);
      
      // Ask if user wants to share the spreadsheet
      rl.question('\nWould you like to share this spreadsheet with your email? (y/n): ', async (answer) => {
        if (answer.toLowerCase() === 'y') {
          rl.question('Enter your email address: ', async (email) => {
            if (email && email.includes('@')) {
              await shareSpreadsheet(drive, spreadsheetId, email);
            } else {
              console.log('Invalid email address. Skipping sharing.');
            }
            displayResults(spreadsheetId);
          });
        } else {
          displayResults(spreadsheetId);
        }
      });
      
    } catch (error) {
      console.error('Error creating financial model:', error);
      rl.close();
    }
  });
}

function displayResults(spreadsheetId) {
  console.log('\n======================================================');
  console.log('Financial model created successfully!');
  console.log('======================================================');
  console.log(`Spreadsheet ID: ${spreadsheetId}`);
  console.log(`URL: https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`);
  console.log('\nOpen this URL in your browser to view your financial model.');
  console.log('======================================================');
  rl.close();
}

// Start the process
createFinancialModel(); 