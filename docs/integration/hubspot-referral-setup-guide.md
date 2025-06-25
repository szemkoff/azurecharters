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

#### Core Partner Identification Properties

**Property 1: Referral Partner ID**
```yaml
Internal Name: referral_partner_id
Field Type: Single-line text
Required: Yes
Unique: Yes
Format: AZ[6-digit-number] (e.g., AZ123456)
Validation: Must start with "AZ" followed by 6 digits
Description: Unique identifier for referral partner - auto-generated
Display Order: 1
Property Group: Partner Details
Show in Contact Summary: Yes
```

**Property 2: Partner Type**
```yaml
Internal Name: partner_type
Field Type: Dropdown
Required: Yes
Options:
  * Individual Influencer
  * Corporate Partner
  * Yacht Broker
  * Travel Agent
  * Event Planner
  * Concierge Service
  * Hotel/Resort Partner
  * Other Business Partner
Default Value: Individual Influencer
Description: Type of referral partner for commission structure
Display Order: 2
Property Group: Partner Details
```

**Property 3: Partner Status**
```yaml
Internal Name: partner_status
Field Type: Dropdown
Required: Yes
Options:
  * New Application
  * Under Review
  * Active
  * Inactive
  * Suspended
  * Terminated
  * Pending Documentation
Default Value: New Application
Description: Current status in partner program
Display Order: 3
Property Group: Partner Details
Show in Contact Summary: Yes
Automation Trigger: Yes
```

#### Commission & Performance Properties

**Property 4: Referral Tier**
```yaml
Internal Name: referral_tier
Field Type: Dropdown
Required: No
Options:
  * Bronze (0-5 bookings) - 8%
  * Silver (6-15 bookings) - 10%
  * Gold (16-30 bookings) - 12%
  * Platinum (31+ bookings) - 15%
Default Value: Bronze (0-5 bookings) - 8%
Description: Commission tier based on performance
Display Order: 4
Property Group: Performance Metrics
Auto-Update: Yes (via workflow)
```

**Property 5: Current Commission Rate**
```yaml
Internal Name: commission_rate
Field Type: Number
Required: Yes
Number Format: Percentage
Min Value: 0
Max Value: 20
Default Value: 8
Description: Current commission percentage based on tier
Display Order: 5
Property Group: Performance Metrics
Show in Contact Summary: Yes
```

**Property 6: Total Referrals**
```yaml
Internal Name: total_referrals
Field Type: Number
Required: No
Number Format: Unformatted number
Min Value: 0
Default Value: 0
Description: Total number of successful referrals
Display Order: 6
Property Group: Performance Metrics
Auto-Calculate: Yes (via workflow)
Show in Contact Summary: Yes
```

**Property 7: Total Commissions Earned**
```yaml
Internal Name: total_commissions_earned
Field Type: Number
Required: No
Number Format: Currency (USD)
Min Value: 0
Default Value: 0
Description: Lifetime commission earnings
Display Order: 7
Property Group: Performance Metrics
Auto-Calculate: Yes (via workflow)
Show in Contact Summary: Yes
```

**Property 8: Pending Commissions**
```yaml
Internal Name: pending_commissions
Field Type: Number
Required: No
Number Format: Currency (USD)
Min Value: 0
Default Value: 0
Description: Commissions awaiting payment
Display Order: 8
Property Group: Performance Metrics
Auto-Calculate: Yes (via workflow)
```

#### Payment & Documentation Properties

**Property 9: Payment Method**
```yaml
Internal Name: payment_method
Field Type: Dropdown
Required: Yes (for active partners)
Options:
  * PayPal
  * Bank Transfer (ACH)
  * Wire Transfer
  * Check
  * Stripe Direct Deposit
  * International Wire
Default Value: PayPal
Description: Preferred payment method for commissions
Display Order: 9
Property Group: Payment Details
```

**Property 10: Payment Email**
```yaml
Internal Name: payment_email
Field Type: Email
Required: Yes (for PayPal/Stripe)
Validation: Valid email format
Description: Email address for payment processing
Display Order: 10
Property Group: Payment Details
```

**Property 11: Bank Account Details**
```yaml
Internal Name: bank_account_details
Field Type: Multi-line text
Required: No
Description: Bank account information for ACH/Wire transfers
Display Order: 11
Property Group: Payment Details
Sensitive Data: Yes
```

**Property 12: Tax ID/SSN**
```yaml
Internal Name: tax_id
Field Type: Single-line text
Required: Yes (for US partners earning >$600)
Format: XXX-XX-XXXX or XX-XXXXXXX
Validation: SSN or EIN format
Description: Tax identification for 1099 reporting
Display Order: 12
Property Group: Tax Information
Sensitive Data: Yes
```

**Property 13: W-9 Status**
```yaml
Internal Name: w9_status
Field Type: Dropdown
Required: No
Options:
  * Not Required
  * Requested
  * Received
  * Expired
  * Updated Required
Description: W-9 form status for tax compliance
Display Order: 13
Property Group: Tax Information
```

#### Partner Program Details

**Property 14: Application Date**
```yaml
Internal Name: application_date
Field Type: Date picker
Required: Yes
Default Value: Today
Description: Date partner applied to program
Display Order: 14
Property Group: Program History
```

