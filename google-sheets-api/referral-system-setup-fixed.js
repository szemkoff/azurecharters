/**
 * Azure Yacht Group - Referral System Setup Script (Fixed Version)
 * This script creates all necessary tabs and tables for the referral system
 * Compatible with Trello-Zapier-HubSpot integration
 */

function setupReferralSystem() {
  try {
    // Get the active spreadsheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    
    if (!spreadsheet) {
      throw new Error('No active spreadsheet found. Please run this script from within a Google Sheets document.');
    }
    
    // Show progress
    SpreadsheetApp.getUi().alert('Setup Starting', 'Setting up your referral system. This may take a few moments...', SpreadsheetApp.getUi().ButtonSet.OK);
    
    // Clear existing sheets (except the first one)
    clearExistingSheets(spreadsheet);
    
    // Create all necessary sheets
    createPartnersSheet(spreadsheet);
    createReferralsSheet(spreadsheet);
    createCommissionsSheet(spreadsheet);
    createDashboardSheet(spreadsheet);
    createSettingsSheet(spreadsheet);
    createReportsSheet(spreadsheet);
    
    // Set up data validation and formatting
    setupDataValidation(spreadsheet);
    setupConditionalFormatting(spreadsheet);
    
    // Create named ranges for easier reference
    createNamedRanges(spreadsheet);
    
    SpreadsheetApp.getUi().alert('Setup Complete!', 
      'Your referral system has been set up successfully!\n\n' +
      'Created tabs:\n' +
      '• Partners - Manage partner information\n' +
      '• Referrals - Track all referrals\n' +
      '• Commissions - Monitor payments\n' +
      '• Dashboard - View KPIs\n' +
      '• Settings - Configure system\n' +
      '• Reports - Analyze performance\n\n' +
      'Next: Add your partners in the Partners tab and set up Zapier integration.',
      SpreadsheetApp.getUi().ButtonSet.OK);
      
  } catch (error) {
    console.error('Setup failed:', error);
    SpreadsheetApp.getUi().alert('Setup Error', 
      'Setup failed with error: ' + error.message + '\n\n' +
      'Please try:\n' +
      '1. Make sure you\'re running this from within Google Sheets\n' +
      '2. Check that you have edit permissions\n' +
      '3. Try refreshing the page and running again',
      SpreadsheetApp.getUi().ButtonSet.OK);
  }
}

function clearExistingSheets(spreadsheet) {
  const sheets = spreadsheet.getSheets();
  const sheetsToKeep = ['Sheet1']; // Keep the default sheet
  
  sheets.forEach(sheet => {
    const sheetName = sheet.getName();
    if (!sheetsToKeep.includes(sheetName) && 
        !['Partners', 'Referrals', 'Commissions', 'Dashboard', 'Settings', 'Reports'].includes(sheetName)) {
      try {
        spreadsheet.deleteSheet(sheet);
      } catch (e) {
        console.log('Could not delete sheet:', sheetName);
      }
    }
  });
}

