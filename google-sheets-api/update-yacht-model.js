#!/usr/bin/env node
require('dotenv').config();
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const csv = require('csv-parser');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Path to service account credentials
const CREDENTIALS_PATH = './upheld-world-284315-ee32ec912361.json';

// Existing spreadsheet ID
const SPREADSHEET_ID = '1JVYu1MaVCcQKXzmYZ5JkcVC_RkWb096qnkU-uEKOmKc';

// Function to load yacht data from CSV file
async function loadYachtDataFromCSV(csvFilePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    
    // Detect if it's a Tilda format CSV by checking the file name or first few bytes
    const isTildaFormat = csvFilePath.includes('store-') || csvFilePath.includes('tilda');
    
    const parser = isTildaFormat 
      ? csv({ 
          separator: ';',  // Tilda uses semicolons
          quote: '"'      // Quote character
        })
      : csv(); // Default parser for standard CSV
    
    fs.createReadStream(csvFilePath)
      .pipe(parser)
      .on('data', (data) => {
        // Map different CSV formats to our standard yacht object structure
        let yacht;
        
        if (isTildaFormat) {
          // Determine listing type (charter or sale) from category or additional field
          const isForSale = data['Category']?.toLowerCase().includes('sale') || 
                           data['Characteristics:ListingType']?.toLowerCase().includes('sale');
          
          // Extract hourly rate if available or calculate from price
          const hourlyRate = extractNumber(data['Characteristics:HourlyRate']) || 
                           (extractNumber(data['Price']) / 8); // Estimate hourly rate as 1/8 of daily rate
          
          // Get additional characteristic fields that might be available
          const engineDetails = data['Characteristics:Engines'] || data['Characteristics:Engine'] || '';
          const maxSpeed = extractNumber(data['Characteristics:MaxSpeed']) || extractNumber(data['Characteristics:TopSpeed']) || 0;
          const cruisingSpeed = extractNumber(data['Characteristics:CruisingSpeed']) || 0;
          const heads = extractNumber(data['Characteristics:Heads']) || extractNumber(data['Characteristics:Bathrooms']) || 0;
          const draft = extractNumber(data['Characteristics:Draft']) || 0;
          const fuelCapacity = extractNumber(data['Characteristics:FuelCapacity']) || 0;
          const waterCapacity = extractNumber(data['Characteristics:WaterCapacity']) || 0;
          const range = extractNumber(data['Characteristics:Range']) || 0;
          const location = data['Characteristics:Location'] || data['Characteristics:Harbor'] || '';
          const crew = extractNumber(data['Characteristics:Crew']) || 0;
          const extras = data['Characteristics:Extras'] || data['Characteristics:Amenities'] || '';
          
          // Tilda format mapping with new fields
          yacht = {
            id: data['Tilda UID'] || data['SKU'] || '',
            name: data['Title'] || '',
            model: data['Brand'] || '',
            year: extractNumber(data['Characteristics:Year']),
            length: extractNumber(data['Characteristics:Length']),
            beam: extractNumber(data['Width']) || 0, // Use Width field for beam
            draft: draft,
            weight: extractNumber(data['Weight']) || 0,
            height: extractNumber(data['Height']) || 0,
            builder: data['Brand'] || '',
            category: data['Category'] || '',
            description: data['Description'] || data['Text'] || '',
            guests: extractNumber(data['Characteristics:Guests']),
            cabins: extractNumber(data['Characteristics:Cabins']),
            heads: heads,
            crew: crew,
            engines: engineDetails,
            maxSpeed: maxSpeed,
            cruisingSpeed: cruisingSpeed,
            fuelCapacity: fuelCapacity,
            waterCapacity: waterCapacity,
            range: range,
            location: location,
            extras: extras,
            available: true, // Assume available by default
            // New fields
            listingType: isForSale ? 'Sale' : 'Charter',
            charterManager: data['Characteristics:Manager'] || data['Characteristics:Contact'] || '',
            managerPhone: data['Characteristics:ManagerPhone'] || data['Characteristics:ContactPhone'] || '',
            managerEmail: data['Characteristics:ManagerEmail'] || data['Characteristics:ContactEmail'] || '',
            hourlyRate: hourlyRate,
            pricing: extractPricing(data)
          };
        } else {
          // Standard CSV format with expanded fields
          yacht = {
            id: data['Yacht ID'] || data.id || '',
            name: data['Yacht Name'] || data.name || '',
            model: data.Model || data.model || '',
            year: parseInt(data.Year) || 0,
            length: parseFloat(data.Length) || 0,
            beam: parseFloat(data.Beam) || 0,
            draft: parseFloat(data.Draft) || 0,
            weight: parseFloat(data.Weight) || 0,
            height: parseFloat(data.Height) || 0,
            builder: data.Builder || '',
            category: data.Category || '',
            description: data['Base Description'] || data.Description || '',
            guests: parseInt(data['Total Guests']) || parseInt(data.Guests) || 0,
            cabins: parseInt(data.Cabins) || 0,
            heads: parseInt(data.Heads) || 0,
            crew: parseInt(data.Crew) || 0,
            engines: data.Engines || '',
            maxSpeed: parseFloat(data['Max Speed']) || 0,
            cruisingSpeed: parseFloat(data['Cruising Speed']) || 0,
            fuelCapacity: parseFloat(data['Fuel Capacity']) || 0,
            waterCapacity: parseFloat(data['Water Capacity']) || 0,
            range: parseFloat(data.Range) || 0,
            location: data.Location || '',
            extras: data.Extras || data.Amenities || '',
            available: data.Available === 'Yes' || data.available === true,
            // New fields
            listingType: data['Listing Type'] || 'Charter',
            charterManager: data['Charter Manager'] || '',
            managerPhone: data['Manager Phone'] || '',
            managerEmail: data['Manager Email'] || '',
            hourlyRate: parseFloat(data['Hourly Rate']) || 0,
            pricing: {
              halfDayStandard: parseFloat(data['Half-Day Standard']) || 0,
              halfDayPremium: parseFloat(data['Half-Day Premium']) || 0,
              fullDayStandard: parseFloat(data['Full-Day Standard']) || 0,
              fullDayPremium: parseFloat(data['Full-Day Premium']) || 0,
              weekendStandard: parseFloat(data['Weekend Standard']) || 0,
              weekendPremium: parseFloat(data['Weekend Premium']) || 0,
              weeklyStandard: parseFloat(data['Weekly Standard']) || 0,
              weeklyPremium: parseFloat(data['Weekly Premium']) || 0
            }
          };
        }
        
        // Only add valid yachts with an ID
        if (yacht.id) {
          results.push(yacht);
        }
      })
      .on('end', () => {
        if (results.length === 0) {
          reject(new Error('No valid yacht data found in CSV'));
        } else {
          // Process parent-child relationships for Tilda format
          if (isTildaFormat) {
            processParentChildRelationships(results);
          }
          resolve(results);
        }
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}

// Helper function to extract numbers from string values that may contain units or special formatting
function extractNumber(value) {
  if (!value) return 0;
  
  // Convert to string if not already
  const str = String(value);
  
  // Extract numbers, handle both decimal points and commas
  const matches = str.match(/(\d+[.,]?\d*)/);
  if (matches && matches[0]) {
    // Replace comma with period for proper parsing
    return parseFloat(matches[0].replace(',', '.')) || 0;
  }
  
  return 0;
}

// Extract pricing information from Tilda format
function extractPricing(data) {
  // Base price is usually in the "Price" field
  const basePrice = extractNumber(data.Price);
  
  // For Tilda, we often have parent-child products where children have pricing variants
  // We'll extract what we can from this record and update later if it's a parent/child
  return {
    halfDayStandard: basePrice * 0.2 || 0, // Estimate if not available
    halfDayPremium: basePrice * 0.25 || 0,
    fullDayStandard: basePrice * 0.35 || 0,
    fullDayPremium: basePrice * 0.45 || 0,
    weekendStandard: basePrice * 0.7 || 0,
    weekendPremium: basePrice * 0.9 || 0,
    weeklyStandard: basePrice || 0,
    weeklyPremium: basePrice * 1.2 || 0
  };
}

// Process parent-child relationships in Tilda exports
function processParentChildRelationships(yachts) {
  // In Tilda exports, child products reference parents via "Parent UID"
  const parentMap = {};
  
  // First, create a map of all parent products
  yachts.forEach(yacht => {
    if (!yacht['Parent UID']) {
      parentMap[yacht.id] = yacht;
    }
  });
  
  // Then process child products to update the parent with pricing info
  yachts.forEach(yacht => {
    if (yacht['Parent UID'] && parentMap[yacht['Parent UID']]) {
      const parent = parentMap[yacht['Parent UID']];
      
      // Update parent pricing based on modifications in child product
      // This is a simplified approach - you may need to adjust based on your actual data
      if (yacht.Modifications) {
        const mods = yacht.Modifications.toLowerCase();
        
        if (mods.includes('half-day') && mods.includes('standard')) {
          parent.pricing.halfDayStandard = extractNumber(yacht.Price);
        } else if (mods.includes('half-day') && mods.includes('premium')) {
          parent.pricing.halfDayPremium = extractNumber(yacht.Price);
        } else if (mods.includes('full-day') && mods.includes('standard')) {
          parent.pricing.fullDayStandard = extractNumber(yacht.Price);
        } else if (mods.includes('full-day') && mods.includes('premium')) {
          parent.pricing.fullDayPremium = extractNumber(yacht.Price);
        } else if (mods.includes('weekend') && mods.includes('standard')) {
          parent.pricing.weekendStandard = extractNumber(yacht.Price);
        } else if (mods.includes('weekend') && mods.includes('premium')) {
          parent.pricing.weekendPremium = extractNumber(yacht.Price);
        } else if (mods.includes('weekly') && mods.includes('standard')) {
          parent.pricing.weeklyStandard = extractNumber(yacht.Price);
        } else if (mods.includes('weekly') && mods.includes('premium')) {
          parent.pricing.weeklyPremium = extractNumber(yacht.Price);
        }
      }
    }
  });
  
  // Filter out child products, keeping only parents
  // This modifies the array in place
  for (let i = yachts.length - 1; i >= 0; i--) {
    if (yachts[i]['Parent UID']) {
      yachts.splice(i, 1);
    }
  }
}

// Default hardcoded yacht data as fallback
const DEFAULT_YACHT_DATA = [
  {
    id: 'EMO36',
    name: 'eMotion 36 Hybrid',
    model: 'eMotion 36',
    year: 2021,
    length: 36,
    beam: 11,
    draft: 3.2,
    weight: 12000,
    height: 12,
    builder: 'Azure',
    category: 'Featured Yachts',
    description: '36ft Hybrid Yacht with eco-friendly electric propulsion',
    guests: 6,
    cabins: 2,
    heads: 1,
    crew: 1,
    engines: 'Hybrid Electric/Diesel 2x120kW',
    maxSpeed: 22,
    cruisingSpeed: 18,
    fuelCapacity: 400,
    waterCapacity: 150,
    range: 300,
    location: 'Miami, FL',
    extras: 'Solar panels, WiFi, Air conditioning, Bluetooth sound system, Swim platform',
    available: true,
    listingType: 'Charter',
    charterManager: 'Maria Johnson',
    managerPhone: '+1 305-555-7890',
    managerEmail: 'maria@azureyachts.com',
    hourlyRate: 225,
    pricing: {
      halfDayStandard: 1800,
      halfDayPremium: 2200,
      fullDayStandard: 2300,
      fullDayPremium: 2800,
      weekendStandard: 4500,
      weekendPremium: 5500,
      weeklyStandard: 18000,
      weeklyPremium: 22000
    }
  },
  {
    id: 'AZ64',
    name: 'Azimut 64 \'Deon\'',
    model: 'Azimut 64',
    year: 2018,
    length: 64,
    beam: 17,
    draft: 5.1,
    weight: 37000,
    height: 19.5,
    builder: 'Azimut',
    category: 'Motor Yachts',
    description: 'Luxury motor yacht with excellent amenities and elegant Italian design',
    guests: 10,
    cabins: 3,
    heads: 2,
    crew: 2,
    engines: 'Twin MAN 1000HP',
    maxSpeed: 28,
    cruisingSpeed: 22,
    fuelCapacity: 3600,
    waterCapacity: 840,
    range: 420,
    location: 'Fort Lauderdale, FL',
    extras: 'Jacuzzi, Tender, Jet ski, Flybridge, Hydraulic swim platform, Wine cooler',
    available: true,
    listingType: 'Charter',
    charterManager: 'James Wilson',
    managerPhone: '+1 305-555-1234',
    managerEmail: 'james@azureyachts.com',
    hourlyRate: 350,
    pricing: {
      halfDayStandard: 2800,
      halfDayPremium: 3500,
      fullDayStandard: 4800,
      fullDayPremium: 5500,
      weekendStandard: 9000,
      weekendPremium: 10500,
      weeklyStandard: 32000,
      weeklyPremium: 36000
    }
  },
  {
    id: 'PR420',
    name: 'Prestige 420 Flybridge',
    model: 'Prestige 420',
    year: 2019,
    length: 42,
    beam: 13.5,
    draft: 3.5,
    weight: 18000,
    height: 16.5,
    builder: 'Prestige',
    category: 'Motor Yachts',
    description: 'Spacious flybridge yacht with modern design and excellent attention to detail',
    guests: 8,
    cabins: 2,
    heads: 2,
    crew: 1,
    engines: 'Twin Cummins 380HP',
    maxSpeed: 26,
    cruisingSpeed: 20,
    fuelCapacity: 1050,
    waterCapacity: 400,
    range: 350,
    location: 'Miami Beach, FL',
    extras: 'Flybridge lounge, Teak cockpit, Hydraulic swim platform, Grill, Ice maker',
    available: true,
    listingType: 'Sale',
    charterManager: '',
    managerPhone: '',
    managerEmail: 'sales@azureyachts.com',
    hourlyRate: 0,
    pricing: {
      halfDayStandard: 1600,
      halfDayPremium: 2000,
      fullDayStandard: 2800,
      fullDayPremium: 3400,
      weekendStandard: 5500,
      weekendPremium: 6500,
      weeklyStandard: 15000,
      weeklyPremium: 18000
    }
  },
  {
    id: 'GL425',
    name: 'Galeon 425 HTS',
    model: 'Galeon 425 HTS',
    year: 2020,
    length: 42,
    beam: 13,
    builder: 'Galeon',
    category: 'Motor Yachts',
    description: 'Contemporary hardtop sport cruiser with innovative features and sleek lines',
    guests: 8,
    cabins: 2,
    heads: 2,
    engines: 'Twin Volvo Penta D6 400HP',
    maxSpeed: 32,
    cruisingSpeed: 24,
    available: false,
    pricing: {
      halfDayStandard: 1700,
      halfDayPremium: 2200,
      fullDayStandard: 3000,
      fullDayPremium: 3600,
      weekendStandard: 6000,
      weekendPremium: 7000,
      weeklyStandard: 16000,
      weeklyPremium: 19000
    }
  },
  {
    id: 'GT46',
    name: 'Beneteau Grand Turismo 46',
    model: 'Grand Turismo 46',
    year: 2019,
    length: 46,
    beam: 13.5,
    builder: 'Beneteau',
    category: 'Motor Yachts',
    description: 'Elegant cruiser with exceptional comfort and excellent handling characteristics',
    guests: 10,
    cabins: 2,
    heads: 2,
    engines: 'Twin Volvo Penta IPS 600',
    maxSpeed: 30,
    cruisingSpeed: 23,
    available: true,
    pricing: {
      halfDayStandard: 1900,
      halfDayPremium: 2400,
      fullDayStandard: 3400,
      fullDayPremium: 4000,
      weekendStandard: 6500,
      weekendPremium: 7500,
      weeklyStandard: 19000,
      weeklyPremium: 22000
    }
  },
  {
    id: 'SR60',
    name: 'Searay Sundancer 60',
    model: 'Sundancer 60',
    year: 2017,
    length: 60,
    beam: 16,
    builder: 'Searay',
    category: 'Motor Yachts',
    description: 'Luxurious express cruiser with spacious layout and elegant American design',
    guests: 12,
    cabins: 3,
    heads: 2,
    engines: 'Twin Cummins QSM11 715HP',
    maxSpeed: 30,
    cruisingSpeed: 24,
    available: true,
    pricing: {
      halfDayStandard: 2500,
      halfDayPremium: 3200,
      fullDayStandard: 4500,
      fullDayPremium: 5200,
      weekendStandard: 8500,
      weekendPremium: 10000,
      weeklyStandard: 28000,
      weeklyPremium: 32000
    }
  }
];

// Generate booking simulation data
function generateBookingSimulation(yachts, months = 12) {
  const bookings = [];
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  // Generate more bookings for peak months (summer)
  const peakMonths = [5, 6, 7, 8]; // June, July, August, September
  
  // Track yacht usage by week and package type
  const yachtUsageTracking = {};
  
  // Initialize tracking object for each yacht
  yachts.forEach(yacht => {
    if (yacht.available && yacht.listingType === 'Charter') {
      yachtUsageTracking[yacht.id] = {
        name: yacht.name,
        model: yacht.model,
        weeklyUsage: {} // Will store usage data by year/month/week/package
      };
    }
  });
  
  yachts.forEach(yacht => {
    if (yacht.available && yacht.listingType === 'Charter') {
      // Adjust booking probability based on yacht popularity (size/price)
      const popularityFactor = yacht.length / 50; // Larger boats more popular
      
      for (let month = 0; month < months; month++) {
        const thisMonth = (currentDate.getMonth() + month) % 12;
        const thisYear = currentYear + Math.floor((currentDate.getMonth() + month) / 12);
        
        // More bookings during peak season
        const isPeakMonth = peakMonths.includes(thisMonth);
        const bookingChance = isPeakMonth ? 0.7 * popularityFactor : 0.3 * popularityFactor;
        
        // Weekly booking simulation
        for (let week = 1; week <= 4; week++) {
          // Initialize usage tracking for this week
          const weekKey = `${thisYear}-${(thisMonth + 1).toString().padStart(2, '0')}-W${week}`;
          
          if (!yachtUsageTracking[yacht.id].weeklyUsage[weekKey]) {
            yachtUsageTracking[yacht.id].weeklyUsage[weekKey] = {
              year: thisYear,
              month: thisMonth + 1,
              week: week,
              halfDayStandard: 0,
              halfDayPremium: 0,
              fullDayStandard: 0,
              fullDayPremium: 0,
              weekendStandard: 0,
              weekendPremium: 0,
              weeklyStandard: 0,
              weeklyPremium: 0
            };
          }
          
          if (Math.random() < bookingChance) {
            // Determine booking type (weekly, weekend, day, half-day)
            let bookingType;
            const typeRandom = Math.random();
            
            if (isPeakMonth && typeRandom < 0.5) {
              bookingType = 'weekly';
            } else if (typeRandom < 0.6) {
              bookingType = 'weekend';
            } else if (typeRandom < 0.85) {
              bookingType = 'day';
            } else {
              bookingType = 'halfDay';
            }
            
            // Determine if premium
            const isPremium = Math.random() < 0.35;
            
            // Calculate revenue based on booking type and premium status
            let revenue = 0;
            let packageType = '';
            
            switch(bookingType) {
              case 'weekly':
                packageType = isPremium ? 'weeklyPremium' : 'weeklyStandard';
                revenue = isPremium ? yacht.pricing.weeklyPremium : yacht.pricing.weeklyStandard;
                break;
              case 'weekend':
                packageType = isPremium ? 'weekendPremium' : 'weekendStandard';
                revenue = isPremium ? yacht.pricing.weekendPremium : yacht.pricing.weekendStandard;
                break;
              case 'day':
                packageType = isPremium ? 'fullDayPremium' : 'fullDayStandard';
                revenue = isPremium ? yacht.pricing.fullDayPremium : yacht.pricing.fullDayStandard;
                break;
              case 'halfDay':
                packageType = isPremium ? 'halfDayPremium' : 'halfDayStandard';
                revenue = isPremium ? yacht.pricing.halfDayPremium : yacht.pricing.halfDayStandard;
                break;
            }
            
            // Increment usage tracking
            yachtUsageTracking[yacht.id].weeklyUsage[weekKey][packageType]++;
            
            bookings.push({
              yachtId: yacht.id,
              yachtName: yacht.name,
              yachtModel: yacht.model,
              date: `${thisYear}-${(thisMonth + 1).toString().padStart(2, '0')}-${(week * 7).toString().padStart(2, '0')}`,
              month: thisMonth + 1,
              year: thisYear,
              week: week,
              bookingType: bookingType,
              isPremium: isPremium,
              packageType: packageType,
              revenue: revenue
            });
          }
        }
      }
    }
  });
  
  return {
    bookings: bookings,
    yachtUsageTracking: yachtUsageTracking
  };
}

/**
 * Initialize Google Sheets & Drive API
 */
async function initGoogleApis() {
  try {
    console.log(`Using credentials from: ${CREDENTIALS_PATH}`);
    
    const auth = new google.auth.GoogleAuth({
      keyFile: CREDENTIALS_PATH,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive'
      ]
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const drive = google.drive({ version: 'v3', auth });
    
    console.log('Google API clients initialized successfully');
    return { sheets, drive };
  } catch (error) {
    console.error('Failed to initialize Google API clients:', error);
    process.exit(1);
  }
}

/**
 * Create a backup of the spreadsheet
 */
async function createBackup(drive, spreadsheetId) {
  try {
    // Get the original file to copy its properties
    const file = await drive.files.get({
      fileId: spreadsheetId,
      fields: 'name,parents'
    });
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupName = `${file.data.name} - Backup ${timestamp}`;
    
    // Create a copy of the file
    const backupResponse = await drive.files.copy({
      fileId: spreadsheetId,
      requestBody: {
        name: backupName,
        parents: file.data.parents
      }
    });
    
    console.log(`Backup created with ID: ${backupResponse.data.id}`);
    return backupResponse.data.id;
  } catch (error) {
    console.error('Error creating backup:', error);
    throw error;
  }
}

/**
 * Create a Yacht Fleet sheet
 */
async function createYachtFleetSheet(sheets, spreadsheetId, yachtData) {
  // Check if the sheet already exists
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId
  });
  
  let sheetExists = false;
  let sheetId = null;
  
  for (const sheet of spreadsheet.data.sheets) {
    if (sheet.properties.title === 'Yacht Fleet') {
      sheetExists = true;
      sheetId = sheet.properties.sheetId;
      break;
    }
  }
  
  if (!sheetExists) {
    // Create a new sheet for yacht data
    const response = await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: 'Yacht Fleet'
              }
            }
          }
        ]
      }
    });
    
    // Get the new sheet ID from the response
    sheetId = response.data.replies[0].addSheet.properties.sheetId;
    console.log('Created Yacht Fleet sheet');
  } else {
    console.log('Yacht Fleet sheet already exists');
  }
  
  // Add yacht data to the sheet with expanded headers
  const headers = [
    ['Yacht ID', 'Name', 'Model', 'Year', 'Length (ft)', 'Beam (ft)', 'Draft (ft)', 'Weight (kg)', 'Height (ft)',
     'Builder', 'Category', 'Description', 'Guests', 'Cabins', 'Heads', 'Crew', 
     'Engines', 'Max Speed (kn)', 'Cruising Speed (kn)', 'Fuel Capacity (L)', 'Water Capacity (L)', 'Range (nm)',
     'Location', 'Extras/Amenities', 'Available', 'Listing Type', 'Charter Manager', 'Manager Phone', 'Manager Email', 'Hourly Rate',
     'Half-Day Std', 'Half-Day Prem', 'Full-Day Std', 'Full-Day Prem', 
     'Weekend Std', 'Weekend Prem', 'Weekly Std', 'Weekly Prem']
  ];
  
  const yachtRows = yachtData.map(yacht => [
    yacht.id,
    yacht.name,
    yacht.model,
    yacht.year,
    yacht.length,
    yacht.beam,
    yacht.draft,
    yacht.weight,
    yacht.height,
    yacht.builder,
    yacht.category,
    yacht.description,
    yacht.guests,
    yacht.cabins,
    yacht.heads,
    yacht.crew,
    yacht.engines,
    yacht.maxSpeed,
    yacht.cruisingSpeed,
    yacht.fuelCapacity,
    yacht.waterCapacity,
    yacht.range,
    yacht.location,
    yacht.extras,
    yacht.available ? 'Yes' : 'No',
    yacht.listingType || 'Charter',
    yacht.charterManager || '',
    yacht.managerPhone || '',
    yacht.managerEmail || '',
    yacht.hourlyRate || 0,
    yacht.pricing.halfDayStandard,
    yacht.pricing.halfDayPremium,
    yacht.pricing.fullDayStandard,
    yacht.pricing.fullDayPremium,
    yacht.pricing.weekendStandard,
    yacht.pricing.weekendPremium,
    yacht.pricing.weeklyStandard,
    yacht.pricing.weeklyPremium
  ]);
  
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Yacht Fleet!A1:AL1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: headers
    }
  });
  
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `Yacht Fleet!A2:AL${yachtData.length + 1}`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: yachtRows
    }
  });
  
  console.log('Updated yacht data');
  
  // Format the sheet
  const formatRequests = [
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 0,
          endRowIndex: 1
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true,
              fontSize: 11
            },
            backgroundColor: {
              red: 0.9,
              green: 0.9,
              blue: 0.9
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    },
    // Auto-resize all columns to fit content
    {
      autoResizeDimensions: {
        dimensions: {
          sheetId: sheetId,
          dimension: "COLUMNS",
          startIndex: 0,
          endIndex: 38 // Adjust based on number of columns
        }
      }
    },
    // Format for charter vs sale listings with different colors
    {
      addConditionalFormatRule: {
        rule: {
          ranges: [{
            sheetId: sheetId,
            startRowIndex: 1,
            endRowIndex: yachtData.length + 1
          }],
          booleanRule: {
            condition: {
              type: "TEXT_EQ",
              values: [{
                userEnteredValue: "Charter"
              }]
            },
            format: {
              backgroundColor: {
                red: 0.8,
                green: 0.95,
                blue: 0.8
              }
            }
          }
        },
        index: 0
      }
    },
    {
      addConditionalFormatRule: {
        rule: {
          ranges: [{
            sheetId: sheetId,
            startRowIndex: 1,
            endRowIndex: yachtData.length + 1
          }],
          booleanRule: {
            condition: {
              type: "TEXT_EQ",
              values: [{
                userEnteredValue: "Sale"
              }]
            },
            format: {
              backgroundColor: {
                red: 0.95,
                green: 0.9,
                blue: 0.8
              }
            }
          }
        },
        index: 1
      }
    },
    // Set currency format for pricing columns
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 1,
          endRowIndex: yachtData.length + 1,
          startColumnIndex: 29, // Hourly Rate column
          endColumnIndex: 38  // End of pricing columns
        },
        cell: {
          userEnteredFormat: {
            numberFormat: {
              type: "CURRENCY",
              pattern: "$#,##0"
            }
          }
        },
        fields: "userEnteredFormat.numberFormat"
      }
    }
  ];
  
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: formatRequests
    }
  });
  
  console.log('Formatted Yacht Fleet sheet');
}

