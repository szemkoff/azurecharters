const HubSpotPropertyService = require('../src/services/hubspotPropertyService');
require('dotenv').config();

async function setupProperties() {
  console.log('🚀 Azure Yacht Group - HubSpot Properties Setup');
  console.log('================================================');
  
  if (!process.env.HUBSPOT_API_KEY) {
    console.error('❌ HUBSPOT_API_KEY environment variable is required');
    console.log('\n💡 Add your HubSpot API key to your .env file:');
    console.log('HUBSPOT_API_KEY=your_hubspot_api_key_here');
    process.exit(1);
  }

  const propertyService = new HubSpotPropertyService(process.env.HUBSPOT_API_KEY);
  
  try {
    console.log('🔧 Starting property setup...\n');
    const results = await propertyService.setupAllProperties();
    
    console.log('\n=== PROPERTY SETUP SUMMARY ===');
    console.log(`✅ Total properties created: ${results.totalCreated}`);
    console.log(`⚠️  Total errors: ${results.totalErrors}`);
    
    if (results.totalErrors > 0) {
      console.log('\n=== ERRORS ===');
      [
        ...results.contacts.filter(r => r.status === 'error'),
        ...results.deals.filter(r => r.status === 'error'),
        ...results.partners.filter(r => r.status === 'error')
      ].forEach(error => {
        console.log(`❌ ${error.name}: ${error.error}`);
      });
    }
    
    console.log('\n=== PROPERTY GROUPS CREATED ===');
    console.log('📋 Charter Information (7 properties)');
    console.log('💬 Communication Preferences (2 properties)');
    console.log('🤝 Partner Tracking (3 properties)');
    console.log('📝 Form Tracking (3 properties)');
    console.log('⛵ Charter Details (12 properties)');
    console.log('📊 Deal Source (3 properties)');
    console.log('🎯 Deal Management (2 properties)');
    console.log('👥 Partner Management (8 properties)');
    console.log('🏢 Partner Information (4 properties)');
    console.log('📈 Partner Performance (6 properties)');
    console.log('🔗 Referral Tracking (8 properties)');
    
    console.log('\n=== NEXT STEPS ===');
    console.log('1. 🔍 Review created properties in HubSpot Settings > Properties');
    console.log('2. ⚙️  Adjust property groups and display orders as needed');
    console.log('3. 🧪 Test form submissions to verify property mapping');
    console.log('4. 👤 Configure property permissions for different user roles');
    console.log('5. 📋 Update your customer inquiry form with new field names');
    console.log('6. 🤖 Configure Zapier automations with new properties');
    
    console.log('\n🎉 Setup completed successfully!');
    
  } catch (error) {
    console.error('❌ Setup failed:', error);
    console.log('\n💡 Troubleshooting:');
    console.log('1. Check your HubSpot API key is valid');
    console.log('2. Ensure you have property creation permissions');
    console.log('3. Verify your HubSpot account is not at property limits');
    process.exit(1);
  }
}

// Run the setup
setupProperties(); 