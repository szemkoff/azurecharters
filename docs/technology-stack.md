---
sidebar_position: 4
title: Technology Stack
description: Core technologies that power the Charter Framework
---

# Technology Stack

The Charter Framework leverages several powerful technologies to create a seamless business system. This document outlines the core components and how they work together.

## Core Technologies

The framework is built on integrated technology systems supporting customer acquisition, partner management, and business operations:

```mermaid
%%{init: {'theme': 'neutral'}}%%
flowchart TD
    A[Charter Framework Technology Stack] --> B[Customer Systems]
    A --> C[Partner Systems]
    A --> D[Operations Systems]
    
    B --> B1[Tilda - Website Platform]
    B --> B2[HubSpot - CRM/Marketing]
    
    C --> C1[Zapier - Automation]
    C --> C2[Google Sheets - Partner Dashboards]
    C --> C3[Trello - Lead Management]
    C --> C4[Zelle - Commission Payments]
    
    D --> D1[Docusaurus - Documentation]
    D --> D2[Gmail - Communications]
    
    classDef primary fill:#007FFF,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef customer fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef partner fill:#9370DB,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef operations fill:#D4A017,color:#ffffff,stroke:#333,stroke-width:1px;
    
    class A primary;
    class B1,B2 customer;
    class C1,C2,C3,C4 partner;
    class D1,D2 operations;
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

### 3. Partner Management System

A complete partner/referral system built on free automation tools for scalable commission-based lead generation.

#### 3.1 Zapier (Automation Platform)
[Zapier](https://zapier.com/) automates referral tracking and partner communications.

**Key Features Used:**
- Trello to Google Sheets automation
- Google Sheets to Gmail notifications
- HubSpot CRM integration (optional)
- Commission calculations
- Partner notification workflows

#### 3.2 Google Sheets (Partner Dashboards)
[Google Sheets](https://sheets.google.com) provides real-time partner tracking and financial management.

**Key Features Used:**
- Filtered views for individual partner dashboards
- Automated commission calculations
- Financial tracking and reporting
- Payment status management
- Mobile-friendly partner access

#### 3.3 Trello (Lead Pipeline)
[Trello](https://trello.com) manages the lead workflow that triggers referral tracking.

**Key Features Used:**
- Card-based lead management
- Automated stage transitions
- Integration with partner tracking
- Revenue tracking per booking
- Team collaboration tools

#### 3.4 Zelle (Commission Payments)
[Zelle](https://www.zellepay.com/) provides instant commission payments to partners.

**Key Features Used:**
- Instant bank-to-bank transfers
- Low/no transaction fees
- Automated payment tracking
- Secure financial transactions
- Mobile payment capabilities

### 4. Docusaurus (Documentation)

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

**Customer System Integrations:**
1. **Tilda → HubSpot**: Form submissions create contacts and deals
2. **HubSpot → Tilda**: Marketing data informs website content

**Partner System Integrations:**
3. **Trello → Zapier**: Card movements trigger automation workflows
4. **Zapier → Google Sheets**: Automated referral logging and commission calculations
5. **Google Sheets → Gmail**: Partner notifications and updates
6. **Zapier → HubSpot**: Optional CRM integration for lead scoring and follow-up

**Business Operations:**
7. **Google Sheets → Zelle**: Manual commission payment processing
8. **Docusaurus → Implementation**: Documentation guides the setup process
9. **CSV Files**: Used for bulk data import/export between systems

## Implementation Requirements

To implement the Charter Framework, you'll need:

| Component | Minimum Requirement | Recommended |
|-----------|---------------------|-------------|
| **Customer Systems** | | |
| Tilda | Business Plan | Business Plan |
| HubSpot | Free CRM | Starter CRM Suite |
| **Partner Systems** | | |
| Zapier | Free Plan (5 automations) | Starter Plan ($19.99/month) |
| Google Sheets | Free Google Account | Google Workspace |
| Trello | Free Plan | Trello Standard |
| Zelle | Bank account with Zelle | Business banking account |
| **Operations** | | |
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
- [Charter Framework Support](/docs/getting-started)

---

*Last Updated: January 29, 2025*  
*Next Review: April 30, 2025* 