"use strict";(self.webpackChunkcharter_framework=self.webpackChunkcharter_framework||[]).push([[5660],{4145:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=t(4848),a=t(8453);const s={},r="Tilda Integration",l={id:"website-architecture/tilda-integration",title:"Tilda Integration",description:"This guide covers the complete process of integrating Tilda as your charter business website platform, including setup, customization, and optimization for yacht charter businesses.",source:"@site/docs/website-architecture/tilda-integration.md",sourceDirName:"website-architecture",slug:"/website-architecture/tilda-integration",permalink:"/azurecharters/docs/website-architecture/tilda-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/szemkoff/azurecharters/tree/main/docs/website-architecture/tilda-integration.md",tags:[],version:"current",frontMatter:{},sidebar:"frameworkSidebar",previous:{title:"Deployment Plan",permalink:"/azurecharters/docs/website-architecture/deployment-plan"},next:{title:"Client Funnel Overview",permalink:"/azurecharters/docs/client-funnel/overview"}},c={},o=[{value:"Why Tilda for Charter Websites",id:"why-tilda-for-charter-websites",level:2},{value:"Account Setup &amp; Configuration",id:"account-setup--configuration",level:2},{value:"Recommended Plan",id:"recommended-plan",level:3},{value:"Initial Configuration",id:"initial-configuration",level:3},{value:"Website Structure Implementation",id:"website-structure-implementation",level:2},{value:"Zero Block Customization",id:"zero-block-customization",level:2},{value:"Yacht Search Filter Block",id:"yacht-search-filter-block",level:3},{value:"Yacht Availability Calendar Block",id:"yacht-availability-calendar-block",level:3},{value:"Custom JavaScript for Charter Functionality",id:"custom-javascript-for-charter-functionality",level:2},{value:"Yacht Filtering System",id:"yacht-filtering-system",level:3},{value:"Price Calculator",id:"price-calculator",level:3},{value:"API Integrations with Tilda",id:"api-integrations-with-tilda",level:2},{value:"Charter Booking System",id:"charter-booking-system",level:3},{value:"Tilda Forms for Charter Inquiries",id:"tilda-forms-for-charter-inquiries",level:2},{value:"Yacht Inquiry Form",id:"yacht-inquiry-form",level:3},{value:"Cursor IDE Integration with Tilda",id:"cursor-ide-integration-with-tilda",level:2},{value:"Example: Cursor-Generated Yacht Filter",id:"example-cursor-generated-yacht-filter",level:3},{value:"SEO Optimization for Charter Websites",id:"seo-optimization-for-charter-websites",level:2},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"Maintenance and Updates",id:"maintenance-and-updates",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tilda-integration",children:"Tilda Integration"}),"\n",(0,i.jsx)(n.p,{children:"This guide covers the complete process of integrating Tilda as your charter business website platform, including setup, customization, and optimization for yacht charter businesses."}),"\n",(0,i.jsx)(n.h2,{id:"why-tilda-for-charter-websites",children:"Why Tilda for Charter Websites"}),"\n",(0,i.jsx)(n.p,{children:"Tilda offers several advantages for yacht charter businesses:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Visual Design Flexibility"}),": Create stunning visual experiences showcasing luxury yachts"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Block-Based System"}),": Modular approach perfect for yacht listings and destination content"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Built-in Store"}),": Native support for yacht charter listings and bookings"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SEO-Friendly"}),": Strong search engine optimization capabilities"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Integration Capabilities"}),": Connects with CRM, email marketing, and booking systems"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Multilingual Support"}),": Essential for international charter clients"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"account-setup--configuration",children:"Account Setup & Configuration"}),"\n",(0,i.jsx)(n.h3,{id:"recommended-plan",children:"Recommended Plan"}),"\n",(0,i.jsxs)(n.p,{children:["For charter businesses, we recommend the ",(0,i.jsx)(n.strong,{children:"Tilda Business"})," plan for these critical features:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Custom domain support"}),"\n",(0,i.jsx)(n.li,{children:"E-commerce functionality"}),"\n",(0,i.jsx)(n.li,{children:"Export code capability"}),"\n",(0,i.jsx)(n.li,{children:"Form integrations"}),"\n",(0,i.jsx)(n.li,{children:"Custom JavaScript"}),"\n",(0,i.jsx)(n.li,{children:"Remove Tilda branding"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"initial-configuration",children:"Initial Configuration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Domain Setup"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Settings \u2192 Domain \u2192 Connect Custom Domain\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Project Structure"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create main project for your charter business"}),"\n",(0,i.jsx)(n.li,{children:"Create sub-projects for specific destinations or yacht categories"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Analytics Integration"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Settings \u2192 Analytics \u2192 Add Google Analytics, Facebook Pixel\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"User Permissions"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Settings \u2192 Team \u2192 Invite team members with specific roles\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"website-structure-implementation",children:"Website Structure Implementation"}),"\n",(0,i.jsx)(n.p,{children:"Create these essential pages for a charter business:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Page"}),(0,i.jsx)(n.th,{children:"Purpose"}),(0,i.jsx)(n.th,{children:"Key Elements"}),(0,i.jsx)(n.th,{children:"Template"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Home"}),(0,i.jsx)(n.td,{children:"First impression"}),(0,i.jsx)(n.td,{children:"Hero video, featured yachts, destinations"}),(0,i.jsx)(n.td,{children:"t123-home"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Fleet"}),(0,i.jsx)(n.td,{children:"Yacht listings"}),(0,i.jsx)(n.td,{children:"Search filters, yacht cards, inquiry CTAs"}),(0,i.jsx)(n.td,{children:"t123-catalog"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Yacht Detail"}),(0,i.jsx)(n.td,{children:"Individual yacht"}),(0,i.jsx)(n.td,{children:"Gallery, specifications, pricing, calendar"}),(0,i.jsx)(n.td,{children:"t123-product"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Destinations"}),(0,i.jsx)(n.td,{children:"Location info"}),(0,i.jsx)(n.td,{children:"Maps, region guides, attractions"}),(0,i.jsx)(n.td,{children:"t123-gallery"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"About"}),(0,i.jsx)(n.td,{children:"Company info"}),(0,i.jsx)(n.td,{children:"Story, team, credentials"}),(0,i.jsx)(n.td,{children:"t123-about"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Contact"}),(0,i.jsx)(n.td,{children:"Client inquiries"}),(0,i.jsx)(n.td,{children:"Form, map, contact details"}),(0,i.jsx)(n.td,{children:"t123-contact"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"zero-block-customization",children:"Zero Block Customization"}),"\n",(0,i.jsx)(n.p,{children:"For advanced charter website elements, use Tilda's Zero Block:"}),"\n",(0,i.jsx)(n.h3,{id:"yacht-search-filter-block",children:"Yacht Search Filter Block"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="yacht-filter-block t-container">\n  <div class="filter-row">\n    <div class="filter-column">\n      <label for="yacht-size">Yacht Size</label>\n      <select id="yacht-size" class="filter-select">\n        <option value="">Any Size</option>\n        <option value="30-50">30-50 ft</option>\n        <option value="50-80">50-80 ft</option>\n        <option value="80-100">80-100 ft</option>\n        <option value="100+">100+ ft</option>\n      </select>\n    </div>\n    <div class="filter-column">\n      <label for="yacht-type">Yacht Type</label>\n      <select id="yacht-type" class="filter-select">\n        <option value="">All Types</option>\n        <option value="motor">Motor Yacht</option>\n        <option value="sailing">Sailing Yacht</option>\n        <option value="catamaran">Catamaran</option>\n        <option value="gulet">Gulet</option>\n      </select>\n    </div>\n    <div class="filter-column">\n      <label for="destination">Destination</label>\n      <select id="destination" class="filter-select">\n        <option value="">All Destinations</option>\n        <option value="mediterranean">Mediterranean</option>\n        <option value="caribbean">Caribbean</option>\n        <option value="asia">Asia Pacific</option>\n        <option value="other">Other Destinations</option>\n      </select>\n    </div>\n    <div class="filter-column">\n      <label for="budget">Budget</label>\n      <select id="budget" class="filter-select">\n        <option value="">Any Budget</option>\n        <option value="0-10000">Under $10,000</option>\n        <option value="10000-20000">$10,000 - $20,000</option>\n        <option value="20000-50000">$20,000 - $50,000</option>\n        <option value="50000+">$50,000+</option>\n      </select>\n    </div>\n  </div>\n  <div class="filter-button">\n    <button id="filter-yachts" class="t-btn">Find Your Perfect Yacht</button>\n  </div>\n</div>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"yacht-availability-calendar-block",children:"Yacht Availability Calendar Block"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="yacht-calendar-container t-container">\n  <h3 class="calendar-title">Availability Calendar</h3>\n  <div class="calendar-nav">\n    <button class="cal-nav-btn prev-month">Previous</button>\n    <h4 class="current-month">August 2023</h4>\n    <button class="cal-nav-btn next-month">Next</button>\n  </div>\n  <div id="yacht-calendar" class="calendar-grid">\n    \x3c!-- Calendar will be populated by JavaScript --\x3e\n  </div>\n  <div class="calendar-legend">\n    <div class="legend-item"><span class="available-day"></span> Available</div>\n    <div class="legend-item"><span class="booked-day"></span> Booked</div>\n    <div class="legend-item"><span class="option-day"></span> Option</div>\n  </div>\n</div>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"custom-javascript-for-charter-functionality",children:"Custom JavaScript for Charter Functionality"}),"\n",(0,i.jsx)(n.p,{children:"Add these essential JavaScript functions to enhance your charter website:"}),"\n",(0,i.jsx)(n.h3,{id:"yacht-filtering-system",children:"Yacht Filtering System"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"document.addEventListener('DOMContentLoaded', function() {\n  // Elements\n  const filterBtn = document.getElementById('filter-yachts');\n  const yachtCards = document.querySelectorAll('.yacht-card');\n  const sizeFilter = document.getElementById('yacht-size');\n  const typeFilter = document.getElementById('yacht-type');\n  const destinationFilter = document.getElementById('destination');\n  const budgetFilter = document.getElementById('budget');\n  \n  // Filter function\n  filterBtn.addEventListener('click', function() {\n    const sizeValue = sizeFilter.value;\n    const typeValue = typeFilter.value;\n    const destinationValue = destinationFilter.value;\n    const budgetValue = budgetFilter.value;\n    \n    yachtCards.forEach(function(card) {\n      // Get card attributes\n      const cardSize = card.getAttribute('data-size');\n      const cardType = card.getAttribute('data-type');\n      const cardDestination = card.getAttribute('data-destination');\n      const cardPrice = parseInt(card.getAttribute('data-price'));\n      \n      // Match logic\n      let sizeMatch = !sizeValue || cardSize === sizeValue;\n      let typeMatch = !typeValue || cardType === typeValue;\n      let destinationMatch = !destinationValue || cardDestination === destinationValue;\n      \n      let budgetMatch = true;\n      if (budgetValue) {\n        const [min, max] = budgetValue.split('-').map(Number);\n        if (max) {\n          budgetMatch = cardPrice >= min && cardPrice <= max;\n        } else {\n          // Handle \"50000+\" case\n          budgetMatch = cardPrice >= min;\n        }\n      }\n      \n      // Show/hide based on filters\n      if (sizeMatch && typeMatch && destinationMatch && budgetMatch) {\n        card.style.display = 'block';\n      } else {\n        card.style.display = 'none';\n      }\n    });\n  });\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"price-calculator",children:"Price Calculator"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"function initPriceCalculator() {\n  const basePrice = parseFloat(document.getElementById('base-price').value);\n  const duration = document.getElementById('charter-duration');\n  const extras = document.querySelectorAll('.charter-extra');\n  const totalElement = document.getElementById('total-price');\n  \n  function calculateTotal() {\n    let total = basePrice * parseInt(duration.value);\n    \n    extras.forEach(extra => {\n      if (extra.checked) {\n        total += parseFloat(extra.value);\n      }\n    });\n    \n    totalElement.textContent = '$' + total.toLocaleString();\n  }\n  \n  duration.addEventListener('change', calculateTotal);\n  extras.forEach(extra => {\n    extra.addEventListener('change', calculateTotal);\n  });\n  \n  // Initialize\n  calculateTotal();\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"api-integrations-with-tilda",children:"API Integrations with Tilda"}),"\n",(0,i.jsx)(n.p,{children:"Connect your Tilda charter website with these essential services:"}),"\n",(0,i.jsx)(n.h3,{id:"charter-booking-system",children:"Charter Booking System"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// Integrate with booking system (example for ThirdPartyBooking API)\nfunction syncAvailabilityCalendar(yachtId) {\n  const apiKey = 'your_booking_api_key';\n  const endpoint = `https://api.booking-service.com/yacht/${yachtId}/availability`;\n  \n  fetch(endpoint, {\n    headers: {\n      'Authorization': `Bearer ${apiKey}`\n    }\n  })\n  .then(response => response.json())\n  .then(data => {\n    // Update calendar with availability data\n    renderCalendar(data.availability);\n  })\n  .catch(error => {\n    console.error('Error fetching availability:', error);\n  });\n}\n\nfunction renderCalendar(availabilityData) {\n  const calendarEl = document.getElementById('yacht-calendar');\n  \n  // Clear existing calendar\n  calendarEl.innerHTML = '';\n  \n  // Get current month days\n  const today = new Date();\n  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();\n  \n  // Build calendar grid\n  for (let i = 1; i <= daysInMonth; i++) {\n    const date = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;\n    const dayStatus = availabilityData[date] || 'available';\n    \n    const dayEl = document.createElement('div');\n    dayEl.classList.add('calendar-day', `status-${dayStatus}`);\n    dayEl.textContent = i;\n    \n    calendarEl.appendChild(dayEl);\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"tilda-forms-for-charter-inquiries",children:"Tilda Forms for Charter Inquiries"}),"\n",(0,i.jsx)(n.p,{children:"Create these essential forms for charter business:"}),"\n",(0,i.jsx)(n.h3,{id:"yacht-inquiry-form",children:"Yacht Inquiry Form"}),"\n",(0,i.jsx)(n.p,{children:"Configure with these fields:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- Name (required)\n- Email (required)\n- Phone (required)\n- Preferred Yacht (dropdown from your fleet)\n- Charter Dates (date range picker)\n- Number of Guests (number input)\n- Special Requests (textarea)\n- How did you hear about us? (dropdown)\n- Newsletter signup (checkbox)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Form submission settings:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1. Email notifications to your booking team\n2. Zapier integration to your CRM\n3. Thank you page with next steps\n4. Automated email confirmation to client\n"})}),"\n",(0,i.jsx)(n.h2,{id:"cursor-ide-integration-with-tilda",children:"Cursor IDE Integration with Tilda"}),"\n",(0,i.jsx)(n.p,{children:"Using Cursor IDE enhances Tilda development for charter websites:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Code Generation"}),": Use AI to generate custom HTML, CSS and JavaScript"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"API Integrations"}),": Develop and test API connections"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Image Processing"}),": Create scripts for yacht image optimization"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Version Control"}),": Manage custom code versions"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Collaboration"}),": Work with team members on complex features"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example-cursor-generated-yacht-filter",children:"Example: Cursor-Generated Yacht Filter"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// @cursor-generated\nfunction initYachtFilters() {\n  // Get filter elements\n  const filters = {\n    size: document.getElementById('yacht-size'),\n    type: document.getElementById('yacht-type'),\n    guests: document.getElementById('guest-count'),\n    destination: document.getElementById('yacht-destination'),\n    features: document.querySelectorAll('.feature-checkbox')\n  };\n  \n  // Get yacht elements\n  const yachts = document.querySelectorAll('.yacht-card');\n  \n  // Apply filters function\n  function applyFilters() {\n    yachts.forEach(yacht => {\n      // Get yacht data attributes\n      const yachtData = {\n        size: yacht.dataset.size,\n        type: yacht.dataset.type, \n        guests: parseInt(yacht.dataset.guests),\n        destination: yacht.dataset.destination,\n        features: yacht.dataset.features ? yacht.dataset.features.split(',') : []\n      };\n      \n      // Check if yacht matches all selected filters\n      let matches = true;\n      \n      // Size filter\n      if (filters.size.value && filters.size.value !== yachtData.size) {\n        matches = false;\n      }\n      \n      // Type filter\n      if (filters.type.value && filters.type.value !== yachtData.type) {\n        matches = false;\n      }\n      \n      // Guest filter\n      if (filters.guests.value && parseInt(filters.guests.value) > yachtData.guests) {\n        matches = false;\n      }\n      \n      // Destination filter\n      if (filters.destination.value && filters.destination.value !== yachtData.destination) {\n        matches = false;\n      }\n      \n      // Feature filters\n      const selectedFeatures = [];\n      filters.features.forEach(checkbox => {\n        if (checkbox.checked) {\n          selectedFeatures.push(checkbox.value);\n        }\n      });\n      \n      if (selectedFeatures.length > 0) {\n        const hasAllFeatures = selectedFeatures.every(feature => \n          yachtData.features.includes(feature)\n        );\n        if (!hasAllFeatures) {\n          matches = false;\n        }\n      }\n      \n      // Show or hide yacht based on filter match\n      yacht.style.display = matches ? 'block' : 'none';\n    });\n    \n    // Update count of visible yachts\n    const visibleCount = document.querySelectorAll('.yacht-card[style=\"display: block\"]').length;\n    document.getElementById('results-count').textContent = `${visibleCount} yachts found`;\n  }\n  \n  // Add event listeners to all filter controls\n  filters.size.addEventListener('change', applyFilters);\n  filters.type.addEventListener('change', applyFilters);\n  filters.guests.addEventListener('change', applyFilters);\n  filters.destination.addEventListener('change', applyFilters);\n  \n  filters.features.forEach(checkbox => {\n    checkbox.addEventListener('change', applyFilters);\n  });\n  \n  // Initialize\n  applyFilters();\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"seo-optimization-for-charter-websites",children:"SEO Optimization for Charter Websites"}),"\n",(0,i.jsx)(n.p,{children:"Implement these charter-specific SEO techniques in Tilda:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Yacht-Specific Schema Markup"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script type="application/ld+json">\n{\n  "@context": "https://schema.org/",\n  "@type": "Product",\n  "name": "Motor Yacht Excellence",\n  "image": "https://yourdomain.com/images/yachts/excellence.jpg",\n  "description": "Luxury 80ft motor yacht available for charter in the Mediterranean",\n  "brand": {\n    "@type": "Brand",\n    "name": "Sunseeker"\n  },\n  "offers": {\n    "@type": "Offer",\n    "priceCurrency": "USD",\n    "price": "25000",\n    "priceValidUntil": "2023-12-31",\n    "availability": "https://schema.org/InStock"\n  }\n}\n<\/script>\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Location-Based Pages"}),":\nCreate dedicated pages for each charter destination with:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Location-specific H1 tags: "Yacht Charters in [Location]"'}),"\n",(0,i.jsx)(n.li,{children:"Location schema markup"}),"\n",(0,i.jsx)(n.li,{children:"Local landmarks and attractions"}),"\n",(0,i.jsx)(n.li,{children:"Region-specific yacht recommendations"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Yacht Technical Specifications"}),":\nInclude detailed specifications in HTML tables for better search visibility:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<table class="yacht-specs">\n  <tr><th>Length</th><td>80 feet (24.4m)</td></tr>\n  <tr><th>Builder</th><td>Sunseeker</td></tr>\n  <tr><th>Year</th><td>2020</td></tr>\n  <tr><th>Guests</th><td>8 in 4 cabins</td></tr>\n  <tr><th>Crew</th><td>4</td></tr>\n  <tr><th>Cruising Speed</th><td>22 knots</td></tr>\n</table>\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,i.jsx)(n.p,{children:"Optimize your Tilda charter website with these techniques:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Image Optimization Pipeline"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Resize yacht images to 2000px max width"}),"\n",(0,i.jsx)(n.li,{children:"Compress JPGs to 80% quality"}),"\n",(0,i.jsx)(n.li,{children:"Use WebP format with JPG fallback"}),"\n",(0,i.jsx)(n.li,{children:"Implement lazy loading"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Critical Render Path"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Move non-essential JavaScript to footer"}),"\n",(0,i.jsx)(n.li,{children:"Inline critical CSS"}),"\n",(0,i.jsx)(n.li,{children:"Defer third-party scripts"}),"\n",(0,i.jsx)(n.li,{children:"Use responsive images with srcset"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Mobile Optimization"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"@media (max-width: 768px) {\n  .yacht-gallery {\n    flex-direction: column;\n  }\n  .yacht-specs {\n    font-size: 14px;\n  }\n  .calendar-grid {\n    grid-template-columns: repeat(7, 1fr);\n  }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"maintenance-and-updates",children:"Maintenance and Updates"}),"\n",(0,i.jsx)(n.p,{children:"Keep your Tilda charter website current with:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Seasonal Updates"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Update hero images quarterly"}),"\n",(0,i.jsx)(n.li,{children:"Refresh destination information seasonally"}),"\n",(0,i.jsx)(n.li,{children:"Update availability calendars weekly"}),"\n",(0,i.jsx)(n.li,{children:"Revise pricing annually or as needed"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Content Calendar"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Blog posts about destinations: Monthly"}),"\n",(0,i.jsx)(n.li,{children:"New yacht additions: As available"}),"\n",(0,i.jsx)(n.li,{children:"Special offers: Quarterly"}),"\n",(0,i.jsx)(n.li,{children:"Customer testimonials: Monthly"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Technical Maintenance"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Check form submissions: Weekly"}),"\n",(0,i.jsx)(n.li,{children:"Test booking flow: Monthly"}),"\n",(0,i.jsx)(n.li,{children:"Update plugins and integrations: Quarterly"}),"\n",(0,i.jsx)(n.li,{children:"Full site audit: Annually"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(n.p,{children:"To implement Tilda for your charter business:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://tilda.cc/pricing/",children:"Register for a Tilda Business account"})}),"\n",(0,i.jsxs)(n.li,{children:["Follow our ",(0,i.jsx)(n.a,{href:"../getting-started",children:"step-by-step setup guide"})]}),"\n",(0,i.jsxs)(n.li,{children:["Use our ",(0,i.jsx)(n.a,{href:"../resources/templates",children:"charter website templates"})]}),"\n",(0,i.jsxs)(n.li,{children:["Implement the ",(0,i.jsx)(n.a,{href:"../client-funnel/overview",children:"client funnel strategy"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);