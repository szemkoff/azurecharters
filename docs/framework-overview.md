---
sidebar_position: 2
title: Framework Overview
description: Visual guide to the Charter Framework components
---

# Framework Overview

This document provides a visual overview of the Charter Framework components and how they interact to create a comprehensive charter business system.

## Framework Architecture

The Charter Framework architecture integrates three primary platforms with business processes to create a complete charter business solution:

```mermaid
%%{init: {'theme': 'neutral'}}%%
flowchart TB
    subgraph "Charter Framework"
    
        subgraph "Customer-Facing"
            Website["Website<br/><small>Tilda</small>"]
            YachtListings["Yacht Listings"]
            InquiryForms["Inquiry Forms"]
            Galleries["Photo Galleries"]
            
            Website --> YachtListings
            Website --> InquiryForms
            Website --> Galleries
        end
        
        subgraph "Partner Network"
            Referrals["Partner Referrals"]
            PartnerDashboards["Partner Dashboards<br/><small>Google Sheets</small>"]
            Automation2["Automation<br/><small>Zapier</small>"]
            Payments["Commission Payments<br/><small>Zelle</small>"]
            
            Referrals --> Automation2
            Automation2 --> PartnerDashboards
            PartnerDashboards --> Payments
        end
        
        subgraph "Business Operations"
            CRM["CRM<br/><small>HubSpot</small>"]
            LeadPipeline["Lead Pipeline<br/><small>Trello</small>"]
            Contacts["Contact Management"]
            Deals["Deal Pipeline"]
            Analytics["Analytics & Reporting"]
            
            CRM --> Contacts
            CRM --> Deals
            LeadPipeline --> Automation2
            LeadPipeline --> Analytics
        end
        
        subgraph "Business Processes"
            SalesProcess["Sales Process"]
            CharterOps["Charter Operations"]
            Communications["Client Communications"]
            Contracts["Contracts & Documents"]
            
            SalesProcess --> CharterOps
            SalesProcess --> Communications
            SalesProcess --> Contracts
        end
        
        InquiryForms --> Contacts
        Referrals --> LeadPipeline
        Contacts --> Communications
        Deals --> Contracts
        CharterOps --> Analytics
        Automation2 --> CRM
    end
    
    classDef primary fill:#007FFF,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef secondary fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef tertiary fill:#D4A017,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef platform fill:#9370DB,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef partner fill:#FF6B6B,color:#ffffff,stroke:#333,stroke-width:1px;
    
    class Website,CRM,LeadPipeline platform;
    class YachtListings,InquiryForms,Galleries,Contacts,Deals,Analytics secondary;
    class SalesProcess,CharterOps,Communications,Contracts tertiary;
    class Referrals,PartnerDashboards,Automation2,Payments partner;
```

## Customer Journey

The Charter Framework supports the complete customer journey from discovery to booking completion:

```mermaid
%%{init: {'theme': 'neutral'}}%%
flowchart LR
    A[Discovery] --> B[Research]
    B --> C[Inquiry]
    C --> D[Quotation]
    D --> E[Negotiation]
    E --> F[Booking]
    F --> G[Charter]
    G --> H[Review]
    
    A1[Website<br/>Browsing] --> A
    A2[Social Media] --> A
    A3[Referrals] --> A
    
    B1[Yacht<br/>Listings] --> B
    B2[Price<br/>Comparison] --> B
    
    C1[Contact<br/>Form] --> C
    C2[Email<br/>Inquiry] --> C
    
    D1[CRM<br/>Automation] --> D
    
    E1[Sales<br/>Team] --> E
    
    F1[Contract<br/>Signing] --> F
    F2[Payment<br/>Processing] --> F
    
    G1[Charter<br/>Operations] --> G
    
    H1[Feedback<br/>Collection] --> H
    H2[Repeat<br/>Business] --> A
    
    classDef primary fill:#007FFF,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef secondary fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef tertiary fill:#D4A017,color:#ffffff,stroke:#333,stroke-width:1px;
    
    class A,B,C,D,E,F,G,H primary;
    class A1,A2,A3,B1,B2,C1,C2,D1,E1,F1,F2,G1,H1,H2 tertiary;
```

