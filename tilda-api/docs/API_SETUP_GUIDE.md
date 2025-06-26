# Tilda API Setup Guide

This guide provides detailed instructions for properly setting up and troubleshooting the Tilda API integration with the Azure Yacht Group website.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Obtaining API Credentials](#obtaining-api-credentials)
3. [Environment Configuration](#environment-configuration)
4. [Troubleshooting Common Issues](#troubleshooting-common-issues)
5. [Testing the API Connection](#testing-the-api-connection)

## Prerequisites

Before setting up the Tilda API integration, you'll need:

- A Tilda Business subscription (or higher) which includes API access
- Administrative access to your Tilda account
- The Azure Yacht Group Tilda API project installed locally

## Obtaining API Credentials

1. **Log in to your Tilda account** at [tilda.cc](https://tilda.cc/)
2. **Navigate to your account settings** by clicking on your profile icon in the top-right corner
3. **Select "API Keys"** from the dropdown menu
   - If you can't see this option, verify your account has a Business subscription
4. **Generate new API keys** if you don't have them already
   - The Public Key should be 24 characters long
   - The Secret Key should be 32 characters long
5. **Copy both keys** to use in your environment configuration

![Tilda API Keys Screenshot](https://via.placeholder.com/800x400/0078D4/ffffff?text=Tilda+API+Keys+Screenshot)

## Environment Configuration

1. **Create or edit the `.env` file** in the root of your Tilda API project
2. **Add your API credentials** to the file:

```
# Tilda API credentials
TILDA_PUBLIC_KEY=your_24_character_public_key_here
TILDA_SECRET_KEY=your_32_character_secret_key_here

# Server configuration
PORT=3000
NODE_ENV=development
```

3. **Restart your server** to apply the changes

## Troubleshooting Common Issues

### "Wrong publickey length" Error

If you see the error `Tilda API validation failed: Bad request line. Wrong publickey length`, it means your public key is not correctly formatted.

**Solution:**
- Verify that your public key is exactly 24 characters long
- Ensure there are no whitespace or special characters
- Double-check that you've copied the complete key
- Regenerate your API keys if the issue persists

### General API Connection Failures

If you experience other API connection failures:

1. **Verify your subscription** - Ensure your Tilda account has an active Business subscription
2. **Check for rate limits** - Tilda imposes rate limits on API calls
3. **Verify network connectivity** - Ensure your development environment can connect to external servers
4. **Check API endpoints** - Tilda may occasionally update their API endpoints

## Testing the API Connection

To verify your API credentials are working correctly:

1. **Start the server** with `npm run dev`
2. **Run the test script** with `node test-api.js`
3. **Check the logs** for successful connection messages

Alternatively, use the command-line client:

```bash
./client/tilda-client.js
```

Then select option 1 to test the API connection.

## Next Steps

Once your API connection is working correctly, you can proceed with:

1. **Exploring projects and pages** using the API
2. **Exporting content** from Tilda to your local server
3. **Implementing SEO enhancements** as outlined in the [Implementation Guide](IMPLEMENTATION_GUIDE.md)
4. **Setting up webhooks** for automatic content updates

For more detailed information, refer to:
- [Tilda's Official API Documentation](https://help-center.tilda.cc/api)
- [Our Implementation Guide](IMPLEMENTATION_GUIDE.md)
- [Troubleshooting Guide](TROUBLESHOOTING.md) for other common issues

## Support

If you continue to experience issues with the API connection, please contact:
- Technical support at [support@azureyachtgroup.com](mailto:support@azureyachtgroup.com)
- Or refer to the [official Tilda support](https://help-center.tilda.cc/) 