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
%%{init: {'theme': 'neutral', 'securityLevel': 'loose'}}%%
flowchart TD
    %% Main Business Components
    A[Business Model]
    
    subgraph MainComponents[" "]
        direction TB
        A --> B[Website Architecture]
        A --> C[Product Catalog]
        A --> D[Client Funnel]
    end
    
    %% Website Architecture Components
    subgraph WebArch[" "]
        direction TB
        B --> E[Tilda Integration]
        B --> F[Site Structure]
        B --> G[SEO Optimization]
    end
    
    %% Product Catalog Components
    subgraph ProductCat[" "]
        direction TB
        C --> H[Yacht Data Structure]
        C --> I[Tilda Products]
        C --> J[Availability Management]
    end
    
    %% Client Funnel Components
    subgraph ClientFunnel[" "]
        direction TB
        D --> K[Acquisition]
        D --> L[Nurturing]
        D --> M[Conversion]
        D --> N[Retention]
    end
    
    %% Integration Systems
    subgraph IntegSys[" "]
        direction TB
        O[Integration Systems]
        O --> P[Tilda API]
        O --> Q[Email Marketing]
        O --> R[Social Media]
        O --> S[Booking Systems]
    end
    
    %% Development Workflow
    subgraph DevFlow[" "]
        direction TB
        T[Development Workflow]
        T --> U[Cursor Integration]
        T --> V[Code Samples]
        T --> W[Deployment]
    end
    
    %% Styling Components
    classDef primaryNode fill:#0078D4,color:#ffffff,stroke:#333,stroke-width:2px
    classDef secondaryNode fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px
    classDef featureNode fill:#D4A017,color:#ffffff,stroke:#333,stroke-width:1px
    classDef systemNode fill:#4285F4,color:#ffffff,stroke:#333,stroke-width:1px
    classDef workflowNode fill:#EA4335,color:#ffffff,stroke:#333,stroke-width:1px
    classDef subgraphStyle fill:none,stroke:none
    
    %% Apply styles
    class A primaryNode
    class B,C,D secondaryNode
    class E,F,G,H,I,J,K,L,M,N featureNode
    class O,P,Q,R,S systemNode
    class T,U,V,W workflowNode
    class MainComponents,WebArch,ProductCat,ClientFunnel,IntegSys,DevFlow subgraphStyle
```

## Business Model Components

```mermaid
%%{init: {'theme': 'neutral', 'securityLevel': 'loose'}}%%
flowchart TD
    A[Business Model]
    
    subgraph RevenueStream[" "]
        direction TB
        A --> B[Revenue Streams]
        B --> B1[Charter Fees]
        B --> B2[Brokerage Commissions]
        B --> B3[Additional Services]
    end
    
    subgraph CostStruct[" "]
        direction TB
        A --> C[Cost Structure]
        C --> C1[Yacht Acquisition]
        C --> C2[Maintenance]
        C --> C3[Marketing]
        C --> C4[Staffing]
    end
    
    subgraph ValueProp[" "]
        direction TB
        A --> D[Value Proposition]
        D --> D1[Luxury Experience]
        D --> D2[Convenience]
        D --> D3[Expertise]
    end
    
    subgraph Partners[" "]
        direction TB
        A --> E[Key Partners]
        E --> E1[Yacht Builders]
        E --> E2[Marinas]
        E --> E3[Service Providers]
    end
    
    %% Styling
    classDef mainNode fill:#0078D4,color:#ffffff,stroke:#333,stroke-width:2px
    classDef componentNode fill:#4285F4,color:#ffffff,stroke:#333,stroke-width:1px
    classDef detailNode fill:#87CEFA,color:#333,stroke:#333,stroke-width:1px
    classDef subgraphStyle fill:none,stroke:none
    
    %% Apply styles
    class A mainNode
    class B,C,D,E componentNode
    class B1,B2,B3,C1,C2,C3,C4,D1,D2,D3,E1,E2,E3 detailNode
    class RevenueStream,CostStruct,ValueProp,Partners subgraphStyle
```

## Client Journey Flow

```mermaid
%%{init: {'theme': 'neutral', 'securityLevel': 'loose'}}%%
flowchart TD
    Start([Client Entry Point])
    
    subgraph EntryPhase[" "]
        direction TB
        Start --> A{Website Visit Source}
        A -->|Direct| B[Homepage]
        A -->|SEO| C[Specific Yacht]
        A -->|Referral| D[Custom Landing]
    end
    
    subgraph ExplorationPhase[" "]
        direction TB
        B & C & D --> E[Listing Exploration]
        E --> F{Client Action}
        F -->|Inquiry| G[Contact Form]
        F -->|Wishlist| H[Save Preferences]
        F -->|Download| I[Brochure PDF]
    end
    
    subgraph FollowupPhase[" "]
        direction TB
        G --> J[Sales Followup]
        H --> K[Targeted Email]
        I --> L[Automated Sequence]
        
        J & K & L --> M{Booking Decision}
        M -->|Yes| N[Contract]
        M -->|No| O[Nurture Campaign]
        M -->|Later| P[Reminder System]
    end
    
    subgraph ExperiencePhase[" "]
        direction TB
        N --> Q[Charter Experience]
        O --> R[Re-engagement]
        P --> S[Timed Follow-up]
        
        R & S --> M
        Q --> T[Post-Charter]
        T --> U[Review Request]
        T --> V[Rebooking Offer]
    end
    
    %% Styling
    classDef entryNode fill:#0078D4,color:#ffffff,stroke:#333,stroke-width:2px
    classDef decisionNode fill:#9370DB,color:#ffffff,stroke:#333,stroke-width:1px
    classDef successNode fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px
    classDef subgraphStyle fill:none,stroke:none
    
    %% Apply styles
    class Start,A,F,M entryNode
    class B,C,D,E,G,H,I,J,K,L,O,P,R,S decisionNode
    class N,Q,T,U,V successNode
    class EntryPhase,ExplorationPhase,FollowupPhase,ExperiencePhase subgraphStyle
```

These enhanced diagrams provide a clear visual representation of how the different components of the Charter Business Framework connect and work together to create a comprehensive system for running a successful yacht charter business.
