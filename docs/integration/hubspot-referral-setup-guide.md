---
id: hubspot-referral-setup-guide
title: HubSpot Referral System - Step-by-Step Setup Guide
sidebar_position: 9
description: Detailed implementation guide with actual mechanics for setting up the influencer referral tracking system
---

# HubSpot Referral System - Step-by-Step Setup Guide

## Phase 1: HubSpot CRM Configuration

### Step 1.1: Create Custom Contact Properties for Influencers

**Navigate to:** Settings → Properties → Contact Properties

**Create these properties:**

```yaml
Property 1: Referral Partner ID
  - Internal Name: referral_partner_id
  - Field Type: Single-line text
  - Required: Yes
  - Description: Unique identifier for referral partner

Property 2: Partner Status
  - Internal Name: partner_status
  - Field Type: Dropdown
  - Options: 
    * New Application
    * Active
    * Inactive
    * Suspended
    * Terminated

Property 3: Referral Tier
  - Internal Name: referral_tier
  - Field Type: Dropdown
  - Options:
    * Tier 1 (0-5 bookings)
    * Tier 2 (6-15 bookings)
    * Tier 3 (16+ bookings)

Property 4: Total Referrals
  - Internal Name: total_referrals
  - Field Type: Number
  - Default Value: 0

Property 5: Total Commissions Earned
  - Internal Name: total_commissions_earned
  - Field Type: Number
  - Default Value: 0

Property 6: Commission Rate
  - Internal Name: commission_rate
  - Field Type: Number
  - Description: Current commission percentage (8, 10, or 12)

Property 7: Payment Method
  - Internal Name: payment_method
  - Field Type: Dropdown
  - Options:
    * PayPal
    * Bank Transfer
    * Check
    * Stripe

Property 8: Tax ID
  - Internal Name: tax_id
  - Field Type: Single-line text
  - Description: For 1099 reporting
```

### Step 1.2: Create Custom Deal Properties for Tracking

**Navigate to:** Settings → Properties → Deal Properties

```yaml
Property 1: Referral Source
  - Internal Name: referral_source
  - Field Type: Single-line text
  - Description: Referral code used

Property 2: Referring Partner ID
  - Internal Name: referring_partner_id
  - Field Type: Single-line text
  - Description: ID of referring partner

Property 3: Commission Amount
  - Internal Name: commission_amount
  - Field Type: Number
  - Description: Commission owed for this deal

Property 4: Commission Status
  - Internal Name: commission_status
  - Field Type: Dropdown
  - Options:
    * Pending
    * Approved
    * Paid
    * Disputed

Property 5: Original Referral Date
  - Internal Name: original_referral_date
  - Field Type: Date picker
  - Description: When referral link was first clicked
```

### Step 1.3: Create Custom Pipeline for Partner Management

**Navigate to:** Settings → Objects → Deals → Pipelines

**Create Pipeline:** "Partner Referral Tracking"

```yaml
Pipeline Stages:
1. Referral Received
   - Deal enters when referral is detected
   - Probability: 10%

2. Initial Contact
   - First contact with referred prospect
   - Probability: 25%

3. Proposal Sent
   - Charter proposal provided
   - Probability: 50%

4. Negotiation
   - Terms being discussed
   - Probability: 75%

5. Closed Won
   - Charter booked and confirmed
   - Probability: 100%

6. Closed Lost
   - Referral did not convert
   - Probability: 0%
```

## Phase 2: Workflow Automation Setup

### Step 2.1: Partner Onboarding Workflow

**Navigate to:** Automation → Workflows → Create Workflow

**Workflow Name:** "Partner Onboarding Automation"

**Configuration:**
```yaml
Trigger Type: Contact-based
Enrollment Trigger: 
  - Contact property "Partner Status" is equal to "New Application"

Actions Sequence:
1. Send Email: Welcome to Azure Partner Program
   - Template: Partner welcome email
   - Delay: None

2. Create Task
   - Task Title: "Review new partner application: {Contact Name}"
   - Assign to: Partner Manager
   - Due Date: 3 days from now

3. Set Property Value
   - Property: Partner Status
   - Value: Under Review
   - Delay: None

4. Generate Partner ID (Custom Code Action)
   - Code: Generate unique partner ID
   - Set referral_partner_id property

5. Send Internal Notification
   - Notify: Partner management team
   - Subject: New partner application received
```

### Step 2.2: Referral Tracking Workflow

**Workflow Name:** "Referral Attribution Tracking"

```yaml
Trigger Type: Deal-based
Enrollment Trigger:
  - Deal is created
  - AND "Referral Source" is known (not empty)

Actions Sequence:
1. Custom Code Action: Validate Referral Code
2. Calculate Commission
3. Send Partner Notification
4. Create Internal Task
```

**Custom Code for Referral Validation:**
```javascript
// Validate referral code format and find partner
const referralCode = deal.properties.referral_source;
const partnerId = referralCode.substring(0, 6); // Extract partner ID

// Find partner contact
const partnerContact = await hubspot.contacts.search({
  filterGroups: [{
    filters: [{
      propertyName: 'referral_partner_id',
      operator: 'EQ',
      value: partnerId
    }]
  }]
});

if (partnerContact.results.length > 0) {
  // Set referring partner ID
  await hubspot.deals.update(deal.id, {
    properties: {
      referring_partner_id: partnerId
    }
  });
}
```

