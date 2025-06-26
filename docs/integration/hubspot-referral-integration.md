# HubSpot Referral Integration

Complete CRM integration for Azure Yacht Group's referral system using HubSpot Free tier with automated workflows and partner tracking.

## Overview

This integration enhances the core referral system by adding professional CRM capabilities, automated follow-up sequences, and comprehensive partner performance analytics - all while maintaining the $0/month cost structure using HubSpot's free tier.

## System Architecture

```mermaid
graph TD
    A[Partner Referral] --> B[Trello Board]
    B --> C[Zapier Automation #1-3]
    C --> D[Google Sheets Dashboard]
    B --> E[Zapier Automation #4-5]
    E --> F[HubSpot CRM]
    F --> G[Automated Follow-up]
    F --> H[Lead Scoring]
    F --> I[Partner Analytics]
    D --> J[Partner Payments]
```

## Prerequisites

- ✅ Core referral system operational (Trello + Zapier + Google Sheets)
- ✅ HubSpot Free account (already in use)
- ✅ Zapier Free account (3 automations used, 2 remaining)

## Implementation Timeline

**Total Time: 20 minutes**
- HubSpot setup: 10 minutes
- Zapier integration: 10 minutes

## Step 1: HubSpot Account Setup (5 minutes)

### 1.1 Configure Custom Properties

Navigate to Settings → Properties → Contacts and create:

```
Referral Source Partner: Single-line text
Referral Commission Tier: Dropdown (Tier 1: $100, Tier 2: $200, Tier 3: $300)
Yacht Type Interest: Dropdown (Luxury Charter, Bareboat, Catamaran, Motor Yacht)
Charter Budget Range: Dropdown (<$5K, $5-15K, $15-30K, $30K+)
Partner Performance Score: Number (0-100)
```

### 1.2 Create Lead Status Pipeline

Settings → Objects → Deals → Pipelines:

```
Referral Pipeline:
- New Referral (0%)
- Initial Contact (10%)
- Qualified Lead (25%)
- Proposal Sent (50%)
- Negotiation (75%)
- Booking Confirmed (100%)
- Closed Lost (0%)
```

## Step 2: Zapier Automation #4 - Contact Creation (8 minutes)

### 2.1 Create New Zap

**Trigger:** Trello - "Card Added to List"
- Board: Azure Yacht Referrals
- List: New Leads

**Action:** HubSpot - "Create or Update Contact"

### 2.2 Field Mapping

```
Email: {{Card Name}} (extract email)
First Name: {{Card Description}} (extract first name)
Last Name: {{Card Description}} (extract last name)
Phone: {{Card Description}} (extract phone)
Referral Source Partner: {{Card Labels}}
Yacht Type Interest: {{Card Description}} (extract yacht type)
Charter Budget Range: {{Card Description}} (extract budget)
```

### 2.3 Test and Activate

- Send test data from Trello
- Verify contact creation in HubSpot
- Activate Zap

## Step 3: Zapier Automation #5 - Deal Creation (7 minutes)

### 3.1 Create New Zap

**Trigger:** HubSpot - "New Contact"
- Filter: Only contacts with "Referral Source Partner" populated

**Action:** HubSpot - "Create Deal"

### 3.2 Deal Configuration

```
Deal Name: "Referral: {{First Name}} {{Last Name}} - {{Referral Source Partner}}"
Pipeline: Referral Pipeline
Stage: New Referral
Amount: {{Charter Budget Range}} (use midpoint)
Close Date: +30 days from creation
Associated Contact: {{Contact ID}}
```

## Step 4: HubSpot Workflow Automation (5 minutes)

### 4.1 Create Referral Follow-up Workflow

Marketing → Workflows → Create Workflow

**Enrollment Trigger:** Contact property "Referral Source Partner" is known

**Workflow Actions:**

```
Day 0: Send welcome email template
Day 1: Internal notification to sales team
Day 3: Follow-up email with yacht options
Day 7: Personal outreach reminder
Day 14: Special offer email
Day 30: Partner performance update
```

### 4.2 Partner Performance Tracking

Create workflow for partner scoring:

**Trigger:** Deal stage changes to "Booking Confirmed"

**Actions:**
1. Update referring partner's performance score (+10 points)
2. Send partner notification of successful booking
3. Update Google Sheets with commission data
4. Create follow-up task for payment processing

## Step 5: Email Templates (10 minutes)

