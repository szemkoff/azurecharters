# Deployment Scripts Documentation

This document provides detailed instructions for using the deployment scripts to prepare and deploy the Azure Yacht Group Tilda API project.

## Overview

The deployment scripts automate the process of preparing your development environment and deploying the application to staging and production environments. These scripts follow the phased approach outlined in the [Deployment Plan](DEPLOYMENT_PLAN.md).

## Available Scripts

- **`prepare-deployment.sh`**: Sets up your development environment and prepares for deployment
- **`deploy.sh`**: Creates a deployment package for staging or production environments

## Prerequisites

Before using these scripts, ensure you have:

- Node.js installed (v14 or later)
- Git installed (recommended for version control)
- Tilda Business Plan subscription with API access
- Valid Tilda API credentials

## Using the Preparation Script

The preparation script sets up your development environment and creates the necessary directory structure for deployment.

### Running the Script

```bash
./scripts/prepare-deployment.sh
```

### What the Script Does

1. Creates necessary directories (exports, logs, etc.)
2. Checks for and creates a `.env` file if needed
3. Warns if default API credentials are detected
4. Installs project dependencies
5. Initializes Git repository if not already done
6. Creates staging and production environment configurations
7. Tests the API connection

### After Running

After running the preparation script, you should:

1. Update the `.env` file with your actual Tilda API credentials
2. Update the staging and production environment configurations
3. Verify the API connection is working

## Using the Deployment Script

The deployment script creates a deployment package for either staging or production environments.

### Running the Script

For staging deployment (default):
```bash
./scripts/deploy.sh
```

For production deployment:
```bash
./scripts/deploy.sh -e production
```

### What the Script Does

1. Validates the environment and project setup
2. Checks for uncommitted changes in Git
3. Creates a backup of your current `.env` file
4. Sets up environment-specific configuration
5. Creates a deployment directory with all necessary files
6. Installs production dependencies
7. Creates a compressed deployment package
8. Provides next steps for deployment
9. Restores your original `.env` file

### Deployment Options

- **Staging Deployment**: Use for testing and validation before production
- **Production Deployment**: Use for live deployment to production servers

## Deployment Process

The complete deployment process follows these steps:

### 1. Development Setup

```bash
# Clone the repository
git clone <repository-url>
cd tilda-api

# Run the preparation script
./scripts/prepare-deployment.sh

# Update API credentials in .env
nano .env

# Start development server
npm run dev
```

### 2. Staging Deployment

```bash
# Create staging deployment package
./scripts/deploy.sh -e staging

# Upload to staging server and deploy
# (Follow instructions provided by the script)
```

### 3. Production Deployment

```bash
# After validating on staging
./scripts/deploy.sh -e production

# Upload to production server and deploy
# (Follow instructions provided by the script)
```

## Customizing the Deployment Scripts

You may need to customize the deployment scripts for your specific hosting environment or requirements:

1. **Server-specific configurations**: If you're using a specialized hosting provider, you may need to adjust the deployment process.
2. **CI/CD integration**: To integrate with CI/CD pipelines, modify the scripts to work with your CI/CD platform.
3. **Additional build steps**: For more complex builds, add additional steps to the deployment script.

To customize, open the scripts in a text editor and make the necessary modifications.

## Troubleshooting

### Common Issues

- **Script Permission Errors**: Ensure the scripts are executable with `chmod +x scripts/*.sh`
- **Environment File Not Found**: Run the preparation script first to create environment files
- **API Connection Failures**: Verify your API credentials in the `.env` file
- **Deployment Package Creation Failures**: Ensure all required directories exist

### Support

If you encounter issues with the deployment scripts, refer to:

- [Troubleshooting Guide](TROUBLESHOOTING.md)
- [API Setup Guide](API_SETUP_GUIDE.md)

## Security Considerations

- **API Credentials**: Never commit API credentials to version control
- **Environment Files**: Keep `.env` files secure and excluded from repositories
- **Production Deployments**: Use secure channels to transfer deployment packages
- **Server Access**: Use SSH keys and limited-access accounts for server access

## Conclusion

These deployment scripts streamline the process of preparing and deploying the Azure Yacht Group Tilda API project. By following the outlined procedures, you can ensure a consistent and reliable deployment process across environments.

For a more detailed understanding of the overall deployment strategy, refer to the [Deployment Plan](DEPLOYMENT_PLAN.md).

---

<div align="center">
  
**Azure Yacht Group**

[Back to Documentation Hub](README.md)

</div> 