## Website Structure

The Tilda-based website structure organizes content for effective customer engagement:

```mermaid
%%{init: {'theme': 'neutral'}}%%
flowchart TB
    Homepage --> Destinations
    Homepage --> YachtFleet["Yacht Fleet"]
    Homepage --> Services
    Homepage --> AboutUs["About Us"]
    Homepage --> Contact
    
    Destinations --> DestinationPages["Destination Detail Pages"]
    YachtFleet --> YachtListings["Yacht Listing Pages"]
    YachtListings --> YachtDetailPages["Yacht Detail Pages"]
    YachtDetailPages --> BookingInquiry["Booking Inquiry Forms"]
    
    Services --> DayCharters["Day Charters"]
    Services --> WeeklyCharters["Weekly Charters"]
    Services --> CustomCharters["Custom Charters"]
    
    InquiryForm["Inquiry Forms"] --> CRM["HubSpot CRM"]
    BookingInquiry --> CRM
    
    classDef primary fill:#007FFF,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef secondary fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef tertiary fill:#D4A017,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef external fill:#9370DB,color:#ffffff,stroke:#333,stroke-width:1px;
    
    class Homepage primary;
    class Destinations,YachtFleet,Services,AboutUs,Contact secondary;
    class DestinationPages,YachtListings,YachtDetailPages,DayCharters,WeeklyCharters,CustomCharters,BookingInquiry,InquiryForm tertiary;
    class CRM external;
```

## Yacht Listing Structure

The yacht listings follow a parent-child product structure for flexible charter options:

```mermaid
%%{init: {'theme': 'neutral'}}%%
flowchart TB
    ParentProduct["Parent Product<br/>(Yacht)"] --> Specifications["Specifications Tab"]
    ParentProduct --> PricingTab["Pricing Tab"]
    ParentProduct --> GalleryTab["Gallery Tab"]
    
    ParentProduct --> VariantA["Child Variant A<br/>(Day Charter)"]
    ParentProduct --> VariantB["Child Variant B<br/>(Week Charter)"]
    ParentProduct --> VariantC["Child Variant C<br/>(Custom Charter)"]
    
    Specifications --> TechnicalSpecs["Technical Specifications"]
    Specifications --> Amenities["Amenities & Features"]
    Specifications --> CrewDetails["Crew Details"]
    
    PricingTab --> SeasonalRates["Seasonal Rates"]
    PricingTab --> IncludedItems["Included Items"]
    PricingTab --> AdditionalCharges["Additional Charges"]
    
    GalleryTab --> ExteriorPhotos["Exterior Photos"]
    GalleryTab --> InteriorPhotos["Interior Photos"]
    GalleryTab --> LayoutPlans["Layout Plans"]
    
    classDef primary fill:#007FFF,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef secondary fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef tertiary fill:#D4A017,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef detail fill:#9370DB,color:#ffffff,stroke:#333,stroke-width:1px;
    
    class ParentProduct primary;
    class Specifications,PricingTab,GalleryTab,VariantA,VariantB,VariantC secondary;
    class TechnicalSpecs,Amenities,CrewDetails,SeasonalRates,IncludedItems,AdditionalCharges,ExteriorPhotos,InteriorPhotos,LayoutPlans tertiary;
```

## Partner Network Architecture

The partner/referral system creates scalable lead generation through commission-based partnerships:

