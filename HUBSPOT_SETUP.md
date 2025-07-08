# HubSpot Properties Setup Guide - Azure Yacht Group

## Prerequisites

1. **HubSpot Account** with API access
2. **Node.js** version 18 or higher
3. **HubSpot API Key** with property creation permissions

## Quick Setup (5 minutes)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Configure Environment Variables

Create a `.env` file in your project root:

```bash
# HubSpot API Configuration
HUBSPOT_API_KEY=your_hubspot_api_key_here
HUBSPOT_PORTAL_ID=your_hubspot_portal_id_here
```

**How to get your credentials:**

1. **API Key**: HubSpot → Settings → Integrations → API key
2. **Portal ID**: Found in your HubSpot URL or Settings → Account Setup → Account Information

### Step 3: Run Property Setup

```bash
npm run setup-hubspot
```

This will create all 58 custom properties across 11 property groups.

---

## Complete Property Reference Tables

### Contact Properties (35 total)

#### 1. Charter Information Group (7 properties)

| Property Name | Label | Field Type | Options | Description |
|---------------|-------|------------|---------|-------------|
| `yacht_charter_interest` | Yacht Charter Interest | Dropdown | Sailing Yacht, Motor Yacht, Catamaran, Superyacht, Luxury Yacht, Sport Fishing, Other | Type of yacht client is interested in |
| `charter_budget_range` | Charter Budget Range | Dropdown | Under $10,000, $10,000-$25,000, $25,000-$50,000, $50,000-$100,000, $100,000-$250,000, $250,000+, Flexible | Client's budget range for charter |
| `charter_date_preference` | Charter Date Preference | Date | - | Preferred charter start date |
| `group_size` | Group Size | Number | - | Number of guests for charter |
| `charter_duration` | Charter Duration | Dropdown | 1-3 days, 4-7 days, 1-2 weeks, 2-3 weeks, 1 month+, Flexible | Length of charter desired |
| `charter_destination` | Charter Destination | Dropdown | Caribbean, Mediterranean, South Pacific, Atlantic Coast, Gulf Coast, Great Lakes, Other | Preferred charter destination |
| `special_requirements` | Special Requirements | Text Area | - | Any special needs or requests |

#### 2. Communication Preferences Group (2 properties)

| Property Name | Label | Field Type | Options | Description |
|---------------|-------|------------|---------|-------------|
| `preferred_contact_method` | Preferred Contact Method | Dropdown | Email, Phone, Text/SMS, WhatsApp, Video Call | How client prefers to be contacted |
| `best_time_to_contact` | Best Time to Contact | Dropdown | Morning (9-12), Afternoon (12-5), Evening (5-8), Weekend, Anytime | When client prefers to be contacted |

#### 3. Partner Tracking Group (3 properties)

| Property Name | Label | Field Type | Options | Description |
|---------------|-------|------------|---------|-------------|
| `referral_partner_id` | Referral Partner ID | Text | - | Unique identifier for referring partner |
| `referral_partner_name` | Referral Partner Name | Text | - | Name of the referring partner |
| `is_referral_lead` | Is Referral Lead | Checkbox | - | Whether this lead came from a partner |

#### 4. Form Tracking Group (3 properties)

| Property Name | Label | Field Type | Options | Description |
|---------------|-------|------------|---------|-------------|
| `form_submission_date` | Form Submission Date | DateTime | - | When the form was submitted |
| `form_name` | Form Name | Text | - | Name of the form submitted |
| `form_url` | Form URL | Text | - | URL where form was submitted |

#### 5. Partner Management Group (8 properties)

