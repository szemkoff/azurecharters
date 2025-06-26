# Azure Yacht Group Google Sheets API

This API allows programmatic creation and management of financial models in Google Sheets for the Azure Yacht Group charter business.

## Features

- Create complete financial models with all necessary sheets and calculations
- Update assumptions and see real-time calculations
- Generate multiple scenarios for business planning
- Extract summary data for dashboards and reports

## Setup Instructions

### Prerequisites

- Node.js v14 or higher
- npm v6 or higher
- Google Cloud Platform account with the Sheets API enabled
- Service account with appropriate permissions

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd google-sheets-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up Google Cloud credentials:
   - Create a project in Google Cloud Platform
   - Enable the Google Sheets API and Google Drive API
   - Create a service account with appropriate permissions
   - Download the credentials JSON file
   - Save it in your project directory as `credentials.json`

4. Configure environment variables:
   ```
   cp .env.example .env
   ```
   Then edit the `.env` file with your specific settings.

### Running the API

Development mode with auto-reload:
```
npm run dev
```

Production mode:
```
npm start
```

## API Endpoints

### Create a Financial Model

```
POST /api/financial-model/create
```

Request body:
```json
{
  "title": "Azure Yacht Group - Financial Model",
  "assumptions": {
    "averageCharterValue": 35000,
    "commissionRate": 0.175,
    "premiumListingFee": 0.05,
    "marketGrowthRate": 0.083,
    "initialMonthlyBookings": 5,
    "monthlyGrowthRate": 0.08,
    "premiumListingPercentage": 0.25,
    "repeatBookingRate": 0.15,
    "customerAcquisitionCost": 1200,
    "conversionRate": 0.035,
    "marketingBudget": 150000
  }
}
```

Response:
```json
{
  "status": "success",
  "message": "Financial model created successfully",
  "data": {
    "spreadsheetId": "abc123xyz",
    "spreadsheetUrl": "https://docs.google.com/spreadsheets/d/abc123xyz/edit",
    "title": "Azure Yacht Group - Financial Model"
  }
}
```

### Update Assumptions

```
POST /api/financial-model/update-assumptions
```

Request body:
```json
{
  "spreadsheetId": "abc123xyz",
  "assumptions": {
    "averageCharterValue": 40000,
    "commissionRate": 0.2,
    "initialMonthlyBookings": 7
  }
}
```

### Get Model Summary

```
GET /api/financial-model/:spreadsheetId/summary
```

### Generate Scenarios

```
POST /api/financial-model/:spreadsheetId/generate-scenarios
```

Request body:
```json
{
  "scenarios": [
    {
      "name": "Base Case",
      "averageCharterValue": 35000,
      "commissionRate": "17.5%",
      "monthlyGrowthRate": "8%",
      "customerAcquisitionCost": 1200,
      "conversionRate": "3.5%"
    },
    {
      "name": "Best Case",
      "averageCharterValue": 45000,
      "commissionRate": "20%",
      "monthlyGrowthRate": "12%",
      "customerAcquisitionCost": 900,
      "conversionRate": "5%"
    },
    {
      "name": "Worst Case",
      "averageCharterValue": 25000,
      "commissionRate": "15%",
      "monthlyGrowthRate": "5%",
      "customerAcquisitionCost": 1500,
      "conversionRate": "2%"
    }
  ]
}
```

## Security Considerations

- This API should be deployed with appropriate authentication and authorization
- API keys or JWT tokens should be used to secure endpoints
- Service account credentials should be kept secure

## License

This project is proprietary and confidential to Azure Yacht Group. 