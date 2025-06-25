---
id: free-referral-google-sheets-template
title: Free Referral System - Google Sheets Template
sidebar_position: 14
description: Ready-to-use Google Sheets template for tracking referrals and commissions
---

# Free Referral System - Google Sheets Template

## Quick Setup Instructions

1. **Create a new Google Sheet**
2. **Create 4 tabs** with these exact names: `Partners`, `Bookings`, `Monthly Commissions`, `Metrics`
3. **Copy and paste** the templates below into each tab
4. **The formulas will work automatically** once you paste them

## Tab 1: Partners

### Column Headers (Row 1):
```
A1: Partner ID
B1: Partner Name  
C1: Email
D1: Phone
E1: Referral Code
F1: Status
G1: Join Date
H1: Commission Rate
I1: Total Referrals
J1: Total Commissions Earned
K1: Total Paid
L1: Balance Due
```

### Sample Data (Row 2):
```
A2: PARTNER-001
B2: Sarah Johnson
C2: sarah@email.com
D2: (555) 123-4567
E2: PARTNER-SARAH
F2: Active
G2: 1/15/2025
H2: 0.15
I2: =COUNTIF(Bookings!G:G,E2)
J2: =SUMIF(Bookings!G:G,E2,Bookings!J:J)
K2: 0
L2: =J2-K2
```

### Formulas to Copy:
- **Total Referrals (I2)**: `=COUNTIF(Bookings!G:G,E2)`
- **Total Commissions (J2)**: `=SUMIF(Bookings!G:G,E2,Bookings!J:J)`
- **Balance Due (L2)**: `=J2-K2`

## Tab 2: Bookings

### Column Headers (Row 1):
```
A1: Booking ID
B1: Customer Name
C1: Customer Email
D1: Booking Date
E1: Charter Date
F1: Charter Value
G1: Referral Code Used
H1: Partner Name
I1: Commission Rate
J1: Commission Amount
K1: Commission Status
L1: Payment Date
```

### Sample Data (Row 2):
```
A2: BOOK-001
B2: John Smith
C2: john@email.com
D2: 1/20/2025
E2: 2/15/2025
F2: 5000
G2: PARTNER-SARAH
H2: =IFERROR(VLOOKUP(G2,Partners!E:B,2,FALSE),"No Partner")
I2: =IFERROR(VLOOKUP(G2,Partners!E:H,4,FALSE),0)
J2: =F2*I2
K2: Pending
L2: 
```

### Formulas to Copy:
- **Partner Name (H2)**: `=IFERROR(VLOOKUP(G2,Partners!E:B,2,FALSE),"No Partner")`
- **Commission Rate (I2)**: `=IFERROR(VLOOKUP(G2,Partners!E:H,4,FALSE),0)`
- **Commission Amount (J2)**: `=F2*I2`

## Tab 3: Monthly Commissions

### Column Headers (Row 1):
```
A1: Month/Year
B1: Partner Name
C1: Number of Bookings
D1: Total Revenue Generated
E1: Commission Earned
F1: Payment Status
G1: Payment Date
H1: Payment Method
```

### Sample Data (Row 2):
```
A2: January 2025
B2: Sarah Johnson
C2: 3
D2: 15000
E2: 2250
F2: Paid
G2: 1/31/2025
H2: PayPal
```

## Tab 4: Metrics

### Create a Simple Dashboard:
```
A1: METRICS DASHBOARD
A3: Total Active Partners
B3: =COUNTIF(Partners!F:F,"Active")

A4: Total Bookings This Month
B4: =COUNTIFS(Bookings!D:D,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1),Bookings!D:D,"<"&DATE(YEAR(TODAY()),MONTH(TODAY())+1,1))

A5: Referral Bookings This Month
B5: =COUNTIFS(Bookings!D:D,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1),Bookings!D:D,"<"&DATE(YEAR(TODAY()),MONTH(TODAY())+1,1),Bookings!G:G,"<>")

A6: Total Revenue This Month
B6: =SUMIFS(Bookings!F:F,Bookings!D:D,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1),Bookings!D:D,"<"&DATE(YEAR(TODAY()),MONTH(TODAY())+1,1))

A7: Referral Revenue This Month
B7: =SUMIFS(Bookings!F:F,Bookings!D:D,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1),Bookings!D:D,"<"&DATE(YEAR(TODAY()),MONTH(TODAY())+1,1),Bookings!G:G,"<>")

A8: Commission Owed
B8: =SUMIF(Bookings!K:K,"Pending",Bookings!J:J)

A9: Commission Paid This Month
B9: =SUMIFS(Bookings!J:J,Bookings!L:L,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1),Bookings!L:L,"<"&DATE(YEAR(TODAY()),MONTH(TODAY())+1,1))
```