function createPartnersSheet(spreadsheet) {
  try {
    // Check if sheet already exists
    let sheet = spreadsheet.getSheetByName('Partners');
    if (sheet) {
      spreadsheet.deleteSheet(sheet);
    }
    
    // Create new sheet
    sheet = spreadsheet.insertSheet('Partners');
    
    // Headers
    const headers = [
      'Partner ID', 'Partner Name', 'Company', 'Email', 'Phone', 
      'Partner Type', 'Commission Tier', 'Status', 'Join Date', 
      'Total Referrals', 'Total Revenue', 'Total Commission', 
      'Last Activity', 'Notes'
    ];
    
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setValues([headers]);
    
    // Sample data
    const sampleData = [
      ['AZURE-JOHN', 'John Smith', 'Luxury Travel Co', 'john@luxurytravel.com', '+1-555-0123', 
       'Travel Advisor', 'Tier 2', 'Active', new Date('2025-01-01'), 5, 25000, 1000, new Date('2025-01-15'), 'Top performer'],
      ['AZURE-SARAH', 'Sarah Johnson', 'Elite Concierge', 'sarah@eliteconcierge.com', '+1-555-0456', 
       'Concierge Service', 'Tier 3', 'Active', new Date('2025-01-05'), 3, 45000, 900, new Date('2025-01-14'), 'High-value clients'],
      ['AZURE-MIKE', 'Mike Wilson', 'Yacht Brokers Inc', 'mike@yachtbrokers.com', '+1-555-0789', 
       'Yacht Broker', 'Tier 1', 'Active', new Date('2025-01-10'), 2, 8000, 200, new Date('2025-01-12'), 'New partner']
    ];
    
    if (sampleData.length > 0) {
      sheet.getRange(2, 1, sampleData.length, sampleData[0].length).setValues(sampleData);
    }
    
    // Formatting
    headerRange.setFontWeight('bold').setBackground('#4285f4').setFontColor('white');
    sheet.setFrozenRows(1);
    
    // Auto-resize columns
    for (let i = 1; i <= headers.length; i++) {
      sheet.autoResizeColumn(i);
    }
    
    console.log('Partners sheet created successfully');
    
  } catch (error) {
    console.error('Error creating Partners sheet:', error);
    throw new Error('Failed to create Partners sheet: ' + error.message);
  }
}

function createReferralsSheet(spreadsheet) {
  try {
    let sheet = spreadsheet.getSheetByName('Referrals');
    if (sheet) {
      spreadsheet.deleteSheet(sheet);
    }
    
    sheet = spreadsheet.insertSheet('Referrals');
    
    const headers = [
      'Referral ID', 'Partner ID', 'Partner Name', 'Customer Name', 'Customer Email', 
      'Customer Phone', 'Yacht Type', 'Charter Date', 'Charter Value', 'Commission Rate', 
      'Commission Amount', 'Status', 'Created Date', 'Conversion Date', 'HubSpot Deal ID', 
      'Trello Card ID', 'Notes'
    ];
    
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setValues([headers]);
    
    const sampleData = [
      ['REF-001', 'AZURE-JOHN', 'John Smith', 'Robert Davis', 'robert@email.com', '+1-555-1111', 
       'Luxury Charter', new Date('2025-02-15'), 15000, '6%', 900, 'Converted', new Date('2025-01-10'), new Date('2025-01-15'), 'DEAL-123', 'CARD-456', 'Smooth conversion'],
      ['REF-002', 'AZURE-SARAH', 'Sarah Johnson', 'Emily Chen', 'emily@email.com', '+1-555-2222', 
       'Motor Yacht', new Date('2025-03-01'), 25000, '4%', 1000, 'In Progress', new Date('2025-01-12'), '', 'DEAL-124', 'CARD-457', 'High-value prospect'],
      ['REF-003', 'AZURE-MIKE', 'Mike Wilson', 'David Brown', 'david@email.com', '+1-555-3333', 
       'Catamaran', new Date('2025-02-28'), 8000, '2.5%', 200, 'New Lead', new Date('2025-01-14'), '', 'DEAL-125', 'CARD-458', 'First-time charter']
    ];
    
    if (sampleData.length > 0) {
      sheet.getRange(2, 1, sampleData.length, sampleData[0].length).setValues(sampleData);
    }
    
    headerRange.setFontWeight('bold').setBackground('#34a853').setFontColor('white');
    sheet.setFrozenRows(1);
    
    for (let i = 1; i <= headers.length; i++) {
      sheet.autoResizeColumn(i);
    }
    
    console.log('Referrals sheet created successfully');
    
  } catch (error) {
    console.error('Error creating Referrals sheet:', error);
    throw new Error('Failed to create Referrals sheet: ' + error.message);
  }
}

