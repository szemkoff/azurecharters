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
      label: 'Resources',
      items: [
        'resources/templates',
      ],
    },
  ],
};

module.exports = sidebars; 