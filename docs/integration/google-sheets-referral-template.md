# Google Sheets Referral Template - Complete Setup

## Template Overview

This Google Sheets template provides the complete tracking system for your Azure Yacht Group referral program with automated commission calculations and Trello integration.

## Sheet Structure (4 Sheets Required)

### Sheet 1: "Partners"

| A | B | C | D | E | F | G | H | I | J | K | L |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Partner ID | Name | Email | Phone | Referral Code | Status | Join Date | Zelle Info | Total Referrals | Total Earned | Last Payment | Notes |
| PARTNER-001 | John Smith | john@email.com | (555) 123-4567 | AZURE-JOHN | Active | 1/15/2025 | john@zelle.com | =COUNTIF(Tracking!E:E,E2) | =SUMIF(Tracking!E:E,E2,Tracking!H:H) | | Test partner |

**Key Formulas:**
- **Total Referrals (Column I):** `=COUNTIF(Tracking!E:E,E2)`
- **Total Earned (Column J):** `=SUMIF(Tracking!E:E,E2,Tracking!H:H)`

### Sheet 2: "Tracking"

| A | B | C | D | E | F | G | H | I | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Referral ID | Date | Customer Name | Customer Email | Partner Code | Retail Price | Your Revenue | Commission | Status | Charter Date | Payment Date | Payment Ref | Notes |
| REF-001 | [TODAY()] | Test Customer | customer@email.com | AZURE-JOHN | 5000 | 300 | [Formula] | Pending | 2/15/2025 | | | Test referral |

**Commission Formula (Column H):**
```excel
=IF(G2="","",IF(G2<=300,100,IF(G2<=500,150,IF(G2<=800,200,300))))
```

**This formula automatically calculates:**
- $300 revenue → $100 commission
- $500 revenue → $150 commission  
- $800 revenue → $200 commission
- $1000+ revenue → $300 commission

### Sheet 3: "Monthly Summary"

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Month | Total Referrals | Total Revenue | Total Commissions | Partners Paid | Outstanding |
| January 2025 | [Formula] | [Formula] | [Formula] | [Formula] | [Formula] |

**Monthly Summary Formulas:**
- **Total Referrals:** `=COUNTIFS(Tracking!B:B,">="&DATE(2025,1,1),Tracking!B:B,"<"&DATE(2025,2,1))`
- **Total Revenue:** `=SUMIFS(Tracking!G:G,Tracking!B:B,">="&DATE(2025,1,1),Tracking!B:B,"<"&DATE(2025,2,1))`
- **Total Commissions:** `=SUMIFS(Tracking!H:H,Tracking!B:B,">="&DATE(2025,1,1),Tracking!B:B,"<"&DATE(2025,2,1))`
- **Partners Paid:** `=SUMIFS(Tracking!H:H,Tracking!B:B,">="&DATE(2025,1,1),Tracking!B:B,"<"&DATE(2025,2,1),Tracking!I:I,"Paid")`
- **Outstanding:** `=D2-E2`

### Sheet 4: "Settings"

| A | B |
|---|---|
| Setting | Value |
| Trello Board ID | [Your board ID from JSON] |
| Webhook URL | [Google Apps Script URL] |
| Email Template Subject | New Referral Alert - Azure Yacht Group |
| Your Email | your-email@azureyachtgroup.com |
| Commission Tier 1 | 100 |
| Commission Tier 2 | 150 |
| Commission Tier 3 | 200 |
| Commission Tier 4 | 300 |

## Google Apps Script Code

### Complete Automation Script

