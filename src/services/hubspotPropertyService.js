const hubspot = require('@hubspot/api-client');

class HubSpotPropertyService {
  constructor(apiKey) {
    this.hubspotClient = new hubspot.Client({ apiKey });
  }

  /**
   * Create custom properties in HubSpot using latest API
   * @param {Array} properties - Array of property definitions
   * @param {string} objectType - 'contacts', 'deals', 'companies', 'tickets'
   */
  async createCustomProperties(properties, objectType) {
    const results = [];
    
    for (const property of properties) {
      try {
        // Check if property already exists
        const existingProperty = await this.checkPropertyExists(property.name, objectType);
        
        if (existingProperty) {
          console.log(`Property ${property.name} already exists for ${objectType}`);
          results.push({ name: property.name, status: 'exists', property: existingProperty });
          continue;
        }

        // Create property group if it doesn't exist
        if (property.groupName) {
          await this.createPropertyGroup(property.groupName, objectType);
        }

        // Create the property
        const propertyInput = {
          name: property.name,
          label: property.label,
          type: property.type,
          fieldType: property.fieldType,
          groupName: property.groupName || 'contactinformation',
          description: property.description || '',
          options: property.options || [],
          displayOrder: property.displayOrder || -1,
          hasUniqueValue: property.hasUniqueValue || false,
          hidden: property.hidden || false,
          formField: property.formField !== false, // Default to true unless explicitly false
          searchableInGlobalSearch: property.searchableInGlobalSearch || false
        };

        const response = await this.hubspotClient.crm.properties.coreApi.create(
          objectType,
          propertyInput
        );

        console.log(`Successfully created property: ${property.name}`);
        results.push({ name: property.name, status: 'created', property: response });
        
      } catch (error) {
        console.error(`Failed to create property ${property.name}:`, error.message);
        results.push({ name: property.name, status: 'error', error: error.message });
      }
    }
    
    return results;
  }

  /**
   * Check if a property already exists
   */
  async checkPropertyExists(propertyName, objectType) {
    try {
      const response = await this.hubspotClient.crm.properties.coreApi.getByName(
        objectType,
        propertyName
      );
      return response;
    } catch (error) {
      if (error.code === 404) {
        return null; // Property doesn't exist
      }
      throw error;
    }
  }

  /**
   * Create property group if it doesn't exist
   */
  async createPropertyGroup(groupName, objectType) {
    try {
      // Check if group exists
      const existingGroups = await this.hubspotClient.crm.properties.groupsApi.getAll(objectType);
      const groupExists = existingGroups.results.some(group => group.name === groupName);
      
      if (!groupExists) {
        const groupInput = {
          name: groupName,
          label: groupName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          displayOrder: -1
        };
        
        await this.hubspotClient.crm.properties.groupsApi.create(objectType, groupInput);
        console.log(`Created property group: ${groupName}`);
      }
    } catch (error) {
      console.error(`Failed to create property group ${groupName}:`, error.message);
    }
  }

  /**
   * Update existing property
   */
  async updateProperty(propertyName, objectType, updates) {
    try {
      const response = await this.hubspotClient.crm.properties.coreApi.update(
        objectType,
        propertyName,
        updates
      );
      return response;
    } catch (error) {
      console.error(`Failed to update property ${propertyName}:`, error.message);
      throw error;
    }
  }

  /**
   * Setup all Azure Yacht Group properties
   */
  async setupAllProperties() {
    console.log('Setting up all Azure Yacht Group properties...');
    
    // Import property definitions
    const { charterContactProperties, charterDealProperties } = require('../config/propertyDefinitions');
    const { partnerProperties, referralProperties } = require('../config/partnerPropertyDefinitions');
    
    try {
      // Create contact properties
      console.log('Creating contact properties...');
      const contactResults = await this.createCustomProperties([
        ...charterContactProperties,
        ...referralProperties
      ], 'contacts');
      
      // Create deal properties
      console.log('Creating deal properties...');
      const dealResults = await this.createCustomProperties(charterDealProperties, 'deals');
      
      // Create partner properties (also on contacts)
      console.log('Creating partner properties...');
      const partnerResults = await this.createCustomProperties(partnerProperties, 'contacts');
      
      const summary = {
        contacts: contactResults,
        deals: dealResults,
        partners: partnerResults,
        totalCreated: [
          ...contactResults.filter(r => r.status === 'created'),
          ...dealResults.filter(r => r.status === 'created'),
          ...partnerResults.filter(r => r.status === 'created')
        ].length,
        totalErrors: [
          ...contactResults.filter(r => r.status === 'error'),
          ...dealResults.filter(r => r.status === 'error'),
          ...partnerResults.filter(r => r.status === 'error')
        ].length
      };
      
      console.log('Property setup completed:', summary);
      return summary;
      
    } catch (error) {
      console.error('Failed to setup properties:', error);
      throw error;
    }
  }
}

module.exports = HubSpotPropertyService; 