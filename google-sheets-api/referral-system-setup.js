/**
 * Azure Yacht Group - Referral System Setup Script
 * This script creates all necessary tabs and tables for the referral system
 * Compatible with Trello-Zapier-HubSpot integration
 */

function setupReferralSystem() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Create Partners sheet
  const partnersSheet = spreadsheet.insertSheet('Partners');
  const partnersHeaders = ['Partner ID', 'Partner Name', 'Company', 'Email', 'Phone', 'Partner Type', 'Commission Tier', 'Status', 'Join Date', 'Total Referrals', 'Total Revenue', 'Total Commission', 'Last Activity', 'Notes'];
  partnersSheet.getRange(1, 1, 1, partnersHeaders.length).setValues([partnersHeaders]);
  
  // Create Referrals sheet
  const referralsSheet = spreadsheet.insertSheet('Referrals');
  const referralsHeaders = ['Referral ID', 'Partner ID', 'Partner Name', 'Customer Name', 'Customer Email', 'Customer Phone', 'Yacht Type', 'Charter Date', 'Charter Value', 'Commission Rate', 'Commission Amount', 'Status', 'Created Date', 'Conversion Date', 'HubSpot Deal ID', 'Trello Card ID', 'Notes'];
  referralsSheet.getRange(1, 1, 1, referralsHeaders.length).setValues([referralsHeaders]);
  
  // Create Commissions sheet
  const commissionsSheet = spreadsheet.insertSheet('Commissions');
  const commissionsHeaders = ['Commission ID', 'Partner ID', 'Partner Name', 'Referral ID', 'Charter Value', 'Commission Rate', 'Commission Amount', 'Payment Status', 'Payment Date', 'Payment Method', 'Transaction ID', 'Month', 'Quarter', 'Year', 'Notes'];
  commissionsSheet.getRange(1, 1, 1, commissionsHeaders.length).setValues([commissionsHeaders]);
  
  SpreadsheetApp.getUi().alert('Basic setup complete! You can now add your data.');
}

