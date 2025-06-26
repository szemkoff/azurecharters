#!/bin/bash

# Azure Yacht Group Google Sheets API Setup Script

echo "Setting up Azure Yacht Group Google Sheets API..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Create environment file if it doesn't exist
if [ ! -f .env ]; then
  echo "Creating .env file from example..."
  cp .env.example .env
  echo "Please edit .env file with your actual credentials"
fi

echo ""
echo "========================================"
echo "Setup completed!"
echo ""
echo "To run the API in development mode: npm run dev"
echo "To run the API in production mode: npm start"
echo "To run the example client: node client-example.js"
echo ""
echo "Important: Before running the API, you need to:"
echo "1. Enable the Google Sheets API in your Google Cloud Console"
echo "2. Create a service account with appropriate permissions"
echo "3. Download your credentials and save them as credentials.json"
echo "4. Update the .env file with your configuration"
echo "========================================" 