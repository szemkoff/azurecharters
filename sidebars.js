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
        'business-model',
        'technology-stack',
        'getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Website Architecture',
      items: [
        'website-architecture/overview',
        'website-architecture/tilda-integration',
        'website-architecture/site-structure',
        'website-architecture/design-system',
        'website-architecture/responsive-design',
        'website-architecture/seo-optimization',
      ],
    },
    {
      type: 'category',
      label: 'Product Catalog',
      items: [
        'product-catalog/overview',
        'product-catalog/yacht-data-structure',
        'product-catalog/tilda-products',
        'product-catalog/image-optimization',
        'product-catalog/pricing-models',
        'product-catalog/availability-management',
      ],
    },
    {
      type: 'category',
      label: 'Client Funnel',
      items: [
        'client-funnel/overview',
        'client-funnel/acquisition-strategies',
        'client-funnel/lead-magnets',
        'client-funnel/nurturing-process',
        'client-funnel/conversion-optimization',
        'client-funnel/retention-strategies',
      ],
    },
    {
      type: 'category',
      label: 'Integration Systems',
      items: [
        'integration/overview',
        'integration/tilda-api',
        'integration/email-marketing',
        'integration/social-media',
        'integration/analytics',
        'integration/crm-systems',
        'integration/booking-systems',
      ],
    },
    {
      type: 'category',
      label: 'Documentation System',
      items: [
        'documentation/overview',
        'documentation/docusaurus-setup',
        'documentation/content-strategy',
        'documentation/customer-resources',
        'documentation/maintenance',
      ],
    },
    {
      type: 'category',
      label: 'Development Workflow',
      items: [
        'development/overview',
        'development/cursor-integration',
        'development/code-samples',
        'development/deployment',
        'development/testing',
        'development/maintenance',
      ],
    },
  ],
};

module.exports = sidebars; 