# Tilda Integration

This guide covers the complete process of integrating Tilda as your charter business website platform, including setup, customization, and optimization for yacht charter businesses.

## Why Tilda for Charter Websites

Tilda offers several advantages for yacht charter businesses:

1. **Visual Design Flexibility**: Create stunning visual experiences showcasing luxury yachts
2. **Block-Based System**: Modular approach perfect for yacht listings and destination content
3. **Built-in Store**: Native support for yacht charter listings and bookings
4. **SEO-Friendly**: Strong search engine optimization capabilities
5. **Integration Capabilities**: Connects with CRM, email marketing, and booking systems
6. **Multilingual Support**: Essential for international charter clients

## Account Setup & Configuration

### Recommended Plan

For charter businesses, we recommend the **Tilda Business** plan for these critical features:

- Custom domain support
- E-commerce functionality
- Export code capability
- Form integrations
- Custom JavaScript
- Remove Tilda branding

### Initial Configuration

1. **Domain Setup**:
   ```
   Settings → Domain → Connect Custom Domain
   ```

2. **Project Structure**:
   - Create main project for your charter business
   - Create sub-projects for specific destinations or yacht categories
   
3. **Analytics Integration**:
   ```
   Settings → Analytics → Add Google Analytics, Facebook Pixel
   ```

4. **User Permissions**:
   ```
   Settings → Team → Invite team members with specific roles
   ```

## Website Structure Implementation

Create these essential pages for a charter business:

| Page | Purpose | Key Elements | Template |
|------|---------|-------------|----------|
| Home | First impression | Hero video, featured yachts, destinations | t123-home |
| Fleet | Yacht listings | Search filters, yacht cards, inquiry CTAs | t123-catalog |
| Yacht Detail | Individual yacht | Gallery, specifications, pricing, calendar | t123-product |
| Destinations | Location info | Maps, region guides, attractions | t123-gallery |
| About | Company info | Story, team, credentials | t123-about |
| Contact | Client inquiries | Form, map, contact details | t123-contact |

## Zero Block Customization

For advanced charter website elements, use Tilda's Zero Block:

### Yacht Search Filter Block
```html
<div class="yacht-filter-block t-container">
  <div class="filter-row">
    <div class="filter-column">
      <label for="yacht-size">Yacht Size</label>
      <select id="yacht-size" class="filter-select">
        <option value="">Any Size</option>
        <option value="30-50">30-50 ft</option>
        <option value="50-80">50-80 ft</option>
        <option value="80-100">80-100 ft</option>
        <option value="100+">100+ ft</option>
      </select>
    </div>
    <div class="filter-column">
      <label for="yacht-type">Yacht Type</label>
      <select id="yacht-type" class="filter-select">
        <option value="">All Types</option>
        <option value="motor">Motor Yacht</option>
        <option value="sailing">Sailing Yacht</option>
        <option value="catamaran">Catamaran</option>
        <option value="gulet">Gulet</option>
      </select>
    </div>
    <div class="filter-column">
      <label for="destination">Destination</label>
      <select id="destination" class="filter-select">
        <option value="">All Destinations</option>
        <option value="mediterranean">Mediterranean</option>
        <option value="caribbean">Caribbean</option>
        <option value="asia">Asia Pacific</option>
        <option value="other">Other Destinations</option>
      </select>
    </div>
    <div class="filter-column">
      <label for="budget">Budget</label>
      <select id="budget" class="filter-select">
        <option value="">Any Budget</option>
        <option value="0-10000">Under $10,000</option>
        <option value="10000-20000">$10,000 - $20,000</option>
        <option value="20000-50000">$20,000 - $50,000</option>
        <option value="50000+">$50,000+</option>
      </select>
    </div>
  </div>
  <div class="filter-button">
    <button id="filter-yachts" class="t-btn">Find Your Perfect Yacht</button>
  </div>
</div>
```

### Yacht Availability Calendar Block
```html
<div class="yacht-calendar-container t-container">
  <h3 class="calendar-title">Availability Calendar</h3>
  <div class="calendar-nav">
    <button class="cal-nav-btn prev-month">Previous</button>
    <h4 class="current-month">August 2023</h4>
    <button class="cal-nav-btn next-month">Next</button>
  </div>
  <div id="yacht-calendar" class="calendar-grid">
    <!-- Calendar will be populated by JavaScript -->
  </div>
  <div class="calendar-legend">
    <div class="legend-item"><span class="available-day"></span> Available</div>
    <div class="legend-item"><span class="booked-day"></span> Booked</div>
    <div class="legend-item"><span class="option-day"></span> Option</div>
  </div>
</div>
```

## Custom JavaScript for Charter Functionality

Add these essential JavaScript functions to enhance your charter website:

