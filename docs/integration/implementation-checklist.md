# Complete Free Referral System - Implementation Guide

## 🎯 System Overview

**100% Free Solution - No Monthly Costs**
- Google Sheets for tracking and calculations
- Trello webhook automation (free)
- Gmail notifications (free)
- Manual QuickBooks entry (no paid integrations)
- Zelle payments (free)

**Setup Time: 45 minutes**  
**Monthly Maintenance: 30 minutes**

---

## 📋 Phase 1: Google Sheets Setup (15 minutes)

### Step 1: Create Master Spreadsheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click "Blank" to create new sheet
3. Rename to "Azure Referral System"
4. Share with yourself (to ensure you have edit permissions)

### Step 2: Create Sheet Tabs

**Create 4 tabs in this order:**
1. **Partners** (rename Sheet1)
2. **Tracking** (add new sheet)
3. **Monthly Summary** (add new sheet)
4. **Settings** (add new sheet)

### Step 3: Set Up Partners Tab

**Column Headers (Row 1):**
```
A1: Partner ID
B1: Name
C1: Email
D1: Phone
E1: Referral Code
F1: Status
G1: Join Date
H1: Zelle Info
I1: Total Referrals
J1: Total Earned
K1: Last Payment
L1: Notes
```

**Sample Partner (Row 2):**
```
A2: PARTNER-001
B2: Test Partner
C2: test@email.com
D2: (555) 123-4567
E2: AZURE-TEST
F2: Active
G2: 1/15/2025
H2: test@zelle.com
I2: =COUNTIF(Tracking!E:E,E2)
J2: =SUMIF(Tracking!E:E,E2,Tracking!H:H)
K2: [Leave blank for now]
L2: Test partner for system setup
```

### Step 4: Set Up Tracking Tab

**Column Headers (Row 1):**
```
A1: Referral ID
B1: Date
C1: Customer Name
D1: Customer Email
E1: Partner Code
F1: Retail Price
G1: Your Revenue
H1: Commission
I1: Status
J1: Charter Date
K1: Payment Date
L1: Payment Ref
M1: Notes
```

**Commission Formula (Column H):**
In H2, enter this formula:
```
=IF(G2="","",IF(G2<=300,100,IF(G2<=500,150,IF(G2<=800,200,300))))
```

**Sample Referral (Row 2):**
```
A2: REF-001
B2: =TODAY()
C2: Test Customer
D2: customer@email.com
E2: AZURE-TEST
F2: 5000
G2: 300
H2: [Formula will calculate: 100]
I2: Pending
J2: 2/15/2025
K2: [Leave blank]
L2: [Leave blank]
M2: Test referral for system setup
```

### Step 5: Set Up Monthly Summary Tab

**Headers (Row 1):**
```
A1: Month
B1: Total Referrals
C1: Total Revenue
D1: Total Commissions
E1: Partners Paid
F1: Outstanding
```

**Sample Summary (Row 2):**
```
A2: January 2025
B2: =COUNTIFS(Tracking!B:B,">="&DATE(2025,1,1),Tracking!B:B,"<"&DATE(2025,2,1))
C2: =SUMIFS(Tracking!G:G,Tracking!B:B,">="&DATE(2025,1,1),Tracking!B:B,"<"&DATE(2025,2,1))
D2: =SUMIFS(Tracking!H:H,Tracking!B:B,">="&DATE(2025,1,1),Tracking!B:B,"<"&DATE(2025,2,1))
E2: =SUMIFS(Tracking!H:H,Tracking!B:B,">="&DATE(2025,1,1),Tracking!B:B,"<"&DATE(2025,2,1),Tracking!I:I,"Paid")
F2: =D2-E2
```

### Step 6: Set Up Settings Tab

