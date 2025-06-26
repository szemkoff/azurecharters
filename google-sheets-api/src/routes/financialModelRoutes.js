const express = require('express');
const router = express.Router();
const financialModelController = require('../controllers/financialModelController');

/**
 * @route POST /api/financial-model/create
 * @desc Create a new financial model in Google Sheets
 * @access Private
 */
router.post('/create', financialModelController.createFinancialModel);

/**
 * @route POST /api/financial-model/update-assumptions
 * @desc Update assumptions in financial model
 * @access Private
 */
router.post('/update-assumptions', financialModelController.updateAssumptions);

/**
 * @route GET /api/financial-model/:spreadsheetId/summary
 * @desc Get financial model summary data
 * @access Private
 */
router.get('/:spreadsheetId/summary', financialModelController.getModelSummary);

/**
 * @route POST /api/financial-model/:spreadsheetId/generate-scenarios
 * @desc Generate scenarios based on different assumptions
 * @access Private
 */
router.post('/:spreadsheetId/generate-scenarios', financialModelController.generateScenarios);

module.exports = router; 