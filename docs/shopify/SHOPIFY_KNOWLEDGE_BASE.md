# Azure Yacht Group – Shopify Store Knowledge Base

> **Store:** `www.azureyachtgroup.com` (myshopify: `yra0nf-ec.myshopify.com`) · Plan: Basic · Currency: USD · Timezone: EST  
> **Admin contact:** stan@azureyachtgroup.com · **Orders email:** orders@azureyachtgroup.com  
> **Broker:** Stanley Zemskoff · **Phone:** (754) 444-6729  
> **Address:** 1314 E Las Olas Blvd #2256, Fort Lauderdale, FL  
> **Founded:** 2020  
> Last audited: November 2026 (52 products, 10+ collections)  
> Source files: `PLAN.md`, `CHANGELOG.md`, `SITE-AUDIT.md`, `THEME-UPDATE-HOOKS.md`, `azure-yacht.css.additions.css`

---

## 1. Architecture Overview

The site runs on **Shopify** with a heavily customised **Savor** theme (currently 4.4.0). All product data, collections, pricing and variants are managed through the Shopify Admin API (or the MCP connector). Tilda is no longer the live platform — the Tilda CSV files in this repo are legacy reference material only.

Three parallel business pillars:

```
azureyachtgroup.com
├── Yacht Charters      → Charter Service / Charter Service - Superyacht
│                          Charter Destination / Yacht Charter
├── Yachts for Sale     → Yacht Listing / Brokerage Yacht / Center Console
└── New Construction    → New Construction (Azure Design / DYD / NEB)
```

---

## 2. Theme Architecture

### Theme naming convention
Themes are labeled alphabetically as working copies are created. **Never edit the live theme directly.**

| Label | Theme ID | Status |
|---|---|---|
| Savor 4.4.0 (original) | 192712441899 | Archived rollback |
| A through G | various | Archived |
| H | 192895877163 | Archived (was live) |
| Q | 192969080875 | **CURRENT LIVE** (published by Stan, Nov 8) |

Working copies are always duplicated from the current live theme before editing. Publish only with **explicit user approval**.

### Custom theme files (azure-prefixed)

All Azure customisations live in files with the `azure-` prefix. These survive Savor updates.

| File | Purpose |
|---|---|
| `sections/azure-home-hero.liquid` | Homepage hero with background video + poster |
| `sections/azure-hero.liquid` | Page/collection hero with video fallback |
| `snippets/azure-product-schema.liquid` | Structured data — suppresses $0 price for inquiry yachts |
| `snippets/azure-og-image.liquid` | Link-preview image logic (WhatsApp, iMessage, FB) |
| `snippets/azure-gallery-limit.liquid` | "View all N photos" button after 11 photos |
| `snippets/azure-inquiry-form.liquid` | Inquiry form used on all yacht pages |
| `blocks/azure-yacht-summary.liquid` | Specs sidebar block on product pages |
| `assets/azure-yacht.css` | **Shared CSS** — session-tagged blocks, never rewrite |

### Custom templates

| Template | Used for |
|---|---|
| `product.weekly-charter` | Weekly/multi-day charters (Eternal Spark, Y-8, Ascente, Le Ponant) |
| `product.new-construction` | New build listings (Geko 60, Bullet 200, etc.) |
| `page.charters.json` | /pages/charters — charter fleet hub |
| `page.design.json` | /pages/design — design portfolio + team |
| `page.brokerage.json` | /pages/brokerage — brokerage hub |
| `collection.franco-gnessi` | Franco Gnessi / DYD collection page |
| `charter` | Destination charter products (Puerto Rico, Exumas, etc.) |

### Theme update hooks (re-add after every Savor update)

After Shopify's "Add to draft" theme update, re-add these six hooks in Edit code (search `Azure hook`):

