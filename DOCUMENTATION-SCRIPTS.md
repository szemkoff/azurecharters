# Documentation Migration Scripts

This folder contains scripts to help migrate and organize documentation from various sources into the Docusaurus-based GitHub Pages site at https://szemkoff.github.io/azurecharters/.

## Available Scripts

### 1. `update-hubspot-docs.js`

This script specifically updates HubSpot integration documentation in the `hubspot` branch.

**Usage:**
```bash
node update-hubspot-docs.js
```

**What it does:**
- Checks out the HubSpot branch
- Creates necessary directories
- Migrates HubSpot-related documentation with proper frontmatter
- Updates internal links to match the new structure
- Updates the sidebar to include HubSpot documentation
- Commits changes to the branch

### 2. `migrate-all-docs.js`

This script performs a comprehensive migration of all documentation to the main branch.

**Usage:**
```bash
node migrate-all-docs.js
```

**What it does:**
- Creates a new branch `documentation-update` from main
- Migrates all documentation files with proper frontmatter
- Updates all internal links
- Updates the sidebar with all documentation sections
- Creates a version history file
- Provides instructions for creating a pull request

### 3. `update-branches.js`

This script updates multiple feature branches with their relevant documentation.

**Usage:**
```bash
node update-branches.js
```

**What it does:**
- Processes each configured branch (hubspot, api-development, yacht-charters)
- For each branch, migrates the relevant documentation
- Updates the sidebar for each branch
- Commits changes to each branch
- Provides instructions for pushing all branches

## Configuration

Each script has a configuration section at the top that defines:

- Source directories for documentation
- Target GitHub repository
- Branch names
- Documentation mapping (which source files go where)
- Section organization

Modify these configurations as needed to match your repository structure.

## Prerequisites

- Node.js 14 or higher
- Git installed and configured
- Local clone of the GitHub repository

## Workflow Recommendations

1. First, clone the GitHub repository:
   ```bash
   git clone https://github.com/szemkoff/azurecharters.git azurecharters-github
   ```

2. For working on a specific feature, use the branch-specific script:
   ```bash
   node update-hubspot-docs.js  # For HubSpot integration work
   ```

3. For a complete documentation refresh, use the comprehensive script:
   ```bash
   node migrate-all-docs.js
   ```

4. Review changes in the Docusaurus preview before pushing:
   ```bash
   cd azurecharters-github
   npm start
   ```

5. Push changes to GitHub:
   ```bash
   git push origin <branch-name>
   ```

## Troubleshooting

- If a script fails due to missing files, check that the source path is correct
- If sidebar updates fail, you may need to manually adjust the sidebar.js file
- If git commands fail, ensure you have the correct permissions for the repository 