**Property 15: Approval Date**
```yaml
Internal Name: approval_date
Field Type: Date picker
Required: No
Description: Date partner was approved
Display Order: 15
Property Group: Program History
Auto-Set: Yes (via workflow when status = Active)
```

**Property 16: Last Activity Date**
```yaml
Internal Name: last_activity_date
Field Type: Date picker
Required: No
Description: Date of last referral activity
Display Order: 16
Property Group: Program History
Auto-Update: Yes (via workflow)
```

**Property 17: Referral Code**
```yaml
Internal Name: referral_code
Field Type: Single-line text
Required: Yes (for active partners)
Unique: Yes
Format: Partner initials + 4 digits (e.g., JD1234)
Description: Unique referral code for tracking
Display Order: 17
Property Group: Partner Details
Auto-Generate: Yes (via workflow)
Show in Contact Summary: Yes
```

#### Social Media & Marketing Properties

**Property 18: Social Media Platform**
```yaml
Internal Name: primary_social_platform
Field Type: Dropdown
Required: No
Options:
  * Instagram
  * YouTube
  * TikTok
  * Facebook
  * LinkedIn
  * Twitter/X
  * Blog/Website
  * Multiple Platforms
  * Other
Description: Primary social media platform for promotion
Display Order: 18
Property Group: Marketing Details
```

**Property 19: Follower Count**
```yaml
Internal Name: follower_count
Field Type: Number
Required: No
Number Format: Unformatted number
Min Value: 0
Description: Total followers across platforms
Display Order: 19
Property Group: Marketing Details
```

**Property 20: Content Category**
```yaml
Internal Name: content_category
Field Type: Multi-checkbox
Required: No
Options:
  * Luxury Lifestyle
  * Travel & Tourism
  * Yachting & Boating
  * Food & Dining
  * Fashion & Beauty
  * Business & Finance
  * Entertainment
  * Sports & Recreation
  * Photography
  * Video Content
Description: Type of content partner creates
Display Order: 20
Property Group: Marketing Details
```

#### Geographic & Specialization Properties

**Property 21: Primary Market**
```yaml
Internal Name: primary_market
Field Type: Dropdown
Required: No
Options:
  * Miami/South Florida
  * Caribbean
  * Mediterranean
  * Pacific Coast
  * East Coast US
  * Gulf Coast
  * International
  * Multiple Markets
Description: Primary geographic market for referrals
Display Order: 21
Property Group: Market Details
```

**Property 22: Specialization**
```yaml
Internal Name: specialization
Field Type: Multi-checkbox
Required: No
Options:
  * Corporate Events
  * Weddings
  * Birthday Parties
  * Bachelor/Bachelorette
  * Family Vacations
  * Romantic Getaways
  * Fishing Charters
  * Day Charters
  * Multi-Day Charters
  * Luxury Experiences
Description: Charter types partner specializes in
Display Order: 22
Property Group: Market Details
```

### Step 1.2: Create Custom Deal Properties for Tracking

**Navigate to:** Settings → Properties → Deal Properties

#### Core Referral Tracking Properties

**Property 1: Referral Source**
```yaml
Internal Name: referral_source
Field Type: Single-line text
Required: No
Validation: Alphanumeric, 4-10 characters
Description: Referral code used by customer
Display Order: 1
Property Group: Referral Tracking
Show in Deal Summary: Yes
```

**Property 2: Referring Partner ID**
```yaml
Internal Name: referring_partner_id
Field Type: Single-line text
Required: No
Format: AZ[6-digit-number]
Validation: Must match existing partner ID
Description: ID of referring partner
Display Order: 2
Property Group: Referral Tracking
Show in Deal Summary: Yes
Auto-Populate: Yes (via workflow)
```

**Property 3: Referral Partner Name**
```yaml
Internal Name: referral_partner_name
Field Type: Single-line text
Required: No
Description: Name of referring partner (auto-populated)
Display Order: 3
Property Group: Referral Tracking
Read Only: Yes
Auto-Populate: Yes (via workflow)
```

#### Commission Calculation Properties

**Property 4: Charter Base Amount**
```yaml
Internal Name: charter_base_amount
Field Type: Number
Required: Yes (for referral deals)
Number Format: Currency (USD)
Min Value: 0
Description: Base charter amount before taxes/fees
Display Order: 4
Property Group: Commission Calculation
Show in Deal Summary: Yes
```

**Property 5: Commission Rate Applied**
```yaml
Internal Name: commission_rate_applied
Field Type: Number
Required: No
Number Format: Percentage
Min Value: 0
Max Value: 20
Description: Commission rate applied to this deal
Display Order: 5
Property Group: Commission Calculation
Auto-Populate: Yes (from partner record)
```

**Property 6: Commission Amount**
```yaml
Internal Name: commission_amount
Field Type: Number
Required: No
Number Format: Currency (USD)
Min Value: 0
Description: Total commission owed for this deal
Display Order: 6
Property Group: Commission Calculation
Auto-Calculate: Yes (base amount × commission rate)
Show in Deal Summary: Yes
```

**Property 7: Commission Tier at Booking**
```yaml
Internal Name: commission_tier_at_booking
Field Type: Single-line text
Required: No
Description: Partner's tier when deal was booked
Display Order: 7
Property Group: Commission Calculation
Auto-Populate: Yes (via workflow)
```

