---
id: charter-website
title: Charter Website Implementation
sidebar_position: 6
description: Comprehensive page-by-page implementation guide for Azure Charters website
---

# Charter Website Implementation Guide

This document provides detailed block-by-block instructions for implementing the Azure Charters website (Tilda Project ID: 12993249) with optimal SEO configuration, proper content structure, and conversion optimization.

## Priority Implementation Order

Based on business needs and conversion potential, implement the charter website pages in this order:

1. Home Page (Immediate)
2. Fleet Overview Page (Immediate)
3. Yacht Detail Page Template (Immediate)
4. Destinations Landing Page (Short-term)
5. Destination Detail Template (Short-term)
6. About Us Page (Short-term)

## HOME PAGE

### Page-Level SEO
- **URL Structure**: `https://azurcharters.com/` (clean root URL)
- **Title Tag**: "Luxury Yacht Charters | Motor & Sailing Yachts | Azure Yacht Group"
- **Meta Description**: "Experience unforgettable luxury yacht charters with Azure Yacht Group. Explore our premium fleet of motor and sailing yachts for the ultimate charter experience in the Mediterranean and Caribbean."
- **Keywords**: luxury yacht charters, motor yacht rental, sailing yacht charter, Mediterranean yacht charter, Caribbean yacht vacation, superyacht rental, private yacht experience
- **H1 Heading**: "Luxury Yacht Charters" (only use one H1 per page)
- **Schema Markup**: Add Organization and Service schema to the page in JSON-LD format
- **Canonical URL**: Set to `https://azurcharters.com/`
- **Open Graph Tags**:
  - og:title: "Luxury Yacht Charters | Azure Yacht Group"
  - og:description: [same as meta description]
  - og:image: [high-quality hero image of premium yacht]
  - og:url: `https://azurcharters.com/`
  - og:type: "website"
- **Twitter Card**: Summary with large image

### Block 1: Hero Section
- **Block Type**: Tilda Zero Block or Cover Block (t-cover)
- **Content**:
  - Background: Full-width image slider (3-5 premium yacht images)
  - H1 Heading: "Luxury Yacht Charters" (same on all slides)
  - Subheading: "Experience the Ultimate in Nautical Luxury" (same on all slides)
  - CTA Button: "Browse Fleet" linking to /fleet/
- **SEO Elements**:
  - Alt text for each slider image: "Luxury [yacht name] charter yacht sailing in [location]"
  - Use semantic HTML for headings and text content
- **Setup Instructions**:
  - Create a Zero Block with full-screen height (100vh)
  - Add image slider with 5-second transition timing
  - Set overlay opacity to 40% for text readability
  - Center-align text elements
  - Use large button style with hover animation
  - Ensure responsive behavior on all devices

### Block 2: Featured Yachts
- **Block Type**: Gallery Block (t-gallery) or Cards Block (t-cards)
- **Content**:
  - Section heading (H2): "Featured Charter Yachts"
  - 3-4 yacht cards with:
    - High-res image
    - Yacht name (H3)
    - Key specs (length, guests, cabins)
    - Base price with "from" prefix
    - "View Details" button
- **SEO Elements**:
  - Alt text for yacht images: "[Yacht name] [length] luxury charter yacht by [builder]"
  - Schema markup for each yacht (Product type)
  - Use H3 for yacht names (proper heading hierarchy)
- **Setup Instructions**:
  - Include Eternal Spark, Azimut 70 'Drakkar', and eMotion 36 Hybrid
  - Create cards with equal height and consistent styling
  - Use shadow effect for depth and visual appeal
  - Add hover effect for better UX
  - Ensure mobile responsiveness (stack cards on small screens)
  - Link each card to its specific yacht detail page

### Block 3: Destination Grid
- **Block Type**: Grid Block (t-tile)
- **Content**:
  - Section heading (H2): "Popular Charter Destinations"
  - 3-column grid with:
    - Mediterranean (image + brief text)
    - Caribbean (image + brief text)
    - Southeast Asia (image + brief text)
  - Each with "Explore" button linking to specific destination page
- **SEO Elements**:
  - Alt text: "[Destination name] yacht charter destination - [distinctive feature]"
  - Use H3 for destination names
  - Include relevant destination keywords in descriptions
