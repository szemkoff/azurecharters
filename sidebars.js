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
  frameworkSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro',
        'framework-overview',
        'business-model',
        'technology-stack',
        'getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Business Strategy',
      items: [
        'business-plan-visual-elements',
        'market-analysis',
        'marketing-strategy',
        'financial-projections',
        'risk-assessment',
      ],
    },
    {
      type: 'category',
      label: 'Project Status',
      items: [
        'PROJECT_PLAN',
        'DEVELOPMENT_STATUS',
        'WEBSITE_STRUCTURE_ALIGNMENT',
        'DOCUSAURUS_UPDATE_PLAN',
        'consolidated-implementation-plans',
      ],
    },
    {
      type: 'category',
      label: 'Website Architecture',
      items: [
        'website-architecture/overview',
        'website-architecture/site-structure',
        'website-architecture/deployment-plan',
        'website-architecture/tilda-integration',
        'website-architecture/yacht-data-import',
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
      label: 'Development Workflow',
      items: [
        'development/cursor-integration',
        'development/code-samples',
      ],
    },
    {
      type: 'category',
      label: 'Tilda API Integration',
      items: [
        'website-architecture/tilda-integration',
        {
          type: 'link',
          label: 'API Setup Guide',
          href: 'https://szemkoff.github.io/azurecharters/tilda-api/docs/API_SETUP_GUIDE.md',
        },
        {
          type: 'link',
          label: 'Implementation Guide',
          href: 'https://szemkoff.github.io/azurecharters/tilda-api/docs/IMPLEMENTATION_GUIDE.md',
        },
        {
          type: 'link',
          label: 'Troubleshooting',
          href: 'https://szemkoff.github.io/azurecharters/tilda-api/docs/TROUBLESHOOTING.md',
        },
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
  ],
};

module.exports = sidebars; 