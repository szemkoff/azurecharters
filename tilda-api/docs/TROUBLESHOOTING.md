# Troubleshooting Guide

This guide provides solutions to common issues that may arise when using the Azure Yacht Group Tilda API integration.

## Table of Contents

1. [API Connection Issues](#api-connection-issues)
2. [Authentication Problems](#authentication-problems)
3. [Webhook Failures](#webhook-failures)
4. [Content Export Issues](#content-export-issues)
5. [SEO Enhancement Errors](#seo-enhancement-errors)
6. [Performance Issues](#performance-issues)
7. [HubSpot Integration Problems](#hubspot-integration-problems)
8. [Deployment Challenges](#deployment-challenges)

## API Connection Issues

### API Server Won't Start

**Symptoms:**
- Error when running `npm run dev`
- Server crashes immediately after starting

**Solutions:**
1. Check Node.js version:
   ```bash
   node -v
   ```
   Ensure you're using Node.js v14 or later.

2. Verify port availability:
   ```bash
   lsof -i :3000
   ```
   If the port is in use, change the port in `.env` file.

3. Check for syntax errors:
   ```bash
   npm run lint
   ```

4. Verify all dependencies are installed:
   ```bash
   npm install
   ```

### API Requests Timing Out

**Symptoms:**
- Requests to the API take a long time or timeout
- "Connection reset" errors

**Solutions:**
1. Check your internet connection
2. Verify Tilda's API is operational
3. Increase request timeout in the config:
   ```javascript
   // In src/config.js, add:
   timeout: 30000, // 30 seconds
   ```
4. Check server resource usage (CPU/memory)

## Authentication Problems

### Invalid API Credentials

**Symptoms:**
- Error message: "Bad request line. Wrong publickey length"
- Error message: "Authentication failed"

**Solutions:**
1. Verify API keys in `.env` file:
   ```
   TILDA_PUBLIC_KEY=your_public_key_here
   TILDA_SECRET_KEY=your_secret_key_here
   ```
   Ensure there are no spaces or special characters.

2. Regenerate API keys in Tilda:
   - Go to Tilda Site Settings → Export → API Integration
   - Generate new keys and update your `.env` file

3. Verify you have a Business Plan subscription:
   - Tilda API is only available on Business Plan or higher

4. Check API request limits:
   - Tilda limits API requests to 150 per hour

### Rate Limiting

**Symptoms:**
- Error message: "Too many requests"
- Sporadic failures during batch operations

**Solutions:**
1. Implement request throttling:
   ```javascript
   // Add delay between requests
   const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
   await delay(1000); // 1 second delay
   ```

2. Add exponential backoff for failed requests:
   ```javascript
   // Retry with exponential backoff
   let retries = 0;
   const maxRetries = 3;
   while (retries < maxRetries) {
     try {
       return await makeRequest();
     } catch (error) {
       retries++;
       if (retries >= maxRetries) throw error;
       await delay(1000 * Math.pow(2, retries));
     }
   }
   ```

## Webhook Failures

### Webhook Not Receiving Notifications

**Symptoms:**
- No logs when publishing content in Tilda
- Webhook endpoint never called

**Solutions:**
1. Verify webhook URL configuration in Tilda:
   - Check Site Settings → Export → API Integration
   - Ensure URL is accessible from the internet

2. Check server firewall settings:
   - Ensure port 80/443 is open for incoming connections

3. Verify SSL certificate:
   - Tilda requires HTTPS for webhooks
   - Check certificate validity

4. Monitor webhook endpoint:
   ```bash
   # Add temporary logging
   console.log('Webhook request received:', req.query);
   ```

### Webhook Responds But No Content Updates

**Symptoms:**
- Webhook logs show requests being received
- Content is not being updated

**Solutions:**
1. Check webhook response:
   - Must respond with "ok" text
   - Response must be sent within 5 seconds

2. Verify async processing:
   - Use setTimeout for long-running tasks
   - Don't block the webhook response

3. Check logs for errors:
   ```bash
   tail -f logs/error.log
   ```

4. Test manual content export:
   ```bash
   ./client/tilda-client.js
   # Select option 5 to export a page
   ```

## Content Export Issues

### Missing Images or Assets

**Symptoms:**
- HTML exports successfully but images are missing
- Broken image links in exported content

**Solutions:**
1. Check image paths in exported HTML:
   - Look for correct relative paths

2. Verify image downloading logic:
   - Ensure `_downloadFile` function works correctly
   - Check for permission issues in the destination directory

3. Create missing directories:
   ```javascript
   if (!fs.existsSync(config.outputDirectories.images)) {
     fs.mkdirSync(config.outputDirectories.images, { recursive: true });
   }
   ```

4. Test direct image download:
   ```bash
   curl -o test.jpg "https://example.com/image.jpg"
   ```

### HTML Parsing Errors

**Symptoms:**
- Error message: "Could not find head section in the page HTML"
- SEO enhancements fail

**Solutions:**
1. Inspect the HTML content:
   ```javascript
   console.log('HTML head section:', headMatch);
   ```

2. Use more robust parsing:
   ```javascript
   // Instead of regex, use a proper HTML parser
   const cheerio = require('cheerio');
   const $ = cheerio.load(pageData.html);
   const headContent = $('head').html();
   ```

3. Handle edge cases:
   ```javascript
   if (!headMatch) {
     // Create head section if not found
     const newHead = '<head><title>Default Title</title></head>';
     pageData.html = pageData.html.replace('<html>', '<html>' + newHead);
   }
   ```

## SEO Enhancement Errors

### Structured Data Not Validating

**Symptoms:**
- Google Structured Data Testing Tool shows errors
- Schema markup not recognized

**Solutions:**
1. Validate JSON structure:
   ```javascript
   try {
     JSON.parse(JSON.stringify(structuredData));
   } catch (error) {
     console.error('Invalid JSON structure:', error);
   }
   ```

2. Check required fields:
   - Product schema needs name, description
   - FAQ schema needs question/answer pairs
   - LocalBusiness needs address information

3. Use Google's Rich Results Test tool:
   - Test the exported HTML to verify schema

4. Fix schema context:
   ```javascript
   // Ensure context is included
   structuredData['@context'] = 'https://schema.org';
   ```

### Meta Tags Not Updating

**Symptoms:**
- SEO enhancements are applied but not visible
- Meta tags not changed after enhancement

**Solutions:**
1. Check regex patterns:
   ```javascript
   // More robust title tag replacement
   headContent = headContent.replace(/<title[^>]*>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
   ```

2. Verify HTML replacement logic:
   ```javascript
   // Log before and after
   console.log('Before:', headContent.substring(0, 200));
   // Apply changes
   console.log('After:', headContent.substring(0, 200));
   ```

3. Check for duplicate tags:
   - Remove all instances before adding new ones

4. Add tags if not present:
   ```javascript
   if (!headContent.includes('<meta name="description"')) {
     headContent += `\n<meta name="description" content="${description}">`;
   }
   ```

## Performance Issues

### Slow API Responses

**Symptoms:**
- API takes a long time to respond
- Timeouts when exporting large projects

**Solutions:**
1. Implement pagination:
   ```javascript
   // Process pages in batches
   const batchSize = 5;
   for (let i = 0; i < pages.length; i += batchSize) {
     const batch = pages.slice(i, i + batchSize);
     await Promise.all(batch.map(page => processPage(page)));
   }
   ```

2. Add caching for frequently accessed data:
   ```javascript
   const cache = new Map();
   
   function getCachedData(key, ttl = 3600000) {
     if (cache.has(key)) {
       const { data, timestamp } = cache.get(key);
       if (Date.now() - timestamp < ttl) {
         return data;
       }
     }
     return null;
   }
   
   function setCachedData(key, data) {
     cache.set(key, { data, timestamp: Date.now() });
   }
   ```

3. Optimize file operations:
   - Use streams for large files
   - Process files in parallel when possible

4. Increase server resources:
   - Add more CPU/memory if needed
   - Consider horizontal scaling for high loads

## HubSpot Integration Problems

### Form Submissions Not Reaching HubSpot

**Symptoms:**
- Forms submit successfully but leads don't appear in HubSpot
- Error in API response from HubSpot

**Solutions:**
1. Verify HubSpot API key:
   - Check `.env` file for correct API key
   - Test API key with a simple request

2. Check form field mapping:
   - Ensure required HubSpot fields are included
   - Map Tilda form fields to correct HubSpot properties

3. Inspect request/response cycle:
   ```javascript
   console.log('HubSpot request:', JSON.stringify(requestData));
   console.log('HubSpot response:', JSON.stringify(response.data));
   ```

4. Use HubSpot's debugging tools:
   - Check API call history in HubSpot
   - Verify webhook delivery status

## Deployment Challenges

### Deploying to Production

**Symptoms:**
- Works locally but fails in production
- Environment-specific errors

**Solutions:**
1. Use environment variables:
   - Set `NODE_ENV=production` in production
   - Use different config values per environment

2. Set up proper process management:
   ```bash
   # Using PM2
   npm install -g pm2
   pm2 start src/app.js --name "tilda-api"
   pm2 save
   pm2 startup
   ```

3. Configure logging:
   - Send logs to a proper logging service
   - Set up log rotation

4. Monitor application health:
   ```bash
   # Add health checks to your deployment
   curl https://your-server.com/health
   ```

### Server Security

**Symptoms:**
- Unauthorized access attempts
- Vulnerability warnings

**Solutions:**
1. Implement rate limiting:
   ```javascript
   const rateLimit = require('express-rate-limit');
   
   app.use(rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100 // limit each IP to 100 requests per windowMs
   }));
   ```

2. Add request validation:
   - Validate all input parameters
   - Use JSON schema validation

3. Set up CORS properly:
   ```javascript
   const cors = require('cors');
   
   app.use(cors({
     origin: ['https://azureyachtgroup.com', 'https://admin.azureyachtgroup.com'],
     methods: ['GET', 'POST'],
     allowedHeaders: ['Content-Type', 'Authorization']
   }));
   ```

4. Keep dependencies updated:
   ```bash
   npm audit
   npm update
   ```

## Reporting Issues

If you encounter an issue not covered in this guide, please report it with the following information:

1. Description of the issue
2. Steps to reproduce
3. Expected behavior
4. Actual behavior
5. Environment details (Node.js version, OS, etc.)
6. Relevant log entries

Submit issues to: support@azureyachtgroup.com 