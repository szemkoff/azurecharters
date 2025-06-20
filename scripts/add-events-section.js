/**
 * Azure Yacht Group - Events Section Implementation Helper
 * Script to assist with adding SV401 Events section to Tilda website
 * Project ID: 4198911 (azureyachtgroup.com)
 */

// Events Section Configuration
const eventsConfig = {
  blockType: 'SV401',
  projectId: '4198911',
  sectionId: 'events',
  
  // Section Header
  header: {
    title: 'Luxury Yacht Events & Experiences',
    subtitle: 'Curated Maritime Events for Unforgettable Moments',
    description: 'Transform your special occasions into extraordinary maritime experiences. From corporate events to intimate celebrations, our luxury yacht events create lasting memories on the water.'
  },
  
  // Event Service Cards
  services: [
    {
      id: 'corporate-meetings',
      title: 'Executive Yacht Meetings',
      description: 'Transform business meetings into exclusive maritime experiences. Full audiovisual equipment, catering, and professional service included.',
      icon: 'business',
      features: [
        '4-8 hour packages',
        '12-30 guests capacity', 
        'Miami Harbor location',
        'From $5,000 per event'
      ],
      category: 'Corporate',
      pricing: {
        base: 5000,
        currency: 'USD',
        unit: 'event'
      }
    },
    {
      id: 'wedding-celebrations',
      title: 'Maritime Wedding Experience',
      description: 'Your dream wedding on the water. Complete ceremony setup, catering, photography coordination, and reception services.',
      icon: 'wedding',
      features: [
        '6-12 hour packages',
        'Up to 100 guests',
        'Custom routes available',
        'From $15,000 per event'
      ],
      category: 'Celebrations',
      pricing: {
        base: 15000,
        currency: 'USD',
        unit: 'event'
      }
    },
    {
      id: 'anniversary-cruises',
      title: 'Romantic Anniversary Cruise',
      description: 'Celebrate your special day with a private cruise featuring champagne service, gourmet dinner, and sunset views.',
      icon: 'anniversary',
      features: [
        '4 hour duration',
        '2-20 guests capacity',
        'Sunset route specialty',
        'From $3,500 per event'
      ],
      category: 'Celebrations',
      pricing: {
        base: 3500,
        currency: 'USD',
        unit: 'event'
      }
    },
    {
      id: 'team-building',
      title: 'Corporate Team Building',
      description: 'Strengthen team bonds with curated sailing activities, team challenges, and gourmet dining experiences.',
      icon: 'team',
      features: [
        'Full day packages',
        '20-50 guests capacity',
        'Florida Keys location',
        'From $8,500 per event'
      ],
      category: 'Corporate',
      pricing: {
        base: 8500,
        currency: 'USD',
        unit: 'event'
      }
    },
    {
      id: 'wine-tasting',
      title: 'Wine & Waves Experience',
      description: 'Curated wine tasting with professional sommelier, paired gourmet appetizers, and coastal cruising.',
      icon: 'wine',
      features: [
        '3 hour duration',
        '10-30 guests capacity',
        'Coastal waters route',
        'From $4,500 per event'
      ],
      category: 'Experiences',
      pricing: {
        base: 4500,
        currency: 'USD',
        unit: 'event'
      }
    },
    {
      id: 'entertainment-cruises',
      title: 'Jazz at Sea',
      description: 'Live jazz performances, craft cocktails, and gourmet appetizers while cruising into the sunset.',
      icon: 'music',
      features: [
        '3 hour duration',
        '20-40 guests capacity',
        'Harbor route',
        'From $6,000 per event'
      ],
      category: 'Experiences',
      pricing: {
        base: 6000,
        currency: 'USD',
        unit: 'event'
      }
    }
  ],
  
  // Styling Configuration
  styling: {
    colors: {
      primary: '#1B3C59',
      secondary: '#456789',
      accent: '#D4AF37',
      textDark: '#333333',
      textLight: '#FFFFFF',
      background: '#F5F8FA'
    },
    layout: {
      cardsPerRow: {
        desktop: 3,
        tablet: 2,
        mobile: 1
      },
      cardSpacing: '30px',
      sectionPadding: '80px 0',
      cardPadding: '30px'
    }
  },
  
  // Call-to-Action Configuration
  cta: {
    primary: {
      text: 'Plan Your Event',
      link: '/contact-events',
      style: 'primary'
    },
    secondary: {
      text: 'View Event Portfolio',
      link: '/events-gallery',
      style: 'secondary'
    }
  }
};

