---
id: free-referral-system
title: Free Referral System Implementation
sidebar_position: 13
description: Complete free referral system using Google Sheets, free HubSpot, and basic tracking
---

# Complete Free Referral System Architecture

## 🎯 System Overview

**100% Free Solution - Zero Monthly Costs**
- Google Sheets for tracking and commission calculations
- Trello webhook automation (free tier)
- Gmail notifications (free tier)
- Manual QuickBooks entry (no paid integrations)
- Zelle payments (free transfers)

**Setup Time:** 45 minutes  
**Monthly Maintenance:** 30 minutes  
**System Capacity:** 100+ partners, 500+ referrals/month

---

## 💰 Commission Structure (Hybrid Model)

Based on your actual revenue after yacht owner's cut:

| Your Revenue | Commission | Typical Retail Value |
|-------------|-----------|---------------------|
| $300 | **$100** | ~$5,000 |
| $500 | **$150** | ~$7,500 |
| $800 | **$200** | ~$10,000+ |
| $1000+ | **$300** | ~$15,000+ |

**Revenue Calculation:** Your Revenue = Retail Price - Yacht Owner's Cut  
**Trigger Stage:** "Proposal" (when moving from New Lead)  
**Payment Method:** Zelle (recorded as "Cash Payment" in QuickBooks)

---

## 🏗️ System Architecture

### Current Trello Workflow Integration
1. **New Lead** → 2. **Proposal** ⚡*Auto-trigger* → 3. **Review** → 4. **Scheduled** → 5. **Follow up** → 6. **Completed** / **Failed**

### Google Sheets Structure

**Sheet 1: Partners**
```
Partner ID | Name | Email | Phone | Referral Code | Status | Join Date | Zelle Info | Total Referrals | Total Earned
```

**Sheet 2: Tracking**
```
Referral ID | Date | Customer Name | Customer Email | Partner Code | Retail Price | Your Revenue | Commission | Status | Charter Date | Payment Date | Payment Ref | Notes
```

**Sheet 3: Monthly Summary**
```
Month | Total Referrals | Total Revenue | Total Commissions | Partners Paid | Outstanding
```

**Sheet 4: Settings**
```
Trello Board ID | Webhook URL | Email Template | Your Email
```

### Automated Commission Formula
```excel
=IF(G2="","",IF(G2<=300,100,IF(G2<=500,150,IF(G2<=800,200,300))))
```

---

## 🔧 Technical Implementation

### Google Apps Script Automation

**Webhook Handler:**
```javascript
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
```

**Data Processing:**
```javascript
function processReferral(card) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const trackingSheet = sheet.getSheetByName('Tracking');
  
  // Parse card description for referral data
  const description = card.desc || '';
  const referralData = parseReferralData(description);
  
  if (referralData && referralData.partnerCode) {
    // Add to tracking sheet with auto-calculated commission
    // Send email notification
    // Log for monthly processing
  }
}
```

### Trello Card Format (Required)

**Exact format for automation:**
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

### Email Automation

**New Referral Notification:**
```
Subject: New Referral Logged - REF-001

New referral has been automatically logged:

Referral ID: REF-001
Partner: AZURE-JOHN
Customer: John Smith
Revenue: $300
Commission: $100

View details in your Google Sheet.

Azure Yacht Group Referral System
```

---

## 💳 QuickBooks Integration (Manual)

### Categories Setup

**Income Categories:**
- Charter Revenue - Direct Booking
- Charter Revenue - Referral Booking

**Expense Categories:**
- Referral Partner Commissions
- Marketing - Partner Payments

### Monthly Process

1. **Export Data:** Download commission data from Google Sheets
2. **Create Entries:** Manual entry in QuickBooks for partner payments
3. **Categorize Revenue:** Mark referral vs direct bookings
4. **Track Expenses:** Log all commission payments with partner details

**Sample Entries:**
```
INCOME:
Charter Revenue - Referral Booking: $5,000
Description: Yacht charter via AZURE-JOHN referral

EXPENSES:
Referral Partner Commissions: $100
Description: Commission payment to John Smith - Zelle
```