/**
 * Create a Simulated Bookings sheet
 */
async function createBookingsSheet(sheets, spreadsheetId, yachtData) {
  // Check if the sheet already exists
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId
  });
  
  let sheetExists = false;
  let sheetId = null;
  
  for (const sheet of spreadsheet.data.sheets) {
    if (sheet.properties.title === 'Simulated Bookings') {
      sheetExists = true;
      sheetId = sheet.properties.sheetId;
      break;
    }
  }
  
  if (!sheetExists) {
    // Create a new sheet for booking data
    const response = await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: 'Simulated Bookings'
              }
            }
          }
        ]
      }
    });
    
    // Get the new sheet ID from the response
    sheetId = response.data.replies[0].addSheet.properties.sheetId;
    console.log('Created Simulated Bookings sheet');
  } else {
    console.log('Simulated Bookings sheet already exists');
  }
  
  // Generate simulated bookings for the next 12 months
  const bookingData = generateBookingSimulation(yachtData, 12);
  const bookings = bookingData.bookings;
  
  // Add booking data to the sheet
  const headers = [
    ['Booking ID', 'Yacht ID', 'Yacht Name', 'Yacht Model', 'Booking Date', 'Month', 'Year', 'Week',
     'Booking Type', 'Premium Package', 'Package Type', 'Revenue']
  ];
  
  const bookingRows = bookings.map((booking, index) => [
    `B${index + 1000}`,
    booking.yachtId,
    booking.yachtName,
    booking.yachtModel,
    booking.date,
    booking.month,
    booking.year,
    booking.week,
    booking.bookingType,
    booking.isPremium ? 'Yes' : 'No',
    booking.packageType,
    booking.revenue
  ]);
  
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Simulated Bookings!A1:L1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: headers
    }
  });
  
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `Simulated Bookings!A2:L${bookings.length + 1}`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: bookingRows
    }
  });
  
  console.log('Added simulated booking data');
  
  // Format the sheet
  const formatRequests = [
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 0,
          endRowIndex: 1
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true,
              fontSize: 11
            },
            backgroundColor: {
              red: 0.9,
              green: 0.9,
              blue: 0.9
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    }
  ];
  
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: formatRequests
    }
  });
  
  console.log('Formatted Simulated Bookings sheet');
  
  // Create the yacht usage tracking sheet
  await createYachtUsageSheet(sheets, spreadsheetId, bookingData.yachtUsageTracking);
}