#### Commission Status & Payment Tracking

**Property 8: Commission Status**
```yaml
Internal Name: commission_status
Field Type: Dropdown
Required: Yes (for referral deals)
Options:
  * Pending Approval
  * Approved
  * Payment Scheduled
  * Paid
  * Disputed
  * Cancelled
  * On Hold
Default Value: Pending Approval
Description: Current status of commission payment
Display Order: 8
Property Group: Commission Status
Show in Deal Summary: Yes
Automation Trigger: Yes
```

**Property 9: Commission Approval Date**
```yaml
Internal Name: commission_approval_date
Field Type: Date picker
Required: No
Description: Date commission was approved for payment
Display Order: 9
Property Group: Commission Status
Auto-Set: Yes (when status = Approved)
```

**Property 10: Commission Payment Date**
```yaml
Internal Name: commission_payment_date
Field Type: Date picker
Required: No
Description: Date commission was paid
Display Order: 10
Property Group: Commission Status
Auto-Set: Yes (when status = Paid)
```

**Property 11: Payment Method Used**
```yaml
Internal Name: payment_method_used
Field Type: Dropdown
Required: No
Options:
  * PayPal
  * Bank Transfer (ACH)
  * Wire Transfer
  * Check
  * Stripe Direct Deposit
Description: Method used to pay commission
Display Order: 11
Property Group: Commission Status
Auto-Populate: Yes (from partner record)
```

#### Referral Attribution Properties

**Property 12: Original Referral Date**
```yaml
Internal Name: original_referral_date
Field Type: Date picker
Required: No
Description: When referral link was first clicked
Display Order: 12
Property Group: Referral Attribution
Auto-Set: Yes (from tracking cookie)
```

**Property 13: Referral Channel**
```yaml
Internal Name: referral_channel
Field Type: Dropdown
Required: No
Options:
  * Social Media Post
  * Email Campaign
  * Website Link
  * Direct Referral
  * Event/In-Person
  * Blog/Article
  * Video Content
  * Paid Advertisement
  * Other
Description: How customer found referral link
Display Order: 13
Property Group: Referral Attribution
```

**Property 14: UTM Source**
```yaml
Internal Name: utm_source
Field Type: Single-line text
Required: No
Description: UTM source parameter from referral link
Display Order: 14
Property Group: Referral Attribution
Auto-Populate: Yes (from tracking)
```

**Property 15: UTM Campaign**
```yaml
Internal Name: utm_campaign
Field Type: Single-line text
Required: No
Description: UTM campaign parameter from referral link
Display Order: 15
Property Group: Referral Attribution
Auto-Populate: Yes (from tracking)
```

#### Charter-Specific Properties

**Property 16: Charter Type**
```yaml
Internal Name: charter_type
Field Type: Dropdown
Required: Yes
Options:
  * Half-Day Charter (4 hours)
  * Full-Day Charter (8 hours)
  * Multi-Day Charter
  * Weekly Charter
  * Corporate Event
  * Wedding Charter
  * Special Event
  * Custom Charter
Description: Type of charter booked
Display Order: 16
Property Group: Charter Details
```

**Property 17: Charter Duration**
```yaml
Internal Name: charter_duration
Field Type: Number
Required: Yes
Number Format: Unformatted number
Min Value: 1
Description: Duration in hours or days
Display Order: 17
Property Group: Charter Details
```

**Property 18: Yacht Booked**
```yaml
Internal Name: yacht_booked
Field Type: Dropdown
Required: Yes
Options:
  * Azimut 70 'Drakkar'
  * Azimut 55 'Alana Rose'
  * [Additional yachts from fleet]
Description: Which yacht was chartered
Display Order: 18
Property Group: Charter Details
Show in Deal Summary: Yes
```

**Property 19: Charter Date Start**
```yaml
Internal Name: charter_date_start
Field Type: Date picker
Required: Yes
Description: Charter start date
Display Order: 19
Property Group: Charter Details
Show in Deal Summary: Yes
```

**Property 20: Charter Date End**
```yaml
Internal Name: charter_date_end
Field Type: Date picker
Required: Yes
Description: Charter end date
Display Order: 20
Property Group: Charter Details
```

#### Performance & Quality Tracking

**Property 21: Customer Satisfaction Score**
```yaml
Internal Name: customer_satisfaction_score
Field Type: Number
Required: No
Number Format: Unformatted number
Min Value: 1
Max Value: 10
Description: Post-charter customer satisfaction (1-10)
Display Order: 21
Property Group: Quality Metrics
```

**Property 22: Referral Quality Score**
```yaml
Internal Name: referral_quality_score
Field Type: Dropdown
Required: No
Options:
  * Excellent (Smooth booking, premium client)
  * Good (Standard booking process)
  * Average (Some issues resolved)
  * Poor (Multiple issues, difficult client)
Description: Quality assessment of the referral
Display Order: 22
Property Group: Quality Metrics
```

**Property 23: Partner Bonus Eligible**
```yaml
Internal Name: partner_bonus_eligible
Field Type: Dropdown
Required: No
Options:
  * Yes - High Value Deal
  * Yes - Repeat Customer
  * Yes - Premium Service
  * No - Standard Deal
  * No - Issues Occurred
Default Value: No - Standard Deal
Description: Whether deal qualifies for bonus commission
Display Order: 23
Property Group: Quality Metrics
```

