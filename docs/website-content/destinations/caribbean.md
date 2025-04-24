---
id: caribbean
title: Caribbean Yacht Charter Destinations
sidebar_position: 3
description: Explore the stunning Caribbean yacht charter destinations including the British Virgin Islands, St. Barts, the Bahamas, and more.
---

# Caribbean Yacht Charter

Turquoise waters, powdery white beaches, and tropical islands make the Caribbean a perennial favorite for luxury yacht charters. From the exclusive enclaves of St. Barths to the unspoiled British Virgin Islands, the Caribbean offers the perfect blend of relaxation, adventure, and luxury.

## Destination Highlights

| Region | Key Ports | High Season | Average Daily Rate | Signature Experiences |
|--------|-----------|-------------|-------------------|------------------------|
| British Virgin Islands | Tortola, Virgin Gorda, Jost Van Dyke | December-April | $5,000-$40,000 | The Baths, Soggy Dollar Bar, Yacht Week |
| St. Barths & St. Martin | Gustavia, Marigot, Grand Cul de Sac | December-April | $6,500-$55,000 | New Year's Eve, Exclusive Beach Clubs, Duty-Free Shopping |
| Antigua & Barbuda | English Harbour, Jolly Harbour | December-March | $5,500-$45,000 | Sailing Week, Historic Nelson's Dockyard, 365 Beaches |
| Grenadines | Bequia, Mustique, Tobago Cays | December-April | $4,500-$38,000 | Private Islands, Marine Reserves, Celebrity Hideaways |
| Bahamas | Nassau, Exumas, Harbour Island | November-May | $5,000-$50,000 | Swimming Pigs, Blue Holes, Pink Sand Beaches |
| US Virgin Islands | St. Thomas, St. John, St. Croix | December-April | $4,800-$42,000 | National Parks, Duty-Free Shopping, Historic Sites |

## Premium Marinas & Berthing

| Marina | Location | Max LOA | Berth Cost (High Season) | Notable Amenities | Advance Booking |
|--------|----------|---------|--------------------------|-------------------|----------------|
| Yacht Haven Grande | St. Thomas, USVI | 200m | $550-$1,800/night | Megayacht Facilities, Shopping | 3-6 months |
| IGY Rodney Bay | St. Lucia | 85m | $400-$900/night | Full-Service Yard, Restaurants | 2-4 months |
| Port de Gustavia | St. Barths | 60m | $800-$2,500/night | Ultra-Luxury Location, VIP Services | 12+ months for NYE |
| Christophe Harbour | St. Kitts | 90m | $600-$1,600/night | Superyacht Marina, Beach Club | 4-6 months |
| Albany Marina | Bahamas | 100m | $650-$2,000/night | Resort Access, Golf Course | 4-8 months |
| Nanny Cay | Tortola, BVI | 75m | $300-$800/night | Full Service, Hurricane Safe | 2-3 months |

## Implementation Guide

This document provides the detailed block-by-block implementation guide for the Caribbean destination page on the Azure Charters website. Follow these specifications to ensure optimal SEO, user experience, and conversion.

### Page-Level SEO Configuration

| Element | Value |
|---------|-------|
| URL Structure | `https://azurcharters.com/destinations/caribbean/` |
| Title Tag | "Caribbean Yacht Charter | Luxury Island Hopping | Azure Charters" |
| Meta Description | "Experience the ultimate Caribbean yacht charter with Azure. Explore tropical islands, secluded beaches, and crystal-clear waters aboard a luxury yacht." |
| Primary H1 | "Caribbean Yacht Charter" |
| Schema Markup | TouristAttraction and TouristDestination schema |
| Canonical URL | `https://azurcharters.com/destinations/caribbean/` |
| Open Graph Tags | Title: "Caribbean Yacht Charter \| Azure Yacht Group"  
Description: [same as meta]  
Image: [high-quality image of yacht in Caribbean]  
URL: [canonical URL]  
Type: article |
| Breadcrumbs | Home > Destinations > Caribbean |