| Property Name | Label | Field Type | Options | Description |
|---------------|-------|------------|---------|-------------|
| `partner_status` | Partner Status | Dropdown | Active, Inactive, Pending, Suspended, Terminated | Current partnership status |
| `partner_type` | Partner Type | Dropdown | Broker, Agent, Concierge, Hotel, Travel Agency, Other | Type of partner |
| `partner_id` | Partner ID | Text | - | Unique partner identifier |
| `partner_tier` | Partner Tier | Dropdown | Bronze, Silver, Gold, Platinum, VIP | Partner tier level |
| `partner_onboarding_date` | Partner Onboarding Date | Date | - | When partner was onboarded |
| `partner_agreement_signed` | Partner Agreement Signed | Checkbox | - | Whether agreement is signed |
| `marketing_materials_sent` | Marketing Materials Sent | Checkbox | - | Whether materials were provided |
| `partner_training_completed` | Partner Training Completed | Checkbox | - | Whether training is complete |

#### 6. Partner Information Group (4 properties)

| Property Name | Label | Field Type | Options | Description |
|---------------|-------|------------|---------|-------------|
| `business_type` | Business Type | Dropdown | Travel Agency, Hotel/Resort, Concierge Service, Yacht Broker, Other | Type of partner business |
| `years_in_business` | Years in Business | Number | - | How long partner has been in business |
| `business_size` | Business Size | Dropdown | Solo, 2-10 employees, 11-50 employees, 51-200 employees, 200+ employees | Size of partner business |
| `primary_markets_served` | Primary Markets Served | Text | - | Geographic markets partner serves |

#### 7. Partner Performance Group (6 properties)

| Property Name | Label | Field Type | Options | Description |
|---------------|-------|------------|---------|-------------|
| `client_budget_range` | Client Budget Range | Dropdown | Under $10,000, $10,000-$25,000, $25,000-$50,000, $50,000-$100,000, $100,000-$250,000, $250,000+, Mixed | Typical client budget range |
| `expected_referrals_yearly` | Expected Referrals Yearly | Number | - | Expected number of referrals per year |
| `actual_referrals_yearly` | Actual Referrals Yearly | Number | - | Actual referrals provided this year |
| `total_revenue_generated` | Total Revenue Generated | Number | - | Total revenue from this partner |
| `commission_rate` | Commission Rate | Number | - | Commission percentage for partner |
| `last_referral_date` | Last Referral Date | Date | - | Date of most recent referral |

#### 8. Referral Tracking Group (8 properties)

| Property Name | Label | Field Type | Options | Description |
|---------------|-------|------------|---------|-------------|
| `referral_partner_id` | Referral Partner ID | Text | - | ID of referring partner |
| `referral_source_partner` | Referral Source Partner | Text | - | Name of referring partner |
| `is_referral_lead` | Is Referral Lead | Checkbox | - | Whether this is a referral |
| `referral_date` | Referral Date | Date | - | Date referral was made |
| `referral_status` | Referral Status | Dropdown | New, Contacted, Qualified, Converted, Closed Won, Closed Lost | Status of referral |
| `referral_commission_amount` | Referral Commission Amount | Number | - | Commission amount owed |
| `referral_commission_paid` | Referral Commission Paid | Checkbox | - | Whether commission was paid |
| `referral_commission_date` | Referral Commission Date | Date | - | Date commission was paid |

---

### Deal Properties (12 total)

#### 1. Charter Details Group (6 properties)

| Property Name | Label | Field Type | Options | Description |
|---------------|-------|------------|---------|-------------|
| `yacht_model_requested` | Yacht Model Requested | Text | - | Specific yacht model requested |
| `charter_start_date` | Charter Start Date | Date | - | Planned charter start date |
| `charter_group_size` | Charter Group Size | Number | - | Number of guests |
| `charter_duration_days` | Charter Duration (Days) | Number | - | Length of charter in days |
| `charter_destination` | Charter Destination | Dropdown | Caribbean, Mediterranean, South Pacific, Atlantic Coast, Gulf Coast, Great Lakes, Other | Charter destination |
| `charter_special_requirements` | Charter Special Requirements | Text Area | - | Special requirements for charter |

#### 2. Deal Source Group (3 properties)

