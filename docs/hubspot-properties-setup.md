---
title: HubSpot Properties Manual Setup
sidebar_label: HubSpot Properties
---

# HubSpot Properties Manual Setup Guide

## Overview

This guide walks you through manually creating custom properties in HubSpot for Azure Yacht Group's referral system. **No API or coding required** - everything is done through HubSpot's interface.

## Why Manual Setup?

- ✅ **No API required** - Use HubSpot's built-in interface
- ✅ **One-time setup** - Takes 15-20 minutes total
- ✅ **Free tier compatible** - Works with HubSpot's free plan
- ✅ **Visual interface** - Easier to understand and modify
- ✅ **Immediate results** - Properties available instantly

## Prerequisites

- HubSpot account (free tier works)
- Admin access to HubSpot settings
- 15-20 minutes of time

---

## Step 1: Access Properties Settings

1. **Log into HubSpot** → Go to your HubSpot account
2. **Navigate to Settings** → Click the gear icon (⚙️) in the top right
3. **Go to Properties** → In the left sidebar: Data Management → Properties
4. **Select Object Type** → Choose "Contact properties" to start

---

## Step 2: Create Contact Properties

### Charter Information Group

First, create a new property group for better organization:

1. **Click "Create property group"**
2. **Group name:** `Charter Information`
3. **Save**

Now create these properties in the Charter Information group:

#### Property 1: Yacht Charter Interest
- **Label:** `Yacht Charter Interest`
- **Internal name:** `yacht_charter_interest`
- **Field type:** `Dropdown select`
- **Property group:** `Charter Information`
- **Options:**
  - Motor Yacht
  - Sailing Yacht
  - Catamaran
  - Luxury Yacht
  - Sport Yacht
  - Expedition Yacht
  - Not Sure

#### Property 2: Charter Budget Range
- **Label:** `Charter Budget Range`
- **Internal name:** `charter_budget_range`
- **Field type:** `Dropdown select`
- **Property group:** `Charter Information`
- **Options:**
  - $3,000 - $5,000
  - $5,000 - $10,000
  - $10,000 - $20,000
  - $20,000 - $50,000
  - $50,000+
  - I need help determining budget

#### Property 3: Preferred Charter Date
- **Label:** `Preferred Charter Date`
- **Internal name:** `charter_date_preference`
- **Field type:** `Date picker`
- **Property group:** `Charter Information`

#### Property 4: Group Size
- **Label:** `Group Size`
- **Internal name:** `group_size`
- **Field type:** `Number`
- **Property group:** `Charter Information`

#### Property 5: Charter Duration
- **Label:** `Charter Duration (Days)`
- **Internal name:** `charter_duration`
- **Field type:** `Dropdown select`
- **Property group:** `Charter Information`
- **Options:**
  - Half Day (4 hours)
  - Full Day (8 hours)
  - 2-3 Days
  - 1 Week
  - 2 Weeks
  - 1 Month+

#### Property 6: Charter Destination
- **Label:** `Charter Destination`
- **Internal name:** `charter_destination`
- **Field type:** `Single-line text`
- **Property group:** `Charter Information`

#### Property 7: Special Requirements
- **Label:** `Special Requirements`
- **Internal name:** `special_requirements`
- **Field type:** `Multi-line text`
- **Property group:** `Charter Information`

### Partner Management Group

Create a new property group: `Partner Management`

#### Property 8: Referral Partner
- **Label:** `Referral Partner`
- **Internal name:** `referral_partner`
- **Field type:** `Single-line text`
- **Property group:** `Partner Management`
- **Description:** `Partner code from referral URL`

#### Property 9: Partner Status
- **Label:** `Partner Status`
- **Internal name:** `partner_status`
- **Field type:** `Dropdown select`
- **Property group:** `Partner Management`
- **Options:**
  - Applied
  - Under Review
  - Approved
  - Active
  - Inactive
  - Suspended
  - Terminated

#### Property 10: Partner Type
- **Label:** `Partner Type`
- **Internal name:** `partner_type`
- **Field type:** `Dropdown select`
- **Property group:** `Partner Management`
- **Options:**
  - Travel Advisor
  - Concierge Service
  - Event Planner
  - Wealth Manager
  - Real Estate Agent
  - Hotel/Resort
  - Corporate Services
  - Other

#### Property 11: Partner Tier
- **Label:** `Partner Tier`
- **Internal name:** `partner_tier`
- **Field type:** `Dropdown select`
- **Property group:** `Partner Management`
- **Options:**
  - Bronze
  - Silver
  - Gold
  - Platinum

### Communication Preferences Group

Create a new property group: `Communication Preferences`

#### Property 12: Preferred Contact Method
- **Label:** `Preferred Contact Method`
- **Internal name:** `preferred_contact_method`
- **Field type:** `Dropdown select`
- **Property group:** `Communication Preferences`
- **Options:**
  - Email
  - Phone
  - Text/SMS
  - WhatsApp

#### Property 13: Best Time to Contact
- **Label:** `Best Time to Contact`
- **Internal name:** `best_time_to_contact`
- **Field type:** `Dropdown select`
- **Property group:** `Communication Preferences`
- **Options:**
  - Morning (9 AM - 12 PM)
  - Afternoon (12 PM - 5 PM)
  - Evening (5 PM - 8 PM)
  - Anytime

---

## Step 3: Create Deal Properties

1. **Switch to Deal Properties** → Click "Deal properties" in the dropdown
2. **Create property group:** `Charter Details`

### Charter Details Group

#### Property 1: Yacht Model Requested
- **Label:** `Yacht Model Requested`
- **Internal name:** `yacht_model_requested`
- **Field type:** `Single-line text`
- **Property group:** `Charter Details`