## Block Implementation

### Block 1: Hero Section

**Block Type**: Cover Block (t-cover)

**Content Elements**:
- Full-width hero image of yacht in Caribbean setting (BVI or Exumas)
- H1 Heading: "Caribbean Yacht Charter"
- Subheading: "Discover Paradise: Island Hopping in Crystal-Clear Waters"
- Brief introduction (2-3 sentences)
- Key statistics overlay: "700+ islands, 90°F average water temperature, 245+ days of perfect sunshine"

**Design Specifications**:
- High-impact, horizontally-oriented hero image
- Text overlay with appropriate contrast ratio
- Subtle gradient overlay for text readability
- Optional motion effect (parallax or slow zoom)
- Statistical callouts with elegant styling

**Technical Implementation**:
```html
<div class="destination-hero caribbean">
  <div class="hero-content">
    <h1>Caribbean Yacht Charter</h1>
    <div class="subheading">Discover Paradise: Island Hopping in Crystal-Clear Waters</div>
    <p>Experience the ultimate tropical escape across the Caribbean's pristine islands. From exclusive beach clubs to secluded anchorages, a Caribbean yacht charter delivers the perfect blend of relaxation and adventure.</p>
    <div class="destination-stats">
      <div class="stat-item"><span class="stat-number">700+</span> islands to explore</div>
      <div class="stat-item"><span class="stat-number">90°F</span> average water temperature</div>
      <div class="stat-item"><span class="stat-number">245+</span> days of perfect sunshine</div>
    </div>
  </div>
</div>
```

### Block 2: Destination Overview

**Block Type**: Text Block (t-text)

**Content Elements**:
- Section heading (H2): "The Caribbean Experience"
- Rich descriptive content about Caribbean charter experience
- Key highlights and unique selling points
- Charter statistics and client preferences
- Brief mention of primary regions

**Enhanced Content Elements**:
- **Charter Demographics**: 72% of Caribbean charters are families, 18% couples, 10% groups/corporate
- **Average Duration**: 7-10 days (42% extend by 2+ days)
- **Popular Periods**: 67% of bookings are for December-April, 19% for shoulder seasons, 14% for summer
- **Repeat Booking Rate**: 76% of clients book another Caribbean charter within 36 months
- **Most Requested Experiences**: 
  1. Island hopping (85%)
  2. Snorkeling/diving (79%)
  3. Beach barbecues (68%)
  4. Water sports (65%)
  5. Fishing excursions (47%)

**Technical Implementation**:
- Use semantic HTML with proper heading hierarchy
- Include relevant keywords naturally
- Add 1-2 supporting images with proper alt text
- Incorporate relevant structured data
- Add visual data presentation for statistics

**Example Enhanced Content Excerpt**:
> The Caribbean region encompasses over 700 islands across 28 nations, offering unmatched diversity for a luxury yacht charter. From the celebrity-favorite shores of St. Barths to the untouched reefs of the Tobago Cays, the Caribbean delivers year-round tropical perfection. With water visibility often exceeding 100 feet and average temperatures of 80-85°F (27-29°C), the Caribbean offers ideal conditions for water activities and island exploration.
>
> Azure's fleet selection specifically for Caribbean waters includes vessels with shallow drafts for accessing secluded coves, expansive toy collections for water activities, and crews with extensive local knowledge. Our exclusive relationships with 84% of private island owners in the Bahamas and Grenadines allow for unique beach dining experiences and private access that isn't available to standard charter guests. Caribbean charter satisfaction ratings average 9.7/10 among our clients, with 93% highlighting crew knowledge as "exceptional."

### Block 3: Caribbean Regions Grid

**Block Type**: Grid Block (t-tile)

**Content Elements**:
- Section heading (H2): "Caribbean Regions"
- Featured regions with:
  - High-quality regional image
  - Region name (H3)
  - Brief description
  - Key attractions/highlights
  - Protected anchorages
  - Signature dining experiences
  - VIP access opportunities
  - Wind/sea conditions