**Configuration Values:**
```
A1: Setting
B1: Value

A2: Trello Board ID
B2: [Your board ID from Trello JSON]

A3: Webhook URL
B3: [Will fill in Phase 2]

A4: Email Template Subject
B4: New Referral Alert - Azure Yacht Group

A5: Your Email
B5: your-email@azureyachtgroup.com
```

---

## 🔧 Phase 2: Google Apps Script Automation (15 minutes)

### Step 1: Open Apps Script

1. In your Google Sheet, click "Extensions" → "Apps Script"
2. Delete any existing code
3. Name the project "Azure Referral Automation"

### Step 2: Add Main Script

**Copy and paste this code:**

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

Referral ID: ${referralId}
Partner: ${data.partnerCode}
Customer: ${data.customerName}
Revenue: $${data.yourRevenue}
Commission: $${calculateCommission(data.yourRevenue)}

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
```

### Step 3: Deploy as Web App

1. Click "Deploy" → "New deployment"
2. Type: "Web app"
3. Execute as: "Me"
4. Who has access: "Anyone"
5. Click "Deploy"
6. **Copy the Web App URL** - you'll need this!
7. Click "Authorize access" and approve permissions

### Step 4: Test the Script

1. Click "Run" → "testReferralProcessing"
2. Check your Tracking sheet - should see a new test entry
3. Check your email - should receive notification
4. If it works, delete the test row

---

## 🔗 Phase 3: Trello Integration (10 minutes)

### Step 1: Get Your Board ID

From your Trello JSON file, find your board ID:
```json
"id": "616c44a04ceba22a63045783"
```

### Step 2: Set Up Webhook (Choose Method A or B)

**Method A: Using Browser (Easiest)**
1. Install "Trello Webhook" Chrome extension
2. Go to your Trello board
3. Click the extension icon
4. Enter your Google Apps Script Web App URL
5. Click "Create Webhook"

**Method B: Using API Call**
1. Go to [trello.com/app-key](https://trello.com/app-key)
2. Copy your API Key
3. Click "Token" and authorize, copy Token
4. Use this URL in your browser (replace YOUR_KEY, YOUR_TOKEN, YOUR_WEBHOOK_URL, YOUR_BOARD_ID):

```
https://api.trello.com/1/webhooks/?key=YOUR_KEY&token=YOUR_TOKEN&callbackURL=YOUR_WEBHOOK_URL&idModel=YOUR_BOARD_ID
```

### Step 3: Update Settings Sheet

Add your webhook URL to cell B3 in Settings sheet.

---

## 💰 Phase 4: QuickBooks Setup (5 minutes)

**No paid integrations needed - simple manual process:**

### Add These Categories in QuickBooks:

**Income Categories:**
- Charter Revenue - Direct Booking
- Charter Revenue - Referral Booking

**Expense Categories:**
- Referral Partner Commissions
- Marketing - Partner Payments

### Monthly Process:
1. Export commission data from Google Sheets
2. Create expense entries in QuickBooks for partner payments
3. Categorize charter revenue by source (direct vs referral)

---

## 🧪 Phase 5: System Testing (5 minutes)

### Test 1: Create Referral in Trello

1. Go to your Trello board
2. Create a new card in "New Lead" with this exact format:

```
Test Charter - [Customer Name]

Yacht: Beneteau GT 38
Product: Half-Day Charter
Date: February 15, 2025
Retail Price: $5,000
Your Revenue: $300
Referral Partner: AZURE-TEST

Client: John Smith
Email: john@example.com
Phone: (555) 123-4567
```

### Test 2: Move to Proposal

1. Drag the card from "New Lead" to "Proposal"
2. Wait 30 seconds
3. Check your Google Sheet Tracking tab - should see new entry
4. Check your email - should receive notification

### Test 3: Verify Calculations

- Commission should show $100 (for $300 revenue)
- Partner totals should update automatically
- All data should be properly formatted

---

## 📊 Daily Operations

### When You Get a Referral Lead

**Step 1: Create Properly Formatted Trello Card**
```
[Charter Type] - [Customer Name]