### 5.1 Welcome Email Template

```
Subject: Welcome to Azure Yacht Group - Your Charter Journey Begins

Hi {{contact.firstname}},

Thank you for your interest in yacht charters through our partner {{contact.referral_source_partner}}!

We're excited to help you find the perfect yacht for your next adventure. Based on your interest in {{contact.yacht_type_interest}}, I've prepared some exclusive options for you.

[CTA Button: View Your Personalized Yacht Selection]

Best regards,
Azure Yacht Group Charter Team
```

### 5.2 Follow-up Email Templates

Create templates for:
- Day 3: Personalized yacht recommendations
- Day 7: Special partnership discount
- Day 14: Limited-time charter packages
- Day 30: Seasonal charter opportunities

## Step 6: Reporting Dashboard (5 minutes)

### 6.1 Partner Performance Report

Create custom report in HubSpot:

```
Report Type: Custom Report
Primary Data Source: Contacts
Secondary Data Source: Deals

Filters:
- Referral Source Partner is known
- Create date: Last 30 days

Metrics:
- Total referrals by partner
- Conversion rate by partner
- Average deal value by partner
- Commission earned by partner
```

### 6.2 Referral Pipeline Report

```
Report Type: Deal Report
Pipeline: Referral Pipeline

Breakdown by:
- Deal stage
- Referral source partner
- Yacht type interest
- Budget range

Metrics:
- Total deals
- Won deals
- Average close time
- Total revenue
```

## Step 7: Partner Notification System (3 minutes)

### 7.1 Automated Partner Updates

Create workflow for partner notifications:

**Triggers:**
- Deal moves to "Qualified Lead" → Email partner: Lead is qualified
- Deal moves to "Booking Confirmed" → Email partner: Commission earned
- Deal moves to "Closed Lost" → Email partner: Follow-up opportunity

### 7.2 Monthly Partner Reports

Automated monthly email to partners with:
- Total referrals sent
- Conversion rate
- Commissions earned
- Top performing referral types
- Upcoming opportunities

## Testing Checklist

### Pre-Launch Testing

- [ ] Test referral from Trello → HubSpot contact creation
- [ ] Verify deal creation from new contacts
- [ ] Test email workflow sequences
- [ ] Confirm partner notifications
- [ ] Validate reporting accuracy
- [ ] Check Google Sheets synchronization

### Post-Launch Monitoring

**Week 1:**
- [ ] Monitor automation success rates
- [ ] Review email open/click rates
- [ ] Check partner feedback
- [ ] Verify commission calculations

**Monthly:**
- [ ] Analyze conversion rates by partner
- [ ] Review email template performance
- [ ] Update partner performance scores
- [ ] Optimize workflow timing

## Troubleshooting

### Common Issues

**Contact not created in HubSpot:**
- Check Trello card format matches expected structure
- Verify Zapier field mapping
- Confirm HubSpot API limits

**Emails not sending:**
- Check workflow enrollment criteria
- Verify email template approval status
- Confirm contact has valid email address

**Deals not creating:**
- Verify contact has required custom properties
- Check deal pipeline permissions
- Confirm Zapier connection to HubSpot

### Support Resources

- HubSpot Academy: Free CRM training
- Zapier Help Center: Integration guides
- Azure Yacht Group documentation: System overview

## ROI Metrics

### Expected Improvements

**Conversion Rate:** 15-25% increase through automated follow-up
**Partner Satisfaction:** 90%+ through transparent tracking
**Processing Time:** 80% reduction in manual tasks
**Lead Response Time:** Sub-1-hour automated responses

### Success Metrics

**Month 1 Targets:**
- 50+ referrals processed through HubSpot
- 85%+ automation success rate
- 20%+ conversion rate improvement
- 5+ active referring partners

**Quarterly Goals:**
- 200+ referrals processed
- 30%+ conversion rate
- $50,000+ in charter bookings from referrals
- 15+ active partner network

## Next Steps

1. **Complete Implementation** (20 minutes total)
2. **Train Team** on HubSpot workflows (30 minutes)
3. **Launch Partner Onboarding** using new system
4. **Monitor Performance** for first 30 days
5. **Optimize Based on Data** collected

---

**Implementation Status:** ✅ Ready for deployment
**Cost:** $0/month (HubSpot Free + Zapier Free)
**Maintenance:** 15 minutes/week monitoring
**Expected ROI:** 300%+ within 90 days 