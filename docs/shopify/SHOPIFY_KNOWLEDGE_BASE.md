# Azure Yacht Group – Shopify Store Knowledge Base

> **Store:** `www.azureyachtgroup.com` · Plan: Basic · Currency: USD · Timezone: EST  
> **Admin contact:** stan@azureyachtgroup.com  
> Last audited: November 2026 (52 products, 10 collections)

---

## 1. Architecture Overview

The site is built on **Shopify** with the Admin API as the integration layer. All product data, collections, pricing, and variants are managed through the Shopify Admin (or programmatically via the Admin API / MCP connector). There is no Tilda dependency on the live site — the Tilda CSV files in this repo are legacy reference material only.

The store runs three parallel product pillars, each with its own product types, vendor names, and tag conventions:

```
azureyachtgroup.com
├── Yacht Charters           → Charter Service / Charter Service - Superyacht / Charter Destination / Yacht Charter
├── Yachts for Sale          → Yacht Listing / Brokerage Yacht / Center Console
└── New Construction         → New Construction
```

---

## 2. Product Type Taxonomy

| Product Type | Business Pillar | Typical Vendor | Pricing Model |
|---|---|---|---|
| `Charter Service` | Charters | Azure Charters | Variants by duration |
| `Charter Service - Superyacht` | Charters | Azure Charters / Azure Yacht Group | Variants by duration |
| `Charter Destination` | Charters | Azure Yacht Group | Single variant (contact) or priced |
| `Yacht Charter` | Charters | Azure Yacht Group | Single variant (weekly rate) |
| `Yacht Listing` | Brokerage | Azure Yacht Group | Single variant (asking price) |
| `Brokerage Yacht` | Brokerage | Yacht Habit | Single variant (asking price) |
| `Center Console` | Brokerage | Make brand | Single variant (asking price) |
| `New Construction` | New Builds | NEB / Azure Design / DYD | Single variant ($0 — inquiry) |

---

## 3. Vendor Naming Conventions

Vendor determines the **source/channel** of the listing, not just the boat brand.

| Vendor | Meaning |
|---|---|
| `Azure Charters` | Azure-managed charter fleet (day charters, weekly) |
| `Azure Yacht Group` | Azure-owned brokerage listings + destination packages |
| `New England Boatworks` | In-house new construction (Azure 48 Hard Top, 48 Saloon) |
| `Azure Design` | In-house concept designs (Axiom 48, Vantage 85, etc.) |
| `DYD` | Third-party new builds (Franco Gnessi / Dynaship Yacht Design) |
| `Yacht Habit` | Partner brokerage listings (auto-imported) |
| `Key West` | OEM brand used on specific center console listings |

---

## 4. Tag System

Tags drive **smart collection membership** and **filtering**. Always apply the correct tags — omitting them excludes a product from the right collection.

### Required classification tags (apply to every product)

| Tag | Applies to |
|---|---|
| `listing:charter` | All charter products (day, multi-day, destination) |
| `listing:for-sale` | All brokerage / for-sale products |
| `new` or `New` | New listings (populates "Latest Listings" smart collection — use capital `New`) |

### Charter sub-type tags

| Tag | Meaning |
|---|---|
| `charter:day` | Day charter (4–10 hours) — populates "Day Yacht Charters" smart collection |
| `charter:multi-day` | Multi-day, weekly, or destination trip |
| `charter:superyacht` | Superyacht tier charter |

### Vessel type tags

| Tag | Vessel category |
|---|---|
| `type:motor-yacht` | Motor yachts |
| `type:performance` | Performance/sports yachts |
| `type:sailboat` | Sailing yachts |
| `type:sportfish-center-console` | Sportfish / center console |
| `type:new-construction` | New build designs |

### Brand tags

Format: `brand:<lowercase-brand>` — e.g. `brand:azimut`, `brand:sunseeker`, `brand:ferretti`, `brand:azure-yachts`.

### Location tags

Free-form lowercase — e.g. `miami`, `fort lauderdale`, `south-florida`, `mediterranean`, `caribbean`.

### Occasion/feature tags (charter products)

Free-form — e.g. `celebrations`, `corporate events`, `fishing`, `island-hopping`, `week-long`, `premium`, `exclusive`.

---

## 5. SKU Conventions