```javascript
function doPost(e) {
  try {
    // Parse Trello webhook data
    const data = JSON.parse(e.postData.contents);
    
    // Only process when card moves TO "Proposal" list
    if (data.action && data.action.type === 'updateCard' && 
        data.action.data && data.action.data.listAfter && 
        data.action.data.listAfter.name === 'Proposal') {
      
      processReferral(data.action.data.card);
    }
    
    return ContentService.createTextOutput('OK');
  } catch (error) {
    console.log('Error:', error);
    return ContentService.createTextOutput('Error: ' + error.toString());
  }
}

function processReferral(card) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const trackingSheet = sheet.getSheetByName('Tracking');
  const settingsSheet = sheet.getSheetByName('Settings');
  
  // Parse card description for referral data
  const description = card.desc || '';
  const referralData = parseReferralData(description);
  
  if (referralData && referralData.partnerCode) {
    // Add to tracking sheet
    const newRow = trackingSheet.getLastRow() + 1;
    const referralId = 'REF-' + String(newRow - 1).padStart(3, '0');
    
    trackingSheet.getRange(newRow, 1, 1, 13).setValues([[
      referralId,
      new Date(),
      referralData.customerName || '',
      referralData.customerEmail || '',
      referralData.partnerCode,
      referralData.retailPrice || '',
      referralData.yourRevenue || '',
      calculateCommission(referralData.yourRevenue),
      'Pending',
      referralData.charterDate || '',
      '', // Payment Date
      '', // Payment Ref
      'Auto-logged from Trello: ' + card.name
    ]]);
    
    // Send notification email
    sendReferralNotification(referralData, referralId);
  }
}

function parseReferralData(description) {
  const data = {};
  
  // Extract data using regex patterns
  const patterns = {
    partnerCode: /Referral Partner:\s*([^\n\r]+)/i,
    customerName: /Client:\s*([^\n\r]+)/i,
    customerEmail: /Email:\s*([^\n\r]+)/i,
    retailPrice: /Retail Price:\s*\$?([0-9,]+)/i,
    yourRevenue: /Your Revenue:\s*\$?([0-9,]+)/i,
    charterDate: /Date:\s*([^\n\r]+)/i
  };
  
  for (const [key, pattern] of Object.entries(patterns)) {
    const match = description.match(pattern);
    if (match) {
      data[key] = match[1].trim();
      if (key === 'retailPrice' || key === 'yourRevenue') {
        data[key] = parseInt(data[key].replace(/,/g, ''));
      }
    }
  }
  
  return data;
}

function calculateCommission(revenue) {
  if (!revenue) return 0;
  if (revenue <= 300) return 100;
  if (revenue <= 500) return 150;
  if (revenue <= 800) return 200;
  return 300;
}

function sendReferralNotification(data, referralId) {
  const subject = 'New Referral Logged - ' + referralId;
  const body = `
New referral has been automatically logged:

Referral ID: ` + referralId + `
Partner: ` + data.partnerCode + `
Customer: ` + data.customerName + `
Revenue: $` + data.yourRevenue + `
Commission: $` + calculateCommission(data.yourRevenue) + `

View details in your Google Sheet.

Azure Yacht Group Referral System
  `;
  
  // Get your email from Settings sheet
  const settingsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Settings');
  const yourEmail = settingsSheet.getRange('B5').getValue();
  
  if (yourEmail) {
    GmailApp.sendEmail(yourEmail, subject, body);
  }
}

// Test function - run this to test your setup
function testReferralProcessing() {
  const testCard = {
    name: 'Test Charter Booking',
    desc: `Yacht: Test Yacht
Product: Half-Day Charter
Date: Tomorrow
Retail Price: $5,000
Your Revenue: $300
Referral Partner: AZURE-TEST

Client: Test Customer
Email: test@test.com
Phone: 555-0123`
  };
  
  processReferral(testCard);
  console.log('Test referral processed - check your sheet and email');
}

// Monthly commission processing helper
function generateMonthlyReport() {
  const trackingSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Tracking');
  const partnersSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Partners');
  
  // Get current month's pending commissions
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  
  const trackingData = trackingSheet.getDataRange().getValues();
  const pendingCommissions = [];
  
  for (let i = 1; i < trackingData.length; i++) {
    const row = trackingData[i];
    const date = new Date(row[1]);
    const status = row[8];
    
    if (date >= firstDay && date <= lastDay && status === 'Pending') {
      pendingCommissions.push({
        referralId: row[0],
        partnerCode: row[4],
        commission: row[7],
        customerName: row[2]
      });
    }
  }
  
  console.log('Pending commissions for this month:', pendingCommissions);
  return pendingCommissions;
}
```

## Setup Instructions

### 1. Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new blank sheet
3. Rename to "Azure Referral System"
4. Create 4 tabs: Partners, Tracking, Monthly Summary, Settings

### 2. Add Headers and Formulas
1. Copy the exact column headers from each sheet above
2. Add the sample data rows
3. Copy the formulas exactly (especially the commission formula)
4. Fill in your Settings sheet with actual values

### 3. Set Up Google Apps Script
1. Go to Extensions → Apps Script
2. Delete existing code and paste the complete script above
3. Save and deploy as web app
4. Copy the webhook URL for Trello integration

### 4. Test the System
1. Run the `testReferralProcessing()` function
2. Check that data appears in Tracking sheet
3. Verify commission calculation is correct
4. Confirm email notification is sent

## Usage Tips

### Daily Operations
- Always use the exact Trello card format for automation to work
- Commission calculations are automatic once revenue is entered
- Email notifications are sent immediately when referrals are logged

### Monthly Processing
1. Filter Tracking sheet by Status = "Pending"
2. Send Zelle payments to partners
3. Update Payment Date and Payment Ref columns
4. Change Status to "Paid"
5. Run monthly summary reports

### Troubleshooting
- **Commission not calculating:** Check that Your Revenue column has numbers, not text
- **Emails not sending:** Verify email address in Settings sheet
- **Automation not working:** Check Google Apps Script execution logs

This template provides a complete, professional referral tracking system with zero monthly costs and minimal maintenance requirements. 