| File | Change | Why |
|---|---|---|
| `sections/product-information.liquid` | Replace `structured_data` with `{%- render 'azure-product-schema' -%}` | Suppress $0 in Google product schema |
| `snippets/meta-tags.liquid` | Add `and product.price > 100 and product.metafields.listing.price_on_request.value != true` to og:price condition | No $0 og:price in social previews |
| `snippets/product-media-gallery-content.liquid` | Add `{%- render 'azure-gallery-limit' -%}` after gallery `</ul>` | 11-photo limit + View all button |
| `sections/header.liquid` | (1) Add `new-construction` to transparent condition; (2) add `elsif` for page templates; (3) change `<h1>` to `<p>` on homepage | Transparent header + one H1 per page |
| `layout/theme.liquid` | Pass `azure_layout: content_for_layout` to `meta-tags` | Link-preview snippet can read the page |
| `snippets/meta-tags.liquid` | Replace `page_image` og:image block with `{%- render 'azure-og-image' -%}` | Link previews use hero/yacht photo |

---

## 3. CSS Design System

All custom CSS is in `assets/azure-yacht.css`. Add session-tagged blocks; never rewrite existing code.

### Design tokens (CSS variables)

| Token | Meaning |
|---|---|
| `--ay-gold` | Gold accent colour |
| `--ay-navy` | Primary navy |
| `--ay-navy-2` | Dark navy (backgrounds) |
| `--ay-muted` | Muted text |
| `--ay-line` | Border/divider colour |
| `--ay-white` | White |
| `--ay-sand` | Sand/off-white background |
| `--ay-ink` | Body text |
| `--font-heading--family` | Heading typeface (from Savor theme) |

### Component classes (prefix: `ay-`)

| Class | Component |
|---|---|
| `.ay-designers` / `.ay-designer` | Designers grid layout |
| `.ay-stats` / `.ay-stat` | Stat strip (key figures) |
| `.ay-phases` / `.ay-phase` | Collapsible build-phase accordion |
| `.ay-story` / `.ay-story__specs` | Yacht story layout (text + sticky spec card) |
| `.ay-jump` | In-page anchor link strip |
| `.ay-pay` | Payment stage bar chart |
| `.ay-drivers` | Bullet list with gold dash |
| `.ay-status` | Status badge (gold border) |
| `.ay-section--navy` | Dark navy section variant |

---

## 4. Product Type Taxonomy

| Product Type | Business Pillar | Typical Vendor | Pricing Model |
|---|---|---|---|
| `Charter Service` | Charters | Azure Charters | Variants by duration |
| `Charter Service - Superyacht` | Charters | Azure Charters / Azure Yacht Group | Variants by duration |
| `Charter Destination` | Charters | Azure Yacht Group | Single or multi-variant |
| `Yacht Charter` | Charters | Azure Yacht Group | Single variant (weekly) |
| `Yacht Listing` | Brokerage | Azure Yacht Group | Single variant (asking price) |
| `Brokerage Yacht` | Brokerage | Yacht Habit | Single variant (asking price) |
| `Center Console` | Brokerage | Make brand | Single variant (asking price) |
| `New Construction` | New Builds | NEB / Azure Design / DYD | Single variant ($0 — inquiry) |

---

## 5. Vendor Naming Conventions

| Vendor | Meaning |
|---|---|
| `Azure Charters` | Azure-managed charter fleet |
| `Azure Yacht Group` | Azure brokerage + destination packages |
| `New England Boatworks` | In-house new construction (Azure 48 models) |
| `Azure Design` | In-house concept designs |
| `DYD` | Third-party new builds (Franco Gnessi / Dynaship Yacht Design) |
| `Yacht Habit` | Partner brokerage (auto-imported) |
| `Key West` | OEM brand on specific center console listings |

---

## 6. Custom Metafields

### Product-level

