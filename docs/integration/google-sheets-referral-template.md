# Google Sheets Referral Template - Ready to Use

## Template Overview

This Google Sheets template is designed for your specific commission structure and integrates with your Trello workflow.

## Sheet Structure

### Sheet 1: "Partners"

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| Partner ID | Name | Email | Phone | Referral Code | Status | Join Date | Zelle Info | Total Referrals | Total Commissions |
| PARTNER-001 | John Smith | john@email.com | 555-0123 | AZURE-JOHN | Active | 2025-01-15 | john@zelle.com | =COUNTIF(Tracking!E:E,E2) | =SUMIF(Tracking!E:E,E2,Tracking!H:H) |

### Sheet 2: "Tracking" (Main Referral Log)

| A | B | C | D | E | F | G | H | I | J | K | L |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Referral ID | Date | Customer Name | Partner Code | Retail Price | Your Revenue | Commission | Status | Payment Date | Zelle Ref | Trello Link | Notes |
| REF-001 | 2025-01-15 | Jane Doe | AZURE-JOHN | $5,000 | $300 | =CommissionCalc!B2 | Pending | | | https://trello.com/c/... | |

**Commission Formula in Column G:**
```
=IF(F2<=300,100,IF(F2<=500,150,IF(F2<=800,200,300)))
```

### Sheet 3: "CommissionCalc" (Calculator Helper)

| A | B | C |
|---|---|---|
| Revenue | Commission | Notes |
| $300 | 100 | Base tier |
| $500 | 150 | Mid tier |
| $800 | 200 | High tier |
| $1000+ | 300 | Premium tier |

### Sheet 4: "Monthly Summary"

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Month | Partner | Referrals | Revenue Generated | Commission Earned | Payment Status | Payment Date |
| Jan 2025 | AZURE-JOHN | 2 | $800 | $200 | Paid | 2025-02-01 |

**Auto-populate formulas:**
```
Revenue Generated: =SUMIFS(Tracking!F:F,Tracking!E:E,B2,Tracking!B:B,">="&DATE(YEAR(A2),MONTH(A2),1),Tracking!B:B,"<"&DATE(YEAR(A2),MONTH(A2)+1,1))
```

### Sheet 5: "QuickBooks Log"

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Date | Description | Category | Amount | Type | Reference | Status |
| 2025-01-15 | Charter Revenue - Referral | Charter Revenue - Referral | $5,000 | Income | REF-001 | Entered |
| 2025-01-15 | Yacht Owner Payment | Cost of Goods Sold | $4,700 | Expense | REF-001 | Entered |
| 2025-01-15 | Referral Commission - John Smith | Referral Commissions | $100 | Expense | REF-001 | Pending |

## Google Apps Script Integration

### 1. Trello Webhook Handler

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Check if card moved to "Proposal" stage
    if (data.action.type === 'updateCard' && 
        data.action.data.listAfter && 
        data.action.data.listAfter.name === 'Proposal') {
      
      processNewProposal(data.action.data.card);
    }
    
    return ContentService.createTextOutput('Success');
  } catch (error) {
    console.error('Webhook error:', error);
    return ContentService.createTextOutput('Error');
  }
}

function processNewProposal(card) {
  const description = card.desc || '';
  
  // Check if this is a referral
  if (description.includes('Referral Partner:')) {
    const referralData = parseReferralData(description);
    
    if (referralData) {
      logReferral(referralData, card);
      notifyPartner(referralData);
      logForQuickBooks(referralData);
    }
  }
}

function parseReferralData(description) {
  const lines = description.split('\n');
  const data = {};
  
  lines.forEach(line => {
    if (line.includes('Retail Price:')) {
      data.retailPrice = parseFloat(line.split('$')[1]);
    }
    if (line.includes('Your Revenue:')) {
      data.revenue = parseFloat(line.split('$')[1]);
    }
    if (line.includes('Referral Partner:')) {
      data.partnerCode = line.split(':')[1].trim();
    }
    if (line.includes('Client:')) {
      data.customerName = line.split(':')[1].trim();
    }
  });
  
  return data.partnerCode ? data : null;
}

function logReferral(data, card) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Tracking');
  const nextRow = sheet.getLastRow() + 1;
  
  // Calculate commission
  const commission = calculateCommission(data.revenue);
  
  // Generate referral ID
  const referralId = 'REF-' + String(nextRow).padStart(3, '0');
  
  // Add row
  sheet.getRange(nextRow, 1, 1, 12).setValues([[
    referralId,
    new Date(),
    data.customerName,
    data.partnerCode,
    data.retailPrice,
    data.revenue,
    commission,
    'Pending',
    '',
    '',
    card.url,
    'Auto-logged from Trello'
  ]]);
}

