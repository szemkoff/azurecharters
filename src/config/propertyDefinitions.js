// Charter-specific contact properties to create in HubSpot
const charterContactProperties = [
  {
    name: 'yacht_charter_interest',
    label: 'Yacht Charter Interest',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: 'Motor Yacht', value: 'motor_yacht' },
      { label: 'Sailing Yacht', value: 'sailing_yacht' },
      { label: 'Catamaran', value: 'catamaran' },
      { label: 'Luxury Yacht', value: 'luxury_yacht' },
      { label: 'Sport Yacht', value: 'sport_yacht' },
      { label: 'Expedition Yacht', value: 'expedition_yacht' },
      { label: 'Not Sure', value: 'not_sure' }
    ],
    groupName: 'Charter Information'
  },
  {
    name: 'charter_budget_range',
    label: 'Charter Budget Range',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: '$3,000 - $5,000', value: '3000-5000' },
      { label: '$5,000 - $10,000', value: '5000-10000' },
      { label: '$10,000 - $20,000', value: '10000-20000' },
      { label: '$20,000 - $50,000', value: '20000-50000' },
      { label: '$50,000+', value: '50000+' },
      { label: 'I need help determining budget', value: 'help_needed' }
    ],
    groupName: 'Charter Information'
  },
  {
    name: 'charter_date_preference',
    label: 'Preferred Charter Date',
    type: 'date',
    fieldType: 'date',
    groupName: 'Charter Information'
  },
  {
    name: 'group_size',
    label: 'Group Size',
    type: 'number',
    fieldType: 'number',
    groupName: 'Charter Information'
  },
  {
    name: 'charter_duration',
    label: 'Charter Duration (Days)',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: 'Half Day (4 hours)', value: 'half_day' },
      { label: 'Full Day (8 hours)', value: 'full_day' },
      { label: '2-3 Days', value: '2-3_days' },
      { label: '1 Week', value: '1_week' },
      { label: '2 Weeks', value: '2_weeks' },
      { label: '1 Month+', value: '1_month_plus' }
    ],
    groupName: 'Charter Information'
  },
  {
    name: 'charter_destination',
    label: 'Charter Destination',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: 'Caribbean', value: 'caribbean' },
      { label: 'Mediterranean', value: 'mediterranean' },
      { label: 'South Pacific', value: 'south_pacific' },
      { label: 'Florida/Bahamas', value: 'florida_bahamas' },
      { label: 'Mexico', value: 'mexico' },
      { label: 'Asia', value: 'asia' },
      { label: 'Other', value: 'other' },
      { label: 'Flexible', value: 'flexible' }
    ],
    groupName: 'Charter Information'
  },
  {
    name: 'special_requirements',
    label: 'Special Requirements',
    type: 'string',
    fieldType: 'textarea',
    groupName: 'Charter Information'
  },
  {
    name: 'preferred_contact_method',
    label: 'Preferred Contact Method',
    type: 'enumeration',
    fieldType: 'radio',
    options: [
      { label: 'Email', value: 'email' },
      { label: 'Phone', value: 'phone' },
      { label: 'Text/SMS', value: 'sms' },
      { label: 'WhatsApp', value: 'whatsapp' }
    ],
    groupName: 'Communication Preferences'
  },
  {
    name: 'best_time_to_contact',
    label: 'Best Time to Contact',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: 'Morning (9AM-12PM)', value: 'morning' },
      { label: 'Afternoon (12PM-5PM)', value: 'afternoon' },
      { label: 'Evening (5PM-8PM)', value: 'evening' },
      { label: 'Anytime', value: 'anytime' }
    ],
    groupName: 'Communication Preferences'
  },
  {
    name: 'referral_partner_id',
    label: 'Referral Partner ID',
    type: 'string',
    fieldType: 'text',
    groupName: 'Partner Tracking'
  },
  {
    name: 'referral_partner_name',
    label: 'Referral Partner Name',
    type: 'string',
    fieldType: 'text',
    groupName: 'Partner Tracking'
  },
  {
    name: 'is_referral_lead',
    label: 'Is Referral Lead',
    type: 'bool',
    fieldType: 'booleancheckbox',
    groupName: 'Partner Tracking'
  },
  {
    name: 'form_submission_date',
    label: 'Form Submission Date',
    type: 'datetime',
    fieldType: 'date',
    groupName: 'Form Tracking'
  },
  {
    name: 'form_name',
    label: 'Form Name',
    type: 'string',
    fieldType: 'text',
    groupName: 'Form Tracking'
  },
  {
    name: 'form_url',
    label: 'Form URL',
    type: 'string',
    fieldType: 'text',
    groupName: 'Form Tracking'
  }
];

// Charter-specific deal properties to create in HubSpot
const charterDealProperties = [
  {
    name: 'yacht_model_requested',
    label: 'Yacht Model Requested',
    type: 'string',
    fieldType: 'text',
    groupName: 'Charter Details'
  },
  {
    name: 'charter_start_date',
    label: 'Charter Start Date',
    type: 'date',
    fieldType: 'date',
    groupName: 'Charter Details'
  },
  {
    name: 'charter_group_size',
    label: 'Charter Group Size',
    type: 'number',
    fieldType: 'number',
    groupName: 'Charter Details'
  },
  {
    name: 'charter_duration_days',
    label: 'Charter Duration (Days)',
    type: 'string',
    fieldType: 'text',
    groupName: 'Charter Details'
  },
  {
    name: 'charter_destination',
    label: 'Charter Destination',
    type: 'string',
    fieldType: 'text',
    groupName: 'Charter Details'
  },
  {
    name: 'charter_special_requirements',
    label: 'Charter Special Requirements',
    type: 'string',
    fieldType: 'textarea',
    groupName: 'Charter Details'
  },
  {
    name: 'deal_source',
    label: 'Deal Source',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: 'Website Form', value: 'website_form' },
      { label: 'Phone Call', value: 'phone_call' },
      { label: 'Email Inquiry', value: 'email_inquiry' },
      { label: 'Social Media', value: 'social_media' },
      { label: 'Partner Referral', value: 'partner_referral' },
      { label: 'Trade Show', value: 'trade_show' },
      { label: 'Other', value: 'other' }
    ],
    groupName: 'Deal Source'
  },
  {
    name: 'deal_source_detail',
    label: 'Deal Source Detail',
    type: 'string',
    fieldType: 'text',
    groupName: 'Deal Source'
  },
  {
    name: 'referral_partner_deal',
    label: 'Referral Partner',
    type: 'string',
    fieldType: 'text',
    groupName: 'Deal Source'
  },
  {
    name: 'deal_priority',
    label: 'Deal Priority',
    type: 'enumeration',
    fieldType: 'radio',
    options: [
      { label: 'High', value: 'high' },
      { label: 'Medium', value: 'medium' },
      { label: 'Low', value: 'low' }
    ],
    groupName: 'Deal Management'
  },
  {
    name: 'deal_type',
    label: 'Deal Type',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: 'Direct Lead', value: 'direct_lead' },
      { label: 'Partner Referral', value: 'partner_referral' },
      { label: 'Repeat Customer', value: 'repeat_customer' },
      { label: 'Upsell', value: 'upsell' }
    ],
    groupName: 'Deal Management'
  }
];

module.exports = {
  charterContactProperties,
  charterDealProperties
}; 