| Namespace.key | Type | Used for |
|---|---|---|
| `listing.price_on_request` | Boolean | True → show "Upon Request", suppress $0 in schema/og |
| `yacht_specs.*` | Various | Brokerage yacht specs (beam, draft, engines, etc.) |
| `new_build.side_view` | MediaImage | Side-profile drawing for new construction |
| `new_build.deck_plans` | MediaImage (list) | Deck plan drawings |
| `new_build.budget` | — | Budget range (shown/hidden by user decision) |
| `charter_specs.charter_type` | Text | "Multi-Day Charter", "Day Charter", etc. |
| `charter_specs.home_port` | Text | Departure port |
| `internal.broker_notes` | Text | Internal only — not shown to visitors |
| `custom.source_url` | URL | Source ad / listing URL |
| `custom.share_image` | File (image) | Override og:image for link previews |

### Shop-level

| Namespace.key | Meaning |
|---|---|
| `azure.contact_*` | Contact details (phone, address, WhatsApp) — survive theme updates |

---

## 7. Tag System

Tags drive **smart collection membership** and **filtering**.

### Required classification tags

| Tag | Applies to |
|---|---|
| `listing:charter` | All charter products |
| `listing:for-sale` | All brokerage / for-sale products |
| `New` (capital N) | Populates "Just Listed" / "Latest Listings" smart collections |

### Charter sub-type tags

| Tag | Meaning |
|---|---|
| `charter:day` | Day charter — auto-populates "Day Yacht Charters" |
| `charter:multi-day` | Multi-day, weekly or destination trip |
| `charter:superyacht` | Superyacht tier |

### Vessel type tags

`type:motor-yacht` · `type:performance` · `type:sailboat` · `type:sportfish-center-console` · `type:new-construction`

### Brand tags

Format: `brand:<lowercase>` — e.g. `brand:azimut`, `brand:sunseeker`, `brand:azure-yachts`

### Location tags

Lowercase free-form — e.g. `miami`, `fort lauderdale`, `south-florida`, `caribbean`, `mediterranean`

---

## 8. SKU Conventions

| Pillar | Format | Example |
|---|---|---|
| Day charter | `BOATCODE-DURATION-TIMESTAMP` | `SS60-4H-1768277020153` |
| Weekly charter | `BOATCODE-DURATION-TIMESTAMP` | `Y8-7DAY-CHEF-1768266721027` |
| Destination charter | `CHARTER-LOCATION-DURATION` | `CHARTER-EXUMAS-7DAY` |
| Brokerage (Azure) | `BRANDCODE-YEAR` | `FER720-2023`, `PER8X-2020` |
| Brokerage (Yacht Habit) | `YH-TIMESTAMP-RANDOMCODE` | `YH-1768023648861-dtf0i7ip8` |
| New Construction (Azure 48) | `MODELCODE-COLOR` | `A100002-WATER` |
| New Construction (concept) | `null` or descriptive | `ASCENTE-112-WEEKLY` |

---

## 9. Collections

### Smart collections (auto-populate by tag)

| Collection | Handle | Rule |
|---|---|---|
| Day Yacht Charters | `day-charters` | `listing:charter` AND `charter:day` |
| Latest Listings | `latest-listings` | tag = `New` |
| Just Listed | `just-listed` | tag = `new` (lowercase) |

### Manual collections (key ones)

| Collection | Handle | GID | Notes |
|---|---|---|---|
| Yachts for Sale | `yachts-for-sale` | — | 18 listings, manually curated |
| Charter Destinations | `charter-destinations` | 697833816107 | Multi-day destination trips |
| New Construction | `new-construction` | 697226231851 | All new build products |
| Franco Gnessi / DYD | `franco-gnessi-dyd-yachts` | 697227182123 | Custom `collection.franco-gnessi` template |
| Featured Charters | `featured-charters` | — | Fjord 41 XL, Sea Ray 60, Eternal Spark |
| Featured Yachts for Sale | `featured-yachts-for-sale` | — | Wally 48, Azimut 50, Sunseeker 68 |
| Charter Fleet | `charter-fleet` | — | Full charter fleet |
| Sportfish / CC | `sportfish-center-console-boats-for-sale` | — | Center consoles |

