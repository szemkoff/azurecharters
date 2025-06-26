---
title: Tilda API Troubleshooting Guide
sidebar_label: Troubleshooting
---

# Tilda API Troubleshooting Guide

This guide provides solutions for common issues encountered with the Tilda API integration.

## API Connection Issues

### Issue: "Wrong publickey length" Error

**Error Message:**
```
error: Tilda API validation failed: Bad request line. Wrong publickey length
```

**Explanation:**
Tilda API requires the public key to be exactly 24 characters long, but our current key is only 20 characters.

**Solutions:**

1. **Pad the Key** (Temporary):
   ```
   # Original key: k44s07jv3fy6lxtq3kik (20 chars)
   # Padded key:   k44s07jv3fy6lxtq3kik0000 (24 chars)
   ```

2. **Modify Validation Logic** (Development):
   ```javascript
   // In tildaApi.js, change:
   this.useMockData = !this.publicKey || !this.secretKey || 
                     this.publicKey.length !== 24 || this.secretKey.length !== 32;
   
   // To:
   this.useMockData = !this.publicKey || !this.secretKey;
   ```

3. **Contact Tilda Support** (Recommended):
   Request properly formatted API keys that match the expected lengths.

### Issue: "Tilda API validation failed" Error

**Error Message:**
```
error: Tilda API validation failed: Bad request line
```

**Explanation:**
The API credentials were rejected by the Tilda API server.

**Solutions:**

1. **Verify Credentials**: Double-check that the API keys are correct and active
2. **Check Subscription**: Ensure your Tilda Business subscription is active
3. **Clear Whitespace**: Remove any accidental whitespace from your keys
4. **Check Rate Limits**: Tilda may impose rate limits on API requests

## Mock Mode Issues

### Issue: Running in Mock Mode Unexpectedly

**Symptoms:**
Log shows: "TildaApiService initialized in mock data mode"

**Explanation:**
The API is running in mock mode when you expected it to use real API credentials.

**Solutions:**

1. **Check Validation Logic**: Verify that the validation in `tildaApi.js` is correctly evaluating your credentials
2. **Debug Credentials**: Add logging to show the exact keys being used:
   ```javascript
   console.log(`Public key: ${this.publicKey}, length: ${this.publicKey.length}`);
   console.log(`Secret key: ${this.secretKey}, length: ${this.secretKey.length}`);
   ```
3. **Force API Mode**: Temporarily override the mock mode detection for testing:
   ```javascript
   this.useMockData = false; // Force API mode
   ```

### Issue: Missing Mock Data for New Templates

**Symptoms:**
New templates show empty sections or errors when in mock mode.

**Solutions:**

1. **Add Mock Data**: Update the `_getMockData` method in `tildaApi.js` to include data for new templates
2. **Create Template Fallbacks**: Ensure templates have fallback content when data is missing

## Multi-Project Issues

### Issue: Configuration Confusion Between Sites

**Symptoms:**
Content from one site appears on the other, or wrong API is being used.

**Solutions:**

1. **Namespace Configuration**: Ensure all configuration is properly namespaced by project:
   ```javascript
   const mainSiteConfig = {
     apiBaseUrl: 'https://api.tildacdn.info/v1',
     publicKey: process.env.TILDA_PUBLIC_KEY_MAIN,
     // ...
   };
   
   const charterSiteConfig = {
     apiBaseUrl: 'https://api.tildacdn.info/v1',
     publicKey: process.env.TILDA_PUBLIC_KEY_CHARTER,
     // ...
   };
   ```

2. **Add Debug Logging**: Add logging to trace which API service is being used:
   ```javascript
   console.log(`Using API service for project: ${this.projectId}`);
   ```

## Content Synchronization Issues

### Issue: Stale Content Between Sites

**Symptoms:**
Content updates on one site aren't reflected on the other.

**Solutions:**

1. **Check Sync Triggers**: Verify that synchronization functions are being triggered
2. **Implement Webhooks**: Use Tilda webhooks to trigger real-time synchronization
3. **Add Manual Sync Button**: Provide a manual sync option in the admin interface

## Deployment Issues

### Issue: Environment Variables Not Loading

**Symptoms:**
API credentials not found in production environment.

**Solutions:**

1. **Verify Environment Setup**: Check that environment variables are correctly set on the server
2. **Add Fallback Loading**: Implement multiple methods to load configuration:
   ```javascript
   const publicKey = process.env.TILDA_PUBLIC_KEY || 
                    fs.readFileSync('./keys/public_key.txt', 'utf8') ||
                    config.default.publicKey;
   ```

3. **Improve Error Messages**: Add more descriptive error messages about missing configuration

## Diagnostic Tools

### API Health Check

Run this script to check API health:

```javascript
// api-health-check.js
require('dotenv').config();
const TildaApiService = require('./src/services/tildaApi');

async function checkApiHealth() {
  console.log('=== Tilda API Health Check ===');
  
  // Check environment variables
  console.log('\nEnvironment check:');
  console.log(`TILDA_PUBLIC_KEY: ${maskString(process.env.TILDA_PUBLIC_KEY)}`);
  console.log(`TILDA_SECRET_KEY: ${maskString(process.env.TILDA_SECRET_KEY)}`);
  console.log(`TILDA_PROJECT_ID: ${process.env.TILDA_PROJECT_ID}`);
  
  // Initialize API service
  const apiService = new TildaApiService();
  console.log(`\nAPI Mode: ${apiService.useMockData ? 'MOCK' : 'LIVE'}`);
  
  if (!apiService.useMockData) {
    try {
      // Test API connection
      const projects = await apiService.getProjects();
      console.log(`\nAPI connection successful!`);
      console.log(`Projects found: ${projects.length}`);
    } catch (err) {
      console.error(`\nAPI connection failed: ${err.message}`);
    }
  }
}

function maskString(str) {
  if (!str) return 'undefined';
  return str.substring(0, 4) + '***' + str.substring(str.length - 4);
}

checkApiHealth().catch(console.error);
```

Run with:
```
node api-health-check.js
```

## Common Error Reference

| Error | Cause | Solution |
|-------|-------|----------|
| Wrong publickey length | Public key not 24 chars | Pad key or modify validation |
| Wrong secretkey length | Secret key not 32 chars | Pad key or modify validation |
| Request failed with status code 409 | API conflict | Check if resource exists already |
| Request failed with status code 429 | Rate limiting | Implement backoff strategy |
| ENOTFOUND | DNS resolution failed | Check network and hostname |
| ECONNREFUSED | Connection refused | Check server is running and accessible |

For more detailed API information, refer to the [Tilda API Documentation](https://help-center.tilda.cc/api) or contact [support@azureyachtgroup.com](mailto:support@azureyachtgroup.com) for assistance.

---

*Last Updated: May 23, 2025* 