```mermaid
%%{init: {'theme': 'neutral'}}%%
flowchart TD
    A["Partner Referral Link"] --> B["Customer Fills HubSpot Form"]
    B --> C["HubSpot Stores Contact"]
    C --> D1["Zapier: Create Trello Card"]
    C --> D2["Zapier: Update Google Sheets"]
    
    D2 --> E["Google Sheets Calculates Commission"]
    E --> F["Automated Partner Notification"]
    
    D1 --> G["Trello: Move to 'Completed' Stage"]
    G --> H["Zapier: Log Revenue"]
    H --> I["Monthly Commission Payment"]
    
    J["Partner Dashboard"] --> K["Real-time Tracking"]
    K --> L["Commission History"]
    K --> M["Payment Status"]
    
    E --> J
    
    classDef primary fill:#007FFF,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef automation fill:#FF6B6B,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef data fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef partner fill:#9370DB,color:#ffffff,stroke:#333,stroke-width:1px;
    
    class A,B,C primary;
    class D1,D2,F,H automation;
    class E,J,K,L,M data;
    class I partner;
```

**Key Components:**
- **HubSpot Forms**: Lead capture with partner attribution via URL parameters
- **Zapier**: 3 automated workflows for data synchronization
- **Google Sheets**: Commission calculations and partner dashboards
- **Trello**: Lead management and stage tracking
- **Zelle**: Instant commission payments

**Integration Method:**
- Manual HubSpot property setup (15 minutes one-time)
- Form-based lead capture with partner tracking
- No API required - uses native platform features
- Zapier connectors for automation

**Commission Structure:**
- $100-300 per booking based on revenue
- Real-time tracking for complete transparency
- Monthly payment processing
- Zero monthly costs using free platform tiers

## CRM Process Flow

The HubSpot CRM integration manages sales and marketing processes:

```mermaid
%%{init: {'theme': 'neutral'}}%%
flowchart TB
    subgraph "HubSpot CRM"
        InquiryCapture["Inquiry Capture"] --> LeadQualification["Lead Qualification"]
        LeadQualification --> SalesProcess["Sales Process"]
        SalesProcess --> BookingManagement["Booking Management"]
        BookingManagement --> CustomerService["Customer Service"]
        
        subgraph "Contact Lifecycle"
            Visitor["Visitor"] --> Subscriber["Subscriber"]
            Subscriber --> Lead["Lead"]
            Lead --> MQL["Marketing Qualified Lead"]
            MQL --> SQL["Sales Qualified Lead"]
            SQL --> Opportunity["Opportunity"]
            Opportunity --> Customer["Customer"]
            Customer --> Evangelist["Evangelist"]
        end
        
        subgraph "Deal Pipeline"
            NewInquiry["New Inquiry"] --> InitialContact["Initial Contact"]
            InitialContact --> QuoteSent["Quote Sent"]
            QuoteSent --> Negotiation["Negotiation"]
            Negotiation --> ContractSent["Contract Sent"]
            ContractSent --> Deposit["Deposit Received"]
            Deposit --> Booked["Booked"]
            Booked --> Completed["Completed"]
        end
        
        subgraph "Automation"
            FormSubmission["Form Submission"] --> |Trigger| WelcomeEmail["Welcome Email"]
            LeadStatus["Lead Status Change"] --> |Trigger| FollowUpEmail["Follow-Up Email"]
            InactiveTime["Inactive Time"] --> |Trigger| ReengagementEmail["Reengagement Email"]
            CharterDate["Charter Date"] --> |Trigger| PreCharterInfo["Pre-Charter Info"]
        end
    end
    
    classDef primary fill:#007FFF,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef secondary fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef tertiary fill:#D4A017,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef automation fill:#9370DB,color:#ffffff,stroke:#333,stroke-width:1px;
    
    class InquiryCapture,LeadQualification,SalesProcess,BookingManagement,CustomerService primary;
    class Visitor,Subscriber,Lead,MQL,SQL,Opportunity,Customer,Evangelist secondary;
    class NewInquiry,InitialContact,QuoteSent,Negotiation,ContractSent,Deposit,Booked,Completed secondary;
    class FormSubmission,LeadStatus,InactiveTime,CharterDate,WelcomeEmail,FollowUpEmail,ReengagementEmail,PreCharterInfo automation;
```

