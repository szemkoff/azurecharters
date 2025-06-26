---
title: Google Sheets Partner Dashboard - Filtered Views Setup
sidebar_label: Partner Dashboard Setup
---

# Google Sheets Partner Dashboard with Filtered Views

## Overview

This guide shows you how to create a single Google Sheet that gives each partner their own personalized dashboard view while keeping all data centralized and easy to manage.

## Sheet Structure Setup

### Step 1: Create New Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click "Blank" to create new sheet
3. Rename to "Azure Yacht Group - Referral Tracking"

### Step 2: Create Required Tabs

Create these 4 tabs in your sheet:

#### Tab 1: "Partners"
```
Column A: Partner ID (AZURE-JOHN, AZURE-MARY, etc.)
Column B: Partner Name
Column C: Email
Column D: Phone
Column E: Referral Code (same as Partner ID)
Column F: Status (Active/Inactive)
Column G: Join Date
Column H: Zelle Payment Info
Column I: Total Referrals (Formula)
Column J: Total Earned (Formula)
Column K: Last Payment Date
Column L: Notes
```

#### Tab 2: "Tracking" (Main referral data)
```
Column A: Referral ID (REF-001, REF-002, etc.)
Column B: Date Received
Column C: Customer Name
Column D: Customer Email
Column E: Partner Code (AZURE-JOHN, etc.)
Column F: Retail Price
Column G: Your Revenue
Column H: Commission (Formula)
Column I: Status (Pending/Active/Qualified/Earned/Paid)
Column J: Charter Date
Column K: Payment Date
Column L: Payment Reference
Column M: Notes
```

#### Tab 3: "Monthly Summary"
```
Column A: Month/Year
Column B: Total Referrals
Column C: Total Revenue
Column D: Total Commissions
Column E: Partners Paid
Column F: Outstanding Payments
```

#### Tab 4: "Settings"
```
Row 1: Commission Rates
Row 2: Payment Schedule
Row 3: Email Templates
Row 4: System Settings
Row 5: Your Email Address
```

## Step 3: Add Sample Data

### Partners Tab Sample:
```
A1: Partner ID    B1: Name           C1: Email              D1: Phone         E1: Code        F1: Status
A2: AZURE-JOHN    B2: John Smith     C2: john@email.com     D2: 555-0123     E2: AZURE-JOHN  F2: Active
A3: AZURE-MARY    B3: Mary Johnson   C3: mary@email.com     D3: 555-0456     E3: AZURE-MARY  F3: Active
```

### Tracking Tab Sample:
```
A1: Ref ID    B1: Date      C1: Customer    D1: Email           E1: Partner     F1: Retail  G1: Revenue  H1: Commission  I1: Status
A2: REF-001   B2: 1/15/25   C2: Bob Wilson  D2: bob@email.com   E2: AZURE-JOHN  F2: 5000    G2: 300      H2: 100         I2: Earned
A3: REF-002   B3: 1/20/25   C3: Sue Davis   D3: sue@email.com   E3: AZURE-MARY  F3: 7500    G3: 500      H3: 150         I3: Pending
```

## Step 4: Add Commission Formula

In the Tracking tab, Column H (Commission), add this formula in H2:

```excel
=IF(G2="","",IF(G2<=300,100,IF(G2<=500,150,IF(G2<=800,200,300))))
```

Copy this formula down to all rows. This automatically calculates:
- $300 revenue → $100 commission
- $500 revenue → $150 commission  
- $800 revenue → $200 commission
- $1000+ revenue → $300 commission

## Step 5: Add Partner Summary Formulas

In the Partners tab, add these formulas:

**Column I (Total Referrals) - in I2:**
```excel
=COUNTIF(Tracking!E:E,E2)
```

**Column J (Total Earned) - in J2:**
```excel
=SUMIF(Tracking!E:E,E2,Tracking!H:H)
```

Copy these formulas down for all partner rows.

## Step 6: Create Filtered Views for Partners

### For Partner "AZURE-JOHN":

1. **Go to Tracking tab**
2. **Click Data → Filter views → Create new filter view**
3. **Name it:** "John's Dashboard"
4. **Set filter on Column E (Partner Code):**
   - Click filter icon in Column E header
   - Uncheck "Select all"
   - Check only "AZURE-JOHN"
   - Click OK
5. **Hide sensitive columns** (optional):
   - Right-click columns you want to hide (like internal notes)
   - Select "Hide column"