**Regions to Include with Enhanced Information**:

**1. British Virgin Islands**
- **Key Ports**: Tortola, Virgin Gorda, Jost Van Dyke, Norman Island
- **Not-to-Miss**: The Baths at Virgin Gorda, Soggy Dollar Bar, The Indians for snorkeling
- **Signature Anchorages**: North Sound (Virgin Gorda), White Bay (Jost Van Dyke), The Bight (Norman Island)
- **Elite Experiences**: Private dinner at Oil Nut Bay Resort, helicopter tour of entire BVI chain, exclusive use of Guana Island
- **Local Expert Tip**: "Reserve a mooring ball at The Baths before 9am for the best experience with minimal crowds"

**2. St. Barths & St. Martin**
- **Key Ports**: Gustavia (St. Barths), Marigot (St. Martin), Grand Cul de Sac (St. Barths)
- **Not-to-Miss**: Shell Beach, Nikki Beach St. Barths, New Year's Eve in Gustavia
- **Signature Anchorages**: Colombier Beach (St. Barths), Île Fourche, Grand Case Bay (St. Martin)
- **Elite Experiences**: New Year's Eve table at exclusive restaurants (€5,000+ minimum), private shopping experiences at Hermès and Louis Vuitton, Eden Rock beach club access
- **Local Expert Tip**: "For New Year's in St. Barths, berths should be reserved 12+ months in advance, with Azure's priority access being one of few ways to secure last-minute arrangements"

**3. The Bahamas & Exumas**
- **Key Ports**: Nassau, Staniel Cay, Harbour Island, George Town
- **Not-to-Miss**: Swimming pigs at Big Major Cay, Thunderball Grotto, Blue Holes
- **Signature Anchorages**: Warderick Wells, Highbourne Cay, Norman's Cay
- **Elite Experiences**: Private island rental in the Exumas (from $45,000/night), swimming with wild dolphins in protected areas, fishing for record bonefish with local guides
- **Local Expert Tip**: "The shallow waters of the Exumas require careful navigation. Our curated selection of shallow-draft vessels allows access to the most exclusive anchorages unavailable to deeper vessels"

**Design Specifications**:
- 3-column grid on desktop, 2-column on tablet, 1-column on mobile
- Equal card heights with consistent styling
- Subtle hover effects
- Clear visual separation between cards
- Icons for marina facilities and exclusivity level

**Technical Implementation**:
```html
<div class="region-card">
  <div class="region-image">
    <img src="[image-path]" alt="British Virgin Islands yacht charter - aerial view of The Baths at Virgin Gorda">
    <div class="exclusivity-badge premium">Premium Destination</div>
  </div>
  <div class="region-content">
    <h3>British Virgin Islands</h3>
    <p>The sailing capital of the Caribbean, offering perfect conditions for island hopping, protected anchorages, and the ideal balance of natural beauty and yacht-friendly infrastructure.</p>
    <div class="key-ports">
      <h4>Key Ports</h4>
      <span class="port">Tortola</span>
      <span class="port">Virgin Gorda</span>
      <span class="port">Jost Van Dyke</span>
      <span class="port">Norman Island</span>
    </div>
    <ul class="highlights">
      <li><strong>The Baths</strong> - Iconic rock formations and hidden grottoes on Virgin Gorda</li>
      <li><strong>Soggy Dollar Bar</strong> - Home of the original Painkiller cocktail</li>
      <li><strong>The Indians</strong> - Premier snorkeling spot with vibrant coral and fish</li>
      <li><strong>Cooper Island Beach Club</strong> - Craft brewery and excellent dining</li>
    </ul>
    <div class="insider-tips">
      <h4>Local Expert Tip</h4>
      <p>"Reserve a mooring ball at The Baths before 9am for the best experience with minimal crowds and perfect lighting for photographs."</p>
    </div>
    <a href="/destinations/caribbean/british-virgin-islands/" class="explore-button">Explore BVI</a>
  </div>
</div>
```

