---
id: free-referral-system
title: Free Referral System Implementation
sidebar_position: 13
description: Complete free referral system using Google Sheets, free HubSpot, and basic tracking
---

# Complete Free Referral System Integration

## System Overview

**Revenue Calculation:** Revenue = Retail Price - Yacht Owner's Cut  
**Trigger Stage:** "Proposal" (when moving from New Lead → Proposal)  
**Payment Method:** Zelle (recorded as "Cash Payment" in QuickBooks)  

### Current Trello Workflow
1. **New Lead** → 2. **Proposal** → 3. **Review** → 4. **Scheduled** → 5. **Follow up** → 6. **Completed** / **Failed**

## Commission Structure (Hybrid Model)

| Your Revenue | Commission | Retail Booking Value |
|-------------|-----------|---------------------|
| $300 | $100 | ~$5,000 |
| $500 | $150 | ~$7,500 |
| $800 | $200 | ~$10,000+ |
| $1000+ | $300 | ~$15,000+ |

## Complete System Components

### 1. Google Sheets Template

**Sheet 1: Partner Database**
- Partner ID, Name, Email, Phone
- Referral Code, Join Date, Status
- Payment Method (Zelle info)
- Total Referrals, Total Commissions

**Sheet 2: Referral Tracking**
- Referral ID, Partner Code, Customer Name
- Retail Price, Your Revenue, Commission Amount
- Booking Date, Status, Payment Status
- Trello Card Link

**Sheet 3: Commission Calculator**
```
=IF(B2<=300,100,IF(B2<=500,150,IF(B2<=800,200,300)))
```

### 2. Trello Integration (Free Method)

**Card Description Format:**
```
Yacht: [Yacht Name]
Product: [Charter Type]
Date: [Charter Date]
Retail Price: $[Amount]
Your Revenue: $[Amount] 
Referral Partner: [Partner Name/Code]
Commission Due: $[Amount]

Client: [Name]
Email: [Email]
Phone: [Phone]
```

**When Moving to "Proposal" Stage:**
1. Copy card details to Google Sheets
2. Calculate commission automatically
3. Send email notification to partner
4. Create QuickBooks invoice (manual entry)

### 3. Automation Setup (Free Tools)

**Google Apps Script (Free):**
```javascript
// Trello Webhook Handler
function handleTrelloWebhook(e) {
  const data = JSON.parse(e.postData.contents);
  
  if (data.action.type === 'updateCard' && 
      data.action.data.listAfter.name === 'Proposal') {
    
    // Extract card data
    const card = data.action.data.card;
    const description = card.desc;
    
    // Parse referral info
    if (description.includes('Referral Partner:')) {
      processReferral(card);
    }
  }
}

function processReferral(card) {
  // Add to tracking sheet
  // Calculate commission
  // Send notifications
  // Log for QuickBooks
}
```

### 4. QuickBooks Categories

**Revenue Categories:**
- "Charter Revenue - Direct"
- "Charter Revenue - Referral"

**Expense Categories:**
- "Referral Commissions"
- "Partner Payments"

**Sample Entries:**
```
INCOME:
Charter Revenue - Referral: $2,000 (Retail Price)

EXPENSES:
Yacht Owner Payment: $1,500
Referral Commission: $150
```

### 5. HubSpot Integration

**Partner Contact Properties:**
- Partner Status: "Active Referral Partner"
- Referral Code: [Unique Code]
- Commission Tier: [Based on volume]
- Payment Method: "Zelle"
- Total Referrals: [Count]
- Total Commissions: [Amount]

**Deal Properties for Referral Bookings:**
- Referral Source: [Partner Name]
- Commission Amount: [Calculated]
- Commission Status: "Pending/Paid"

### 6. Email Templates

**Partner Notification (New Referral):**
```
Subject: New Referral Confirmed - Commission $[Amount]

Hi [Partner Name],

Great news! Your referral has moved to proposal stage:

Customer: [Name]
Charter Date: [Date]
Your Commission: $[Amount]
Status: Pending Confirmation

We'll process payment via Zelle once the booking is completed.

Best regards,
Azure Yacht Group
```

**Commission Payment Notification:**
```
Subject: Commission Payment Sent - $[Amount]

Hi [Partner Name],

Your commission has been sent via Zelle:

Amount: $[Amount]
Transaction: [Reference]
Booking: [Customer Name - Date]

Thank you for the referral!
```

### 7. Implementation Steps

**Week 1: Setup**
1. Create Google Sheets template
2. Set up Trello webhook
3. Configure email templates
4. Create QuickBooks categories

**Week 2: Testing**
1. Test with sample referral
2. Verify commission calculation
3. Test email notifications
4. Check QuickBooks integration

**Week 3: Partner Onboarding**
1. Add existing partners to system
2. Generate referral codes
3. Send tracking links
4. Train team on process

**Week 4: Go Live**
1. Activate automation
2. Monitor first referrals
3. Process first payments
4. Gather feedback

### 8. Daily Workflow

**When Lead Comes In:**
1. Create Trello card in "New Lead"
2. Add referral partner info if applicable
3. Include retail price and revenue calculation

**When Moving to "Proposal":**
1. System automatically logs referral
2. Calculates commission
3. Sends partner notification
4. Adds to QuickBooks queue

**When Booking Confirmed:**
1. Create customer invoice
2. Record yacht owner payment
3. Process partner commission via Zelle
4. Update all tracking systems

### 9. Reporting Dashboard

**Monthly Partner Report:**
- Total referrals by partner
- Commission amounts
- Payment status
- Top performing partners

**Business Analytics:**
- Referral vs direct bookings
- Average commission per referral
- Partner acquisition costs
- Revenue attribution

### 10. Quality Control

**Monthly Reviews:**
- Verify commission calculations
- Check payment records
- Update partner performance
- Review system accuracy

**Partner Communication:**
- Monthly performance reports
- Quarterly strategy calls
- Annual partner appreciation events
- Ongoing training and support

## Cost Breakdown

**Monthly Costs: $0**
- Google Workspace: Free tier
- Trello: Free tier
- Email: Gmail free
- Tracking: Google Sheets free
- Automation: Google Apps Script free

**One-time Setup: ~8 hours**
**Monthly Maintenance: ~2 hours**

This system scales to handle 50+ partners with zero monthly costs while providing professional tracking and automation. 