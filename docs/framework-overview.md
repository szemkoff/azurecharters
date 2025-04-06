---
id: framework-overview
title: Framework Visual Overview
sidebar_position: 2
description: Visual representation of the Charter Business Framework using enhanced diagrams
---

# Framework Visual Overview

This page provides a comprehensive visual overview of the Azure Yacht Group Charter Business Framework using enhanced Mermaid v2 diagrams.

## Complete Framework Map

```mermaid
%%{init: {'securityLevel': 'loose', 'theme': 'neutral'}}%%
graph TD
    A[Business Model] --> B[Website Architecture]
    A --> C[Product Catalog]
    A --> D[Client Funnel]
    A --> O[Integration Systems]
    A --> T[Development Workflow]
    
    B --> E[Tilda Integration]
    B --> F[Site Structure]
    B --> G[SEO Optimization]
    
    C --> H[Yacht Data Structure]
    C --> I[Tilda Products]
    C --> J[Availability Management]
    
    D --> K[Acquisition]
    D --> L[Nurturing]
    D --> M[Conversion]
    D --> N[Retention]
    
    O --> P[Tilda API]
    O --> Q[Email Marketing]
    O --> R[Social Media]
    O --> S[Booking Systems]
    
    T --> U[Cursor Integration]
    T --> V[Code Samples]
    T --> W[Deployment]
    
    %% Styling
    classDef primaryNode fill:#0078D4,color:#ffffff,stroke:#333,stroke-width:2px;
    classDef secondaryNode fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef featureNode fill:#D4A017,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef systemNode fill:#4285F4,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef workflowNode fill:#EA4335,color:#ffffff,stroke:#333,stroke-width:1px;
    
    %% Apply styles
    class A primaryNode;
    class B,C,D secondaryNode;
    class E,F,G,H,I,J,K,L,M,N featureNode;
    class O,P,Q,R,S systemNode;
    class T,U,V,W workflowNode;
```

## Business Model Components

```mermaid
%%{init: {'securityLevel': 'loose', 'theme': 'neutral'}}%%
graph TD
    A[Business Model] --> B[Revenue Streams]
    A --> C[Cost Structure]
    A --> D[Value Proposition]
    A --> E[Key Partners]
    
    B --> B1[Charter Fees]
    B --> B2[Brokerage Commissions]
    B --> B3[Additional Services]
    
    C --> C1[Yacht Acquisition]
    C --> C2[Maintenance]
    C --> C3[Marketing]
    C --> C4[Staffing]
    
    D --> D1[Luxury Experience]
    D --> D2[Convenience]
    D --> D3[Expertise]
    
    E --> E1[Yacht Builders]
    E --> E2[Marinas]
    E --> E3[Service Providers]
    
    %% Styling
    classDef mainNode fill:#0078D4,color:#ffffff,stroke:#333,stroke-width:2px;
    classDef componentNode fill:#4285F4,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef detailNode fill:#87CEFA,color:#333,stroke:#333,stroke-width:1px;
    
    %% Apply styles
    class A mainNode;
    class B,C,D,E componentNode;
    class B1,B2,B3,C1,C2,C3,C4,D1,D2,D3,E1,E2,E3 detailNode;
```

## Client Journey Flow

```mermaid
%%{init: {'securityLevel': 'loose', 'theme': 'neutral'}}%%
graph TD
    Start([Client Entry Point]) --> A{Website Visit Source}
    
    A -->|Direct| B[Homepage]
    A -->|SEO| C[Specific Yacht]
    A -->|Referral| D[Custom Landing]
    
    B --> E[Listing Exploration]
    C --> E
    D --> E
    
    E --> F{Client Action}
    
    F -->|Inquiry| G[Contact Form]
    F -->|Wishlist| H[Save Preferences]
    F -->|Download| I[Brochure PDF]
    
    G --> J[Sales Followup]
    H --> K[Targeted Email]
    I --> L[Automated Sequence]
    
    J --> M{Booking Decision}
    K --> M
    L --> M
    
    M -->|Yes| N[Contract]
    M -->|No| O[Nurture Campaign]
    M -->|Later| P[Reminder System]
    
    N --> Q[Charter Experience]
    O --> R[Re-engagement]
    P --> S[Timed Follow-up]
    
    R --> M
    S --> M
    
    Q --> T[Post-Charter]
    
    T --> U[Review Request]
    T --> V[Rebooking Offer]
    
    %% Styling
    classDef entryNode fill:#0078D4,color:#ffffff,stroke:#333,stroke-width:2px;
    classDef decisionNode fill:#9370DB,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef successNode fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;
    
    %% Apply styles
    class Start,A,F,M entryNode;
    class B,C,D,E,G,H,I,J,K,L,O,P,R,S decisionNode;
    class N,Q,T,U,V successNode;
```

These enhanced diagrams provide a clear visual representation of how the different components of the Charter Business Framework connect and work together to create a comprehensive system for running a successful yacht charter business.