### Block 4: Itinerary Suggestions

**Block Type**: Timeline Block (t-timeline)

**Content Elements**:
- Section heading (H2): "Sample Caribbean Yacht Charter Itinerary"
- Featured 7-day itinerary with:
  - Day-by-day breakdown
  - Location for each day
  - Key activities and experiences
  - Distance/cruising time between stops
  - Berthing/anchoring recommendations
  - Exclusive dining suggestions
- Map visualization showing the route

**BVI Sample Itinerary with Enhanced Details**:

**Day 1: Tortola → Norman Island (8 nm)**
- **Morning**: Arrival at Beef Island Airport, private transfer to yacht at Nanny Cay Marina
- **Boarding**: Welcome aboard with rum punch and appetizers
- **Afternoon**: Cruise to Norman Island, swim at The Caves
- **Evening**: Dinner at Pirate's Bight Restaurant or onboard
- **Mooring/Anchoring**: The Bight ($30 mooring fee, 30+ moorings available)
- **VIP Access**: Sunset cocktails at new cliffside lounge (Azure guests only)

**Day 2: Norman Island → Peter Island → Cooper Island (7 nm)**
- **Morning**: Snorkeling at The Indians marine park
- **Lunch**: Secluded bay at Peter Island
- **Afternoon**: Cruise to Cooper Island Beach Club
- **Evening**: Rum tasting at Cooper Island Rum Bar (240+ rums)
- **Mooring/Anchoring**: Cooper Island Beach Club ($35 mooring fee)
- **VIP Access**: Reserved beachfront dining

**Day 3: Cooper Island → Virgin Gorda (12 nm)**
- **Morning**: Watersports and paddleboarding
- **Afternoon**: Arrive at The Baths National Park for exploration
- **Evening**: Berth or anchor in North Sound
- **Dinner**: Private dinner arrangements at Saba Rock or Bitter End Yacht Club
- **Mooring/Anchoring**: North Sound (multiple options) or berth at YCCS ($180-400/night)
- **VIP Access**: After-hours access to The Baths with private guide

**Day 4: Virgin Gorda → Anegada (15 nm)**
- **Morning**: 90-minute cruise to Anegada (the only coral island in the BVI)
- **Afternoon**: Beach time, flamingo watching, or scooter rental to explore
- **Evening**: Famous Anegada lobster dinner on the beach
- **Mooring/Anchoring**: Setting Point anchorage
- **VIP Access**: Private beach setup with chef-prepared lobster dinner

**Technical Implementation**:
- Create a visual timeline with day numbers and locations
- Include brief descriptions for each day
- Add distances between locations
- Complement with a static or interactive map
- Create "add to itinerary" functionality for planning

### Block 5: Caribbean Hurricane Season Information

**Block Type**: Accordion Block (t-accordion) + Table Block (t-table)

**Content Elements**:
- Section heading (H2): "Essential Caribbean Information"
- Expanded seasonal breakdown with pricing trends
- Monthly weather conditions
- Hurricane season details
- Cruising permits and regulations
- Detailed region-specific information

**Enhanced Seasonal Details**:

**High Season (December-April)**
- **Weather**: 75-85°F (24-29°C), minimal rain, 10-20 knot trade winds
- **Crowds**: High, advance marina reservations needed
- **Pricing**: Premium rates (100%)
- **Pros**: Perfect weather, all services operational, festive atmosphere
- **Cons**: Crowded anchorages, higher rates, advance bookings required
- **Best For**: Families, first-time visitors, holiday celebrations
- **Key Events**: New Year's Eve (St. Barths), Sailing Week (Antigua)
- **Hurricane Risk**: Minimal (official season ends November 30)

