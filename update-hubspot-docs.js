#!/usr/bin/env node

/**
 * Documentation Migration Script for Hubspot Integration
 * 
 * This script automates updating Hubspot-related documentation
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
  hubspotBranch: 'hubspot',
  hubspotFiles: [
    // Map of source files to target locations
    { 
      source: 'HUBSPOT_INTEGRATION.md', 
      target: 'integration/hubspot.md',
      title: 'HubSpot Integration',
      position: 1,
      description: 'Complete guide to integrating HubSpot CRM with Azure Yacht Group'
    },
    {
      source: 'DOCUMENTATION.md',
      target: 'integration/crm-overview.md',
      title: 'CRM Integration Overview',
      position: 2,
      description: 'Overview of CRM integration strategies and best practices'
    }
    // Add other Hubspot-related documentation files
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
  config.hubspotFiles.forEach(file => {
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
  
  // Check if HubSpot integration section already exists
  if (!sidebarContent.includes('Integration')) {
    // Find the closing bracket of the frameworkSidebar array
    const endOfSidebar = sidebarContent.lastIndexOf('],');
    
    // Insert the new section
    const integrationSection = `
    {
      type: 'category',
      label: 'Integration',
      items: [
        'integration/hubspot',
        'integration/crm-overview',
      ],
    },`;
    
    // Insert before the closing bracket
    sidebarContent = sidebarContent.slice(0, endOfSidebar) + integrationSection + sidebarContent.slice(endOfSidebar);
    
    // Write updated sidebar back to file
    fs.writeFileSync(sidebarPath, sidebarContent);
    console.log('Updated sidebar.js with Integration section');
  }
}

// Main execution
async function main() {
  try {
    console.log('Starting Hubspot documentation migration...');
    
    // 1. Check out the Hubspot branch
    console.log(`Checking out ${config.hubspotBranch} branch...`);
    try {
      execSync(`cd ${config.githubRepo} && git checkout ${config.hubspotBranch}`);
    } catch (error) {
      console.log(`Branch doesn't exist locally. Creating tracking branch...`);
      execSync(`cd ${config.githubRepo} && git checkout -b ${config.hubspotBranch} origin/${config.hubspotBranch}`);
    }
    
    // 2. Create target directories
    console.log('Creating target directories...');
    ensureDirExists(path.join(config.targetDir, 'integration'));
    
    // 3. Process each file
    console.log('Processing Hubspot documentation files...');
    for (const file of config.hubspotFiles) {
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
    
    // 5. Provide instructions for committing changes
    console.log('\nMigration complete! To commit these changes:');
    console.log(`
    cd ${config.githubRepo}
    git add .
    git commit -m "Update Hubspot integration documentation"
    git push origin ${config.hubspotBranch}
    `);
    
  } catch (error) {
    console.error('Error during migration:', error);
    process.exit(1);
  }
}

main(); 