/**
 * Create a Yacht Usage Tracking sheet
 */
async function createYachtUsageSheet(sheets, spreadsheetId, yachtUsageTracking) {
  // Check if the sheet already exists
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId
  });
  
  let sheetExists = false;
  let sheetId = null;
  
  for (const sheet of spreadsheet.data.sheets) {
    if (sheet.properties.title === 'Yacht Usage Tracking') {
      sheetExists = true;
      sheetId = sheet.properties.sheetId;
      break;
    }
  }
  
  if (!sheetExists) {
    // Create a new sheet for yacht usage data
    const response = await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: 'Yacht Usage Tracking'
              }
            }
          }
        ]
      }
    });
    
    // Get the new sheet ID from the response
    sheetId = response.data.replies[0].addSheet.properties.sheetId;
    console.log('Created Yacht Usage Tracking sheet');
  } else {
    console.log('Yacht Usage Tracking sheet already exists');
  }
  
  // Create headers and data for the sheet
  const headers = [
    ['Yacht ID', 'Yacht Name', 'Year', 'Month', 'Week', 
     'Half-Day Standard', 'Half-Day Premium', 
     'Full-Day Standard', 'Full-Day Premium',
     'Weekend Standard', 'Weekend Premium',
     'Weekly Standard', 'Weekly Premium',
     'Total Usage']
  ];
  
  // Convert the nested tracking object to rows
  const usageRows = [];
  Object.keys(yachtUsageTracking).forEach(yachtId => {
    const yacht = yachtUsageTracking[yachtId];
    
    Object.keys(yacht.weeklyUsage).forEach(weekKey => {
      const usage = yacht.weeklyUsage[weekKey];
      const totalUsage = 
        usage.halfDayStandard + usage.halfDayPremium + 
        usage.fullDayStandard + usage.fullDayPremium +
        usage.weekendStandard + usage.weekendPremium +
        usage.weeklyStandard + usage.weeklyPremium;
      
      usageRows.push([
        yachtId,
        yacht.name,
        usage.year,
        usage.month,
        usage.week,
        usage.halfDayStandard,
        usage.halfDayPremium,
        usage.fullDayStandard,
        usage.fullDayPremium,
        usage.weekendStandard,
        usage.weekendPremium,
        usage.weeklyStandard,
        usage.weeklyPremium,
        totalUsage
      ]);
    });
  });
  
  // Sort rows by yacht, year, month, week
  usageRows.sort((a, b) => {
    if (a[0] !== b[0]) return a[0].localeCompare(b[0]); // Sort by yacht ID
    if (a[2] !== b[2]) return a[2] - b[2]; // Sort by year
    if (a[3] !== b[3]) return a[3] - b[3]; // Sort by month
    return a[4] - b[4]; // Sort by week
  });
  
  // Update the sheet headers
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Yacht Usage Tracking!A1:N1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: headers
    }
  });
  
  // Update the usage data
  if (usageRows.length > 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Yacht Usage Tracking!A2:N${usageRows.length + 1}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: usageRows
      }
    });
  }
  
  // Format the sheet
  const formatRequests = [
    // Format the header row
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 0,
          endRowIndex: 1
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true,
              fontSize: 11
            },
            backgroundColor: {
              red: 0.9,
              green: 0.9,
              blue: 0.9
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    },
    // Add banding for easier reading
    {
      addBanding: {
        bandedRange: {
          range: {
            sheetId: sheetId,
            startRowIndex: 1,
            startColumnIndex: 0,
            endColumnIndex: 14
          },
          rowProperties: {
            headerColor: {
              red: 0.9,
              green: 0.9,
              blue: 0.9
            },
            firstBandColor: {
              red: 1.0,
              green: 1.0,
              blue: 1.0
            },
            secondBandColor: {
              red: 0.95,
              green: 0.95,
              blue: 0.95
            }
          }
        }
      }
    },
    // Auto-resize columns
    {
      autoResizeDimensions: {
        dimensions: {
          sheetId: sheetId,
          dimension: "COLUMNS",
          startIndex: 0,
          endIndex: 14
        }
      }
    }
  ];
  
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: formatRequests
    }
  });
  
  console.log('Updated Yacht Usage Tracking sheet');
}