function createCommissionsSheet(spreadsheet) {
  try {
    let sheet = spreadsheet.getSheetByName('Commissions');
    if (sheet) {
      spreadsheet.deleteSheet(sheet);
    }
    
    sheet = spreadsheet.insertSheet('Commissions');
    
    const headers = [
      'Commission ID', 'Partner ID', 'Partner Name', 'Referral ID', 'Charter Value', 
      'Commission Rate', 'Commission Amount', 'Payment Status', 'Payment Date', 
      'Payment Method', 'Transaction ID', 'Month', 'Quarter', 'Year', 'Notes'
    ];
    
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setValues([headers]);
    
    const sampleData = [
      ['COM-001', 'AZURE-JOHN', 'John Smith', 'REF-001', 15000, '6%', 900, 'Paid', new Date('2025-01-20'), 'Bank Transfer', 'TXN-001', 'January', 'Q1', 2025, 'Paid on time'],
      ['COM-002', 'AZURE-SARAH', 'Sarah Johnson', 'REF-002', 25000, '4%', 1000, 'Pending', '', '', '', 'January', 'Q1', 2025, 'Awaiting charter completion'],
      ['COM-003', 'AZURE-MIKE', 'Mike Wilson', 'REF-003', 8000, '2.5%', 200, 'Pending', '', '', '', 'January', 'Q1', 2025, 'New referral']
    ];
    
    if (sampleData.length > 0) {
      sheet.getRange(2, 1, sampleData.length, sampleData[0].length).setValues(sampleData);
    }
    
    headerRange.setFontWeight('bold').setBackground('#ff9900').setFontColor('white');
    sheet.setFrozenRows(1);
    
    for (let i = 1; i <= headers.length; i++) {
      sheet.autoResizeColumn(i);
    }
    
    console.log('Commissions sheet created successfully');
    
  } catch (error) {
    console.error('Error creating Commissions sheet:', error);
    throw new Error('Failed to create Commissions sheet: ' + error.message);
  }
}

function createDashboardSheet(spreadsheet) {
  try {
    let sheet = spreadsheet.getSheetByName('Dashboard');
    if (sheet) {
      spreadsheet.deleteSheet(sheet);
    }
    
    sheet = spreadsheet.insertSheet('Dashboard');
    
    // Title
    sheet.getRange('A1').setValue('Azure Yacht Group - Referral System Dashboard');
    sheet.getRange('A1').setFontSize(18).setFontWeight('bold').setBackground('#4285f4').setFontColor('white');
    sheet.getRange('A1:H1').merge();
    
    // KPI Section
    sheet.getRange('A3').setValue('Key Performance Indicators');
    sheet.getRange('A3').setFontSize(14).setFontWeight('bold');
    
    const kpiHeaders = ['Metric', 'This Month', 'Last Month', 'YTD', 'Target', 'Status'];
    sheet.getRange('A4:F4').setValues([kpiHeaders]);
    sheet.getRange('A4:F4').setFontWeight('bold').setBackground('#e8f0fe');
    
    // Simple KPI data (without complex formulas that might cause issues)
    const kpiData = [
      ['Total Referrals', 3, 2, 5, 30, '⚠️'],
      ['Conversion Rate', '33%', '50%', '40%', '25%', '✅'],
      ['Total Revenue', 48000, 35000, 83000, 500000, '⚠️'],
      ['Commission Paid', 900, 800, 1700, 15000, '⚠️'],
      ['Active Partners', 3, 3, 3, 20, '⚠️']
    ];
    
    sheet.getRange(5, 1, kpiData.length, kpiData[0].length).setValues(kpiData);
    
    // Top Partners Section
    sheet.getRange('A12').setValue('Top Partners This Month');
    sheet.getRange('A12').setFontSize(14).setFontWeight('bold');
    
    const partnerHeaders = ['Partner Name', 'Company', 'Referrals', 'Revenue', 'Commission'];
    sheet.getRange('A13:E13').setValues([partnerHeaders]);
    sheet.getRange('A13:E13').setFontWeight('bold').setBackground('#e8f0fe');
    
    // Sample partner data
    const topPartners = [
      ['John Smith', 'Luxury Travel Co', 1, 15000, 900],
      ['Sarah Johnson', 'Elite Concierge', 1, 25000, 1000],
      ['Mike Wilson', 'Yacht Brokers Inc', 1, 8000, 200]
    ];
    
    sheet.getRange(14, 1, topPartners.length, topPartners[0].length).setValues(topPartners);
    
    // Recent Activity Section
    sheet.getRange('G12').setValue('Recent Activity');
    sheet.getRange('G12').setFontSize(14).setFontWeight('bold');
    
    const activityHeaders = ['Date', 'Activity', 'Partner', 'Amount'];
    sheet.getRange('G13:J13').setValues([activityHeaders]);
    sheet.getRange('G13:J13').setFontWeight('bold').setBackground('#e8f0fe');
    
    // Auto-resize columns
    for (let i = 1; i <= 10; i++) {
      sheet.autoResizeColumn(i);
    }
    
    console.log('Dashboard sheet created successfully');
    
  } catch (error) {
    console.error('Error creating Dashboard sheet:', error);
    throw new Error('Failed to create Dashboard sheet: ' + error.message);
  }
}