function createPartnersSheet(spreadsheet) {
  const sheet = spreadsheet.insertSheet('Partners');
  
  // Headers
  const headers = [
    'Partner ID', 'Partner Name', 'Company', 'Email', 'Phone', 
    'Partner Type', 'Commission Tier', 'Status', 'Join Date', 
    'Total Referrals', 'Total Revenue', 'Total Commission', 
    'Last Activity', 'Notes'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Sample data
  const sampleData = [
    ['AZURE-JOHN', 'John Smith', 'Luxury Travel Co', 'john@luxurytravel.com', '+1-555-0123', 
     'Travel Advisor', 'Tier 2', 'Active', '2025-01-01', 5, 25000, 1000, '2025-01-15', 'Top performer'],
    ['AZURE-SARAH', 'Sarah Johnson', 'Elite Concierge', 'sarah@eliteconcierge.com', '+1-555-0456', 
     'Concierge Service', 'Tier 3', 'Active', '2025-01-05', 3, 45000, 900, '2025-01-14', 'High-value clients'],
    ['AZURE-MIKE', 'Mike Wilson', 'Yacht Brokers Inc', 'mike@yachtbrokers.com', '+1-555-0789', 
     'Yacht Broker', 'Tier 1', 'Active', '2025-01-10', 2, 8000, 200, '2025-01-12', 'New partner']
  ];
  
  sheet.getRange(2, 1, sampleData.length, sampleData[0].length).setValues(sampleData);
  
  // Formatting
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#4285f4').setFontColor('white');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

function createReferralsSheet(spreadsheet) {
  const sheet = spreadsheet.insertSheet('Referrals');
  
  // Headers
  const headers = [
    'Referral ID', 'Partner ID', 'Partner Name', 'Customer Name', 'Customer Email', 
    'Customer Phone', 'Yacht Type', 'Charter Date', 'Charter Value', 'Commission Rate', 
    'Commission Amount', 'Status', 'Created Date', 'Conversion Date', 'HubSpot Deal ID', 
    'Trello Card ID', 'Notes'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Sample data
  const sampleData = [
    ['REF-001', 'AZURE-JOHN', 'John Smith', 'Robert Davis', 'robert@email.com', '+1-555-1111', 
     'Luxury Charter', '2025-02-15', 15000, '6%', 900, 'Converted', '2025-01-10', '2025-01-15', 'DEAL-123', 'CARD-456', 'Smooth conversion'],
    ['REF-002', 'AZURE-SARAH', 'Sarah Johnson', 'Emily Chen', 'emily@email.com', '+1-555-2222', 
     'Motor Yacht', '2025-03-01', 25000, '4%', 1000, 'In Progress', '2025-01-12', '', 'DEAL-124', 'CARD-457', 'High-value prospect'],
    ['REF-003', 'AZURE-MIKE', 'Mike Wilson', 'David Brown', 'david@email.com', '+1-555-3333', 
     'Catamaran', '2025-02-28', 8000, '2.5%', 200, 'New Lead', '2025-01-14', '', 'DEAL-125', 'CARD-458', 'First-time charter']
  ];
  
  sheet.getRange(2, 1, sampleData.length, sampleData[0].length).setValues(sampleData);
  
  // Formatting
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#34a853').setFontColor('white');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

function createCommissionsSheet(spreadsheet) {
  const sheet = spreadsheet.insertSheet('Commissions');
  
  // Headers
  const headers = [
    'Commission ID', 'Partner ID', 'Partner Name', 'Referral ID', 'Charter Value', 
    'Commission Rate', 'Commission Amount', 'Payment Status', 'Payment Date', 
    'Payment Method', 'Transaction ID', 'Month', 'Quarter', 'Year', 'Notes'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Sample data
  const sampleData = [
    ['COM-001', 'AZURE-JOHN', 'John Smith', 'REF-001', 15000, '6%', 900, 'Paid', '2025-01-20', 'Bank Transfer', 'TXN-001', 'January', 'Q1', 2025, 'Paid on time'],
    ['COM-002', 'AZURE-SARAH', 'Sarah Johnson', 'REF-002', 25000, '4%', 1000, 'Pending', '', '', '', 'January', 'Q1', 2025, 'Awaiting charter completion'],
    ['COM-003', 'AZURE-MIKE', 'Mike Wilson', 'REF-003', 8000, '2.5%', 200, 'Pending', '', '', '', 'January', 'Q1', 2025, 'New referral']
  ];
  
  sheet.getRange(2, 1, sampleData.length, sampleData[0].length).setValues(sampleData);
  
  // Formatting
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#ff9900').setFontColor('white');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

function createDashboardSheet(spreadsheet) {
  const sheet = spreadsheet.insertSheet('Dashboard');
  
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
  
  const kpiData = [
    ['Total Referrals', '=COUNTIF(Referrals!M:M,">="&EOMONTH(TODAY(),-1)+1)', '=COUNTIF(Referrals!M:M,">="&EOMONTH(TODAY(),-2)+1)-COUNTIF(Referrals!M:M,">="&EOMONTH(TODAY(),-1)+1)', '=COUNTIF(Referrals!M:M,">="&DATE(YEAR(TODAY()),1,1))', '30', '=IF(B5>=E5,"✅","⚠️")'],
    ['Conversion Rate', '=COUNTIFS(Referrals!L:L,"Converted",Referrals!M:M,">="&EOMONTH(TODAY(),-1)+1)/COUNTIF(Referrals!M:M,">="&EOMONTH(TODAY(),-1)+1)', '=COUNTIFS(Referrals!L:L,"Converted",Referrals!M:M,">="&EOMONTH(TODAY(),-2)+1,Referrals!M:M,"<"&EOMONTH(TODAY(),-1)+1)/COUNTIFS(Referrals!M:M,">="&EOMONTH(TODAY(),-2)+1,Referrals!M:M,"<"&EOMONTH(TODAY(),-1)+1)', '=COUNTIFS(Referrals!L:L,"Converted",Referrals!M:M,">="&DATE(YEAR(TODAY()),1,1))/COUNTIF(Referrals!M:M,">="&DATE(YEAR(TODAY()),1,1))', '25%', '=IF(B6>=E6,"✅","⚠️")'],
    ['Total Revenue', '=SUMIFS(Referrals!I:I,Referrals!M:M,">="&EOMONTH(TODAY(),-1)+1)', '=SUMIFS(Referrals!I:I,Referrals!M:M,">="&EOMONTH(TODAY(),-2)+1,Referrals!M:M,"<"&EOMONTH(TODAY(),-1)+1)', '=SUMIFS(Referrals!I:I,Referrals!M:M,">="&DATE(YEAR(TODAY()),1,1))', '500000', '=IF(B7>=E7,"✅","⚠️")'],
    ['Commission Paid', '=SUMIFS(Commissions!G:G,Commissions!H:H,"Paid",Commissions!I:I,">="&EOMONTH(TODAY(),-1)+1)', '=SUMIFS(Commissions!G:G,Commissions!H:H,"Paid",Commissions!I:I,">="&EOMONTH(TODAY(),-2)+1,Commissions!I:I,"<"&EOMONTH(TODAY(),-1)+1)', '=SUMIFS(Commissions!G:G,Commissions!H:H,"Paid",Commissions!I:I,">="&DATE(YEAR(TODAY()),1,1))', '15000', '=IF(B8>=E8,"✅","⚠️")'],
    ['Active Partners', '=COUNTIF(Partners!H:H,"Active")', '=COUNTIF(Partners!H:H,"Active")', '=COUNTIF(Partners!H:H,"Active")', '20', '=IF(B9>=E9,"✅","⚠️")']
  ];
  
  sheet.getRange(5, 1, kpiData.length, kpiData[0].length).setValues(kpiData);
  
  // Top Partners Section
  sheet.getRange('A12').setValue('Top Partners This Month');
  sheet.getRange('A12').setFontSize(14).setFontWeight('bold');
  
  const partnerHeaders = ['Partner Name', 'Company', 'Referrals', 'Revenue', 'Commission'];
  sheet.getRange('A13:E13').setValues([partnerHeaders]);
  sheet.getRange('A13:E13').setFontWeight('bold').setBackground('#e8f0fe');
  
  // Recent Activity Section
  sheet.getRange('G12').setValue('Recent Activity');
  sheet.getRange('G12').setFontSize(14).setFontWeight('bold');
  
  const activityHeaders = ['Date', 'Activity', 'Partner', 'Amount'];
  sheet.getRange('G13:J13').setValues([activityHeaders]);
  sheet.getRange('G13:J13').setFontWeight('bold').setBackground('#e8f0fe');
  
  // Formatting
  sheet.autoResizeColumns(1, 10);
  sheet.getRange('B5:D8').setNumberFormat('$#,##0');
  sheet.getRange('B6:D6').setNumberFormat('0.0%');
}

function createSettingsSheet(spreadsheet) {
  const sheet = spreadsheet.insertSheet('Settings');
  
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
    ['Tier 1', 0, 9999, '2.5%', 'Standard charters under $10K'],
    ['Tier 2', 10000, 24999, '4%', 'Mid-range charters $10K-$25K'],
    ['Tier 3', 25000, 999999, '6%', 'Luxury charters $25K+']
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
  
  // Formatting
  sheet.autoResizeColumns(1, 5);
  sheet.getRange('C5:C7').setNumberFormat('0.0%');
  sheet.getRange('B5:B7').setNumberFormat('$#,##0');
}

function createReportsSheet(spreadsheet) {
  const sheet = spreadsheet.insertSheet('Reports');
  
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
  
  // Formatting
  sheet.autoResizeColumns(1, 7);
}

function setupDataValidation(spreadsheet) {
  const partnersSheet = spreadsheet.getSheetByName('Partners');
  const referralsSheet = spreadsheet.getSheetByName('Referrals');
  const commissionsSheet = spreadsheet.getSheetByName('Commissions');
  
  // Partner Type validation
  const partnerTypes = ['Travel Advisor', 'Concierge Service', 'Yacht Broker', 'Event Planner', 'Wealth Manager'];
  const partnerTypeRule = SpreadsheetApp.newDataValidation().requireValueInList(partnerTypes).build();
  partnersSheet.getRange('F:F').setDataValidation(partnerTypeRule);
  
  // Commission Tier validation
  const commissionTiers = ['Tier 1', 'Tier 2', 'Tier 3'];
  const tierRule = SpreadsheetApp.newDataValidation().requireValueInList(commissionTiers).build();
  partnersSheet.getRange('G:G').setDataValidation(tierRule);
  
  // Status validation
  const statusOptions = ['Active', 'Inactive', 'Pending'];
  const statusRule = SpreadsheetApp.newDataValidation().requireValueInList(statusOptions).build();
  partnersSheet.getRange('H:H').setDataValidation(statusRule);
  
  // Referral Status validation
  const referralStatuses = ['New Lead', 'Qualified', 'In Progress', 'Converted', 'Lost'];
  const referralStatusRule = SpreadsheetApp.newDataValidation().requireValueInList(referralStatuses).build();
  referralsSheet.getRange('L:L').setDataValidation(referralStatusRule);
  
  // Payment Status validation
  const paymentStatuses = ['Pending', 'Paid', 'Cancelled'];
  const paymentStatusRule = SpreadsheetApp.newDataValidation().requireValueInList(paymentStatuses).build();
  commissionsSheet.getRange('H:H').setDataValidation(paymentStatusRule);
  
  // Yacht Type validation
  const yachtTypes = ['Luxury Charter', 'Motor Yacht', 'Sailing Yacht', 'Catamaran', 'Bareboat'];
  const yachtTypeRule = SpreadsheetApp.newDataValidation().requireValueInList(yachtTypes).build();
  referralsSheet.getRange('G:G').setDataValidation(yachtTypeRule);
}

function setupConditionalFormatting(spreadsheet) {
  const partnersSheet = spreadsheet.getSheetByName('Partners');
  const referralsSheet = spreadsheet.getSheetByName('Referrals');
  const commissionsSheet = spreadsheet.getSheetByName('Commissions');
  
  // Partner Status formatting
  const activeRule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Active')
    .setBackground('#d9ead3')
    .setRanges([partnersSheet.getRange('H:H')])
    .build();
  
  const inactiveRule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Inactive')
    .setBackground('#f4cccc')
    .setRanges([partnersSheet.getRange('H:H')])
    .build();
  
  // Referral Status formatting
  const convertedRule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Converted')
    .setBackground('#d9ead3')
    .setRanges([referralsSheet.getRange('L:L')])
    .build();
  
  const lostRule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Lost')
    .setBackground('#f4cccc')
    .setRanges([referralsSheet.getRange('L:L')])
    .build();
  
  // Payment Status formatting
  const paidRule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Paid')
    .setBackground('#d9ead3')
    .setRanges([commissionsSheet.getRange('H:H')])
    .build();
  
  const pendingRule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Pending')
    .setBackground('#fff2cc')
    .setRanges([commissionsSheet.getRange('H:H')])
    .build();
  
  // Apply rules
  partnersSheet.setConditionalFormatRules([activeRule, inactiveRule]);
  referralsSheet.setConditionalFormatRules([convertedRule, lostRule]);
  commissionsSheet.setConditionalFormatRules([paidRule, pendingRule]);
}

function createNamedRanges(spreadsheet) {
  // Create named ranges for easier reference in formulas
  const partnersSheet = spreadsheet.getSheetByName('Partners');
  const referralsSheet = spreadsheet.getSheetByName('Referrals');
  const commissionsSheet = spreadsheet.getSheetByName('Commissions');
  const settingsSheet = spreadsheet.getSheetByName('Settings');
  
  // Partners data
  spreadsheet.setNamedRange('PartnersData', partnersSheet.getRange('A2:N1000'));
  
  // Referrals data
  spreadsheet.setNamedRange('ReferralsData', referralsSheet.getRange('A2:Q1000'));
  
  // Commissions data
  spreadsheet.setNamedRange('CommissionsData', commissionsSheet.getRange('A2:O1000'));
  
  // Commission tiers
  spreadsheet.setNamedRange('CommissionTiers', settingsSheet.getRange('A5:E7'));
  
  // Partner types
  spreadsheet.setNamedRange('PartnerTypes', settingsSheet.getRange('A12:C16'));
}

// Helper function to calculate commission based on charter value
function calculateCommission(charterValue) {
  if (charterValue < 10000) {
    return charterValue * 0.025; // 2.5% for Tier 1
  } else if (charterValue < 25000) {
    return charterValue * 0.04; // 4% for Tier 2
  } else {
    return charterValue * 0.06; // 6% for Tier 3
  }
}

// Helper function to generate partner ID
function generatePartnerId(partnerName) {
  const prefix = 'AZURE-';
  const namePart = partnerName.toUpperCase().replace(/[^A-Z]/g, '').substring(0, 6);
  return prefix + namePart;
}

// Function to add new referral (called by Zapier webhook)
function addReferral(partnerCode, customerName, customerEmail, customerPhone, yachtType, charterDate, charterValue) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const referralsSheet = spreadsheet.getSheetByName('Referrals');
  const partnersSheet = spreadsheet.getSheetByName('Partners');
  
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
}

// Function to update referral status (called by Zapier when deal moves in HubSpot)
function updateReferralStatus(referralId, status, hubspotDealId) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const referralsSheet = spreadsheet.getSheetByName('Referrals');
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
}

// Function to create commission record
function createCommissionRecord(referralData) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const commissionsSheet = spreadsheet.getSheetByName('Commissions');
  
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
}

// Menu function to add custom menu
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Referral System')
    .addItem('Setup System', 'setupReferralSystem')
    .addItem('Add Sample Data', 'addSampleData')
    .addItem('Export Reports', 'exportReports')
    .addItem('Sync with HubSpot', 'syncWithHubSpot')
    .addToUi();
}

// Function to add more sample data for testing
function addSampleData() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const partnersSheet = spreadsheet.getSheetByName('Partners');
  const referralsSheet = spreadsheet.getSheetByName('Referrals');
  
  // Add more partners
  const morePartners = [
    ['AZURE-LISA', 'Lisa Chen', 'Premium Events', 'lisa@premiumevents.com', '+1-555-1010', 
     'Event Planner', 'Tier 2', 'Active', '2025-01-08', 4, 32000, 1280, '2025-01-16', 'Corporate events specialist'],
    ['AZURE-TOM', 'Tom Anderson', 'Wealth Advisory Group', 'tom@wealthadvisory.com', '+1-555-2020', 
     'Wealth Manager', 'Tier 3', 'Active', '2025-01-12', 2, 55000, 3300, '2025-01-17', 'High net worth clients']
  ];
  
  morePartners.forEach(partner => partnersSheet.appendRow(partner));
  
  // Add more referrals
  const moreReferrals = [
    ['REF-004', 'AZURE-LISA', 'Lisa Chen', 'Amanda White', 'amanda@email.com', '+1-555-4444', 
     'Sailing Yacht', '2025-03-15', 18000, '4%', 720, 'Qualified', '2025-01-16', '', 'DEAL-126', 'CARD-459', 'Corporate retreat'],
    ['REF-005', 'AZURE-TOM', 'Tom Anderson', 'Richard Gold', 'richard@email.com', '+1-555-5555', 
     'Luxury Charter', '2025-04-01', 35000, '6%', 2100, 'In Progress', '2025-01-17', '', 'DEAL-127', 'CARD-460', 'VIP client referral']
  ];
  
  moreReferrals.forEach(referral => referralsSheet.appendRow(referral));
  
  SpreadsheetApp.getUi().alert('Sample data added successfully!');
}

// Function to export reports (placeholder)
function exportReports() {
  SpreadsheetApp.getUi().alert('Export Reports', 'This feature will export reports to PDF format. Implementation coming soon!', SpreadsheetApp.getUi().ButtonSet.OK);
}

// Function to sync with HubSpot (placeholder)
function syncWithHubSpot() {
  SpreadsheetApp.getUi().alert('HubSpot Sync', 'This feature will sync data with HubSpot CRM. Configure your HubSpot API key in Settings first!', SpreadsheetApp.getUi().ButtonSet.OK);
} 