Yacht: [Yacht Name]
Product: [Charter Package]
Date: [Charter Date]
Retail Price: $[What Customer Pays]
Your Revenue: $[Your Profit After Owner Cut]
Referral Partner: [Partner Code from Partners sheet]

Client: [Full Customer Name]
Email: [Customer Email]
Phone: [Customer Phone]
```

**Step 2: Process Through Normal Workflow**
- Start in "New Lead"
- When you move to "Proposal" → System automatically logs
- Continue through your normal Trello process
- System tracks everything automatically

### Monthly Commission Process

**Step 1: Review Commissions (1st of each month)**
1. Open Tracking sheet
2. Filter Status column for "Pending"
3. Verify all completed charters are marked correctly

**Step 2: Process Payments**
1. Send Zelle payments to each partner
2. Update "Payment Date" column with today's date
3. Add Zelle confirmation number to "Payment Ref" column
4. Change Status from "Pending" to "Paid"

**Step 3: Send Partner Reports**
Create monthly email to each partner:
```
Subject: Monthly Commission Report - [Month Year]

Hi [Partner Name],

Your referral performance for [Month]:
- Referrals: [Count]
- Total Commission: $[Amount]
- Payment Sent: $[Amount] via Zelle
- Confirmation: [Zelle Ref Number]

Thank you for your continued partnership!

Best regards,
Azure Yacht Group
```

---

## 🔧 Troubleshooting

### Webhook Not Working
1. Check Google Apps Script execution log
2. Verify webhook URL is correct in Trello
3. Test with "testReferralProcessing" function
4. Ensure card description format is exact

### Emails Not Sending
1. Check Gmail quota (100 emails/day free limit)
2. Verify email address in Settings sheet
3. Check spam folder
4. Ensure Gmail permissions are granted

### Formulas Not Calculating
1. Verify sheet names match exactly ("Partners", "Tracking", etc.)
2. Check column references in formulas
3. Ensure data types are correct (numbers vs text)
4. Refresh sheet (Ctrl+R)

### Commission Calculations Wrong
1. Check formula in Tracking sheet column H
2. Verify "Your Revenue" column has numbers, not text
3. Test with known values: $300→$100, $500→$150, $800→$200

---

## 📈 System Capacity & Limits

### Free Tier Limits:
- **Google Sheets**: 10 million cells (unlimited for practical use)
- **Gmail**: 100 emails/day (sufficient for notifications)
- **Apps Script**: 6 minutes runtime per execution
- **Trello**: Unlimited webhooks on free plan

### Realistic Capacity:
- **Partners**: 100+ active partners
- **Referrals**: 500+ per month
- **Data History**: Unlimited tracking
- **Automation**: Professional-level automation

---

## 🚀 Next Steps After Setup

### Week 1: Add Real Partners
1. Replace test data with actual partners
2. Generate unique referral codes for each
3. Send welcome emails with their codes and booklet

### Week 2: Monitor Performance
1. Watch for successful webhook triggers
2. Verify commission calculations are accurate
3. Fine-tune email templates and notifications

### Week 3: Scale Operations
1. Add more partners using application form
2. Create marketing materials for partners
3. Track performance metrics and trends

### Month 1: Optimize System
1. Review partner performance data
2. Adjust commission structure if needed
3. Add additional automation features
4. Gather partner feedback and improve

---

## 🎯 Success Metrics

### Month 1 Targets:
- 5-10 active partners recruited
- 2-3 successful referral bookings
- $15,000+ in referral revenue
- $300-500 in commission payouts
- 100% automated tracking accuracy

### Quarter 1 Targets:
- 20-30 active partners
- 10-15 monthly referrals
- $75,000+ quarterly referral revenue
- $2,500+ monthly commission payouts
- Streamlined monthly payment process

**Your system will be fully operational within 45 minutes and require only 30 minutes of monthly maintenance!** 