---

## 📧 Communication Templates

### Partner Onboarding Email
```
Subject: Welcome to Azure Yacht Group Referral Program

Hi [Partner Name],

Welcome to our referral program! Here are your details:

Referral Code: [AZURE-PARTNERNAME]
Commission Structure: $100-300 per booking
Payment Method: Monthly via Zelle

Your Partner Booklet: [Link to partner materials]
Track Your Performance: [Link to dashboard]

Start promoting and earning today!

Best regards,
Azure Yacht Group Team
```

### Monthly Commission Report
```
Subject: Monthly Commission Report - [Month Year]

Hi [Partner Name],

Your referral performance for [Month]:
- Referrals Generated: [Count]
- Total Commission Earned: $[Amount]
- Payment Sent: $[Amount] via Zelle
- Confirmation Number: [Zelle Ref]

Thank you for your continued partnership!

Next month's goal: [Suggested target]

Best regards,
Azure Yacht Group
```

---

## 📊 Operational Workflow

### Daily Operations

**When Referral Lead Arrives:**
1. Create Trello card with exact format
2. Process through normal workflow
3. Move to "Proposal" → **Auto-logging triggers**
4. System handles tracking and notifications

**Manual Tasks:**
- Verify customer details
- Confirm charter logistics
- Process booking payments
- Update Trello status

### Monthly Commission Process

**1st of Each Month:**
1. **Review:** Filter Tracking sheet for "Pending" commissions
2. **Verify:** Confirm all completed charters
3. **Pay:** Send Zelle payments to partners
4. **Update:** Mark payments as "Paid" with reference numbers
5. **Report:** Send monthly performance emails

### Quarterly Review

**Business Analysis:**
- Partner performance rankings
- Commission structure optimization
- System capacity planning
- ROI analysis on referral program

---

## 🔍 Quality Control

### Data Validation

**Automated Checks:**
- Commission calculations verify against revenue
- Partner codes validate against Partners sheet
- Email notifications confirm successful logging
- Monthly totals reconcile with individual entries

**Manual Verification:**
- Spot-check 10% of referrals monthly
- Verify Zelle payment confirmations
- Cross-reference QuickBooks entries
- Partner feedback on payment accuracy

### Error Prevention

**Common Issues & Solutions:**
- **Wrong commission calculation:** Check revenue entry format
- **Missing referral data:** Verify Trello card format
- **Email not sent:** Check Gmail quota and permissions
- **Webhook failure:** Test Google Apps Script logs

---

## 📈 System Scaling

### Current Capacity (Free Tiers)
- **Google Sheets:** 10 million cells (unlimited practical use)
- **Gmail:** 100 emails/day (sufficient for notifications)
- **Apps Script:** 6 minutes runtime per execution
- **Trello:** Unlimited webhooks

### Growth Planning

**Month 1-3:** 5-15 partners, $500-1,500 monthly commissions
**Month 4-6:** 15-30 partners, $1,500-3,000 monthly commissions  
**Month 7-12:** 30-50 partners, $3,000-5,000 monthly commissions

**Scaling Indicators:**
- Gmail quota approaching limit (80+ emails/day)
- Google Sheets response time slowing
- Manual payment processing taking >2 hours monthly

---

## 🎯 Success Metrics

### Performance Tracking

**Partner Metrics:**
- Referral conversion rate (leads to bookings)
- Average commission per partner per month
- Partner retention rate
- Time from referral to booking

**Business Metrics:**
- Referral revenue as % of total revenue
- Cost per acquisition via referrals
- Partner program ROI
- Monthly growth in referral bookings

### Target Benchmarks

**Month 1:** 5 partners, 2 bookings, $15K referral revenue
**Month 3:** 15 partners, 8 bookings, $50K referral revenue
**Month 6:** 25 partners, 15 bookings, $100K referral revenue
**Year 1:** 50 partners, 30 monthly bookings, $200K+ referral revenue

This system provides professional-grade referral tracking and management while maintaining zero monthly costs and requiring minimal maintenance time. 