## Phase 3: Website Tracking Implementation

### Step 3.1: Add Tracking Script to Tilda Website

**Location:** Add to all pages in Tilda (Settings → Advanced → HTML for head)

```html
<!-- Azure Yacht Referral Tracking -->
<script>
(function() {
  'use strict';
  
  // Configuration
  const config = {
    cookieName: 'azure_referral',
    cookieDuration: 90, // days
    trackingEnabled: true
  };
  
  // Get URL parameters
  function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  // Set cookie
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  }
  
  // Get cookie
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // Track referral
  function trackReferral(referralCode) {
    const referralData = {
      code: referralCode,
      timestamp: new Date().toISOString(),
      page: window.location.href
    };
    
    // Store in cookie
    setCookie(config.cookieName, JSON.stringify(referralData), config.cookieDuration);
    
    // Send to HubSpot
    if (typeof _hsq !== 'undefined') {
      _hsq.push(['identify', {
        referral_source: referralCode,
        referral_timestamp: referralData.timestamp
      }]);
    }
  }
  
  // Initialize tracking
  function initializeTracking() {
    const referralCode = getUrlParameter('ref') || getUrlParameter('referral');
    
    if (referralCode) {
      trackReferral(referralCode);
      console.log('Referral tracked:', referralCode);
    }
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTracking);
  } else {
    initializeTracking();
  }
  
  // Track form submissions
  document.addEventListener('submit', function(e) {
    if (e.target.tagName === 'FORM') {
      const referralCookie = getCookie(config.cookieName);
      if (referralCookie) {
        const referralData = JSON.parse(referralCookie);
        
        // Add hidden field to form
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = 'referral_source';
        hiddenField.value = referralData.code;
        e.target.appendChild(hiddenField);
      }
    }
  });
  
})();
</script>
```

## Phase 4: Form Integration

### Step 4.1: Update Tilda Forms

**For each inquiry form, add this hidden field:**

```html
<input type="hidden" name="referral_source" id="referral_source" value="">
```

### Step 4.2: HubSpot Form Mapping

**In HubSpot:** Settings → Integrations → Connected Apps → Tilda

Map the `referral_source` field to the `referral_source` property in HubSpot.

## Phase 5: Dashboard Creation

### Step 5.1: Create Partner Performance Dashboard

**Navigate to:** Reports → Dashboards → Create Dashboard

**Dashboard Name:** "Partner Performance Dashboard"

**Add these reports:**

1. **Active Partners Count** (Single Value)
2. **Monthly Referrals** (Line Chart)
3. **Top Performing Partners** (Table)
4. **Commission Status Breakdown** (Donut Chart)

## Phase 6: Testing Checklist

### End-to-End Testing

```yaml
Test Steps:
1. Create Test Partner
   □ Add contact with partner properties
   □ Set status to "New Application"
   □ Verify workflow triggers

2. Generate Test Referral Link
   □ Format: https://azurcharters.com?ref=TEST001
   □ Visit link and check cookie is set
   □ Verify HubSpot tracking

3. Submit Test Form
   □ Fill out inquiry form
   □ Check referral source is captured
   □ Verify deal is created

4. Process Test Commission
   □ Move deal to "Closed Won"
   □ Check commission calculation
   □ Verify partner stats update
```

## Phase 7: Go-Live Process

### Pre-Launch Checklist

```yaml
Technical:
□ All properties created
□ Workflows active
□ Tracking script deployed
□ Forms updated
□ Dashboard created

Business:
□ Partner agreements ready
□ Commission structure finalized
□ Payment process established
□ Legal compliance verified
```

### Launch Steps

1. **Week 1:** Deploy tracking script
2. **Week 2:** Onboard first 5 partners
3. **Week 3:** Test full process end-to-end
4. **Week 4:** Scale to 15+ partners

## Quick Start Commands

### HubSpot API Setup (Node.js)

```bash
npm install @hubspot/api-client
```

```javascript
const hubspot = require('@hubspot/api-client');
const hubspotClient = new hubspot.Client({accessToken: 'YOUR_ACCESS_TOKEN'});

// Create custom property
await hubspotClient.crm.properties.coreApi.create('contacts', {
  name: 'referral_partner_id',
  label: 'Referral Partner ID',
  type: 'string',
  fieldType: 'text'
});
```

### Referral Link Generator

```javascript
function generateReferralLink(partnerId, page = '') {
  const baseUrl = 'https://azurcharters.com';
  const referralCode = `${partnerId}_${Date.now().toString(36).substr(-4)}`;
  return `${baseUrl}${page}?ref=${referralCode}&utm_source=referral&utm_medium=partner`;
}

// Usage
const link = generateReferralLink('INF001', '/fleet');
console.log(link); // https://azurcharters.com/fleet?ref=INF001_a1b2&utm_source=referral&utm_medium=partner
```

This guide provides the actual step-by-step mechanics to implement your referral system. Each section includes specific configurations and code you can copy and paste directly into your setup.

Would you like me to walk through any specific section in more detail? 