"use strict";(self.webpackChunkcharter_framework=self.webpackChunkcharter_framework||[]).push([[660],{2389:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(8168),i=(a(6540),a(5680));const r={},l="Tilda Integration",o={unversionedId:"website-architecture/tilda-integration",id:"website-architecture/tilda-integration",title:"Tilda Integration",description:"This guide covers the complete process of integrating Tilda as your charter business website platform, including setup, customization, and optimization for yacht charter businesses.",source:"@site/docs/website-architecture/tilda-integration.md",sourceDirName:"website-architecture",slug:"/website-architecture/tilda-integration",permalink:"/azurecharters/docs/website-architecture/tilda-integration",draft:!1,editUrl:"https://github.com/szemkoff/azurecharters/tree/main/docs/website-architecture/tilda-integration.md",tags:[],version:"current",frontMatter:{},sidebar:"frameworkSidebar",previous:{title:"Introduction to the Charter Business Framework",permalink:"/azurecharters/docs/intro"},next:{title:"Client Funnel Overview",permalink:"/azurecharters/docs/client-funnel/overview"}},s={},c=[{value:"Why Tilda for Charter Websites",id:"why-tilda-for-charter-websites",level:2},{value:"Account Setup &amp; Configuration",id:"account-setup--configuration",level:2},{value:"Recommended Plan",id:"recommended-plan",level:3},{value:"Initial Configuration",id:"initial-configuration",level:3},{value:"Website Structure Implementation",id:"website-structure-implementation",level:2},{value:"Zero Block Customization",id:"zero-block-customization",level:2},{value:"Yacht Search Filter Block",id:"yacht-search-filter-block",level:3},{value:"Yacht Availability Calendar Block",id:"yacht-availability-calendar-block",level:3},{value:"Custom JavaScript for Charter Functionality",id:"custom-javascript-for-charter-functionality",level:2},{value:"Yacht Filtering System",id:"yacht-filtering-system",level:3},{value:"Price Calculator",id:"price-calculator",level:3},{value:"API Integrations with Tilda",id:"api-integrations-with-tilda",level:2},{value:"Charter Booking System",id:"charter-booking-system",level:3},{value:"Tilda Forms for Charter Inquiries",id:"tilda-forms-for-charter-inquiries",level:2},{value:"Yacht Inquiry Form",id:"yacht-inquiry-form",level:3},{value:"Cursor IDE Integration with Tilda",id:"cursor-ide-integration-with-tilda",level:2},{value:"Example: Cursor-Generated Yacht Filter",id:"example-cursor-generated-yacht-filter",level:3},{value:"SEO Optimization for Charter Websites",id:"seo-optimization-for-charter-websites",level:2},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"Maintenance and Updates",id:"maintenance-and-updates",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"tilda-integration"},"Tilda Integration"),(0,i.yg)("p",null,"This guide covers the complete process of integrating Tilda as your charter business website platform, including setup, customization, and optimization for yacht charter businesses."),(0,i.yg)("h2",{id:"why-tilda-for-charter-websites"},"Why Tilda for Charter Websites"),(0,i.yg)("p",null,"Tilda offers several advantages for yacht charter businesses:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Visual Design Flexibility"),": Create stunning visual experiences showcasing luxury yachts"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Block-Based System"),": Modular approach perfect for yacht listings and destination content"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Built-in Store"),": Native support for yacht charter listings and bookings"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"SEO-Friendly"),": Strong search engine optimization capabilities"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Integration Capabilities"),": Connects with CRM, email marketing, and booking systems"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Multilingual Support"),": Essential for international charter clients")),(0,i.yg)("h2",{id:"account-setup--configuration"},"Account Setup & Configuration"),(0,i.yg)("h3",{id:"recommended-plan"},"Recommended Plan"),(0,i.yg)("p",null,"For charter businesses, we recommend the ",(0,i.yg)("strong",{parentName:"p"},"Tilda Business")," plan for these critical features:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Custom domain support"),(0,i.yg)("li",{parentName:"ul"},"E-commerce functionality"),(0,i.yg)("li",{parentName:"ul"},"Export code capability"),(0,i.yg)("li",{parentName:"ul"},"Form integrations"),(0,i.yg)("li",{parentName:"ul"},"Custom JavaScript"),(0,i.yg)("li",{parentName:"ul"},"Remove Tilda branding")),(0,i.yg)("h3",{id:"initial-configuration"},"Initial Configuration"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Domain Setup"),":"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"Settings \u2192 Domain \u2192 Connect Custom Domain\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Project Structure"),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Create main project for your charter business"),(0,i.yg)("li",{parentName:"ul"},"Create sub-projects for specific destinations or yacht categories"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Analytics Integration"),":"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"Settings \u2192 Analytics \u2192 Add Google Analytics, Facebook Pixel\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"User Permissions"),":"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"Settings \u2192 Team \u2192 Invite team members with specific roles\n")))),(0,i.yg)("h2",{id:"website-structure-implementation"},"Website Structure Implementation"),(0,i.yg)("p",null,"Create these essential pages for a charter business:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Page"),(0,i.yg)("th",{parentName:"tr",align:null},"Purpose"),(0,i.yg)("th",{parentName:"tr",align:null},"Key Elements"),(0,i.yg)("th",{parentName:"tr",align:null},"Template"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Home"),(0,i.yg)("td",{parentName:"tr",align:null},"First impression"),(0,i.yg)("td",{parentName:"tr",align:null},"Hero video, featured yachts, destinations"),(0,i.yg)("td",{parentName:"tr",align:null},"t123-home")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Fleet"),(0,i.yg)("td",{parentName:"tr",align:null},"Yacht listings"),(0,i.yg)("td",{parentName:"tr",align:null},"Search filters, yacht cards, inquiry CTAs"),(0,i.yg)("td",{parentName:"tr",align:null},"t123-catalog")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Yacht Detail"),(0,i.yg)("td",{parentName:"tr",align:null},"Individual yacht"),(0,i.yg)("td",{parentName:"tr",align:null},"Gallery, specifications, pricing, calendar"),(0,i.yg)("td",{parentName:"tr",align:null},"t123-product")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Destinations"),(0,i.yg)("td",{parentName:"tr",align:null},"Location info"),(0,i.yg)("td",{parentName:"tr",align:null},"Maps, region guides, attractions"),(0,i.yg)("td",{parentName:"tr",align:null},"t123-gallery")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"About"),(0,i.yg)("td",{parentName:"tr",align:null},"Company info"),(0,i.yg)("td",{parentName:"tr",align:null},"Story, team, credentials"),(0,i.yg)("td",{parentName:"tr",align:null},"t123-about")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Contact"),(0,i.yg)("td",{parentName:"tr",align:null},"Client inquiries"),(0,i.yg)("td",{parentName:"tr",align:null},"Form, map, contact details"),(0,i.yg)("td",{parentName:"tr",align:null},"t123-contact")))),(0,i.yg)("h2",{id:"zero-block-customization"},"Zero Block Customization"),(0,i.yg)("p",null,"For advanced charter website elements, use Tilda's Zero Block:"),(0,i.yg)("h3",{id:"yacht-search-filter-block"},"Yacht Search Filter Block"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<div class="yacht-filter-block t-container">\n  <div class="filter-row">\n    <div class="filter-column">\n      <label for="yacht-size">Yacht Size</label>\n      <select id="yacht-size" class="filter-select">\n        <option value="">Any Size</option>\n        <option value="30-50">30-50 ft</option>\n        <option value="50-80">50-80 ft</option>\n        <option value="80-100">80-100 ft</option>\n        <option value="100+">100+ ft</option>\n      </select>\n    </div>\n    <div class="filter-column">\n      <label for="yacht-type">Yacht Type</label>\n      <select id="yacht-type" class="filter-select">\n        <option value="">All Types</option>\n        <option value="motor">Motor Yacht</option>\n        <option value="sailing">Sailing Yacht</option>\n        <option value="catamaran">Catamaran</option>\n        <option value="gulet">Gulet</option>\n      </select>\n    </div>\n    <div class="filter-column">\n      <label for="destination">Destination</label>\n      <select id="destination" class="filter-select">\n        <option value="">All Destinations</option>\n        <option value="mediterranean">Mediterranean</option>\n        <option value="caribbean">Caribbean</option>\n        <option value="asia">Asia Pacific</option>\n        <option value="other">Other Destinations</option>\n      </select>\n    </div>\n    <div class="filter-column">\n      <label for="budget">Budget</label>\n      <select id="budget" class="filter-select">\n        <option value="">Any Budget</option>\n        <option value="0-10000">Under $10,000</option>\n        <option value="10000-20000">$10,000 - $20,000</option>\n        <option value="20000-50000">$20,000 - $50,000</option>\n        <option value="50000+">$50,000+</option>\n      </select>\n    </div>\n  </div>\n  <div class="filter-button">\n    <button id="filter-yachts" class="t-btn">Find Your Perfect Yacht</button>\n  </div>\n</div>\n')),(0,i.yg)("h3",{id:"yacht-availability-calendar-block"},"Yacht Availability Calendar Block"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<div class="yacht-calendar-container t-container">\n  <h3 class="calendar-title">Availability Calendar</h3>\n  <div class="calendar-nav">\n    <button class="cal-nav-btn prev-month">Previous</button>\n    <h4 class="current-month">August 2023</h4>\n    <button class="cal-nav-btn next-month">Next</button>\n  </div>\n  <div id="yacht-calendar" class="calendar-grid">\n    \x3c!-- Calendar will be populated by JavaScript --\x3e\n  </div>\n  <div class="calendar-legend">\n    <div class="legend-item"><span class="available-day"></span> Available</div>\n    <div class="legend-item"><span class="booked-day"></span> Booked</div>\n    <div class="legend-item"><span class="option-day"></span> Option</div>\n  </div>\n</div>\n')),(0,i.yg)("h2",{id:"custom-javascript-for-charter-functionality"},"Custom JavaScript for Charter Functionality"),(0,i.yg)("p",null,"Add these essential JavaScript functions to enhance your charter website:"),(0,i.yg)("h3",{id:"yacht-filtering-system"},"Yacht Filtering System"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"document.addEventListener('DOMContentLoaded', function() {\n  // Elements\n  const filterBtn = document.getElementById('filter-yachts');\n  const yachtCards = document.querySelectorAll('.yacht-card');\n  const sizeFilter = document.getElementById('yacht-size');\n  const typeFilter = document.getElementById('yacht-type');\n  const destinationFilter = document.getElementById('destination');\n  const budgetFilter = document.getElementById('budget');\n  \n  // Filter function\n  filterBtn.addEventListener('click', function() {\n    const sizeValue = sizeFilter.value;\n    const typeValue = typeFilter.value;\n    const destinationValue = destinationFilter.value;\n    const budgetValue = budgetFilter.value;\n    \n    yachtCards.forEach(function(card) {\n      // Get card attributes\n      const cardSize = card.getAttribute('data-size');\n      const cardType = card.getAttribute('data-type');\n      const cardDestination = card.getAttribute('data-destination');\n      const cardPrice = parseInt(card.getAttribute('data-price'));\n      \n      // Match logic\n      let sizeMatch = !sizeValue || cardSize === sizeValue;\n      let typeMatch = !typeValue || cardType === typeValue;\n      let destinationMatch = !destinationValue || cardDestination === destinationValue;\n      \n      let budgetMatch = true;\n      if (budgetValue) {\n        const [min, max] = budgetValue.split('-').map(Number);\n        if (max) {\n          budgetMatch = cardPrice >= min && cardPrice <= max;\n        } else {\n          // Handle \"50000+\" case\n          budgetMatch = cardPrice >= min;\n        }\n      }\n      \n      // Show/hide based on filters\n      if (sizeMatch && typeMatch && destinationMatch && budgetMatch) {\n        card.style.display = 'block';\n      } else {\n        card.style.display = 'none';\n      }\n    });\n  });\n});\n")),(0,i.yg)("h3",{id:"price-calculator"},"Price Calculator"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"function initPriceCalculator() {\n  const basePrice = parseFloat(document.getElementById('base-price').value);\n  const duration = document.getElementById('charter-duration');\n  const extras = document.querySelectorAll('.charter-extra');\n  const totalElement = document.getElementById('total-price');\n  \n  function calculateTotal() {\n    let total = basePrice * parseInt(duration.value);\n    \n    extras.forEach(extra => {\n      if (extra.checked) {\n        total += parseFloat(extra.value);\n      }\n    });\n    \n    totalElement.textContent = '$' + total.toLocaleString();\n  }\n  \n  duration.addEventListener('change', calculateTotal);\n  extras.forEach(extra => {\n    extra.addEventListener('change', calculateTotal);\n  });\n  \n  // Initialize\n  calculateTotal();\n}\n")),(0,i.yg)("h2",{id:"api-integrations-with-tilda"},"API Integrations with Tilda"),(0,i.yg)("p",null,"Connect your Tilda charter website with these essential services:"),(0,i.yg)("h3",{id:"charter-booking-system"},"Charter Booking System"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"// Integrate with booking system (example for ThirdPartyBooking API)\nfunction syncAvailabilityCalendar(yachtId) {\n  const apiKey = 'your_booking_api_key';\n  const endpoint = `https://api.booking-service.com/yacht/${yachtId}/availability`;\n  \n  fetch(endpoint, {\n    headers: {\n      'Authorization': `Bearer ${apiKey}`\n    }\n  })\n  .then(response => response.json())\n  .then(data => {\n    // Update calendar with availability data\n    renderCalendar(data.availability);\n  })\n  .catch(error => {\n    console.error('Error fetching availability:', error);\n  });\n}\n\nfunction renderCalendar(availabilityData) {\n  const calendarEl = document.getElementById('yacht-calendar');\n  \n  // Clear existing calendar\n  calendarEl.innerHTML = '';\n  \n  // Get current month days\n  const today = new Date();\n  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();\n  \n  // Build calendar grid\n  for (let i = 1; i <= daysInMonth; i++) {\n    const date = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;\n    const dayStatus = availabilityData[date] || 'available';\n    \n    const dayEl = document.createElement('div');\n    dayEl.classList.add('calendar-day', `status-${dayStatus}`);\n    dayEl.textContent = i;\n    \n    calendarEl.appendChild(dayEl);\n  }\n}\n")),(0,i.yg)("h2",{id:"tilda-forms-for-charter-inquiries"},"Tilda Forms for Charter Inquiries"),(0,i.yg)("p",null,"Create these essential forms for charter business:"),(0,i.yg)("h3",{id:"yacht-inquiry-form"},"Yacht Inquiry Form"),(0,i.yg)("p",null,"Configure with these fields:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"- Name (required)\n- Email (required)\n- Phone (required)\n- Preferred Yacht (dropdown from your fleet)\n- Charter Dates (date range picker)\n- Number of Guests (number input)\n- Special Requests (textarea)\n- How did you hear about us? (dropdown)\n- Newsletter signup (checkbox)\n")),(0,i.yg)("p",null,"Form submission settings:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"1. Email notifications to your booking team\n2. Zapier integration to your CRM\n3. Thank you page with next steps\n4. Automated email confirmation to client\n")),(0,i.yg)("h2",{id:"cursor-ide-integration-with-tilda"},"Cursor IDE Integration with Tilda"),(0,i.yg)("p",null,"Using Cursor IDE enhances Tilda development for charter websites:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Code Generation"),": Use AI to generate custom HTML, CSS and JavaScript"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"API Integrations"),": Develop and test API connections"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Image Processing"),": Create scripts for yacht image optimization"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Version Control"),": Manage custom code versions"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Collaboration"),": Work with team members on complex features")),(0,i.yg)("h3",{id:"example-cursor-generated-yacht-filter"},"Example: Cursor-Generated Yacht Filter"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"// @cursor-generated\nfunction initYachtFilters() {\n  // Get filter elements\n  const filters = {\n    size: document.getElementById('yacht-size'),\n    type: document.getElementById('yacht-type'),\n    guests: document.getElementById('guest-count'),\n    destination: document.getElementById('yacht-destination'),\n    features: document.querySelectorAll('.feature-checkbox')\n  };\n  \n  // Get yacht elements\n  const yachts = document.querySelectorAll('.yacht-card');\n  \n  // Apply filters function\n  function applyFilters() {\n    yachts.forEach(yacht => {\n      // Get yacht data attributes\n      const yachtData = {\n        size: yacht.dataset.size,\n        type: yacht.dataset.type, \n        guests: parseInt(yacht.dataset.guests),\n        destination: yacht.dataset.destination,\n        features: yacht.dataset.features ? yacht.dataset.features.split(',') : []\n      };\n      \n      // Check if yacht matches all selected filters\n      let matches = true;\n      \n      // Size filter\n      if (filters.size.value && filters.size.value !== yachtData.size) {\n        matches = false;\n      }\n      \n      // Type filter\n      if (filters.type.value && filters.type.value !== yachtData.type) {\n        matches = false;\n      }\n      \n      // Guest filter\n      if (filters.guests.value && parseInt(filters.guests.value) > yachtData.guests) {\n        matches = false;\n      }\n      \n      // Destination filter\n      if (filters.destination.value && filters.destination.value !== yachtData.destination) {\n        matches = false;\n      }\n      \n      // Feature filters\n      const selectedFeatures = [];\n      filters.features.forEach(checkbox => {\n        if (checkbox.checked) {\n          selectedFeatures.push(checkbox.value);\n        }\n      });\n      \n      if (selectedFeatures.length > 0) {\n        const hasAllFeatures = selectedFeatures.every(feature => \n          yachtData.features.includes(feature)\n        );\n        if (!hasAllFeatures) {\n          matches = false;\n        }\n      }\n      \n      // Show or hide yacht based on filter match\n      yacht.style.display = matches ? 'block' : 'none';\n    });\n    \n    // Update count of visible yachts\n    const visibleCount = document.querySelectorAll('.yacht-card[style=\"display: block\"]').length;\n    document.getElementById('results-count').textContent = `${visibleCount} yachts found`;\n  }\n  \n  // Add event listeners to all filter controls\n  filters.size.addEventListener('change', applyFilters);\n  filters.type.addEventListener('change', applyFilters);\n  filters.guests.addEventListener('change', applyFilters);\n  filters.destination.addEventListener('change', applyFilters);\n  \n  filters.features.forEach(checkbox => {\n    checkbox.addEventListener('change', applyFilters);\n  });\n  \n  // Initialize\n  applyFilters();\n}\n")),(0,i.yg)("h2",{id:"seo-optimization-for-charter-websites"},"SEO Optimization for Charter Websites"),(0,i.yg)("p",null,"Implement these charter-specific SEO techniques in Tilda:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Yacht-Specific Schema Markup"),":"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<script type="application/ld+json">\n{\n  "@context": "https://schema.org/",\n  "@type": "Product",\n  "name": "Motor Yacht Excellence",\n  "image": "https://yourdomain.com/images/yachts/excellence.jpg",\n  "description": "Luxury 80ft motor yacht available for charter in the Mediterranean",\n  "brand": {\n    "@type": "Brand",\n    "name": "Sunseeker"\n  },\n  "offers": {\n    "@type": "Offer",\n    "priceCurrency": "USD",\n    "price": "25000",\n    "priceValidUntil": "2023-12-31",\n    "availability": "https://schema.org/InStock"\n  }\n}\n<\/script>\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Location-Based Pages"),":\nCreate dedicated pages for each charter destination with:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},'Location-specific H1 tags: "Yacht Charters in ',"[Location]",'"'),(0,i.yg)("li",{parentName:"ul"},"Location schema markup"),(0,i.yg)("li",{parentName:"ul"},"Local landmarks and attractions"),(0,i.yg)("li",{parentName:"ul"},"Region-specific yacht recommendations"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Yacht Technical Specifications"),":\nInclude detailed specifications in HTML tables for better search visibility:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<table class="yacht-specs">\n  <tr><th>Length</th><td>80 feet (24.4m)</td></tr>\n  <tr><th>Builder</th><td>Sunseeker</td></tr>\n  <tr><th>Year</th><td>2020</td></tr>\n  <tr><th>Guests</th><td>8 in 4 cabins</td></tr>\n  <tr><th>Crew</th><td>4</td></tr>\n  <tr><th>Cruising Speed</th><td>22 knots</td></tr>\n</table>\n')))),(0,i.yg)("h2",{id:"performance-optimization"},"Performance Optimization"),(0,i.yg)("p",null,"Optimize your Tilda charter website with these techniques:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Image Optimization Pipeline"),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Resize yacht images to 2000px max width"),(0,i.yg)("li",{parentName:"ul"},"Compress JPGs to 80% quality"),(0,i.yg)("li",{parentName:"ul"},"Use WebP format with JPG fallback"),(0,i.yg)("li",{parentName:"ul"},"Implement lazy loading"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Critical Render Path"),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Move non-essential JavaScript to footer"),(0,i.yg)("li",{parentName:"ul"},"Inline critical CSS"),(0,i.yg)("li",{parentName:"ul"},"Defer third-party scripts"),(0,i.yg)("li",{parentName:"ul"},"Use responsive images with srcset"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Mobile Optimization"),":"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-css"},"@media (max-width: 768px) {\n  .yacht-gallery {\n    flex-direction: column;\n  }\n  .yacht-specs {\n    font-size: 14px;\n  }\n  .calendar-grid {\n    grid-template-columns: repeat(7, 1fr);\n  }\n}\n")))),(0,i.yg)("h2",{id:"maintenance-and-updates"},"Maintenance and Updates"),(0,i.yg)("p",null,"Keep your Tilda charter website current with:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Seasonal Updates"),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Update hero images quarterly"),(0,i.yg)("li",{parentName:"ul"},"Refresh destination information seasonally"),(0,i.yg)("li",{parentName:"ul"},"Update availability calendars weekly"),(0,i.yg)("li",{parentName:"ul"},"Revise pricing annually or as needed"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Content Calendar"),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Blog posts about destinations: Monthly"),(0,i.yg)("li",{parentName:"ul"},"New yacht additions: As available"),(0,i.yg)("li",{parentName:"ul"},"Special offers: Quarterly"),(0,i.yg)("li",{parentName:"ul"},"Customer testimonials: Monthly"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Technical Maintenance"),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Check form submissions: Weekly"),(0,i.yg)("li",{parentName:"ul"},"Test booking flow: Monthly"),(0,i.yg)("li",{parentName:"ul"},"Update plugins and integrations: Quarterly"),(0,i.yg)("li",{parentName:"ul"},"Full site audit: Annually")))),(0,i.yg)("h2",{id:"next-steps"},"Next Steps"),(0,i.yg)("p",null,"To implement Tilda for your charter business:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://tilda.cc/pricing/"},"Register for a Tilda Business account")),(0,i.yg)("li",{parentName:"ol"},"Follow our ",(0,i.yg)("a",{parentName:"li",href:"../getting-started"},"step-by-step setup guide")),(0,i.yg)("li",{parentName:"ol"},"Use our ",(0,i.yg)("a",{parentName:"li",href:"../resources/templates"},"charter website templates")),(0,i.yg)("li",{parentName:"ol"},"Implement the ",(0,i.yg)("a",{parentName:"li",href:"../client-funnel/overview"},"client funnel strategy"))))}d.isMDXComponent=!0},5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(6540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),y=i,g=u["".concat(s,".").concat(y)]||u[y]||d[y]||r;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"}}]);