**Shoulder Season (May-June, November)**
- **Weather**: 80-90°F (27-32°C), occasional showers, 10-15 knot winds
- **Crowds**: Moderate, good availability
- **Pricing**: 20-40% below peak season
- **Pros**: Great value, warm waters, less crowded
- **Cons**: Some establishments closed (low end), brief rain showers
- **Best For**: Couples, experienced sailors, value-seekers
- **Key Events**: Carnival (various islands, dates differ)
- **Hurricane Risk**: Low (November), Very Low (May-June)

**Low Season (July-October)**
- **Weather**: 85-95°F (29-35°C), rain squalls, variable winds
- **Crowds**: Very light, excellent availability
- **Pricing**: 40-60% below peak season
- **Pros**: Exclusive experience, negotiable rates, warm waters
- **Cons**: Hurricane risk, humidity, reduced services
- **Best For**: Experienced sailors, last-minute availability, budget-conscious
- **Key Events**: Summer festivals, local cultural events
- **Hurricane Risk**: High (August-October), Moderate (July)

**Example Advanced Month-by-Month Table**:

| Month | Air/Sea Temp | Precipitation | Wind | Crowds | Events | Pricing Index | Hurricane Risk | Charter Rating |
|-------|--------------|---------------|------|--------|--------|---------------|----------------|----------------|
| January | 82°F/80°F | Low | Steady trade winds | Very High | New Year's events | 100% | Minimal | ✅ |
| February | 82°F/79°F | Low | Steady trade winds | High | Sailing regattas | 100% | Minimal | ✅ |
| March | 83°F/80°F | Low | Moderate | High | St. Patrick's (Montserrat) | 100% | Minimal | ✅ |
| April | 84°F/81°F | Low | Moderate | Moderate | Antigua Sailing Week | 90% | Minimal | ✅ |
| May | 86°F/82°F | Moderate | Mild | Low | Carnival events | 70% | Very Low | 🔵 |
| June | 87°F/83°F | Moderate | Variable | Very Low | Summer festivals | 60% | Low | 🔵 |
| July | 88°F/84°F | Moderate | Variable | Very Low | Various regattas | 50% | Moderate | 🔶 |
| August | 88°F/85°F | High | Variable | Very Low | Carnival (Grenada) | 40% | High | 🔶 |
| September | 88°F/85°F | High | Variable, can be strong | Minimal | - | 40% | Very High | ⛔ |
| October | 87°F/84°F | High | Variable, can be strong | Minimal | - | 40% | High | 🔶 |
| November | 85°F/83°F | Moderate | Building trades | Low | Thanksgiving | 70% | Low | 🔵 |
| December | 83°F/81°F | Low | Steady trade winds | Very High | Christmas, New Year's | 100% | Minimal | ✅ |

**Design Specifications**:
- Clean, responsive table with hover effects
- Color-coded cells with legend
- Icons for key events and conditions
- Mobile-optimized view with horizontal scroll

### Block 6: Cruising Permits & Regulations

**Block Type**: Features Block (t-features) with custom styling

**Content Elements**:
- Section heading (H2): "Caribbean Cruising Essentials"
- Detailed information on:
  - Required cruising permits by country
  - Customs and immigration procedures
  - National park fees
  - Environmental regulations
  - Fishing licenses
  - Navigation restrictions

**Enhanced Permit Information**:

**British Virgin Islands**
- **Cruising Permit**: Required ($16/person/day), valid for up to 30 days
- **Entry Points**: Road Town, Tortola or Jost Van Dyke
- **Documentation**: Vessel registration, crew/passenger list, passports
- **Charter Addendum**: 4% environmental tax on charter fee
- **Marine Park Fees**: $25 per vessel at specific sites (The Indians, RMS Rhone)
- **Fishing License**: $45 for recreational fishing, $75 for sport fishing
- **Notable Regulations**: No anchoring in coral, mooring balls mandatory at popular sites

