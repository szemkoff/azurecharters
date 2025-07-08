// Partner-specific properties to add in HubSpot
const partnerProperties = [
  {
    name: 'partner_status',
    label: 'Partner Status',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: 'Applied', value: 'applied' },
      { label: 'Under Review', value: 'under_review' },
      { label: 'Approved', value: 'approved' },
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
      { label: 'Suspended', value: 'suspended' },
      { label: 'Terminated', value: 'terminated' }
    ],
    groupName: 'Partner Management'
  },
  {
    name: 'partner_type',
    label: 'Partner Type',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: 'Travel Advisor', value: 'travel_advisor' },
      { label: 'Concierge Service', value: 'concierge_service' },
      { label: 'Event Planner', value: 'event_planner' },
      { label: 'Wealth Manager', value: 'wealth_manager' },
      { label: 'Real Estate Agent', value: 'real_estate' },
      { label: 'Hotel/Resort', value: 'hotel_resort' },
      { label: 'Corporate Services', value: 'corporate_services' },
      { label: 'Other', value: 'other' }
    ],
    groupName: 'Partner Management'
  },
  {
    name: 'partner_id',
    label: 'Partner ID',
    type: 'string',
    fieldType: 'text',
    groupName: 'Partner Management'
  },
  {
    name: 'partner_tier',
    label: 'Partner Tier',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: 'Bronze', value: 'bronze' },
      { label: 'Silver', value: 'silver' },
      { label: 'Gold', value: 'gold' },
      { label: 'Platinum', value: 'platinum' }
    ],
    groupName: 'Partner Management'
  },
  {
    name: 'business_type',
    label: 'Business Type',
    type: 'string',
    fieldType: 'text',
    groupName: 'Partner Information'
  },
  {
    name: 'years_in_business',
    label: 'Years in Business',
    type: 'number',
    fieldType: 'number',
    groupName: 'Partner Information'
  },
  {
    name: 'business_size',
    label: 'Business Size',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: 'Solo/Independent', value: 'solo' },
      { label: 'Small (2-10 employees)', value: 'small' },
      { label: 'Medium (11-50 employees)', value: 'medium' },
      { label: 'Large (50+ employees)', value: 'large' }
    ],
    groupName: 'Partner Information'
  },
  {
    name: 'client_budget_range',
    label: 'Client Budget Range',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: '$3,000-$5,000', value: '3000-5000' },
      { label: '$5,000-$10,000', value: '5000-10000' },
      { label: '$10,000-$25,000', value: '10000-25000' },
      { label: '$25,000-$50,000', value: '25000-50000' },
      { label: '$50,000+', value: '50000+' }
    ],
    groupName: 'Partner Performance'
  },
  {
    name: 'expected_referrals_yearly',
    label: 'Expected Referrals Per Year',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: '1-5', value: '1-5' },
      { label: '6-10', value: '6-10' },
      { label: '11-25', value: '11-25' },
      { label: '25+', value: '25+' }
    ],
    groupName: 'Partner Performance'
  },
  {
    name: 'actual_referrals_yearly',
    label: 'Actual Referrals This Year',
    type: 'number',
    fieldType: 'number',
    groupName: 'Partner Performance'
  },
  {
    name: 'total_revenue_generated',
    label: 'Total Revenue Generated',
    type: 'number',
    fieldType: 'number',
    groupName: 'Partner Performance'
  },
  {
    name: 'commission_rate',
    label: 'Commission Rate (%)',
    type: 'number',
    fieldType: 'number',
    groupName: 'Partner Performance'
  },
  {
    name: 'partner_onboarding_date',
    label: 'Partner Onboarding Date',
    type: 'date',
    fieldType: 'date',
    groupName: 'Partner Management'
  },
  {
    name: 'last_referral_date',
    label: 'Last Referral Date',
    type: 'date',
    fieldType: 'date',
    groupName: 'Partner Performance'
  },
  {
    name: 'partner_agreement_signed',
    label: 'Partner Agreement Signed',
    type: 'bool',
    fieldType: 'booleancheckbox',
    groupName: 'Partner Management'
  },
  {
    name: 'marketing_materials_sent',
    label: 'Marketing Materials Sent',
    type: 'bool',
    fieldType: 'booleancheckbox',
    groupName: 'Partner Management'
  },
  {
    name: 'partner_training_completed',
    label: 'Partner Training Completed',
    type: 'bool',
    fieldType: 'booleancheckbox',
    groupName: 'Partner Management'
  },
  {
    name: 'primary_markets_served',
    label: 'Primary Markets Served',
    type: 'string',
    fieldType: 'textarea',
    groupName: 'Partner Information'
  },
  {
    name: 'specialization_areas',
    label: 'Specialization Areas',
    type: 'enumeration',
    fieldType: 'checkbox',
    options: [
      { label: 'Luxury Travel', value: 'luxury_travel' },
      { label: 'Corporate Events', value: 'corporate_events' },
      { label: 'Weddings', value: 'weddings' },
      { label: 'Family Vacations', value: 'family_vacations' },
      { label: 'Adventure Travel', value: 'adventure_travel' },
      { label: 'Romantic Getaways', value: 'romantic_getaways' }
    ],
    groupName: 'Partner Information'
  }
];

// Referral tracking properties
const referralProperties = [
  {
    name: 'referral_partner_id',
    label: 'Referral Partner ID',
    type: 'string',
    fieldType: 'text',
    groupName: 'Referral Tracking'
  },
  {
    name: 'referral_source_partner',
    label: 'Referral Source Partner',
    type: 'string',
    fieldType: 'text',
    groupName: 'Referral Tracking'
  },
  {
    name: 'is_referral_lead',
    label: 'Is Referral Lead',
    type: 'bool',
    fieldType: 'booleancheckbox',
    groupName: 'Referral Tracking'
  },
  {
    name: 'referral_date',
    label: 'Referral Date',
    type: 'datetime',
    fieldType: 'date',
    groupName: 'Referral Tracking'
  },
  {
    name: 'referral_status',
    label: 'Referral Status',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: 'New Referral', value: 'new' },
      { label: 'Contacted', value: 'contacted' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'Converted', value: 'converted' },
      { label: 'Lost', value: 'lost' }
    ],
    groupName: 'Referral Tracking'
  },
  {
    name: 'referral_commission_amount',
    label: 'Referral Commission Amount',
    type: 'number',
    fieldType: 'number',
    groupName: 'Referral Tracking'
  },
  {
    name: 'referral_commission_paid',
    label: 'Referral Commission Paid',
    type: 'bool',
    fieldType: 'booleancheckbox',
    groupName: 'Referral Tracking'
  },
  {
    name: 'referral_commission_date',
    label: 'Referral Commission Date',
    type: 'date',
    fieldType: 'date',
    groupName: 'Referral Tracking'
  }
];

module.exports = {
  partnerProperties,
  referralProperties
}; 