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
%%{init: {'theme': 'neutral', 'securityLevel': 'loose', 'flowchart': {'rankSpacing': 100, 'nodeSpacing': 150, 'rankdir': 'TB'}}}%%
flowchart TB
    %% Rank 1 - Root
    A[Business Model]
    
    %% Rank 2 - Main Categories
    B[Website Architecture]
    C[Product Catalog]
    D[Client Funnel]
    O[Integration Systems]
    T[Development Workflow]
    
    %% Root connections
    A --> B
    A --> C
    A --> D
    A --> O
    A --> T
    
    %% Rank 3 - Website Architecture Features
    E[Tilda Integration]
    F[Site Structure]
    G[SEO Optimization]
    
    %% Website connections
    B --> E
    B --> F
    B --> G
    
    %% Rank 4 - Product Catalog Features
    H[Yacht Data Structure]
    I[Tilda Products]
    J[Availability Management]
    
    %% Product connections
    C --> H
    C --> I
    C --> J
    
    %% Rank 5 - Client Funnel Features
    K[Acquisition]
    L[Nurturing]
    M[Conversion]
    N[Retention]
    
    %% Funnel connections
    D --> K
    D --> L
    D --> M
    D --> N
    
    %% Rank 6 - Integration Features
    P[Tilda API]
    Q[Email Marketing]
    R[Social Media]
    S[Booking Systems]
    
    %% Integration connections
    O --> P
    O --> Q
    O --> R
    O --> S
    
    %% Rank 7 - Development Features
    U[Cursor Integration]
    V[Code Samples]
    W[Deployment]
    
    %% Development connections
    T --> U
    T --> V
    T --> W
    
    %% Styling
    classDef primaryNode fill:#0078D4,color:#ffffff,stroke:#333,stroke-width:2px
    classDef secondaryNode fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px
    classDef featureNode fill:#D4A017,color:#ffffff,stroke:#333,stroke-width:1px
    classDef systemNode fill:#4285F4,color:#ffffff,stroke:#333,stroke-width:1px
    classDef workflowNode fill:#EA4335,color:#ffffff,stroke:#333,stroke-width:1px
    
    %% Apply styles
    class A primaryNode
    class B,C,D secondaryNode
    class E,F,G,H,I,J,K,L,M,N featureNode
    class O,P,Q,R,S systemNode
    class T,U,V,W workflowNode
```

## Business Model Components

```mermaid
%%{init: {'theme': 'neutral', 'securityLevel': 'loose', 'flowchart': {'rankSpacing': 80, 'nodeSpacing': 120, 'rankdir': 'TB'}}}%%
flowchart TB
    %% Root node
    A[Business Model]
    
    %% Level 1 categories
    B[Revenue Streams]
    C[Cost Structure]
    D[Value Proposition]
    E[Key Partners]
    
    %% Root connections
    A --> B
    A --> C
    A --> D
    A --> E
    
    %% Revenue stream details
    B1[Charter Fees]
    B2[Brokerage Commissions]
    B3[Additional Services]
    
    %% Revenue connections
    B --> B1
    B --> B2
    B --> B3
    
    %% Cost structure details
    C1[Yacht Acquisition]
    C2[Maintenance]
    C3[Marketing]
    C4[Staffing]
    
    %% Cost connections
    C --> C1
    C --> C2
    C --> C3
    C --> C4
    
    %% Value proposition details
    D1[Luxury Experience]
    D2[Convenience]
    D3[Expertise]
    
    %% Value connections
    D --> D1
    D --> D2
    D --> D3
    
    %% Key partners details
    E1[Yacht Builders]
    E2[Marinas]
    E3[Service Providers]
    
    %% Partner connections
    E --> E1
    E --> E2
    E --> E3
    
    %% Styling
    classDef mainNode fill:#0078D4,color:#ffffff,stroke:#333,stroke-width:2px
    classDef componentNode fill:#4285F4,color:#ffffff,stroke:#333,stroke-width:1px
    classDef detailNode fill:#87CEFA,color:#333,stroke:#333,stroke-width:1px
    
    %% Apply styles
    class A mainNode
    class B,C,D,E componentNode
    class B1,B2,B3,C1,C2,C3,C4,D1,D2,D3,E1,E2,E3 detailNode
```

## Client Journey Flow

```mermaid
%%{init: {'theme': 'neutral', 'securityLevel': 'loose', 'flowchart': {'rankSpacing': 80, 'nodeSpacing': 120, 'rankdir': 'TB'}}}%%
flowchart TB
    %% Entry point
    Start([Client Entry Point])
    
    %% Visit source level
    A{Website Visit Source}
    
    %% Visit source connection
    Start --> A
    
    %% Visit source options
    B[Homepage]
    C[Specific Yacht]
    D[Custom Landing]
    
    %% Visit source option connections
    A -->|Direct| B
    A -->|SEO| C
    A -->|Referral| D
    
    %% Exploration level
    E[Listing Exploration]
    
    %% Exploration connections
    B --> E
    C --> E
    D --> E
    
    %% Client action level
    F{Client Action}
    
    %% Action connection
    E --> F
    
    %% Action options
    G[Contact Form]
    H[Save Preferences]
    I[Brochure PDF]
    
    %% Action option connections
    F -->|Inquiry| G
    F -->|Wishlist| H
    F -->|Download| I
    
    %% Follow-up level
    J[Sales Followup]
    K[Targeted Email]
    L[Automated Sequence]
    
    %% Follow-up connections
    G --> J
    H --> K
    I --> L
    
    %% Decision level
    M{Booking Decision}
    
    %% Decision connections
    J --> M
    K --> M
    L --> M
    
    %% Decision outcomes
    N[Contract]
    O[Nurture Campaign]
    P[Reminder System]
    
    %% Outcome connections
    M -->|Yes| N
    M -->|No| O
    M -->|Later| P
    
    %% Experience level
    Q[Charter Experience]
    R[Re-engagement]
    S[Timed Follow-up]
    
    %% Experience connections
    N --> Q
    O --> R
    P --> S
    
    %% Re-engagement connections
    R --> M
    S --> M
    
    %% Post-charter level
    T[Post-Charter]
    
    %% Post-charter connection
    Q --> T
    
    %% Follow-up level
    U[Review Request]
    V[Rebooking Offer]
    
    %% Follow-up connections
    T --> U
    T --> V
    
    %% Styling
    classDef entryNode fill:#0078D4,color:#ffffff,stroke:#333,stroke-width:2px
    classDef decisionNode fill:#9370DB,color:#ffffff,stroke:#333,stroke-width:1px
    classDef successNode fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px
    
    %% Apply styles
    class Start,A,F,M entryNode
    class B,C,D,E,G,H,I,J,K,L,O,P,R,S decisionNode
    class N,Q,T,U,V successNode
```

These enhanced diagrams provide a clear visual representation of how the different components of the Charter Business Framework connect and work together to create a comprehensive system for running a successful yacht charter business.
