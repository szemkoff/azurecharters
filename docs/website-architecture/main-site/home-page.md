# Main Website Home Page Implementation

This guide provides detailed instructions for implementing the home page of azureyachtgroup.com (Project ID: 4198911) with special emphasis on the charter services section.

## Home Page Elements

The main website's home page should include the following key elements:

1. **Hero Banner with Primary CTAs**
2. **Featured Yacht Listings** (Brokerage section)
3. **Charter Services Section** (with link to azurcharters.com)
4. **Company Highlights**
5. **Client Testimonials**
6. **Quick Search Widget**

## Charter Services Section Implementation

This section is critical for maintaining visibility of the charter business while supporting the separate investor structure.

### Design Specifications

The Charter Services Section should be positioned prominently after the Featured Yacht Listings section and include:

- **Section Title**: "Luxury Yacht Charters"
- **Background**: High-contrast background to distinguish from surrounding sections
- **Visual Elements**: Premium imagery of charter experiences
- **Branding Consistency**: Maintain consistent branding while indicating the distinct charter business

### Content Components

1. **Charter Introduction**:
   ```html
   <div class="charter-intro">
     <h2>Experience Unparalleled Charter Adventures</h2>
     <p>Azure Yacht Group offers exceptional charter experiences through our dedicated charter division. Explore our curated fleet of luxury vessels available for unforgettable journeys.</p>
   </div>
   ```

2. **Featured Charter Yachts** (2-3 highlighted vessels):
   ```html
   <div class="featured-charters-grid">
     <div class="charter-card">
       <img src="/images/charters/eternal-spark.jpg" alt="Eternal Spark Yacht">
       <h3>Eternal Spark</h3>
       <p>120ft | 8 Guests | 4 Cabins</p>
       <div class="charter-price">From $35,000/week</div>
     </div>
     <!-- Additional charter cards -->
   </div>
   ```

3. **Call-to-Action Button** (prominent, linking to charter site):
   ```html
   <div class="charter-cta">
     <a href="https://azurcharters.com" class="btn btn-primary btn-large">
       Explore Our Charter Fleet
     </a>
     <p class="cta-note">Visit our dedicated charter website</p>
   </div>
   ```

### Tilda Implementation Steps

1. **Create Zero Block** for the Charter Services Section:
   - Use Tilda's Zero Block editor
   - Set up responsive grid layout
   - Configure custom styling to match brand guidelines

2. **Add Section Content**:
   - Implement intro text component
   - Create carousel or grid for featured yachts
   - Add prominent CTA button with external link

3. **Style Configuration**:
   - Set background to distinguish from other sections
   - Use visual indicators that this links to a separate site
   - Ensure mobile-friendly layout

4. **Data Integration**:
   - Connect to data source for featured charters
   - Ensure yacht details are accurate and current
   - Set up analytics tracking for CTA button clicks

## Implementation Code

### CSS Styling

```css
/* Charter section styling */
.charter-services-section {
  background-color: #f5f8fa;
  padding: 80px 0;
  border-top: 1px solid #e1e8ed;
  border-bottom: 1px solid #e1e8ed;
}

.charter-intro {
  max-width: 800px;
  margin: 0 auto 50px;
  text-align: center;
}

.charter-intro h2 {
  font-size: 36px;
  color: #0078D4;
  margin-bottom: 20px;
}

.featured-charters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.charter-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.charter-card:hover {
  transform: translateY(-5px);
}

.charter-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.charter-card h3 {
  padding: 15px 20px 5px;
  font-size: 24px;
  margin: 0;
}

.charter-card p {
  padding: 0 20px;
  color: #555;
}

.charter-price {
  padding: 0 20px 20px;
  font-weight: bold;
  color: #0078D4;
}

.charter-cta {
  text-align: center;
  margin-top: 30px;
}

.btn-primary {
  background-color: #0078D4;
  color: white;
  padding: 12px 30px;
  font-size: 18px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #005a9e;
}

.cta-note {
  margin-top: 10px;
  color: #777;
  font-size: 14px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .charter-services-section {
    padding: 50px 20px;
  }
  
  .charter-intro h2 {
    font-size: 28px;
  }
  
  .featured-charters-grid {
    grid-template-columns: 1fr;
  }
}
```

## Analytics Integration

To track user interaction with the Charter Services Section:

```javascript
// Track charter section visibility
function trackCharterSectionVisibility() {
  const section = document.querySelector('.charter-services-section');
  
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // Send analytics event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'charter_section_viewed',
        'section': 'home_charter_services'
      });
      observer.disconnect();
    }
  }, { threshold: 0.5 });
  
  observer.observe(section);
}

// Track CTA clicks
function trackCharterCTAClicks() {
  const ctaButton = document.querySelector('.charter-cta .btn-primary');
  
  ctaButton.addEventListener('click', () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'charter_cta_clicked',
      'cta_text': ctaButton.textContent.trim()
    });
  });
}

// Initialize tracking
document.addEventListener('DOMContentLoaded', () => {
  trackCharterSectionVisibility();
  trackCharterCTAClicks();
});
```

## Content Update Process

To keep the Charter Services Section current:

1. **Regular Reviews**: Schedule bi-weekly reviews of featured charter yachts
2. **Data Synchronization**: Implement automated sync from charter database
3. **Analytics Monitoring**: Track CTR and conversions from this section
4. **A/B Testing**: Regularly test different messaging and imagery

## Next Steps

After implementing the home page with the Charter Services Section:

1. Document any custom JavaScript or CSS for future reference
2. Set up tracking dashboards for cross-site navigation
3. Create a content update schedule for the featured yachts
4. Implement similar cross-linking from the charter site back to the main site

---

*Last Updated: May 23, 2025* 