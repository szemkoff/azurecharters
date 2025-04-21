---
sidebar_position: 4
title: Technology Stack
description: Core technologies that power the Charter Framework
---

# Technology Stack

The Charter Framework leverages several powerful technologies to create a seamless business system. This document outlines the core components and how they work together.

## Core Technologies

The framework is built on three primary technology pillars:

```mermaid
%%{init: {'theme': 'neutral'}}%%
flowchart TD
    A[Charter Framework Technology Stack] --> B[Tilda]
    A --> C[HubSpot]
    A --> D[Docusaurus]
    
    B --> B1[Website Platform]
    C --> C1[CRM/Marketing]
    D --> D1[Documentation]
    
    classDef primary fill:#007FFF,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef technology fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef function fill:#D4A017,color:#ffffff,stroke:#333,stroke-width:1px;
    
    class A primary;
    class B,C,D technology;
    class B1,C1,D1 function;
```

### 1. Tilda (Website Platform)

[Tilda](https://tilda.cc/) provides the customer-facing website where yacht listings are displayed and inquiries are collected.

**Key Features Used:**
- Zero Block for custom landing pages
- Store Module for yacht listing management
- Forms with CRM integration
- Parent-child product structure for charter variants
- Custom HTML/CSS for specification displays
- Tab interface for yacht details and pricing
- Mobile-responsive design

**Implementation Notes:**
- Each yacht is set up as a parent product
- Variants (day/week charters) are child products
- Detailed specifications are shown in tabs
- Inquiry forms create leads in HubSpot

### 2. HubSpot (CRM & Marketing)

[HubSpot](https://www.hubspot.com/) manages all customer relationships, from initial inquiry through booking and follow-up.

**Key Features Used:**
- Contact database with lead scoring
- Deal pipeline for charter bookings
- Email marketing automation
- Form integration with Tilda
- Task management for charter operations
- Custom properties for yacht preferences
- Reporting and analytics

**Implementation Notes:**
- Custom deal stages match the charter booking process
- Automated sequences for follow-up communications
- Custom properties track client preferences
- Reports track conversion rates and revenue

### 3. Docusaurus (Documentation)

[Docusaurus](https://docusaurus.io/) powers this documentation site, providing comprehensive implementation guides and business processes.

**Key Features Used:**
- Markdown documentation
- Versioned documentation
- Mermaid diagram integration
- Search functionality
- Mobile-responsive design
- Code snippets and examples

**Implementation Notes:**
- Organized by business function and technical implementation
- Includes visual diagrams for key processes
- Provides pre-built templates and examples
- Regularly updated with best practices

## Data Structure

The framework uses standardized data structures for yacht listings:

```javascript
// Example Yacht Data Structure
{
  "parent": {
    "title": "Drakkar",
    "brand": "Lagoon",
    "model": "52F",
    "year": 2023,
    "description": "Luxury catamaran with 👥 12 guests, 🛏️ 5 cabins, 👤 2 crew",
    "text": "<div class='specs'>...</div>",
    "editions": [
      {
        "title": "Charter Duration",
        "options": ["Week Charter", "Day Charter"]
      }
    ],
    "tabs": [
      {
        "type": "info",
        "title": "Charter Rates",
        "content": "<table class='pricing-table'>...</table>"
      }
    ]
  },
  "children": [
    {
      "parentUid": "12345",
      "title": "Drakkar - Week Charter",
      "modifications": "Charter Duration=Week Charter",
      "price": 25000
    },
    {
      "parentUid": "12345",
      "title": "Drakkar - Day Charter",
      "modifications": "Charter Duration=Day Charter",
      "price": 4500
    }
  ]
}
```

## Integration Points

The technologies integrate at several key points:

1. **Tilda → HubSpot**: Form submissions create contacts and deals
2. **HubSpot → Tilda**: Marketing data informs website content
3. **Docusaurus → Implementation**: Documentation guides the setup process
4. **CSV Files**: Used for bulk data import/export between systems

## Implementation Requirements

To implement the Charter Framework, you'll need:

| Component | Minimum Requirement | Recommended |
|-----------|---------------------|-------------|
| Tilda | Business Plan | Business Plan |
| HubSpot | Starter CRM Suite | Professional CRM Suite |
| Documentation | Static hosting (GitHub/Netlify) | Custom domain hosting |
| Browser | Modern browser | Chrome or Firefox latest |
| Data Preparation | CSV editing capabilities | Spreadsheet software |

## Security Considerations

The framework includes several security measures:

- Secure form processing
- HubSpot data protection
- Regular data backups
- Access control for admin functions
- Privacy policy compliance
- GDPR-compliant data handling

## Extension Points

The framework can be extended with these additional technologies:

- **Payment Processing**: Stripe or PayPal integration
- **Analytics**: Google Analytics or HubSpot Analytics
- **Chat Support**: Intercom or HubSpot Chat
- **Email Delivery**: SendGrid or HubSpot Email
- **Calendar Integration**: Google Calendar or Microsoft Outlook

## Technical Support Resources

For implementation assistance, refer to:

- [Tilda Help Center](https://help.tilda.cc/)
- [HubSpot Knowledge Base](https://knowledge.hubspot.com/)
- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Charter Framework Support](/docs/support)

---

*Last Updated: April 30, 2025*  
*Next Review: May 31, 2025* 