#### Progress Tracking Properties

**Property 24: Progress Percentage**
```yaml
Internal Name: progress_percentage
Field Type: Number
Required: Yes (for referral deals)
Number Format: Percentage
Min Value: 0
Max Value: 100
Default Value: 10
Description: Current progress through referral pipeline
Display Order: 24
Property Group: Progress Tracking
Auto-Calculate: Yes (via workflow)
Show in Deal Summary: Yes
```

**Property 25: Current Stage Description**
```yaml
Internal Name: current_stage_description
Field Type: Multi-line text
Required: No
Description: Detailed description of current stage activities
Display Order: 25
Property Group: Progress Tracking
Auto-Populate: Yes (via workflow)
```

**Property 26: Stage Color Code**
```yaml
Internal Name: stage_color_code
Field Type: Single-line text
Required: No
Format: Hex color code (#XXXXXX)
Description: Color code for visual progress indicators
Display Order: 26
Property Group: Progress Tracking
Auto-Populate: Yes (via workflow)
```

**Property 27: Stage Icon**
```yaml
Internal Name: stage_icon
Field Type: Single-line text
Required: No
Description: Emoji icon for current stage
Display Order: 27
Property Group: Progress Tracking
Auto-Populate: Yes (via workflow)
```

**Property 28: Days in Current Stage**
```yaml
Internal Name: days_in_current_stage
Field Type: Number
Required: No
Number Format: Unformatted number
Min Value: 0
Description: Number of days in current stage
Display Order: 28
Property Group: Progress Tracking
Auto-Calculate: Yes (via workflow)
```

**Property 29: Estimated Completion Date**
```yaml
Internal Name: estimated_completion_date
Field Type: Date picker
Required: No
Description: Estimated date for deal closure
Display Order: 29
Property Group: Progress Tracking
Auto-Calculate: Yes (based on stage averages)
```

**Property 30: Next Action Required**
```yaml
Internal Name: next_action_required
Field Type: Multi-line text
Required: No
Description: Next specific action needed to advance
Display Order: 30
Property Group: Progress Tracking
Auto-Populate: Yes (via workflow)
```

**Property 31: Stage Entry Date**
```yaml
Internal Name: stage_entry_date
Field Type: Date picker
Required: No
Description: Date when deal entered current stage
Display Order: 31
Property Group: Progress Tracking
Auto-Set: Yes (when stage changes)
```

### Step 1.3: Create Custom Objects for Advanced Tracking

**Navigate to:** Settings → Objects → Create Custom Object

#### Custom Object 1: Referral Transactions

**Object Name:** Referral Transactions
**Object Label (Plural):** Referral Transactions
**Object Label (Singular):** Referral Transaction

**Primary Properties:**

**Property 1: Transaction ID**
```yaml
Internal Name: transaction_id
Field Type: Single-line text
Required: Yes
Unique: Yes
Format: TXN-[8-digit-number]
Description: Unique transaction identifier
Is Primary Property: Yes
```

**Property 2: Transaction Type**
```yaml
Internal Name: transaction_type
Field Type: Dropdown
Required: Yes
Options:
  * Commission Earned
  * Commission Paid
  * Bonus Commission
  * Adjustment - Positive
  * Adjustment - Negative
  * Chargeback
  * Refund
Description: Type of referral transaction
```

**Property 3: Transaction Amount**
```yaml
Internal Name: transaction_amount
Field Type: Number
Required: Yes
Number Format: Currency (USD)
Description: Transaction amount (positive or negative)
```

**Property 4: Transaction Date**
```yaml
Internal Name: transaction_date
Field Type: Date picker
Required: Yes
Default Value: Today
Description: Date of transaction
```

**Property 5: Transaction Status**
```yaml
Internal Name: transaction_status
Field Type: Dropdown
Required: Yes
Options:
  * Pending
  * Processed
  * Failed
  * Cancelled
  * Under Review
Default Value: Pending
Description: Current status of transaction
```

#### Custom Object 2: Commission Payments

**Object Name:** Commission Payments
**Object Label (Plural):** Commission Payments
**Object Label (Singular):** Commission Payment

**Primary Properties:**

**Property 1: Payment ID**
```yaml
Internal Name: payment_id
Field Type: Single-line text
Required: Yes
Unique: Yes
Format: PAY-[8-digit-number]
Description: Unique payment identifier
Is Primary Property: Yes
```

**Property 2: Payment Batch ID**
```yaml
Internal Name: payment_batch_id
Field Type: Single-line text
Required: No
Format: BATCH-[YYYY-MM-DD]-[number]
Description: Batch identifier for grouped payments
```

**Property 3: Payment Amount**
```yaml
Internal Name: payment_amount
Field Type: Number
Required: Yes
Number Format: Currency (USD)
Min Value: 0
Description: Total payment amount
```

**Property 4: Payment Method**
```yaml
Internal Name: payment_method
Field Type: Dropdown
Required: Yes
Options:
  * PayPal
  * Bank Transfer (ACH)
  * Wire Transfer
  * Check
  * Stripe Direct Deposit
  * International Wire
Description: Method used for payment
```