function createSettingsSheet(spreadsheet) {
  try {
    let sheet = spreadsheet.getSheetByName('Settings');
    if (sheet) {
      spreadsheet.deleteSheet(sheet);
    }
    
    sheet = spreadsheet.insertSheet('Settings');
    
    // Title
    sheet.getRange('A1').setValue('Referral System Settings');
    sheet.getRange('A1').setFontSize(16).setFontWeight('bold');
    
    // Commission Tiers
    sheet.getRange('A3').setValue('Commission Tiers');
    sheet.getRange('A3').setFontSize(14).setFontWeight('bold');
    
    const tierHeaders = ['Tier', 'Min Revenue', 'Max Revenue', 'Commission Rate', 'Description'];
    sheet.getRange('A4:E4').setValues([tierHeaders]);
    sheet.getRange('A4:E4').setFontWeight('bold').setBackground('#e8f0fe');
    
    const tierData = [
      ['Tier 1', 0, 9999, 0.025, 'Standard charters under $10K'],
      ['Tier 2', 10000, 24999, 0.04, 'Mid-range charters $10K-$25K'],
      ['Tier 3', 25000, 999999, 0.06, 'Luxury charters $25K+']
    ];
    
    sheet.getRange(5, 1, tierData.length, tierData[0].length).setValues(tierData);
    
    // Partner Types
    sheet.getRange('A10').setValue('Partner Types');
    sheet.getRange('A10').setFontSize(14).setFontWeight('bold');
    
    const typeHeaders = ['Partner Type', 'Description', 'Default Tier'];
    sheet.getRange('A11:C11').setValues([typeHeaders]);
    sheet.getRange('A11:C11').setFontWeight('bold').setBackground('#e8f0fe');
    
    const typeData = [
      ['Travel Advisor', 'Travel agencies and advisors', 'Tier 2'],
      ['Concierge Service', 'Hotel and luxury concierge services', 'Tier 3'],
      ['Yacht Broker', 'Yacht brokers and marine professionals', 'Tier 1'],
      ['Event Planner', 'Event planning companies', 'Tier 2'],
      ['Wealth Manager', 'Financial advisors and wealth managers', 'Tier 3']
    ];
    
    sheet.getRange(12, 1, typeData.length, typeData[0].length).setValues(typeData);
    
    // System Settings
    sheet.getRange('A19').setValue('System Settings');
    sheet.getRange('A19').setFontSize(14).setFontWeight('bold');
    
    const systemHeaders = ['Setting', 'Value', 'Description'];
    sheet.getRange('A20:C20').setValues([systemHeaders]);
    sheet.getRange('A20:C20').setFontWeight('bold').setBackground('#e8f0fe');
    
    const systemData = [
      ['Currency', 'USD', 'Default currency for all transactions'],
      ['Payment Terms', '30 days', 'Commission payment terms'],
      ['Min Charter Value', '$1,000', 'Minimum charter value for commission'],
      ['Auto Partner ID', 'AZURE-', 'Prefix for auto-generated partner IDs'],
      ['Zapier Webhook URL', 'https://hooks.zapier.com/hooks/catch/...', 'Webhook URL for Zapier integration']
    ];
    
    sheet.getRange(21, 1, systemData.length, systemData[0].length).setValues(systemData);
    
    // Format commission rates as percentages
    sheet.getRange('D5:D7').setNumberFormat('0.0%');
    
    // Auto-resize columns
    for (let i = 1; i <= 5; i++) {
      sheet.autoResizeColumn(i);
    }
    
    console.log('Settings sheet created successfully');
    
  } catch (error) {
    console.error('Error creating Settings sheet:', error);
    throw new Error('Failed to create Settings sheet: ' + error.message);
  }
}

