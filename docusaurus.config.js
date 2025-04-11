// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Azure Yacht Group Framework',
  tagline: 'Complete Charter Business Framework',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://szemkoff.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/azurecharters/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'szemkoff', // Usually your GitHub org/user name.
  projectName: 'azurecharters', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Add Mermaid support
  markdown: {
    mermaid: true,
  },
  
  // Add Mermaid theme
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/szemkoff/azurecharters/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/szemkoff/azurecharters/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/azure-yacht-social-card.jpg',
      // Add Mermaid configuration
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
        options: {
          flowchart: {
            curve: 'linear',
          },
        },
      },
      navbar: {
        title: 'Azure Yacht Group',
        logo: {
          alt: 'Azure Yacht Group Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'frameworkSidebar',
            position: 'left',
            label: 'Framework',
          },
          {
            href: 'https://github.com/szemkoff/azurecharters',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Framework',
                to: '/docs/intro',
              },
              {
                label: 'Tilda Integration',
                to: '/docs/website-architecture/tilda-integration',
              },
              {
                label: 'Client Funnel',
                to: '/docs/client-funnel/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/azure-yacht-group',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/azureyachtgroup',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/azureyachtgroup',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/szemkoff/azurecharters',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Azure Yacht Group. Built with Docusaurus.`,
      },
      prism: {
        theme: {
          plain: {
            color: '#393A34',
            backgroundColor: '#f6f8fa',
          },
          styles: [
            {
              types: ['comment', 'prolog', 'doctype', 'cdata'],
              style: {
                color: '#999988',
                fontStyle: 'italic',
              },
            },
            {
              types: ['namespace'],
              style: {
                opacity: 0.7,
              },
            },
            {
              types: ['string', 'attr-value'],
              style: {
                color: '#e3116c',
              },
            },
            {
              types: ['punctuation', 'operator'],
              style: {
                color: '#393A34',
              },
            },
            {
              types: [
                'entity',
                'url',
                'symbol',
                'number',
                'boolean',
                'variable',
                'constant',
                'property',
                'regex',
                'inserted',
              ],
              style: {
                color: '#36acaa',
              },
            },
            {
              types: ['atrule', 'keyword', 'attr-name', 'selector'],
              style: {
                color: '#00a4db',
              },
            },
            {
              types: ['function', 'deleted', 'tag'],
              style: {
                color: '#d73a49',
              },
            },
            {
              types: ['function-variable'],
              style: {
                color: '#6f42c1',
              },
            },
            {
              types: ['tag', 'selector', 'keyword'],
              style: {
                color: '#00009f',
              },
            },
          ],
        },
        darkTheme: {
          plain: {
            color: '#F8F8F2',
            backgroundColor: '#282A36',
          },
          styles: [
            {
              types: ['prolog', 'constant', 'builtin'],
              style: {
                color: 'rgb(189, 147, 249)',
              },
            },
            {
              types: ['inserted', 'function'],
              style: {
                color: 'rgb(80, 250, 123)',
              },
            },
            {
              types: ['deleted'],
              style: {
                color: 'rgb(255, 85, 85)',
              },
            },
            {
              types: ['changed'],
              style: {
                color: 'rgb(255, 184, 108)',
              },
            },
            {
              types: ['punctuation', 'symbol'],
              style: {
                color: 'rgb(248, 248, 242)',
              },
            },
            {
              types: ['string', 'char', 'tag', 'selector'],
              style: {
                color: 'rgb(255, 121, 198)',
              },
            },
            {
              types: ['keyword', 'variable'],
              style: {
                color: 'rgb(189, 147, 249)',
                fontStyle: 'italic',
              },
            },
            {
              types: ['comment'],
              style: {
                color: 'rgb(98, 114, 164)',
              },
            },
            {
              types: ['attr-name'],
              style: {
                color: 'rgb(241, 250, 140)',
              },
            },
          ],
        },
      },
    }),
};

export default config; 