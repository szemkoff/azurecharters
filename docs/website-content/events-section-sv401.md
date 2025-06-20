---
id: events-section-sv401
title: Events Section Implementation - SV401 Block
sidebar_position: 7
description: Complete implementation guide for adding an events section to azureyachtgroup.com using Tilda's SV401 Services block
---

# Events Section Implementation - SV401 Block

This document provides detailed instructions for implementing an events section on the Azure Yacht Group main website (azureyachtgroup.com, Project ID: 4198911) using Tilda's SV401 Services block.

## Overview

The SV401 block is perfect for showcasing yacht event services in a structured, professional format. This implementation will add a new section to the main website highlighting Azure Yacht Group's event planning and hosting capabilities.

## Implementation Steps

### Step 1: Access Tilda Editor

1. Log into your Tilda account
2. Navigate to Project ID: 4198911 (azureyachtgroup.com)
3. Open the page where you want to add the events section (typically the home page)
4. Click "Add Block" where you want the events section to appear

### Step 2: Add SV401 Block

1. In the Block Library, navigate to "Services" category
2. Find and select block **SV401**
3. Add it to your page
4. Position it appropriately in your page layout

### Step 3: Configure Block Content

#### Block Header Configuration
- **Section Title**: "Luxury Yacht Events & Experiences"
- **Section Subtitle**: "Curated Maritime Events for Unforgettable Moments"
- **Description**: "Transform your special occasions into extraordinary maritime experiences. From corporate events to intimate celebrations, our luxury yacht events create lasting memories on the water."

#### Service Cards Configuration

Configure the SV401 block to display 6 event service cards:

##### Card 1: Corporate Events
- **Title**: "Executive Yacht Meetings"
- **Description**: "Transform business meetings into exclusive maritime experiences. Full audiovisual equipment, catering, and professional service included."
- **Icon**: Business/Meeting icon
- **Features**:
  - 4-8 hour packages
  - 12-30 guests capacity
  - Miami Harbor location
  - From $5,000 per event

##### Card 2: Wedding Celebrations
- **Title**: "Maritime Wedding Experience"
- **Description**: "Your dream wedding on the water. Complete ceremony setup, catering, photography coordination, and reception services."
- **Icon**: Wedding/Heart icon
- **Features**:
  - 6-12 hour packages
  - Up to 100 guests
  - Custom routes available
  - From $15,000 per event

##### Card 3: Anniversary Celebrations
- **Title**: "Romantic Anniversary Cruise"
- **Description**: "Celebrate your special day with a private cruise featuring champagne service, gourmet dinner, and sunset views."
- **Icon**: Anniversary/Celebration icon
- **Features**:
  - 4 hour duration
  - 2-20 guests capacity
  - Sunset route specialty
  - From $3,500 per event

##### Card 4: Team Building Events
- **Title**: "Corporate Team Building"
- **Description**: "Strengthen team bonds with curated sailing activities, team challenges, and gourmet dining experiences."
- **Icon**: Team/Group icon
- **Features**:
  - Full day packages
  - 20-50 guests capacity
  - Florida Keys location
  - From $8,500 per event

##### Card 5: Wine Tasting Experiences
- **Title**: "Wine & Waves Experience"
- **Description**: "Curated wine tasting with professional sommelier, paired gourmet appetizers, and coastal cruising."
- **Icon**: Wine/Glass icon
- **Features**:
  - 3 hour duration
  - 10-30 guests capacity
  - Coastal waters route
  - From $4,500 per event

##### Card 6: Entertainment Cruises
- **Title**: "Jazz at Sea"
- **Description**: "Live jazz performances, craft cocktails, and gourmet appetizers while cruising into the sunset."
- **Icon**: Music/Entertainment icon
- **Features**:
  - 3 hour duration
  - 20-40 guests capacity
  - Harbor route
  - From $6,000 per event

### Step 4: Design and Styling

#### Color Scheme
- **Primary Color**: #1B3C59 (Azure navy)
- **Secondary Color**: #456789 (Azure blue)
- **Accent Color**: #D4AF37 (Gold)
- **Text Dark**: #333333
- **Background**: #F5F8FA

#### Typography Settings
- **Section Title**: Large, bold heading font
- **Card Titles**: Medium, semi-bold
- **Descriptions**: Regular body text
- **Features**: Small, clean font

#### Layout Configuration
- **Cards per Row**: 3 cards (desktop), 2 cards (tablet), 1 card (mobile)
- **Card Spacing**: 30px gap between cards
- **Section Padding**: 80px top/bottom, responsive margins
- **Card Height**: Auto-adjust to content

