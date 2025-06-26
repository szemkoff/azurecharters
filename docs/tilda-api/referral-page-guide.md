---
title: Tilda Referral Partner Page - Build Guide
sidebar_label: Referral Page Guide
---

# Tilda Referral Partner Page - Build Guide

## Page Structure Overview

**Page URL:** `/referral-partners`  
**Page Title:** Partner with Azure Yacht Group - Referral Program  
**Meta Description:** Join Azure Yacht Group's exclusive referral partner network. Connect your clients with luxury yacht charters in the Caribbean and Mediterranean.

---

## Block 1: Header (Shared)
**Block Type:** Use existing shared header  
**Settings:** Standard navigation with "Partner Program" highlighted

---

## Block 2: Hero Section
**Block Type:** T104 - Cover with text and button  
**Background:** Luxury yacht image (use existing yacht photos)

### Content:
**Headline:** Partner with Azure Yacht Group  
**Subheadline:** Join our exclusive referral network and connect your clients with unforgettable luxury yacht experiences

**Button Text:** Become a Partner  
**Button Link:** #partner-application (anchor to form section)

**Background Image:** Use one of the yacht images from `/images/` folder

---

## Block 3: Introduction Section
**Block Type:** T030 - Text block with title  

### Content:
**Title:** Expand Your Service Offerings

**Text:**
Are you a travel advisor, concierge service, or luxury lifestyle professional? Partner with Azure Yacht Group to offer your clients access to premium yacht charter experiences in the world's most exclusive destinations.

Our referral partner program is designed for professionals who value quality, reliability, and exceptional service for their discerning clientele.

---

## Block 4: Benefits Grid
**Block Type:** T396 - Three columns with icons and text

### Column 1:
**Icon:** 🏆 (Trophy)
**Title:** Exclusive Rewards
**Text:** Earn attractive compensation for every successful referral that results in a confirmed charter booking.

### Column 2:
**Icon:** 🤝 (Handshake)
**Title:** Trusted Partnership
**Text:** Work with a fully licensed and insured yacht charter company with years of industry experience and IYBA compliance.

### Column 3:
**Icon:** 📊 (Chart)
**Title:** Real-Time Tracking
**Text:** Access your personalized dashboard to track referrals, status updates, and performance metrics in real-time.

---

## Block 5: How It Works
**Block Type:** T512 - Steps with numbers

### Step 1:
**Number:** 01
**Title:** Apply to Join
**Text:** Complete our simple partner application form with your professional details and client focus areas.

### Step 2:
**Number:** 02
**Title:** Get Approved
**Text:** Our team reviews your application and provides access to partner materials and your personal tracking dashboard.

### Step 3:
**Number:** 03
**Title:** Refer Clients
**Text:** Connect your clients with our charter specialists using your unique partner identification code.

### Step 4:
**Number:** 04
**Title:** Track & Earn
**Text:** Monitor your referrals through your personal dashboard and receive monthly payments for successful bookings.

---

## Block 6: Partner Types
**Block Type:** T702 - Two columns with images

### Column 1:
**Image:** Professional meeting/office setting
**Title:** Travel & Hospitality Professionals
**Text:** 
- Travel Advisors & Agencies
- Luxury Hotel Concierges  
- Event Planners
- Corporate Travel Managers

### Column 2:
**Image:** Luxury lifestyle/networking
**Title:** Lifestyle & Service Providers
**Text:**
- Wealth Management Advisors
- Real Estate Professionals
- Luxury Car Dealerships
- Private Club Managers

---

## Block 7: Partner Benefits
**Block Type:** T199 - Three columns with icons

### Column 1:
**Icon:** 💰 (Money)
**Title:** Competitive Compensation
**Text:** Attractive reward structure based on successful charter bookings with monthly payment processing.

### Column 2:
**Icon:** 📱 (Mobile)
**Title:** Professional Dashboard
**Text:** Personal tracking system showing all your referrals, their status, and performance metrics updated in real-time.

### Column 3:
**Icon:** 🎯 (Target)
**Title:** Marketing Support
**Text:** Professional marketing materials, yacht information, and dedicated support to help you succeed.

---

## Block 8: Destinations Highlight
**Block Type:** T199 - Gallery with text overlay

### Content:
**Title:** Charter Destinations We Cover

**Images:** Use existing destination photos
- Caribbean islands
- Mediterranean coastline
- Luxury marina shots

**Text Overlay:**
- Caribbean Islands
- Mediterranean Coast
- Exclusive Marinas

---

## Block 9: Partner Application Form
**Block Type:** T123 - Form with fields

### Form Fields:
**Company Information:**
- Company/Organization Name*
- Your Name*
- Title/Position*
- Business Email*
- Phone Number*
- Website URL

**Business Details:**
- Industry/Business Type* (dropdown)
  - Travel Agency
  - Hotel/Resort Concierge
  - Event Planning
  - Wealth Management
  - Real Estate
  - Other Professional Service
- Years in Business*
- Average Client Budget Range* (dropdown)
  - $5,000 - $10,000
  - $10,000 - $25,000
  - $25,000 - $50,000
  - $50,000+