**St. Martin/St. Maarten**
- **Dual Nation**: French side (north)/Dutch side (south)
- **French Side Entry**: Marigot for customs/immigration
- **Dutch Side Entry**: Simpson Bay for customs/immigration
- **Documentation**: Passports, crew list, vessel documentation
- **Fees**: Various port fees depending on vessel size
- **Marine Reserves**: €50 daily fee for St. Martin Marine Reserve
- **Notable Regulations**: Different rules for Dutch/French sides, sometimes requiring check-in/out when crossing border

**The Bahamas**
- **Cruising Permit**: Required ($150 for vessels up to 35ft, $300 for 35-100ft, $600 for 100ft+)
- **Validity**: 90 days
- **Entry Points**: Multiple ports of entry across the archipelago
- **Documentation**: Vessel documentation, crew/passenger list with passport details
- **Fishing Permit**: $20 per person, catch limits apply
- **Marine Parks**: Separate fees for Exuma Cays Land and Sea Park
- **Notable Regulations**: Drones require permits, spearfishing restrictions, no taking of conch or lobster in closed seasons

**Design Specifications**:
- Clean layout with country/territory tabs
- Icon-based visual indicators
- PDF download option for each country
- Mobile-friendly design

**Technical Implementation**:
- Configure t-features block with custom styling
- Implement tabbed interface for different countries
- Include downloadable PDF resources
- Ensure mobile-friendly layout

### Block 7: Caribbean Activities & Experiences

**Block Type**: Features Block (t-features)

**Content Elements**:
- Section heading (H2): "Signature Caribbean Experiences"
- 6-8 featured experiences with:
  - Icon or small image
  - Experience name (H3)
  - Brief description
  - Key locations
  - Exclusivity level
  - Approximate cost

**Experiences to Include with Enhanced Detail**:

**1. World-Class Diving & Snorkeling**
- **Highlights**: Vibrant reefs, shipwrecks, caves, wall dives
- **Signature Sites**: Thunderball Grotto (Bahamas), RMS Rhone (BVI), Champagne Reef (Dominica)
- **Azure Exclusive**: Private dive guide, night fluorescence dives, underwater photography
- **Most Requested**: Swimming with pigs in Exumas, whale shark encounters (seasonal)
- **Budget Range**: $75-350 per person depending on experience type and exclusivity

**2. Private Island Experiences**
- **Highlights**: Exclusive beach dining, private island rental, secluded exploration
- **Signature Locations**: Necker Island (BVI), Mustique, Over Yonder Cay (Bahamas)
- **Azure Exclusive**: Access to normally inaccessible private islands
- **Most Requested**: Beach dinner on uninhabited cay with chef service
- **Budget Range**: $2,500-250,000 depending on exclusivity level and group size

**3. Sports Fishing Adventures**
- **Highlights**: Deep sea fishing, flats fishing, spearfishing
- **Signature Catches**: Marlin, sailfish, tarpon, bonefish, wahoo
- **Azure Exclusive**: Tournament-level captains, specialized equipment
- **Most Requested**: Bonefishing in Bahamas flats
- **Budget Range**: $850-3,500 for half/full day experiences

**Design Specifications**:
- Rich photography with consistent styling
- Experience rating system (exclusivity, cost, advance booking)
- "Request" button for each experience
- Mobile-friendly card design

**Technical Implementation**:
- Configure t-features block with custom styling
- Add hover effects showing additional details
- Include request functionality tied to form
- Implement lazy loading for images

### Block 8: Recommended Yachts

**Block Type**: Cards Block (t-cards)

**Content Elements**:
- Section heading (H2): "Recommended Yachts for Caribbean Charter"
- 3-4 yacht cards showing:
  - Yacht image
  - Yacht name (H3)
  - Key specifications (length, guests, cabins)
  - Brief note on Caribbean suitability
  - Special features for Caribbean
  - Current availability
  - "View Details" button

**Example Enhanced Yacht Selection**:

