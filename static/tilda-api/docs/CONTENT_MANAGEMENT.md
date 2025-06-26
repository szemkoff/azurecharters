# Content Management Guide

This guide explains how to manage content for the Azure Yacht Group website using Tilda and our custom setup.

## Content Management Options

### Option 1: Using Tilda's Visual Editor (Recommended)

1. **Create Content in Tilda**
   - Log in to your Tilda account
   - Create and edit pages using Tilda's visual editor
   - Use Tilda's blocks and components
   - Preview your changes in Tilda

2. **Export Content**
   - In Tilda, go to your page
   - Click "Export" in the top menu
   - Choose "Export as HTML"
   - Save the exported file

3. **Update Website Content**
   - Place the exported HTML file in the `exports` directory
   - Run the content update script:
     ```bash
     node scripts/export-tilda-content.js
     ```
   - The script will process the exported content and update the website

### Option 2: Direct Code Editing

If you need to make quick changes or don't have access to Tilda:

1. **Edit Mock Data**
   - Navigate to `src/controllers/pagesController.js`
   - Find the `mockData` object
   - Update the content as needed
   - Save the file

2. **Update Images**
   - Place new images in the `public/images` directory
   - Update image references in the mock data

## Content Structure

The website content is organized into three main sections:

1. **Yacht Brokerage**
   - Featured listings
   - Market insights
   - Testimonials

2. **New Construction**
   - Yacht models
   - Shipyards
   - Featured builds

3. **Yacht Charters**
   - Destinations
   - Charter yachts
   - Experiences

## Best Practices

1. **Content Updates**
   - Keep a backup of your content
   - Test changes locally before deploying
   - Use version control for content changes

2. **Images**
   - Optimize images before uploading
   - Use consistent naming conventions
   - Maintain proper aspect ratios

3. **SEO**
   - Include meta descriptions
   - Use proper heading hierarchy
   - Add alt text to images

## Troubleshooting

If you encounter issues:

1. **Content Not Updating**
   - Check file permissions
   - Verify export process
   - Clear browser cache

2. **Images Not Loading**
   - Verify image paths
   - Check file formats
   - Ensure proper permissions

3. **Layout Issues**
   - Check responsive design
   - Verify content structure
   - Test on multiple devices

## Support

For additional help:
- Contact technical support
- Refer to the [API Documentation](API_SETUP_GUIDE.md)
- Check the [Troubleshooting Guide](TROUBLESHOOTING.md) 