/**
 * Create a Revenue Analysis sheet - OPTIMIZED
 */
async function createRevenueAnalysisSheet(sheets, spreadsheetId, yachtData) {
  // Check if the sheet already exists
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId
  });
  
  let sheetExists = false;
  let sheetId = null;
  
  for (const sheet of spreadsheet.data.sheets) {
    if (sheet.properties.title === 'Revenue Analysis') {
      sheetExists = true;
      sheetId = sheet.properties.sheetId;
      break;
    }
  }
  
  if (!sheetExists) {
    // Create a new sheet for revenue analysis
    const response = await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: 'Revenue Analysis'
              }
            }
          }
        ]
      }
    });
    
    // Get the new sheet ID from the response
    sheetId = response.data.replies[0].addSheet.properties.sheetId;
    console.log('Created Revenue Analysis sheet');
    
    // Add a small delay after creating sheet
    await sleep(1000);
  } else {
    console.log('Revenue Analysis sheet already exists');
  }
  
  // Set up monthly revenue analysis - batch the basic structure updates
  const valueRanges = [
    {
      range: 'Revenue Analysis!A1:N1',
      values: [['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Total']]
    },
    {
      range: `Revenue Analysis!A2:A${yachtData.length + 3}`,
      values: [
        ['Revenue by Yacht'],
        ...yachtData.map(yacht => [yacht.name]),
        ['Total by Month']
      ]
    },
    {
      range: `Revenue Analysis!A${yachtData.length + 4}:A${yachtData.length + 14}`,
      values: [
        [''],
        ['Revenue by Booking Type'],
        ['Half-Day Standard'],
        ['Half-Day Premium'],
        ['Full-Day Standard'],
        ['Full-Day Premium'],
        ['Weekend Standard'],
        ['Weekend Premium'],
        ['Weekly Standard'],
        ['Weekly Premium'],
        ['Total by Month']
      ]
    }
  ];
  
  // Batch update the basic structure
  await batchUpdateValues(sheets, spreadsheetId, valueRanges);
  
  // Prepare batches for formulas
  const formulaRanges = [];
  
  // Add formulas for yacht revenue by month
  for (let i = 0; i < yachtData.length; i++) {
    const yacht = yachtData[i];
    const rowNum = i + 3; // Row number in the sheet (after the headers)
    
    // Monthly formulas for each yacht
    const monthlyFormulas = [];
    for (let month = 1; month <= 12; month++) {
      monthlyFormulas.push(`=SUMIFS('Simulated Bookings'!J:J,'Simulated Bookings'!B:B,"${yacht.id}",'Simulated Bookings'!F:F,${month})`);
    }
    
    formulaRanges.push({
      range: `Revenue Analysis!B${rowNum}:M${rowNum}`,
      values: [monthlyFormulas]
    });
    
    // Yearly total formula
    formulaRanges.push({
      range: `Revenue Analysis!N${rowNum}`,
      values: [[`=SUM(B${rowNum}:M${rowNum})`]]
    });
  }
  
  // Add monthly totals row
  const totalRow = yachtData.length + 3;
  const monthlyTotalFormulas = [];
  for (let month = 1; month <= 12; month++) {
    const colLetter = String.fromCharCode(65 + month); // B for Jan, C for Feb, etc.
    const startRow = 3;
    const endRow = totalRow - 1;
    monthlyTotalFormulas.push(`=SUM(${colLetter}${startRow}:${colLetter}${endRow})`);
  }
  
  formulaRanges.push({
    range: `Revenue Analysis!B${totalRow}:M${totalRow}`,
    values: [monthlyTotalFormulas]
  });
  
  // Add yearly total
  formulaRanges.push({
    range: `Revenue Analysis!N${totalRow}`,
    values: [[`=SUM(B${totalRow}:M${totalRow})`]]
  });
  
  // Add formulas for booking type revenue
  const bookingTypes = [
    { name: 'halfDay', premium: false, row: yachtData.length + 6 }, // Half-Day Standard
    { name: 'halfDay', premium: true, row: yachtData.length + 7 },  // Half-Day Premium
    { name: 'day', premium: false, row: yachtData.length + 8 },     // Full-Day Standard
    { name: 'day', premium: true, row: yachtData.length + 9 },      // Full-Day Premium
    { name: 'weekend', premium: false, row: yachtData.length + 10 }, // Weekend Standard
    { name: 'weekend', premium: true, row: yachtData.length + 11 },  // Weekend Premium
    { name: 'weekly', premium: false, row: yachtData.length + 12 },  // Weekly Standard
    { name: 'weekly', premium: true, row: yachtData.length + 13 }    // Weekly Premium
  ];
  
  for (const bookingType of bookingTypes) {
    const monthlyFormulas = [];
    for (let month = 1; month <= 12; month++) {
      monthlyFormulas.push(`=SUMIFS('Simulated Bookings'!J:J,'Simulated Bookings'!G:G,"${bookingType.name}",'Simulated Bookings'!H:H,"${bookingType.premium ? 'Yes' : 'No'}",'Simulated Bookings'!F:F,${month})`);
    }
    
    formulaRanges.push({
      range: `Revenue Analysis!B${bookingType.row}:M${bookingType.row}`,
      values: [monthlyFormulas]
    });
    
    // Add yearly total
    formulaRanges.push({
      range: `Revenue Analysis!N${bookingType.row}`,
      values: [[`=SUM(B${bookingType.row}:M${bookingType.row})`]]
    });
  }
  
  // Add booking type monthly totals
  const bookingTypeTotalRow = yachtData.length + 14;
  const bookingTypeMonthlyTotals = [];
  for (let month = 1; month <= 12; month++) {
    const colLetter = String.fromCharCode(65 + month);
    const startRow = yachtData.length + 6;
    const endRow = bookingTypeTotalRow - 1;
    bookingTypeMonthlyTotals.push(`=SUM(${colLetter}${startRow}:${colLetter}${endRow})`);
  }
  
  formulaRanges.push({
    range: `Revenue Analysis!B${bookingTypeTotalRow}:M${bookingTypeTotalRow}`,
    values: [bookingTypeMonthlyTotals]
  });
  
  // Add booking type yearly total
  formulaRanges.push({
    range: `Revenue Analysis!N${bookingTypeTotalRow}`,
    values: [[`=SUM(B${bookingTypeTotalRow}:M${bookingTypeTotalRow})`]]
  });
  
  // Batch update all formulas with longer throttling time
  console.log(`Updating ${formulaRanges.length} formula ranges...`);
  await batchUpdateValues(sheets, spreadsheetId, formulaRanges, 2000);
  
  // Format the sheet - this is already a batch operation
  const formatRequests = [
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 0,
          endRowIndex: 1
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true,
              fontSize: 11
            },
            backgroundColor: {
              red: 0.9,
              green: 0.9,
              blue: 0.9
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    },
    // Format revenue by yacht section header
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 1,
          endRowIndex: 2
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true,
              fontSize: 11
            },
            backgroundColor: {
              red: 0.9,
              green: 0.9,
              blue: 1.0
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    },
    // Format revenue by booking type section header
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: yachtData.length + 4,
          endRowIndex: yachtData.length + 5
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true,
              fontSize: 11
            },
            backgroundColor: {
              red: 0.9,
              green: 0.9,
              blue: 1.0
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    },
    // Format total rows
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: yachtData.length + 2,
          endRowIndex: yachtData.length + 3
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true
            },
            backgroundColor: {
              red: 0.95,
              green: 0.95,
              blue: 0.95
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    },
    // Format booking type total row
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: yachtData.length + 13,
          endRowIndex: yachtData.length + 14
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true
            },
            backgroundColor: {
              red: 0.95,
              green: 0.95,
              blue: 0.95
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    }
  ];
  
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: formatRequests
    }
  });
  
  console.log('Created revenue analysis sheet with formulas');
}