function calculateCommission(revenue) {
  if (revenue <= 300) return 100;
  if (revenue <= 500) return 150;
  if (revenue <= 800) return 200;
  return 300;
}

function notifyPartner(data) {
  const partnersSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Partners');
  const partnerData = findPartnerByCode(data.partnerCode);
  
  if (partnerData) {
    const commission = calculateCommission(data.revenue);
    const subject = `New Referral Confirmed - Commission $${commission}`;
    const body = `
Hi ${partnerData.name},

Great news! Your referral has moved to proposal stage:

Customer: ${data.customerName}
Your Commission: $${commission}
Status: Pending Confirmation

We'll process payment via Zelle once the booking is completed.

Best regards,
Azure Yacht Group
    `;
    
    GmailApp.sendEmail(partnerData.email, subject, body);
  }
}

function findPartnerByCode(code) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Partners');
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][4] === code) { // Column E is referral code
      return {
        name: data[i][1],
        email: data[i][2],
        phone: data[i][3]
      };
    }
  }
  return null;
}

function logForQuickBooks(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('QuickBooks Log');
  const nextRow = sheet.getLastRow() + 1;
  const commission = calculateCommission(data.revenue);
  
  // Add three entries for QuickBooks
  const entries = [
    [new Date(), `Charter Revenue - ${data.customerName}`, 'Charter Revenue - Referral', data.retailPrice, 'Income', data.referralId, 'Pending'],
    [new Date(), `Yacht Owner Payment - ${data.customerName}`, 'Cost of Goods Sold', data.retailPrice - data.revenue, 'Expense', data.referralId, 'Pending'],
    [new Date(), `Referral Commission - ${data.partnerCode}`, 'Referral Commissions', commission, 'Expense', data.referralId, 'Pending']
  ];
  
  sheet.getRange(nextRow, 1, 3, 7).setValues(entries);
}
```

### 2. Monthly Commission Processor

```javascript
function processMonthlyCommissions() {
  const trackingSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Tracking');
  const data = trackingSheet.getDataRange().getValues();
  
  // Find all pending commissions
  for (let i = 1; i < data.length; i++) {
    if (data[i][7] === 'Pending') { // Status column
      const partnerCode = data[i][4];
      const commission = data[i][6];
      const customerName = data[i][2];
      
      // Mark as processing
      trackingSheet.getRange(i + 1, 8).setValue('Processing');
      
      // Send payment notification (manual process)
      sendPaymentNotification(partnerCode, commission, customerName);
    }
  }
}

function sendPaymentNotification(partnerCode, commission, customerName) {
  const partnerData = findPartnerByCode(partnerCode);
  
  if (partnerData) {
    const subject = `Commission Payment Ready - $${commission}`;
    const body = `
Hi ${partnerData.name},

Your commission is ready for payment:

Amount: $${commission}
Booking: ${customerName}
Payment Method: Zelle

Please confirm your Zelle details and we'll process payment within 24 hours.

Best regards,
Azure Yacht Group
    `;
    
    GmailApp.sendEmail(partnerData.email, subject, body);
  }
}
```

## Setup Instructions

### 1. Create New Google Sheet
1. Go to sheets.google.com
2. Create new sheet
3. Rename to "Azure Referral System"

### 2. Set Up Sheets
1. Create 5 sheets with names above
2. Add headers as shown in tables
3. Copy formulas exactly as written

### 3. Add Google Apps Script
1. Go to Extensions → Apps Script
2. Replace default code with script above
3. Save and authorize permissions

### 4. Set Up Trello Webhook
1. Get webhook URL from Apps Script
2. Set up Trello webhook pointing to your script
3. Test with sample card movement

### 5. Test the System
1. Create test partner in Partners sheet
2. Create test Trello card with referral info
3. Move card to "Proposal"
4. Verify automatic logging

## Daily Usage

### Adding New Partner
1. Add row to Partners sheet
2. Generate unique referral code
3. Send welcome email with code

### Processing Referral
1. Create Trello card with referral format
2. Move to "Proposal" when ready
3. System automatically logs and calculates
4. Check QuickBooks Log for entries

### Monthly Payments
1. Review Tracking sheet for pending commissions
2. Process Zelle payments
3. Update payment status and date
4. Send confirmation emails

This template handles your entire referral workflow automatically while maintaining zero monthly costs! 