---
id: free-referral-system
title: Free Referral System Implementation
sidebar_position: 13
description: Complete free referral system using Google Sheets, free HubSpot, and basic tracking
---

# Free Referral System Implementation

## Overview

This is a **completely free** referral system that uses only free tools you likely already have or can get for free. No paid subscriptions, no complex integrations - just simple, effective referral tracking.

## Free Tools We'll Use

### ✅ What You Need (All Free)
- **Google Sheets** - Referral tracking and commission calculations
- **HubSpot Free** - Basic CRM (up to 1,000,000 contacts)
- **Tilda Website** - Your existing website
- **Gmail** - Email notifications
- **Google Forms** - Partner application form
- **Bit.ly** - Free link shortening and basic tracking
- **Zapier Free** - 5 free Zaps for basic automation

## Simple Referral System Structure

### How It Works (Simple Version)

1. **Partner Signs Up** → Fills Google Form → Gets added to Google Sheet
2. **Partner Gets Unique Code** → Simple format like "PARTNER-JOHN" 
3. **Customer Books** → Mentions referral code → You track in Google Sheet
4. **Commission Calculated** → Automatic formula in Google Sheet
5. **Partner Gets Paid** → Monthly manual payment based on sheet

## Step-by-Step Setup

### Step 1: Create Partner Application Form (Google Forms)

Create a simple Google Form with these fields:
```
Partner Application Form:
- Full Name
- Email Address
- Phone Number
- Social Media Handles (Instagram, TikTok, etc.)
- Follower Count (approximate)
- Why do you want to promote yacht charters?
- How will you promote our services?
```

**Form Settings:**
- Collect email addresses: Yes
- Send copy of responses to applicant: Yes
- Automatically send to Google Sheet: Yes

### Step 2: Create Referral Tracking Sheet

Create a Google Sheet with these tabs:

#### Tab 1: "Partners"
```
Column A: Partner ID (AUTO: PARTNER-001, PARTNER-002, etc.)
Column B: Partner Name
Column C: Email
Column D: Phone
Column E: Referral Code (AUTO: PARTNER-FIRSTNAME)
Column F: Status (Active/Inactive)
Column G: Join Date
Column H: Commission Rate (15%)
Column I: Total Referrals
Column J: Total Commissions Earned
Column K: Total Paid
Column L: Balance Due
```

#### Tab 2: "Bookings"
```
Column A: Booking ID
Column B: Customer Name
Column C: Customer Email
Column D: Booking Date
Column E: Charter Date
Column F: Charter Value
Column G: Referral Code Used
Column H: Partner Name (VLOOKUP from Partners tab)
Column I: Commission Rate
Column J: Commission Amount (=F*I)
Column K: Commission Status (Pending/Paid)
Column L: Payment Date
```

#### Tab 3: "Monthly Commissions"
```
Column A: Month/Year
Column B: Partner Name
Column C: Number of Bookings
Column D: Total Revenue Generated
Column E: Commission Earned
Column F: Payment Status
Column G: Payment Date
Column H: Payment Method
```

### Step 3: Set Up Automatic Formulas

#### In Partners Tab:
```
Total Referrals (Column I):
=COUNTIF(Bookings!G:G,E2)

Total Commissions Earned (Column J):
=SUMIF(Bookings!G:G,E2,Bookings!J:J)

Balance Due (Column L):
=J2-K2
```

#### In Bookings Tab:
```
Partner Name (Column H):
=VLOOKUP(G2,Partners!E:B,2,FALSE)

Commission Amount (Column J):
=F2*I2
```

### Step 4: Create Simple Tracking Links

#### Manual Method (Free):
For each partner, create simple tracking URLs:
```
Original: https://azureyachtgroup.com/charter-inquiry
Partner Link: https://azureyachtgroup.com/charter-inquiry?ref=PARTNER-JOHN

Or use Bit.ly for shorter links:
bit.ly/azure-john → redirects to your site with ?ref=PARTNER-JOHN
```

#### Add Simple Tracking to Your Tilda Site:
```html
<!-- Add this to your Tilda site footer -->
<script>
// Simple referral tracking
const urlParams = new URLSearchParams(window.location.search);
const refCode = urlParams.get('ref');

if (refCode) {
    // Store referral code in browser
    localStorage.setItem('referral_code', refCode);
    
    // Show referral message
    console.log('Referred by: ' + refCode);
    
    // Optional: Show discount message
    document.body.insertAdjacentHTML('afterbegin', 
        '<div style="background: #007bff; color: white; text-align: center; padding: 10px;">' +
        'Special offer! You were referred by one of our partners. Mention code "' + refCode + '" for 5% off!' +
        '</div>'
    );
}
</script>
```

### Step 5: Manual Booking Process

#### When Customer Contacts You:
1. **Ask about referral**: "How did you hear about us?"
2. **Record in sheet**: Add booking to "Bookings" tab
3. **Include referral code**: If they mention a partner or code
4. **Automatic calculation**: Commission calculates automatically

#### Simple Booking Entry:
```
Just add one row to Bookings tab:
- Booking ID: BOOK-001
- Customer: John Smith
- Email: john@email.com
- Booking Date: Today's date
- Charter Date: Charter date
- Charter Value: $5,000
- Referral Code: PARTNER-SARAH (if applicable)
- Commission Status: Pending
```