### Collections pending deletion (orphans/duplicates)
`tartan`, `boston-whaler`, `argonaut`, `key-west`, `sailboats-for-sale`, `azimut-yachts-for-sale`, `solstice-glide`, `solstice-glide-1`, `elisium-glide`, `the-celeste-horizon`, `design-services`, `event-charters`, `maintenance-and-repairs`, `yacht-brokerage` (duplicate), `latest-listings` (replaced by `just-listed`).

---

## 10. Pricing & Display Rules

| Condition | Display |
|---|---|
| `price_max ≤ 100` OR `listing.price_on_request = true` | "Upon Request" — no price shown |
| `product.price > 100` AND NOT price_on_request | Price shown in product page and og:price |
| Product has no photo | No structured data schema |
| `listing.price_on_request` | Suppressed from Google Search structured data and og:price |

---

## 11. Pricing Reference

### Day Charters

| Boat size | Half Day (4h) | Full Day (8h) | Extended (10h) |
|---|---|---|---|
| 38–42ft | $1,300–$2,500 | $3,000–$5,000 | $3,800–$6,500 |
| 55–65ft | $2,200–$3,800 | $4,000–$7,500 | $6,000–$9,200 |
| 60–68ft | $3,200–$5,000 | $5,200–$8,500 | $6,000–$10,500 |
| 75ft+ | $2,500–$4,500 | $4,500–$8,500 | — |

### Weekly / Multi-day Charters
- Y-8 (79ft sailing): $80,000–$95,000/week
- Eternal Spark (164ft): $372,500–$389,000/week (low/high season)
- ASCENTE 112ft: $145,000/week
- LE PONANT (84m sailing): $540,000/week

### Destination Trips
- Bimini Weekend (2d): $8,900
- Exumas 7-Day: $38,500
- Puerto Rico 4-Day: TBD (contact pricing)
- Japan/South Korea 11-Day: per-guest $20,300–$97,500 (Ritz-Carlton Luminara)
- **Mischief by Samara (Komodo/Raja Ampat):** 3-night $28,500 · 4-night $38,000 · 5-night $47,500 · 7-night $66,500

---

## 12. Content Patterns

### Title formats

| Product type | Format | Example |
|---|---|---|
| Day charter | `[Model] Charter - [Location]` | `Azimut 55 Charter - South Florida` |
| Superyacht charter | `[Name] – [Size] [Builder] [Type] Charter` | `Eternal Spark – 50 m (164 ft) Bilgin Superyacht Charter` |
| Destination trip | `[Duration] [Experience] in/from [Location]` | `Exumas 7-Day Crewed Charter` |
| Brokerage (Azure) | `[Year] [Make] [Model] – [Feature]` | `2020 Pershing 8X – ALEXANDRA` |
| New construction | `[Name] – [Size] [Designer] [Type]` | `BULLET 200 – 200 ft Franco Gnessi / DYD Superyacht New Build` |

### Description structure — charter products
1. Opening hook / yacht highlight
2. Specs block (length, guests, builder, year)
3. Feature list
4. What's included / not included
5. Inquiry CTA

### Description structure — destination trips
1. Narrative opening
2. Day-by-day itinerary (H3/H4 headings)
3. Voyage details (duration, distance, departure port, best season)
4. Destinations list
5. Contact CTA

---

## 13. Operational Ground Rules

These rules apply to all sessions working on the store:

1. **Working copy only.** Never edit the live/published theme. Duplicate the current live theme first.
2. **Pull before editing.** Shopify has no file version history. Uploading replaces the whole file.
3. **CSS blocks only.** Add a `/* [session-id] … */` tagged block to `azure-yacht.css` — never rewrite existing code.
4. **No publishing without explicit user approval.** The connector cannot publish; Stan does it in admin.
5. **No invented data.** No invented specs, testimonials, availability, inclusions, prices or rankings.
6. **Shipyards and designers are examples** unless confirmed as actual partners.
7. **No IYBA claim** (not verified).
8. **No Azure 39** (product dropped — never mention it).
9. **No mention of Udo Willersinn** on the website.
10. **Founding year 2020** — appears only in the founder letter on About, nowhere else.
11. **Photos:** confirm usage rights before using third-party images. Boat Trader's server blocks Shopify fetch; stage-upload manually.
12. **Listings under $200k** — skip for the main brokerage site (focus on larger yachts).

