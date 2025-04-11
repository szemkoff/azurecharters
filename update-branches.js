#!/usr/bin/env node

/**
 * Branch-specific Documentation Update Script
 * 
 * This script updates specific branches with relevant documentation.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  githubRepo: 'azurecharters-github',
  sourceDir: 'tilda-api/docs',
  targetDir: 'azurecharters-github/docs',
  branches: [
    {
      name: 'hubspot',
      documents: [
        { 
          source: 'HUBSPOT_INTEGRATION.md', 
          target: 'integration/hubspot.md',
          title: 'HubSpot Integration',
          position: 1,
          section: 'Integration',
          description: 'Complete guide to integrating HubSpot CRM with Azure Yacht Group'
        },
        {
          source: 'DOCUMENTATION.md',
          target: 'integration/crm-overview.md',
          title: 'CRM Integration Overview',
          position: 2,
          section: 'Integration',
          description: 'Overview of CRM integration strategies and best practices'
        }
      ]
    },
    {
      name: 'api-development',
      documents: [
        { 
          source: 'API_SETUP_GUIDE.md', 
          target: 'api/setup-guide.md',
          title: 'API Setup Guide',
          position: 1,
          section: 'API Documentation',
          description: 'Complete guide for setting up and configuring the Tilda API integration'
        },
        {
          source: 'TROUBLESHOOTING.md',
          target: 'api/troubleshooting.md',
          title: 'API Troubleshooting',
          position: 3,
          section: 'API Documentation',
          description: 'Solutions to common API integration issues'
        }
      ]
    },
    {
      name: 'yacht-charters',
      documents: [
        {
          source: 'YACHT_CHARTERS.md',
          target: 'business/yacht-charters.md',
          title: 'Yacht Charters',
          position: 3,
          section: 'Business Pillars',
          description: 'Comprehensive guide to the yacht charter business pillar'
        }
      ]
    }
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

function updateInternalLinks(content, currentFile, allDocuments) {
  // Map of original filenames to new locations
  const linkMap = {};
  allDocuments.forEach(file => {
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

function updateSidebar(branch) {
  const sidebarPath = path.join(config.githubRepo, 'sidebars.js');
  let sidebarContent = fs.readFileSync(sidebarPath, 'utf8');
  
  // Group documents by section
  const sections = {};
  branch.documents.forEach(file => {
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
    } else {
      // Section exists, check if items are already there
      for (const item of items) {
        if (!sidebarContent.includes(`'${item}'`)) {
          // Item doesn't exist, add it to the section
          const sectionStart = sidebarContent.indexOf(`label: '${sectionName}'`);
          const itemsStart = sidebarContent.indexOf('items:', sectionStart) + 'items:'.length;
          const itemsEnd = sidebarContent.indexOf('],', itemsStart) + 1;
          
          // Extract the items array
          let itemsArray = sidebarContent.substring(itemsStart, itemsEnd).trim();
          // Remove the closing bracket
          itemsArray = itemsArray.substring(0, itemsArray.length - 1);
          // Add the new item
          if (itemsArray.trim() === '[') {
            // Empty array
            itemsArray += `'${item}'`;
          } else {
            // Array with items
            itemsArray += `,\n        '${item}'`;
          }
          // Add the closing bracket back
          itemsArray += '\n      ]';
          
          // Replace the items array
          sidebarContent = sidebarContent.substring(0, itemsStart) + itemsArray + sidebarContent.substring(itemsEnd);
        }
      }
    }
  }
  
  // Write updated sidebar back to file
  fs.writeFileSync(sidebarPath, sidebarContent);
  console.log('Updated sidebar.js with new sections');
}

// Main execution
async function main() {
  try {
    console.log('Starting branch-specific documentation update...');
    
    for (const branch of config.branches) {
      console.log(`\nProcessing branch: ${branch.name}`);
      
      // 1. Check out the branch
      console.log(`Checking out ${branch.name} branch...`);
      try {
        execSync(`cd ${config.githubRepo} && git checkout ${branch.name}`);
      } catch (error) {
        console.log(`Branch doesn't exist locally. Creating tracking branch...`);
        try {
          execSync(`cd ${config.githubRepo} && git checkout -b ${branch.name} origin/${branch.name}`);
        } catch (error) {
          console.log(`Branch doesn't exist remotely. Creating new branch...`);
          execSync(`cd ${config.githubRepo} && git checkout -b ${branch.name}`);
        }
      }
      
      // 2. Create target directories
      console.log('Creating target directories...');
      const directories = new Set(branch.documents.map(doc => path.dirname(doc.target)));
      directories.forEach(dir => {
        ensureDirExists(path.join(config.targetDir, dir));
      });
      
      // 3. Process each file
      console.log('Processing documentation files...');
      for (const file of branch.documents) {
        const sourcePath = path.join(config.sourceDir, file.source);
        const targetPath = path.join(config.targetDir, file.target);
        
        if (fs.existsSync(sourcePath)) {
          console.log(`Processing ${file.source} → ${file.target}`);
          
          // Read content
          let content = fs.readFileSync(sourcePath, 'utf8');
          
          // Add front matter
          content = addFrontMatter(content, file);
          
          // Update internal links
          content = updateInternalLinks(content, file, branch.documents);
          
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
      updateSidebar(branch);
      
      // 5. Commit changes for this branch
      console.log(`Committing changes to branch ${branch.name}...`);
      execSync(`cd ${config.githubRepo} && git add . && git commit -m "Update ${branch.name} documentation"`);
    }
    
    // 6. Provide instructions for pushing changes
    console.log('\nAll branches updated! To push these changes:');
    for (const branch of config.branches) {
      console.log(`
  cd ${config.githubRepo}
  git checkout ${branch.name}
  git push origin ${branch.name}
  `);
    }
    
  } catch (error) {
    console.error('Error during branch update:', error);
    process.exit(1);
  }
}

main(); 