| Property Name | Label | Field Type | Options | Description |
|---------------|-------|------------|---------|-------------|
| `deal_source` | Deal Source | Dropdown | Website, Referral Partner, Direct Inquiry, Trade Show, Social Media, Advertising, Other | How deal was generated |
| `deal_source_detail` | Deal Source Detail | Text | - | Additional source information |
| `referral_partner_deal` | Referral Partner Deal | Text | - | Partner who referred this deal |

#### 3. Deal Management Group (2 properties)

| Property Name | Label | Field Type | Options | Description |
|---------------|-------|------------|---------|-------------|
| `deal_priority` | Deal Priority | Dropdown | Low, Medium, High, Urgent | Priority level of deal |
| `deal_type` | Deal Type | Dropdown | Charter, Brokerage, Management, Other | Type of deal |

---

## Property Groups Structure

### Contact Object Groups:
1. **Charter Information** - Core charter preferences and requirements
2. **Communication Preferences** - How and when to contact
3. **Partner Tracking** - Referral partner attribution
4. **Form Tracking** - Form submission metadata
5. **Partner Management** - Partner status and onboarding
6. **Partner Information** - Business details and characteristics
7. **Partner Performance** - Metrics and performance tracking
8. **Referral Tracking** - Commission and referral status

### Deal Object Groups:
1. **Charter Details** - Specific booking information
2. **Deal Source** - Lead source and attribution
3. **Deal Management** - Priority and classification

---

## Manual Setup Instructions

If you prefer to create properties manually:

### Step 1: Create Property Groups

1. Go to **HubSpot → Settings → Properties**
2. Select **Contact properties** or **Deal properties**
3. Click **Create group**
4. Add each group from the tables above

### Step 2: Create Individual Properties

For each property in the tables:

1. Click **Create property**
2. Enter the **Property Name** (internal name)
3. Enter the **Label** (display name)
4. Select the **Field Type**
5. Add **Options** (for dropdown fields)
6. Assign to the appropriate **Property Group**
7. Save the property

### Step 3: Configure Field Settings

For each property, configure:
- **Required/Optional** status
- **Display order** within group
- **Help text** for users
- **Permissions** (who can view/edit)

---

## Verification Checklist

After setup, verify:

- [ ] All 35 contact properties created
- [ ] All 12 deal properties created
- [ ] All 11 property groups created
- [ ] Dropdown options match exactly
- [ ] Field types are correct
- [ ] Properties are assigned to correct groups
- [ ] Test form submission populates properties
- [ ] Partner referral tracking works
- [ ] Commission tracking functions properly

---

## Integration Testing

### Test Contact Creation
```javascript
// Test contact with charter interest
const testContact = {
  yacht_charter_interest: "Motor Yacht",
  charter_budget_range: "$50,000-$100,000",
  group_size: 6,
  charter_destination: "Caribbean",
  preferred_contact_method: "Email"
};
```

### Test Deal Creation
```javascript
// Test deal with charter details
const testDeal = {
  yacht_model_requested: "Sunseeker 68",
  charter_start_date: "2025-07-15",
  charter_group_size: 8,
  charter_duration_days: 7,
  deal_source: "Referral Partner",
  deal_priority: "High"
};
```

---

## Troubleshooting

### Common Issues

**"Property already exists"**
- Skip existing properties - this is normal
- Check property names for typos

**"Invalid field type"**
- Verify field types match HubSpot standards
- Check dropdown options format

**"Permission denied"**
- Ensure API key has property creation permissions
- Check HubSpot account limits

### Property Limits

- **Free HubSpot**: 1,000 contact properties
- **Paid HubSpot**: 10,000+ contact properties
- **Deal Properties**: Generally unlimited

---

## Next Steps

1. **Update Forms**: Use new property names in customer inquiry forms
2. **Configure Zapier**: Map new properties in automation workflows
3. **Set Permissions**: Configure property access for different user roles
4. **Train Team**: Educate team on new property structure
5. **Monitor Usage**: Track property utilization and data quality

---

## Support

For technical support:
1. Check console output for specific error messages
2. Verify HubSpot account permissions
3. Test with a single property first
4. Contact HubSpot support for API issues 