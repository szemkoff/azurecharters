#!/usr/bin/env node

/**
 * Complete Documentation Migration Script
 * 
 * This script automates migrating all documentation
 * from various sources to your GitHub Pages Docusaurus site.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  githubRepo: 'azurecharters-github',
  sourceDir: 'tilda-api/docs',
  targetDir: 'azurecharters-github/docs',
  mainBranch: 'main',
  docMappings: [
    // API Documentation
    { 
      source: 'API_SETUP_GUIDE.md', 
      target: 'api/setup-guide.md',
      title: 'API Setup Guide',
      position: 1,
      section: 'API Documentation',
      description: 'Complete guide for setting up and configuring the Tilda API integration'
    },
    {
      source: 'DOCUMENTATION.md',
      target: 'api/overview.md',
      title: 'API Overview',
      position: 1,
      section: 'API Documentation',
      description: 'Overview of the Tilda API integration architecture'
    },
    {
      source: 'TROUBLESHOOTING.md',
      target: 'api/troubleshooting.md',
      title: 'API Troubleshooting',
      position: 3,
      section: 'API Documentation',
      description: 'Solutions to common API integration issues'
    },
    
    // Business Pillars
    {
      source: 'YACHT_CHARTERS.md',
      target: 'business/yacht-charters.md',
      title: 'Yacht Charters',
      position: 3,
      section: 'Business Pillars',
      description: 'Comprehensive guide to the yacht charter business pillar'
    },
    {
      source: 'WEBSITE_STRUCTURE.md',
      target: 'business/overview.md',
      title: 'Business Structure Overview',
      position: 1,
      section: 'Business Pillars',
      description: 'Overview of the business structure and pillars'
    },
    
    // Integration
    {
      source: 'HUBSPOT_INTEGRATION.md',
      target: 'integration/hubspot.md',
      title: 'HubSpot Integration',
      position: 1,
      section: 'Integration',
      description: 'Complete guide to integrating HubSpot CRM with Azure Yacht Group'
    },
    
    // Development
    {
      source: 'DEPLOYMENT_SCRIPTS.md',
      target: 'development/deployment.md',
      title: 'Deployment Scripts',
      position: 3,
      section: 'Development Workflow',
      description: 'Guide to using automated deployment scripts'
    },
    {
      source: 'DEPLOYMENT_PLAN.md',
      target: 'development/implementation.md',
      title: 'Implementation Plan',
      position: 1,
      section: 'Development Workflow',
      description: 'Comprehensive implementation timeline and strategy'
    },
    
    // Add more documents as needed
  ]
};

// Helper functions
function ensureDirExists(dirPath) {
  const dirs = dirPath.split(path.sep);
  let currentDir = '';
  
  for (const dir of dirs) {
    currentDir = currentDir ? path.join(currentDir, dir) : dir;
    if (!fs.existsSync(currentDir)) {
      fs.mkdirSync(currentDir);
      console.log(`Created directory: ${currentDir}`);
    }
  }
}

function addFrontMatter(content, file) {
  const frontMatter = `---
id: ${path.basename(file.target, '.md')}
title: ${file.title}
sidebar_position: ${file.position}
description: ${file.description}
last_update:
  date: ${new Date().toISOString().split('T')[0]}
  author: Documentation Migration Script
---

`;

  // Check if content already has front matter
  if (content.startsWith('---')) {
    const endOfFrontMatter = content.indexOf('---', 3) + 3;
    return frontMatter + content.substring(endOfFrontMatter).trim();
  }

  return frontMatter + content;
}

function updateInternalLinks(content, currentFile) {
  // Map of original filenames to new locations
  const linkMap = {};
  config.docMappings.forEach(file => {
    const basename = path.basename(file.source, '.md');
    linkMap[`${basename}.md`] = file.target;
    linkMap[basename] = file.target;
  });

  // Calculate the relative path from the current file
  const currentDir = path.dirname(currentFile.target);
  
  // Replace all links
  for (const [oldLink, newPath] of Object.entries(linkMap)) {
    // Calculate relative path from current file to target
    let relativePath = path.relative(currentDir, path.dirname(newPath));
    relativePath = relativePath ? relativePath + '/' : './';
    const newFilename = path.basename(newPath);
    
    // Replace markdown links: [text](link)
    const pattern = new RegExp(`\\[([^\\]]*)\\]\\(${oldLink}\\)`, 'g');
    content = content.replace(pattern, `[$1](${relativePath}${newFilename})`);
  }

  return content;
}

function updateSidebar() {
  const sidebarPath = path.join(config.githubRepo, 'sidebars.js');
  let sidebarContent = fs.readFileSync(sidebarPath, 'utf8');
  
  // Group documents by section
  const sections = {};
  config.docMappings.forEach(file => {
    if (!sections[file.section]) {
      sections[file.section] = [];
    }
    sections[file.section].push(file.target.replace('.md', ''));
  });
  
  // Check if sections already exist and add them if they don't
  for (const [sectionName, items] of Object.entries(sections)) {
    if (!sidebarContent.includes(`label: '${sectionName}'`)) {
      console.log(`Adding section ${sectionName} to sidebar...`);
      
      // Format items properly
      const formattedItems = items.map(item => `'${item}'`).join(',\n        ');
      
      // Create new section
      const newSection = `
    {
      type: 'category',
      label: '${sectionName}',
      items: [
        ${formattedItems}
      ],
    },`;
      
      // Find the closing bracket of the frameworkSidebar array
      const endOfSidebar = sidebarContent.lastIndexOf('],');
      
      // Insert before the closing bracket
      sidebarContent = sidebarContent.slice(0, endOfSidebar) + newSection + sidebarContent.slice(endOfSidebar);
    }
  }
  
  // Write updated sidebar back to file
  fs.writeFileSync(sidebarPath, sidebarContent);
  console.log('Updated sidebar.js with new sections');
}

function updateVersionInfo() {
  const versionsPath = path.join(config.targetDir, 'versions.md');
  const today = new Date().toISOString().split('T')[0];
  
  const versionContent = `---
id: versions
title: Documentation Versions
sidebar_position: 100
---

# Version History

This documentation is currently at version 1.0 (${today}).

## Changelog

### v1.0 (${today})
- Initial consolidated documentation
- Migrated content from tilda-api documentation
- Added API, Business, and Integration sections
`;

  fs.writeFileSync(versionsPath, versionContent);
  console.log('Created versions.md file');
}

// Main execution
async function main() {
  try {
    console.log('Starting complete documentation migration...');
    
    // 1. Check out the main branch
    console.log(`Checking out ${config.mainBranch} branch...`);
    try {
      execSync(`cd ${config.githubRepo} && git checkout ${config.mainBranch}`);
    } catch (error) {
      console.log(`Creating new branch: documentation-update`);
      execSync(`cd ${config.githubRepo} && git checkout -b documentation-update`);
    }
    
    // 2. Create target directories
    console.log('Creating target directories...');
    const directories = ['api', 'business', 'integration'];
    directories.forEach(dir => {
      ensureDirExists(path.join(config.targetDir, dir));
    });
    
    // 3. Process each file
    console.log('Processing documentation files...');
    for (const file of config.docMappings) {
      const sourcePath = path.join(config.sourceDir, file.source);
      const targetPath = path.join(config.targetDir, file.target);
      
      if (fs.existsSync(sourcePath)) {
        console.log(`Processing ${file.source} → ${file.target}`);
        
        // Read content
        let content = fs.readFileSync(sourcePath, 'utf8');
        
        // Add front matter
        content = addFrontMatter(content, file);
        
        // Update internal links
        content = updateInternalLinks(content, file);
        
        // Ensure target directory exists
        ensureDirExists(path.dirname(targetPath));
        
        // Write transformed content
        fs.writeFileSync(targetPath, content);
        console.log(`Created ${targetPath}`);
      } else {
        console.warn(`Warning: Source file not found: ${sourcePath}`);
      }
    }
    
    // 4. Update sidebar
    updateSidebar();
    
    // 5. Create version info
    updateVersionInfo();
    
    // 6. Provide instructions for committing changes
    console.log('\nMigration complete! To commit these changes:');
    console.log(`
    cd ${config.githubRepo}
    git add .
    git commit -m "Comprehensive documentation update"
    git push origin documentation-update
    
    Then create a pull request to merge documentation-update into ${config.mainBranch}
    `);
    
  } catch (error) {
    console.error('Error during migration:', error);
    process.exit(1);
  }
}

main(); 