## How to Use This Template

### Adding a New Partner:
1. **Go to Partners tab**
2. **Add new row** with partner info
3. **Referral code format**: PARTNER-FIRSTNAME (all caps)
4. **Commission rate**: 0.15 (for 15%)
5. **Status**: Active
6. **Formulas will auto-calculate** referrals and commissions

### Adding a New Booking:
1. **Go to Bookings tab**
2. **Add new row** with booking details
3. **If referral**: Add referral code in column G
4. **If no referral**: Leave column G empty
5. **Commission calculates automatically**

### Monthly Commission Process:
1. **Filter Bookings tab** by "Pending" status
2. **Review all pending commissions**
3. **Pay partners** (PayPal, Venmo, etc.)
4. **Update status to "Paid"**
5. **Add payment date**
6. **Copy summary to Monthly Commissions tab**

## Sample Partner Tracking Links

### Create these in bit.ly:
```
Partner: Sarah Johnson
Code: PARTNER-SARAH
Short Link: bit.ly/azure-sarah
Destination: https://azureyachtgroup.com/charter-inquiry?ref=PARTNER-SARAH

Partner: Mike Chen
Code: PARTNER-MIKE
Short Link: bit.ly/azure-mike
Destination: https://azureyachtgroup.com/charter-inquiry?ref=PARTNER-MIKE
```

## Email Templates

### New Partner Welcome Email:
```
Subject: Welcome to Azure Yacht Group Partner Program!

Hi [Partner Name],

Welcome! Here are your referral details:

🔗 Your Tracking Link: [bit.ly link]
💰 Commission Rate: 15%
📅 Payment Schedule: Monthly (end of month)
📊 Track Performance: [Google Sheet link - view only]

How to earn:
1. Share your link on social media
2. Tell friends about our yacht charters  
3. Mention your code: [PARTNER-CODE]

Questions? Just reply to this email!

Best,
Azure Yacht Group Team
```

### Monthly Commission Statement:
```
Subject: Commission Statement - [Month Year]

Hi [Partner Name],

Your commission summary for [Month]:

📈 Referrals: [Number]
💵 Revenue Generated: $[Amount]  
💰 Commission Earned: $[Amount]
✅ Payment: Sent via [PayPal/Venmo] on [Date]

Keep up the great work!

Best,
Azure Yacht Group Team
```

## Quick Start Checklist

### Day 1: Setup
- [ ] Create Google Sheet with 4 tabs
- [ ] Copy all templates and formulas
- [ ] Test with sample data
- [ ] Create bit.ly account

### Day 2: First Partner
- [ ] Create Google Form for applications
- [ ] Add first partner to sheet
- [ ] Create their tracking link
- [ ] Send welcome email

### Day 3: Website Integration
- [ ] Add tracking script to Tilda site
- [ ] Test referral flow
- [ ] Create marketing materials folder

### Ongoing: 
- [ ] Check sheet weekly for new bookings
- [ ] Process commissions monthly
- [ ] Send partner statements
- [ ] Add new partners as they apply

## Pro Tips

### Make It Even Easier:
1. **Pin the Google Sheet** to your browser bookmarks
2. **Create phone shortcuts** to add bookings quickly
3. **Set monthly calendar reminder** for commission processing
4. **Use Google Sheets mobile app** for on-the-go updates

### Partner Recruitment:
1. **Start with friends** who have social media following
2. **Look for local influencers** in Miami/yacht scene
3. **Reach out to event planners** and wedding coordinators
4. **Contact luxury lifestyle bloggers**

This simple system costs $0 and can handle 50+ partners easily! 