#### Property 2: Charter Start Date
- **Label:** `Charter Start Date`
- **Internal name:** `charter_start_date`
- **Field type:** `Date picker`
- **Property group:** `Charter Details`

#### Property 3: Charter Group Size
- **Label:** `Charter Group Size`
- **Internal name:** `charter_group_size`
- **Field type:** `Number`
- **Property group:** `Charter Details`

#### Property 4: Charter Duration Days
- **Label:** `Charter Duration (Days)`
- **Internal name:** `charter_duration_days`
- **Field type:** `Single-line text`
- **Property group:** `Charter Details`

#### Property 5: Charter Destination
- **Label:** `Charter Destination`
- **Internal name:** `charter_destination`
- **Field type:** `Single-line text`
- **Property group:** `Charter Details`

#### Property 6: Charter Special Requirements
- **Label:** `Charter Special Requirements`
- **Internal name:** `charter_special_requirements`
- **Field type:** `Multi-line text`
- **Property group:** `Charter Details`

### Deal Source Group

Create a new property group: `Deal Source`

#### Property 7: Deal Source
- **Label:** `Deal Source`
- **Internal name:** `deal_source`
- **Field type:** `Dropdown select`
- **Property group:** `Deal Source`
- **Options:**
  - Website Form
  - Phone Call
  - Email Inquiry
  - Social Media
  - Partner Referral
  - Trade Show
  - Other

#### Property 8: Referral Partner (Deal)
- **Label:** `Referral Partner`
- **Internal name:** `referral_partner_deal`
- **Field type:** `Single-line text`
- **Property group:** `Deal Source`

#### Property 9: Lead Quality Score
- **Label:** `Lead Quality Score`
- **Internal name:** `lead_quality_score`
- **Field type:** `Number`
- **Property group:** `Deal Source`

---

## Step 4: Verification Checklist

After creating all properties, verify:

### Contact Properties ✅
- [ ] Yacht Charter Interest (dropdown)
- [ ] Charter Budget Range (dropdown)
- [ ] Preferred Charter Date (date)
- [ ] Group Size (number)
- [ ] Charter Duration (dropdown)
- [ ] Charter Destination (text)
- [ ] Special Requirements (textarea)
- [ ] Referral Partner (text)
- [ ] Partner Status (dropdown)
- [ ] Partner Type (dropdown)
- [ ] Partner Tier (dropdown)
- [ ] Preferred Contact Method (dropdown)
- [ ] Best Time to Contact (dropdown)

### Deal Properties ✅
- [ ] Yacht Model Requested (text)
- [ ] Charter Start Date (date)
- [ ] Charter Group Size (number)
- [ ] Charter Duration Days (text)
- [ ] Charter Destination (text)
- [ ] Charter Special Requirements (textarea)
- [ ] Deal Source (dropdown)
- [ ] Referral Partner (text)
- [ ] Lead Quality Score (number)

---

## Step 5: Using Properties in Forms

### Form Field Mapping

When creating HubSpot forms, map these fields:

**Customer Inquiry Form:**
- Email → Email (default)
- First Name → First Name (default)
- Last Name → Last Name (default)
- Phone → Phone Number (default)
- Charter Date → Preferred Charter Date
- Group Size → Group Size
- Budget → Charter Budget Range
- Yacht Type → Yacht Charter Interest
- Destination → Charter Destination
- Special Requirements → Special Requirements
- Partner Code → Referral Partner (hidden field)

### URL Parameter Tracking

For partner referral tracking, use:
```
https://azureyachtgroup.com/charter-inquiry?partner=AZURE-JOHN
```

The form will automatically capture `AZURE-JOHN` in the Referral Partner field.

---

## Step 6: Reporting Setup

### Partner Performance Report

1. **Go to Reports** → Reports → Create custom report
2. **Data source:** Contacts
3. **Filters:** 
   - Referral Partner is known
   - Create date: Last 30 days
4. **Breakdown by:** Referral Partner
5. **Metrics:** 
   - Total contacts
   - Deals created
   - Deals won
   - Total deal value

### Charter Pipeline Report

1. **Data source:** Deals
2. **Filters:** Deal Source = "Partner Referral"
3. **Breakdown by:** Deal stage
4. **Metrics:** 
   - Total deals
   - Average deal value
   - Win rate
   - Average close time

---

## Troubleshooting

### Common Issues

**Property not showing in forms:**
- Check property is set to "Show in forms"
- Verify property group is active
- Clear browser cache and refresh

**Dropdown options not saving:**
- Ensure no special characters in options
- Keep option labels under 100 characters
- Save property before adding more options

**Partner tracking not working:**
- Verify URL parameter format: `?partner=CODE`
- Check form field mapping
- Ensure hidden field is configured correctly

### Support Resources

- **HubSpot Academy:** Free training courses
- **HubSpot Community:** User forums and discussions
- **HubSpot Support:** Free tier includes email support

---

## Summary

**Total Setup Time:** 15-20 minutes
**Properties Created:** 22 total (13 contact + 9 deal)
**API Required:** None
**Cost:** $0 (works with free HubSpot tier)

This manual setup provides all the functionality needed for Azure Yacht Group's referral system without requiring any API integration or coding. The properties integrate seamlessly with HubSpot forms, Zapier automations, and reporting tools.

**Next Steps:**
1. ✅ Complete property setup (this guide)
2. → [Set up HubSpot forms](/docs/integration/customer-inquiry-form-setup)
3. → [Configure Zapier automations](/docs/integration/zapier-implementation-guide)
4. → [Create partner dashboards](/docs/integration/google-sheets-filtered-views-setup) 