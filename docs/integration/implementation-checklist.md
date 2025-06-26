# Referral System Implementation Checklist

## Quick Start Guide (30 Minutes Setup)

### ✅ Phase 1: Google Sheets Setup (10 minutes)

**Step 1: Create the Sheet**
1. Go to [sheets.google.com](https://sheets.google.com)
2. Click "Blank" to create new sheet
3. Rename to "Azure Referral System"

**Step 2: Create 5 Tabs**
1. Rename "Sheet1" to "Partners"
2. Add 4 more sheets: "Tracking", "CommissionCalc", "Monthly Summary", "QuickBooks Log"

**Step 3: Add Headers**

**Partners Tab (Row 1):**
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
J1: Total Commissions
```

**Tracking Tab (Row 1):**
```
A1: Referral ID
B1: Date
C1: Customer Name
D1: Partner Code
E1: Retail Price
F1: Your Revenue
G1: Commission
H1: Status
I1: Payment Date
J1: Zelle Ref
K1: Trello Link
L1: Notes
```

**Step 4: Add Sample Data**

**Partners Tab (Row 2):**
```
A2: PARTNER-001
B2: Test Partner
C2: test@email.com
D2: 555-0123
E2: AZURE-TEST
F2: Active
G2: =TODAY()
H2: test@zelle.com
I2: =COUNTIF(Tracking!D:D,E2)
J2: =SUMIF(Tracking!D:D,E2,Tracking!G:G)
```

**Tracking Tab (Row 2):**
```
A2: REF-001
B2: =TODAY()
C2: Sample Customer
D2: AZURE-TEST
E2: 5000
F2: 300
G2: =IF(F2<=300,100,IF(F2<=500,150,IF(F2<=800,200,300)))
H2: Pending
```

### ✅ Phase 2: Google Apps Script (10 minutes)

**Step 1: Open Script Editor**
1. In your Google Sheet, go to "Extensions" → "Apps Script"
2. Delete existing code
3. Copy and paste the script from `google-sheets-referral-template.md`

**Step 2: Save and Deploy**
1. Click "Save" (Ctrl+S)
2. Click "Deploy" → "New deployment"
3. Choose "Web app"
4. Execute as: "Me"
5. Access: "Anyone"
6. Click "Deploy"
7. **Copy the webhook URL** (you'll need this)

**Step 3: Authorize**
1. Click "Review permissions"
2. Choose your Google account
3. Click "Advanced" → "Go to [project name]"
4. Click "Allow"

### ✅ Phase 3: Trello Integration (5 minutes)

**Step 1: Get Trello API Key**
1. Go to [trello.com/app-key](https://trello.com/app-key)
2. Copy your API Key
3. Click "Token" link and authorize
4. Copy your Token

**Step 2: Create Webhook**
```bash
curl -X POST \
  https://api.trello.com/1/webhooks/ \
  -H 'Content-Type: application/json' \
  -d '{
    "key": "YOUR_API_KEY",
    "token": "YOUR_TOKEN",
    "callbackURL": "YOUR_GOOGLE_SCRIPT_URL",
    "idModel": "616c44a04ceba22a63045783",
    "description": "Azure Referral Webhook"
  }'
```

**Or use this simple method:**
1. Install Trello webhook browser extension
2. Point to your Google Script URL
3. Select your "Azure Charter Leads" board

### ✅ Phase 4: QuickBooks Categories (3 minutes)

**Add These Categories in QuickBooks:**

**Income Categories:**
- Charter Revenue - Direct
- Charter Revenue - Referral

**Expense Categories:**
- Referral Commissions
- Partner Payments

### ✅ Phase 5: Test the System (2 minutes)

**Step 1: Create Test Trello Card**
1. Go to your Trello board
2. Create card in "New Lead" with this description:
```
Yacht: Test Yacht
Product: Half-Day Charter
Date: Tomorrow
Retail Price: $5,000
Your Revenue: $300
Referral Partner: AZURE-TEST
Commission Due: $100

Client: Test Customer
Email: test@test.com
Phone: 555-0123
```

**Step 2: Move to Proposal**
1. Drag card from "New Lead" to "Proposal"
2. Check your Google Sheet - should auto-populate
3. Check your email - should receive notification

## Daily Workflow

### When You Get a Referral Lead

**Step 1: Create Trello Card**
```
Yacht: [Yacht Name]
Product: [Charter Type]  
Date: [Charter Date]
Retail Price: $[Customer Pays]
Your Revenue: $[Your Profit]
Referral Partner: [Partner Code]

Client: [Customer Name]
Email: [Customer Email]
Phone: [Customer Phone]
```

**Step 2: Process Through Trello**
- Start in "New Lead"
- Move to "Proposal" → **System automatically logs referral**
- Continue through your normal workflow
- System tracks everything automatically

### Monthly Commission Process

**Step 1: Review Pending Commissions**
1. Open Google Sheet "Tracking" tab
2. Filter by Status = "Pending"
3. Verify all completed bookings

**Step 2: Process Payments**
1. Send Zelle payments to partners
2. Update "Payment Date" column
3. Change Status to "Paid"
4. Add Zelle reference number

**Step 3: Send Confirmations**
1. Email each partner their payment confirmation
2. Include monthly summary
3. Thank them for referrals

## Troubleshooting

### If Webhook Doesn't Work
1. Check Google Apps Script logs
2. Verify Trello webhook is active
3. Test with manual script trigger

### If Emails Don't Send
1. Check Gmail quota (100 emails/day free)
2. Verify email addresses in Partners sheet
3. Check spam folder

### If Formulas Don't Calculate
1. Verify sheet names match exactly
2. Check column references
3. Ensure data types are correct

## System Capacity

**Free Tier Limits:**
- Google Sheets: 10 million cells
- Gmail: 100 emails/day
- Apps Script: 6 minutes runtime/execution
- Trello: Unlimited webhooks

**Realistic Capacity:**
- 100+ partners
- 500+ referrals/month
- Unlimited tracking history
- Professional automation

## Next Steps After Setup

### Week 1: Add Real Partners
1. Replace test data with real partners
2. Generate unique referral codes
3. Send welcome emails with codes

### Week 2: Monitor and Adjust
1. Watch for successful webhook triggers
2. Verify commission calculations
3. Fine-tune email templates

### Week 3: Scale Up
1. Add more partners
2. Create marketing materials
3. Track performance metrics

### Month 1: Optimize
1. Review partner performance
2. Adjust commission structure if needed
3. Add additional automation

Your system will be fully operational and handling referrals automatically within 30 minutes of setup! 