function createReportsSheet(spreadsheet) {
  try {
    let sheet = spreadsheet.getSheetByName('Reports');
    if (sheet) {
      spreadsheet.deleteSheet(sheet);
    }
    
    sheet = spreadsheet.insertSheet('Reports');
    
    // Title
    sheet.getRange('A1').setValue('Referral System Reports');
    sheet.getRange('A1').setFontSize(16).setFontWeight('bold');
    
    // Monthly Summary
    sheet.getRange('A3').setValue('Monthly Summary');
    sheet.getRange('A3').setFontSize(14).setFontWeight('bold');
    
    const monthlyHeaders = ['Month', 'Total Referrals', 'Conversions', 'Conversion Rate', 'Total Revenue', 'Commission Paid', 'ROI'];
    sheet.getRange('A4:G4').setValues([monthlyHeaders]);
    sheet.getRange('A4:G4').setFontWeight('bold').setBackground('#e8f0fe');
    
    // Partner Performance
    sheet.getRange('A12').setValue('Partner Performance');
    sheet.getRange('A12').setFontSize(14).setFontWeight('bold');
    
    const partnerHeaders = ['Partner Name', 'Total Referrals', 'Conversions', 'Conversion Rate', 'Total Revenue', 'Commission Earned', 'Avg Deal Size'];
    sheet.getRange('A13:G13').setValues([partnerHeaders]);
    sheet.getRange('A13:G13').setFontWeight('bold').setBackground('#e8f0fe');
    
    // Revenue by Charter Type
    sheet.getRange('A21').setValue('Revenue by Charter Type');
    sheet.getRange('A21').setFontSize(14).setFontWeight('bold');
    
    const chartHeaders = ['Charter Type', 'Count', 'Total Revenue', 'Avg Revenue', 'Commission Paid'];
    sheet.getRange('A22:E22').setValues([chartHeaders]);
    sheet.getRange('A22:E22').setFontWeight('bold').setBackground('#e8f0fe');
    
    // Auto-resize columns
    for (let i = 1; i <= 7; i++) {
      sheet.autoResizeColumn(i);
    }
    
    console.log('Reports sheet created successfully');
    
  } catch (error) {
    console.error('Error creating Reports sheet:', error);
    throw new Error('Failed to create Reports sheet: ' + error.message);
  }
}