- **Setup Instructions**:
  - Use equal-sized images (16:9 ratio) of high quality
  - Add text overlay at bottom of each image
  - Apply subtle hover effect (brightness or zoom)
  - Set to 1-column layout on mobile devices
  - Include brief (1-2 sentence) description of each destination

### Block 4: Yacht Search Tool
- **Block Type**: Zero Block with custom HTML/CSS
- **Content**:
  - Section heading (H2): "Find Your Perfect Yacht"
  - Filter dropdowns:
    - Yacht Size (30-50ft, 50-80ft, 80-100ft, 100ft+)
    - Yacht Type (Motor, Sailing, Catamaran)
    - Guest Capacity (2-6, 6-10, 10+)
    - Price Range (custom ranges)
  - "Search" button
- **SEO Elements**:
  - Label tags for all form elements (accessibility)
  - Include relevant microdata for form elements
  - Use ARIA attributes for accessibility
- **Setup Instructions**:
  - Use custom HTML from `docs/website-architecture/tilda-integration.md`
  - Style to match site design (colors, fonts, borders)
  - Ensure all dropdown options are properly labeled
  - Add search button with prominent styling and hover effect
  - Test filter combinations to ensure functionality
  - Make responsive for all device sizes

### Block 5: Testimonials
- **Block Type**: Testimonials Block (t-reviews)
- **Content**:
  - Section heading (H2): "Client Experiences"
  - 3-5 testimonial cards with:
    - Client name and photo
    - Charter yacht name
    - 5-star rating
    - Quote text
- **SEO Elements**:
  - Schema markup for reviews (Review type)
  - Alt text for client photos: "[Client name] - Azure Yacht Group client"
  - Include aggregate rating schema for overall satisfaction
- **Setup Instructions**:
  - Use slider format for desktop viewing
  - Auto-scroll with pause on hover
  - Include visible navigation dots
  - Add schema markup for reviews in page settings
  - Keep testimonial text authentic and concise
  - Include date of charter if available

### Block 6: Call to Action
- **Block Type**: Form Block (t-form)
- **Content**:
  - Section heading (H2): "Plan Your Charter Experience"
  - Form with fields:
    - Name (required)
    - Email (required)
    - Phone
    - Preferred Dates
    - Number of Guests
    - Special Requests (textarea)
  - "Request Quote" button
- **SEO Elements**:
  - Form field labels for accessibility
  - ARIA attributes for form fields
  - Clear success/error messaging
- **Setup Instructions**:
  - Connect form to email or CRM system
  - Set required fields (name, email)
  - Add privacy policy checkbox (GDPR compliance)
  - Style button to match site design system
  - Set up thank you message or redirect
  - Configure form validation (client and server-side)
  - Test form submission thoroughly

## FLEET OVERVIEW PAGE

### Page-Level SEO
- **URL Structure**: `https://azurcharters.com/fleet/`
- **Title Tag**: "Luxury Charter Yacht Fleet | Motor & Sailing Yachts | Azure Charters"
- **Meta Description**: "Browse our diverse fleet of luxury charter yachts from 36ft to 164ft. Find the perfect motor yacht, sailing yacht or catamaran for your dream vacation."
- **Keywords**: charter yacht fleet, luxury yacht rentals, motor yacht charter, sailing yacht rental, catamaran charter, yacht sizes, yacht capacity, yacht pricing, yacht comparison
- **H1 Heading**: "Our Charter Fleet"
- **Schema Markup**: ItemList schema for yacht listings in JSON-LD format
- **Canonical URL**: Set to `https://azurcharters.com/fleet/`
- **Open Graph Tags**:
  - og:title: "Luxury Charter Yacht Fleet | Azure Yacht Group" 
  - og:description: [same as meta description]
  - og:image: [high-quality image of fleet lineup]
  - og:url: `https://azurcharters.com/fleet/`
  - og:type: "website"
- **Twitter Card**: Summary with large image
- **Breadcrumbs**: Home > Fleet (with structured data markup)

### Block 1: Introduction
- **Block Type**: Text Block (t-text)
- **Content**:
  - Heading (H1): "Our Charter Fleet"
  - 2-3 paragraphs describing fleet diversity, quality standards, and range of options
  - Include keywords: luxury charter yachts, motor yachts, sailing yachts, catamaran
- **SEO Elements**:
  - Use semantic HTML (h1, p tags)
  - Include target keywords naturally in text