// Helper Functions
const EventsHelper = {
  
  /**
   * Generate Tilda block configuration JSON
   */
  generateTildaConfig() {
    const config = {
      blockType: eventsConfig.blockType,
      title: eventsConfig.header.title,
      subtitle: eventsConfig.header.subtitle,
      description: eventsConfig.header.description,
      services: eventsConfig.services.map(service => ({
        title: service.title,
        description: service.description,
        icon: service.icon,
        features: service.features.join('\n')
      }))
    };
    
    return JSON.stringify(config, null, 2);
  },
  
  /**
   * Generate CSS for the events section
   */
  generateCSS() {
    const { colors, layout } = eventsConfig.styling;
    
    return `
/* Events Section - SV401 Block Styling */
.events-section {
  background-color: ${colors.background};
  padding: ${layout.sectionPadding};
}

.events-section .t-container {
  max-width: 1200px;
  margin: 0 auto;
}

.events-section .t-card {
  background: ${colors.textLight};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: ${layout.cardPadding};
  height: 100%;
  margin-bottom: ${layout.cardSpacing};
}

.events-section .t-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

.events-section .t-card-title {
  color: ${colors.primary};
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
  color: ${colors.accent};
}

/* CTA Buttons */
.events-section .cta-container {
  text-align: center;
  margin-top: 50px;
}

.events-section .btn-primary {
  background-color: ${colors.primary};
  color: ${colors.textLight};
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  margin: 0 10px;
  transition: background-color 0.3s ease;
}

.events-section .btn-primary:hover {
  background-color: ${colors.secondary};
}

.events-section .btn-secondary {
  background-color: transparent;
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  padding: 13px 28px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  margin: 0 10px;
  transition: all 0.3s ease;
}

.events-section .btn-secondary:hover {
  background-color: ${colors.primary};
  color: ${colors.textLight};
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
  
  .events-section .cta-container {
    margin-top: 30px;
  }
  
  .events-section .btn-primary,
  .events-section .btn-secondary {
    display: block;
    margin: 10px auto;
    text-align: center;
  }
}
`;
  },
  
  /**
   * Generate JavaScript for enhanced functionality
   */
  generateJS() {
    return `
// Events Section Enhanced Functionality
document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scrolling to events section
  const eventsLinks = document.querySelectorAll('a[href="#events"]');
  eventsLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const eventsSection = document.querySelector('#events');
      if (eventsSection) {
        eventsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Analytics tracking for event cards
  const eventCards = document.querySelectorAll('.events-section .t-card');
  eventCards.forEach((card, index) => {
    card.addEventListener('click', function() {
      const cardTitle = card.querySelector('.t-card-title');
      if (cardTitle && typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          'event_category': 'Events',
          'event_label': cardTitle.textContent,
          'event_value': index + 1
        });
      }
    });
  });
  
  // Enhanced hover effects for mobile
  if ('ontouchstart' in window) {
    eventCards.forEach(card => {
      card.addEventListener('touchstart', function() {
        this.classList.add('touch-active');
      });
      
      card.addEventListener('touchend', function() {
        setTimeout(() => {
          this.classList.remove('touch-active');
        }, 150);
      });
    });
  }
  
  // Lazy loading for event images (if any)
  const eventImages = document.querySelectorAll('.events-section img[data-src]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    
    eventImages.forEach(img => imageObserver.observe(img));
  }
});
`;
  },
  
  /**
   * Generate implementation checklist
   */
  generateChecklist() {
    return `
# Events Section Implementation Checklist

## Pre-Implementation
- [ ] Access Tilda account for Project ID: ${eventsConfig.projectId}
- [ ] Identify target page for events section
- [ ] Backup current page configuration
- [ ] Review existing page layout and styling

## Block Implementation
- [ ] Add SV401 block to page
- [ ] Configure section header with title and description
- [ ] Add ${eventsConfig.services.length} service cards with content
- [ ] Set up proper icons for each service
- [ ] Configure pricing display format

## Styling & Design
- [ ] Apply custom CSS styling
- [ ] Test responsive behavior on mobile/tablet
- [ ] Verify color scheme matches brand guidelines
- [ ] Check typography consistency
- [ ] Test hover effects and animations

## Content & SEO
- [ ] Add alt text for all icons/images
- [ ] Configure meta information for block
- [ ] Set up proper heading hierarchy
- [ ] Add structured data markup if applicable
- [ ] Test keyword integration

## Functionality
- [ ] Add JavaScript for enhanced functionality
- [ ] Set up analytics tracking
- [ ] Configure smooth scrolling
- [ ] Test all interactive elements
- [ ] Verify mobile touch interactions

## Integration
- [ ] Add events link to main navigation
- [ ] Create anchor links for direct access
- [ ] Set up CTA button links
- [ ] Connect with contact forms
- [ ] Update sitemap

## Testing
- [ ] Test on desktop browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Verify loading speed and performance
- [ ] Check accessibility compliance
- [ ] Test form submissions and tracking

## Launch
- [ ] Publish changes to live site
- [ ] Monitor analytics for first 24 hours
- [ ] Check for any console errors
- [ ] Verify all links work correctly
- [ ] Update documentation

## Post-Launch
- [ ] Set up regular content review schedule
- [ ] Monitor conversion rates
- [ ] Gather user feedback
- [ ] Plan seasonal updates
- [ ] Schedule quarterly reviews
`;
  },
  
  /**
   * Export all configuration and code
   */
  exportAll() {
    return {
      config: this.generateTildaConfig(),
      css: this.generateCSS(),
      javascript: this.generateJS(),
      checklist: this.generateChecklist(),
      services: eventsConfig.services,
      styling: eventsConfig.styling
    };
  }
};