function setupDataValidation(spreadsheet) {
  try {
    const partnersSheet = spreadsheet.getSheetByName('Partners');
    const referralsSheet = spreadsheet.getSheetByName('Referrals');
    const commissionsSheet = spreadsheet.getSheetByName('Commissions');
    
    if (!partnersSheet || !referralsSheet || !commissionsSheet) {
      console.log('Some sheets not found for data validation');
      return;
    }
    
    // Partner Type validation
    const partnerTypes = ['Travel Advisor', 'Concierge Service', 'Yacht Broker', 'Event Planner', 'Wealth Manager'];
    const partnerTypeRule = SpreadsheetApp.newDataValidation().requireValueInList(partnerTypes).build();
    partnersSheet.getRange('F2:F1000').setDataValidation(partnerTypeRule);
    
    // Commission Tier validation
    const commissionTiers = ['Tier 1', 'Tier 2', 'Tier 3'];
    const tierRule = SpreadsheetApp.newDataValidation().requireValueInList(commissionTiers).build();
    partnersSheet.getRange('G2:G1000').setDataValidation(tierRule);
    
    // Status validation
    const statusOptions = ['Active', 'Inactive', 'Pending'];
    const statusRule = SpreadsheetApp.newDataValidation().requireValueInList(statusOptions).build();
    partnersSheet.getRange('H2:H1000').setDataValidation(statusRule);
    
    // Referral Status validation
    const referralStatuses = ['New Lead', 'Qualified', 'In Progress', 'Converted', 'Lost'];
    const referralStatusRule = SpreadsheetApp.newDataValidation().requireValueInList(referralStatuses).build();
    referralsSheet.getRange('L2:L1000').setDataValidation(referralStatusRule);
    
    // Payment Status validation
    const paymentStatuses = ['Pending', 'Paid', 'Cancelled'];
    const paymentStatusRule = SpreadsheetApp.newDataValidation().requireValueInList(paymentStatuses).build();
    commissionsSheet.getRange('H2:H1000').setDataValidation(paymentStatusRule);
    
    // Yacht Type validation
    const yachtTypes = ['Luxury Charter', 'Motor Yacht', 'Sailing Yacht', 'Catamaran', 'Bareboat'];
    const yachtTypeRule = SpreadsheetApp.newDataValidation().requireValueInList(yachtTypes).build();
    referralsSheet.getRange('G2:G1000').setDataValidation(yachtTypeRule);
    
    console.log('Data validation setup completed');
    
  } catch (error) {
    console.error('Error setting up data validation:', error);
    // Don't throw error - this is not critical for basic functionality
  }
}

function setupConditionalFormatting(spreadsheet) {
  try {
    const partnersSheet = spreadsheet.getSheetByName('Partners');
    const referralsSheet = spreadsheet.getSheetByName('Referrals');
    const commissionsSheet = spreadsheet.getSheetByName('Commissions');
    
    if (!partnersSheet || !referralsSheet || !commissionsSheet) {
      console.log('Some sheets not found for conditional formatting');
      return;
    }
    
    // Partner Status formatting
    const activeRule = SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo('Active')
      .setBackground('#d9ead3')
      .setRanges([partnersSheet.getRange('H2:H1000')])
      .build();
    
    const inactiveRule = SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo('Inactive')
      .setBackground('#f4cccc')
      .setRanges([partnersSheet.getRange('H2:H1000')])
      .build();
    
    // Referral Status formatting
    const convertedRule = SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo('Converted')
      .setBackground('#d9ead3')
      .setRanges([referralsSheet.getRange('L2:L1000')])
      .build();
    
    const lostRule = SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo('Lost')
      .setBackground('#f4cccc')
      .setRanges([referralsSheet.getRange('L2:L1000')])
      .build();
    
    // Payment Status formatting
    const paidRule = SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo('Paid')
      .setBackground('#d9ead3')
      .setRanges([commissionsSheet.getRange('H2:H1000')])
      .build();
    
    const pendingRule = SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo('Pending')
      .setBackground('#fff2cc')
      .setRanges([commissionsSheet.getRange('H2:H1000')])
      .build();
    
    // Apply rules
    partnersSheet.setConditionalFormatRules([activeRule, inactiveRule]);
    referralsSheet.setConditionalFormatRules([convertedRule, lostRule]);
    commissionsSheet.setConditionalFormatRules([paidRule, pendingRule]);
    
    console.log('Conditional formatting setup completed');
    
  } catch (error) {
    console.error('Error setting up conditional formatting:', error);
    // Don't throw error - this is not critical for basic functionality
  }
}