/**
 * Create a Business Growth & Investment Summary - OPTIMIZED
 */
async function createInvestmentSummarySheet(sheets, spreadsheetId, yachtData) {
  // Check if the sheet already exists
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId
  });
  
  let sheetExists = false;
  let sheetId = null;
  
  for (const sheet of spreadsheet.data.sheets) {
    if (sheet.properties.title === 'Investment Summary') {
      sheetExists = true;
      sheetId = sheet.properties.sheetId;
      break;
    }
  }
  
  if (!sheetExists) {
    // Create a new sheet for investment summary
    const response = await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: 'Investment Summary'
              }
            }
          }
        ]
      }
    });
    
    // Get the new sheet ID from the response
    sheetId = response.data.replies[0].addSheet.properties.sheetId;
    console.log('Created Investment Summary sheet');
    
    // Add a small delay after creating sheet
    await sleep(1000);
  } else {
    console.log('Investment Summary sheet already exists');
  }
  
  // Prepare value ranges for batch update
  const valueRanges = [
    // Title and description
    {
      range: 'Investment Summary!A1:G1',
      values: [['Azure Yacht Group - Business Growth & Investment Summary']]
    },
    {
      range: 'Investment Summary!A2:G2',
      values: [['Gradual growth model starting with 1 charter per week and scaling operations with strategic marketing investment']]
    },
    
    // Initial investment section
    {
      range: 'Investment Summary!A4:B8',
      values: [
        ['Initial Investment Requirements', ''],
        ['Starting Capital', '250000'],
        ['Initial Marketing Budget', '50000'],
        ['Operations Setup', '75000'],
        ['Contingency Fund', '25000']
      ]
    },
    
    // Business scaling model headers
    {
      range: 'Investment Summary!A10:H10',
      values: [['Business Scaling Model (Monthly)', '', '', '', '', '', '', '']]
    },
    {
      range: 'Investment Summary!A11:H11',
      values: [['Month', 'Active Yachts', 'Bookings Per Week', 'Marketing Spend', 'Monthly Revenue', 'Operating Expenses', 'Net Cash Flow', 'Cumulative Cash Flow']]
    }
  ];
  
  // Scaling model data by month
  const scalingModelData = [];
  let cumulativeCashFlow = -400000; // Starting capital + initial investments
  
  for (let month = 1; month <= 24; month++) {
    // Calculate scaling factors
    const activeYachts = Math.min(Math.ceil(month / 4), yachtData.filter(y => y.available).length);
    let bookingsPerWeek = 0;
    
    if (month <= 3) {
      bookingsPerWeek = 1; // Start with 1 booking per week for first 3 months
    } else if (month <= 6) {
      bookingsPerWeek = 2; // Grow to 2 bookings per week by month 6
    } else if (month <= 12) {
      bookingsPerWeek = 3; // Grow to 3 bookings per week by month 12
    } else if (month <= 18) {
      bookingsPerWeek = 4; // Grow to 4 bookings per week by month 18
    } else {
      bookingsPerWeek = 5; // Maximum of 5 bookings per week after month 18
    }
    
    // Calculate financial numbers
    const marketingSpend = 10000 + (month <= 12 ? month * 2500 : 30000); // Increasing marketing spend up to 30K cap
    
    // Estimate average revenue per booking (weighted average of different yacht & booking types)
    const avgBookingRevenue = 5000;
    const monthlyRevenue = bookingsPerWeek * 4.3 * avgBookingRevenue; // 4.3 average weeks per month
    
    // Base operating expenses plus variable costs
    const operatingExpenses = 25000 + (activeYachts * 3000) + (marketingSpend * 0.1);
    
    // Net cash flow
    const netCashFlow = monthlyRevenue - operatingExpenses - marketingSpend;
    cumulativeCashFlow += netCashFlow;
    
    scalingModelData.push([
      month,
      activeYachts,
      bookingsPerWeek,
      marketingSpend,
      monthlyRevenue,
      operatingExpenses,
      netCashFlow,
      cumulativeCashFlow
    ]);
  }
  
  // Update the scaling model data
  valueRanges.push({
    range: `Investment Summary!A12:H${11 + scalingModelData.length}`,
    values: scalingModelData
  });
  
  // Add ROI and breakeven analysis
  valueRanges.push({
    range: 'Investment Summary!A38:C42',
    values: [
      ['Investment Analysis', '', ''],
      ['Breakeven Point', `=MATCH(TRUE,H12:H35>=0,0)`, 'Months'],
      ['First Year ROI', '=SUM(G12:G23)/400000', ''],
      ['Second Year ROI', '=SUM(G24:G35)/400000', ''],
      ['Overall ROI (2 Years)', '=SUM(G12:G35)/400000', '']
    ]
  });
  
  // Add yacht usage chart data
  valueRanges.push({
    range: 'Investment Summary!A44:G44',
    values: [['Yacht Utilization Forecast', '', '', '', '', '', '']]
  });
  
  valueRanges.push({
    range: 'Investment Summary!A45:G45',
    values: [['Yacht', 'Year 1 - Q1', 'Year 1 - Q2', 'Year 1 - Q3', 'Year 1 - Q4', 'Year 2 - H1', 'Year 2 - H2']]
  });
  
  // Generate utilization percentages for each yacht
  const yachtUtilizationData = [];
  const availableYachts = yachtData.filter(y => y.available);
  
  for (let i = 0; i < availableYachts.length; i++) {
    const yacht = availableYachts[i];
    
    // Yacht utilization grows over time, with larger yachts having slower adoption
    const sizeFactor = 1 - ((yacht.length - 30) / 50); // Larger boats have lower utilization initially
    
    // Yacht gets added to fleet based on sequence, so not all yachts are active from day 1
    const activationOffset = i * 0.15;
    
    yachtUtilizationData.push([
      yacht.name,
      Math.max(0, Math.min(0.3, (0.1 + activationOffset) * sizeFactor)).toFixed(2),      // Q1 - Year 1
      Math.max(0, Math.min(0.45, (0.25 + activationOffset) * sizeFactor)).toFixed(2),    // Q2 - Year 1
      Math.max(0, Math.min(0.6, (0.4 + activationOffset) * sizeFactor)).toFixed(2),      // Q3 - Year 1
      Math.max(0, Math.min(0.7, (0.5 + activationOffset) * sizeFactor)).toFixed(2),      // Q4 - Year 1
      Math.max(0, Math.min(0.8, (0.6 + activationOffset) * sizeFactor)).toFixed(2),      // H1 - Year 2
      Math.max(0, Math.min(0.9, (0.7 + activationOffset) * sizeFactor)).toFixed(2)       // H2 - Year 2
    ]);
  }
  
  // Update the yacht utilization data
  valueRanges.push({
    range: `Investment Summary!A46:G${45 + yachtUtilizationData.length}`,
    values: yachtUtilizationData
  });
  
  // Batch update all data values
  console.log(`Batch updating ${valueRanges.length} value ranges...`);
  await batchUpdateValues(sheets, spreadsheetId, valueRanges);
  
  // Apply formatting
  const formatRequests = [
    // Format title
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 0,
          endRowIndex: 1
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true,
              fontSize: 14
            }
          }
        },
        fields: 'userEnteredFormat.textFormat'
      }
    },
    // Format section headers
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 3,
          endRowIndex: 4
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true,
              fontSize: 12
            },
            backgroundColor: {
              red: 0.9,
              green: 0.9,
              blue: 0.9
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    },
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 9,
          endRowIndex: 10
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true,
              fontSize: 12
            },
            backgroundColor: {
              red: 0.9,
              green: 0.9,
              blue: 0.9
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    },
    // Format table headers
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 10,
          endRowIndex: 11
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true
            },
            backgroundColor: {
              red: 0.95,
              green: 0.95,
              blue: 0.95
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    },
    // Format investment analysis section
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 37,
          endRowIndex: 38
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true,
              fontSize: 12
            },
            backgroundColor: {
              red: 0.9,
              green: 0.9,
              blue: 0.9
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    },
    // Format yacht utilization section
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 43,
          endRowIndex: 44
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true,
              fontSize: 12
            },
            backgroundColor: {
              red: 0.9,
              green: 0.9,
              blue: 0.9
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    },
    // Format yacht utilization headers
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 44,
          endRowIndex: 45
        },
        cell: {
          userEnteredFormat: {
            textFormat: { 
              bold: true
            },
            backgroundColor: {
              red: 0.95,
              green: 0.95,
              blue: 0.95
            }
          }
        },
        fields: 'userEnteredFormat(textFormat,backgroundColor)'
      }
    },
    // Format currency columns in the scaling model
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 11,
          endRowIndex: 36,
          startColumnIndex: 3,
          endColumnIndex: 8
        },
        cell: {
          userEnteredFormat: {
            numberFormat: {
              type: 'CURRENCY',
              pattern: '$#,##0'
            }
          }
        },
        fields: 'userEnteredFormat.numberFormat'
      }
    },
    // Format percentage columns for ROI
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 39,
          endRowIndex: 42,
          startColumnIndex: 1,
          endColumnIndex: 2
        },
        cell: {
          userEnteredFormat: {
            numberFormat: {
              type: 'PERCENT',
              pattern: '0.00%'
            }
          }
        },
        fields: 'userEnteredFormat.numberFormat'
      }
    },
    // Format percentage columns for utilization
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: 45,
          endRowIndex: 45 + yachtUtilizationData.length,
          startColumnIndex: 1,
          endColumnIndex: 7
        },
        cell: {
          userEnteredFormat: {
            numberFormat: {
              type: 'PERCENT',
              pattern: '0%'
            }
          }
        },
        fields: 'userEnteredFormat.numberFormat'
      }
    }
  ];
  
  // Wait a moment before formatting to avoid rate limits
  await sleep(2000);
  
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: formatRequests
    }
  });
  
  console.log('Created Investment Summary sheet');
}