**Property 5: Payment Status**
```yaml
Internal Name: payment_status
Field Type: Dropdown
Required: Yes
Options:
  * Scheduled
  * Processing
  * Completed
  * Failed
  * Cancelled
  * Returned
Default Value: Scheduled
Description: Current payment status
```

**Property 6: Payment Date Scheduled**
```yaml
Internal Name: payment_date_scheduled
Field Type: Date picker
Required: Yes
Description: Scheduled payment date
```

**Property 7: Payment Date Completed**
```yaml
Internal Name: payment_date_completed
Field Type: Date picker
Required: No
Description: Actual payment completion date
```

### Step 1.4: Create Company Properties for Corporate Partners

**Navigate to:** Settings → Properties → Company Properties

#### Corporate Partner Properties

**Property 1: Partner Company Type**
```yaml
Internal Name: partner_company_type
Field Type: Dropdown
Required: No
Options:
  * Travel Agency
  * Event Planning Company
  * Concierge Service
  * Hotel/Resort
  * Corporate Travel Department
  * Yacht Brokerage
  * Marketing Agency
  * Other Service Provider
Description: Type of corporate partner
Display Order: 1
Property Group: Partner Classification
```

**Property 2: Corporate Commission Rate**
```yaml
Internal Name: corporate_commission_rate
Field Type: Number
Required: No
Number Format: Percentage
Min Value: 0
Max Value: 25
Description: Special commission rate for corporate volume
Display Order: 2
Property Group: Commission Structure
```

**Property 3: Annual Volume Commitment**
```yaml
Internal Name: annual_volume_commitment
Field Type: Number
Required: No
Number Format: Currency (USD)
Min Value: 0
Description: Annual booking volume commitment
Display Order: 3
Property Group: Performance Targets
```

**Property 4: Volume Discount Tier**
```yaml
Internal Name: volume_discount_tier
Field Type: Dropdown
Required: No
Options:
  * Standard (0-$50k annually)
  * Silver ($50k-$150k annually)
  * Gold ($150k-$300k annually)
  * Platinum ($300k+ annually)
Description: Volume-based discount tier
Display Order: 4
Property Group: Performance Targets
```

**Property 5: Contract Start Date**
```yaml
Internal Name: contract_start_date
Field Type: Date picker
Required: No
Description: Partnership contract start date
Display Order: 5
Property Group: Contract Details
```

**Property 6: Contract End Date**
```yaml
Internal Name: contract_end_date
Field Type: Date picker
Required: No
Description: Partnership contract end date
Display Order: 6
Property Group: Contract Details
```

**Property 7: Primary Contact Person**
```yaml
Internal Name: primary_contact_person
Field Type: Single-line text
Required: No
Description: Main contact at partner company
Display Order: 7
Property Group: Contact Information
```

**Property 8: Billing Contact Email**
```yaml
Internal Name: billing_contact_email
Field Type: Email
Required: No
Description: Email for commission payments and invoicing
Display Order: 8
Property Group: Contact Information
```

### Step 1.5: Create Custom Pipeline for Partner Management

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

## Phase 2: Advanced Workflow Automation Setup

### Step 2.1: Partner Onboarding Workflow

**Navigate to:** Automation → Workflows → Create Workflow

**Workflow Name:** "Partner Onboarding Automation"

**Configuration:**
```yaml
Trigger Type: Contact-based
Enrollment Trigger: 
  - Contact property "Partner Status" is equal to "New Application"
  - Re-enrollment: No

Enrollment Criteria:
  - Contact Type is any of: "Partner", "Referral Partner"
  - Email is known
  - Partner Type is known

Actions Sequence:
1. Set Property Value - Application Date
   - Property: application_date
   - Value: Today's date
   - Delay: None

2. Generate Partner ID (Custom Code Action)
   - Code: Generate unique partner ID (AZ + 6 digits)
   - Set referral_partner_id property
   - Delay: None

3. Generate Referral Code (Custom Code Action)
   - Code: Create unique referral code
   - Format: First 2 letters of first name + First 2 letters of last name + 4 digits
   - Set referral_code property
   - Delay: None

4. Set Property Value - Partner Status
   - Property: partner_status
   - Value: Under Review
   - Delay: None

5. Send Email: Welcome to Azure Partner Program
   - Template: Partner welcome email with referral code
   - Personalization tokens: {referral_partner_id}, {referral_code}
   - Delay: None

6. Create Task - Review Application
   - Task Title: "Review new partner application: {Contact Name}"
   - Task Description: "Partner ID: {referral_partner_id}, Application Date: {application_date}"
   - Assign to: Partner Manager
   - Due Date: 3 business days from now
   - Priority: Medium
   - Task Type: Partner Review
   - Delay: None

7. Send Internal Notification
   - Notify: Partner management team
   - Subject: "New partner application received - {Contact Name}"
   - Include: Partner details, social media info, specialization
   - Delay: None

8. Add to List
   - List: "New Partner Applications"
   - Delay: None

9. Branch Logic - Partner Type
   - IF Partner Type = "Corporate Partner"
     - Create Company Record
     - Associate Contact with Company
     - Set Company Properties
   - ELSE
     - Continue standard flow

10. Schedule Follow-up Task
    - Task Title: "Follow up on partner application review"
    - Assign to: Partner Manager
    - Due Date: 7 days from now
    - Delay: 3 days
```