function createNamedRanges(spreadsheet) {
  try {
    const partnersSheet = spreadsheet.getSheetByName('Partners');
    const referralsSheet = spreadsheet.getSheetByName('Referrals');
    const commissionsSheet = spreadsheet.getSheetByName('Commissions');
    const settingsSheet = spreadsheet.getSheetByName('Settings');
    
    if (partnersSheet) {
      spreadsheet.setNamedRange('PartnersData', partnersSheet.getRange('A2:N1000'));
    }
    
    if (referralsSheet) {
      spreadsheet.setNamedRange('ReferralsData', referralsSheet.getRange('A2:Q1000'));
    }
    
    if (commissionsSheet) {
      spreadsheet.setNamedRange('CommissionsData', commissionsSheet.getRange('A2:O1000'));
    }
    
    if (settingsSheet) {
      spreadsheet.setNamedRange('CommissionTiers', settingsSheet.getRange('A5:E7'));
      spreadsheet.setNamedRange('PartnerTypes', settingsSheet.getRange('A12:C16'));
    }
    
    console.log('Named ranges created successfully');
    
  } catch (error) {
    console.error('Error creating named ranges:', error);
    // Don't throw error - this is not critical for basic functionality
  }
}

// Menu function to add custom menu
function onOpen() {
  try {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('Referral System')
      .addItem('Setup System', 'setupReferralSystem')
      .addItem('Add Sample Data', 'addSampleData')
      .addItem('Test Zapier Integration', 'testZapierIntegration')
      .addToUi();
  } catch (error) {
    console.error('Error creating menu:', error);
  }
}

// Function to add more sample data for testing
function addSampleData() {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const partnersSheet = spreadsheet.getSheetByName('Partners');
    const referralsSheet = spreadsheet.getSheetByName('Referrals');
    
    if (!partnersSheet || !referralsSheet) {
      SpreadsheetApp.getUi().alert('Error', 'Partners or Referrals sheet not found. Please run Setup System first.', SpreadsheetApp.getUi().ButtonSet.OK);
      return;
    }
    
    // Add more partners
    const morePartners = [
      ['AZURE-LISA', 'Lisa Chen', 'Premium Events', 'lisa@premiumevents.com', '+1-555-1010', 
       'Event Planner', 'Tier 2', 'Active', new Date('2025-01-08'), 4, 32000, 1280, new Date('2025-01-16'), 'Corporate events specialist'],
      ['AZURE-TOM', 'Tom Anderson', 'Wealth Advisory Group', 'tom@wealthadvisory.com', '+1-555-2020', 
       'Wealth Manager', 'Tier 3', 'Active', new Date('2025-01-12'), 2, 55000, 3300, new Date('2025-01-17'), 'High net worth clients']
    ];
    
    morePartners.forEach(partner => partnersSheet.appendRow(partner));
    
    // Add more referrals
    const moreReferrals = [
      ['REF-004', 'AZURE-LISA', 'Lisa Chen', 'Amanda White', 'amanda@email.com', '+1-555-4444', 
       'Sailing Yacht', new Date('2025-03-15'), 18000, '4%', 720, 'Qualified', new Date('2025-01-16'), '', 'DEAL-126', 'CARD-459', 'Corporate retreat'],
      ['REF-005', 'AZURE-TOM', 'Tom Anderson', 'Richard Gold', 'richard@email.com', '+1-555-5555', 
       'Luxury Charter', new Date('2025-04-01'), 35000, '6%', 2100, 'In Progress', new Date('2025-01-17'), '', 'DEAL-127', 'CARD-460', 'VIP client referral']
    ];
    
    moreReferrals.forEach(referral => referralsSheet.appendRow(referral));
    
    SpreadsheetApp.getUi().alert('Success', 'Sample data added successfully!', SpreadsheetApp.getUi().ButtonSet.OK);
    
  } catch (error) {
    console.error('Error adding sample data:', error);
    SpreadsheetApp.getUi().alert('Error', 'Failed to add sample data: ' + error.message, SpreadsheetApp.getUi().ButtonSet.OK);
  }
}