6. **Save the filter view**
7. **Copy the filter view URL** - it will look like:
   ```
   https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit#gid=0&fvid=[VIEW_ID]
   ```

### For Partner "AZURE-MARY":

Repeat the same process but filter for "AZURE-MARY" instead.

## Step 7: Set Up Partner Access

### Option A: View-Only Access (Recommended)
1. **Share the filtered view URL** with each partner
2. **Set permissions to "Viewer"** - partners can see but not edit
3. **Partners bookmark their personal URL**

### Option B: Comment Access
1. Give partners "Commenter" access
2. They can add comments but not edit data
3. Useful if partners want to add notes about their referrals

## Step 8: Partner Dashboard Experience

### What John sees when he opens his link:
- **Only his referrals** in the Tracking tab
- **Real-time updates** as you add new referrals
- **Commission calculations** automatically updated
- **Clean, professional view** of his performance

### Sample Partner View:
```
John's Referrals Dashboard

Date      Customer     Status      Revenue   Commission   Payment Date
1/15/25   Bob Wilson   Earned      $300      $100        2/1/25
1/22/25   Jane Doe     Pending     $500      $150        Pending
1/28/25   Mike Smith   Qualified   $800      $200        Pending

Total Referrals: 3
Total Earned: $450
Pending Payments: $350
```

## Step 9: Automation Setup (Optional)

### Email Notifications
Add this Google Apps Script to send notifications:

```javascript
function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const range = e.range;
  
  // Check if status column was updated
  if (sheet.getName() === 'Tracking' && range.getColumn() === 9) {
    const row = range.getRow();
    const partnerCode = sheet.getRange(row, 5).getValue();
    const customerName = sheet.getRange(row, 3).getValue();
    const status = range.getValue();
    const commission = sheet.getRange(row, 8).getValue();
    
    // Send notification to partner
    sendPartnerNotification(partnerCode, customerName, status, commission);
  }
}

function sendPartnerNotification(partnerCode, customerName, status, commission) {
  // Get partner email from Partners tab
  const partnersSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Partners');
  const partnerData = partnersSheet.getDataRange().getValues();
  
  let partnerEmail = '';
  for (let i = 1; i < partnerData.length; i++) {
    if (partnerData[i][0] === partnerCode) {
      partnerEmail = partnerData[i][2];
      break;
    }
  }
  
  if (partnerEmail) {
    const subject = `Referral Update: ${customerName}`;
    const body = `
Hi there!

Update on your referral for ${customerName}:
Status: ${status}
${commission ? `Commission: $${commission}` : ''}

View your dashboard: [Your filtered view URL here]

Best regards,
Azure Yacht Group
    `;
    
    GmailApp.sendEmail(partnerEmail, subject, body);
  }
}
```

## Step 10: Partner Onboarding Process

### When you add a new partner:

1. **Add their info** to the Partners tab
2. **Create their filtered view** following Step 6
3. **Send them their personalized dashboard link**
4. **Include simple instructions:**

```
Welcome to Azure Yacht Group's Partner Program!

Your Personal Dashboard: [FILTERED_VIEW_URL]

This dashboard shows:
✅ All your referrals and their status
✅ Commission calculations in real-time  
✅ Payment tracking and history
✅ Your overall performance metrics

Bookmark this link - it updates automatically as we process your referrals!

Questions? Reply to this email anytime.
```

## Benefits of This Setup

### For You:
- ✅ **Single sheet to manage** - all data in one place
- ✅ **Automatic calculations** - formulas handle everything
- ✅ **Real-time partner updates** - no manual reporting needed
- ✅ **Easy to backup and maintain**
- ✅ **Scales to 50+ partners easily**

### For Partners:
- ✅ **Professional dashboard experience**
- ✅ **Real-time commission tracking**
- ✅ **No technical setup required**
- ✅ **Works on mobile and desktop**
- ✅ **Always up-to-date information**

## Troubleshooting

### Common Issues:

**Partner can't see their data:**
- Check that filter view is set correctly
- Verify partner code matches exactly
- Ensure they're using the right URL

**Formulas not calculating:**
- Check that columns have proper data types
- Verify formula syntax
- Make sure there are no empty cells breaking the calculation

**Partner sees other partners' data:**
- Double-check filter view settings
- Make sure you shared the filtered view URL, not the main sheet URL

This setup gives you a professional, scalable partner tracking system that's easy to manage and provides excellent transparency for your referral partners! 