- **Setup Instructions**:
  - Set page SEO data in Tilda SEO panel
  - Keep paragraphs concise (3-4 sentences each)
  - Apply appropriate spacing and typography
  - Include brief mention of destinations and experiences
  - Consider adding a small statistical highlight (e.g., "12 premium vessels" or "Over 100 successful charters")

### Block 2: Advanced Filter System
- **Block Type**: Zero Block with custom HTML/JS
- **Content**:
  - Section heading (H2): "Find Your Perfect Charter Yacht"
  - Filter controls for:
    - Yacht Size
    - Yacht Type
    - Guest Capacity
    - Destination
    - Price Range
  - "Apply Filters" button
  - Results counter ("X yachts found")
- **SEO Elements**:
  - Form field labels for accessibility
  - ARIA attributes for interactive elements
  - Semantic HTML structure
- **Setup Instructions**:
  - Copy HTML and JS from `docs/website-architecture/tilda-integration.md`
  - Paste into Zero Block HTML/JS editors
  - Adjust styling to match site design (colors, fonts, spacing)
  - Test functionality with all filter combinations
  - Ensure mobile-friendly behavior (stack filters vertically)
  - Add clear filters option

### Block 3: Yacht Listing Grid
- **Block Type**: Zero Block or Collection Block
- **Content**:
  - Grid of yacht cards using template from `docs/resources/templates.md`
  - Each card includes:
    - Main yacht image
    - Yacht name (H3)
    - Length, guests, cabins specs
    - "From $X" pricing
    - "View Details" button
- **SEO Elements**:
  - Alt text for yacht images: "[Year] [Builder] [Model] '[Name]' [length]ft luxury charter yacht"
  - Schema markup for each product
  - Proper heading hierarchy
- **Setup Instructions**:
  - If using Collection Block:
    - Connect to JSON data source
    - Configure card template with consistent fields
  - If using Zero Block:
    - Create responsive grid layout (3 columns desktop, 2 columns tablet, 1 column mobile)
    - Set equal card heights
    - Add hover effects for better engagement
  - Ensure all links work correctly
  - Optimize images for web (proper compression)

### Block 4: Package Comparison
- **Block Type**: Table Block (t-table)
- **Content**:
  - Section heading (H2): "Charter Packages"
  - Comparison table with:
    - Features column
    - Basic Package column
    - Premium Package column
  - Include rows for crew service, fuel, water toys, food & beverage, etc.
- **SEO Elements**:
  - Table headers and descriptions
  - Proper table structure (thead, tbody, th, td)
  - ARIA attributes for accessibility
- **Setup Instructions**:
  - Create responsive table
  - Use checkmarks or text descriptions
  - Highlight premium package
  - Include package descriptions above table
  - Ensure mobile-friendly display

### Block 5: Charter Process
- **Block Type**: Steps Block (t-steps)
- **Content**:
  - Section heading (H2): "The Charter Process"
  - 5 steps with icons:
    1. Inquiry & Consultation
    2. Yacht Selection
    3. Booking & Contract
    4. Pre-charter Planning
    5. Your Charter Experience
  - Brief description for each step
- **SEO Elements**:
  - Alt text for step icons
  - Structured content with proper headings
  - Sequential markup for steps
- **Setup Instructions**:
  - Use horizontal timeline design for desktop
  - Add relevant icons for each step
  - Include step numbers
  - Set responsive behavior (vertical on mobile)
  - Add brief descriptions under each step

## YACHT DETAIL PAGE (TEMPLATE)

### Page-Level SEO
- **URL Structure**: `https://azurcharters.com/fleet/[yacht-type]/[yacht-name]/`
  - Example: `https://azurcharters.com/fleet/motor-yachts/eternal-spark/`