| Pillar | Format | Example |
|---|---|---|
| Day charter | `BOATCODE-DURATION-TIMESTAMP` | `SS60-4H-1768277020153` |
| Weekly charter | `BOATCODE-DURATION-TIMESTAMP` | `Y8-7DAY-CHEF-1768266721027` |
| Destination charter | `CHARTER-LOCATION-DURATION` | `CHARTER-EXUMAS-7DAY` |
| Brokerage (Azure) | `BRANDCODE-YEAR` | `FER720-2023`, `PER8X-2020` |
| Brokerage (Yacht Habit) | `YH-TIMESTAMP-RANDOMCODE` | `YH-1768023648861-dtf0i7ip8` |
| New Construction (Azure 48) | `MODELCODE-COLOR` | `A100002-WATER`, `A100005-FIRE` |
| New Construction (concept) | `null` or descriptive | `ASCENTE-112-WEEKLY` |
| Superyacht charter | `CODE-TYPE-TIMESTAMP` | `ES-7DAY-STD-1768271603371` |

---

## 6. Variant Structure by Product Type

### Day Charter (`Charter Service`)
Typically **3 variants**:
- Half Day (4 Hours)
- Full Day (8 Hours)  
- Sunset Cruise (3 Hours) **or** Extended Day (6 Hours) **or** Extended Day (10 Hours)

Some boats offer an **Overnight (24 Hours)** variant instead of extended.

### Weekly / Multi-Day Charter
Typically **1–3 variants** tiered by inclusion level:
- Base rate (e.g. `7-Day Weekly Charter`)
- With chef service (e.g. `7-Day + Chef Service`)
- VIP complete package (e.g. `7-Day VIP Complete Package`)

Superyacht charters use **season-based variants**:
- `7 days, low season – €NNN,NNN + expenses`
- `7 days, high season – €NNN,NNN + expenses`

### Destination Trip (`Charter Destination`)
Typically **1 variant** at `$0.00` (contact for pricing) or a priced `Default Title`.  
SKU format: `CHARTER-LOCATION-DURATION`.

### Brokerage (`Yacht Listing`, `Brokerage Yacht`)
Always **1 variant** — `Default Title` — priced at the asking price.

### New Construction
- Azure 48 Hard Top & Saloon Express: **5 color variants** (Water, Earth, Air, Fire, Spirit)
- Concept designs (Azure Design, DYD): **1 variant** at `$0.00` (inquiry pricing)

---

## 7. Collections

| Collection | Handle | Type | Rule / Notes |
|---|---|---|---|
| Home page | `frontpage` | Manual | Hero/featured products |
| Yacht Brokerage | `yacht-brokerage` | Manual | Featured brokerage entry point |
| Charter Services | `charter-services` | Manual | Featured charter entry point |
| Design Services | `design-services` | Manual | Currently empty |
| **Yachts for Sale** | `yachts-for-sale` | Manual | 18 brokerage listings, manually curated |
| **Day Yacht Charters** | `day-charters` | **Smart** | Auto: `listing:charter` AND `charter:day` |
| Event Charters | `event-charters` | Manual | Currently empty |
| Yacht Design Services | `yacht-design-services` | Manual | 1 product |
| **Latest Listings** | `latest-listings` | **Smart** | Auto: tag = `New` (capital N) |

**Key rule:** Adding `listing:charter` + `charter:day` tags to any product automatically puts it in "Day Yacht Charters". Adding `New` tag puts it in "Latest Listings".

---

## 8. Pricing Reference

### Day Charters (approximate range)

| Boat size | Half Day (4h) | Full Day (8h) | Extended (10h) |
|---|---|---|---|
| 38–42ft | $1,300–$2,500 | $3,000–$5,000 | $3,800–$6,500 |
| 55–65ft | $2,200–$3,800 | $4,000–$7,500 | $6,000–$9,200 |
| 60–68ft | $3,200–$5,000 | $5,200–$8,500 | $6,000–$10,500 |
| 75ft+ (superyacht) | $2,500–$4,500 | $4,500–$8,500 | — |

### Weekly Charters
- Sailing (Y-8, 79ft): $80,000–$95,000/week
- Superyacht (Eternal Spark, 164ft): $372,500–$389,000/week
- ASCENTE 112ft: $145,000/week
- LE PONANT (84m sailing, 32 guests): $540,000/week

### Destination Trips
- Bimini Weekend (2 days): $8,900
- Puerto Rico Island Hopping (4 days): contact pricing ($0 placeholder)
- Exumas 7-Day: $38,500
- Japan/South Korea 11-Day: $0 (inquiry)
- **Mischief by Samara (Komodo/Raja Ampat):** 3-night $28,500, 4-night $38,000, 5-night $47,500, 7-night $66,500

### Brokerage (for-sale)
- Entry (center console, 26ft): $55,000–$114,000
- Mid-range (42–60ft): $398,500–$1,495,000
- Premium (68–82ft): $1,850,000–$2,795,000
- Ultra (76ft+): $3,450,000–$4,890,000

