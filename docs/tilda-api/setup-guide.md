---
title: Tilda API Setup Guide
sidebar_label: Setup Guide
---

# Tilda API Setup Guide

This guide provides detailed instructions for setting up the Tilda API integration for both our websites.

## Prerequisites

Before setting up the Tilda API integration, you'll need:

- A Tilda Business subscription (or higher) which includes API access
- Administrative access to your Tilda account
- The tilda-api project installed locally

## API Credential Requirements

Tilda API has specific requirements for credentials:

| Credential | Required Length | Format |
|------------|-----------------|--------|
| Public Key | 24 characters   | Alphanumeric |
| Secret Key | 32 characters   | Alphanumeric |
| Project ID | Any             | Numeric |

## Current API Status

Our current API integration status:

- **Project ID 4198911** (azureyachtgroup.com): Configured but in mock mode
- **Project ID 12993249** (azurcharters.com): Not yet configured

## Setup Instructions

### 1. Obtain API Credentials

1. **Log in to your Tilda account** at [tilda.cc](https://tilda.cc/)
2. **Navigate to account settings** by clicking your profile icon
3. **Select "API Keys"** from the dropdown menu
4. **Generate new API keys** if you don't have them already
5. **Copy both keys** to use in your environment configuration

### 2. Configure Environment

1. **Create or edit the `.env` file** in the root of the tilda-api project:

```
# Tilda API credentials for azureyachtgroup.com (main site)
TILDA_PUBLIC_KEY_MAIN=your_24_character_public_key_here
TILDA_SECRET_KEY_MAIN=your_32_character_secret_key_here
TILDA_PROJECT_ID_MAIN=4198911

# Tilda API credentials for azurcharters.com (charter site)
TILDA_PUBLIC_KEY_CHARTER=your_24_character_public_key_here
TILDA_SECRET_KEY_CHARTER=your_32_character_secret_key_here
TILDA_PROJECT_ID_CHARTER=12993249

# Server configuration
PORT=3000
NODE_ENV=development
```

3. **Save the file** and restart your server

### 3. Key Length Resolution

If your API keys don't match the required lengths, you have two options:

#### Option A: Pad Keys (Temporary Solution)

Modify your `.env` file to pad keys to the required length:

```
TILDA_PUBLIC_KEY_MAIN=originalKey0000000000 # Pad to 24 chars
TILDA_SECRET_KEY_MAIN=originalKey000000000000000000 # Pad to 32 chars
```

#### Option B: Modify Validation (Development Solution)

Update the validation check in `tilda-api/src/services/tildaApi.js`:

```javascript
// Old validation
this.useMockData = !this.publicKey || !this.secretKey || 
                   this.publicKey.length !== 24 || this.secretKey.length !== 32;

// New validation (remove length check)
this.useMockData = !this.publicKey || !this.secretKey;
```

### 4. Test API Connection

After configuring your API credentials:

1. **Start the server** with `node src/app.js`
2. **Run the test script** with `node test-api.js`
3. **Check the logs** for successful connection messages

## Multi-Project Setup

To work with both our websites, we need to set up both projects:

### Main Site Configuration

```javascript
// In src/config.js
const config = {
  mainSite: {
    apiBaseUrl: 'https://api.tildacdn.info/v1',
    publicKey: process.env.TILDA_PUBLIC_KEY_MAIN,
    secretKey: process.env.TILDA_SECRET_KEY_MAIN, 
    projectId: process.env.TILDA_PROJECT_ID_MAIN,
  },
  charterSite: {
    apiBaseUrl: 'https://api.tildacdn.info/v1',
    publicKey: process.env.TILDA_PUBLIC_KEY_CHARTER,
    secretKey: process.env.TILDA_SECRET_KEY_CHARTER,
    projectId: process.env.TILDA_PROJECT_ID_CHARTER,
  }
};
```

## Troubleshooting

### "Wrong publickey length" Error

This means your public key doesn't match the expected 24-character length.

**Solution:**
- Ensure your public key is exactly 24 characters
- Use the padding solution described above
- Modify the validation logic

### "Failed to validate Tilda API credentials"

This means your API keys are not being accepted by the Tilda API.

**Solution:**
- Verify your Business subscription is active
- Regenerate API keys if necessary
- Check for any whitespace or special characters

## Next Steps

After successfully configuring the API:

1. **Configure project settings** for both websites
2. **Set up content synchronization** between sites
3. **Implement content export routines** for offline processing

For more details, see the [Implementation Guide](implementation-guide) and [Troubleshooting Guide](troubleshooting).

---

*Last Updated: May 23, 2025* 