/**
 * Main function to update the financial model
 */
async function updateFinancialModel() {
  console.log(`Updating financial model with spreadsheet ID: ${SPREADSHEET_ID}...`);
  console.log(`Using credentials from: ${CREDENTIALS_PATH}`);
  
  try {
    // Initialize the Google API clients
    const { sheets, drive } = await initGoogleApis();
    console.log('Google API clients initialized successfully');
    
    // Skip backup creation - Google Sheets already has version history
    // console.log('Creating backup...');
    // const backupId = await createSpreadsheetBackup(drive);
    // console.log(`> Backup created with ID: ${backupId}`);
    
    // Ask if user wants to use a CSV file for yacht data
    rl.question('Would you like to load yacht data from a CSV file? (y/n): ', async (csvAnswer) => {
      let yachtData = DEFAULT_YACHT_DATA;
      
      if (csvAnswer.toLowerCase() === 'y') {
        rl.question('Enter the path to your CSV file (or press Enter for default "yacht-listings.csv"): ', async (csvPath) => {
          const filePath = csvPath || './yacht-listings.csv';
          
          try {
            console.log(`Loading yacht data from ${filePath}...`);
            yachtData = await loadYachtDataFromCSV(filePath);
            console.log(`Successfully loaded ${yachtData.length} yachts from CSV.`);
          } catch (err) {
            console.error(`Error loading CSV file: ${err.message}`);
            console.log('Falling back to default yacht data.');
          }
          
          continueWithUpdates(sheets, drive, yachtData);
        });
      } else {
        continueWithUpdates(sheets, drive, yachtData);
      }
    });
  } catch (error) {
    console.error('Error updating financial model:', error);
    rl.close();
  }
}