### Step 2.2: Partner Approval Workflow

**Navigate to:** Automation → Workflows → Create Workflow

**Workflow Name:** "Partner Approval Process"

**Configuration:**
```yaml
Trigger Type: Contact-based
Enrollment Trigger:
  - Contact property "Partner Status" changes to "Active"
  - Re-enrollment: No

Actions Sequence:
1. Set Property Value - Approval Date
   - Property: approval_date
   - Value: Today's date
   - Delay: None

2. Set Property Value - Commission Tier
   - Property: referral_tier
   - Value: Bronze (0-5 bookings) - 8%
   - Delay: None

3. Set Property Value - Commission Rate
   - Property: commission_rate
   - Value: 8
   - Delay: None

4. Send Email: Partner Approval Confirmation
   - Template: Welcome to Active Partners
   - Include: Referral code, commission structure, resources
   - Delay: None

5. Create Task - Partner Onboarding
   - Task Title: "Complete partner onboarding: {Contact Name}"
   - Task Description: "Provide marketing materials, tracking setup"
   - Assign to: Partner Success Manager
   - Due Date: 2 business days from now
   - Delay: None

6. Add to Lists
   - Remove from: "New Partner Applications"
   - Add to: "Active Partners"
   - Add to: "Bronze Tier Partners"
   - Delay: None

7. Create Welcome Package Task
   - Task Title: "Send welcome package to {Contact Name}"
   - Include: Marketing materials, brand guidelines, promotional assets
   - Assign to: Marketing Team
   - Due Date: 1 business day from now
   - Delay: None
```

### Step 2.3: Commission Tier Upgrade Workflow

**Navigate to:** Automation → Workflows → Create Workflow

**Workflow Name:** "Commission Tier Auto-Upgrade"

**Configuration:**
```yaml
Trigger Type: Contact-based
Enrollment Trigger:
  - Contact property "Total Referrals" is greater than or equal to 6
  - AND Contact property "Referral Tier" is equal to "Bronze (0-5 bookings) - 8%"
  - Re-enrollment: Yes

Actions Sequence:
1. Branch Logic - Tier Determination
   - IF Total Referrals >= 31
     - Set Referral Tier: Platinum (31+ bookings) - 15%
     - Set Commission Rate: 15
   - ELSE IF Total Referrals >= 16
     - Set Referral Tier: Gold (16-30 bookings) - 12%
     - Set Commission Rate: 12
   - ELSE IF Total Referrals >= 6
     - Set Referral Tier: Silver (6-15 bookings) - 10%
     - Set Commission Rate: 10

2. Send Email: Tier Upgrade Notification
   - Template: Congratulations on tier upgrade
   - Include: New commission rate, benefits, achievement recognition
   - Delay: None

3. Update Lists
   - Remove from: Previous tier list
   - Add to: New tier list
   - Delay: None

4. Create Celebration Task
   - Task Title: "Send tier upgrade recognition to {Contact Name}"
   - Assign to: Partner Success Manager
   - Include: Certificate, bonus consideration
   - Due Date: 1 business day from now
   - Delay: None

5. Internal Notification
     - Notify: Partner management team
     - Subject: "Partner tier upgrade: {Contact Name} to {Referral Tier}"
     - Delay: None
 ```

### Step 2.4: Progress Tracking Workflow

**Navigate to:** Automation → Workflows → Create Workflow

**Workflow Name:** "Referral Progress Tracker"

**Configuration:**
```yaml
Trigger Type: Deal-based
Enrollment Trigger:
  - Deal stage changes
  - AND Deal pipeline is "Partner Referral Tracking"
  - Re-enrollment: Yes

Actions Sequence:
1. Branch Logic - Progress Calculation
   - IF Deal Stage = "Referral Received"
     - Set progress_percentage: 10
     - Set stage_color_code: #E3F2FD
     - Set stage_icon: 🎯
     - Set current_stage_description: "Referral received and partner attributed. Awaiting initial contact."
     - Set next_action_required: "Make first contact within 24 hours"
   
   - IF Deal Stage = "Initial Contact"
     - Set progress_percentage: 25
     - Set stage_color_code: #FFF3E0
     - Set stage_icon: 📞
     - Set current_stage_description: "First contact made. Qualifying lead and gathering requirements."
     - Set next_action_required: "Complete needs assessment and prepare proposal"
   
   - IF Deal Stage = "Proposal Sent"
     - Set progress_percentage: 50
     - Set stage_color_code: #F3E5F5
     - Set stage_icon: 📋
     - Set current_stage_description: "Custom proposal sent. Awaiting client review and feedback."
     - Set next_action_required: "Follow up on proposal within 3 days"
   
   - IF Deal Stage = "Negotiation"
     - Set progress_percentage: 75
     - Set stage_color_code: #E8F5E8
     - Set stage_icon: 🤝
     - Set current_stage_description: "Active negotiation. Finalizing terms and conditions."
     - Set next_action_required: "Address client concerns and finalize contract"
   
   - IF Deal Stage = "Closed Won"
     - Set progress_percentage: 100
     - Set stage_color_code: #4CAF50
     - Set stage_icon: ✅
     - Set current_stage_description: "Charter booked successfully! Commission earned."
     - Set next_action_required: "Send booking confirmation and process commission"
   
   - IF Deal Stage = "Closed Lost"
     - Set progress_percentage: 0
     - Set stage_color_code: #FFEBEE
     - Set stage_icon: ❌
     - Set current_stage_description: "Referral did not convert. Reason documented."
     - Set next_action_required: "Provide feedback to partner and identify improvements"

2. Set Stage Entry Date
   - Property: stage_entry_date
   - Value: Today's date
   - Delay: None

3. Calculate Days in Stage
   - Custom Code Action: Calculate difference between today and stage_entry_date
   - Set days_in_current_stage property
   - Delay: None

4. Calculate Estimated Completion
   - Branch Logic based on historical stage durations:
     - Referral Received: +2 days
     - Initial Contact: +5 days
     - Proposal Sent: +7 days
     - Negotiation: +3 days
   - Set estimated_completion_date
   - Delay: None

5. Send Progress Notification to Partner
   - Email Template: Partner Progress Update
   - Include: Progress percentage, stage description, next steps
   - Delay: None

6. Create Internal Task (if stalled)
   - IF days_in_current_stage > expected duration
   - Task Title: "Follow up on stalled referral: {Deal Name}"
   - Assign to: Deal Owner
   - Priority: High
   - Delay: None

7. Update Dashboard Properties
   - Refresh visual indicators
   - Update progress charts
   - Trigger notification badges
   - Delay: None
```