- Primary Client Demographics (text area)

**Partnership Interest:**
- How did you hear about us? (dropdown)
  - Google Search
  - Social Media
  - Industry Referral
  - Existing Client
  - Other
- Expected referrals per year* (dropdown)
  - 1-5
  - 6-10
  - 11-25
  - 25+
- Additional comments (text area)

**Submit Button:** Submit Partner Application

**Form Action:** Integrates with your referral system application process

---

## Block 10: FAQ Section
**Block Type:** T111 - FAQ accordion

### FAQ Items:

**Q: What are the requirements to become a partner?**
A: We partner with established businesses and professionals who serve high-net-worth clients. You should have relevant industry experience and a client base interested in luxury travel experiences.

**Q: How long does the application process take?**
A: Most applications are reviewed within 2-3 business days. Once approved, you'll receive immediate access to your partner dashboard and marketing materials.

**Q: How do I track my referrals?**
A: Each partner receives a personalized dashboard where you can view all your referrals, their current status, and performance metrics in real-time.

**Q: When and how are payments processed?**
A: Payments are processed monthly via Zelle for all confirmed bookings from the previous month. You'll receive detailed reports with each payment.

**Q: What support do you provide to partners?**
A: Partners receive dedicated support, marketing materials, detailed yacht information, access to their tracking dashboard, and direct access to our charter specialists for client inquiries.

**Q: Do you work with international partners?**
A: Yes, we welcome partners worldwide. Our charter destinations are popular with international clients, and we have experience working across different time zones.

**Q: What information do I need to provide for a referral?**
A: Basic client contact information, preferred charter dates, group size, budget range, and any specific requirements. Our team handles all detailed planning and coordination.

---

## Block 11: Contact Section
**Block Type:** T118 - Contact info with map

### Content:
**Title:** Questions About Our Partner Program?

**Contact Info:**
Email: partners@azureyachtgroup.com  
Phone: [Your phone number]  
Hours: Monday-Friday, 9 AM - 6 PM EST

**Text:** Our partnership team is here to answer any questions about joining our referral network or supporting your client referrals.

---

## Block 12: Footer (Shared)
**Block Type:** Use existing shared footer  
**Settings:** Standard footer with all company links

---

## Form Integration Setup

### Integration with Referral System

**Form Processing Flow:**
1. Partner submits application via Tilda form
2. Form data captured and processed
3. Application review and approval process
4. Partner dashboard access provisioned
5. Welcome package sent with materials

### Technical Integration Options:

**Option 1: Google Forms Integration**
```html
<!-- Embed Google Form -->
<iframe src="https://docs.google.com/forms/d/e/[FORM_ID]/viewform?embedded=true" 
        width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">
</iframe>
```

**Option 2: Direct Form Processing**
```javascript
// Tilda form submission handler
window.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#partner-application-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(form);
        
        // Send to your processing endpoint
        fetch('/api/partner-application', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Show success message
            showSuccessMessage();
        })
        .catch(error => {
            // Handle error
            showErrorMessage();
        });
    });
});
```

---

## SEO & Analytics Settings

### SEO Configuration:
- **Page Title:** Partner with Azure Yacht Group - Luxury Yacht Charter Referrals
- **Meta Description:** Join our exclusive referral partner network. Connect your clients with premium yacht charters and earn attractive rewards. Apply today.
- **Keywords:** yacht charter referrals, luxury travel partners, yacht booking partners, travel agent partnerships

### Social Media Settings:
- **OG Title:** Partner with Azure Yacht Group
- **OG Description:** Join our exclusive referral partner network for luxury yacht charters
- **OG Image:** Use hero section yacht image

### Analytics Tracking:
- Google Analytics goal tracking for form submissions
- Conversion tracking for partner applications
- Partner page engagement metrics

---

## Mobile Optimization

### Mobile-Specific Considerations:
- Optimize form fields for mobile input
- Ensure images load quickly on mobile connections
- Test touch interactions for all buttons and links
- Verify form submission works on mobile devices
- Check readability of all text on smaller screens

### Mobile Testing Checklist:
- [ ] Form functionality tested on iOS and Android
- [ ] Images properly scaled for mobile viewing
- [ ] Navigation works smoothly on touch devices
- [ ] Page loading speed optimized for mobile
- [ ] Contact information easily accessible

---

## Launch Checklist

### Pre-Launch:
- [ ] All content blocks configured and tested
- [ ] Form integration working and tested
- [ ] Mobile responsiveness verified across devices
- [ ] SEO settings applied and verified
- [ ] Analytics tracking active and tested

### Post-Launch:
- [ ] Partner application workflow documented
- [ ] Email notifications set up for form submissions
- [ ] Page linked from main navigation menu
- [ ] Social media sharing functionality tested
- [ ] Partner onboarding process ready

### Integration Verification:
- [ ] Form submissions properly processed
- [ ] Partner dashboard access system ready
- [ ] Welcome email automation configured
- [ ] Marketing materials prepared for new partners

This Tilda referral page serves as the entry point for potential partners and integrates seamlessly with your filtered views referral system for complete partner management. 