// Helper function to continue with the updates after determining yacht data source
async function continueWithUpdates(sheets, drive, yachtData) {
  // Ask what updates to make
  rl.question('Would you like to update Yacht Fleet data? (y/n): ', async (yachtAnswer) => {
    if (yachtAnswer.toLowerCase() === 'y') {
      await createYachtFleetSheet(sheets, SPREADSHEET_ID, yachtData);
    }
    
    rl.question('Would you like to generate simulated bookings? (y/n): ', async (bookingsAnswer) => {
      if (bookingsAnswer.toLowerCase() === 'y') {
        await createBookingsSheet(sheets, SPREADSHEET_ID, yachtData);
      }
      
      rl.question('Would you like to create a revenue analysis? (y/n): ', async (revenueAnswer) => {
        if (revenueAnswer.toLowerCase() === 'y') {
          await createRevenueAnalysisSheet(sheets, SPREADSHEET_ID, yachtData);
        }
        
        rl.question('Would you like to create an investment summary? (y/n): ', async (investmentAnswer) => {
          if (investmentAnswer.toLowerCase() === 'y') {
            await createInvestmentSummarySheet(sheets, SPREADSHEET_ID, yachtData);
          }
          
          console.log('\n======================================================');
          console.log('Financial model updated successfully!');
          console.log('======================================================');
          console.log(`Spreadsheet URL: https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`);
          console.log('======================================================');
          rl.close();
        });
      });
    });
  });
}

// Add a utility function to help with throttling API requests
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Add a utility function to batch value updates
async function batchUpdateValues(sheets, spreadsheetId, valueRanges, throttleMs = 1000) {
  // Split into chunks of 10 to avoid hitting payload size limits
  const chunkSize = 10;
  for (let i = 0; i < valueRanges.length; i += chunkSize) {
    const chunk = valueRanges.slice(i, i + chunkSize);
    
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId,
      requestBody: {
        valueInputOption: 'USER_ENTERED',
        data: chunk
      }
    });
    
    // Add a delay between batches to avoid rate limits
    if (i + chunkSize < valueRanges.length) {
      await sleep(throttleMs);
    }
  }
}

// Start the process
updateFinancialModel(); 