### Step 2.5: Progress Alert Workflow

**Navigate to:** Automation → Workflows → Create Workflow

**Workflow Name:** "Referral Progress Alerts"

**Configuration:**
```yaml
Trigger Type: Deal-based
Enrollment Trigger:
  - Daily at 9:00 AM
  - Deal pipeline is "Partner Referral Tracking"
  - Deal stage is not "Closed Won" or "Closed Lost"
  - Re-enrollment: Yes

Actions Sequence:
1. Calculate Stage Duration
   - Custom Code: Calculate days since stage_entry_date
   - Update days_in_current_stage property

2. Branch Logic - Alert Triggers
   - IF days_in_current_stage >= 3 AND stage = "Referral Received"
     - Send Alert: "Referral not contacted within 3 days"
     - Assign urgent task to sales team
   
   - IF days_in_current_stage >= 7 AND stage = "Initial Contact"
     - Send Alert: "Lead qualification taking too long"
     - Escalate to sales manager
   
   - IF days_in_current_stage >= 10 AND stage = "Proposal Sent"
     - Send Alert: "Proposal follow-up needed"
     - Create follow-up task
   
   - IF days_in_current_stage >= 5 AND stage = "Negotiation"
     - Send Alert: "Negotiation stalled"
     - Manager intervention required

3. Partner Communication
   - IF days_in_current_stage >= 14 (any stage)
   - Send email to partner with update
   - Explain current status and timeline
   - Delay: None

4. Update Risk Indicators
   - Set deal property: at_risk_flag = true
   - Add to "Stalled Deals" list
   - Create escalation task
   - Delay: None
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

## Phase 3: Property Validation Rules & Data Quality

### Step 3.1: Property Validation Configuration

**Navigate to:** Settings → Properties → [Property Name] → Validation

#### Contact Property Validations

**Referral Partner ID Validation:**
```javascript
// Custom validation for partner ID format
function validatePartnerID(value) {
  const pattern = /^AZ\d{6}$/;
  if (!pattern.test(value)) {
    return "Partner ID must be in format AZ123456";
  }
  return true;
}
```

**Referral Code Validation:**
```javascript
// Custom validation for referral code format
function validateReferralCode(value) {
  const pattern = /^[A-Z]{2,4}\d{4}$/;
  if (!pattern.test(value)) {
    return "Referral code must be 2-4 letters followed by 4 digits";
  }
  return true;
}
```

**Tax ID Validation:**
```javascript
// Validation for SSN/EIN format
function validateTaxID(value) {
  const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
  const einPattern = /^\d{2}-\d{7}$/;
  
  if (!ssnPattern.test(value) && !einPattern.test(value)) {
    return "Tax ID must be in SSN (XXX-XX-XXXX) or EIN (XX-XXXXXXX) format";
  }
  return true;
}
```

#### Deal Property Validations

**Commission Rate Validation:**
```javascript
// Ensure commission rate matches partner tier
function validateCommissionRate(dealId, commissionRate, partnerTier) {
  const tierRates = {
    'Bronze (0-5 bookings) - 8%': 8,
    'Silver (6-15 bookings) - 10%': 10,
    'Gold (16-30 bookings) - 12%': 12,
    'Platinum (31+ bookings) - 15%': 15
  };
  
  const expectedRate = tierRates[partnerTier];
  if (commissionRate !== expectedRate) {
    return `Commission rate should be ${expectedRate}% for ${partnerTier}`;
  }
  return true;
}
```

### Step 3.2: Required Property Groups Setup

**Navigate to:** Settings → Properties → Property Groups

#### Create Property Groups

**Group 1: Partner Details**
- Display Order: 1
- Properties: referral_partner_id, partner_type, partner_status, referral_code
- Show in Summary: Yes

**Group 2: Performance Metrics**
- Display Order: 2
- Properties: referral_tier, commission_rate, total_referrals, total_commissions_earned, pending_commissions
- Show in Summary: Yes

**Group 3: Payment Details**
- Display Order: 3
- Properties: payment_method, payment_email, bank_account_details
- Show in Summary: No (sensitive data)

**Group 4: Tax Information**
- Display Order: 4
- Properties: tax_id, w9_status
- Show in Summary: No (sensitive data)
- Access Control: Restricted

**Group 5: Marketing Details**
- Display Order: 5
- Properties: primary_social_platform, follower_count, content_category
- Show in Summary: No

**Group 6: Program History**
- Display Order: 6
- Properties: application_date, approval_date, last_activity_date
- Show in Summary: No

## Phase 4: Reporting & Analytics Configuration

### Step 4.1: Custom Reports Setup

**Navigate to:** Reports → Report Builder

#### Report 1: Partner Performance Dashboard

**Report Type:** Contact-based
**Report Name:** "Partner Performance Overview"

**Filters:**
- Contact Type = "Referral Partner"
- Partner Status = "Active"

**Properties to Include:**
- Contact Name
- Referral Partner ID
- Referral Tier
- Total Referrals
- Total Commissions Earned
- Last Activity Date
- Commission Rate

**Visualizations:**
- Table: Top 20 performing partners
- Bar Chart: Referrals by tier
- Line Chart: Monthly referral trends
- Pie Chart: Partner type distribution

#### Report 2: Commission Tracking Report

**Report Type:** Deal-based
**Report Name:** "Commission Tracking & Payments"

**Filters:**
- Deal Pipeline = "Partner Referral Tracking"
- Referral Source is known

**Properties to Include:**
- Deal Name
- Referral Partner Name
- Charter Base Amount
- Commission Amount
- Commission Status
- Commission Payment Date
- Charter Date Start

**Visualizations:**
- Table: Pending commissions
- Bar Chart: Monthly commission totals
- Pipeline Report: Commission status flow

#### Report 3: Partner Acquisition Report

**Report Type:** Contact-based
**Report Name:** "Partner Program Growth"

**Filters:**
- Contact Type = "Referral Partner"
- Create Date = Last 12 months

**Properties to Include:**
- Application Date
- Approval Date
- Partner Status
- Partner Type
- Primary Market
- Specialization

**Visualizations:**
- Line Chart: Monthly partner acquisitions
- Bar Chart: Partners by type
- Funnel Chart: Application to approval conversion

### Step 4.2: Automated Reporting Setup

**Navigate to:** Reports → Scheduled Reports

#### Monthly Partner Performance Report

**Schedule:** First Monday of each month at 9:00 AM
**Recipients:** Partner Management Team, Sales Director
**Format:** PDF + Excel
**Include:**
- Partner performance metrics
- Top performers recognition
- Tier upgrade notifications
- Commission payment summary

#### Weekly Commission Report

**Schedule:** Every Friday at 5:00 PM
**Recipients:** Finance Team, Partner Manager
**Format:** Excel
**Include:**
- Pending commission approvals
- Payment processing queue
- Commission disputes
- Payment method breakdown

## Phase 5: Data Integration & Sync Rules

### Step 5.1: Integration Mappings

#### Tilda Website to HubSpot Mapping

**Form Submissions:**
```yaml
Tilda Field → HubSpot Property
referral_code → referral_source
utm_source → utm_source
utm_campaign → utm_campaign
contact_email → email
contact_phone → phone
charter_interest → charter_type
```

#### Google Sheets Financial Model Sync

**Partner Performance Data:**
```yaml
HubSpot Property → Google Sheets Column
total_commissions_earned → Partner Lifetime Value
total_referrals → Total Bookings
commission_rate → Current Rate
referral_tier → Performance Tier
```

### Step 5.2: Data Sync Workflows

**Navigate to:** Automation → Workflows → Create Workflow

#### Workflow: Sync Partner Data to Financial Model

**Trigger:** Contact property changes (commission-related)
**Frequency:** Daily at 2:00 AM
**Actions:**
1. Export partner performance data
2. Update Google Sheets via API
3. Calculate ROI metrics
4. Generate performance alerts

## Phase 6: Quality Assurance & Testing

### Step 6.1: Property Testing Checklist

**Contact Properties:**
- [ ] All required fields validate correctly
- [ ] Dropdown options are comprehensive
- [ ] Auto-calculations work properly
- [ ] Property groups display correctly
- [ ] Sensitive data is properly secured

**Deal Properties:**
- [ ] Commission calculations are accurate
- [ ] Status transitions work properly
- [ ] Date fields auto-populate correctly
- [ ] Validation rules prevent errors
- [ ] Reporting data is accurate

**Custom Objects:**
- [ ] Associations are properly configured
- [ ] Data flows between objects correctly
- [ ] Unique identifiers are generated properly
- [ ] Status tracking works end-to-end

### Step 6.2: Workflow Testing

**Test Scenarios:**
1. New partner application flow
2. Partner approval process
3. Commission tier upgrades
4. Payment processing workflow
5. Data validation and error handling

**Validation Points:**
- Email templates render correctly
- Tasks are assigned properly
- Property values update automatically
- Notifications are sent to correct recipients
- Data integrity is maintained

---

This comprehensive guide provides detailed property settings for your HubSpot referral system. Each section includes specific configurations and code you can implement directly into your setup.

Would you like me to walk through any specific section in more detail? 