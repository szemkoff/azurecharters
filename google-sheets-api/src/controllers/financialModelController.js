const GoogleSheetsService = require('../services/googleSheetsService');
const sheetsService = new GoogleSheetsService();

/**
 * Create a new financial model in Google Sheets
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
exports.createFinancialModel = async (req, res) => {
  try {
    const { title, assumptions } = req.body;

    if (!title) {
      return res.status(400).json({
        status: 'error',
        message: 'Title is required'
      });
    }

    // Create new spreadsheet
    const spreadsheet = await sheetsService.createSpreadsheet(title);
    const spreadsheetId = spreadsheet.data.spreadsheetId;

    // Create all the necessary tabs for the financial model
    await sheetsService.createModelTabs(spreadsheetId);

    // Populate assumptions if provided
    if (assumptions) {
      await sheetsService.updateAssumptions(spreadsheetId, assumptions);
    }

    // Populate formulas and calculations
    await sheetsService.buildFinancialModel(spreadsheetId);

    return res.status(201).json({
      status: 'success',
      message: 'Financial model created successfully',
      data: {
        spreadsheetId,
        spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`,
        title: spreadsheet.data.properties.title
      }
    });
  } catch (error) {
    console.error('Error creating financial model:', error);
    return res.status(500).json({
      status: 'error',
      message: error.message || 'Error creating financial model'
    });
  }
};

/**
 * Update assumptions in financial model
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
exports.updateAssumptions = async (req, res) => {
  try {
    const { spreadsheetId, assumptions } = req.body;

    if (!spreadsheetId || !assumptions) {
      return res.status(400).json({
        status: 'error',
        message: 'Spreadsheet ID and assumptions are required'
      });
    }

    await sheetsService.updateAssumptions(spreadsheetId, assumptions);
    
    return res.status(200).json({
      status: 'success',
      message: 'Assumptions updated successfully',
      data: {
        spreadsheetId,
        updatedAssumptions: assumptions
      }
    });
  } catch (error) {
    console.error('Error updating assumptions:', error);
    return res.status(500).json({
      status: 'error',
      message: error.message || 'Error updating assumptions'
    });
  }
};

/**
 * Get financial model summary data
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
exports.getModelSummary = async (req, res) => {
  try {
    const { spreadsheetId } = req.params;

    if (!spreadsheetId) {
      return res.status(400).json({
        status: 'error',
        message: 'Spreadsheet ID is required'
      });
    }

    const summaryData = await sheetsService.getModelSummary(spreadsheetId);
    
    return res.status(200).json({
      status: 'success',
      data: summaryData
    });
  } catch (error) {
    console.error('Error fetching model summary:', error);
    return res.status(500).json({
      status: 'error',
      message: error.message || 'Error fetching model summary'
    });
  }
};

/**
 * Generate scenarios based on different assumptions
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
exports.generateScenarios = async (req, res) => {
  try {
    const { spreadsheetId } = req.params;
    const { scenarios } = req.body;

    if (!spreadsheetId || !scenarios || !Array.isArray(scenarios)) {
      return res.status(400).json({
        status: 'error',
        message: 'Spreadsheet ID and scenarios array are required'
      });
    }

    await sheetsService.generateScenarios(spreadsheetId, scenarios);
    
    return res.status(200).json({
      status: 'success',
      message: 'Scenarios generated successfully',
      data: {
        spreadsheetId,
        scenariosGenerated: scenarios.length
      }
    });
  } catch (error) {
    console.error('Error generating scenarios:', error);
    return res.status(500).json({
      status: 'error',
      message: error.message || 'Error generating scenarios'
    });
  }
}; 