**1. "Caribbean Dream" (76' Catamaran)**
- **Perfect For**: Shallow Bahamas and BVI waters
- **Key Features**: Stable platform, spacious deck areas, 5 water sports stations
- **Caribbean Specialty**: Draft of only 5.5ft allows access to shallow anchorages
- **Client Rating**: 9.7/10 from 48 Caribbean charters
- **Availability**: Limited availability Christmas 2025, good January-March 2026
- **Weekly Rate**: High Season $85,000 / Low Season $69,000
- **Most Requested Itinerary**: Exumas expedition with swimming pigs experience

**2. "Azure Paradise" (120' Motor Yacht)**
- **Perfect For**: Island hopping between St. Martin, St. Barths and Anguilla
- **Key Features**: Beach club, stabilizers, extensive water toy collection
- **Caribbean Specialty**: Crew includes local experts from each major island group
- **Client Rating**: 9.8/10 from 32 Caribbean charters
- **Availability**: Booked for Christmas/NY 2025, available February-April 2026
- **Weekly Rate**: High Season $135,000 / Low Season $110,000
- **Most Requested Itinerary**: St. Martin, St. Barths, Anguilla triangle

**3. "Island Breeze" (54' Sailing Yacht)**
- **Perfect For**: Authentic Caribbean sailing experience
- **Key Features**: Performance sailing, experienced captain, intimate atmosphere
- **Caribbean Specialty**: Access to sailor-only anchorages and hidden coves
- **Client Rating**: 9.6/10 from 65 Caribbean charters
- **Availability**: Good availability throughout 2025/2026 season
- **Weekly Rate**: High Season $28,000 / Low Season $22,000
- **Most Requested Itinerary**: Grenadines island exploration

**Design Specifications**:
- Large format photography showing yacht in Caribbean settings
- Availability calendar integration
- Instant pricing display
- Compare feature for multiple yachts
- Mobile-friendly card layout

**Technical Implementation**:
- Configure t-cards block with custom styling
- Include instant availability checking
- Add comparison functionality
- Optimize for mobile viewing
- Integrate with yacht detail pages

### Block 9: Caribbean Inquiry Form

**Block Type**: Form Block (t-form)

**Content Elements**:
- Section heading (H2): "Plan Your Caribbean Charter"
- Brief introduction text
- Lead capture form with Caribbean-specific fields
- Submission button
- Privacy policy link

**Caribbean-Specific Form Fields**:
- Desired charter dates (with seasonal guidance)
- Preferred Caribbean region(s) (multi-select)
- Interest in specific islands (multi-select)
- Desired experiences (checkboxes)
- Hurricane season awareness checkbox
- Special occasions

**Design Specifications**:
- Clean, high-contrast form design
- Validation for required fields
- Mobile-optimized input methods
- Clear submission button
- Visual confirmation of submission

**Technical Implementation**:
- Configure t-form block with appropriate field collection
- Set up form validation and error handling
- Implement honeypot for spam protection
- Configure autoresponder specific to Caribbean inquiries
- Set up analytics tracking for form submissions

## Mobile Optimization Notes

- Hero section should maintain impact on small screens
- Region cards should stack vertically on mobile
- Timeline should adapt to vertical scrolling format
- Table should allow horizontal scrolling on small screens
- All tap targets should be at least 44px in size
- Test form usability on various mobile devices
- Optimize data visualizations for smaller screens
- Implement tap-to-expand for detailed information
- Ensure calendar/date selection is mobile-friendly

## Conversion Optimization Strategies

- Implement strategic placement of inquiry forms
- Use social proof with Caribbean-specific testimonials
- Feature limited availability notices for peak season
- Create urgency with seasonal pricing indicators
- Showcase exclusive experiences only available through Azure
- Feature visual comparison of public vs. private beaches
- Highlight Caribbean-specific advantages of yacht charter vs. resort stays
- Use exit-intent offers for hurricane season special rates

---

*Last Updated: May 8, 2025*  
*Next Review: June 15, 2025* 