### Step 6: Free Email Notifications

#### Set Up Gmail Notifications:
1. **Create Gmail labels**: "Referral Notifications", "Commission Payments"
2. **Use Google Sheets email function**:

```javascript
// Add this script to Google Sheets (Extensions > Apps Script)
function sendCommissionNotification(partnerEmail, partnerName, commissionAmount) {
  const subject = 'Commission Earned - Azure Yacht Group';
  const body = `
    Hi ${partnerName},
    
    Great news! You've earned a commission of $${commissionAmount} from a recent referral.
    
    Your commission will be paid at the end of the month along with your monthly statement.
    
    Keep up the great work!
    
    Best regards,
    Azure Yacht Group Team
  `;
  
  GmailApp.sendEmail(partnerEmail, subject, body);
}
```

### Step 7: Monthly Commission Process

#### End of Month Routine:
1. **Review Bookings tab**: Check all "Pending" commissions
2. **Update to "Paid"**: Change status after payment
3. **Send payments**: PayPal, Venmo, or bank transfer
4. **Send statements**: Email each partner their monthly summary

#### Simple Monthly Email:
```
Subject: Monthly Commission Statement - [Month Year]

Hi [Partner Name],

Here's your commission summary for [Month]:

Referrals: [Number]
Total Revenue Generated: $[Amount]
Commission Earned: $[Amount]
Payment Method: [PayPal/Venmo/Bank]

Thank you for your continued partnership!

Best regards,
Azure Yacht Group
```

## Partner Onboarding Process

### Step 1: Application Review
1. **Check Google Form responses**
2. **Review social media presence**
3. **Approve or decline**

### Step 2: Partner Setup
1. **Add to Partners sheet**
2. **Create referral code**: PARTNER-FIRSTNAME
3. **Create tracking link**: bit.ly/azure-firstname
4. **Send welcome email**

### Step 3: Welcome Email Template
```
Subject: Welcome to Azure Yacht Group Partner Program!

Hi [Name],

Welcome to our referral program! Here are your details:

Your Referral Code: [CODE]
Your Tracking Link: [LINK]
Commission Rate: 15%
Payment Schedule: Monthly

How to promote:
1. Share your tracking link on social media
2. Tell friends and followers about our yacht charters
3. Mention your referral code in posts

Marketing materials available at: [Google Drive folder]

Questions? Just reply to this email!

Best regards,
Azure Yacht Group Team
```

## Free Marketing Materials

### Create Simple Assets:
1. **Google Drive folder**: Share marketing images
2. **Canva templates**: Free yacht charter graphics
3. **Sample social posts**: Copy-paste content for partners
4. **Email signatures**: Simple HTML signatures with tracking links

### Sample Social Media Posts:
```
Instagram Post Ideas:
"Dream yacht charter in Miami! 🛥️ Use my link for special pricing: [LINK] #YachtCharter #Miami #LuxuryTravel"

"Just booked an amazing yacht day! DM me for details or use: [LINK] #YachtLife #Charter"

Facebook Post:
"Planning a special event? Yacht charters are perfect for birthdays, anniversaries, or just because! Check out Azure Yacht Group: [LINK]"
```

## Performance Tracking (Free)

### Monthly Metrics to Track:
```
In your Google Sheet, create a "Metrics" tab:

Month | Total Partners | Active Partners | Total Bookings | Referral Bookings | Referral Revenue | Commission Paid
Jan   | 10            | 8              | 15             | 5                | $25,000         | $3,750
Feb   | 12            | 10             | 18             | 7                | $35,000         | $5,250
```

### Simple Dashboard:
Use Google Sheets charts to create:
- Monthly referral revenue
- Top performing partners
- Conversion rates
- Commission payouts

## Scaling the Free System

### When You Outgrow Free Tools:
1. **More than 5 Zapier automations needed** → Consider paid Zapier
2. **More than 1,000 contacts** → Consider paid HubSpot
3. **Complex commission structures** → Consider dedicated software

### But for now, this free system can handle:
- 50+ partners
- 100+ bookings per month
- Multiple commission rates
- Basic tracking and reporting

## Implementation Checklist

### Week 1: Setup
- [ ] Create Google Form for partner applications
- [ ] Set up Google Sheets with all tabs and formulas
- [ ] Create bit.ly account for link shortening
- [ ] Add tracking script to Tilda website

### Week 2: Testing
- [ ] Test the entire flow with a dummy partner
- [ ] Verify formulas calculate correctly
- [ ] Test email notifications
- [ ] Create marketing materials folder

### Week 3: Launch
- [ ] Recruit first 5 partners
- [ ] Send welcome emails with tracking links
- [ ] Monitor first referrals
- [ ] Adjust process based on feedback

## Cost Breakdown

### Setup Costs: $0
### Monthly Costs: $0
### Time Investment: 
- Setup: 4-6 hours
- Monthly maintenance: 2-3 hours
- Per booking processing: 5 minutes

## Success Metrics

### Month 1 Goals:
- 5 active partners
- 2 referral bookings
- $10,000 referral revenue
- $1,500 commission paid

### Month 3 Goals:
- 15 active partners
- 8 referral bookings
- $40,000 referral revenue
- $6,000 commission paid

This free system will work perfectly for getting started and can easily handle your first 50 partners and hundreds of bookings before you need to consider paid solutions! 