// Function to test Zapier integration
function testZapierIntegration() {
  try {
    // Test adding a referral
    const testReferral = addReferral(
      'AZURE-JOHN', 
      'Test Customer', 
      'test@example.com', 
      '+1-555-9999', 
      'Luxury Charter', 
      new Date('2025-03-01'), 
      20000
    );
    
    SpreadsheetApp.getUi().alert('Test Successful', 
      'Test referral created successfully!\n\n' +
      'Referral ID: ' + testReferral + '\n\n' +
      'Check the Referrals tab to see the new entry.',
      SpreadsheetApp.getUi().ButtonSet.OK);
      
  } catch (error) {
    console.error('Error testing Zapier integration:', error);
    SpreadsheetApp.getUi().alert('Test Failed', 'Zapier integration test failed: ' + error.message, SpreadsheetApp.getUi().ButtonSet.OK);
  }
}

// Helper functions for Zapier integration
function addReferral(partnerCode, customerName, customerEmail, customerPhone, yachtType, charterDate, charterValue) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const referralsSheet = spreadsheet.getSheetByName('Referrals');
    const partnersSheet = spreadsheet.getSheetByName('Partners');
    
    if (!referralsSheet || !partnersSheet) {
      throw new Error('Required sheets not found');
    }
    
    // Find partner info
    const partnersData = partnersSheet.getDataRange().getValues();
    let partnerName = '';
    let commissionRate = 0;
    
    for (let i = 1; i < partnersData.length; i++) {
      if (partnersData[i][0] === partnerCode) {
        partnerName = partnersData[i][1];
        const tier = partnersData[i][6];
        commissionRate = tier === 'Tier 1' ? 0.025 : tier === 'Tier 2' ? 0.04 : 0.06;
        break;
      }
    }
    
    // Generate referral ID
    const referralId = 'REF-' + Utilities.formatDate(new Date(), 'GMT', 'yyyyMMdd') + '-' + Math.floor(Math.random() * 1000);
    
    // Calculate commission
    const commissionAmount = charterValue * commissionRate;
    
    // Add new row
    const newRow = [
      referralId, partnerCode, partnerName, customerName, customerEmail, customerPhone,
      yachtType, charterDate, charterValue, (commissionRate * 100) + '%', commissionAmount,
      'New Lead', new Date(), '', '', '', ''
    ];
    
    referralsSheet.appendRow(newRow);
    
    return referralId;
    
  } catch (error) {
    console.error('Error adding referral:', error);
    throw error;
  }
}

// Function to update referral status (called by Zapier when deal moves in HubSpot)
function updateReferralStatus(referralId, status, hubspotDealId) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const referralsSheet = spreadsheet.getSheetByName('Referrals');
    
    if (!referralsSheet) {
      throw new Error('Referrals sheet not found');
    }
    
    const data = referralsSheet.getDataRange().getValues();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === referralId) {
        referralsSheet.getRange(i + 1, 12).setValue(status); // Status column
        referralsSheet.getRange(i + 1, 15).setValue(hubspotDealId); // HubSpot Deal ID
        
        if (status === 'Converted') {
          referralsSheet.getRange(i + 1, 14).setValue(new Date()); // Conversion date
          
          // Create commission record
          createCommissionRecord(data[i]);
        }
        break;
      }
    }
    
    return 'Status updated successfully';
    
  } catch (error) {
    console.error('Error updating referral status:', error);
    throw error;
  }
}

// Function to create commission record
function createCommissionRecord(referralData) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const commissionsSheet = spreadsheet.getSheetByName('Commissions');
    
    if (!commissionsSheet) {
      throw new Error('Commissions sheet not found');
    }
    
    const commissionId = 'COM-' + Utilities.formatDate(new Date(), 'GMT', 'yyyyMMdd') + '-' + Math.floor(Math.random() * 1000);
    const currentDate = new Date();
    
    const newCommission = [
      commissionId, referralData[1], referralData[2], referralData[0], referralData[8],
      referralData[9], referralData[10], 'Pending', '', '', '',
      Utilities.formatDate(currentDate, 'GMT', 'MMMM'),
      'Q' + Math.ceil((currentDate.getMonth() + 1) / 3),
      currentDate.getFullYear(), 'Commission earned from referral conversion'
    ];
    
    commissionsSheet.appendRow(newCommission);
    
  } catch (error) {
    console.error('Error creating commission record:', error);
    throw error;
  }
} 