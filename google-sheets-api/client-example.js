#!/usr/bin/env node
const fetch = require('node-fetch');
const readline = require('readline');

const API_BASE_URL = 'http://localhost:3001/api/financial-model';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Default assumptions
const defaultAssumptions = {
  averageCharterValue: 35000,
  commissionRate: 0.175,
  premiumListingFee: 0.05,
  marketGrowthRate: 0.083,
  initialMonthlyBookings: 5,
  monthlyGrowthRate: 0.08,
  premiumListingPercentage: 0.25,
  repeatBookingRate: 0.15,
  customerAcquisitionCost: 1200,
  conversionRate: 0.035,
  marketingBudget: 150000
};

/**
 * Display the menu
 */
function showMenu() {
  console.log('\n========== Azure Yacht Group Sheets API Client ==========');
  console.log('1. Create new financial model');
  console.log('2. Update assumptions');
  console.log('3. Get model summary');
  console.log('4. Generate scenarios');
  console.log('0. Exit');
  console.log('=======================================================\n');

  rl.question('Select an option: ', (answer) => {
    switch (answer) {
      case '1':
        createFinancialModel();
        break;
      case '2':
        updateAssumptions();
        break;
      case '3':
        getModelSummary();
        break;
      case '4':
        generateScenarios();
        break;
      case '0':
        console.log('Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid option. Please try again.');
        showMenu();
    }
  });
}

/**
 * Create a new financial model
 */
async function createFinancialModel() {
  rl.question('Enter spreadsheet title: ', async (title) => {
    try {
      console.log('Creating financial model with default assumptions...');
      
      const response = await fetch(`${API_BASE_URL}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title || 'Azure Yacht Group - Financial Model',
          assumptions: defaultAssumptions
        }),
      });

      const result = await response.json();
      
      if (result.status === 'success') {
        console.log('\nFinancial model created successfully!');
        console.log(`Spreadsheet ID: ${result.data.spreadsheetId}`);
        console.log(`URL: ${result.data.spreadsheetUrl}`);
        // Save the spreadsheet ID for later use
        global.currentSpreadsheetId = result.data.spreadsheetId;
      } else {
        console.error(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
    
    showMenu();
  });
}

/**
 * Update assumptions
 */
async function updateAssumptions() {
  if (!global.currentSpreadsheetId) {
    rl.question('Enter spreadsheet ID: ', (id) => {
      global.currentSpreadsheetId = id;
      promptForAssumptions();
    });
  } else {
    promptForAssumptions();
  }

  async function promptForAssumptions() {
    rl.question('Enter average charter value (default: 35000): ', (acv) => {
      rl.question('Enter commission rate (0-1, default: 0.175): ', (cr) => {
        rl.question('Enter initial monthly bookings (default: 5): ', async (imb) => {
          try {
            const assumptions = {
              averageCharterValue: acv ? parseInt(acv) : 35000,
              commissionRate: cr ? parseFloat(cr) : 0.175,
              initialMonthlyBookings: imb ? parseInt(imb) : 5
            };

            console.log('Updating assumptions...');
            
            const response = await fetch(`${API_BASE_URL}/update-assumptions`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                spreadsheetId: global.currentSpreadsheetId,
                assumptions
              }),
            });

            const result = await response.json();
            
            if (result.status === 'success') {
              console.log('\nAssumptions updated successfully!');
            } else {
              console.error(`Error: ${result.message}`);
            }
          } catch (error) {
            console.error('An error occurred:', error.message);
          }
          
          showMenu();
        });
      });
    });
  }
}

/**
 * Get model summary
 */
async function getModelSummary() {
  if (!global.currentSpreadsheetId) {
    rl.question('Enter spreadsheet ID: ', async (id) => {
      global.currentSpreadsheetId = id;
      await fetchSummary();
    });
  } else {
    await fetchSummary();
  }

  async function fetchSummary() {
    try {
      console.log('Fetching model summary...');
      
      const response = await fetch(`${API_BASE_URL}/${global.currentSpreadsheetId}/summary`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = await response.json();
      
      if (result.status === 'success') {
        console.log('\nModel Summary:');
        console.log(JSON.stringify(result.data, null, 2));
      } else {
        console.error(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
    
    showMenu();
  }
}

/**
 * Generate scenarios
 */
async function generateScenarios() {
  if (!global.currentSpreadsheetId) {
    rl.question('Enter spreadsheet ID: ', async (id) => {
      global.currentSpreadsheetId = id;
      await runScenarios();
    });
  } else {
    await runScenarios();
  }

  async function runScenarios() {
    try {
      console.log('Generating scenarios (Base, Best, Worst)...');
      
      const scenarios = [
        {
          name: 'Base Case',
          averageCharterValue: 35000,
          commissionRate: '17.5%',
          monthlyGrowthRate: '8%',
          customerAcquisitionCost: 1200,
          conversionRate: '3.5%'
        },
        {
          name: 'Best Case',
          averageCharterValue: 45000,
          commissionRate: '20%',
          monthlyGrowthRate: '12%',
          customerAcquisitionCost: 900,
          conversionRate: '5%'
        },
        {
          name: 'Worst Case',
          averageCharterValue: 25000,
          commissionRate: '15%',
          monthlyGrowthRate: '5%',
          customerAcquisitionCost: 1500,
          conversionRate: '2%'
        }
      ];
      
      const response = await fetch(`${API_BASE_URL}/${global.currentSpreadsheetId}/generate-scenarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ scenarios }),
      });

      const result = await response.json();
      
      if (result.status === 'success') {
        console.log('\nScenarios generated successfully!');
      } else {
        console.error(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
    
    showMenu();
  }
}

// Start the client
showMenu(); 