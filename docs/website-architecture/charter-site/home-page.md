# Charter Website Home Page Implementation

This guide provides detailed instructions for implementing the home page of azurcharters.com (Project ID: 12993249) with emphasis on charter offerings and cross-site navigation to the main site.

## Home Page Elements

The charter website's home page should include the following key elements:

1. **Hero Banner with Charter-Focused CTAs**
2. **Featured Charter Yachts**
3. **Charter Experience Showcase**
4. **Destination Highlights**
5. **Charter Services & Packages**
6. **Client Testimonials**
7. **Charter Request Form**
8. **Main Site Reference Section**

## Featured Charter Yachts Section

This section should prominently display the available charter yachts with filterable options.

### Design Specifications

- **Layout**: Grid or carousel layout with large imagery
- **Filters**: Allow filtering by yacht size, capacity, price range, and destination
- **Sorting**: Options to sort by popularity, price, or size
- **Quick View**: Interactive elements to quickly view key specifications

### Implementation Steps

1. **Create Collection Block**:
   - Use Tilda's collection block feature for dynamic charter listings
   - Set up data structure with all necessary yacht information
   - Configure filters and sorting options

2. **Style Configuration**:
   - Ensure consistent branding with the main site
   - Use high-quality imagery optimized for web
   - Implement hover effects for interactive elements

3. **Mobile Optimization**:
   - Ensure responsive design for all screen sizes
   - Implement touch-friendly interactions for mobile

## Main Site Reference Section

This section is crucial for cross-site navigation and brand integration.

### Design Specifications

The Main Site Reference Section should:

- Be positioned strategically (either in the site footer or as a dedicated section)
- Visually indicate the relationship between the two websites
- Clearly communicate what users can find on the main site

### Content Components

```html
<div class="main-site-reference">
  <div class="reference-content">
    <h3>Discover More with Azure Yacht Group</h3>
    <p>Looking to purchase your own yacht? Visit our main website for brokerage services, custom yacht design, and more.</p>
    <div class="service-icons">
      <div class="service-icon">
        <img src="/icons/brokerage.svg" alt="Yacht Brokerage">
        <span>Yacht Brokerage</span>
      </div>
      <div class="service-icon">
        <img src="/icons/design.svg" alt="Custom Design">
        <span>Custom Design</span>
      </div>
      <div class="service-icon">
        <img src="/icons/management.svg" alt="Yacht Management">
        <span>Yacht Management</span>
      </div>
    </div>
    <a href="https://azureyachtgroup.com" class="main-site-button">
      Visit Azure Yacht Group
    </a>
  </div>
  <div class="reference-image">
    <img src="/images/main-site-preview.jpg" alt="Azure Yacht Group Website">
  </div>
</div>
```

### Implementation Steps

1. **Add Zero Block** for the Main Site Reference Section:
   - Create a visually distinct section
   - Implement two-column layout (content and preview image)
   - Add icons representing main site services

2. **Style Configuration**:
   - Use complementary styling to main site
   - Ensure clear visual hierarchy
   - Highlight CTA button for main site navigation

## Implementation Code

### CSS Styling for Main Site Reference

```css
/* Main site reference section styling */
.main-site-reference {
  display: flex;
  background-color: #001f3f;
  color: white;
  padding: 60px 0;
  margin: 80px 0 0 0;
}

.reference-content {
  flex: 1;
  padding: 0 50px;
}

.reference-content h3 {
  font-size: 32px;
  margin-bottom: 20px;
}

.reference-content p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 600px;
}

.service-icons {
  display: flex;
  margin-bottom: 30px;
}

.service-icon {
  text-align: center;
  margin-right: 40px;
}

.service-icon img {
  height: 50px;
  margin-bottom: 10px;
}

.service-icon span {
  display: block;
  font-size: 14px;
}

.main-site-button {
  display: inline-block;
  background-color: white;
  color: #001f3f;
  padding: 12px 30px;
  font-size: 16px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.main-site-button:hover {
  background-color: #f0f0f0;
}

.reference-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
}

.reference-image img {
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .main-site-reference {
    flex-direction: column;
    padding: 40px 20px;
  }
  
  .reference-content {
    padding: 0;
    margin-bottom: 40px;
  }
  
  .reference-image {
    padding: 0;
  }
  
  .service-icons {
    flex-wrap: wrap;
  }
  
  .service-icon {
    margin-bottom: 20px;
    margin-right: 20px;
  }
}
```

## Interactive Charter Search Implementation

The charter search component should allow users to quickly filter available charter options.

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // Charter search functionality
  const searchForm = document.querySelector('.charter-search-form');
  
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const destination = document.getElementById('destination').value;
      const guestCount = document.getElementById('guest-count').value;
      const dateRange = document.getElementById('date-range').value;
      
      // Track search event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'charter_search',
        'search_params': {
          'destination': destination,
          'guests': guestCount,
          'dates': dateRange
        }
      });
      
      // Redirect to search results with parameters
      window.location.href = `/charter-search?destination=${encodeURIComponent(destination)}&guests=${encodeURIComponent(guestCount)}&dates=${encodeURIComponent(dateRange)}`;
    });
  }
  
  // Track main site referral clicks
  const mainSiteButton = document.querySelector('.main-site-button');
  
  if (mainSiteButton) {
    mainSiteButton.addEventListener('click', () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'main_site_referral',
        'referral_source': 'charter_home_page'
      });
    });
  }
});
```

## Destination Highlights Section

The Destination Highlights section should showcase popular charter destinations.

```html
<div class="destination-highlights">
  <h2>Popular Charter Destinations</h2>
  <div class="destinations-grid">
    <div class="destination-card" data-destination="mediterranean">
      <img src="/images/destinations/mediterranean.jpg" alt="Mediterranean">
      <div class="destination-overlay">
        <h3>Mediterranean</h3>
        <p>Explore the azure waters of the Mediterranean</p>
        <a href="/charters/mediterranean" class="destination-link">View Charters</a>
      </div>
    </div>
    <!-- Additional destination cards -->
  </div>
</div>
```

## Cross-Site SEO Considerations

To optimize for search engines while maintaining the dual-site architecture:

1. **Canonical Links**: Ensure content that appears on both sites has proper canonical tags
2. **Structured Data**: Implement Schema.org markup for yacht charters
3. **Cross-Linking Strategy**: Create meaningful links between sites that provide context
4. **Sitemap Configuration**: Include clear indications of site relationships in sitemaps

## Content Update Process

To maintain the charter home page:

1. **Featured Yacht Rotation**: Update featured yachts monthly based on availability
2. **Seasonal Destinations**: Highlight seasonal charter destinations throughout the year
3. **Cross-Site Promotions**: Coordinate promotions between main and charter sites
4. **Analytics Review**: Monthly review of traffic patterns between sites

## Next Steps

After implementing the charter site home page:

1. Create detailed pages for each charter yacht
2. Implement booking functionality and availability calendar
3. Develop destination guides for major charter regions
4. Set up regular content synchronization between main and charter sites

---

*Last Updated: May 23, 2025* 