- **Title Tag**: "[Yacht Name] | [Length]ft [Type] Yacht Charter | Azure Charters"
- **Meta Description**: "Charter the [Yacht Name], a [length]ft [builder] [yacht type] accommodating [guests] guests in [cabins] luxurious cabins with [crew] crew. Available in [locations]."
- **Keywords**: [yacht name] charter, [builder] yacht rental, [length] foot yacht, luxury yacht vacation, [yacht type] charter, [destination] yacht charter, [guests] guest yacht
- **H1 Heading**: "[Yacht Name]"
- **Schema Markup**: Product and Offer schema for yacht and pricing
- **Canonical URL**: Set to the yacht's unique URL
- **Open Graph Tags**:
  - og:title: "Charter [Yacht Name] | [Length]ft [Type] Yacht"
  - og:description: [same as meta description]
  - og:image: [best hero image of the specific yacht]
  - og:url: [yacht's unique URL]
  - og:type: "product"
- **Twitter Card**: Summary with large image
- **Breadcrumbs**: Home > Fleet > [Yacht Type] > [Yacht Name] (with structured data)

### Block 1: Gallery Slider
- **Block Type**: Gallery Block (t-gallery)
- **Content**:
  - Full-width image slider
  - 20+ high-quality images showing:
    - Exterior views
    - Interior spaces
    - Cabins
    - Amenities
    - Water toys
  - Thumbnail navigation
- **SEO Elements**:
  - Alt text for each image: "[Yacht name] [specific area] - [distinctive feature]"
  - Image caption with relevant keywords
- **Setup Instructions**:
  - Set page SEO data in Tilda SEO panel
  - Configure gallery with arrow navigation
  - Add thumbnails below main image
  - Enable lightbox on click
  - Ensure mobile optimization (swipe gestures)
  - Use compressed images for faster loading

### Block 2: Yacht Overview
- **Block Type**: Text Block (t-text)
- **Content**:
  - Yacht name (H1)
  - Brief tagline/subtitle
  - Featured highlights (2-3 sentences)
  - Key specs summary (length, builder, guests, cabins)
  - Base price indication
- **SEO Elements**:
  - Use semantic HTML
  - Include target keywords naturally
  - Structured data for main yacht properties
- **Setup Instructions**:
  - Position directly below gallery
  - Use semantic HTML for better SEO
  - Include key specifications in bold
  - Add visual separators between elements
  - Keep content concise but informative

### Block 3: Specifications Table
- **Block Type**: Table Block (t-table)
- **Content**:
  - Section heading (H2): "Yacht Specifications"
  - Two-column table with specs:
    - Length/Beam/Draft
    - Year/Builder/Refit
    - Guests/Cabins/Crew
    - Engines/Speed/Range
    - Fuel/Water Capacity
    - Additional technical details
- **SEO Elements**:
  - Table headers with proper attributes
  - Semantic HTML table structure
  - Include important keywords in spec descriptions
- **Setup Instructions**:
  - Set equal column widths
  - Create responsive table
  - Use clear label/value pairs
  - Group related specifications
  - Ensure mobile-friendly display

### Block 4: Detailed Description
- **Block Type**: Text Block (t-text)
- **Content**:
  - Section heading (H2): "About [Yacht Name]"
  - Comprehensive description with subsections:
    - Design & Construction
    - Interior Layout
    - Exterior Spaces
    - Entertainment & Technology
    - Water Toys & Recreation
  - Rich keyword usage (but natural, not stuffed)
- **SEO Elements**:
  - Use proper heading hierarchy (H2, H3)
  - Include target keywords naturally throughout text
  - Use semantic HTML elements
- **Setup Instructions**:
  - Break into digestible paragraphs
  - Use proper heading hierarchy consistently
  - Include relevant keywords naturally
  - Add spacing between sections
  - Add 1-2 supporting images if helpful

### Block 5: Package Options
- **Block Type**: Tabs Block (t-tabs)
- **Content**:
  - Section heading (H2): "Charter Packages"
  - Two tabs:
    - Basic Package (inclusions, exclusions, price)
    - Premium Package (inclusions, exclusions, price)
  - Detailed list of what's included in each
- **SEO Elements**:
  - Proper heading hierarchy
  - Semantic list elements (ul, li)
  - Descriptive tab labels
- **Setup Instructions**:
  - Create horizontal tabs with clear labels
  - Use bulleted lists for inclusions
  - Highlight key differences between packages
  - Add pricing information for each package
  - Style active tab to stand out visually

### Block 6: Availability Calendar
- **Block Type**: Zero Block with custom HTML/JS
- **Content**:
  - Section heading (H2): "Availability"
  - Interactive monthly calendar
  - Color coding for:
    - Available dates
    - Booked dates
    - Option-held dates
  - Legend explaining colors
- **SEO Elements**:
  - Accessible calendar markup
  - ARIA labels for interactive elements
  - Proper heading and text structure
- **Setup Instructions**:
  - Copy calendar code from `docs/website-architecture/tilda-integration.md`
  - Customize styling to match site design
  - Ensure responsive behavior on all devices
  - Add month navigation controls
  - Include clear visual legend

### Block 7: Price Calculator
- **Block Type**: Zero Block with custom HTML/JS
- **Content**:
  - Section heading (H2): "Calculate Your Charter"
  - Form elements:
    - Duration dropdown (Half-day, Day, Week)
    - Package radio buttons (Basic, Premium)
    - Additional options checkboxes
    - Dynamic total calculation
- **SEO Elements**:
  - Form field labels for accessibility
  - ARIA attributes for interactive elements
  - Structured form markup
- **Setup Instructions**:
  - Implement JavaScript for dynamic calculation
  - Show price updates in real-time
  - Include clear labels for all options
  - Style consistently with site design
  - Test all combinations for accuracy

### Block 8: Booking Form
- **Block Type**: Form Block (t-form)
- **Content**:
  - Section heading (H2): "Request Booking"
  - Hidden field for yacht name
  - Form fields:
    - Name (required)
    - Email (required)
    - Phone
    - Preferred Dates (date picker)
    - Number of Guests
    - Charter Duration
    - Package Preference
    - Special Requests
  - "Submit Request" button
- **SEO Elements**:
  - Form field labels for accessibility
  - Required field indicators
  - Success/error messaging
- **Setup Instructions**:
  - Connect to email or CRM system
  - Set required fields and validation rules
  - Add date picker component
  - Include privacy policy checkbox
  - Configure confirmation message or redirect
  - Test form submission thoroughly

### Block 9: Similar Yachts
- **Block Type**: Cards Block (t-cards)
- **Content**:
  - Section heading (H2): "Similar Yachts"
  - 3 yacht cards of similar size/type
  - Each card includes:
    - Image
    - Yacht name (H3)
    - Brief specs
    - "View Details" button
- **SEO Elements**:
  - Alt text for yacht images
  - H3 headings for yacht names
  - Proper link text for calls-to-action
- **Setup Instructions**:
  - Select 3 relevant alternatives based on size/type
  - Create equal-sized cards with consistent styling
  - Add hover effects for better interaction
  - Link to respective yacht detail pages
  - Ensure mobile responsiveness

## DESTINATIONS LANDING PAGE

### Page-Level SEO
- **URL Structure**: `https://azurcharters.com/destinations/`
- **Title Tag**: "Luxury Yacht Charter Destinations | Mediterranean, Caribbean & More"
- **Meta Description**: "Discover the world's most exclusive yacht charter destinations. From the Mediterranean's azure waters to Caribbean paradise islands, find your perfect cruise location."
- **Keywords**: yacht charter destinations, Mediterranean yacht charter, Caribbean yacht vacation, exotic yacht destinations, yacht cruising areas, yacht charter locations, superyacht destinations
- **H1 Heading**: "Luxury Yacht Charter Destinations"
- **Schema Markup**: Use Place schema for each destination
- **Canonical URL**: Set to `https://azurcharters.com/destinations/`
- **Open Graph Tags**:
  - og:title: "Luxury Yacht Charter Destinations | Azure Yacht Group"
  - og:description: [same as meta description]
  - og:image: [high-quality destination map or featured destination]
  - og:url: `https://azurcharters.com/destinations/`
  - og:type: "website"
- **Twitter Card**: Summary with large image
- **Breadcrumbs**: Home > Destinations (with structured data)

### Block 1: Hero Map Visual
- **Block Type**: Zero Block or Cover Block
- **Content**:
  - Interactive/stylized world map
  - Highlighted charter regions
  - Page heading: "Luxury Yacht Charter Destinations"
  - Brief introductory text
- **SEO Elements**:
  - Alt text: "World map of luxury yacht charter destinations"
  - Semantic HTML structure
  - Use H1 for main heading
- **Setup Instructions**:
  - Create visual map (custom SVG or image)
  - Add clickable hotspots for regions
  - Ensure responsive behavior on all devices
  - Include brief introductory text (2-3 sentences)

### Block 2: Destination Grid
- **Block Type**: Grid Block (t-tile)
- **Content**:
  - 3-column layout of destination cards
  - For each destination:
    - High-quality image
    - Destination name (H2)
    - Brief description (1-2 sentences)
    - "Explore" button linking to detailed page
- **SEO Elements**:
  - Alt text for destination images: "[Destination] yacht charter destination - [distinctive feature]"
  - H2 headings for destination names
  - Include keywords naturally in descriptions
- **Setup Instructions**:
  - Use equal-sized images (16:9 ratio)
  - Create consistent card design
  - Add hover effects for better engagement
  - Responsive layout (3 columns desktop, 2 columns tablet, 1 column mobile)
  - Include brief, compelling descriptions

### Block 3: Season Calendar
- **Block Type**: Table Block (t-table)
- **Content**:
  - Section heading (H2): "Best Times to Charter"
  - Visual chart showing:
    - Destinations as rows
    - Months as columns
    - Color-coding for ideal/good/challenging seasons
  - Temperature ranges and weather notes
- **SEO Elements**:
  - Proper table structure (thead, tbody, th, td)
  - Caption explaining color codes
  - ARIA attributes for accessibility
- **Setup Instructions**:
  - Create responsive table layout
  - Use color-coding with clear legend
  - Include temperature ranges
  - Add brief notes on seasonal conditions
  - Ensure mobile-friendly display

### Block 4: Featured Destination
- **Block Type**: Cover Block (t-cover) + Text Block (t-text)
- **Content**:
  - Section heading (H2): "Featured Destination: Mediterranean"
  - Large hero image of Mediterranean yachting
  - Detailed content sections:
    - Overview of Mediterranean
    - Key regions (French Riviera, Amalfi Coast, Greek Islands)
    - Ideal charter seasons
    - Highlight experiences
  - "Explore Mediterranean" button
- **SEO Elements**:
  - Alt text for featured image
  - Proper heading hierarchy (H2, H3)
  - Rich keyword usage in content
- **Setup Instructions**:
  - Use high-impact imagery
  - Structure content with clear headings
  - Include brief, information-rich paragraphs
  - Add call-to-action button linking to detailed page
  - Consider adding a map of the region

## DESTINATION DETAIL TEMPLATE

### Page-Level SEO
- **URL Structure**: `https://azurcharters.com/destinations/[destination-name]/`
  - Example: `https://azurcharters.com/destinations/mediterranean/`
- **Title Tag**: "[Destination] Yacht Charter | Luxury Cruising in [Destination] | Azure Charters"
- **Meta Description**: "Plan your dream [destination] yacht charter with Azure. Explore [key attractions], discover hidden gems, and experience the best of [destination] aboard a luxury yacht."
- **Keywords**: [destination] yacht charter, [destination] sailing vacation, [specific locations] yacht cruising, luxury yacht [destination], [destination] yacht itinerary, [destination] yacht rental
- **H1 Heading**: "[Destination] Yacht Charter"
- **Schema Markup**: TouristAttraction and TouristDestination schema
- **Canonical URL**: Set to the destination's unique URL
- **Open Graph Tags**:
  - og:title: "[Destination] Yacht Charter | Azure Yacht Group"
  - og:description: [same as meta description]
  - og:image: [high-quality signature image of destination]
  - og:url: [destination's unique URL]
  - og:type: "article"
- **Twitter Card**: Summary with large image
- **Breadcrumbs**: Home > Destinations > [Destination] (with structured data)

### Block 1: Hero Section
- **Block Type**: Cover Block (t-cover)
- **Content**:
  - Full-width hero image of destination
  - H1 Heading: "[Destination] Yacht Charter"
  - Subheading with key highlight
  - Brief introduction (2-3 sentences)
- **SEO Elements**:
  - Alt text for hero image: "[Destination] yacht charter scenic view of [specific landmark/feature]"
  - Use semantic HTML
  - Include primary keywords in heading and intro
- **Setup Instructions**:
  - Use high-impact, horizontally-oriented image
  - Add text overlay with appropriate contrast
  - Include brief introduction text
  - Add subtle call-to-action if appropriate
  - Ensure mobile optimization

### Block 2: Highlights Section
- **Block Type**: Grid Block (t-tile)
- **Content**:
  - Section heading (H2): "[Destination] Highlights"
  - Grid of 4-6 must-see locations
  - For each highlight:
    - Image
    - Location name (H3)
    - Brief description
- **SEO Elements**:
  - Alt text for highlight images: "[Specific location] in [destination] - [distinctive feature]"
  - Use H3 for location names
  - Include location-specific keywords
- **Setup Instructions**:
  - Use consistent image sizing
  - Create equal-height cards
  - Add visual separators between items
  - Ensure mobile-friendly layout
  - Keep descriptions brief but compelling

### Block 3: Itinerary Suggestions
- **Block Type**: Timeline Block (t-timeline) or Zero Block
- **Content**:
  - Section heading (H2): "Sample [Destination] Yacht Charter Itinerary"
  - Day-by-day breakdown:
    - Day 1: Embarkation location and initial cruise
    - Days 2-6: Daily destinations and highlights
    - Day 7: Final day activities and disembarkation
  - Map visualization of route
- **SEO Elements**:
  - Alt text for map image
  - H3 headings for each day
  - Location keywords in descriptions
- **Setup Instructions**:
  - Create visual timeline with day numbers
  - Include brief descriptions for each day
  - Add small images for key locations
  - Include distance information between stops
  - Add interactive or static map showing the route

### Block 4: Practical Information
- **Block Type**: Accordion Block (t-accordion)
- **Content**:
  - Section heading (H2): "Essential [Destination] Information"
  - Accordion sections for:
    - Best Time to Visit
    - Entry Requirements
    - Local Regulations
    - Currency and Language
    - Weather Patterns
    - Communication
- **SEO Elements**:
  - H3 headings for accordion sections
  - Structured content within sections
  - Include relevant keywords naturally
- **Setup Instructions**:
  - Create expandable accordion sections
  - Default to closed state
  - Use icons where appropriate
  - Structure content with bullet points for easy scanning
  - Include practical, actionable information

### Block 5: Recommended Yachts
- **Block Type**: Cards Block (t-cards)
- **Content**:
  - Section heading (H2): "Recommended Yachts for [Destination]"
  - 3-4 yacht cards showing:
    - Yacht image
    - Yacht name (H3)
    - Key specifications
    - Brief note on why suitable for this destination
    - "View Details" button
- **SEO Elements**:
  - Alt text for yacht images
  - H3 headings for yacht names
  - Descriptive link text
- **Setup Instructions**:
  - Select yachts specifically suited to this destination
  - Create consistent card design
  - Add hover effects
  - Link to respective yacht detail pages
  - Ensure mobile responsiveness

### Block 6: Inquiry Form
- **Block Type**: Form Block (t-form)
- **Content**:
  - Section heading (H2): "Plan Your [Destination] Charter"
  - Hidden field for destination
  - Form fields:
    - Name (required)
    - Email (required)
    - Phone
    - Preferred Dates
    - Number of Guests
    - Special Requests/Questions
  - "Request Information" button
- **SEO Elements**:
  - Form field labels
  - ARIA attributes
  - Success messaging
- **Setup Instructions**:
  - Connect to email or CRM
  - Set required fields
  - Include privacy policy checkbox
  - Configure confirmation message
  - Destination-specific thank you message
  - Test form submission

## ABOUT US PAGE

### Page-Level SEO
- **URL Structure**: `https://azurcharters.com/about/`
- **Title Tag**: "About Azure Yacht Charters | Our Story & Team"
- **Meta Description**: "Meet the Azure Yacht Group team, dedicated to creating unforgettable charter experiences. Learn about our commitment to excellence, expertise, and personalized service."
- **Keywords**: yacht charter company, luxury yacht charter team, yacht charter experts, professional yacht crew, yacht charter experience, yacht charter service, charter yacht history
- **H1 Heading**: "About Azure Yacht Charters"
- **Schema Markup**: Organization and Person schema for team members
- **Canonical URL**: Set to `https://azurcharters.com/about/`
- **Open Graph Tags**:
  - og:title: "About Azure Yacht Charters | Our Team"
  - og:description: [same as meta description]
  - og:image: [team or office image]
  - og:url: `https://azurcharters.com/about/`
  - og:type: "website"
- **Twitter Card**: Summary with large image
- **Breadcrumbs**: Home > About (with structured data)

### Block 1: Company Story
- **Block Type**: Cover Block (t-cover) + Text Block (t-text)
- **Content**:
  - Hero image of yacht or team
  - H1 Heading: "About Azure Yacht Charters"
  - Founding story
  - Mission and vision statements
  - Company values (3-5 points)
- **SEO Elements**:
  - Alt text for hero image
  - Use semantic HTML
  - Include target keywords naturally
- **Setup Instructions**:
  - Use professional team or fleet image
  - Structure content with clear headings
  - Keep paragraphs concise
  - Consider adding a brief founder quote
  - Include company timeline if relevant

### Block 2: Team Section
- **Block Type**: Team Block (t-team) or Cards Block (t-cards)
- **Content**:
  - Section heading (H2): "Our Charter Experts"
  - Team member cards with:
    - Professional headshot
    - Name and position
    - Brief bio highlighting expertise
    - Optional contact information
- **SEO Elements**:
  - Alt text for team photos: "[Name], [Position] at Azure Yacht Group"
  - Use H3 for team member names
  - Schema markup for Person type
- **Setup Instructions**:
  - Use consistent photo style and sizing
  - Create equal-height cards
  - Include 3-5 key team members
  - Add social media links if appropriate
  - Ensure mobile-friendly layout

### Block 3: Why Choose Us
- **Block Type**: Features Block (t-features)
- **Content**:
  - Section heading (H2): "Why Choose Azure Yacht Charters"
  - 4-6 key differentiators with:
    - Icon or small image
    - Feature heading (H3)
    - Brief description
  - Examples: Personalized Service, Expert Knowledge, Curated Fleet, etc.
- **SEO Elements**:
  - Alt text for icons/images
  - Use H3 for feature headings
  - Include target keywords naturally
- **Setup Instructions**:
  - Use consistent icon style
  - Create visually balanced layout
  - Keep descriptions brief but compelling
  - Add subtle visual separators
  - Ensure mobile-friendly display

### Block 4: Certification & Affiliations
- **Block Type**: Logos Block (t-logos)
- **Content**:
  - Section heading (H2): "Our Certifications & Partnerships"
  - Logo grid showcasing:
    - Industry memberships
    - Certification logos
    - Partner organizations
  - Brief explanation of significance
- **SEO Elements**:
  - Alt text for each logo
  - Descriptive captions if appropriate
  - Link to relevant certification pages
- **Setup Instructions**:
  - Use consistent logo sizing
  - Arrange in balanced grid
  - Add hover tooltips explaining each
  - Include brief text explaining the value of these affiliations
  - Ensure high-quality, transparent logo images

## Implementation Notes

1. **Cross-site Navigation**:
   - Implement header and footer links between azureyachtgroup.com and azurcharters.com
   - Use consistent branding but distinct color schemes to differentiate sites
   - Include breadcrumbs on all pages

2. **Mobile Optimization**:
   - Test all pages on multiple device sizes
   - Ensure touch targets are appropriately sized (min 44px)
   - Verify forms are usable on mobile
   - Check loading speed on mobile networks

3. **Analytics Integration**:
   - Add Google Analytics tracking code
   - Set up conversion tracking for all forms
   - Create event tracking for key user interactions
   - Implement cross-domain tracking between sites

4. **API Integration**:
   - Once API issues are resolved, implement data sync for yacht listings
   - Set up automated content updates for fleet and availability
   - Create fallback content for API failures

## Additional Resources

For implementation guidance, refer to:
- [Website Structure Document](../website-architecture/site-structure)
- [Tilda Integration Guide](../website-architecture/tilda-integration)
- [Implementation Timeline](../WEBSITE_STRUCTURE_ALIGNMENT#timeline-for-completion)
- [Charter Site Templates](../../yacht-listings/yacht-listings-template.csv)

## SEO & Advertising

1. **ads.txt Implementation**:
   - Place at domain root: `https://azurcharters.com/ads.txt`
   - Include all advertising partners with proper formatting
   - Upload through Tilda Project Settings > Export & Domain > Upload Files

2. **app-ads.txt Implementation**:
   - Place at domain root for mobile app advertising verification
   - Follow same format and upload process as ads.txt

3. **Regular Verification**:
   - Test file accessibility via direct URL
   - Use validation tools like [adstxt.guru](https://adstxt.guru)
   - Update quarterly or when adding new advertising partners

---

*Last Updated: May 7, 2025*  
*Next Review: June 15, 2025* 