// Export for use in Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { eventsConfig, EventsHelper };
} else if (typeof window !== 'undefined') {
  window.AzureEventsHelper = { eventsConfig, EventsHelper };
}

// CLI Usage Example
if (require.main === module) {
  console.log('Azure Yacht Group - Events Section Implementation Helper');
  console.log('====================================================');
  
  const action = process.argv[2];
  
  switch (action) {
    case 'config':
      console.log('Tilda Configuration:');
      console.log(EventsHelper.generateTildaConfig());
      break;
      
    case 'css':
      console.log('CSS Styling:');
      console.log(EventsHelper.generateCSS());
      break;
      
    case 'js':
      console.log('JavaScript Code:');
      console.log(EventsHelper.generateJS());
      break;
      
    case 'checklist':
      console.log('Implementation Checklist:');
      console.log(EventsHelper.generateChecklist());
      break;
      
    case 'all':
      const exported = EventsHelper.exportAll();
      console.log('Complete Export:');
      console.log(JSON.stringify(exported, null, 2));
      break;
      
    default:
      console.log('Usage: node add-events-section.js [config|css|js|checklist|all]');
      console.log('');
      console.log('Available commands:');
      console.log('  config    - Generate Tilda block configuration');
      console.log('  css       - Generate CSS styling code');
      console.log('  js        - Generate JavaScript functionality');
      console.log('  checklist - Generate implementation checklist');
      console.log('  all       - Export all components');
  }
} 