---

## 14. Email-to-Listing Automation

Forward a listing email to **stan+listings@azureyachtgroup.com** to automatically create a **DRAFT** product (automation `161eef32`). The user reviews and publishes each draft manually.

---

## 15. Navigation & Menu Structure

Main menu (`azure-main-menu-h`, live as of theme Q):

```
Charters
  ├── Charter Fleet (by type)
  │     ├── Day Charters (filter by location, type)
  │     └── Superyacht Charters
  └── Destinations
        ├── Puerto Rico
        ├── Exumas
        ├── Bimini
        └── Japan & South Korea

Buy (brokerage only — no Azure new construction here)
Sell
New Construction
  ├── Project Management
  ├── Designers (Franco Gnessi / DYD, Azure Design)
  ├── Naval Architects
  └── Shipyards
Azure Yacht Design
About
  ├── About Us
  └── News
Contact
```

---

## 16. How to Add a New Product

### New day charter
1. `create-product`: type `Charter Service`, vendor `Azure Charters`, template `charter`
2. Tags: `listing:charter`, `charter:day`, `brand:X`, location, `type:motor-yacht`, optionally `New`
3. Variants: Half Day (4h), Full Day (8h), + Extended/Sunset
4. SKU: `BOATCODE-DURATION-TIMESTAMP`
5. Auto-appears in **Day Yacht Charters** (smart collection)
6. Add photos; confirm inclusions with Stan

### New destination trip
1. `create-product`: type `Charter Destination`, vendor `Azure Yacht Group`, template `charter`
2. Tags: `listing:charter`, `charter:multi-day`, location tags, `New`
3. Variants: one per duration (3-Night, 4-Night, etc.) or single Default Title at $0
4. SKU: `CHARTER-LOCATION-DURATION`
5. Add to `charter-destinations` collection manually
6. Add to Charters → Destinations menu

### New brokerage listing
1. `create-product`: type `Yacht Listing`, vendor `Azure Yacht Group`
2. Tags: `listing:for-sale`, `brand:X`, `type:X`, location, optionally `New`
3. Single variant `Default Title` at asking price (or $0 + `listing.price_on_request = true`)
4. SKU: `BRANDCODE-YEAR`
5. Add to `yachts-for-sale` manually

### New construction / concept
1. `create-product`: type `New Construction`, vendor `Azure Design` or shipyard
2. Tags: `new construction`, `type:new-construction`, `brand:azure-yachts`, size range
3. Single variant at `$0.00`; set `listing.price_on_request = true`
4. Use template `product.new-construction`
5. Add to `new-construction` and designer-specific collection

---

## 17. Open Items & Gaps (as of Nov 8, 2026)

| Item | Status |
|---|---|
| **Mischief by Samara** — in Tilda CSV / destination-trips.csv but NOT in Shopify | TODO: `create-product` as `Charter Destination` |
| MUMBLE 58 (DYD) — DRAFT, pending length/price/guest count confirmation | USER decision pending |
| Charter "from" prices — 4 charters still inquiry-only with no indicative rate | USER to supply rates |
| WhatsApp button + reply-time promise | USER decision pending |
| Real testimonials / client stories | USER to supply |
| Missing photos: Sunseeker 75, Princess 65, Azimut 60, Azimut 65 'Elegance' | USER to supply |
| Japan/South Korea — $0 price, booking terms unconfirmed | USER: confirm RCYC resale terms |
| Inquiry/click tracking + Search Console test | TODO (Phase 7–8) |
| Orphan collections deletion (15 listed in Section 9) | USER approval needed |
| Store email stan@ → orders@ in Policies | USER admin-only action |
| Tartan 37 YouTube video → set Unlisted | USER YouTube Studio action |
| Instagram feed app | USER to install and connect @azureyachts |
| Yacht Habit listing renames | USER to resend the 7 renames |
