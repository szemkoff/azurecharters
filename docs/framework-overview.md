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
    A[Business Model]
    
    %% Force vertical layout with direct parent-child structure
    A --> B[Website Architecture]
    B --> C[Product Catalog]
    C --> D[Client Funnel]
    D --> O[Integration Systems]
    O --> T[Development Workflow]
    
    %% Website Architecture features - use dashed lines for side connections
    B -.- E[Tilda Integration]
    B -.- F[Site Structure]
    B -.- G[SEO Optimization]
    
    %% Product Catalog features
    C -.- H[Yacht Data Structure]
    C -.- I[Tilda Products]
    C -.- J[Availability Management]
    
    %% Client Funnel features
    D -.- K[Acquisition]
    D -.- L[Nurturing]
    D -.- M[Conversion]
    D -.- N[Retention]
    
    %% Integration Systems features
    O -.- P[Tilda API]
    O -.- Q[Email Marketing]
    O -.- R[Social Media]
    O -.- S[Booking Systems]
    
    %% Development Workflow features
    T -.- U[Cursor Integration]
    T -.- V[Code Samples]
    T -.- W[Deployment]
    
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
    A[Business Model]
    
    %% Force vertical layout
    A --> B[Revenue Streams]
    B --> C[Cost Structure]
    C --> D[Value Proposition]
    D --> E[Key Partners]
    
    %% Revenue Streams details
    B -.- B1[Charter Fees]
    B -.- B2[Brokerage Commissions]
    B -.- B3[Additional Services]
    
    %% Cost Structure details
    C -.- C1[Yacht Acquisition]
    C -.- C2[Maintenance]
    C -.- C3[Marketing]
    C -.- C4[Staffing]
    
    %% Value Proposition details
    D -.- D1[Luxury Experience]
    D -.- D2[Convenience]
    D -.- D3[Expertise]
    
    %% Key Partners details
    E -.- E1[Yacht Builders]
    E -.- E2[Marinas]
    E -.- E3[Service Providers]
    
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
    %% Create a linear journey flow
    Start([Client Entry Point])
    Start --> A{Website Visit Source}
    A --> E[Listing Exploration]
    E --> F{Client Action}
    F --> J[Sales Followup]
    J --> M{Booking Decision}
    M --> N[Contract]
    N --> Q[Charter Experience]
    Q --> T[Post-Charter]

    %% Entry points
    A -.- A1[Direct]
    A -.- A2[SEO] 
    A -.- A3[Referral]
    
    %% Client actions
    F -.- F1[Inquiry]
    F -.- F2[Wishlist]
    F -.- F3[Download]
    
    %% Follow-up methods
    J -.- J1[Contact Form]
    J -.- J2[Targeted Email]
    J -.- J3[Automated Sequence]
    
    %% Decision outcomes
    M -.- M1[Yes] 
    M -.- M2[No - Nurture]
    M -.- M3[Later - Remind]
    
    %% Post-charter actions
    T -.- T1[Review Request]
    T -.- T2[Rebooking Offer]
    
    %% Styling
    classDef entryNode fill:#0078D4,color:#ffffff,stroke:#333,stroke-width:2px;
    classDef decisionNode fill:#9370DB,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef successNode fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;
    
    %% Apply styles
    class Start,A,F,M entryNode;
    class E,J,T,A1,A2,A3,F1,F2,F3,J1,J2,J3,M1,M2,M3 decisionNode;
    class N,Q,T1,T2 successNode;
```

These enhanced diagrams provide a clear visual representation of how the different components of the Charter Business Framework connect and work together to create a comprehensive system for running a successful yacht charter business.