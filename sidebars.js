/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Using the document IDs exactly as they appear in the error message
  docsidebar: [
    'getting-started',
    'intro',
    'framework-overview',
    'business-model',
    'technology-stack',
    {
      type: 'category',
      label: 'Website Architecture',
      items: [
        'website-architecture/overview',
        'website-architecture/site-structure',
        'website-architecture/tilda-integration',
        'website-architecture/deployment-plan',
        'website-architecture/yacht-data-import',
      ],
    },
    {
      type: 'category',
      label: 'Legal Framework',
      items: [
        'legal-framework/index',
        'legal-framework/broker-legal-framework',
        'legal-framework/charter-contracts',
        'legal-framework/compliance-requirements',
        'legal-framework/contract-templates',
        'legal-framework/data-privacy-compliance',
        'legal-framework/financial-transaction-framework',
        'legal-framework/insurance-requirements',
        'legal-framework/regulatory-compliance',
      ],
    },
    {
      type: 'category',
      label: 'Website Content',
      items: [
        'website-content/index',
        'website-content/brokerage',
        'website-content/charter-website',
        'website-content/iyba-compliance',
        'website-content/legal-framework',
        'website-content/resources',
        'website-content/yacht-design',
        {
          type: 'category',
          label: 'Destinations',
          items: [
            'website-content/destinations/destinations-index',
            'website-content/destinations/mediterranean',
            'website-content/destinations/caribbean',
            'website-content/destinations/south-pacific'
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'development/cursor-integration',
        'development/code-samples',
      ],
    },
    {
      type: 'category',
      label: 'Client Funnel',
      items: [
        'client-funnel/overview',
        'client-funnel/acquisition-strategies',
        'client-funnel/lead-magnets',
      ],
    },
    {
      type: 'category',
      label: 'Tilda API',
      items: [
        'tilda-api/overview',
        'tilda-api/setup-guide',
        'tilda-api/implementation-guide',
        'tilda-api/referral-page-guide',
        'tilda-api/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Referral System',
      items: [
        'integration/referral-system-overview',
        'integration/referral-system-alternatives',
        'integration/zapier-implementation-guide',
        'integration/n8n-referral-automation',
        'integration/hubspot-referral-integration',
        'integration/google-sheets-filtered-views-setup',
        'integration/partner-application',
        'integration/partner-booklet',
        'integration/partner-agreement',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/templates',
        'resources/ip-assets',
      ],
    },
    {
      type: 'category',
      label: 'Project Status',
      items: [
        'PROJECT_PLAN',
        'DEVELOPMENT_STATUS',
        'WEBSITE_PAGE_STATUS',
        'WEBSITE_STRUCTURE_ALIGNMENT',
        'DOCUSAURUS_UPDATE_PLAN',
        'consolidated-implementation-plans',
      ],
    },
    {
      type: 'category',
      label: 'External Documentation',
      items: [
        {
          type: 'link',
          label: 'Tilda API Setup Guide',
          href: 'https://szemkoff.github.io/azurecharters/tilda-api/docs/API_SETUP_GUIDE.md',
        },
        {
          type: 'link',
          label: 'Tilda Implementation Guide',
          href: 'https://szemkoff.github.io/azurecharters/tilda-api/docs/IMPLEMENTATION_GUIDE.md',
        },
        {
          type: 'link',
          label: 'Tilda Troubleshooting',
          href: 'https://szemkoff.github.io/azurecharters/tilda-api/docs/TROUBLESHOOTING.md',
        },
      ],
    },
  ],
};

module.exports = sidebars; 