### Yacht Filtering System
```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const filterBtn = document.getElementById('filter-yachts');
  const yachtCards = document.querySelectorAll('.yacht-card');
  const sizeFilter = document.getElementById('yacht-size');
  const typeFilter = document.getElementById('yacht-type');
  const destinationFilter = document.getElementById('destination');
  const budgetFilter = document.getElementById('budget');
  
  // Filter function
  filterBtn.addEventListener('click', function() {
    const sizeValue = sizeFilter.value;
    const typeValue = typeFilter.value;
    const destinationValue = destinationFilter.value;
    const budgetValue = budgetFilter.value;
    
    yachtCards.forEach(function(card) {
      // Get card attributes
      const cardSize = card.getAttribute('data-size');
      const cardType = card.getAttribute('data-type');
      const cardDestination = card.getAttribute('data-destination');
      const cardPrice = parseInt(card.getAttribute('data-price'));
      
      // Match logic
      let sizeMatch = !sizeValue || cardSize === sizeValue;
      let typeMatch = !typeValue || cardType === typeValue;
      let destinationMatch = !destinationValue || cardDestination === destinationValue;
      
      let budgetMatch = true;
      if (budgetValue) {
        const [min, max] = budgetValue.split('-').map(Number);
        if (max) {
          budgetMatch = cardPrice >= min && cardPrice <= max;
        } else {
          // Handle "50000+" case
          budgetMatch = cardPrice >= min;
        }
      }
      
      // Show/hide based on filters
      if (sizeMatch && typeMatch && destinationMatch && budgetMatch) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
```

### Price Calculator
```javascript
function initPriceCalculator() {
  const basePrice = parseFloat(document.getElementById('base-price').value);
  const duration = document.getElementById('charter-duration');
  const extras = document.querySelectorAll('.charter-extra');
  const totalElement = document.getElementById('total-price');
  
  function calculateTotal() {
    let total = basePrice * parseInt(duration.value);
    
    extras.forEach(extra => {
      if (extra.checked) {
        total += parseFloat(extra.value);
      }
    });
    
    totalElement.textContent = '$' + total.toLocaleString();
  }
  
  duration.addEventListener('change', calculateTotal);
  extras.forEach(extra => {
    extra.addEventListener('change', calculateTotal);
  });
  
  // Initialize
  calculateTotal();
}
```

## API Integrations with Tilda

Connect your Tilda charter website with these essential services:

### Charter Booking System
```javascript
// Integrate with booking system (example for ThirdPartyBooking API)
function syncAvailabilityCalendar(yachtId) {
  const apiKey = 'your_booking_api_key';
  const endpoint = `https://api.booking-service.com/yacht/${yachtId}/availability`;
  
  fetch(endpoint, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  })
  .then(response => response.json())
  .then(data => {
    // Update calendar with availability data
    renderCalendar(data.availability);
  })
  .catch(error => {
    console.error('Error fetching availability:', error);
  });
}