### Step 5: Call-to-Action Setup

#### Primary CTA Button
- **Text**: "Plan Your Event"
- **Link**: Link to contact form or events inquiry page
- **Style**: Primary button styling matching site theme
- **Position**: Center-aligned below the cards

#### Secondary CTA
- **Text**: "View Event Portfolio"
- **Link**: Link to events gallery or case studies
- **Style**: Secondary button or text link

### Step 6: SEO Optimization

#### Meta Information
- **Block Title**: "Yacht Event Services"
- **Alt Text for Icons**: Descriptive text for each service icon
- **Structured Data**: Add Event schema markup if applicable

#### Keywords Integration
- Luxury yacht events
- Corporate yacht meetings
- Yacht wedding venues
- Maritime celebrations
- Team building cruises
- Wine tasting cruises

### Step 7: Mobile Responsiveness

#### Mobile Settings
- **Single Column Layout**: Stack cards vertically on mobile
- **Touch-Friendly Buttons**: Ensure adequate button sizing
- **Readable Text**: Maintain legible font sizes
- **Optimized Images**: Compress icons for fast loading

### Step 8: Integration with Existing Site

#### Navigation Integration
- Add "Events" to main navigation menu
- Create anchor link (#events) for direct access
- Update sitemap to include events section

#### Cross-Site Linking
- Link to charter website for yacht availability
- Connect with contact forms for event inquiries
- Integrate with existing booking systems

## Technical Implementation Code

### Custom CSS for SV401 Block

```css
/* Events Section Styling */
.events-section .t-container {
    max-width: 1200px;
    margin: 0 auto;
}

.events-section .t-card {
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 30px;
    height: 100%;
}

.events-section .t-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

.events-section .t-card-title {
    color: #1B3C59;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
}

.events-section .t-card-descr {
    color: #555555;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
}

.events-section .event-features {
    list-style: none;
    padding: 0;
    margin: 0;
}

.events-section .event-features li {
    padding: 5px 0;
    border-bottom: 1px solid #f0f0f0;
    font-size: 14px;
    color: #666;
}

.events-section .event-features li:last-child {
    border-bottom: none;
    font-weight: 600;
    color: #D4AF37;
}

/* Responsive Design */
@media (max-width: 768px) {
    .events-section .t-card {
        padding: 20px;
        margin-bottom: 20px;
    }
    
    .events-section .t-card-title {
        font-size: 20px;
    }
}
```

### JavaScript for Enhanced Functionality

```javascript
// Enhanced Events Section Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to events section
    const eventsLinks = document.querySelectorAll('a[href="#events"]');
    eventsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#events').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add analytics tracking for event card interactions
    const eventCards = document.querySelectorAll('.events-section .t-card');
    eventCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            // Track event card clicks
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Events',
                    'event_label': card.querySelector('.t-card-title').textContent,
                    'event_value': index + 1
                });
            }
        });
    });
});
```

## Content Management

### Updating Event Information
1. Access the Tilda editor for your project
2. Navigate to the page with the SV401 events block
3. Click on the block to edit content
4. Update service descriptions, pricing, or features as needed
5. Publish changes

### Adding New Event Services
1. In the SV401 block settings, look for "Add Item" or similar option
2. Configure new service card with title, description, and features
3. Ensure consistent styling with existing cards
4. Update navigation and internal links as needed

### Seasonal Updates
- Update event descriptions for seasonal offerings
- Adjust pricing for peak/off-peak seasons
- Add special holiday or themed events
- Update availability and booking information

## Analytics and Tracking

### Key Metrics to Track
- Events section page views
- Event card click-through rates
- Inquiry form submissions from events section
- Time spent on events section
- Mobile vs desktop engagement

### Conversion Tracking
- Set up goal tracking for event inquiries
- Monitor which event types generate most interest
- Track seasonal booking patterns
- Measure ROI from events marketing

## Maintenance Schedule

### Weekly
- Check for broken links
- Monitor inquiry form submissions
- Update availability information

### Monthly
- Review analytics data
- Update seasonal content
- Check mobile responsiveness
- Test all functionality

### Quarterly
- Comprehensive content review
- Update pricing information
- Refresh event descriptions
- Optimize for new search trends

## Next Steps

1. **Immediate**: Implement SV401 block with provided content
2. **Short-term**: Set up tracking and analytics
3. **Medium-term**: Create dedicated events landing page
4. **Long-term**: Integrate with booking system and CRM

---

*Implementation Guide Created: January 2025*
*Last Updated: January 2025*
*Next Review: February 2025* 