## Data Flow Diagram

The data flow between different components of the Charter Framework:

```mermaid
%%{init: {'theme': 'neutral'}}%%
flowchart LR
    subgraph "Customer"
        C["Website Visitor"]
    end
    
    subgraph "Tilda Website"
        W["Website"]
        Forms["Inquiry Forms"]
        Products["Yacht Listings"]
    end
    
    subgraph "HubSpot CRM"
        Contacts["Contacts"]
        Deals["Deals"]
        Marketing["Marketing Emails"]
        Tasks["Tasks"]
    end
    
    subgraph "Business Operations"
        Staff["Charter Staff"]
        Operations["Operations Team"]
        Finance["Finance Department"]
    end
    
    C --> |"Browses"| W
    C --> |"Submits Inquiry"| Forms
    Products --> |"Product Info"| C
    
    Forms --> |"Lead Data"| Contacts
    Contacts --> |"Contact Info"| Deals
    Contacts --> |"Contact List"| Marketing
    Marketing --> |"Automated Emails"| C
    
    Deals --> |"Charter Details"| Tasks
    Tasks --> |"Assignments"| Staff
    Tasks --> |"Bookings"| Operations
    Deals --> |"Financial Info"| Finance
    
    Staff --> |"Updates"| Deals
    Operations --> |"Status Updates"| Deals
    Finance --> |"Payment Status"| Deals
    
    classDef customer fill:#007FFF,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef website fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef crm fill:#D4A017,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef ops fill:#9370DB,color:#ffffff,stroke:#333,stroke-width:1px;
    
    class C customer;
    class W,Forms,Products website;
    class Contacts,Deals,Marketing,Tasks crm;
    class Staff,Operations,Finance ops;
```

## Implementation Workflow

The implementation process for the Charter Framework:

```mermaid
%%{init: {'theme': 'neutral'}}%%
flowchart TB
    P["Project Planning"] --> T["Technology Setup"]
    T --> C["Content Creation"]
    C --> I["Integration"]
    I --> TE["Testing"]
    TE --> TR["Training"]
    TR --> L["Launch"]
    L --> O["Optimization"]
    
    P1["Business Requirements"] --> P
    P2["Yacht Selection"] --> P
    P3["Timeline Planning"] --> P
    
    T1["Tilda Setup"] --> T
    T2["HubSpot Setup"] --> T
    T3["Domain & Email Setup"] --> T
    
    C1["Yacht Data Collection"] --> C
    C2["Website Content Writing"] --> C
    C3["Photo Preparation"] --> C
    C4["Email Template Creation"] --> C
    
    I1["Form Integration"] --> I
    I2["Automation Setup"] --> I
    I3["Payment System"] --> I
    
    TE1["Website Testing"] --> TE
    TE2["Process Testing"] --> TE
    TE3["Mobile Optimization"] --> TE
    
    TR1["Staff Training"] --> TR
    TR2["Process Documentation"] --> TR
    
    L1["Marketing Campaigns"] --> L
    L2["Announcement"] --> L
    
    O1["Performance Monitoring"] --> O
    O2["Customer Feedback"] --> O
    O3["Continuous Improvement"] --> O
    
    classDef primary fill:#007FFF,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef secondary fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef tertiary fill:#D4A017,color:#ffffff,stroke:#333,stroke-width:1px;
    
    class P,T,C,I,TE,TR,L,O primary;
    class P1,P2,P3,T1,T2,T3,C1,C2,C3,C4,I1,I2,I3,TE1,TE2,TE3,TR1,TR2,L1,L2,O1,O2,O3 secondary;
```

---

*Last Updated: April 30, 2025*  
*Next Review: May 31, 2025*