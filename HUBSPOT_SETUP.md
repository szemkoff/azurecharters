# HubSpot Integration Setup Guide

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

## What Gets Created

### Contact Properties (35 total)
- **Charter Information** (7): Yacht type, budget, dates, destination, etc.
- **Communication Preferences** (2): Contact method and timing
- **Partner Tracking** (3): Referral partner attribution
- **Form Tracking** (3): Form submission metadata
- **Partner Management** (8): Partner status and onboarding
- **Partner Information** (4): Business details
- **Partner Performance** (6): Metrics and performance tracking
- **Referral Tracking** (8): Commission and status tracking

### Deal Properties (12 total)
- **Charter Details** (6): Specific booking information
- **Deal Source** (3): Lead source and attribution
- **Deal Management** (2): Priority and type classification

### Property Groups
All properties are organized into logical groups for easy management in HubSpot.

## Verification

After running the setup:

1. Go to **HubSpot → Settings → Properties**
2. Filter by **Object type: Contact** and **Deal**
3. Verify all property groups are created
4. Check that field types and options are correct

## Next Steps

1. **Update Forms**: Use new property names in your customer inquiry forms
2. **Configure Zapier**: Map new properties in your automation workflows
3. **Test Integration**: Submit test forms to verify data flow
4. **Set Permissions**: Configure property access for different user roles

## Troubleshooting

### Common Issues

**"API key invalid"**
- Verify your API key is correct
- Check that API access is enabled for your HubSpot account

**"Property already exists"**
- The script will skip existing properties automatically
- No action needed - this is normal behavior

**"Permission denied"**
- Ensure your HubSpot user has property creation permissions
- Contact your HubSpot admin if needed

### Support

If you encounter issues:
1. Check the error messages in the console output
2. Verify your HubSpot account limits (free accounts have property limits)
3. Ensure you're using the latest HubSpot API client version

## Manual Property Creation

If you prefer to create properties manually, refer to the property definitions in:
- `src/config/propertyDefinitions.js`
- `src/config/partnerPropertyDefinitions.js`

Each property includes:
- Name and label
- Field type
- Options (for dropdowns)
- Property group assignment 