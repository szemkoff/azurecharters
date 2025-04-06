"use strict";(self.webpackChunkcharter_framework=self.webpackChunkcharter_framework||[]).push([[6389],{6755:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(4848),r=t(8453);const i={},a="Cursor IDE Integration",o={id:"development/cursor-integration",title:"Cursor IDE Integration",description:"This guide details how to use Cursor IDE to enhance your charter website development process, from creating custom code to maintaining and optimizing your site.",source:"@site/docs/development/cursor-integration.md",sourceDirName:"development",slug:"/development/cursor-integration",permalink:"/azurecharters/docs/development/cursor-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/szemkoff/azurecharters/tree/main/docs/development/cursor-integration.md",tags:[],version:"current",frontMatter:{},sidebar:"frameworkSidebar",previous:{title:"Lead Magnets for Charter Businesses",permalink:"/azurecharters/docs/client-funnel/lead-magnets"},next:{title:"Code Samples",permalink:"/azurecharters/docs/development/code-samples"}},c={},l=[{value:"Why Use Cursor IDE for Charter Website Development",id:"why-use-cursor-ide-for-charter-website-development",level:2},{value:"Setting Up Cursor for Charter Development",id:"setting-up-cursor-for-charter-development",level:2},{value:"Installation and Configuration",id:"installation-and-configuration",level:3},{value:"AI-Assisted Charter Website Development",id:"ai-assisted-charter-website-development",level:2},{value:"Code Generation for Charter Components",id:"code-generation-for-charter-components",level:3},{value:"Cursor-Specific Commands for Charter Development",id:"cursor-specific-commands-for-charter-development",level:3},{value:"Tilda Integration with Cursor",id:"tilda-integration-with-cursor",level:2},{value:"Working with Tilda&#39;s Code Editor",id:"working-with-tildas-code-editor",level:3},{value:"Example: Creating a Custom Yacht Search Component",id:"example-creating-a-custom-yacht-search-component",level:3},{value:"Advanced Development Tasks",id:"advanced-development-tasks",level:2},{value:"Creating a Yacht Availability System",id:"creating-a-yacht-availability-system",level:3},{value:"Integrating with External APIs",id:"integrating-with-external-apis",level:2},{value:"Booking System Integration",id:"booking-system-integration",level:3},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"Image Optimization Script",id:"image-optimization-script",level:3},{value:"Best Practices for Charter Website Development",id:"best-practices-for-charter-website-development",level:2},{value:"Code Structure",id:"code-structure",level:3},{value:"Documentation Practices",id:"documentation-practices",level:3},{value:"Next Steps",id:"next-steps",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"cursor-ide-integration",children:"Cursor IDE Integration"}),"\n",(0,s.jsx)(e.p,{children:"This guide details how to use Cursor IDE to enhance your charter website development process, from creating custom code to maintaining and optimizing your site."}),"\n",(0,s.jsx)(e.h2,{id:"why-use-cursor-ide-for-charter-website-development",children:"Why Use Cursor IDE for Charter Website Development"}),"\n",(0,s.jsx)(e.p,{children:"Cursor IDE provides several advantages for charter website development:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"AI-Powered Development"}),": Generate custom code with AI assistance"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Charter-Specific Templates"}),": Quickly implement common charter website components"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"API Integration Expertise"}),": Easily connect to booking systems and other services"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Collaborative Editing"}),": Work with team members in real-time"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Version Control"}),": Track changes and maintain code quality"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Performance Optimization"}),": Identify and fix performance issues"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"setting-up-cursor-for-charter-development",children:"Setting Up Cursor for Charter Development"}),"\n",(0,s.jsx)(e.h3,{id:"installation-and-configuration",children:"Installation and Configuration"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Download and Install Cursor"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Download from ",(0,s.jsx)(e.a,{href:"https://cursor.sh",children:"cursor.sh"})]}),"\n",(0,s.jsx)(e.li,{children:"Install on your development machine"}),"\n",(0,s.jsx)(e.li,{children:"Launch and complete initial setup"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Configure for Charter Development"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Set up a dedicated project folder for your charter website"}),"\n",(0,s.jsx)(e.li,{children:"Initialize a Git repository for version control"}),"\n",(0,s.jsx)(e.li,{children:"Configure linting rules for HTML, CSS, and JavaScript"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Connect to Version Control"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'# Initialize Git repository\ngit init\n\n# Add remote repository\ngit remote add origin https://github.com/yourusername/charter-website.git\n\n# Create initial commit\ngit add .\ngit commit -m "Initial charter website setup"\ngit push -u origin main\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"ai-assisted-charter-website-development",children:"AI-Assisted Charter Website Development"}),"\n",(0,s.jsx)(e.h3,{id:"code-generation-for-charter-components",children:"Code Generation for Charter Components"}),"\n",(0,s.jsx)(e.p,{children:"Use Cursor's AI capabilities to generate charter-specific components:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Create a Prompt for Yacht Search"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"Create a yacht search filter component with these filters:\n- Yacht size (30-50ft, 50-80ft, 80-100ft, 100ft+)\n- Yacht type (Motor, Sailing, Catamaran)\n- Destination (Mediterranean, Caribbean, Asia Pacific)\n- Price range (Under $10k, $10k-$20k, $20k-$50k, $50k+)\n- Number of guests (2-6, 6-10, 10-12, 12+)\n- Include a submit button and reset filters button\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Generate Yacht Listing Grid"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'Create a responsive grid layout for yacht listings with:\n- Featured image with optional "Featured" badge\n- Yacht name and brief description\n- Key specifications (length, guests, cabins)\n- Price display (per week)\n- "View Details" button\n- Make it responsive for mobile, tablet, and desktop\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Create Yacht Details Layout"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"Design a yacht details page layout with:\n- Image gallery/slider at the top\n- Yacht name and key features\n- Tab navigation for: Overview, Specifications, Amenities, Crew, Calendar\n- Pricing calculator\n- Inquiry form\n- Similar yachts section\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"cursor-specific-commands-for-charter-development",children:"Cursor-Specific Commands for Charter Development"}),"\n",(0,s.jsx)(e.p,{children:"Use these Cursor keyboard shortcuts to accelerate development:"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Command"}),(0,s.jsx)(e.th,{children:"Windows/Linux"}),(0,s.jsx)(e.th,{children:"Mac"}),(0,s.jsx)(e.th,{children:"Use Case"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"AI Complete"}),(0,s.jsx)(e.td,{children:"Alt+\\"}),(0,s.jsx)(e.td,{children:"Option+\\"}),(0,s.jsx)(e.td,{children:"Complete code snippets for yacht filters"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Chat with AI"}),(0,s.jsx)(e.td,{children:"Ctrl+L"}),(0,s.jsx)(e.td,{children:"Cmd+L"}),(0,s.jsx)(e.td,{children:"Ask about implementing yacht search functionality"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Explain Code"}),(0,s.jsx)(e.td,{children:"Alt+/"}),(0,s.jsx)(e.td,{children:"Option+/"}),(0,s.jsx)(e.td,{children:"Understand complex booking system integration"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Search Files"}),(0,s.jsx)(e.td,{children:"Ctrl+P"}),(0,s.jsx)(e.td,{children:"Cmd+P"}),(0,s.jsx)(e.td,{children:"Navigate between yacht templates quickly"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Command Palette"}),(0,s.jsx)(e.td,{children:"Ctrl+Shift+P"}),(0,s.jsx)(e.td,{children:"Cmd+Shift+P"}),(0,s.jsx)(e.td,{children:"Access all Cursor features"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"tilda-integration-with-cursor",children:"Tilda Integration with Cursor"}),"\n",(0,s.jsx)(e.p,{children:"Use Cursor to develop custom code for your Tilda charter website:"}),"\n",(0,s.jsx)(e.h3,{id:"working-with-tildas-code-editor",children:"Working with Tilda's Code Editor"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Export Tilda Code"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"In Tilda, navigate to your page"}),"\n",(0,s.jsx)(e.li,{children:'Click "Export" in page settings'}),"\n",(0,s.jsx)(e.li,{children:"Download the HTML/CSS/JS files"}),"\n",(0,s.jsx)(e.li,{children:"Import them into Cursor for editing"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Develop Custom Components"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Use Cursor to develop custom Tilda Zero Blocks"}),"\n",(0,s.jsx)(e.li,{children:"Test locally before integrating with Tilda"}),"\n",(0,s.jsx)(e.li,{children:"Use version control to track changes"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Importing Code Back to Tilda"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Use Tilda's Code Editor (in Zero Block)"}),"\n",(0,s.jsx)(e.li,{children:"Copy your refined code from Cursor"}),"\n",(0,s.jsx)(e.li,{children:"Paste into the appropriate sections in Tilda"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"example-creating-a-custom-yacht-search-component",children:"Example: Creating a Custom Yacht Search Component"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"// @cursor-generated\n/**\n * Advanced Yacht Search Component for Tilda\n * This component allows filtering yachts by multiple criteria\n */\n\n// Configuration\nconst YACHT_CONFIG = {\n  // API endpoint for yacht data (change this to your actual endpoint)\n  apiEndpoint: '/yachts.json',\n  \n  // Filter definitions\n  filters: {\n    sizes: ['30-50ft', '50-80ft', '80-100ft', '100ft+'],\n    types: ['Motor Yacht', 'Sailing Yacht', 'Catamaran', 'Gulet'],\n    destinations: ['Mediterranean', 'Caribbean', 'Asia Pacific', 'Other'],\n    priceRanges: ['Under $10,000', '$10,000 - $20,000', '$20,000 - $50,000', 'Over $50,000'],\n    guestCounts: ['2-6', '6-10', '10-12', '12+']\n  },\n  \n  // Selectors\n  selectors: {\n    container: '.yacht-search-container',\n    filterForm: '.yacht-filter-form',\n    resultsContainer: '.yacht-results-container',\n    countDisplay: '.results-count',\n    filterFields: {\n      size: '#filter-size',\n      type: '#filter-type',\n      destination: '#filter-destination',\n      price: '#filter-price',\n      guests: '#filter-guests'\n    },\n    submitButton: '.search-submit',\n    resetButton: '.search-reset'\n  }\n};\n\n// Main yacht search class\nclass YachtSearch {\n  constructor(config) {\n    this.config = config;\n    this.yachts = [];\n    this.filteredYachts = [];\n    this.container = document.querySelector(config.selectors.container);\n    \n    if (!this.container) {\n      console.error('Yacht search container not found');\n      return;\n    }\n    \n    this.initialize();\n  }\n  \n  async initialize() {\n    // Fetch yacht data\n    await this.fetchYachts();\n    \n    // Set up event listeners\n    this.setupEventListeners();\n    \n    // Initial render\n    this.renderResults(this.yachts);\n  }\n  \n  async fetchYachts() {\n    try {\n      const response = await fetch(this.config.apiEndpoint);\n      if (!response.ok) {\n        throw new Error('Failed to fetch yacht data');\n      }\n      \n      this.yachts = await response.json();\n      this.filteredYachts = [...this.yachts];\n      \n    } catch (error) {\n      console.error('Error fetching yacht data:', error);\n      // Use sample data as fallback\n      this.yachts = this.getSampleYachts();\n      this.filteredYachts = [...this.yachts];\n    }\n  }\n  \n  getSampleYachts() {\n    // Sample yacht data for testing\n    return [\n      {\n        id: 'yacht1',\n        name: 'Azure Dream',\n        type: 'Motor Yacht',\n        size: '80-100ft',\n        length: '85ft',\n        guests: 8,\n        cabins: 4,\n        destination: 'Mediterranean',\n        price: 35000,\n        priceRange: '$20,000 - $50,000',\n        guestCount: '6-10',\n        image: 'https://example.com/yachts/azure-dream.jpg',\n        featured: true\n      },\n      // Add more sample yachts here\n    ];\n  }\n  \n  setupEventListeners() {\n    const form = this.container.querySelector(this.config.selectors.filterForm);\n    const submitBtn = this.container.querySelector(this.config.selectors.submitButton);\n    const resetBtn = this.container.querySelector(this.config.selectors.resetButton);\n    \n    if (form) {\n      form.addEventListener('submit', (e) => {\n        e.preventDefault();\n        this.applyFilters();\n      });\n    }\n    \n    if (submitBtn) {\n      submitBtn.addEventListener('click', () => {\n        this.applyFilters();\n      });\n    }\n    \n    if (resetBtn) {\n      resetBtn.addEventListener('click', () => {\n        this.resetFilters();\n      });\n    }\n  }\n  \n  applyFilters() {\n    const filters = this.getFilterValues();\n    \n    this.filteredYachts = this.yachts.filter(yacht => {\n      let matches = true;\n      \n      // Check each filter\n      if (filters.size && yacht.size !== filters.size) {\n        matches = false;\n      }\n      \n      if (filters.type && yacht.type !== filters.type) {\n        matches = false;\n      }\n      \n      if (filters.destination && yacht.destination !== filters.destination) {\n        matches = false;\n      }\n      \n      if (filters.priceRange && yacht.priceRange !== filters.priceRange) {\n        matches = false;\n      }\n      \n      if (filters.guestCount && yacht.guestCount !== filters.guestCount) {\n        matches = false;\n      }\n      \n      return matches;\n    });\n    \n    this.renderResults(this.filteredYachts);\n  }\n  \n  getFilterValues() {\n    const selectors = this.config.selectors.filterFields;\n    \n    return {\n      size: this.getSelectValue(selectors.size),\n      type: this.getSelectValue(selectors.type),\n      destination: this.getSelectValue(selectors.destination),\n      priceRange: this.getSelectValue(selectors.price),\n      guestCount: this.getSelectValue(selectors.guests)\n    };\n  }\n  \n  getSelectValue(selector) {\n    const element = this.container.querySelector(selector);\n    return element ? element.value : '';\n  }\n  \n  resetFilters() {\n    const selectors = this.config.selectors.filterFields;\n    \n    // Reset all select elements\n    Object.values(selectors).forEach(selector => {\n      const element = this.container.querySelector(selector);\n      if (element) {\n        element.selectedIndex = 0;\n      }\n    });\n    \n    // Reset results to show all yachts\n    this.filteredYachts = [...this.yachts];\n    this.renderResults(this.filteredYachts);\n  }\n  \n  renderResults(yachts) {\n    const resultsContainer = this.container.querySelector(this.config.selectors.resultsContainer);\n    const countDisplay = this.container.querySelector(this.config.selectors.countDisplay);\n    \n    if (!resultsContainer) {\n      console.error('Results container not found');\n      return;\n    }\n    \n    // Update count display\n    if (countDisplay) {\n      countDisplay.textContent = `${yachts.length} yachts found`;\n    }\n    \n    // Generate HTML for yacht cards\n    resultsContainer.innerHTML = yachts.map(yacht => this.generateYachtCard(yacht)).join('');\n  }\n  \n  generateYachtCard(yacht) {\n    return `\n      <div class=\"yacht-card\" data-id=\"${yacht.id}\">\n        <div class=\"yacht-card-image\">\n          <img src=\"${yacht.image}\" alt=\"${yacht.name}\">\n          ${yacht.featured ? '<span class=\"featured-badge\">Featured</span>' : ''}\n        </div>\n        <div class=\"yacht-card-content\">\n          <h3 class=\"yacht-name\">${yacht.name}</h3>\n          <div class=\"yacht-specs\">\n            <span class=\"spec\"><i class=\"icon-ruler\"></i> ${yacht.length}</span>\n            <span class=\"spec\"><i class=\"icon-user\"></i> ${yacht.guests} Guests</span>\n            <span class=\"spec\"><i class=\"icon-bed\"></i> ${yacht.cabins} Cabins</span>\n          </div>\n          <div class=\"yacht-price\">\n            <span class=\"price-label\">From</span>\n            <span class=\"price-value\">$${yacht.price.toLocaleString()}</span>\n            <span class=\"price-period\">/ week</span>\n          </div>\n          <a href=\"/yacht/${yacht.id}\" class=\"view-details-btn\">View Details</a>\n        </div>\n      </div>\n    `;\n  }\n}\n\n// Initialize on document ready\ndocument.addEventListener('DOMContentLoaded', () => {\n  new YachtSearch(YACHT_CONFIG);\n});\n"})}),"\n",(0,s.jsx)(e.h2,{id:"advanced-development-tasks",children:"Advanced Development Tasks"}),"\n",(0,s.jsx)(e.h3,{id:"creating-a-yacht-availability-system",children:"Creating a Yacht Availability System"}),"\n",(0,s.jsx)(e.p,{children:"Use Cursor to develop a yacht availability calendar that connects with your booking system:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"// @cursor-generated\n/**\n * Yacht Availability Calendar\n * This component displays a calendar showing yacht availability and allows booking requests\n */\nclass YachtAvailabilityCalendar {\n  constructor(config) {\n    this.yachtId = config.yachtId;\n    this.containerId = config.containerId;\n    this.apiEndpoint = config.apiEndpoint;\n    this.container = document.getElementById(this.containerId);\n    this.currentDate = new Date();\n    this.currentMonth = this.currentDate.getMonth();\n    this.currentYear = this.currentDate.getFullYear();\n    this.availabilityData = [];\n    \n    this.init();\n  }\n  \n  async init() {\n    if (!this.container) {\n      console.error('Calendar container not found');\n      return;\n    }\n    \n    await this.fetchAvailability();\n    this.renderCalendar();\n    this.setupEventListeners();\n  }\n  \n  async fetchAvailability() {\n    try {\n      const response = await fetch(`${this.apiEndpoint}/availability/${this.yachtId}`);\n      if (!response.ok) {\n        throw new Error('Failed to fetch availability data');\n      }\n      \n      this.availabilityData = await response.json();\n    } catch (error) {\n      console.error('Error fetching availability:', error);\n      // Use sample data as fallback\n      this.availabilityData = this.getSampleAvailability();\n    }\n  }\n  \n  getSampleAvailability() {\n    // Sample availability data for testing\n    const data = {};\n    const today = new Date();\n    \n    // Set some random dates as booked\n    for (let i = 1; i <= 28; i++) {\n      const date = new Date(today.getFullYear(), today.getMonth(), i);\n      const dateString = this.formatDate(date);\n      \n      // Randomly assign status\n      const rand = Math.random();\n      let status;\n      \n      if (rand < 0.2) {\n        status = 'booked';\n      } else if (rand < 0.3) {\n        status = 'option';\n      } else {\n        status = 'available';\n      }\n      \n      data[dateString] = status;\n    }\n    \n    return data;\n  }\n  \n  formatDate(date) {\n    const year = date.getFullYear();\n    const month = (date.getMonth() + 1).toString().padStart(2, '0');\n    const day = date.getDate().toString().padStart(2, '0');\n    return `${year}-${month}-${day}`;\n  }\n  \n  renderCalendar() {\n    // Create calendar header\n    const calendarHeader = this.createCalendarHeader();\n    \n    // Create calendar grid\n    const calendarGrid = this.createCalendarGrid();\n    \n    // Create booking form\n    const bookingForm = this.createBookingForm();\n    \n    // Combine everything\n    this.container.innerHTML = `\n      <div class=\"yacht-calendar-wrapper\">\n        ${calendarHeader}\n        ${calendarGrid}\n        ${bookingForm}\n      </div>\n    `;\n  }\n  \n  createCalendarHeader() {\n    const monthNames = [\n      'January', 'February', 'March', 'April', 'May', 'June',\n      'July', 'August', 'September', 'October', 'November', 'December'\n    ];\n    \n    return `\n      <div class=\"calendar-header\">\n        <button class=\"nav-btn prev-month\">&lt;</button>\n        <h3 class=\"current-month\">${monthNames[this.currentMonth]} ${this.currentYear}</h3>\n        <button class=\"nav-btn next-month\">&gt;</button>\n      </div>\n    `;\n  }\n  \n  createCalendarGrid() {\n    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();\n    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();\n    \n    let calendarDays = '';\n    \n    // Create day headers\n    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\n    const dayHeaders = dayNames.map(day => `<div class=\"calendar-day-header\">${day}</div>`).join('');\n    \n    // Add empty cells for days before the first day of the month\n    for (let i = 0; i < firstDayOfMonth; i++) {\n      calendarDays += '<div class=\"calendar-day empty\"></div>';\n    }\n    \n    // Add days of the month\n    for (let day = 1; day <= daysInMonth; day++) {\n      const date = new Date(this.currentYear, this.currentMonth, day);\n      const dateString = this.formatDate(date);\n      const status = this.availabilityData[dateString] || 'available';\n      \n      calendarDays += `\n        <div class=\"calendar-day status-${status}\" data-date=\"${dateString}\">\n          <span class=\"day-number\">${day}</span>\n        </div>\n      `;\n    }\n    \n    return `\n      <div class=\"calendar-grid\">\n        ${dayHeaders}\n        ${calendarDays}\n      </div>\n      <div class=\"calendar-legend\">\n        <div class=\"legend-item\"><span class=\"legend-color available\"></span> Available</div>\n        <div class=\"legend-item\"><span class=\"legend-color booked\"></span> Booked</div>\n        <div class=\"legend-item\"><span class=\"legend-color option\"></span> Option</div>\n      </div>\n    `;\n  }\n  \n  createBookingForm() {\n    return `\n      <div class=\"booking-form\">\n        <h4>Request Booking</h4>\n        <form id=\"yacht-booking-form\">\n          <div class=\"form-group\">\n            <label for=\"start-date\">Start Date</label>\n            <input type=\"date\" id=\"start-date\" name=\"start-date\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"end-date\">End Date</label>\n            <input type=\"date\" id=\"end-date\" name=\"end-date\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"guests\">Number of Guests</label>\n            <input type=\"number\" id=\"guests\" name=\"guests\" min=\"1\" required>\n          </div>\n          <button type=\"submit\" class=\"booking-submit\">Check Availability</button>\n        </form>\n      </div>\n    `;\n  }\n  \n  setupEventListeners() {\n    // Month navigation\n    const prevMonthBtn = this.container.querySelector('.prev-month');\n    const nextMonthBtn = this.container.querySelector('.next-month');\n    \n    if (prevMonthBtn) {\n      prevMonthBtn.addEventListener('click', () => {\n        this.navigateMonth(-1);\n      });\n    }\n    \n    if (nextMonthBtn) {\n      nextMonthBtn.addEventListener('click', () => {\n        this.navigateMonth(1);\n      });\n    }\n    \n    // Booking form submission\n    const bookingForm = this.container.querySelector('#yacht-booking-form');\n    \n    if (bookingForm) {\n      bookingForm.addEventListener('submit', (e) => {\n        e.preventDefault();\n        this.handleBookingRequest();\n      });\n    }\n  }\n  \n  navigateMonth(direction) {\n    this.currentMonth += direction;\n    \n    if (this.currentMonth < 0) {\n      this.currentMonth = 11;\n      this.currentYear--;\n    } else if (this.currentMonth > 11) {\n      this.currentMonth = 0;\n      this.currentYear++;\n    }\n    \n    this.renderCalendar();\n    this.setupEventListeners();\n  }\n  \n  handleBookingRequest() {\n    const startDateInput = this.container.querySelector('#start-date');\n    const endDateInput = this.container.querySelector('#end-date');\n    const guestsInput = this.container.querySelector('#guests');\n    \n    if (!startDateInput || !endDateInput || !guestsInput) {\n      console.error('Form inputs not found');\n      return;\n    }\n    \n    const startDate = startDateInput.value;\n    const endDate = endDateInput.value;\n    const guests = guestsInput.value;\n    \n    // Validate dates\n    if (new Date(startDate) >= new Date(endDate)) {\n      alert('End date must be after start date');\n      return;\n    }\n    \n    // Check availability for the selected date range\n    const isAvailable = this.checkDateRangeAvailability(startDate, endDate);\n    \n    if (!isAvailable) {\n      alert('Sorry, the yacht is not available for the selected dates');\n      return;\n    }\n    \n    // Submit booking request\n    this.submitBookingRequest(startDate, endDate, guests);\n  }\n  \n  checkDateRangeAvailability(startDate, endDate) {\n    const start = new Date(startDate);\n    const end = new Date(endDate);\n    \n    for (let day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {\n      const dateString = this.formatDate(day);\n      const status = this.availabilityData[dateString];\n      \n      if (status === 'booked') {\n        return false;\n      }\n    }\n    \n    return true;\n  }\n  \n  async submitBookingRequest(startDate, endDate, guests) {\n    try {\n      const response = await fetch(`${this.apiEndpoint}/booking-request`, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          yachtId: this.yachtId,\n          startDate,\n          endDate,\n          guests\n        })\n      });\n      \n      if (!response.ok) {\n        throw new Error('Failed to submit booking request');\n      }\n      \n      const result = await response.json();\n      \n      // Show success message\n      alert('Your booking request has been submitted successfully! Reference: ' + result.bookingId);\n      \n    } catch (error) {\n      console.error('Error submitting booking request:', error);\n      alert('There was an error submitting your booking request. Please try again or contact us directly.');\n    }\n  }\n}\n\n// Usage example\ndocument.addEventListener('DOMContentLoaded', () => {\n  new YachtAvailabilityCalendar({\n    yachtId: 'yacht-123',\n    containerId: 'availability-calendar',\n    apiEndpoint: 'https://api.example.com/yachts'\n  });\n});\n"})}),"\n",(0,s.jsx)(e.h2,{id:"integrating-with-external-apis",children:"Integrating with External APIs"}),"\n",(0,s.jsx)(e.h3,{id:"booking-system-integration",children:"Booking System Integration"}),"\n",(0,s.jsx)(e.p,{children:"Develop a connection between your Tilda site and a yacht booking system:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"// @cursor-generated\n/**\n * Booking System Integration\n * Connects Tilda forms with external booking systems\n */\nclass BookingSystemIntegration {\n  constructor(config) {\n    this.apiKey = config.apiKey;\n    this.apiEndpoint = config.apiEndpoint;\n    this.formSelector = config.formSelector;\n    \n    this.init();\n  }\n  \n  init() {\n    const bookingForms = document.querySelectorAll(this.formSelector);\n    \n    if (bookingForms.length === 0) {\n      console.warn('No booking forms found on the page');\n      return;\n    }\n    \n    bookingForms.forEach(form => {\n      form.addEventListener('submit', (e) => {\n        e.preventDefault();\n        this.handleFormSubmission(form);\n      });\n    });\n  }\n  \n  async handleFormSubmission(form) {\n    // Show loading state\n    this.setFormLoading(form, true);\n    \n    // Collect form data\n    const formData = new FormData(form);\n    const bookingData = this.processFormData(formData);\n    \n    try {\n      // Send data to booking system\n      const response = await this.sendToBookingSystem(bookingData);\n      \n      // Handle successful booking\n      this.handleSuccessfulBooking(form, response);\n      \n    } catch (error) {\n      // Handle booking error\n      this.handleBookingError(form, error);\n    } finally {\n      // Reset loading state\n      this.setFormLoading(form, false);\n    }\n  }\n  \n  processFormData(formData) {\n    // Extract and format booking data\n    return {\n      yachtId: formData.get('yacht-id'),\n      startDate: formData.get('start-date'),\n      endDate: formData.get('end-date'),\n      guestCount: parseInt(formData.get('guests'), 10),\n      customerInfo: {\n        name: formData.get('customer-name'),\n        email: formData.get('customer-email'),\n        phone: formData.get('customer-phone')\n      },\n      specialRequests: formData.get('special-requests') || '',\n      timestamp: new Date().toISOString()\n    };\n  }\n  \n  async sendToBookingSystem(bookingData) {\n    const response = await fetch(this.apiEndpoint, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Authorization': `Bearer ${this.apiKey}`\n      },\n      body: JSON.stringify(bookingData)\n    });\n    \n    if (!response.ok) {\n      const errorData = await response.json();\n      throw new Error(errorData.message || 'Failed to create booking');\n    }\n    \n    return await response.json();\n  }\n  \n  setFormLoading(form, isLoading) {\n    const submitButton = form.querySelector('button[type=\"submit\"]');\n    \n    if (!submitButton) {\n      return;\n    }\n    \n    if (isLoading) {\n      submitButton.disabled = true;\n      submitButton.dataset.originalText = submitButton.textContent;\n      submitButton.textContent = 'Processing...';\n      form.classList.add('loading');\n    } else {\n      submitButton.disabled = false;\n      submitButton.textContent = submitButton.dataset.originalText || 'Submit';\n      form.classList.remove('loading');\n    }\n  }\n  \n  handleSuccessfulBooking(form, response) {\n    // Hide the form\n    form.classList.add('hidden');\n    \n    // Show success message\n    const successMessage = document.createElement('div');\n    successMessage.className = 'booking-success';\n    successMessage.innerHTML = `\n      <h3>Thank You for Your Booking Request!</h3>\n      <p>Your booking reference is: <strong>${response.bookingId}</strong></p>\n      <p>We will contact you shortly to confirm your charter details.</p>\n    `;\n    \n    form.parentNode.insertBefore(successMessage, form.nextSibling);\n    \n    // Scroll to success message\n    successMessage.scrollIntoView({ behavior: 'smooth' });\n  }\n  \n  handleBookingError(form, error) {\n    // Create or update error message\n    let errorMessage = form.querySelector('.booking-error');\n    \n    if (!errorMessage) {\n      errorMessage = document.createElement('div');\n      errorMessage.className = 'booking-error';\n      form.prepend(errorMessage);\n    }\n    \n    errorMessage.textContent = error.message || 'There was an error processing your booking. Please try again or contact us directly.';\n    \n    // Scroll to error message\n    errorMessage.scrollIntoView({ behavior: 'smooth' });\n  }\n}\n\n// Usage example\ndocument.addEventListener('DOMContentLoaded', () => {\n  new BookingSystemIntegration({\n    apiKey: 'your-booking-system-api-key',\n    apiEndpoint: 'https://api.booking-system.com/bookings',\n    formSelector: '.yacht-booking-form'\n  });\n});\n"})}),"\n",(0,s.jsx)(e.h2,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,s.jsx)(e.p,{children:"Use Cursor to identify and fix performance issues:"}),"\n",(0,s.jsx)(e.h3,{id:"image-optimization-script",children:"Image Optimization Script"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"// @cursor-generated\n/**\n * Yacht Image Optimization\n * Optimizes yacht images for better performance\n */\n\nconst fs = require('fs');\nconst path = require('path');\nconst sharp = require('sharp');\n\n// Configuration\nconst config = {\n  inputDir: './original-images',\n  outputDir: './optimized-images',\n  sizes: {\n    thumbnail: 300,\n    medium: 800,\n    large: 1600,\n    full: 2000\n  },\n  quality: 80,\n  formats: ['webp', 'jpg']\n};\n\n// Create output directory if it doesn't exist\nif (!fs.existsSync(config.outputDir)) {\n  fs.mkdirSync(config.outputDir, { recursive: true });\n}\n\n// Process each size directory\nObject.keys(config.sizes).forEach(size => {\n  const sizeDir = path.join(config.outputDir, size);\n  if (!fs.existsSync(sizeDir)) {\n    fs.mkdirSync(sizeDir, { recursive: true });\n  }\n  \n  // Create format directories within size directory\n  config.formats.forEach(format => {\n    const formatDir = path.join(sizeDir, format);\n    if (!fs.existsSync(formatDir)) {\n      fs.mkdirSync(formatDir, { recursive: true });\n    }\n  });\n});\n\n// Process images\nasync function processImages() {\n  try {\n    const files = fs.readdirSync(config.inputDir);\n    \n    console.log(`Found ${files.length} images to process`);\n    \n    for (const file of files) {\n      const inputPath = path.join(config.inputDir, file);\n      const fileStats = fs.statSync(inputPath);\n      \n      // Skip directories\n      if (fileStats.isDirectory()) {\n        continue;\n      }\n      \n      // Check if file is an image\n      const ext = path.extname(file).toLowerCase();\n      if (!['.jpg', '.jpeg', '.png'].includes(ext)) {\n        console.log(`Skipping non-image file: ${file}`);\n        continue;\n      }\n      \n      const fileName = path.basename(file, ext);\n      \n      console.log(`Processing image: ${file}`);\n      \n      // Process each size and format\n      for (const [sizeName, width] of Object.entries(config.sizes)) {\n        for (const format of config.formats) {\n          const outputPath = path.join(\n            config.outputDir,\n            sizeName,\n            format,\n            `${fileName}.${format}`\n          );\n          \n          try {\n            await sharp(inputPath)\n              .resize(width, null, { withoutEnlargement: true })\n              [format]({ quality: config.quality })\n              .toFile(outputPath);\n            \n            console.log(`Created ${sizeName} ${format}: ${outputPath}`);\n          } catch (error) {\n            console.error(`Error processing ${file} to ${sizeName} ${format}:`, error);\n          }\n        }\n      }\n    }\n    \n    console.log('Image processing completed');\n  } catch (error) {\n    console.error('Error processing images:', error);\n  }\n}\n\n// Run the process\nprocessImages();\n"})}),"\n",(0,s.jsx)(e.h2,{id:"best-practices-for-charter-website-development",children:"Best Practices for Charter Website Development"}),"\n",(0,s.jsx)(e.h3,{id:"code-structure",children:"Code Structure"}),"\n",(0,s.jsx)(e.p,{children:"Organize your charter website code in Cursor with this structure:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"charter-website/\n\u251c\u2500\u2500 components/\n\u2502   \u251c\u2500\u2500 yacht-search/\n\u2502   \u2502   \u251c\u2500\u2500 index.js\n\u2502   \u2502   \u251c\u2500\u2500 filters.js\n\u2502   \u2502   \u2514\u2500\u2500 results.js\n\u2502   \u251c\u2500\u2500 yacht-details/\n\u2502   \u2502   \u251c\u2500\u2500 index.js\n\u2502   \u2502   \u251c\u2500\u2500 gallery.js\n\u2502   \u2502   \u251c\u2500\u2500 specifications.js\n\u2502   \u2502   \u2514\u2500\u2500 booking-form.js\n\u2502   \u2514\u2500\u2500 common/\n\u2502       \u251c\u2500\u2500 header.js\n\u2502       \u251c\u2500\u2500 footer.js\n\u2502       \u2514\u2500\u2500 contact-form.js\n\u251c\u2500\u2500 utils/\n\u2502   \u251c\u2500\u2500 api.js\n\u2502   \u251c\u2500\u2500 formatters.js\n\u2502   \u2514\u2500\u2500 validation.js\n\u251c\u2500\u2500 styles/\n\u2502   \u251c\u2500\u2500 main.css\n\u2502   \u251c\u2500\u2500 yacht-search.css\n\u2502   \u2514\u2500\u2500 yacht-details.css\n\u2514\u2500\u2500 assets/\n    \u251c\u2500\u2500 images/\n    \u251c\u2500\u2500 icons/\n    \u2514\u2500\u2500 fonts/\n"})}),"\n",(0,s.jsx)(e.h3,{id:"documentation-practices",children:"Documentation Practices"}),"\n",(0,s.jsx)(e.p,{children:"Document your charter website code with these conventions:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"/**\n * YachtSearch Component\n * \n * @description Creates a filterable search interface for yacht charters\n * @version 1.2.0\n * @author Your Name\n * \n * @param {Object} config - Configuration options\n * @param {string} config.containerId - ID of the container element\n * @param {string} config.apiEndpoint - API endpoint for yacht data\n * @param {Object} config.filters - Filter configuration\n * \n * @example\n * const yachtSearch = new YachtSearch({\n *   containerId: 'yacht-search',\n *   apiEndpoint: '/api/yachts',\n *   filters: {\n *     destinations: ['Mediterranean', 'Caribbean']\n *   }\n * });\n */\n"})}),"\n",(0,s.jsx)(e.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(e.p,{children:"To leverage Cursor for your charter website development:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://cursor.sh",children:"Download and install Cursor"})}),"\n",(0,s.jsx)(e.li,{children:"Clone this framework repository"}),"\n",(0,s.jsxs)(e.li,{children:["Explore the ",(0,s.jsx)(e.a,{href:"./code-samples",children:"code samples"})," section"]}),"\n",(0,s.jsxs)(e.li,{children:["Watch our ",(0,s.jsx)(e.a,{href:"https://www.example.com/cursor-tutorials",children:"Cursor tutorial videos"})]}),"\n",(0,s.jsxs)(e.li,{children:["Join our ",(0,s.jsx)(e.a,{href:"https://discord.gg/azureyachtgroup",children:"developer community"})," for assistance"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}}}]);