---

## 9. Content Patterns

### Charter product title format
`[Boat Model] [Type] Charter - [Location]`  
Examples: `Azimut 55 Charter - South Florida`, `Prestige 420 Flybridge Charter - Miami`

### Superyacht charter title format
`[Boat Name] – [Size] [Builder] [Type] Charter`  
Example: `Eternal Spark – 50 m (164 ft) Bilgin Superyacht Charter`

### Destination trip title format
`[Duration] [Experience Name] in/from [Location]`  
Examples: `4 Days Island Hopping in Puerto Rico`, `Exumas 7-Day Crewed Charter`

### Brokerage listing title format
`[Year] [Make] [Model/Name] – [Condition/Notable Feature]` (Azure)  
`[Year] [Make]` (Yacht Habit partner imports)

### Description structure (charter products)
1. Opening hook / yacht highlight sentence
2. Yacht specifications block (length, guests, builder, year)
3. Feature list (what makes this boat special)
4. What's included / what's not included
5. Call to action (contact / book)

### Description structure (destination trips)
1. Narrative opening (evocative)
2. Itinerary (day-by-day breakdown with H3/H4 headings)
3. Voyage details block (duration, distance, departure port, best season)
4. Destinations visited list
5. Contact CTA

---

## 10. Operational Notes

- **Inventory is always 0** across all products — the store uses Shopify for discovery and inquiry, not live inventory management. Bookings are handled offline.
- **`$0.00` pricing** is used for new construction concepts and some destination trips to signal "inquiry only."
- **DRAFT vs ACTIVE vs ARCHIVED:** Some Yacht Habit brokerage listings are DRAFT (pending review) or ARCHIVED (sold/removed). The Tartan 37 "Cloudburst" and others are DRAFT.
- **UNLISTED:** The 2009 Horizon 76 ARLENE is UNLISTED (visible via direct link, not in collections).
- **Images:** Hosted on Shopify CDN (`cdn.shopify.com/s/files/1/0597/8787/0251/files/`). Some superyacht charters (Sunseeker 75, Azimut 60/65) have no `featuredMedia` — images need to be added.
- **The Shopify MCP connector** (namespace: `Shopify`) provides full Admin API access including `create-product`, `update-product`, `add-to-collection`, `graphql_mutation`, and `run-analytics-query`.

---

## 11. How to Add a New Product

### New day charter
1. `create-product` with `productType: "Charter Service"`, vendor `Azure Charters`
2. Tags: `listing:charter`, `charter:day`, `brand:X`, `location`, `type:motor-yacht`, optionally `new`/`New`
3. Variants: Half Day (4h), Full Day (8h), + one of Extended/Sunset
4. SKU: `BOATCODE-DURATION-TIMESTAMP`
5. Auto-appears in **Day Yacht Charters** collection via smart rules

### New destination trip
1. `create-product` with `productType: "Charter Destination"`, vendor `Azure Yacht Group`
2. Tags: `listing:charter`, `charter:multi-day`, location tags, `new`/`New`
3. Variants: one per duration option (3-Night, 4-Night, etc.) or single Default Title at $0
4. SKU: `CHARTER-LOCATION-DURATION`
5. Add manually to relevant collections if needed

### New brokerage listing
1. `create-product` with `productType: "Yacht Listing"`, vendor `Azure Yacht Group`
2. Tags: `listing:for-sale`, `brand:X`, `type:X`, location, optionally `new`
3. Single variant `Default Title` at asking price
4. SKU: `BRANDCODE-YEAR`
5. Add manually to **Yachts for Sale** collection

### New construction / concept
1. `create-product` with `productType: "New Construction"`, vendor `Azure Design` or shipyard name
2. Tags: `new construction`, `type:new-construction`, `brand:azure-yachts`, size range
3. Single variant at `$0.00` for concepts, priced for real builds with options
4. Add to **Yacht Design Services** or new construction collection as appropriate

---

## 12. Missing Items (Gaps to Fill)

- **Mischief by Samara** (Komodo/Raja Ampat liveaboard) — in Tilda CSV and destination-trips.csv but NOT yet in Shopify → needs `create-product`
- **Event Charters** collection is empty — no products tagged for events
- **Design Services** collection is empty — new construction concepts exist but aren't in it
- **Missing images** on 3 superyacht charter products (Sunseeker 75, Azimut 60, Azimut 65)
- **Tartan 37, Boston Whaler, Argonaut** — still DRAFT, need review before publishing
- **2009 Horizon 76 ARLENE** — UNLISTED, needs to be published or archived
- **Japan/South Korea voyage** — priced at $0, needs actual pricing added
