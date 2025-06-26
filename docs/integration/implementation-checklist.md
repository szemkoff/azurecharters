---
title: Referral System Implementation Guide
sidebar_label: Implementation Guide
---

# Complete Referral System Setup Guide

## 🎯 Overview

**Total Setup Time:** 45 minutes  
**Monthly Maintenance:** 30 minutes  
**System Capacity:** 100+ partners, unlimited referrals

**What You'll Build:**
- Google Sheets with partner filtered views for commission tracking
- Trello webhook automation for referral processing
- Automated email notifications for partners
- Monthly payment processing workflow

---

## 📋 Phase 1: Google Sheets Setup (15 minutes)

### Step 1: Create Master Spreadsheet

1. **Go to [sheets.google.com](https://sheets.google.com)**
2. **Click "Blank"** to create new sheet
3. **Rename to:** "Azure Yacht Group - Referral System"
4. **Share with yourself** (click Share → ensure you have Editor access)

### Step 2: Create Required Tabs

**Create these 4 tabs in order:**
1. **Partners** (rename the default Sheet1)
2. **Tracking** (click + to add new sheet)
3. **Monthly Summary** (click + to add new sheet)
4. **Settings** (click + to add new sheet)

### Step 3: Partners Tab Setup

**Add these column headers in Row 1:**
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

**Add sample partner in Row 2:**
```
A2: AZURE-TEST
B2: Test Partner
C2: test@email.com
D2: (555) 123-4567
E2: AZURE-TEST
F2: Active
G2: =TODAY()
H2: test@zelle.com
I2: =COUNTIF(Tracking!E:E,E2)
J2: =SUMIF(Tracking!E:E,E2,Tracking!H:H)
K2: [Leave blank]
L2: Test partner for setup
```

### Step 4: Tracking Tab Setup

**Add these column headers in Row 1:**
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

**Add commission formula in H2:**
```excel
=IF(G2="","",IF(G2<=300,100,IF(G2<=500,150,IF(G2<=800,200,300))))
```

**Add sample referral in Row 2:**
```
A2: REF-001
B2: =TODAY()
C2: Test Customer
D2: customer@email.com
E2: AZURE-TEST
F2: 5000
G2: 300
H2: [Formula will calculate 100]
I2: Pending
J2: 2/15/2025
K2: [Leave blank]
L2: [Leave blank]
M2: Test referral for setup
```

### Step 5: Monthly Summary Tab

**Add headers and formulas:**
```
A1: Month/Year    B1: Total Referrals    C1: Total Revenue    D1: Total Commissions
A2: January 2025  B2: =COUNTA(Tracking!A:A)-1  C2: =SUM(Tracking!G:G)  D2: =SUM(Tracking!H:H)
```

### Step 6: Settings Tab

**Add configuration data:**
```
A1: Trello Board ID    B1: [Your Trello Board ID]
A2: Webhook URL        B2: [Will add in Phase 2]
A3: Your Email         B3: [Your email address]
A4: Payment Schedule   B4: Monthly - 1st of month
A5: Commission Rates   B5: $300→$100, $500→$150, $800→$200, $1000+→$300
```

---

## 🔧 Phase 2: Trello Integration (20 minutes)

### Step 1: Get Your Trello Board ID

1. **Open your Trello board** in browser
2. **Add ".json" to the URL** (e.g., trello.com/b/BOARDID.json)
3. **Copy the "id" value** from the JSON (24-character string)
4. **Paste in Settings tab B1**

### Step 2: Create Google Apps Script

1. **In Google Sheets, click Extensions → Apps Script**
2. **Replace default code with this:**

```javascript
// Webhook handler for Trello
function doPost(e) {
  try {
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

// Process referral data
function processReferral(card) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const trackingSheet = sheet.getSheetByName('Tracking');
  const settingsSheet = sheet.getSheetByName('Settings');
  
  // Parse card description for referral data
  const description = card.desc || '';
  const referralData = parseReferralData(description);
  
  if (referralData && referralData.partnerCode) {
    // Generate referral ID
    const newRow = trackingSheet.getLastRow() + 1;
    const referralId = 'REF-' + String(newRow - 1).padStart(3, '0');
    
    // Calculate commission
    const commission = calculateCommission(referralData.yourRevenue);
    
    // Add to tracking sheet
    trackingSheet.getRange(newRow, 1, 1, 13).setValues([[
      referralId,
      new Date(),
      referralData.customerName || '',
      referralData.customerEmail || '',
      referralData.partnerCode,
      referralData.retailPrice || '',
      referralData.yourRevenue || '',
      commission,
      'Pending',
      referralData.charterDate || '',
      '', // Payment Date
      '', // Payment Ref
      'Auto-logged from Trello: ' + card.name
    ]]);
    
    // Send notification email
    sendReferralNotification(referralData, referralId, commission);
  }
}

// Parse referral data from Trello card description
function parseReferralData(description) {
  const data = {};
  
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

// Calculate commission based on revenue
function calculateCommission(revenue) {
  if (!revenue) return 0;
  if (revenue <= 300) return 100;
  if (revenue <= 500) return 150;
  if (revenue <= 800) return 200;
  return 300;
}

// Send notification email to partner
function sendReferralNotification(data, referralId, commission) {
  const subject = 'New Referral Logged - ' + referralId;
  const body = `
Hi there!

Great news! Your referral has been automatically logged:

Referral ID: ${referralId}
Customer: ${data.customerName}
Your Revenue: $${data.yourRevenue}
Your Commission: $${commission}

We'll contact the customer within 24 hours and keep you updated on progress.

View your dashboard: [Your filtered view URL will be here]

Best regards,
Azure Yacht Group Team
  `;
  
  // Get your email from Settings tab
  const settingsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Settings');
  const yourEmail = settingsSheet.getRange('B3').getValue();
  
  if (yourEmail) {
    GmailApp.sendEmail(yourEmail, subject, body);
  }
}

// Test function - run this to verify setup
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
  console.log('Test referral processed - check your Tracking sheet');
}
```

3. **Save the script** (Ctrl+S or Cmd+S)
4. **Name it:** "Referral System Automation"

### Step 3: Deploy as Web App

1. **Click Deploy → New deployment**
2. **Type:** Web app
3. **Execute as:** Me
4. **Who has access:** Anyone
5. **Click Deploy**
6. **Copy the Web App URL**
7. **Paste URL in Settings tab B2**

### Step 4: Set Up Trello Webhook

1. **Get your Trello API key** from [trello.com/app-key](https://trello.com/app-key)
2. **Create webhook using this URL format:**
```
https://api.trello.com/1/webhooks/?key=YOUR_API_KEY&token=YOUR_TOKEN&callbackURL=YOUR_WEBAPP_URL&idModel=YOUR_BOARD_ID
```
3. **Test by moving a test card to "Proposal" list**

---

## 👥 Phase 3: Partner Dashboard Setup (10 minutes)

### Step 1: Create Filtered Views for Partners

**For each partner you add:**

1. **Go to Tracking tab**
2. **Click Data → Filter views → Create new filter view**
3. **Name it:** "[Partner Name]'s Dashboard"
4. **Filter Column E (Partner Code):**
   - Click filter icon in Column E
   - Uncheck "Select all"
   - Check only their partner code (e.g., "AZURE-JOHN")
   - Click OK
5. **Hide internal columns** (optional):
   - Right-click columns L, M (Payment Ref, Notes)
   - Select "Hide column"
6. **Save filter view**
7. **Copy the filtered view URL**

### Step 2: Partner Access Setup

**For each partner:**
1. **Share the main sheet** with "Viewer" permissions
2. **Send them their filtered view URL**
3. **Include welcome message:**

```
Welcome to Azure Yacht Group's Partner Program!

Your Personal Dashboard: [FILTERED_VIEW_URL]

This dashboard shows:
✅ All your referrals and their status
✅ Real-time commission calculations
✅ Payment tracking and history
✅ Your performance metrics

Bookmark this link - it updates automatically!

Questions? Reply to this email anytime.
```

---

## 📧 Phase 4: Partner Communication (5 minutes)

### Email Templates Setup

**Create these email templates in Gmail:**

**1. Welcome Email Template**
```
Subject: Welcome to Azure Yacht Group Referral Program

Hi [Partner Name],

Welcome to our referral program! Here are your details:

✅ Referral Code: [PARTNER-CODE]
✅ Commission: $100-300 per booking
✅ Payment: Monthly via Zelle
✅ Dashboard: [FILTERED_VIEW_URL]

Your Partner Materials:
📋 Marketing Booklet: [Link]
📄 Partner Agreement: [Link]

Start promoting and earning today!

Best regards,
Azure Yacht Group Team
```

**2. Monthly Commission Report Template**
```
Subject: Monthly Commission Report - [Month Year]

Hi [Partner Name],

Your referral performance for [Month]:

📊 Referrals Generated: [Count]
💰 Total Commission Earned: $[Amount]
💳 Payment Sent: $[Amount] via Zelle
🔢 Confirmation Number: [Zelle Ref]

Next month's goal: [Suggested target]

View your dashboard: [FILTERED_VIEW_URL]

Thank you for your partnership!

Best regards,
Azure Yacht Group
```

---

## 🔄 Daily Operations Workflow

### When You Receive a Referral

**Partner sends email with referral info using this template:**
```
Subject: New Referral - [Client Name]

Partner Code: AZURE-JOHN
Client Name: John Smith
Client Email: john@email.com
Client Phone: (555) 123-4567
Charter Date: February 15, 2025
Group Size: 8 people
Budget: $5,000-7,000
Special Requirements: Birthday celebration
```

**Your Process:**
1. **Create Trello card** with this exact format in description:
```
Yacht: [Yacht Name]
Product: [Charter Type]
Date: [Charter Date]
Retail Price: $5,000
Your Revenue: $300
Referral Partner: AZURE-JOHN

Client: John Smith
Email: john@email.com
Phone: (555) 123-4567
```

2. **Add to "New Lead" list** initially
3. **Process normally** through your workflow
4. **Move to "Proposal"** → System automatically logs referral
5. **Partner gets notification** instantly

### Monthly Commission Processing (1st of each month)

1. **Filter Tracking sheet** for "Pending" status
2. **Verify completed charters** from previous month
3. **Process Zelle payments** to partners
4. **Update Payment Date and Reference** in sheet
5. **Change Status** from "Pending" to "Paid"
6. **Send monthly reports** to partners

---

## ✅ System Testing

### Test Your Setup

1. **Run test function** in Apps Script:
   - Open Apps Script editor
   - Click "testReferralProcessing" function
   - Click Run
   - Check Tracking sheet for new test entry

2. **Test Trello integration:**
   - Create test card with referral format
   - Move to "Proposal" list
   - Verify automatic logging in Tracking sheet

3. **Test partner view:**
   - Open filtered view URL
   - Verify only relevant partner data shows
   - Test on mobile device

### Troubleshooting Common Issues

**Webhook not triggering:**
- Check Google Apps Script logs
- Verify Trello webhook is active
- Test with simple card movement

**Commission not calculating:**
- Check formula in Column H
- Verify revenue data format (numbers only)
- Copy formula to all rows

**Partner can't see data:**
- Verify filtered view settings
- Check sharing permissions
- Ensure correct URL was sent

---

## 🎯 Success Metrics

### Track These KPIs Monthly

- **Partner Metrics:**
  - Number of active partners
  - Referrals per partner per month
  - Conversion rate (referrals to bookings)
  - Average commission per partner

- **Business Metrics:**
  - Total referral revenue
  - Referral revenue as % of total
  - Cost per acquisition via referrals
  - Partner retention rate

### Target Performance
- **Month 1:** 5 partners, 2 bookings, $500 commissions
- **Month 3:** 15 partners, 8 bookings, $1,200 commissions
- **Month 6:** 25 partners, 15 bookings, $2,500 commissions
- **Year 1:** 50+ partners, 30+ monthly bookings, $5,000+ monthly commissions

---

## 🚀 System Scaling

### When to Scale Up

**Indicators you're ready for more automation:**
- 50+ partners in system
- 20+ referrals per month
- Manual processing taking >2 hours monthly
- Partners requesting more features

### Growth Planning

**Phase 1 (Months 1-3):** Manual processing, basic automation
**Phase 2 (Months 4-6):** Enhanced automation, partner portal
**Phase 3 (Months 7-12):** Full automation, advanced analytics

This implementation guide provides everything needed to launch a professional referral system with minimal setup time and zero monthly costs. The system scales naturally as your partner network grows. 