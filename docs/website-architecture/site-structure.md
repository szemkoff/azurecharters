---
id: site-structure
title: Website Structure
sidebar_position: 2
description: Comprehensive Charter Business Website Structure for Tilda Implementation
---

# Comprehensive Charter Business Website Structure

This document outlines the complete structure for implementing a yacht charter business website using Tilda. Use this as a reference guide when building your site sections.

## Main Website Architecture (Visual Map)

```mermaid
%%{init: {'theme': 'neutral', 'securityLevel': 'loose', 'flowchart': {'rankSpacing': 80, 'nodeSpacing': 100, 'rankdir': 'TB'}}}%%
flowchart TB
    %% Root node
    root[AZURE YACHT GROUP WEBSITE]
    
    %% Main sections - rank 1
    home[HOME]
    fleet[CHARTER FLEET] 
    destinations[DESTINATIONS]
    services[SERVICES]
    
    %% Main navigation connections
    root --> home
    root --> fleet
    root --> destinations
    root --> services
    
    %% Home Section - rank 2
    hero[Hero Banner - Seasonal Offers]
    featured[Featured Charters Carousel]
    destHighlights[Destinations Highlights]
    testimonials[Testimonials]
    newsletter[Newsletter Signup]
    
    %% Home connections
    home --> hero
    home --> featured
    home --> destHighlights
    home --> testimonials
    home --> newsletter
    
    %% Charter Fleet Section - rank 3
    fleetOverview[Fleet Overview]
    search[Advanced Search/Filter]
    yachtPages[Individual Yacht Pages]
    newArrivals[New Arrivals Section]
    
    %% Fleet connections
    fleet --> fleetOverview
    fleet --> search
    fleet --> yachtPages
    fleet --> newArrivals
    
    %% Search Options - rank 4
    bySize[By Size]
    byPrice[By Price]
    byLocation[By Location]
    byAvailability[By Availability]
    
    %% Search connections
    search --> bySize
    search --> byPrice
    search --> byLocation
    search --> byAvailability
    
    %% Individual Yacht Pages - rank 5
    gallery[Gallery]
    specs[Specifications]
    pricing[Pricing Calculator]
    crew[Crew Information]
    calendar[Calendar Availability]
    similar[Similar Yachts]
    booking[Booking Request Form]
    
    %% Yacht page connections
    yachtPages --> gallery
    yachtPages --> specs
    yachtPages --> pricing
    yachtPages --> crew
    yachtPages --> calendar
    yachtPages --> similar
    yachtPages --> booking
    
    %% Destinations Section - rank 6
    map[Interactive Map]
    guides[Destination Guides]
    seasonal[Seasonal Recommendations]
    attractions[Local Attractions]
    
    %% Destination connections
    destinations --> map
    destinations --> guides
    destinations --> seasonal
    destinations --> attractions
    
    %% Destination Guides - rank 7
    caribbean[Caribbean]
    mediterranean[Mediterranean]
    southPacific[South Pacific]
    otherRegions[Other Regions]
    
    %% Guide connections
    guides --> caribbean
    guides --> mediterranean
    guides --> southPacific
    guides --> otherRegions
    
    %% Services Section - rank 8
    charterTypes[Charter Types]
    
    %% Services connections
    services --> charterTypes
    
    %% Charter Types - rank 9
    bareboat[Bareboat]
    crewed[Crewed]
    
    %% Charter type connections
    charterTypes --> bareboat
    charterTypes --> crewed
    
    %% Style Classes
    classDef sectionClass fill:#0078D4,color:#ffffff,stroke:#333,stroke-width:2px;
    classDef subsectionClass fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;
    classDef featureClass fill:#d4a017,color:#ffffff,stroke:#333,stroke-width:1px;
    
    %% Apply Styles
    class root sectionClass;
    class home,fleet,destinations,services sectionClass;
    class fleetOverview,search,yachtPages,newArrivals,hero,featured,destHighlights,testimonials,newsletter,map,guides,seasonal,attractions,charterTypes subsectionClass;
    class bySize,byPrice,byLocation,byAvailability,gallery,specs,pricing,crew,calendar,similar,booking,caribbean,mediterranean,southPacific,otherRegions,bareboat,crewed featureClass;
```

## Implementation Notes

This structure serves as a blueprint for organizing your Tilda-based yacht charter website. When implementing each section:

1. **Consistency**: Maintain consistent navigation paths and user experience across sections
2. **Mobile Optimization**: Ensure all elements adapt properly to mobile devices
3. **Performance**: Optimize image sizes and page load times, especially for yacht galleries
4. **Integration Points**: Note where booking systems, availability calendars, and payment processing connect

## Getting Started

To implement this structure in Tilda:

1. Begin by creating the primary pages for each main section
2. Build reusable blocks for common elements (yacht cards, testimonials, etc.)
3. Create templates for pages that will be replicated (yacht detail pages, destination guides)
4. Develop the search and filtering functionality using Tilda's native tools or integrate third-party search solutions

Follow the [Tilda Integration](./tilda-integration) guide for specific implementation instructions. 