function renderCalendar(availabilityData) {
  const calendarEl = document.getElementById('yacht-calendar');
  
  // Clear existing calendar
  calendarEl.innerHTML = '';
  
  // Get current month days
  const today = new Date();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  
  // Build calendar grid
  for (let i = 1; i <= daysInMonth; i++) {
    const date = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
    const dayStatus = availabilityData[date] || 'available';
    
    const dayEl = document.createElement('div');
    dayEl.classList.add('calendar-day', `status-${dayStatus}`);
    dayEl.textContent = i;
    
    calendarEl.appendChild(dayEl);
  }
}
```

## Tilda Forms for Charter Inquiries

Create these essential forms for charter business:

### Yacht Inquiry Form

Configure with these fields:
```
- Name (required)
- Email (required)
- Phone (required)
- Preferred Yacht (dropdown from your fleet)
- Charter Dates (date range picker)
- Number of Guests (number input)
- Special Requests (textarea)
- How did you hear about us? (dropdown)
- Newsletter signup (checkbox)
```

Form submission settings:
```
1. Email notifications to your booking team
2. Zapier integration to your CRM
3. Thank you page with next steps
4. Automated email confirmation to client
```

## Cursor IDE Integration with Tilda

Using Cursor IDE enhances Tilda development for charter websites:

1. **Code Generation**: Use AI to generate custom HTML, CSS and JavaScript
2. **API Integrations**: Develop and test API connections
3. **Image Processing**: Create scripts for yacht image optimization
4. **Version Control**: Manage custom code versions
5. **Collaboration**: Work with team members on complex features

### Example: Cursor-Generated Yacht Filter

```javascript
// @cursor-generated
function initYachtFilters() {
  // Get filter elements
  const filters = {
    size: document.getElementById('yacht-size'),
    type: document.getElementById('yacht-type'),
    guests: document.getElementById('guest-count'),
    destination: document.getElementById('yacht-destination'),
    features: document.querySelectorAll('.feature-checkbox')
  };
  
  // Get yacht elements
  const yachts = document.querySelectorAll('.yacht-card');
  
  // Apply filters function
  function applyFilters() {
    yachts.forEach(yacht => {
      // Get yacht data attributes
      const yachtData = {
        size: yacht.dataset.size,
        type: yacht.dataset.type, 
        guests: parseInt(yacht.dataset.guests),
        destination: yacht.dataset.destination,
        features: yacht.dataset.features ? yacht.dataset.features.split(',') : []
      };
      
      // Check if yacht matches all selected filters
      let matches = true;
      
      // Size filter
      if (filters.size.value && filters.size.value !== yachtData.size) {
        matches = false;
      }
      
      // Type filter
      if (filters.type.value && filters.type.value !== yachtData.type) {
        matches = false;
      }
      
      // Guest filter
      if (filters.guests.value && parseInt(filters.guests.value) > yachtData.guests) {
        matches = false;
      }
      
      // Destination filter
      if (filters.destination.value && filters.destination.value !== yachtData.destination) {
        matches = false;
      }
      
      // Feature filters
      const selectedFeatures = [];
      filters.features.forEach(checkbox => {
        if (checkbox.checked) {
          selectedFeatures.push(checkbox.value);
        }
      });
      
      if (selectedFeatures.length > 0) {
        const hasAllFeatures = selectedFeatures.every(feature => 
          yachtData.features.includes(feature)
        );
        if (!hasAllFeatures) {
          matches = false;
        }
      }
      
      // Show or hide yacht based on filter match
      yacht.style.display = matches ? 'block' : 'none';
    });
    
    // Update count of visible yachts
    const visibleCount = document.querySelectorAll('.yacht-card[style="display: block"]').length;
    document.getElementById('results-count').textContent = `${visibleCount} yachts found`;
  }
  
  // Add event listeners to all filter controls
  filters.size.addEventListener('change', applyFilters);
  filters.type.addEventListener('change', applyFilters);
  filters.guests.addEventListener('change', applyFilters);
  filters.destination.addEventListener('change', applyFilters);
  
  filters.features.forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
  });
  
  // Initialize
  applyFilters();
}
```

## SEO Optimization for Charter Websites

Implement these charter-specific SEO techniques in Tilda:

1. **Yacht-Specific Schema Markup**:
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org/",
     "@type": "Product",
     "name": "Motor Yacht Excellence",
     "image": "https://yourdomain.com/images/yachts/excellence.jpg",
     "description": "Luxury 80ft motor yacht available for charter in the Mediterranean",
     "brand": {
       "@type": "Brand",
       "name": "Sunseeker"
     },
     "offers": {
       "@type": "Offer",
       "priceCurrency": "USD",
       "price": "25000",
       "priceValidUntil": "2023-12-31",
       "availability": "https://schema.org/InStock"
     }
   }
   </script>
   ```

2. **Location-Based Pages**:
   Create dedicated pages for each charter destination with:
   - Location-specific H1 tags: "Yacht Charters in [Location]"
   - Location schema markup
   - Local landmarks and attractions
   - Region-specific yacht recommendations

3. **Yacht Technical Specifications**:
   Include detailed specifications in HTML tables for better search visibility:
   ```html
   <table class="yacht-specs">
     <tr><th>Length</th><td>80 feet (24.4m)</td></tr>
     <tr><th>Builder</th><td>Sunseeker</td></tr>
     <tr><th>Year</th><td>2020</td></tr>
     <tr><th>Guests</th><td>8 in 4 cabins</td></tr>
     <tr><th>Crew</th><td>4</td></tr>
     <tr><th>Cruising Speed</th><td>22 knots</td></tr>
   </table>
   ```

## Performance Optimization

Optimize your Tilda charter website with these techniques:

1. **Image Optimization Pipeline**:
   - Resize yacht images to 2000px max width
   - Compress JPGs to 80% quality
   - Use WebP format with JPG fallback
   - Implement lazy loading

2. **Critical Render Path**:
   - Move non-essential JavaScript to footer
   - Inline critical CSS
   - Defer third-party scripts
   - Use responsive images with srcset

3. **Mobile Optimization**:
   ```css
   @media (max-width: 768px) {
     .yacht-gallery {
       flex-direction: column;
     }
     .yacht-specs {
       font-size: 14px;
     }
     .calendar-grid {
       grid-template-columns: repeat(7, 1fr);
     }
   }
   ```

## Maintenance and Updates

Keep your Tilda charter website current with:

1. **Seasonal Updates**:
   - Update hero images quarterly
   - Refresh destination information seasonally
   - Update availability calendars weekly
   - Revise pricing annually or as needed

2. **Content Calendar**:
   - Blog posts about destinations: Monthly
   - New yacht additions: As available
   - Special offers: Quarterly
   - Customer testimonials: Monthly

3. **Technical Maintenance**:
   - Check form submissions: Weekly
   - Test booking flow: Monthly
   - Update plugins and integrations: Quarterly
   - Full site audit: Annually

## Next Steps

To implement Tilda for your charter business:

1. [Register for a Tilda Business account](https://tilda.cc/pricing/)
2. Follow our [step-by-step setup guide](../getting-started)
3. Use our [charter website templates](../resources/templates)
4. Implement the [client funnel strategy](../client-funnel/overview) 