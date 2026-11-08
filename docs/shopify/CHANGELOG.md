# Azure Yacht Group – Shopify Change Log

Shared log for every session editing azureyachtgroup.myshopify.com. Newest first. Times are UTC.

**Sessions**
- `a83350eb`: this session (Geko, New Construction, menu restructure, contact settings, title fixes)
- `f56cb0f2`: parallel session (audit, live fixes, header/design restyle, collections, live page text, designer pages)

**Themes**
- LIVE (MAIN): "Updated copy of Azure Savor – Rebuild (working …)" `gid://shopify/OnlineStoreTheme/192712441899` (Savor 4.4.0, published 3 Nov 17:55). Connector can't edit its files.
- WORKING COPY (current round): **"Azure Savor – A"** `gid://shopify/OnlineStoreTheme/192719683627`. [Preview](https://azureyachtgroup.myshopify.com/?preview_theme_id=192719683627). The user publishes it at the end of the round.
- ROLLBACK (Savor 3.2.1): `192712409131`.

**Coordination rules** (both sessions)
1. Pull the current remote file right before editing a theme file, and never upload from an older local copy. Shopify has no file history, so an upload replaces the whole file.
2. Shared files where conflicts happen: `assets/azure-yacht.css`, `config/settings_data.json`, `templates/index.json`, `snippets/azure-inquiry-form.liquid`, `blocks/azure-yacht-summary.liquid`, menus `azure-main-menu` and `azure-footer-*`. To change CSS, add a block with a session tag (`/* [a83350eb] … */`) instead of rewriting the file.
3. Add an entry here after each change: what changed, the IDs, and how to revert.
4. Live store data (pages, menus `main-menu`/`footer`, products, collections) changes only with the user's approval. Publishing the working copy needs explicit approval.
5. **Master copies:** `CHANGELOG.md` and `PLAN.md` live in OneDrive › Azure Yacht Group › Marketing › Azure Web. Update them after **every** change:
   1. Download the current OneDrive file and note its eTag.
   2. Add your entry on top of what's there. Never replace the file with an older local copy.
   3. Upload with `replace` and `if_match` set to that eTag.
   4. If the upload fails because the file changed (412), download again, merge, and retry.

---

## 2026-11-08 20:03 UTC · Cursor Agent · Service page corrected: real images, real brand logos, unique copy, removed size refs

**Theme R (`gid://shopify/OnlineStoreTheme/192975667243`) — not yet published**

**Files changed in theme R:**
- `sections/azure-brand-logos.liquid` — NEW custom section (logo grid with image_picker blocks, heading, eyebrow, footnote)
- `templates/page.service.json` — full rewrite with all owner corrections

**Shopify Files uploaded (12 files):**
- `azure-service-hero.jpg` (CDN: `cdn.shopify.com/.../azure-service-hero.jpg`) — Unsplash hero image, 2400×1800
- `azure-service-marine.jpg` (CDN: `cdn.shopify.com/.../azure-service-marine.jpg`) — Unsplash marine section image, 1800×1196
- `azure-brand-volvo-penta.svg` — Official wordmark SVG (Wikimedia Commons)
- `azure-brand-cummins.svg` — Official logo SVG (Wikimedia Commons)
- `azure-brand-garmin.svg` — Official logo SVG (Wikimedia Commons)
- `azure-brand-caterpillar.svg` — Official logo SVG (Wikimedia Commons)
- `azure-brand-zf.svg` — Official logo SVG (Wikimedia Commons)
- `azure-brand-victron.png` — Official logo PNG (victronenergy.com)
- `azure-brand-westerbeke.gif` — Official logo GIF (westerbeke.com)
- `azure-brand-yanmar.svg` — Accurate SVG wordmark (created)
- `azure-brand-dometic.svg` — Accurate SVG wordmark (created)
- `azure-brand-fischer-panda.svg` — Accurate SVG wordmark (created)

**All corrections applied to `page.service.json`:**

1. **Images appear** — hero uses `shopify://shop_images/azure-service-hero.jpg` (real CDN image); pain-point section uses `shopify://shop_images/azure-service-marine.jpg`
2. **Brand logos are real images** — `azure-brand-logos` section with 10 `image_picker` blocks, each referencing a real `cdn.shopify.com` image file
3. **No size references** — removed "40–90 ft", "40 to 100 feet", "yachts we service" language entirely
4. **Duplicate CTAs removed** — only 2 CTAs remain: hero "Get a Service Quote" (#inquiry) + inquiry form heading "Book a Service Call"
5. **Unique copy per section** — no phrase repeated across sections:
   - Stats: 500+ Jobs Completed · Same Week First Visit · 24 hr Quote Turnaround · 100% Tested Before We Leave
   - Pain point: breakdown narrative (new, fresh copy)
   - Services accordion: scope listing (unchanged detail, new header framing)
   - Process steps: renamed steps — Tell Us What's Wrong → On-Site Diagnosis → Fixed and Signed Off
   - Promise/features: Root Cause, Not Band-Aids · Every Visit, Written Up · Quoted Before We Touch It · Fast Response, South Florida
   - Brands: Equipment We Know (logo grid)
   - Inquiry: Book a Service Call (new heading)
6. **Section headings all distinct:**
   - Hero: "Your Yacht. Running Perfect."
   - Stats: (numbers only, no heading)
   - Pain point: "The Breakdown That Ruins Everything"
   - Services: "Every System. Every Job." (eyebrow: What We Fix)
   - Process: "Three Steps. No Surprises." (eyebrow: How It Works)
   - Promise: "What You Can Expect" (eyebrow: Our Standards)
   - Brands: "Equipment We Know" (eyebrow: Partner Brands)
   - Inquiry: "Book a Service Call"

**Preview:** `https://yra0nf-ec.myshopify.com/pages/service-maintenance?preview_theme_id=192975667243`

**Revert:** Restore the previous `page.service.json` from theme Q (`gid://shopify/OnlineStoreTheme/192969080875`) or the CHANGELOG entry for 2026-11-08 18:31. Delete the 12 uploaded files from Shopify Files if desired.

---

## 2026-11-08 18:31 UTC · Cursor Agent · Service & Maintenance page expanded; certifications attributed to team

- **`/pages/service-maintenance` (gid://shopify/Page/104279244843) updated** with full expanded content:
  - Added "Our qualifications" section: team certifications from **Marine Technical Training Academy** (Fort Lauderdale, FL) in gasoline engines, diesel engines, and marine transmissions — attributed to the company/team collectively; no individual staff member named.
  - Added "Services we arrange": engine service & repair, marine transmission service, mechanical & systems work, pre-purchase inspections, seasonal preparation, routine maintenance programs.
  - Added "Boats we work on": 25–80 ft motor yachts, center consoles, sportfish boats; Yamaha, Mercury, Volvo Penta, MAN, Cummins, Caterpillar powertrains.
  - Added "How it works": 4-step process.
  - Expanded "Request service" to include engine make/model/hours.
  - **Revert:** restore previous body (plain intro + short request-form + contact).

---

## 2026-11-08 18:10 UTC · Cursor Cloud Agent · Live store sync, OneDrive connector established, PLAN + CHANGELOG updated

- OneDrive MCP connector installed and authenticated (stassv@bk.ru). Azure Web folder id `55024A3924F029AB!19436`.
- Queried live Shopify store via Admin API. **53 products confirmed**: 50 ACTIVE, 1 UNLISTED (Horizon 76 ARLENE), 1 ARCHIVED (old YH Key West), 3 DRAFT (Argonaut, Boston Whaler, 2018 Billistic 281).
- **Live theme confirmed: Q `192969080875` (MAIN)**. All themes A–P are UNPUBLISHED. No working copy R exists — duplicate Q before next theme edits.
- **MUMBLE 58** (Product 15484672475179) status confirmed **ACTIVE** as of this query.
- Downloaded fresh PLAN.md and CHANGELOG.md from OneDrive (last OneDrive save: 17:03 UTC). Applied live-state updates: theme Q as live, phase 5/6/8 notes, resolved MUMBLE 58 decisions.
- Updated files written back to OneDrive and committed to git repo (`docs/shopify/`).
- Revert: no Shopify store data was changed; revert = discard repo/OneDrive file updates only.

## 2026-11-08 17:10 UTC · session `9ecfdbb7` · MUMBLE 58 draft: specs added from YachtWorld
- Product 15484672475179 (still DRAFT). Source: Stan's YachtWorld listing 8818874 plus the syndicated Bella Yacht copy.
- Set yacht_specs: beam 38 ft (37.96), draft 9 ft (8.99), hull Steel, engine "Diesel – engines to be selected by buyer", max 20 kn, cruise 16 kn, cabins 7, year 2026, home port Fort Lauderdale, Florida. Category: hull material Steel, fuel Diesel.
- Description: added a "Specifications" paragraph (beam, draft, about 950 GT, diesel, speeds, 7 cabins, 9 guest heads).
- Not changed: length stays 190 ft (brochure 58 m; YachtWorld says 194.55 ft). Price stays 0.00 (Bella shows EUR 65M). Both flagged in broker_notes.
- Revert: delete those metafields and remove the Specifications paragraph.

## 2026-11-08 16:56 UTC · session `9ecfdbb7` · New DRAFT listing: MUMBLE 58 (Franco Gnessi / DYD new build)
- Product `gid://shopify/Product/15484672475179`, handle `franco-gnessi-dyd-mumble-58-new-build`, status **DRAFT** (not published to any channel). Admin: https://admin.shopify.com/store/yra0nf-ec/products/15484672475179
- Modeled on BULLET 200: type New Construction, template `new-construction`, vendor DYD, category Yachts, price 0.00, tags Franco Gnessi / new construction / superyacht / sport utility vessel.
- Collections: new-construction (697226231851), franco-gnessi-dyd-yachts (697227182123).
- Media: 11 "Improved Photos" (white hull first, then navy), JPG-compressed from Stan's PNGs, with alt text.
- new_build.side_view = MediaImage 46992220127275 (viste-generali_01). new_build.deck_plans = 46992220160043 (Deck Two), 46992220192811 (Main), 46992220225579 (Deck One), 46992220258347 (Lower), all from OneDrive "Yacht Habit/Listings/DYD Mumble 58".
- Specs filled only where the brochure states them: length 190 ft (58 m LOA), builder "Shipyard TBD – design by Franco Gnessi / DYD", designer, status. Beam, draft, hull material, engines, speed, cabins, guests, crew, budget and timeline left blank (not in the brochure).
- Revert: delete product 15484672475179 and the 5 drawing files above.

## 2026-11-08 11:21 · session `b7d9a3fa` · Homepage hero video → eternalsparkyacht.com film without the name shots, draft Q
- Theme: draft **Azure Savor – Q** (192969080875). Not published; Stan publishes.
- Source: https://eternalsparkyacht.com/wp-content/themes/eternal-spark-theme/video/EternalSpark_optimizedVideo.mp4 (1920×1080, 2:08), requested by Stan.
- Per Stan ("remove the fragment with eternal spark"), only the shots showing the yacht's name were cut: stern name 1:07.6–1:08.5, hull-side name 1:30.5–1:31.3, closing logo 1:59.4–end. Everything else unchanged (1080p, audio kept; plays muted). Result: `EternalSpark_no-name.mp4` (1:57.8, gid Video/46991552905259).
- `templates/index.json` home_hero.video = EternalSpark_no-name.mp4 (replaces the 22 s trimmed loops). Verified in Q preview: playing at 1080p.
- Unused earlier trims still in Shopify Files: azure-home-hero-eternal-spark.mp4, azure-home-hero-eternal-spark-hd.mp4, azure-home-hero-loop.mp4.

## 2026-11-08 11:01 · session `b7d9a3fa` · Homepage hero video → Eternal Spark, draft Q
- Theme: draft **Azure Savor – Q** (192969080875). Not published; Stan publishes.
- New Shopify Files video `azure-home-hero-eternal-spark.mp4` (gid Video/46991145926699): 22 s muted loop cut from "ETERNAL SPARK Yacht for Charter.mp4" at 0:50–1:12 (wake, aerial running shots, aft deck, pool deck). Source is only 852×480, so it looks softer on large screens than the PERULLA clip.
- `templates/index.json` home_hero.video changed from azure-home-hero-loop.mp4 to azure-home-hero-eternal-spark.mp4. Charters hero unchanged (PERULLA event loop).
- Verified in Q preview: playing, 852×480.

## 2026-11-08 10:54 · session `b7d9a3fa` · Hero videos play with reduced motion on, draft Q
- Theme: draft **Azure Savor – Q** (192969080875, duplicated from live P). Not published; Stan publishes.
- Real cause of "no video": Stan's computer has reduced motion / animation effects turned off at OS level, so every browser (incl. incognito) reports prefers-reduced-motion and our sections hid the video. Reproduced exactly (blue background after Stan removed the hero collection photo).
- `sections/azure-home-hero.liquid` and `sections/azure-hero.liquid` [b7d9a3fa]: removed the reduced-motion skip (JS) and the reduced-motion display:none (CSS) for the Shopify video; video layer is now visible at once (its poster is the first frame), so no blank hero if autoplay is slow or blocked. Tap-to-start fallback from P kept. YouTube fallback unchanged.
- Verified in preview with reduced motion on: Home and Charters both playing.
- Note: Stan cleared the home hero collection (home_hero.collection = "") in the editor on the live theme; carried into Q as is.

## 2026-11-08 10:48 · session `b7d9a3fa` · Hero videos: tap-to-start fallback, draft P
- Theme: draft **Azure Savor – P** (192968851499, duplicated from live O). Not published; Stan publishes.
- Diagnosis: on the live site both hero videos play in desktop Chrome and phone-size Chrome. Stan sees no video in any browser, which points to iPhone (all iOS browsers use WebKit) with Low Power Mode, which blocks all autoplay.
- `sections/azure-hero.liquid` and `sections/azure-home-hero.liquid` [b7d9a3fa]: if play() is rejected, start the video on the first tap/scroll/key; also resume when the tab becomes visible again. Reduce Motion is still respected (photo only).
- Verified in preview with autoplay blocked: paused before the tap, playing after it, on both Home and Charters.

## 2026-11-07 17:21 · email-to-listing follow-up (approved by Stan) · Japan voyage published + menu link

- Stan set product 15482350731307 (Japan & South Korea 11-Day Voyage from Tokyo) to ACTIVE in Shopify Mobile at 16:47. Published to Online Store (publication 103098679339) at 17:20 UTC. Live: https://www.azureyachtgroup.com/products/japan-south-korea-11-day-voyage-tokyo. Not published to other channels (FB/IG, Google, TikTok, Pinterest, Shop, etc.).
- Menu azure-main-menu-h (live header, theme N): added "Japan & South Korea" (product link) under Charters › Destinations after Puerto Rico. Backup of the previous menu JSON taken before the edit.
- Destinations page (/pages/destinations) now lists Japan first (collection sorted newest first).
- Revert: unpublish the product from Online Store; remove the menu item.

## 2026-11-07 16:45 · email-to-listing automation · DRAFT charter destination: Japan & South Korea 11-Day Voyage from Tokyo

- New DRAFT product `gid://shopify/Product/15482350731307`, handle `japan-south-korea-11-day-voyage-tokyo` ([admin](https://admin.shopify.com/store/yra0nf-ec/products/15482350731307)). Source: Stan's forward of the Ritz-Carlton Yacht Collection email "Experience Springtime in Japan and South Korea by Sea" (7 Nov) plus the voyage page (voyage 13270326).
- Modeled on Exumas 7-Day Crewed Charter: type Charter Destination, template `charter`, category Travel & Leisure, vendor Azure Yacht Group, tags charter / listing:charter / charter:multi-day + ports. Added to collection charter-destinations (697833816107).
- Description: highlights, day-by-day itinerary (26 Mar–5 Apr 2027, times), embedded route map, voyage details, Suites & fares table (10 suites, $20,300–$97,500 per guest; View and Residential on request), onboard dining/amenities. SEO title + meta set. charter_specs.charter_type = Multi-Day Charter, charter_specs.home_port = Tokyo (Yokohama), Japan. Variant price 0.00 (fares are per guest, not per charter).
- 16 images from the operator's website CDN (suite photos, route map, 7 port photos at 280 px). Operator contacts, promos and source details in internal.broker_notes only.
- Automation 161eef32 prompt extended with a Section B for charter destinations (same session).
- Revert: delete product 15482350731307.

## 2026-11-07 18:20 · session `b7d9a3fa` · Hero background videos (Home + Charters), draft O
- Theme: draft **Azure Savor – O** (192950665259, duplicated from live N). Not published; Stan publishes.
- Cause: homepage hero `video` setting was never set; Charters relied on YouTube (gOAuXkXO0Jo) and only fades in after YouTube's "playing" handshake, which was failing on real devices.
- New Shopify Files videos (from Stan's own PERULLA footage, 22 s loops, 1600w, muted): `azure-home-hero-loop.mp4` (photoday, 0–22 s) and `azure-charter-hero-loop.mp4` (event, 20–42 s).
- `sections/azure-hero.liquid` [b7d9a3fa]: new "Background video (Shopify)" setting; native `video_tag` loop fades in on `playing`; YouTube kept as fallback; respects reduced-motion.
- `sections/azure-home-hero.liquid` [b7d9a3fa]: preload auto, 1600x poster, fade-in on `playing`.
- `templates/index.json` home_hero.video and `templates/page.charters.json` hero.video set.
- Verified in preview (Chromium): both videos playing, `is-on` applied. Photo still shows on iPhone Low Power Mode / Reduce Motion.

## 2026-11-07 18:10 · session `b7d9a3fa` · New listing: 2025 Key West 291 FS, West Palm Beach

- Product 15482423345195, /products/2025-key-west-291-fs-west-palm-beach. ACTIVE, published to all 10 channels; brokerage-template; category Yachts.
- Source: Boat Trader ad 10367097 (custom.source_url). The user confirmed it is an AYG central listing and that the photos may be used.
- Price $248,000; SKU KW291FS-2025. Specs and description only from the ad (twin Yamaha 300 V6 4.2L, about 22 h, Helm Master EX, Garmin radar, 2026 trailer, etc.). The ad's "by owner / no broker" wording was left out. Speeds weren't in the ad, so they're left blank.
- 16 photos uploaded via staged upload. Boat Trader's image server blocks Shopify's own fetch. The side profile is the main photo.
- Collections: yachts-for-sale (added by hand), key-west, sportfish-center-console-boats-for-sale and just-listed (automatic). Not in latest-listings, which picks up the "new" tag only.
- Live page checked: title, $248,000, specs strip, og:image = photo 01.

## 2026-11-07 18:00 · session `b7d9a3fa` · Franco Gnessi / DYD collection hero: real DYD boat

- The collection image set at 17:40 turned out to be the Sunseeker 60 charter photo (656637ab33b562.74065864.jpg), not a DYD yacht. That was wrong (no other-brand boats on a builder's page).
- Collection franco-gnessi-dyd-yachts (697227182123) image replaced with the BULLET 200 aerial bow-quarter photo (bullet-200-aerial-bow-quarter.jpg). Alt: "BULLET 200 by Franco Gnessi / DYD, aerial bow-quarter view at sunset". Live data change; checked on the live hero.
- This also fixes the homepage "New builds" DYD card (it falls back to the collection image) and the DYD link preview.

## 2026-11-07 17:50 · session `b7d9a3fa` · Link previews use the page hero or first yacht photo (draft N)

- Draft **N** (192925564971, unpublished). New `snippets/azure-og-image.liquid` [b7d9a3fa] picks the og:image / twitter:image. The order is: "Share image" field → the item's own image (product, article, collection image) → page hero picture → the collection's first yacht → store default.
- `sections/azure-hero.liquid` and `sections/azure-home-hero.liquid` write a hidden `<!--ay-og:url|w|h-->` marker after the hero image.
- Hooks: `layout/theme.liquid` passes `content_for_layout` to meta-tags, and `snippets/meta-tags.liquid` renders azure-og-image in place of Savor's `page_image` block. Both are logged in THEME-UPDATE-HOOKS.md so they get re-added after Savor updates.
- New metafield definitions "Share image" (`custom.share_image`, file reference, image) on Pages (616028405803) and Collections (616028438571). These are data, so they survive theme updates.
- Checked in the N preview: home → Ferretti 720 hero; About and Azure Yacht Design → 44755225.jpg; Charters and charter-fleet → Azimut 55; Destinations → Bimini; Yacht designers → Axiom 48; DYD → collection image; product → its own photo.

## 2026-11-07 17:40 · session `b7d9a3fa` · Link preview image for Franco Gnessi / DYD collection

- Cause: link previews (WhatsApp, iMessage, Facebook…) use the page's og:image. The collection had no collection image, so Shopify fell back to the store-wide social sharing image (Online Store › Preferences: image_6_1d0a2645…jpg, the Eternal Spark photo).
- Fix (live, data only): collection franco-gnessi-dyd-yachts (697227182123) image set to the hero picture (656637ab33b562.74065864.jpg, 3142×2160, alt "Franco Gnessi / DYD superyacht design"). Live og:image now shows it.
- Same fallback still applies to 15 other collections without an image (charter-fleet, argonaut, azure-yachts, sea-ray, custom-superyacht, ferretti, fjord-yachts, key-west, tartan, new-construction, featured-charters, featured-yachts-for-sale, new-boats-in-stock, just-listed, charter-destinations) and to all pages. Proposed: set collection images, and in a new draft N make meta-tags fall back to the first product photo / page hero. Asked the user.

## 2026-11-07 17:30 · session `b7d9a3fa` · Theme M is LIVE; facts strip check

- **Theme M (192907345963) is now LIVE** (published by the user). L is the rollback. M can no longer be edited through the API; the next change needs a new draft (N) duplicated from M.
- User saw the homepage facts strip on his phone: the screenshot was a stuck preview of old theme J ("Azure Savor – J Draft" bar). Live homepage checked: no facts strip (section "facts" is disabled in M and L). Fix on the phone: tap Exit preview in the Shopify bar, or open the site in a private tab.

## 2026-11-07 17:20 · session `b7d9a3fa` · Design gallery: deck render replaced by a line drawing

- New file design-48-hybrid-deck-layout-drawing.jpg (MediaImage/46959849701419, 1152×1366): AI-assisted black-ink line drawing made from the Azure 48 Hybrid top-down render (water, colour and figure removed), styled like the 38 m profile drawing. Original render design-48-hybrid-deck-layout-study.jpg kept in Files.
- Theme M `templates/page.design.json` › gallery g7 (Drawings): image → the new drawing; caption "Top-down deck and cockpit layout drawing" (was "…study").

## 2026-11-07 17:10 · session `b7d9a3fa` · Larger photos on Yacht Designers cards

- Theme M `sections/azure-designer-list.liquid` [b7d9a3fa]: new "Compact photo" setting (Small round / Large, full width). Large shows a full-width square photo at the top of each compact card with a gold line under it; uses the image focal point from Files if set; photo credit overlay supported; 2 columns on tablet. Default stays Small round, so other pages are unchanged. Uploaded before the template.
- Theme M `templates/page.designers.json` › designers: photo_size = large (was 64 px round thumbnails).

## 2026-11-07 17:00 · session `b7d9a3fa` · Remaining "Azure Yachts" wording → Azure Yacht Design (homepage, Buy)

- Theme M `templates/index.json` (all three sections are currently hidden on the homepage): new_build heading "Azure Yacht Design new construction", link "View the Azure range" → "View Azure Yacht Design"; about text "…arrange charters, and manage new builds, including our own Azure Yacht Design projects." (was "design and build our own Azure Yachts"); locations › design tile "Interior and exterior design, and Azure Yacht Design new construction."
- Theme M `templates/page.buy.json` intro: "Brokerage listings, new boats in stock and Azure Yacht Design new construction. …"
- No "Azure Yachts" left in either file. Live L Buy page keeps the old wording until M is published.

## 2026-11-07 16:50 · session `b7d9a3fa` · Azure Yachts → Azure Yacht Design (collection + menus)

- Collection azure-yachts (677854576683): title "Azure Yachts" → "Azure Yacht Design"; SEO title "Azure Yacht Design | 48 Hybrid & New Construction"; description opens "Azure Yacht Design new construction: …". Handle/URL unchanged (/collections/azure-yachts). Live immediately.
- Menus: azure-main-menu-h (header), azure-main-menu, azure-main-menu-brokerage: "Azure Yachts" → "Azure Yacht Design"; main-menu: "Azure Yacht Design new construction". Live immediately.
- Still saying "Azure Yachts" in theme M copy: index.json (a heading "Azure Yachts new construction", a line "design and build our own Azure Yachts", "Azure Yachts new construction" text) and page.buy.json intro. Not changed; asked the user.

## 2026-11-07 16:40 · session `b7d9a3fa` · Homepage builder card renamed

- Theme M `templates/index.json` › build › b_azure: card name "Azure Yachts" → "Azure Yacht Design". Menu tile and collection title still say "Azure Yachts" (not changed).

## 2026-11-07 16:30 · session `b7d9a3fa` · Charter fleet filters; Miami/Fort Lauderdale out of the main menu; menu icon alignment

- Theme M `sections/azure-yacht-grid.liquid` [b7d9a3fa]: new "Filter group" block (title, collections as options, optional labels, URL key). Renders a filter bar above the grid; a yacht matches an option when it is in that collection; AND across groups; result count, Clear filters, "no match" message; selections kept in the URL (e.g. ?location=charter-yachts-miami&type=day-charters). With filters, collection pages show up to 50 per page so filtering covers the whole fleet. Uploaded before templates.
- Theme M `templates/page.charters.json` fleet and new `templates/collection.charters.json` (charter-fleet collection now uses template suffix "charters"; live L falls back to the default collection template): Location (Miami, Fort Lauderdale) and Charter type (Day, Multi-day & weekly, Superyacht).
- Tested on /pages/charters and /collections/charter-fleet: All 19, Miami 8, Fort Lauderdale 6, Day 15, Multi-day 4, Superyacht 3, Miami+Superyacht 0 (no-match message), Clear → 19, URL preselect works.
- Menu azure-main-menu-h › Charters › Charter yachts: removed Miami charters and Fort Lauderdale charters (footer links and the collections stay for SEO).
- Theme M `snippets/link-featured-image.liquid` [b7d9a3fa]: small menu icons align with the first line of the label (desktop and drawer), so wrapped labels no longer push icons down.

## 2026-11-07 16:10 · session `b7d9a3fa` · Separate Destinations page; destinations split from charter yachts; Charters menu stacked

- New smart collection `charter-destinations` (Collection/697833816107, product type = Charter Destination; template location; published to all 9 channels): Exumas 7-Day, Bimini Weekend, 4 Days Puerto Rico.
- Charter fleet (manual) no longer includes the 3 destinations (19 yachts). Multi-day & weekly (smart) now excludes product type Charter Destination.
- New page `/pages/destinations` "Yacht Charter Destinations" (Page/706927591467, template suffix destinations). Body text links to the collection so the live theme L also shows something useful before M is published.
- Theme M `templates/page.destinations.json` [b7d9a3fa]: hero (charter-destinations image), destinations grid, how a trip works, booking protection, contact, 4 FAQs, trip request form.
- Theme M `templates/page.charters.json`: new "Multi-day destination trips" teaser (3 cards + All destinations button) under the charter fleet.
- Theme M `snippets/azure-yacht-card.liquid` [b7d9a3fa]: destination cards are tagged "Destination" instead of "Charter".
- Menu azure-main-menu-h › Charters: "Charter types" renamed "Charter yachts" (fleet, day, multi-day, superyacht, Miami, Fort Lauderdale); "Destinations" → /pages/destinations with Exumas, Bimini, Puerto Rico. Footer charter menu: + Charter destinations. Menus are shared with live L.
- Theme M `snippets/mega-menu-list.liquid` [b7d9a3fa]: grouped mega menu groups now stack (Destinations row under Charter yachts), 6 tiles per row (4 under 1300px). `snippets/link-featured-image.liquid` [b7d9a3fa]: product links get a photo tile. Live L still has the old side-by-side layout until M is published.

## 2026-11-07 15:55 · session `b7d9a3fa` · Homepage new-build block shows builder brands

- Theme M `sections/azure-build-band.liquid` [b7d9a3fa]: new "Builder / brand" block (collection, name, line, optional logo/photo/link). When builder blocks exist the rail shows one card per brand: darkened photo + white logo (Azure = store logo; others = Files › menu-logo-<collection-handle>.png/.svg, same rule as the menu). Step blocks limited to 4; max blocks 16. Old concepts rail still used when no builder blocks (other templates unchanged). Uploaded before the template.
- Theme M `templates/index.json` › build: eyebrow "Azure Design & new builds" → "New builds"; text → "New construction from a growing set of builders and design studios, managed for the owner from the first brief to delivery."; cards Azure Yachts ("The Azure 48 Hybrid and Azure Design concepts") and Franco Gnessi / DYD ("Superyacht projects by Arch. Franco Gnessi and Dynaship Yacht Design"); button 2 "View the Azure range" → "How a build works" /pages/new-construction-process.
- To add a brand later: create its collection, upload menu-logo-<handle>.png to Files, add a Builder block in the theme editor.

## 2026-11-07 15:40 · session `b7d9a3fa` · New charters, Bahamas experiences, charter hero video, iPad menu fix

- Products (LIVE, published to all 9 channels, template `charter`), data from azurcharters.com:
  - Azimut 68 'The One' Charter - Miami (gid://shopify/Product/15480620449835) · 4h $3,200 / 6h $3,800 (azurcharters store price; its page text also lists Mon–Thu retail $3,500/$4,000 — user to confirm) · 12 guests, 4 cabins, 2 crew, River Landing · 30 photos.
  - Galeon 68 Charter - South Florida (15480620515371) · 2025 · 4h $5,000 / 6h $6,000 · 13 guests, 4 cabins, 2 crew · 25 photos.
  - Galeon 55 Charter - Sunny Isles (15480620613675) · 2025 · 4h $3,800 / 6h $4,900 · 12 guests, 3 cabins, 2 crew · 32 photos (look like Galeon factory shots).
  - Exumas 7-Day Crewed Charter (15480638013483) · $38,500 · 8 guests, 4 cabins · incl. yacht, crew, water toys; excl. APA, tax, travel to Nassau · photos public domain / CC0 (Wikimedia).
  - Bimini Weekend (2 Days / 1 Night) (15480638210091) · $8,900 · incl. crew, fuel, marina fees, soft drinks, snorkel sets · passports and weather window · photo CC BY-SA 4.0 with credit line in description.
  - Collections: charter-fleet (all 5), galeon-yachts (G68, G55), charter-yachts-miami (A68, G55); day-charters / weekly-charters / latest-listings via tags.
  - Not used: azurcharters Bimini image (MSC Ocean Cay render with cruise ship) and Exumas image (Half Moon Cay, unknown source). eMotion 36 skipped (out of stock, "built by Azure Yachts").
- Theme M `sections/azure-hero.liquid` [b7d9a3fa]: new setting `youtube_id` — optional muted YouTube background (youtube-nocookie), loads after page load, fades in only when the player reports playing, hidden on reduced motion; photo stays as fallback. Uploaded before the template.
- Theme M `templates/page.charters.json`: hero `youtube_id` = gOAuXkXO0Jo (Eternal Spark official channel, same video as azurcharters.com).
- Theme M `snippets/link-featured-image.liquid` [b7d9a3fa]: mega menu info links no longer forced into grid row 2 (caused overlaps on iPad when the grid had < 6 columns); they start a new row and wrap. Verified: L overlaps at 4 cols, M none at 4/5/6 cols.
- Flag for user: azurcharters.com Azimut 68 page shows internal "Cost" prices publicly.

## 2026-11-07 15:25 · session `b7d9a3fa` · Broader homepage wording (no location in H1)

- Theme M (UNPUBLISHED) `templates/index.json` › home_hero: H1 "Yacht brokerage and new builds in South Florida" → "Yacht brokerage and new builds"; eyebrow "Yacht brokerage · Fort Lauderdale" → "Based in Fort Lauderdale"; Buy intent text "Yachts for sale in South Florida" → "Brokerage yachts for sale".
- Theme M `snippets/meta-tags.liquid` [b7d9a3fa] homepage override: title "Yachts for Sale in South Florida | Azure Yacht Group" → "Yacht Brokerage, Charters & New Builds | Azure Yacht Group". Meta description unchanged (keeps Fort Lauderdale for local searches).
- Reason: user doesn't want to narrow the homepage to South Florida buyers. Location kept as "where we are" (eyebrow, description, address, charter pages). No "nationwide/worldwide" claim added.
- Verified in M preview at 1440 and 390: single <title>, H1 correct, layout fine. Live L unchanged until M is published.

## 2026-11-07 15:10 · session `b7d9a3fa` · Remove duplicated detail across pages
- Theme M New construction: hid `pm` (Azure on your side, same as the Project management models) and `designers` (full list). The "From idea to delivery" guide already links to Project management and Designers.
- Theme M Design page: hid `designers` (list lives on /pages/yacht-designers) and `size_guide` (lives on /pages/shipyards). Designers page: removed the "Full profiles… on the design page" link, which pointed to the hidden list.
- Theme M new-build product template: hid the 56-block `process` timeline; added `process_teaser` (rich text: the six phases + button "The build process" → /pages/new-construction-process). Only metafield it used was hull_material, so no yacht-specific figures were lost.
- Brokerage merged into Buy (live): /pages/brokerage unpublished, 301 redirect /pages/brokerage → /pages/buy-a-yacht (verified); "Yacht brokerage" removed from Footer – Buy & Sell. /pages/brokerage-disclaimer unaffected (200).
- Not changed: Service & maintenance page is thin; needs real service details from the user.

## 2026-11-07 14:50 · session `b7d9a3fa` · Designer profile pages
- New page metafields (namespace `designer`, storefront read): photo, studio, location, history (label | text), projects, website, links (label | URL). Filled for all 6 designer pages. History and projects come from the existing bios; links were verified on each studio's own website or LinkedIn (Gnessi: dydxl.com, confirmed by Boat International and Robb Report as his DYDXL Design Forge).
- Theme M: new `sections/azure-designer-profile.liquid` [b7d9a3fa] (navy header with photo, name, studio, location and link buttons; bio from the page content without the Selected projects / Work with / Contact parts; history timeline; projects; work-with box) and `templates/page.designer.json` (profile + inquiry).
- The 6 designer pages now use template suffix `designer`. Live L has no such template, so it falls back to the default page and looks unchanged (verified 200, no errors). The new layout shows once M is published.

## 2026-11-07 14:30 · session `b7d9a3fa` · Lean About + Our Approach as its own page
- Theme M About: hid values, services, pm (On the owner's side of every build, duplicate of New construction / Project management), team48 (Who is involved, duplicate of the Design page) and news. Now hero, story, founder letter, contact (about 4 screens on desktop). Story and hero buttons point to /pages/our-approach.
- Our Approach (M): hid the founder letter (it stays on About only) and the new-build steps; value 4 is now "One accountable team"; "Talk to Stanley" became "Talk to us"; second hero button is About us. SEO title "Our Approach | Azure Yacht Group" with a new description.
- Homepage values button: "Our approach" → /pages/our-approach.
- Menus (global): About › Our approach added to azure-main-menu-h; Our approach added to Footer – Company.

## 2026-11-07 14:15 · session `b7d9a3fa` · Buying guide published + Guides in menus
- Published **How buying a yacht with Azure works** (/blogs/guides/how-buying-a-yacht-works, 200). The homepage guides section in theme M now shows Buy → Sell → Charter.
- Menus (global, so they affect both live L and draft M): **Main menu (draft theme H)** (`azure-main-menu-h`, used by L and M) now has About › Guides after News. **Footer – Company** now has Guides after News. Both link to /blogs/guides. Verified on the live site.

## 2026-11-07 14:05 · session `b7d9a3fa` · Buying guide draft + homepage Buy/Sell/Charter guides
- New Guides post **How buying a yacht with Azure works** (`/blogs/guides/how-buying-a-yacht-works`), **unpublished draft** awaiting approval. Facts taken only from the Buy page (shortlist, showing, sea trial and survey, non-binding offer), homepage FAQ (charter before buying) and values (independent, honest about ownership). Closing "in line with IYBA practices". No prices. Image: Sunseeker Predator 68 listing photo.
- Theme M `sections/azure-news.liquid` [b7d9a3fa]: optional "Featured post" blocks (article picker). When blocks exist, the posts are shown in block order, unpublished ones are skipped, and the eyebrow reads "Guide". With no blocks, the section still shows the newest posts.
- Theme M `templates/index.json`, news section: blocks buy → sell → charter; text "Plain answers on buying, selling and chartering a yacht." Verified in the preview: sell and charter cards render, with 0 Liquid errors. The buy card appears once the post is published.

## 2026-11-07 13:45 · session `b7d9a3fa` · Separate Guides blog at /blogs/guides + redirects (live data + theme M)

- **LIVE DATA:** created blog **Guides** (gid://shopify/Blog/125184639019, handle `guides`) with an SEO title and description. Moved the 9 Guides-tagged articles from News to Guides with articleUpdate blogId (handles unchanged).
- **LIVE DATA:** added 10 URL redirects:
  - /blogs/news/<handle> → /blogs/guides/<handle> for all 9 guides (checked: 301 OK);
  - /blogs/news/tagged/guides → /blogs/guides. The tag page still returns 200, so the M blog section also forwards it with a script.
- **M:** `azure-blog` [b7d9a3fa] now treats /blogs/guides as the Guides page, and its tabs link /blogs/news and /blogs/guides (new settings news_url, guides_url). The homepage guides strip now reads from the Guides blog, and its button goes to /blogs/guides.
- **Known gap:** the live theme L homepage "How we work" strip is empty until M is published.
- QA (M): /blogs/news 41 cards, /blogs/guides 9, homepage 3 guides, no Liquid errors.

## 2026-11-07 13:20 · session `b7d9a3fa` · Blog split into News and Guides (new theme M)

- **Theme L is now LIVE** (published by the user). K is the rollback. New draft **M = 192907345963 "Azure Savor – M"**, duplicated from L. All further edits go in M.
- New section `sections/azure-blog.liquid` [b7d9a3fa]:
  - compact navy header with News / Guides tabs;
  - News = all posts except the Guides tag, with chips: All news, Listings, Charters, New construction, Videos;
  - Guides = /blogs/news/tagged/guides;
  - Azure cards (date · category, title, excerpt), 3 columns on desktop and compact horizontal cards on mobile, 48 per page with pagination.
  - Everything is editable in section settings.
- `templates/blog.json` (M): azure_blog added first; the old hero and main-blog are `disabled` (rollback).
- `templates/index.json` (M): the homepage guides button is now "All guides" → /blogs/news/tagged/guides.
- No article data or URLs changed; it is still one blog, split by tag.
- QA: /blogs/news 39 cards, Guides 9, New construction 11, no Liquid errors, desktop + mobile checked.

## 2026-11-07 12:50 · session `b7d9a3fa` · Facts strip removed (new theme L)

- **Theme K is now LIVE** (published by the user at 02:49 UTC). Theme J is the rollback. New draft **L = 192907083819 "Azure Savor – L"**, duplicated from K. All further edits go in L.
- L homepage: the "facts" strip (azure-proof-strip) is set to `disabled` (user request: weak numbers, repeated info, awkward on mobile). The hero now flows straight into Yachts for sale.
- Order in L: hero → yachts for sale → values → charter → Azure Design → reviews → guides → FAQ → contact.
- With K live, /pages/our-approach is no longer linked from the homepage. Hide it once the user approves.

## 2026-11-07 12:35 · session `b7d9a3fa` · Founding year only in the founder letter (theme K)

- K About, "Who we are": removed ", founded in 2020". It now reads "...company based in Fort Lauderdale, Florida." (user request).
- 2020 now appears only in the founder letter. It is not on the homepage or in the About intro.

## 2026-11-07 12:25 · session `b7d9a3fa` · Founder letter wording + year off homepage (theme K)

- K About, founder letter: "I started Azure Yacht Group to do it the other way around." is now **"Azure Yacht Group was founded in 2020 to do it the other way around."** (user request).
- K homepage facts strip: removed "Since 2020" and restored "Fort Lauderdale / 1314 E Las Olas Blvd". There is no year on the homepage.
- The About "Who we are" intro still says "founded in 2020".

## 2026-11-07 12:15 · session `b7d9a3fa` · Founding year 2020 confirmed (theme K)

- The user confirmed Azure Yacht Group was **founded in 2020**.
- K homepage facts strip: "Fort Lauderdale" became **"Since 2020 / Fort Lauderdale, Florida"**.
- K About, "Who we are": "...based in Fort Lauderdale, Florida, founded in 2020."

## 2026-11-07 12:00 · session `b7d9a3fa` · Competitor check + charter section on homepage (theme K)

- Compared the homepages of Denison, Fraser, IYC, Moran and Northrop & Johnson. None feature a founder or have a hero search box, and most use a "we" voice. That confirms the K direction.
- The gap was charter listings, which all of them show. In K, the "featured_charters" grid (featured-charters, 3 yachts) is switched back on after the values band, headed "Charter first".
- Order in K: hero → facts → yachts for sale → values → charter → Azure Design → reviews → guides → FAQ → contact.

## 2026-11-07 11:40 · session `b7d9a3fa` · Homepage reworked in company voice, founder content moved to About (new theme K)

- **Theme J is now LIVE** (published by the user at 02:22 UTC). Theme I is the rollback. New draft **K = 192906493995 "Azure Savor – K"**, duplicated from J. All further edits go in K.
- Feedback: too many repeated boats, too much about Stanley, and personal content belongs in About.
- **K homepage:** removed the "One team, every stage" cards (they repeated the hero tiles and listing photos), the broker profile and video, and the hero "Just listed" link. The hero image is now the Ferretti 720 (#5), which appears nowhere else on the page. The values band dropped the founder quote, value 3 became "One accountable team", and its button is now "About us" → /pages/about#approach. The news strip now shows **Guides** posts only (new `tag` setting in `azure-news` [b7d9a3fa]), headed "How we work".
- **K About page:** added the 5 values (#approach) after "Who we are" and the founder letter (#founder) after the build diagram. The "Meet the team" card and "What you can expect" are switched off (kept for rollback).
- /pages/our-approach is still published because live J links to it. Hide it once K is published.

## 2026-11-07 11:15 · session `b7d9a3fa` · Homepage redesign + Our Approach page + values band (theme J)

- **New sections (tagged [b7d9a3fa]):** `azure-home-hero` (optional video, image fallback, H1, 4 intent tiles, "Just listed" link), `azure-proof-strip` (fact blocks, `{count}` = live yacht count), `azure-values` (band or list layout, founder quote, promises), `azure-founder-letter`, `azure-build-band` (steps plus a swipeable Azure Design rail, no prices).
- **Modified:** `azure-broker` now has an optional YouTube card (Sunseeker 95 MIRRACLE walkthrough).
- **templates/index.json (J):** hero → facts strip (11 yachts, Fort Lauderdale, 5.0 on Google from 7 reviews, Azure Design, in line with IYBA practices) → yachts for sale (4) → values band → journeys → Azure Design & new builds → broker + video → reviews → news → FAQ (5, FAQ schema) → contact. The old sections are kept as `disabled` for rollback, and the brand tiles were removed from the homepage.
- **New template `page.our-approach.json`** and a published page `/pages/our-approach`: hero "On your side of the table", founder letter, 5 values with promises, "How it shows up", generic new-build steps, reviews, "Talk to Stanley". SEO title and meta set. The page shows as plain text until J is published.
- QA: rendered at 1440px and 390px with no Liquid errors. Theme I and H were not changed.

## 2026-11-07 10:55 · session `b7d9a3fa` · About page build-team diagram made generic (theme J)

- **templates/page.about.json (theme J 192903610411):** section `team48` (azure-design-team) rewritten without named partners, as the user asked.
  - Eyebrow: "How a new build works". Heading: "Who is involved in a new build". The anchor changed from `#azure-48-team` to `#build-team`; nothing else on the site linked to the old anchor.
  - Intro text is generic: an independent designer, naval architect and shipyard, chosen for the size, style and hull material; Azure Yacht Group manages the project.
  - Nodes: You (Owner) → Azure Yacht Group (Project management) → Yacht designer (→ /pages/yacht-designers) + Naval architect (→ /pages/naval-architects) → Shipyard (→ /pages/shipyards).
  - Removed: J. David Weiss / Designova, Zurn Yacht Design / Doug Zurn, and New England Boatworks / Portsmouth RI.
- Checked in the J preview: no Weiss, Zurn or Boatworks text and no Liquid errors. The live About page (theme I) is unchanged until J is published.
- Not changed: the named designers on the Design, New construction, Designers, Naval architects and Shipyards pages, and on the 48 Hybrid product.

## 2026-11-07 10:40 · session `b7d9a3fa` · Grid merge, site-wide integrity check and fixes

**Theme:** You published theme I (192901152811) at 00:40 UTC, so it is now MAIN. I created a new working copy, **J = "Azure Savor – J" (192903610411)**, duplicated from I. H (192895877163) is now the rollback.

**Homepage grids (uploaded to I before it was published, so they are live):**
- `snippets/azure-yacht-card.liquid`: new optional `new_days` parameter. Listings created within N days show a "Just listed" tag instead of "For sale" (not on charters).
- `sections/azure-yacht-grid.liquid`: new setting `new_badge_days` (0–90, default 0), passed to the card.
- `templates/index.json`: `new_in_stock` became the single grid. It is titled "Yachts for sale" (eyebrow "New and featured listings"), uses collection just-listed (newest first), shows 6 yachts and tags listings from the last 30 days. `featured_sales` is turned off (`disabled: true`).

**Theme J only (needs publishing):**
- `snippets/price.liquid`: prices of 100 or less, or listing.price_on_request, now show "Upon request" in native Savor cards and the predictive search drawer, instead of "$0.00 USD". Checked in the J preview: no $0.00.

**Live data fixes:**
- 57 SEO titles (`global.title_tag`) shortened to 45 characters or less, so the page title with " – Azure Yacht Group" is 65 or less. This covers 27 news posts, 25 products, 2 collections and 3 pages. It also removes the doubled "| Azure – Azure Yacht Group" endings.
- Blog "news": meta description added.
- Collection `sportfish-center-console-boats-for-sale`: the description no longer names Key West, Boston Whaler or Argonaut. It now reads "including Canados, Sea Force IX and Post".
- "Grand Turismo" corrected to "Gran Turismo" in the Beneteau GT38 charter product title and its news post (title, body, summary).
- Alt text added to 302 product images and videos that had none, on all active products.

**Integrity check results (166 URLs from the sitemap and Admin data):**
- All pages return 200. No broken internal links. No links to drafted products. Menus are clean.
- No mentions of Udo, Azure 39, Bennington, Stanislav or Zemskov, and no internal.* metafields shown. Phone is consistent: only (754) 444-6729. The address is consistent.
- Still open, and needs the user (see PLAN): policies use stan@ instead of orders@, and the IYBA wording is long. The connector has no write_legal_policies scope. 15 orphan or empty collections are still live. 3 Yacht Habit-sourced listings.

## 2026-11-07 09:55 · session `b7d9a3fa` · Homepage decluttered (theme I)

- **templates/index.json (theme I 192901152811):** turned off `featured_charters` ("Featured charter yachts") and `new_build` ("Azure Yachts new construction") with `disabled: true`. The sections are kept, so they can be turned back on in the theme editor.
- Charters and new construction are still reached from the homepage through the "Charters, new construction and services" cards (/pages/charters, /pages/new-construction) and the main menu.
- New homepage order: hero → Just listed → Featured yachts for sale → How buying works → Selling CTA → Brands → Why Azure → Journeys → About → Latest from Azure → Talk to us.
- Checked in the theme I preview. Live H is unchanged until I is published.
- YouTube: Tartan video g_Nye7ygIAc is still public. The connector can't change privacy, so this is a user task (see PLAN).
- Instagram feed: none found in saved themes, the live site or archive.org (Tilda) snapshots. Waiting for the user to name the app.

## 2026-11-07 09:30 · session `b7d9a3fa` · Focus on bigger yachts: sub-$200k boats and Tartan removed (live data + working copy I)

- User: remove Tartan (under contract) and boats under $200k; focus on bigger yachts.
- Products set to **DRAFT** (not deleted): 1987 Tartan 37 (55k), 1999 Boston Whaler (81.5k), 2023 Argonaut (89k), 2018 Key West Billistic 281 (114k).
- Blog posts **unpublished** (kept as hidden): video-tartan-37-cloudburst-walkthrough, video-argonaut-260-walkthrough, 2018-key-west-281-billistic-for-sale.
- 301 redirects: the 4 product URLs → /collections/yachts-for-sale (Key West → sportfish & center consoles); the 3 post URLs → /blogs/news.
- Menus: removed Tartan, Boston Whaler, Argonaut, Key West from `azure-footer-brands`; removed Sailboats (now empty) from `azure-main-menu-h` Buy, `azure-footer-buy-sell`, `azure-main-menu-brokerage` and `main-menu`.
- Theme I `templates/index.json`: Boston Whaler removed from the homepage brand logos (live H still shows it until I is published).
- NOT done (connector blocks unpublishing): collections tartan, boston-whaler, argonaut, key-west, sailboats-for-sale are empty but still published. USER: hide them in Shopify admin (Collections → Sales channels) if wanted. The Tartan video is still public on YouTube (not changed).

## 2026-11-07 09:10 · session `b7d9a3fa` · News blog (52 backdated posts, YouTube videos) + News on homepage, About, menus (live data + working copy I)

**Live store data (visible now, not theme-dependent)**
- Blog `news` (gid://shopify/Blog/82689785899): **40 new articles**, author "Azure Yacht Group", dated Mon/Thu from 22 Jun 2026 to 5 Nov 2026 (14:00 UTC). Order: guides interleaved with charters and new-build designs, newest listings last. Tags: Listings / Charters / New construction / Guides. Each article has a featured image (product photo or own build/shipyard photo) and a link to the listing or guide page.
- Content rules: no prices or rates (several listings have conflicting rate/spec data), only facts consistent between specs and descriptions, "Designer's figures" for DYD numbers, "in line with IYBA practices" on selling.
- Skipped: 7 Yacht Habit placeholder listings; 4 charters with no photos (Sunseeker 75, Azimut 60, Princess 65, Azimut 65 Elegance).
- Old Tilda article "Introducing Axiom 48 Hybrid" (4 Jan 2026) cleaned: new title/body/summary, author Azure Yacht Group (was "Stanislav Zemskov"), tag New construction, link to the product, Axiom video embedded.
- **YouTube connected** (channel Azure Yacht Group UCG6unRUnxiwh8TylrvDQiIQ, 21 videos). **12 video posts** (tag Videos), each dated the video's YouTube publish date, with privacy-enhanced embed + "Watch on YouTube" link: Stan interview (18 Oct 2024, also links "Building Luxury Boats"), Hampton 658L tour + short, Bullet 200, Axiom 48 short, Argonaut 260, Princess 56, Sunseeker 95 MIRRACLE, Prestige 46 KOPARA, Tartan 37 Cloudburst, Sanlorenzo 64Steel Alchemist short, MUMBLE 58 (DYD). Bullet 200 article also embeds its video. No prices in post text ("details as at the time of filming").
- Not posted (need user OK): private Tartan duplicate, unlisted "Azure 48 Hybrid Design Process", untitled "May 10, 2025", "Azure Element 48 Video", 2021–2022 videos (Ego 36 Hybrid, Invictus 370GT EOS II, Founders Introduction, MarineMoney event).
- Menu `azure-main-menu-h` (LIVE on H): About now has children **About us** (/pages/about) and **News** (/blogs/news). Footer `azure-footer-company`: **News** added after About.

**Working copy I (192901152811)**
- New `sections/azure-news.liquid` [b7d9a3fa]: latest posts as cards (image, date · tag, title, excerpt, Read more, All news button). CSS appended to `assets/azure-yacht.css` (`.ay-news__*`).
- `templates/index.json`: "Latest from Azure" news strip (sand, 3 posts) before the contact section.
- `templates/page.about.json`: "News from Azure Yacht Group" (anchor #news, 3 posts) before contact.
- Verified desktop + mobile: homepage strip, About strip, /blogs/news list, video article embed (16:9), About dropdown links.
- USER: publish I to show the strips (blog, articles and menu links are already live).

## 2026-11-07 08:20 · session `b7d9a3fa` · H published by the user; new working copy I

- **USER:** published working copy H (`192895877163`). H is now MAIN; G (`192891781163`) is the previous live theme and the rollback.
- **Verified live (www.azureyachtgroup.com):** 13 pages and all 13 active new-build and brokerage product pages return 200 with no Liquid errors and no "Azure 39". The two-level Charters menu (`azure-main-menu-h`) is live. New-build products no longer show $0 or "Add to cart" (the old Plan item 5 is resolved).
- **NEW working copy I:** `192901152811` "Azure Savor – I" (duplicate of H, unpublished). All future theme edits go to I; MAIN (H) is blocked. The user publishes I in admin.
- `azure-main-menu-brokerage` is now used only by G (rollback). Keep it until the new menu has run without problems for a while.

## 2026-11-07 08:00 · session `b7d9a3fa` · Site effectiveness audit + roadmap (docs only)

- **User request:** update the plan with the new steps and create an audit file.
- **NEW `SITE-AUDIT.md`** (OneDrive › Azure Web): strengths, gaps G1–G6 (proof, response speed, charter prices, owner services, H not published, measurement), a 6-step action plan with owners, and a re-audit schedule.
- **PLAN.md:** new section "Effectiveness roadmap" (7 steps including the re-audit), Next actions item 6, and a decisions line.
- No theme or store changes.

## 2026-11-07 07:40 · session `b7d9a3fa` · Buy cleanup, menus (NC icons, two-level Charters), About redesign, PM graphics, shipyard photos + maps, collapsible collection intro (live data + working copy H)

- **User requests:**
  - Remove new-construction yachts from Buy; Buy is brokerage new and used only. New builds stay under New Construction.
  - Add Project management and Shipyards to the New Construction submenu with icons.
  - Charters menu in two levels: charter types and destinations.
  - Redesign About with project management and recent changes.
  - Add graphics to the project management page.
  - Shipyards: map location and yard photos.
  - Sales (collection) page: make the intro text expandable so listings show sooner.
- **LIVE, Buy cleanup:** both Azure 48 Hybrids removed from the manual collection yachts-for-sale; tag `listing:for-sale` removed from all 8 Azure new-construction products.
- **LIVE, Gnessi collection:** franco-gnessi-dyd-yachts vendor rule changed to "DYD" (2 products).
- **LIVE, menus:**
  - azure-footer-buy-sell: Yachts for sale, New boats in stock, Sailboats, Sell your yacht, Yacht brokerage.
  - azure-footer-company: About, New construction, Project management, Yacht design, Service & maintenance, Contact, Search.
  - azure-main-menu-brokerage (used by MAIN): New Construction submenu = Azure Yachts, Franco Gnessi / DYD, Project management, How a build works, Yacht design, Designers, Naval architects, Shipyards.
  - NEW menu `azure-main-menu-h` (gid Menu/321642823723), used only by H's header: same as above, but Charters = Charter types (Charter fleet, Day charters, Multi-day & weekly, Superyacht charters) / Destinations (Miami, Fort Lauderdale) / Charter FAQ. event-charters not listed (0 products). MAIN is unchanged until H is published.
- **LIVE, About page (Page/104256045099):** body rewritten; title_tag "About Azure Yacht Group | Brokerage, Charter & New Builds"; description_tag set.
- **LIVE, Files:** 9 shipyard photos `shipyard-<yard>.jpg` (NEB, Lyman-Morse, Palumbo, Baglietto, Burger, Heesen, Tankoa, CRN, Rossinavi). Official yard/press photos are credited "Photo: <yard>"; Heesen (Tubbsonline, CC BY-SA 4.0), CRN (Gianni Del Bufalo, CC BY 2.0) and Rossinavi (ClaR85, CC BY-SA 4.0) are from Wikimedia Commons with credits.
- **H, header-group.json:** menu → `azure-main-menu-h`.
- **H, snippets/mega-menu-list.liquid [b7d9a3fa]:** grouped render when level-2 links have children (labelled tile groups plus an icon row for single links). Mobile drawer uses Savor's 3-level panels (checked).
- **H, snippets/link-featured-image.liquid [b7d9a3fa]:** new icons pm (clipboard), yard (gantry over hull), clock (day charters), calendar (multi-day/weekly).
- **H, templates/page.about.json:** hero, story, services (6), pm (3 options), team48 diagram (You / Azure / Weiss / Zurn / NEB), leader (Stanley Zemskoff), how we work (incl. "in line with IYBA practices"), contact.
- **H, NEW sections/azure-pm-models.liquid:** 3 option cards, each with a line diagram (act / select / oversee) and a key.
- **H, NEW sections/azure-timeline.liquid:** numbered stage timeline with icons (horizontal on desktop, vertical on mobile).
- **H, page.project-management.json:** models → azure-pm-models; stages → azure-timeline (same text and links).
- **H, sections/azure-designer-list.liquid [b7d9a3fa]:** new block settings `credit` (shown on the photo) and `map_query` (View on map link to Google Maps); section setting `map_label`.
- **H, page.shipyards.json:** photo, credit and map location on all 9 yard cards.
- **H, sections/azure-yacht-grid.liquid [b7d9a3fa]:** a long collection intro collapses to a 3-line preview with Read more / Show less. The full text stays in the HTML for SEO. Settings: collapse_text, collapse_lines, collapse_chars (320), labels.
- **Verified:** desktop and mobile screenshots of the menus, PM page, Shipyards and yachts-for-sale; no Liquid errors.
- **Open:** overview map section for the yards (not built); Dmitry Wolf on About (ask user); publish H.

## 2026-11-07 06:50 · session `b7d9a3fa` · PM wording "project management company", 48 Hybrid 38 kn (live data + working copy H)

- **User decisions:**
  - Keep max speed at 38 kn.
  - Keep location South Florida.
  - DYD vendor confirmed.
  - The PM options are "we act as your project management company" or "we select a project management company" (overseeing stays as the third option).
- **LIVE:** `yacht_specs.max_speed_knots` 28 → 38 on azure-48-hard-top and azure-48-hybrid-saloon-express.
- **LIVE:** yacht-project-management fallback body changed from "project manager" to "project management company".
- **H, page.project-management.json:** hero text and the 3 option titles are now "We act as your project management company", "We select a project management company" and "We oversee the project".
- **H, page.new-construction.json:** pm cards and guide step 1 updated the same way.
- **H, page.design.json:** team diagram Azure node updated.
- **H, footer-group.json:** design default text updated.
- **Verified:** no Liquid errors; no "project manager" wording on the PM or new-construction pages.

## 2026-11-07 06:30 · session `b7d9a3fa` · DYD vendor on Gnessi new builds (live data)

- **LIVE products:** vendor "Franco Gnessi / DYD" → "DYD" on 2026-franco-gnessi-dyd-geko-226-new-build (GEKO 60) and 2026-franco-gnessi-dyd-bullet-200-new-build (Bullet 200), as the user decided. `new_build.designer` is unchanged ("Franco Gnessi / DYD"), so the designer section still matches.

## 2026-11-07 06:15 · session `b7d9a3fa` · Azure 48 Hybrid team (Zurn + New England Boatworks), vendor = builder/brand, Azure 39 dropped (live data + working copy H)

- **User decisions:** Axiom 48 confirmed as Azure Design. Vendor must be the builder or a brand name. Azure 48 Hybrid is committed to be built at New England Boatworks with Doug Zurn (Zurn Yacht Design) as naval architect. **Azure 39 dropped: do not list or mention it anywhere.**
- **LIVE products, 48 Hybrid Saloon Express + Hard Top:**
  - Vendor and `yacht_specs.builder` = "New England Boatworks".
  - New "Design and build team" list in the description: Weiss / Zurn / NEB / Azure PM, with links.
  - "private tour or sea trial" → "discuss your build".
  - SEO titles: "Azure 48 Hybrid … | New Construction". Saloon Express got a meta description.
- **LIVE products, 6 Azure Design concepts:** vendor = "Azure Design"; `yacht_specs.builder` = "Shipyard TBD – design by Azure Design".
- **LIVE collection** azure-yachts: description now names Zurn Yacht Design and New England Boatworks.
- **LIVE page** david-weiss-yacht-designer: Azure 39 removed; the section is now "Azure 48 Hybrid", with Zurn and NEB.
- **H:**
  - `azure-designer-list` [b7d9a3fa]: per-card label override (block setting `badge`, gold fill).
  - `page.shipyards.json`: NEB card first in the composite group, label "Azure 48 Hybrid yard", text + fact.
  - `page.naval-architects.json`: Zurn bio + fact "Naval architect of the Azure 48 Hybrid".
  - Azure 39 removed from design, designers, new-construction and product.new-construction (Weiss now "including the Azure 48 Hybrid").
- **Verified:** no Liquid errors, no "Azure 39" on preview pages.
- **USER:**
  - Gnessi products' vendor is still "Franco Gnessi / DYD" (a designer, not a builder).
  - The 48 Hybrid's Location spec says South Florida.
  - Max speed: description says 38 kn, spec table says 28 kn.

## 2026-11-07 05:30 · session `b7d9a3fa` · Azure as project management (not a designer), new Project Management page, naval architects + example yards, compact designer lists, New build guide nav (working copy H + live data)

- **Positioning:** Azure Yacht Group is presented as a project management company, not a designer. Azure removed from all designer lists (design, new-construction, yacht-designers) and from size-guide links. Non-Weiss "Azure" concepts are now called "Azure Design".
- **LIVE products:** metafield `new_build.designer` = "J. David Weiss (Designova Creative)" on azure-48-hybrid-saloon-express and azure-48-hard-top; "Azure Design" on axiom-48, vantage-85, azure-80, luxury-120, magic-carpet-130, azure-60. Descriptions: "Azure Yacht Group in-house design" → "Azure Design concept"; Axiom "designed by Azure Design".
- **LIVE collection** azure-yachts: description rewritten (48 Hybrid by J. David Weiss, Azure Design concepts, Azure manages each build).
- **LIVE page** david-weiss-yacht-designer: new "Azure 48 and Azure 39" section linking both 48 products and the PM page. Azure 39 is text only (no product).
- **LIVE new page** "Yacht Project Management" (handle yacht-project-management, template suffix project-management, SEO set). Shows fallback body until H is published.
- **H templates:** `page.project-management.json` [b7d9a3fa] (hero, guide nav, intro, 3 ways: Azure as PM / we select the PM / we oversee; 6 stages; inquiry). `page.new-construction.json`: new pm section (#project-management), guide now 6 steps starting with project management, hero btn2 → PM. `page.design.json`: team diagram Azure node = project management; "Azure Design concepts"; Weiss facts add Azure 48/39. `product.new-construction.json`: designer blocks gnessi, weiss, Azure Design (→ PM page). `footer-group.json`: PM page in design_handles, new prompt d6 "Project management", default text updated.
- **New section** `sections/azure-subnav.liquid` [b7d9a3fa] ("New build guide", 7 links with aria-current) after the hero on all new-build pages: New construction › Project management › Design process › Yacht designers › Naval architects › Shipyards › Build process.
- **Designer lists:** `azure-designer-list` [b7d9a3fa] new compact layout (64 px thumb, name, brief, link), badge, more_label/more_link. Full designer details only on /pages/design; new-construction and yacht-designers use compact lists linking to /pages/design#designers.
- **Naval architects (H):** added DLBA Naval Architects, Murray & Associates, Vanguard Marine Design (Rick Hyer; no website link).
- **Shipyards (H):** added Safe Harbor New England Boatworks; all yards labelled "Example" (badge + eyebrow "Example yards · …"). Size-guide bands updated for the new firms.
- **Other section fixes** [b7d9a3fa]: `azure-features` optional anchor, column logic (3 cols for 1/2/3/5/6/9 blocks, else 4 — affects other pages); `azure-gallery` empty dialog img has no src; `azure-size-guide` mobile labels.
- **Verified:** no Liquid errors on PM, new-construction, design, yacht-designers, Weiss page, azure-48-hard-top (shows Weiss), luxury-120 (shows Azure Design); desktop + 390 px mobile checked.
- **USER:** publish H; Azure 39 details; confirm Axiom 48 is not the "Azure 48"; vendor still "Azure Yachts"; which yards are actually used.

## 2026-11-07 04:30 · session `b7d9a3fa` · Design page rebuild, new Shipyards page, design-related footer prompts, full designer list (working copy H + one live page)

- **Footer prompts (H):** `sections/azure-cta-band.liquid` [b7d9a3fa] now recognises design pages (new settings design_handles / design_eyebrow / design_heading / design_text, new block `design_prompt`, max 3 shown, current page skipped). `sections/footer-group.json`: "Design & build · Plan your new build" with links to New construction, Naval architects, Shipyards, Yacht designers and Design process. They show on design, yacht-designers, naval-architects, shipyards, new-construction, new-construction-process, the six designer pages, franco-gnessi-dyd-yachts and azure-yachts. Other pages still show "Charter, buy or sell".
- **New sections (H):** `azure-design-process` (stepper plus stage rows), `azure-size-guide` (hull material by length chart plus size bands; on mobile the bar labels move under the material name), `azure-gallery` (filters plus a lightbox), `azure-design-team` (role diagram). `azure-designer-list`: facts, no-image cards, external links open in a new tab, portraits cropped from the top. `azure-features`: optional anchor ID setting.
- **`templates/page.design.json` rebuilt (H):** hero, approach, team diagram, 8-stage process, gallery (12 images), interior & options (#options), size & material guide, designers we work with (7), in-house, inquiry.
- **Shopify Files:** 12 design images from OneDrive (48 Hybrid sketches, renders, review markup, 3D, colour studies, deck layout; 38 m motor yacht design study profile, GA and render; DYD Bullet 200 and Nautilus 65 deck plans).
- **LIVE: new page "Shipyards"** (`/pages/shipyards`, gid://shopify/Page/706913665067, template suffix `shipyards`, SEO title and description). `templates/page.shipyards.json` (H): intro, size guide, yards by material (composite: Lyman-Morse, Palumbo; aluminum: Baglietto, Burger, Heesen; steel: Tankoa, CRN, Rossinavi). Facts come from the yards' own or press sources. It says listing does not imply a partnership. Until H is published, MAIN shows the short fallback body.
- **`templates/page.new-construction.json` (H):** the designers list now has 7 cards (all six designers plus Azure Yachts).
- Verified in the H preview on desktop and at 390 px: no Liquid errors; stepper, chart, team diagram, filters and lightbox all work.
- USER: confirm the 48 Hybrid / 38 m study images can be public; confirm which yards you actually work with (OneDrive also lists Safe Harbour); add DLBA, Murray & Associates and Vanguard to naval architects?; publish H.

## 2026-11-07 03:50 · session `b7d9a3fa` · New construction: "Who designs our yachts" replaced with a designer list (working copy H)

- **User request:** on /pages/new-construction, replace "Who designs our yachts" with a block listing the designers we work with, with brief descriptions and links to their collections.
- **New `sections/azure-designer-list.liquid` [b7d9a3fa]** ("Azure designer list"):
  - One card per designer block: image, studio/role, name, brief description, number of designs (from the collection) and a link to the collection.
  - The image falls back to the collection image, then to the first yacht's photo.
  - Uses 2 columns when there are ≤2 designers, 3 otherwise, and 1 on mobile. Inline scoped styles.
  - Admins can add designers as blocks.
- **`templates/page.new-construction.json`:** section `designers` changed from `azure-designers` (a single Azure Yachts profile) to `azure-designer-list`. Anchor `#designers` kept. Content:
  - Sand background, "Design partners / Designers we work with".
  - **Franco Gnessi / DYD** → /collections/franco-gnessi-dyd-yachts (2 designs). The description is taken from the existing approved bio.
  - **Azure Yachts** (Azure Yacht Group in-house design) → /collections/azure-yachts (8 designs).
- Only these two designers appear in store data (`new_build.designer`). No others were added without user confirmation.
- Checked in the H preview on desktop and mobile: no Liquid errors, and the links and counts are correct.
- USER:
  1. Name any other designers to add, with a collection and a short description for each.
  2. Preview and publish H.

## 2026-11-07 03:25 · session `b7d9a3fa` · Broker profile: name corrected to Stanley Zemskoff, photo added (working copy H)

- **Name:** the user's public name is **Stanley Zemskoff** (not "Stan Zemskov"). It is now set in the `broker` section of `page.charters`, `collection.location`, `product.charter`, `product.charter-template` and `product.weekly-charter`, and the text reads "Tell Stanley your dates…".
- **Photo:**
  - The user supplied a 200×200 headshot. It was upscaled with AI to 1254 px, faithful to the original (likeness checked side by side), and saved as a 1000×1000 JPG.
  - Uploaded to Shopify Files as `stanley-zemskoff-azure-yacht-group.jpg` (gid://shopify/MediaImage/46949913559083), alt "Stanley Zemskoff, General Manager & CEO, Azure Yacht Group".
  - Set as the `photo` setting (`shopify://shop_images/stanley-zemskoff-azure-yacht-group.jpg`) on all 5 templates.
- Checked in the H preview on /pages/charters: the round photo and new name show correctly.
- No other page or theme file contains the old name.
- USER: preview and publish H.

## 2026-11-07 03:05 · session `b7d9a3fa` · Charter pages: broker profile, "Request a call" option and budget field (working copy H)

- **User request:** broker profile block, a "Request a call" option and budget field on the charter inquiry form, and the booking and protection section. The booking and protection section was already done at 02:35.
- **New `sections/azure-broker.liquid` [b7d9a3fa]** ("Azure broker profile"):
  - Shows a photo, or the initials when there is none, plus name, role, text, phone, WhatsApp, email, languages and a "Request a call" button.
  - The button switches the page's charter form to the call option and scrolls to it.
  - Phone and email fall back to `azure.contact_phone` / `azure.contact_email` (currently (754) 444-6729 and orders@).
- **Added as section `broker`** after `trust` in `page.charters`, `collection.location`, `product.charter`, `product.charter-template` and `product.weekly-charter` (navy background).
  - Content: "Your charter contact / Speak with us directly"; Stan Zemskov, "General Manager & CEO · Azure Yacht Group" (from his email signature).
  - The text describes the existing process only (availability check, written quote, agreement terms before payment).
  - No photo yet (shows "SZ"). No WhatsApp, and no direct 786 number published.
- **`snippets/azure-inquiry-form.liquid` [b7d9a3fa], charter mode only:**
  - New toggle "Check availability" (default) / "Request a call". On "call", the date and guests become optional, a "Best time to call" field (ET) appears and the button reads "Request a call". The `#call` link preselects the call option.
  - New optional field "Budget (USD)": day ranges from under $5k to $100k+; weekly-charter products show "Budget per week" from under $100k to $500k+.
  - Both values are sent as `contact[Request type]`, `contact[Budget]` and `contact[Best time to call]`.
- Checked in the preview on desktop and mobile: no Liquid errors, the call toggle works, and the weekly budget ranges show on Eternal Spark.
- USER:
  1. Send a square headshot, and optionally a WhatsApp number and languages.
  2. Confirm that Stan should be named publicly.
  3. Preview and publish H.
  4. Change the store email to orders@ so form requests arrive there.

## 2026-11-07 02:35 · session `b7d9a3fa` · Charter pages: 4-step booking path and "Your booking is protected" section (working copy H)

- **New working copy H `192895877163` "Azure Savor – H"**, duplicated from G (MAIN). Preview: https://yra0nf-ec.myshopify.com/?preview_theme_id=192895877163
- **User request: "Add the trust and booking steps to the charter pages".** Templates changed in H: `page.charters`, `collection.location` (day, weekly, Miami, Fort Lauderdale and superyacht charter collections), `product.charter` (13 charters), `product.charter-template` and `product.weekly-charter` (4 yachts).
  - **Booking steps:** step 1 now adds "or call us on (754) 444-6729" as a tap-to-call link. New step 04, "Sign and secure your date": "Sign the charter agreement and pay the deposit to the account named in it. Your date is held once both are received."
  - **Weekly step 04** is now "Sign, secure and plan": dates are held once the signed agreement and deposit are received, then route planning with the captain.
  - **New section `trust` (existing `azure-features` section, no new code):** "Booking with confidence / Your booking is protected", with the company name, address and phone.
  - **Its four points:** A written agreement for every charter (links to /pages/charter-terms) · Your date is held, not just quoted · Payments to the named account only (call to confirm bank details before any transfer) · Clear costs before you commit (fuel, APA, tax, gratuity; nothing booked or charged until approved).
  - All wording is based on the existing charter-terms page and the request forms. Not added: commission or no-fee claims, response-time promises, and IYBA or licence claims.
  - Checked in the preview on desktop and mobile (390 px): the Charters page, Azimut 55 and Eternal Spark.
- USER: preview H, then publish it in admin.

## 2026-11-07 02:10 · session `b7d9a3fa` · Charter terms: note that exact terms depend on the charter agreement (LIVE, requested by the user)

- **LIVE (user request: "Add a note that exact terms depend on the charter agreement"):** page `charter-terms` (`gid://shopify/Page/706689892395`).
  - New opening note: "Please note: the exact terms for each charter, including the deposit, payment dates, APA, cancellation and refunds, depend on the signed charter agreement for that yacht. The terms below are our standard guide. Where the agreement says something different, the agreement applies."
  - Added under "Weekly and superyacht charters": when a yacht is run by a charter management company or central agent, payments go to the account named in the charter agreement, and the amounts and dates are the ones in that agreement.
  - No terms were changed. The previous body was saved in the session as `/tmp/seo/charter-terms_before.html`. Checked live.
- **Theme status:** the user has published G `192891781163`, so **G = MAIN**. The Franco Gnessi move and the Semrush fixes (meta descriptions, product schema, footer link) are now live.
- The charter-terms block on product pages (`blocks/azure-terms-note.liquid`) already says terms are "confirmed in your charter agreement". Unchanged.

## 2026-11-07 01:55 · session `b7d9a3fa` · Top-level "New in Stock" removed from the main menu (LIVE, requested by the user)

- **LIVE (user request: "Remove separate new in stock top menu"):** menu `azure-main-menu-brokerage` no longer has the top-level item "New in Stock" (→ /collections/new-boats-in-stock).
- "New boats in stock" stays under **Buy**. The top-level order is now Buy · Sell · Charters · New Construction · About · Contact.
- Checked on the live site (header and drawer). The previous menu was saved in the session as `/tmp/seo/menus_before.json`.
- Also this session: Semrush was connected, but the account has no API units, so no data can be pulled until units are added (https://www.semrush.com/mcp-access). The user will make the stan@ → orders@ store email and policy edits in admin.

## 2026-11-07 01:45 · session `b7d9a3fa` · Semrush audit fixes (SEO titles and GEKO title LIVE; meta descriptions, structured data and footer in working copy G)

- **LIVE (requested by the user: "semrush reports that we have to fix"): SEO titles shortened.** Titles were too long once the theme adds " – Azure Yacht Group". Old values were saved in the session as `/tmp/seo/titles.json`. Checked with curl.
  - Products: Sea Force → "2005 Sea Force IX 82 Sportfish for Sale"; Horizon → "2009 Horizon 76 Motor Yacht for Sale"; Pershing → "2020 Pershing 8X ALEXANDRA for Sale"; Canados 493 → "2026 Canados Gladiator 493 Grand for Sale"; Canados 571 → "2026 Canados Gladiator 571 Blade for Sale"; 48 Hybrid → "48 Hybrid Saloon Express | New Construction"; Eternal Spark → "Eternal Spark | 50 m Bilgin Superyacht Charter".
  - Collections: `azure-yachts` → "Azure Yachts | 48 Hybrid & New Construction"; `yachts-for-sale` → "Yachts for Sale in Miami & Fort Lauderdale" (this also removes a duplicate of the homepage title).
  - Pages: buy-a-yacht → "Buy a Yacht in Miami & Fort Lauderdale"; sell-your-yacht → "Sell Your Yacht in Miami & South Florida"; service-maintenance → "Yacht Service & Maintenance in Miami, FL".
- **LIVE (approved by the user):** GEKO title changed from "GEKO 60 – 200 ft …" to "GEKO 60 – 60 m (200 ft) Franco Gnessi / DYD Superyacht New Build" (the yacht is 60.89 m).
- **G `192891781163`, `snippets/azure-product-schema.liquid` [b7d9a3fa] (Semrush "structured data contains markup errors", 160 errors):**
  - Removed `shippingDetails` (OfferShippingDetails, doesNotShip). Semrush requires shippingRate and deliveryTime even with doesNotShip, and we have no real rate to give; the field is optional for Google. `seller` and `hasMerchantReturnPolicy` stay.
  - No Product markup on listings with no photo (a required image is missing). This affects Sunseeker 75, Princess 65, Azimut 60 and Azimut 65 'Elegance' until they have photos.
  - Checked in the G preview: the JSON-LD parses (Organization and ProductGroup) and contains no OfferShippingDetails.
- **G, `snippets/meta-tags.liquid` [b7d9a3fa] ("meta description missing"):** added fallback descriptions only where Shopify outputs none: /search, /collections/all (other collections use their title), and /policies/* ("<Policy> for azureyachtgroup.com, the website of Azure Yacht Group LLC…"). Checked in the preview.
- **G, `sections/footer-group.json`:** `show_powered_by` set to false. This removes the nofollow "Powered by Shopify" link Semrush flagged on 87 pages. Checked in the preview.
- **Platform issues or false positives, no change:**
  - Disallowed internal resource: `/checkouts/internal/preloads.js` (Shopify robots.txt).
  - Low text/HTML ratio: theme inline CSS and JS.
  - Pages with only one internal link: `?variant=` URLs (they have canonical tags).
  - Le Ponant links formatted as page links: the Wikimedia attribution links, which the CC licence requires.
- **Admin only (the connector has no policy write scope):** USER, in Settings › Policies, change stan@ to orders@ in Contact information, Privacy policy and Refund policy. Change the "here" link text in Terms of service. Change the store email to orders@ in Settings › General. No "[INSERT TRADING NAME]" was found in the current policies.
- **Homepage hero link:** resolved. Theme G has no `/pages/charter-services` links, and the 301 to `/pages/charters` is in place.
- **Approved by the user 7 Nov:** Y-8 details, image rights, GEKO title, and the Yacht Habit renames. The seven-rename list itself is not in the CHANGELOG, PLAN or session history, so nothing was renamed. USER: resend the list.
- USER: preview G, then publish it in admin. Then run Semrush again and click "Validate fix" in Search Console.

## 2026-11-07 01:20 · session `b7d9a3fa` · Franco Gnessi profile moved to the DYD collection page (working copy G); Azimut 55 charter photos (LIVE)

- **Theme status:** the user published F, so **F `192889454635` = MAIN**. A new working copy, **G `192891781163` "Azure Savor – G"**, was duplicated from F.
- **New template `templates/collection.franco-gnessi.json` (G), tagged [b7d9a3fa]:**
  - Built from `collection.json`: hero, grid ("Franco Gnessi / DYD projects"), a new `azure-designers` section (id `designer`, sand) holding only the Franco Gnessi block, then the inquiry form.
  - The bio, facts and photo are unchanged.
  - Link changed to "Talk to us about a DYD project" → `#inquiry`.
  - The hero's second button is "About the designer" → `#designer`.
- **`templates/page.new-construction.json` (G):**
  - Removed the Franco Gnessi designer block; only the Azure Yachts block remains.
  - Section heading is now "Azure Yachts design".
  - The hero text and listings, which still mention DYD projects, are unchanged.
- **LIVE (requested by the user):** collection `franco-gnessi-dyd-yachts` (`gid://shopify/Collection/697227182123`) now has templateSuffix `franco-gnessi`.
  - Checked: the live theme F, which lacks this template, falls back to the default collection layout with no errors.
  - G shows the new layout.
- **LIVE (requested by the user):** charter "Azimut 55 Charter" (`gid://shopify/Product/7608104484907`, handle `2022-azimut-50-flybridge`) has 13 new photos.
  - Source: the company's own shoot of 18 Jul 2025 (OneDrive › Charters › Fleet › Azimut 55; DJI/Sony; resized to 3200 px), with descriptive alt text.
  - The old Azimut 50 stock photo moved to the last position.
  - The "High Seas Yachting" Azimut 53 images in that folder were NOT used.
- **Charter photo audit:** all 283 existing charter image URLs return 200.
  - These listings have **no photos** and show "Photos on request": Sunseeker 75, Princess 65, Azimut 60 (all three `-1768266420514`), and Azimut 65 'Elegance'.
  - OneDrive has "Miami 65 Azimut Alegra" (38 web-ready photos). That is probably the Elegance boat, but it is unconfirmed, and the photos show an older cherry-wood interior while the listing says 2023.
  - The user asked for internet photos. Work in progress: builder press/model images; competitors' own charter-boat photos will not be used.
- **Connectors:** no GetReach connector exists. For backlinks, Ahrefs, Semrush and DataForSEO are available but not connected.
- **Found, not changed:** the GEKO 60 product title reads "GEKO 60 – 200 ft …". Please check it.
- USER: preview G, then publish it in admin.

## 2026-11-07 00:30 · session `b7d9a3fa` · Menu item "How a build works" repointed to the process page (LIVE, approved)

- **Live menu change, approved by the user:** in `azure-main-menu-brokerage`, the item "How a build works" (`gid://shopify/MenuItem/802750693419`) now links to the page "New Construction Process" (`/pages/new-construction-process`, `gid://shopify/Page/706903048235`). Before, it was an HTTP link to `/pages/new-construction#build-process`. No other item changed (all ids kept). The backup is `/tmp/mn/menu_before.json` in the session sandbox.
- Checked in the F preview: the link resolves to `/pages/new-construction-process` and still uses the crane icon.
- **DYD logo:** the user confirmed it may be used (file `menu-logo-franco-gnessi-dyd-yachts.png`).
- USER: still needs to publish working copy F.

## 2026-11-07 00:15 · session `b7d9a3fa` · Main menu tiles: framed, darkened related photo with a centred icon (working copy F)

- **`snippets/link-featured-image.liquid` (F, `[b7d9a3fa]`), at the user's request:**
  - Main (collection) menu items are back to the framed 16:9 tile with a hairline border.
  - The tile background is a related photo: the collection's featured image, or its first listing's photo if it has none.
    - First-listing photos: New boats in stock, Charter fleet, Azure Yachts, Franco Gnessi / DYD.
  - The photo is darkened with an 80% black overlay (66% on hover) and 35% greyscale, with a slight zoom on hover.
  - The white line icon (or the Azure / DYD logo) is centred on top. On hover the icon and border turn gold.
  - Secondary links (Charter FAQ, How a build works, Yacht design, Designers, Naval architects) are unchanged: frameless small icon plus label in the second row.
  - To change a tile photo, set the collection's image in admin. No theme edit is needed.
- **Preview checked:** desktop Buy, Charters and New Construction; mobile drawer Buy.
- USER: preview and publish F.

## 2026-11-06 23:55 · session `b7d9a3fa` · Menu icons made frameless (working copy F)

- **`snippets/link-featured-image.liquid` (F, `[b7d9a3fa]`), at the user's request ("more seamless"):**
  - Removed the tile background and hairline border. Icons and logos now sit directly on the black panel, left-aligned above the label.
  - Desktop: 64 px icon row with 52 px icons; logos up to 150×52 px.
  - Drawer: 52 px row with 42 px icons; logos up to 130×42 px.
  - Hover turns the icon gold.
- **Preview checked:** desktop Buy and New Construction; mobile drawer Buy.
- USER: preview and publish F.

## 2026-11-06 23:40 · session `b7d9a3fa` · Menu restyle: black submenu, sharper icons, builder logos, info links in a second row (working copy F)

- **`sections/header-group.json` (F):** the header-menu block now has `background_color` #000000, `text_color` #ffffff and `image_border_radius` 0. The desktop drop-downs and the mobile drawer are black with white text and icons.
- **`snippets/link-featured-image.liquid` rewritten again (F, tagged `[b7d9a3fa]`):**
  - New icon set: 32-unit grid, 1.1 stroke, mitred corners, secondary lines at reduced opacity. Square tiles with a hairline white border (16%); icon and border turn gold #c8a45c on hover.
  - Designers now uses a drafting compass; naval architects uses a hull lines plan.
  - **Builder logos:** Azure Yachts shows the store logo (`settings.logo` = azure_logo_horizonta.svg). Any other collection shows a logo automatically when a transparent PNG or SVG named `menu-logo-<collection-handle>.png` (or `.svg`) is in Content › Files. Logos are shown in white (CSS filter).
  - **Informational links** (pages and URLs, not collections) get `azure-micon--info`: a 22 px icon plus label.
    - Desktop: they sit in row 2 under the listing tiles, with a hairline divider.
    - Drawer: they appear full width below the tiles.
    - Charters: FAQ is in row 2. New Construction: How a build works, Yacht design, Designers and Naval architects are in row 2. Buy has no info links.
- **New file:** `menu-logo-franco-gnessi-dyd-yachts.png` (gid://shopify/MediaImage/46946897854507, alt "DYD Xtreme Luxury logo"). It is the official DYD Xtreme Luxury logo from dydxl.com (DyDxl_logo_nero_rev01.png), made transparent.
  - USER: confirm the logo is approved for use. Is "Azure Designs" a separate mark from the Azure Yacht Group logo?
- **Preview checked:** desktop 1440 (Buy, Charters, New Construction) and the mobile drawer at 390 (New Construction).
- **Adding a builder later:**
  1. Create the builder's collection.
  2. Add it to the New Construction menu.
  3. Upload its logo to Files as `menu-logo-<handle>.png`.
  No theme edit is needed.
- USER: preview and publish F.

## 2026-11-06 23:05 · session `b7d9a3fa` · E published by user; process page visible; menu photos replaced with mono-colour icons (working copy F)

- **E is now MAIN** (published by the user in admin). D `192883654699` is the rollback.
- **Page "New Construction Process"** (/pages/new-construction-process, gid://shopify/Page/706903048235) is now **visible** (pageUpdate isPublished:true), as the user requested ("publish the working copy, then make the new process page visible").
- **New working copy F = "Azure Savor – F" `192889454635`** (themeDuplicate of E).
- **`snippets/link-featured-image.liquid` rewritten in F** (tagged `[b7d9a3fa]`). It now renders an inline mono line-icon SVG (stroke currentColor, 1.4) instead of the collection photo, in the desktop mega menu and in the mobile drawer. The icon is chosen from the link URL/title:
  - Buy: all yachts for sale = price tag, new boats in stock = boat with a sparkle, motor yachts = motor yacht, performance & sport = speedboat, sportfish & center consoles = fish, sailboats = sailboat.
  - Charters: charter fleet = anchor, Miami = palm, Fort Lauderdale = sun over water, superyacht = diamond, FAQ = question mark.
  - New construction: Azure Yachts = ship's wheel, Franco Gnessi / DYD = pen nib, how a build works = crane, yacht design = pencil, designers = person, naval architects = drafting triangle.
  - Fallbacks: sell = key, contact = phone, anything else = anchor.
  - Style: a 16:9 tile with a 6% currentColor tint and a 1px border. On hover the icon turns gold (#c8a45c). The drawer tile is 2:1.
  - Every link now renders a tile, so the grey "no image" placeholders no longer appear.
  - Rollback: copy `snippets/link-featured-image.liquid` from D or E.
- **Preview checked:** desktop 1440 (Buy, Charters, New Construction mega menus) and the mobile drawer at 390 (Buy). All 34 icons resolved.
- USER: preview F and publish it in admin.
- Still waiting for approval: repoint the menu item "How a build works" to /pages/new-construction-process.

## 2026-11-06 22:30 · session `b7d9a3fa` · New construction split into a listings page and a construction process page (working copy E)

- **New theme files in E** (tagged `[b7d9a3fa]`):
  - `snippets/azure-build-schematic.liquid`: inline SVG schematics. Steel: midship section with an aluminum superstructure. Aluminum: jig, upside-down build, then turned upright. Fiberglass: female mould plus a cored laminate stack. Simplified, not to scale.
  - `sections/azure-build-materials.liquid`: Steel / Aluminum / Fiberglass tabs (deep links #steel, #aluminum, #fiberglass; keyboard arrows; all panels show without JS). Each tab has an intro, best-suited and considerations lists, the schematic, 6 build steps, up to 3 photos, and matching models from the `new-construction` collection by `yacht_specs.hull_material`. Also an 8-row comparison table with a disclaimer.
  - `sections/azure-journeys.liquid`: optional Anchor ID setting added.
- **New template** `templates/page.new-construction-process.json`:
  - Hero: steel framing photo, H1 "The new construction process".
  - Materials tabs.
  - Existing custom-superyacht project timeline (phases, payments, cost drivers), moved from the listings page.
  - Inquiry.
- **`templates/page.new-construction.json` (listings)**:
  - Hero button 2 is now "Construction process" → /pages/new-construction-process.
  - The process section is replaced by a "How new yachts are built" teaser with three cards linking to each tab. It carries anchor `build-process`, so the live menu link /pages/new-construction#build-process still lands on it.
  - Listings, designers and inquiry are unchanged.
- **Files uploaded** (user-supplied photos; sources under 1500 px upscaled 2× with FSRCNN; JPEG q88):
  - steel-hull-framing-build-shed
  - steel-superstructure-sections-fabrication
  - yacht-hull-superstructure-primer
  - yacht-hull-faired-painted-build-hall
  - aluminum-yacht-build-hall-scaffolding
  - aluminum-yacht-hull-superstructure-welded
  - fiberglass-yacht-hull-systems-installation
- **Live store data:** page "New Construction Process" (gid://shopify/Page/706903048235, handle new-construction-process, template suffix new-construction-process) was created **hidden**. Make it visible only after E is published, because theme D lacks the template.
- **Content:** general construction practice only. No yard names, specs or claims about who builds Azure's models. Captions are generic.
- **QA:** checked in E's preview via `?view=new-construction-process`: desktop and 390 px mobile, tabs, hash deep links and table. No horizontal overflow (the schematic scrolls inside its frame on mobile). No Liquid errors.
- **Models per tab:** steel 1 (Bullet 200), aluminum 3, fiberglass 3. GEKO 60 has no hull material set, so it isn't shown.

## 2026-11-06 21:55 · session `b7d9a3fa` · Homepage hero photo sharpened (Pershing 8X ALEXANDRA)

- In live theme D the user set the homepage hero to `featured-yachts-for-sale` image #4 (2020 Pershing 8X ALEXANDRA, product 7612249931819). Its featured photo was only 1442×1080, so the 2400 px hero was upscaled and soft.
- The largest copy on the listing server (cdn.yachtbroker.org, base path) is 1600×1198. Larger sizes return 403.
- That copy was upscaled 2× with FSRCNN super-resolution plus light unsharp masking, giving 3200×2396 (JPEG q90, 1.1 MB). This is the same photo; no content was added.
- Live store data: MediaImage 46945534279723 (`2851104_945a138e_17.jpg`) was replaced in place via staged upload and `fileUpdate`. It keeps its position as the product's featured image. Alt text set to "2020 Pershing 8X ALEXANDRA yacht for sale". Verified that the CDN serves 2400 px to the live hero.
- Working copy E `templates/index.json`: hero `image_index` 3 → 4 to match D, so publishing E keeps the Pershing hero.
- Photo rights belong to the listing broker (Luke Brown Yachts, central agent).

## 2026-11-06 21:40 · session `b7d9a3fa` · D published by user; reviews moved, just-listed grid, Pershing/Ferretti live, homepage SEO (working copy E)

- **User published D** `192883654699`, now MAIN. It includes the Search Console fixes and the brokerage-first homepage. C `192880148523` is the rollback.
- **New working copy "Azure Savor – E"** `192886964267`, duplicated from MAIN D. Files pulled fresh; they were identical to D. [Preview](https://yra0nf-ec.myshopify.com/?preview_theme_id=192886964267)
- **Live store data (approved by user):**
  - **2020 Pershing 8X – ALEXANDRA** (7612249931819) and **2023 Ferretti Yachts 720 – HULL #4** (7612248948779) set to ACTIVE and published to the 5 channels. Both pages return 200 with price and offer markup.
  - Both added to **Featured yachts for sale**, which now has 5: Wally 48, Azimut 50, Sunseeker Predator 68, Pershing 8X, Ferretti 720.
  - New automated collection **Just listed** `just-listed`, id 697667911723. Condition: product type = "Yacht Listing". Sort: newest first. Published. It updates itself when a listing is added.
- **Theme E (tag `[b7d9a3fa]`):**
  - `templates/index.json`: the second section now shows the **3 newest listings** from `just-listed`: eyebrow "New listings", heading "Just listed", link "All yachts for sale". Today: Canados 571, Horizon ARLENE, Canados 493. The reviews section is removed from the homepage.
  - `templates/page.charters.json`: the **reviews section** (6 Google charter reviews, 5.0 from 7) is moved here, between "How chartering works" and "Charter questions".
  - `snippets/meta-tags.liquid`: **homepage SEO**, which takes priority over Online Store › Preferences on the homepage only.
    - Title: "Yachts for Sale in South Florida | Azure Yacht Group" (was "Azure Yacht Group").
    - Meta description, new; there was none: "Yacht brokerage in Fort Lauderdale. Browse yachts for sale and new boats in stock, sell your yacht with a broker, or book a South Florida yacht charter."
- **Unchanged:** the "New in Stock" menu item and the hero button still go to `/collections/new-boats-in-stock` (the 2 Canados).
- **Note:** "Just listed" includes ARLENE. Her listing email bars internet advertising without the central agent's written consent (Merle Wood). USER: get consent or set ARLENE to draft.
- **USER:** preview and publish E.

## 2026-11-06 21:00 · session `b7d9a3fa` · Brokerage-first homepage and funnel (working copy D)

- **User request:** put the accent on brokerage and new boats in stock. Charters and new construction become secondary.
- **Live store data (low risk, not linked anywhere until D is published):**
  - New collection **New boats in stock** `new-boats-in-stock`, id 697665552427. Manual sort. Contains: 2026 Canados Gladiator 493 Grand and 2026 Canados Gladiator 571 Blade, both in Fort Lauderdale. SEO title and description set. Published to the same 5 channels as yachts-for-sale.
  - New menu **Azure main menu – brokerage first** `azure-main-menu-brokerage`, id 321616609323, used only by D:
    - Buy, with: All yachts for sale, New boats in stock, Motor yachts, Performance & sport, Sportfish & center consoles, Sailboats.
    - New in Stock.
    - Sell.
    - Charters, with the same submenu as before.
    - New Construction: Azure Yachts, Franco Gnessi / DYD, How a build works, plus Yacht design, Designers and Naval architects, moved here from the old top-level Design item.
    - About.
    - Contact.
  - The live menu `azure-main-menu` is unchanged.
- **Theme D** `192883654699` (tag `[b7d9a3fa]`):
  - `templates/index.json`, new order:
    1. Hero: "Yachts for sale in South Florida". Eyebrow "Yacht brokerage · Fort Lauderdale". Buttons: Yachts for sale / New boats in stock / Sell your yacht. Photo: Sunseeker Predator 68 from featured-yachts-for-sale, replacing the Azure concept rendering.
    2. New boats in stock (grid).
    3. Featured yachts for sale.
    4. How buying a yacht works, 4 steps: needs → showing and offer → sea trial and survey with deposit in escrow → closing and delivery.
    5. Selling your yacht? (CTA).
    6. Brands.
    7. Why buy and sell with Azure: one team; new boats in stock; terms in line with IYBA practices; based in Fort Lauderdale.
    8. Charters, new construction and services (cards).
    9. Featured charter yachts, 3 instead of 6.
    10. Azure Yachts new construction.
    11. Reviews.
    12. About: "Yacht brokerage, new boats, charters and builds".
    13. Contact.
    - "How chartering works" and the charter "Locations" block are **disabled**, kept in the file for revert.
  - `sections/header-group.json`: header menu → `azure-main-menu-brokerage`.
  - `sections/footer-group.json`: CTA band order Buy / Sell / Charter. Footer columns: Buy & Sell, Brands, Charter, Company.
  - `snippets/azure-inquiry-form.liquid`: "Interest" defaults to "Buying a yacht". "Chartering" is preselected on charter and FAQ pages, "Something else" on service pages.
  - `templates/page.buy.json`: "New boats in stock" grid added after Current listings. Hero text mentions new boats in stock. Hero photo: Wally 48.
- **Preview check:** home and Buy page render. The menu shows the new order. On the homepage the form defaults to Buying; on charter pages the charter form is unchanged.
- **Not changed:** the reviews are all charter reviews (no brokerage reviews exist; none invented). The homepage SEO title is in Online Store › Preferences.
- **USER:** review the preview and publish D. Optionally add more listings to "Featured yachts for sale" (it has only 3) and to "New boats in stock" when other new boats are in stock.
- **Revert:** don't publish D, or restore `/tmp/index.D.orig.json` and the header menu.

## 2026-11-06 20:25 · session `b7d9a3fa` · Search Console "Product snippets" error fixed in working copy D

- **Error (critical, first detected 4 Nov):** Either "offers", "review", or "aggregateRating" should be specified. Example: `/products/4-days-island-hopping-in-puerto-rico`, which is priced at $0.00 and so shows "Upon request".
- **Cause:** upon-request / $0 listings got a Product JSON-LD with no Offer, and Google treats that as invalid.
- **Fix (D `192883654699`, `snippets/azure-product-schema.liquid`, tag `[b7d9a3fa]`):** upon-request / $0 listings now output **no** Product JSON-LD. Priced listings are unchanged: full Offer with return and shipping fields.
- **Check:** all 38 product pages on D. 29 have valid Product/ProductGroup markup (11 + 18). The 9 no-price listings have none. No JSON errors.
- **USER:** publish D, then click "Validate fix" on this error, and on the Merchant listings warnings.
- **Revert:** restore the previous POR branch: Product with name, url, description, image and brand, without offers.

## 2026-11-06 20:10 · session `b7d9a3fa` · Legal notice draft

- **Drafted** a Legal notice for Shopify › Settings › Policies (none exists today; the store has Contact, Privacy, Refund and Terms). It covers:
  - website operator: address, (754) 444-6729, orders@;
  - Florida yacht broker licensing (Ch. 326);
  - listing-accuracy disclaimer, prices in USD, "Upon request", new-construction renderings;
  - sales and charters governed by the signed agreements, with the IYBA alignment line;
  - trademarks and content rights, liability, governing law.
- **Placeholders, not invented:** state of formation, registration number, authorized representative, broker license number (or co-brokerage wording), governing law.
- **Finding:** Florida Sunbiz has **no "Azure Yacht Group LLC"**. Only "AZURE YACHT GROUP INC." `F21000006718` shows, status INACTIVE. The LLC may be registered in another state. USER/counsel: confirm the legal entity before publishing the Legal notice or the policies.
- **Finding:** Florida Ch. 326.004 requires a license to act as a yacht broker or salesperson for yachts over 32 ft. New-yacht sales are exempt. USER: confirm whose license covers the brokerage listings.
- **USER:** fill in the placeholders, have counsel review, then paste into Settings › Policies › Legal notice.

## 2026-11-06 19:55 · session `b7d9a3fa` · IYBA alignment note approved for the refund policy

- **User decision (Stan):** the refund policy may say it is in line with IYBA practices. This is a narrow exception to the "no IYBA claim" rule. It allows a statement of alignment with IYBA practices only. Still not allowed: membership claims, logos, or "IYBA broker".
- **Draft updated:** Yacht sales, point 1 now reads: "Our sale and refund terms are in line with the practices of the International Yacht Brokers Association (IYBA)."
- **No theme change.** D already links offers to `/policies/refund-policy`.
- **USER:** counsel review, then paste into Settings › Policies › Refund policy. Then publish D.

## 2026-11-06 19:45 · session `b7d9a3fa` · Return policy aligned with brokerage purchase-agreement practice

- **User:** returns should follow the IYBA brokerage standards, not retail terms.
- **Theme D** `192883654699`, `snippets/azure-product-schema.liquid` (tag `[b7d9a3fa]`): each offer's `hasMerchantReturnPolicy` now also has `merchantReturnLink` = `/policies/refund-policy`. The category stays `MerchantReturnNotPermitted`, which matches the purchase agreement: the deposit is refundable on rejection before written acceptance, and the yacht can't be returned after closing (as is, where is). Preview checked (Azimut 50, Eternal Spark): valid markup, no warnings.
- **Draft Refund and Cancellation Policy** prepared to replace Shopify's generic 30-day retail template. It covers:
  - the purchase agreement governs;
  - the deposit is held in escrow;
  - inspection, sea trial and survey before the accept/reject date;
  - written rejection, or no written acceptance, means the deposit is returned less expenses;
  - no returns after closing;
  - yachts are not shipped;
  - charters follow the signed charter agreement.
- IYBA is **not named** in the draft, because of the "no IYBA claim" rule.
- **USER:** have counsel review the draft, then paste it into Settings › Policies › Refund policy. Decide whether to name IYBA: only if Azure is a member or licensed to use the IYBA forms. Then publish D.

## 2026-11-06 19:20 · session `b7d9a3fa` · Search Console "Merchant listings" warnings fixed in working copy D

- **Report (6 Nov):** 0 critical issues, 14 valid items. Non-critical warnings: missing `hasMerchantReturnPolicy` (in offers) 14, missing `shippingDetails` (in offers) 14, missing `description` 8.
- **Causes:**
  - Shopify's `{{ product | structured_data }}` filter writes offers without a return policy or shipping details.
  - For products with several variants (charters), each variant inside the ProductGroup had no description.
- **New working copy "Azure Savor – D"** `gid://shopify/OnlineStoreTheme/192883654699`, duplicated from MAIN C 192880148523. [Preview](https://yra0nf-ec.myshopify.com/?preview_theme_id=192883654699)
- **Files changed (tag `[b7d9a3fa]`):**
  - `snippets/azure-product-schema.liquid`: priced listings get custom Product or ProductGroup JSON-LD instead of the filter.
    - Every variant has a description.
    - Every offer has seller "Azure Yacht Group LLC", `hasMerchantReturnPolicy` (US, `MerchantReturnNotPermitted`) and `shippingDetails` (US, `doesNotShip: true`).
    - Upon request / $0 listings are unchanged: Product with no Offer.
  - `sections/featured-product.liquid` and `sections/featured-product-information.liquid`: the filter is replaced by the same snippet.
- **Check:** all 38 product pages on D parse as valid JSON-LD with no missing description or offer fields. That's 11 Product with offer, 18 ProductGroup, and 9 upon request with no offer.
- **Waiting on USER:**
  1. Approve the two policy statements ("not returnable", "not shipped").
  2. Preview and publish D.
  3. In Search Console › Merchant listings, click "Validate fix" on each warning.
- **Note:** the live Refund policy (Settings › Policies) is still Shopify's generic 30-day retail template ("unworn, with tags", "[INSERT RETURN ADDRESS]"). It contradicts the markup and should be replaced.
- **Revert:** don't publish D (C stays live), or re-upload C's three files.

## 2026-11-06 18:35 · session `b7d9a3fa` · Charter categories; automatic price on request

- **Charter categories:** all 17 charter products (Charter Service, Charter Service - Superyacht, Yacht Charter, Charter Destination) are now in **Services > Entertainment & Recreation Services > Travel & Leisure** (`se-4-4`). Before, the categories were mixed (Uncategorized, Motor Boats, Boating & Water Sports, Outdoor Activities, none). Old boat-attribute metafields on a few charters were left as they were; they're harmless.
- **Price on request is now driven by price only.**
  - Deleted the manual `listing.price_on_request` from the Canados 493 (Stan's price $1,995,000), the Canados 571 ($3,450,000) and BULLET 200 (price $0).
  - No theme change was needed. Theme C already shows "Upon request" (and no Offer or og:price) when `price_max <= 100` (`blocks/price`, `snippets/azure-price`, `snippets/azure-product-schema`, `snippets/meta-tags`).
  - Live check: the Canados show $1,995,000 and $3,450,000; BULLET shows "Upon request".
  - Automation `161eef32` prompt now says: set the asking price if given, otherwise 0.00, and never set listing.price_on_request.
  - The metafield still works as a manual override if a priced listing ever needs to be hidden.

---

## 2026-11-06 18:10 · session `b7d9a3fa` · Product categories and category fields for all sale listings

- **Scope:** all 27 products of type Yacht Listing / New Construction / Brokerage Yacht / Center Console now have a Shopify category. Charter products are unchanged.
  - **Yachts** (`vp-2-3-4`): 22 products. Azimut 50, Wally 48 and 48 Hybrid Saloon Express moved here from Motor Boats.
  - **Motor Boats** (`vp-2-3-1`): 2018 Key West, Key West Billistic 281, Boston Whaler, Argonaut.
  - **Sailboats** (`vp-2-3-3`): Tartan 37, Azure 60 Sailing Catamaran.
- **Category metafields filled** (`shopify.*`): yacht-type / boat-type / sailboat-type, item-condition, fuel-supply, watercraft-features, hull-type, watercraft-hull-material. Values are set only where specs or sources support them.
  - Fuel was left empty for the Yacht Habit listings (their "Twin Diesel" looks like a placeholder) and for the Canados 493 (sources conflict).
  - Existing values were kept (GEKO, BULLET, Reel Deal, Tartan).
- **Enabled standard metaobject definitions** `shopify--hull-type` and `shopify--watercraft-hull-material`. Created entries: fuel hybrid; yacht-type sailing; hull monohull and catamaran; material fiberglass, aluminum and steel; boat-type center-console; sailboat-type catamaran.
- **Automation `161eef32` prompt updated** so new listings get a category and category fields automatically.

---

## 2026-11-06 17:40 · session `b7d9a3fa` · Both Canados drafts: location Fort Lauderdale

- Stan confirmed that both Canados are in Fort Lauderdale.
- Products `15479585439787` (493 Grand, was Miami) and `15479595139115` (571 Blade, was "South Florida"):
  - yacht_specs.location and brokerage_specs.location set to "Fort Lauderdale, Florida";
  - description location text, SEO title and description, and image alt text updated;
  - tag `miami` replaced with `fort lauderdale`;
  - note added to internal.broker_notes.
- Both are still DRAFT.

---

## 2026-11-06 17:30 · session `b7d9a3fa` · Placeholder Ferretti/Pershing replaced with real boats; new DRAFT Canados 571 Blade

- **Why:** the Sept 2025 listings "2019 Ferretti 720" (`7612248948779`) and "2020 Pershing 82" (`7612249931819`) were placeholders. Each had one Unsplash stock photo, no source, specs that don't fit the models and unverified claims. No matching boat exists on the market. Stan chose to replace them with real boats.
- **`7612249931819` is now "2020 Pershing 8X – ALEXANDRA"**, handle `2020-pershing-8x-alexandra`. Status DRAFT.
  - $3,995,000; Fort Lauderdale; HIN XFAP8X05I920; MLS 2851104; central agent Luke Brown.
  - 41 real photos; specs from the MLS.
  - Tags type:performance, fort lauderdale (replaces miami).
- **`7612248948779` is now "2023 Ferretti Yachts 720 – HULL #4"**, handle `2023-ferretti-720-hull-4`. Status DRAFT.
  - $3,850,000; Stuart, FL; central agent Luke Brown.
  - 44 real photos; specs from the Biagio co-listing.
- **Redirects:** `/products/2019-ferretti-720-for-sale` → `/products/2023-ferretti-720-hull-4` and `/products/2020-pershing-82-performance-yacht` → `/products/2020-pershing-8x-alexandra`.
- **Stale metafields:** deleted crew_size / guest_capacity where no source supports them.
- **New DRAFT `15479595139115` "2026 Canados Gladiator 571 Blade 57' – 100% Capri Edition"**, handle `2026-canados-gladiator-571-blade`.
  - Price on request; location "South Florida".
  - Twin Scania N16 CR3 1,150 HP surface drives; 57'4" x 15'9"; 660/159 gal.
  - 7 dealer images, partly renderings.
  - Source: YW 10375919, which blocks direct downloads, so data came from the Denison co-listing and Marine Business.
  - Added to yachts-for-sale. Open questions are in `internal.broker_notes`.

---

## 2026-11-06 16:55 · session `b7d9a3fa` · Email watcher: allowed senders

- Automation `161eef32-…`, trigger `message_received`: now accepts mail only from **irnbrue@gmail.com, stan@yachthabit.com and stan@azureyachtgroup.com**, sent to stan+listings@azureyachtgroup.com. Mail from anyone else is ignored. The `message_sent` trigger (self-forwards) is unchanged.

---

## 2026-11-06 16:45 · session `b7d9a3fa` · DRAFT listing Horizon 76 ARLENE; email watcher fix

- **Email watcher fix:** automation `161eef32-be9d-4007-a309-ca4d8c8afb67` only listened for `message_received`. When Stan forwards from his own account, Gmail labels the message SENT, so nothing fired. Added a second trigger, `message_sent`, with to contains stan+listings@azureyachtgroup.com. The prompt's duplicate check prevents double listings.
- **Product** `gid://shopify/Product/15479587176491`, "2009 Horizon 76' Motor Yacht – ARLENE", handle `2009-horizon-76-motor-yacht-arlene`. Status **DRAFT**, brokerage-template, tags brand:horizon / type:motor-yacht / listing:for-sale / will trade.
  - Price $1,195,000, as in the email (YachtWay and others show $1,095,000 since 1 Nov; to confirm).
  - Specs from the email plus the MLS listing (yachtbroker 2846136).
  - 36 photos, including the layout.
  - Added to yachts-for-sale.
  - Central agent: Iain Lawrie, Merle Wood. Details are in `internal.broker_notes`.
- **Do not publish yet:** the Merle Wood email forbids internet advertising without the central agents' prior written consent.
- **Revert:** delete the product.

---

## 2026-11-06 16:20 · session `b7d9a3fa` · New DRAFT listing: 2026 Canados Gladiator 493 Grand

- **Product** `gid://shopify/Product/15479585439787`, "2026 Canados Gladiator 493 Grand 49' Center Console", handle `2026-canados-gladiator-493-grand`. Set up like Reel Deal:
  - status **DRAFT**; type Yacht Listing; vendor Azure Yacht Group; template `brokerage-template`;
  - tags brand:canados / listing:for-sale / type:sportfish-center-console / miami / new;
  - yacht_specs and brokerage_specs: 49 ft, beam 14, 2026, Canados, fiberglass, twin Volvo 2 x 440 HP, 60 kn max, 30 kn cruise, 2 cabins, Miami;
  - `listing.price_on_request` = true, variant price $0 (the dealer shows "Contact for price");
  - SEO set; 15 dealer photos.
- **Collections:** yachts-for-sale (manual), plus sportfish-center-console and latest-listings (smart, automatic).
- **Sources:** YachtWorld 10049338 (given by the user) and the Yachting Experts dealer listing 2846105.
- **Private notes:** dealer contact, third-party prices ($1.995M / $2.1M, unconfirmed), spec conflicts (cruise speed, fuel type, draft) and photo rights are in `internal.broker_notes`.
- **Not set:** `shopify.yacht-type`, because the product category needs to be set first. Draft left blank.
- **Revert:** delete the product.

---

## 2026-11-06 15:55 · session `b7d9a3fa` · Theme C published; email-to-listing automation

- **Theme "Azure Savor – C" `192880148523` is now MAIN.** The user published it on 6 Nov. Rollback: B `192766771243`. Theme A `192719683627` is obsolete and can be deleted.
- **Gmail connected** (stan@azureyachtgroup.com, Google Workspace).
- **New automation "New yacht listing from forwarded email"** (id `161eef32-be9d-4007-a309-ca4d8c8afb67`). It runs when a Gmail message to **stan+listings@azureyachtgroup.com** arrives. Each run creates a **DRAFT** product modelled on the Reel Deal listing:
  - Yacht Listing / brokerage-template / brand:, listing:for-sale and type: tags;
  - specs taken only from the email;
  - co-broker details go in `internal.broker_notes` only;
  - adds it to `yachts-for-sale`;
  - logs the work here and in PLAN.
  It never publishes and never sends email. To stop it, pause or delete the automation in Perplexity.

---

## 2026-11-06 15:45 · session `b7d9a3fa` · Azimut 55, Yacht Habit placeholders, Hallandale → Fort Lauderdale, new working theme C

**Live store data (user approved 6 Nov):**
- **Azimut charter** `7608104484907` ("Azimut 55 Charter – South Florida"): the user confirmed 55 ft. `yacht_specs.length_ft` 2022 → 55, `charter_specs.model` "50 Flybridge" → "55 Flybridge", `charter_specs.length_ft` "50ft" → "55ft". Deleted `charter_specs.price` ($1,495,000, copied from the sale listing). The handle `2022-azimut-50-flybridge` is unchanged.
- **Yacht Habit listings:** "Make: N/A" set from the product name (Sunseeker, Ferretti Yachts, Post, Boston Whaler, Argonaut). "Model: N/A" removed, except Post → 42. "Length: N/A" → Post 42 ft and Argonaut 26 ft (from `yacht_specs.length_ft`). Products 7782191071275, 7782191104043, 7782191169579, 7782191267883, 7782191300651.
- **Hallandale Beach removed (user request):** 11 page bodies (about, design, sell-your-yacht, service-maintenance and 6 designer pages): contact line → "1314 E Las Olas Blvd #2256, Fort Lauderdale, Florida". The About intro → "We are based in Fort Lauderdale, Florida". The About SEO description → "based in Fort Lauderdale, Florida". The Post 42 listing keeps Hallandale Beach as the boat's location.

**Theme:**
- **New working theme "Azure Savor – C" `gid://shopify/OnlineStoreTheme/192880148523`**, created with `themeDuplicate` from MAIN B 192766771243. [Preview](https://www.azureyachtgroup.com/?preview_theme_id=192880148523)
- `templates/index.json`: 2 texts, "based in Hallandale Beach" → "based in Fort Lauderdale". `templates/page.about.json`: "one team in Hallandale Beach, Florida" → "one team in Fort Lauderdale, Florida".
- Preview check (111 URLs on C): "Hallandale" appears only for the Post 42 boat location.
- **USER: publish C.** Rollback: re-publish B.

**Pending:** policy placeholders (draft sent to the user for approval).

## 2026-11-06 15:20 · session `b7d9a3fa` · Site check, charter-services redirect, Las Olas address, test inquiry attempt

- **Status found:** "Azure Savor – B" `192766771243` is MAIN (live). The pages "Charter terms" and "Brokerage disclaimer" are published. azureyachtgroup.com redirects to www, which is served by Shopify.
- **Site check (live B, 110 URLs from the sitemap plus extras):** all return 200 except `/pages/charter-services` (now redirected). Every page has exactly one H1. There are no Liquid errors, no $0.00 prices, no "Azure 48" text, no Udo Willersinn, and no Add to cart. The Wally 48 description and the collection texts are already fixed. C-2 is resolved by the 3-page Design split, and the Brokerage page has content.
- **Live data (user approved 6 Nov):**
  - URL redirect `/pages/charter-services` → `/pages/charters` (`gid://shopify/UrlRedirect/610895757355`). **Revert:** delete the redirect.
  - Shop metafield `azure.contact_location`: "Hallandale Beach, Florida" → "1314 E Las Olas Blvd #2256, Fort Lauderdale, Florida" (user decision, matches Google Business Profile). The footer, contact and brokerage contact blocks now show it. **Revert:** set it back.
- **Test inquiry:** sent from `/pages/contact` (name "Test – Perplexity", stan@). Shopify's hCaptcha challenge appeared, and it's not confirmed whether the message went through. USER: check the stan@ inbox. If nothing arrived, send one test from a normal browser.
- **Still showing "Hallandale Beach" (text, not the metafield):** homepage text in theme MAIN (needs a theme copy), the About page body (3×), and the Post 42 listing location (the boat's location, correct as is).
- **Found, needs the user:**
  - `2022-azimut-50-flybridge` is titled "Azimut 55 Charter", but its metafields say 50 Flybridge, `length_ft` = 2022 and price $1,495,000 (copied from the sale listing). Is she 50 or 55 ft?
  - 5 active Yacht Habit listings still have placeholder descriptions ("Make: N/A Model: N/A"): 2018 Sunseeker, 1998 Ferretti, 2008 Post 42, 1999 Boston Whaler, 2023 Argonaut.
  - Policies still have placeholders: Terms ([INSERT TRADING NAME], address, phone, registration, VAT) and Refund ([INSERT RETURN ADDRESS]). Trading name confirmed: Azure Yacht Group LLC. A draft goes to the user for review before saving.

## 2026-11-04 14:15 · session `f1f8b884` · Sea Force IX "Reel Deal": co-broker contact kept internal

- The user asked that the listing broker (Marco Morjain, Reel Deal Yachts) not appear on the website.
- I checked the live description and tags: they have no broker name, phone or email. The live theme "Azure Savor – A" doesn't show `custom.*` metafields, so `custom.source_url` is visible in the admin only.
- **New metafield definition:** `internal.broker_notes` "Internal broker notes" (multi-line text, storefront access NONE). ID `gid://shopify/MetafieldDefinition/612745805867`. Use it for co-broker contacts on any listing.
- I filled it on product 15471929655339 with the broker's name, phone, email, source URL, asking price, the trade note and the HIN.
- **Rule for all sessions:** never show `internal.*` fields in theme files.
- **Revert:** delete the metafield or its definition.


## 2026-11-04 14:05 · session `f1f8b884` · New brokerage listing: 2005 Sea Force IX 82' "Reel Deal" (live data, user-requested)

- **Product created and ACTIVE:** `gid://shopify/Product/15471929655339`, handle `2005-sea-force-ix-82-sportfish-reel-deal`, [live page](https://www.azureyachtgroup.com/products/2005-sea-force-ix-82-sportfish-reel-deal).
  - Title "2005 Sea Force IX 82' Sportfish – Reel Deal"; type `Yacht Listing`; vendor `Azure Yacht Group`; template `brokerage-template`.
  - Price $2,795,000 (SKU `SFIX82-2005`, inventory not tracked, policy CONTINUE).
  - Tags: `brand:sea-force-ix`, `listing:for-sale`, `type:sportfish-center-console`, `brokerage`, `for sale`, `sportfish`, `miami`, `refit`, `will trade`, `sea force ix`.
  - `yacht_specs`: length 82, beam 23 (22.92 rounded), year 2005, builder Sea Force IX, fiberglass, twin MTU 16V2000 (2 × 2,000 HP), max 28 kn, cruise 25, draft 5.4, cabins 4, crew 3, home port South Florida, location North Miami Beach. `brokerage_specs` mirrored. `custom.source_url` = Reel Deal Yachts listing.
  - SEO title and description set. 33 photos from the co-broker listing (boatsgroup CDN), all READY.
  - Description written from the Reel Deal Yachts brochure and listing page. Dated items such as the iPod, DVD and old TV sizes were left out because the refit says all TVs are new. The HIN and the listing broker's contact details are not shown.
- **Channels:** published to Online Store, Facebook & Instagram, Google & YouTube, TikTok and Pinterest, the same as other listings.
- **Collections:** joined `sportfish-center-console-boats-for-sale` automatically through its tag rule, and was added by hand to `yachts-for-sale` (291760177195), which now has 16 products. There is no Sea Force IX brand collection.
- **Source / co-broker:** Marco Morjain, Reel Deal Yachts, 305-796-0040, reelboats@gmail.com. Asking price $2,795,000; the owner will consider trades.
- **Revert:** delete product 15471929655339, or set it to DRAFT.

## 2026-11-04 14:30 · session `359247fc` · Theme A is live; site check and fixes in theme B

**Status found:** "Azure Savor – A" `192719683627` has been MAIN (live) since about 19:21 UTC on 3 Nov. azureyachtgroup.com now points to Shopify (A 23.227.38.65, www → shops.myshopify.com). The user made **"Azure Savor – B" `192766771243`**, a copy of A, as the new working theme. The connector can't edit MAIN, so every fix below is in B and waits for the user to publish it.

**Site check (live theme A, 112 URLs from the sitemap plus extras; desktop and 390 px mobile screenshots of home, charter, brokerage, new-construction and weekly-charter pages and a collection):** 109 returned 200 and 3 returned 404. Each page has one H1, except search (none, fixed) and the cart (two, not used). There are no Liquid errors, no missing translations, no Add to cart forms and no mention of Udo Willersinn. The `/cart/…:1` and `cart_add_url` hits are Shopify's own UCP/JS links and are harmless.

**Fixed in theme B:**
- `blocks/price.liquid`: yachts with price ≤ $1 or `listing.price_on_request` now show "Upon request" instead of "$0.00 USD" (search results showed $0.00 for Azure Luxury 120). Hook tag `[359247fc]`.
- `sections/search-header.liquid`: the search page heading is now `<h1 class="h3">`; it had no H1.
- `sections/azure-hero.liquid`: `/collections/all` is titled "All yachts" instead of "Products" and uses the first product's photo.
- `snippets/azure-inquiry-form.liquid`: if `weekly_charter.rate_display` contains €, the charter option shows that rate instead of the store-currency price. Le Ponant showed "Weekly – $540,000"; it now shows "Weekly – From €540,000 / week".
- `sections/footer-group.json` › `custom_section_76dqAh`: `padding-block-end` changed from 0 to 36, so the Brands list ("Tartan") no longer touches the divider line.
- `templates/article.json`: the blog post image block is now bound to `{{ closest.article.image }}`. The "Introducing Axiom 48 Hybrid" post was showing a placeholder.
- `assets/azure-yacht.css`, tagged block `[359247fc] contrast`: the hero label is lighter (#f0d08a) with a shadow; a dark gradient at the top of `.ay-hero` and `.ay-phero` keeps the white menu readable on light photos (Vantage 85); the bottom gradient on titled product heroes is stronger.
- All of these were checked in the B preview.

**Not fixed (live data or a user decision):**
- `/pages/charter-terms` and `/pages/brokerage-disclaimer` return 404 on the live site. They are still hidden, but the live terms note links to them from 17 charter and 12 brokerage pages. They need publishing (user approval).
- "Azure 48" still appears in the descriptions and SEO text of the collections `yacht-design-services` and `new-construction`.
- 2021 Wally 48: the description says "Luxury yacht available through Yacht Habit. Make: N/A, Model: N/A".
- `/products/2022-azimut-50-flybridge` has the SEO title "Azimut 55 Yacht Charter…" and duplicates `/products/azimut-50-2022`.
- The site says the business is in Hallandale Beach, but the Google Business Profile address is 1314 E Las Olas Blvd #2256, Fort Lauderdale.
- `/pages/charter-services` returns 404, but nothing links to it any more.

## 2026-11-03 19:25 · session `359247fc` · Real Google reviews on the homepage (theme A)

**Theme "Azure Savor – A" `192719683627` (not live until published):**
- Google Business Profile connected (account "Stan Zemskov", location "Azure Yacht Group" `locations/14543491572307800175`, 1314 E Las Olas Blvd #2256, Fort Lauderdale). The location has 7 reviews, all 5 stars.
- `sections/azure-testimonials.liquid`: added a `rating` (stars) setting to each review block and section settings `summary`, `link_url` and `link_label`. The star row and the "Read all reviews on Google" link use small inline styles inside the section, so `azure-yacht.css` is unchanged.
- `templates/index.json` › `testimonials`: 6 review blocks `gr_1–gr_6`. Quotes are taken word for word from Google, some shortened with "…". Names are shown as first name + initial. "Bad Ugly" is shown as "Birthday charter guest", and two reviews are Google translations from Russian and are labelled that way. The "burner" review is not shown. Summary: "5.0 from 7 Google reviews". Link: https://maps.google.com/maps?cid=17813719760287874200
- The section used to be hidden because it had no reviews. It now shows on the A homepage between Locations and About.
- **Revert:** delete blocks `gr_1–gr_6` (the section hides itself again). The new schema settings are harmless.
- **Rule from the user:** Udo Willersinn must not be mentioned on the website. Checked: none of theme A's 565 files and no store page mention him.

## 2026-11-03 19:10 · session `359247fc` · Round A: inquiry-only, build payments, charter terms, brokerage disclaimer, catamaran, Le Ponant / Ascente

**Theme "Azure Savor – A" `192719683627` (not live until published):**
- **Inquiry-only:** `config/settings_data.json` sets `current.quick_add` and `mobile_quick_add` to false. Search and collection cards no longer render `<quick-add-component>` or `/cart/add` forms. On the A preview: search had 13 forms before and 0 after. Charter and brokerage product templates already had no buy buttons. No product uses the default `product.json`, which still has buy-buttons; it is left as is. **Revert:** set both to true.
- **Payment stages for fiberglass and aluminum builds** in `sections/azure-build-process.liquid`:
  - The `payment` block now has a `material` setting. A block without the setting counts as `metal`.
  - The rule that hid payments for composite and aluminum builds is removed.
  - New settings `composite_payment_heading` and `aluminum_payment_heading`.
  - `product.new-construction.json` › `process`: `pay_1–7` set to metal. Added `gpay_1–6` for fiberglass (10 / 20 / 20 / 20 / 20 / 10: signing, start of lamination, hull & deck laminated, deck joined & engines installed, launch & sea trials, delivery) and `apay_1–6` for aluminum (10 / 15 / 20 / 20 / 20 / 15: signing, plate cutting, hull plated & turned, superstructure welded & engines in, launch & sea trials, delivery).
  - Indicative milestone shapes based on published build-contract guidance. Each project's terms are set with the yard.
  - Checked on the A preview: Vantage 85 shows the aluminum schedule, 48 Hybrid Hard Top the fiberglass schedule, and Geko the Italian-yard steel schedule.
- **Terms note:** new Azure block `blocks/azure-terms-note.liquid`. It picks the text from `azure-yacht-kind`: charter yachts get a deposit/cancellation line with a link to `/pages/charter-terms`, yachts for sale a disclaimer line with a link to `/pages/brokerage-disclaimer`, and new builds nothing.
  - Added as block `terms_note` after `yacht_inquiry` in `product.charter.json`, `product.charter-template.json`, `product.weekly-charter.json` and `product.brokerage-template.json`.
  - Checked on the preview for Fjord, Eternal Spark and Wally 48.
  - **Revert:** remove `terms_note` from those 4 templates.
- **Design page:** `templates/page.design.json` intro now says "…to a 60 ft performance sailing catamaran, motor yachts…".

**Live store data (live now):**
- **Pages created HIDDEN** (isPublished false) for the user to review and publish together with theme A:
  - "Charter terms" `charter-terms` `gid://shopify/Page/706689892395`. Day charters: 50% deposit, balance 7 days before, cancellation >14 days refund less 10% or move the date, 7–14 days deposit kept with one reschedule, <7 days full fee, captain's weather call. Weekly/superyacht: MYBA 50/50 + APA 30 days before, cancellation per MYBA.
  - "Brokerage disclaimer" `brokerage-disclaimer` `gid://shopify/Page/706689925163`. Standard good-faith / prior-sale wording, co-brokerage, photos, USD asking prices, survey.
  - **The user must confirm the charter numbers** against supplier agreements before publishing.
- **Azure 60:** product `15468236308523` renamed to **"Azure 60 Performance Sailing Catamaran"**. Description and SEO updated, `new_build.category` = "Sailing catamaran". The original old-site render (Tilda `MCy7nD1r7F0WF6IdXSWh.png`, the catamaran under sail at sunset) is restored as the only image (`MediaImage/46861971947563`). The AI monohull illustration `46841917997099` is detached from the product but kept in Files. The handle is unchanged.
- **Le Ponant** `7811360456747`:
  - Added 2 photos from Wikimedia Commons, both in Files: "Le Ponant at Amalfi" by Arnoldius (CC BY-SA 3.0) and "LE PONANT 2365" by Ein Dahmer (CC BY-SA 4.0). A credit line was added to the description.
  - Crew changed from 32 to 34, per Fraser, Mystique and YachtCharterFleet. `weekly_charter.rate_display` = "From €540,000 / week", so the rate is no longer shown as $540,000.
  - **Open:** listings disagree on whether she is all-inclusive or €540k plus 25–35% APA. The description still says all-inclusive.
- **Ascente** `7805747527723`:
  - Refit 2017 → 2025 (`year_refit` = 2025), crew 6, guests worded as "12 cruising (10 overnight)".
  - Added a note that she is foreign-flagged and that charters for U.S. residents in U.S. waters are confirmed at inquiry. Fraser states "Not for sale or charter to U.S. residents while in U.S. waters". She was sold in 2025 and is now marketed as a bareboat charter.
  - Alt text added to 38 photos.

**Checked, no change needed:**
- Geko and Axiom 48 on LIVE show "On request", with no $0 and no Add to cart.
- Hull material is already set on all 7 in-house models: 48s, Axiom and Azure 60 Fiberglass; Vantage 85, Azure 80, Luxury 120 and Magic Carpet 130 Aluminum.
- **IYBA:** Azure Yacht Group is not in the public IYBA member directory (23 pages checked). "Udo Willersinn" is listed under YachtSalesInternational.com. Do not claim IYBA membership or certification for Azure.

**Testimonials:** the Google Business Profile connection prompt was shown to the user and is pending. Use only real Google reviews.

## 2026-11-03 18:55 · session `359247fc` · New working theme "Azure Savor – A" + product-page H1 fix

- **New working theme:** the user duplicated MAIN as **"Azure Savor – A"** (`gid://shopify/OnlineStoreTheme/192719683627`, created 18:40). It was checked as identical to MAIN `192712441899` (563 files, all checksums equal). [Preview](https://azureyachtgroup.myshopify.com/?preview_theme_id=192719683627). **All theme work for this round goes here.** The user publishes it when the round is done.
- **Theme list note:** the old rollback copy `192657260587` and the `rickspartsusa` export no longer exist. The Savor 3.2.1 rollback is now `192712409131`.
- **H1 fix (theme A only):** Savor's `blocks/product-title.liquid` hard-codes `<p role="heading" aria-level="3">`, so charter, weekly-charter and brokerage pages had no H1.
  - Added the Azure-owned block `blocks/azure-product-title.liquid`, a copy of the Savor block that outputs `<h1 class="ay-product-title">` with inherited font, so the look is unchanged. It survives Savor updates because it is a separate file.
  - Changed block `main › product-details › product_title_tefwj7` from `product-title` to `azure-product-title` in `product.json`, `product.charter.json`, `product.charter-template.json`, `product.brokerage-template.json` and `product.weekly-charter.json`.
  - `product.new-construction.json` was not changed because `azure-product-hero` already outputs the H1.
  - Recommendation-card titles still use Savor's block.
- **Checked on the A preview:** exactly 1 H1 on Fjord 41 XL, Sea Ray 60, Eternal Spark, Y-8, Wally 48 and 48 Hybrid Hard Top.
- **Revert:** set the block type back to `product-title` in those 5 templates and delete `blocks/azure-product-title.liquid`.

## 2026-11-03 18:35 · session `359247fc` · Featured yachts for sale collection

- **What:** created the manual collection **Featured yachts for sale** (`featured-yachts-for-sale`, `gid://shopify/Collection/697298747435`), sort MANUAL, published to Online Store. Products in order: 2021 Wally 48 (`7782191136811`), Azimut 50 2022 (`7608080695339`), 2018 Sunseeker Predator 68 (`7612250554411`).
- **Sunseeker choice:** the user asked for "Sunseeker". We used the Predator 68 because it has the complete listing. The other listing, "2018 Sunseeker" (`7782191071275`, 95 ft, Yacht Habit import), has only placeholder details. Swap it in the collection if the user wants that one.
- **Theme NOT changed** (MAIN is blocked). **USER step:** Customize › Home page › Yachts for sale (`featured_sales`) › Collection = Featured yachts for sale › Save. The "All yachts for sale" button keeps linking to `/pages/buy-a-yacht`.
- **DONE by the user:** `featured_sales.collection` = `featured-yachts-for-sale` on MAIN. The live homepage was checked and shows only Wally 48, Azimut 50 and Predator 68.
- **Revert:** set the section collection back to `yachts-for-sale`, then delete collection 697298747435.

## 2026-11-03 18:10 · session `359247fc` · Featured charter yachts collection

- **What:** created the manual collection **Featured charter yachts** (`featured-charters`, `gid://shopify/Collection/697298223147`), sort MANUAL, published to Online Store. Products in order: Fjord 41 XL (`7787017502763`), Sea Ray Sundancer 60 (`7787017175083`), Eternal Spark (`7787119116331`).
- **Why:** the user wants only these 3 yachts in the homepage "Featured charter yachts" section (`templates/index.json` › `featured_charters`, type `azure-yacht-grid`, currently `collection: charter-fleet`, `limit: 6`).
- **Theme NOT changed:** 192712441899 is now MAIN, and `themeFilesUpsert` is blocked on the live theme. **USER step:** Online Store › Themes › Customize › Home page › Featured charter yachts › Collection = Featured charter yachts › Save. The "All charter yachts" button keeps linking to `/pages/charters`.
- **To change the featured yachts later:** add or remove products in this collection, then drag to reorder. No theme edit needed.
- **Prepared, not uploaded:** an optional `product_list` setting ("Pick yachts manually") for `sections/azure-yacht-grid.liquid`, for the next draft theme. It is not needed while the collection approach is in use.
- **18:25 DONE by the user:** `featured_charters.collection` = `featured-charters` on MAIN 192712441899. The live homepage was checked and shows only these 3 yachts.
- **Revert:** set the section collection back to `charter-fleet`, then delete collection 697298223147.

## OPEN CONFLICTS

### C-1 · `assets/azure-yacht.css` overwritten · RESOLVED 22:16 by f56cb0f2
- The 21:53:56 upload had replaced the CSS that `f56cb0f2` added between 19:38 and 21:35.
- **Fix (22:16):** `f56cb0f2` pulled the current remote file and merged its latest CSS with the `a83350eb` lines 169–231. It checked the checksum before uploading the merged file.
  - Restored: `.ay-section--full`, `--tiles`, `--bgimg`, `--media`, the navy text colors, and the collection, blog and brand-strip rules.
  - Kept: the `a83350eb` blocks for designers, build process, yacht story, jump links, new-build summary and navy-form text.
- Its local files: `audit/c1/merged.css`, `remote.css`, `mine_latest.css`. To revert, upload `remote.css`, but that would lose the restored rules again.
- 22:21: `f56cb0f2` appended the block `/* [f56cb0f2] Weekly charter template */` (see the log below).
- **Still to do:** a preview check of every template on desktop and mobile.

### C-2 · Design page: two versions · OPEN · handed to a83350eb
- **Live site:** `f56cb0f2` wrote the live page text for `/pages/design` (104256012331) at 21:57. It added a "Designers we work with" section linking to six new designer pages.
- **Working copy:** `a83350eb` rewrote `templates/page.design.json` at 21:54: hero, approach, process steps, `azure-designers` section, New Construction link and inquiry form, with no listings. This template doesn't show the page's own text. After publishing, the six designer links would disappear unless they're added to the template.
- **Proposed fix (not done):** add the six designer pages to the `azure-designers` section in `page.design.json`, with name, short role and link to each page. Franco Gnessi's photo is already there. `f56cb0f2`'s page text stays as the live/SEO fallback.

- **Update 22:23 (`f56cb0f2`):** the live Design page now also has a **"Design portfolio"** section with 9 projects and images. **Ask for `a83350eb`:** add the six designer links and this portfolio to `page.design.json`; the CDN image URLs are in the entry below. `f56cb0f2` won't edit `page.design.json`.

### C-3 · `azure-main-menu` (working-copy header) restructured twice · RESOLVED by latest user instruction
- **21:23 (`f56cb0f2`):** Charters · Yachts for Sale · Sell Your Yacht · Services · About · Contact
- **About 21:50 (`a83350eb`)**, as the user asked in session a83350eb: Charters · Buy · Sell · New Construction · Design · About · Contact
- **Items dropped from the header by the second change:**
  - Day charters and Multi-day & weekly (still in footer `azure-footer-charter`)
  - Sailboats (still in footer `azure-footer-buy-sell`)
  - the Azure 48 link (now under New Construction › Azure Yachts)
  - Services › Service & maintenance (still in `azure-footer-company`)
- **Next:** `f56cb0f2` shouldn't rewrite this menu without checking with the user.

### C-4 · Footer `azure-footer-buy-sell` · RESOLVED
`a83350eb` replaced it at about 21:50: Yachts for sale · Sailboats · Sell your yacht · Yacht brokerage · New construction · Azure 48 range. The `f56cb0f2` brands column is a separate menu (`azure-footer-brands`) and is unchanged.

---

## 2026-11-03

### 17:58 · f56cb0f2 · Savor 4.4.0 theme PUBLISHED by the user
- **Themes:**
  - MAIN is now 192712441899 "Updated copy of Azure Savor – Rebuild (working …)" (Savor 4.4.0).
  - 192657260587 (Savor 3.2.1) is now UNPUBLISHED, kept as the rollback copy, along with backup 192712409131.
- **Live check (`?_fd=0`, 1024×693):**
  - No Liquid errors on home, collection, Design, FAQ, blog, contact, the Geko new build and the Sea Ray charter.
  - Heroes are 693/693. The blog is 600 + 93 header. Contact is a full-height form (867).
  - The phone number shows on every page. The charter gallery shows 11 of 62 photos with View all.
- **Project:** this work now continues in Perplexity Project "Azure Yacht Group – Shopify Storefront", which holds the theme backups and THEME-UPDATE-HOOKS.md.

### 17:00 · f56cb0f2 · Savor 4.4.0 update draft repaired + full-height heroes (DRAFT theme 192712441899, not live)
- **Themes:** the user added the Savor update as a draft, "Updated copy of Azure Savor – Rebuild (working …)" (192712441899, Savor **4.4.0**). They also made a backup, "Azure Savor – Rebuild (working copy) 11-03-26" (192712409131), identical to live. Live is still 192657260587 (Savor 3.2.1).
- **What the update kept:** all azure-* sections, blocks, snippets and assets unchanged; templates and menus kept; the 4 Jan-17 core edits and the ai_gen blocks kept.
- **What the update dropped (all re-done on the draft):**
  - the Contact details panel in settings_schema, plus its values in settings_data;
  - header (transparent header on New Construction and Azure pages, shop name as `<p>` instead of an extra `<h1>`);
  - product JSON-LD without a $0 Offer;
  - og:price skip;
  - gallery "first 11 photos + View all";
  - template settings `limit_grid_tiles` / `grid_tile_count`.
- **Other 4.4 changes:**
  - Shopify inserted a standard `main` section (page title / product grid) above the hero on every page.* and collection.* template. Removed again, so the hero is first.
  - Colour schemes were replaced by a colour palette. Header, footer and product pages compared against live: they match.
- **Update-proofing (new structure):**
  - Contact details now live in **shop metafields** `azure.contact_phone`, `azure.contact_email`, `azure.contact_whatsapp`, `azure.contact_location`, `azure.contact_service_area`. Edit them in Settings › Custom data › Shop. azure-cta-band, azure-inquiry, azure-inquiry-form, azure-contact-details, azure-contact-tel and azure-contact-wa read the metafields, so settings_schema stays stock.
  - The logic moved into our own snippets: `snippets/azure-product-schema.liquid` and `snippets/azure-gallery-limit.liquid` (11 photos, CSS `:has(~ .ay-gallery-more)`).
  - Savor's own files keep only **tagged one-line hooks** (`[f56cb0f2] Azure hook`), listed in OneDrive `THEME-UPDATE-HOOKS.md`:
    - `sections/product-information.liquid`: render azure-product-schema
    - `snippets/meta-tags.liquid`: og:price condition
    - `snippets/product-media-gallery-content.liquid`: render azure-gallery-limit after the grid `</ul>`
    - `sections/header.liquid`: New Construction-only product condition + page elsif + `<p>` shop name
- **Full-height heroes (user request):**
  - Changed from "tall"/"short" to Full screen on 8 templates: collection, collection.brand, blog, page.design, page.designers, page.naval-architects, page.new-construction, page.faq.
  - `azure-hero` gained `ay-hero--solidhdr`: on templates without a transparent header (blog), the hero is 100svh minus the header height.
- **QA (preview of 192712441899, 1024×693):**
  - 18 pages had no Liquid errors.
  - Every hero is 693/693; the blog is 600 + 93 header.
  - The phone shows on all pages.
  - Galleries: 11 of 62, 11 of 18 and 11 of 115 photos visible, each with the View all button.
- **Found:**
  - The **Shopify primary domain is azureyachtgroup.com, but that domain still serves the old Tilda site**. All myshopify URLs redirect there and Shopify pages show a Tilda 404. Testing works with `?_fd=0`. USER/DNS decision.
  - Charter/brokerage product pages have no `<h1>` (same on live; pre-existing).
- **Not live yet:** the user must publish 192712441899 in admin (connector blocks live-theme writes and publishing).
- Backups: `audit/upd/live_full/` (all 466 live files), `audit/upd/draft_full/` (draft as delivered by Shopify), `audit/upd/port/` (uploaded files).

---

## 2026-11-02

### 00:33 · f56cb0f2 · Aluminum build process, full-height hero, designer photos, 60 ft image, naval architects wording (working copy + live content)
- **User decisions (2 Nov):**
  - Keep the 5 new products Active.
  - Aluminum is confirmed for the Vantage 85, Azure 80, Luxury 120 and Magic Carpet.
  - Add a separate aluminum process.
  - Replace the 60 ft image.
  - Naval Architects page may say Azure "works with" the firms.
  - Use designer photos from the internet.
  - Publishing the working copy is approved.
- **Aluminum build process** (working copy; backups `audit/ds/al/bp.before.liquid`, `nc.before.json`):
  - `azure-build-process.liquid`: hull material containing "alumin" (without "steel") → new **aluminum** build type.
  - Aluminum builds get 7 phases: brief & spec; engineering & production design; plate cutting & hull framing; welding, deck & superstructure; fairing, insulation & paint; systems & interior outfitting; launch, sea trials & delivery.
  - Also 5 cost drivers, its own heading, intro and disclaimer, and **no payment stages**.
  - Geko ("Steel / aluminum") keeps the superyacht process with payments; fiberglass is unchanged.
  - Verified: Vantage 85 and Magic Carpet show the aluminum process; 48 Hard Top shows fiberglass; Geko shows steel with 7 payments.
- **New-construction hero = 100% screen height** (`azure-product-hero.liquid`, template height 100; backup `audit/ds/al/hero.before.liquid`):
  - Removed the 960px max-height; uses svh units.
  - **Fixed a bug:** `alt: img.alt | default: p.title, class: …` silently dropped the class, so the image was never styled. It sat at natural height, top-aligned and cut off at the bottom.
  - Alt is now assigned first. The image fills the hero (object-fit cover, centered); there is also an inline style fallback.
  - Verified at 1280/1440/1920: hero = viewport height, image = hero height, 50% 50%.
- **Designer photos** (Shopify Files, from each designer's own site or Azure's old About page):
  - marco-casali-designer.jpg (marcocasali.com)
  - jj-design-founders.jpg (jnj.design: Japec left, Jernej right)
  - david-weiss-designer.jpg (azureyachtgroup.com/aboutus)
  - jonathan-quinn-barnett-designer.jpg (jqbdesign.net; matched to the Boat International photo of Barnett)
  - kurt-strand-designer.jpg (strand-craft.com)
  - Set on `page.designers.json`. `azure-designers` gained a "Show the whole photo" block option, used for J&J, plus face-safe cropping (50% 22%). Backups: `audit/ds/ph/*.before`.
  - **Lesson:** upload a section with new settings BEFORE (separately from) the template that uses them, or the new setting is ignored until the template is re-saved.
- **60 ft sailing yacht** (LIVE product 15468236308523): the catamaran render was replaced with an AI concept illustration of a monohull sailing yacht (`azure-60-performance-sailing-yacht-illustration.jpg`, alt "… concept illustration"). The old file is kept in Files, detached from the product. **Swap in a real render when one exists.**
- **Naval Architects:**
  - Template section: eyebrow "Our partners", heading "Naval architecture firms we work with", text "Azure Yacht Group works with these naval architecture firms on new builds and design projects."
  - LIVE page body: same heading and text added.
  - SEO description now names all 5 firms. Doug Zurn is also listed as Naval Architect on Azure's old About page.
- **Publishing:** blocked through the connector (themePublish refused by safety policy). The user must publish "Azure Savor – Rebuild (working copy)" (192657260587) in Shopify admin. The old live theme 137386393643 stays as a backup.

### 00:12 · f56cb0f2 · LIVE: designer profiles link to /pages/yacht-designers; "Azure 48" renamed to "48 Hybrid" (user approved both)
- **6 designer profile pages** (Franco Gnessi, Marco Casali, J&J, David Weiss, Jonathan Quinn Barnett, Kurt Strand): "See all our yacht designers" now goes to /pages/yacht-designers instead of /pages/design. Backup: `audit/ds/profiles_before.json`.
- **Rename** (backups `audit/ds/rename_before.json`, `audit/ds/rn/`, `audit/ds/menu_*_before.json`):
  - **Products:** "Azure 48 Hybrid Saloon Express" → **48 Hybrid Saloon Express**; "Azure 48 Hard Top" → **48 Hybrid Hard Top**.
    - Descriptions, SEO titles ("… by Azure Yachts | New Construction") and SEO descriptions updated.
    - **Handles unchanged**, so no broken links.
  - **Image alt text:** both product photos, plus the 2 portfolio shop files (now "48 Hybrid, open / hard top version, render").
  - **Menus:**
    - `main-menu` › Yachts for Sale "Azure 48 new construction" → **Azure Yachts new construction**.
    - `azure-footer-buy-sell` "Azure 48 range" → **Azure Yachts range**.
    - These say "Azure Yachts" because the collection now holds 8 yachts, not only the 48s.
  - **Working copy templates:** index.json, page.about.json, page.buy.json, page.new-construction.json (a83350eb's; text only).
    - "Azure 48" → "48 Hybrid". Range wording → "Azure Yachts range / new construction".
    - "available in Hybrid and Hard Top versions" → "in Saloon Express and Hard Top versions".
  - **Live page bodies:** Design and About, plus About's SEO description ("builds the 48 Hybrid and other Azure Yachts designs").
  - **Collection azure-yachts:** new description and SEO title/description covering the 48 Hybrid, the Axiom 48 and the in-house designs from 60 to 130 ft.
- **Verified:** no "Azure 48" left on the home, About, Buy, New Construction or collection pages (preview); no Liquid errors.

### 00:07 · f56cb0f2 · LIVE products: every in-house design is now a New Construction product; Azure collection lists them; build process depends on hull material (user requests)
- **Products (LIVE, active, Online Store)**, all on template `new-construction`, vendor Azure Yachts, type New Construction, price 0 (shows "Upon request"). Text comes from the old site's design portfolio only, plus one image each from the shop files:
  - Vantage 85 EcoSport (15468235653163)
  - Azure 80 Performance Day Cruiser (15468235817003)
  - Azure Luxury 120 Motor Yacht (15468235948075)
  - Magic Carpet 130 Expedition Superyacht (15468236144683)
  - Azure 60 Performance Sailing Yacht (15468236308523)
  - Metafields on each: length_ft, builder Azure Yachts, new_build.designer "Azure Yacht Group (in-house)", new_build.status "In-house design", new_build.category; engine_type only where the old site says hybrid-electric or electric.
- **Existing products** (pre-change values in `audit/ds/inhouse_before.json`):
  - Azure 48 Hybrid Saloon Express and Azure 48 Hard Top: brokerage-template → **new-construction**.
  - Axiom 48: vendor "Azure Yacht Group" → **Azure Yachts**.
  - All three get new_build.category and designer.
- **New definition** `new_build.category` "Category label" (610439331883, pinned 25).
- **Collection `azure-yachts`** (manual): added Axiom and the 5 new designs. Now 8 products, sorted MANUAL in portfolio order.
- **Price rule changed** (azure-price, meta-tags og:price, product-information JSON-LD):
  - "Upon request" now applies when price ≤ $1 or `listing.price_on_request` is ticked. It is **no longer forced for every New Construction product**, so the 48s show their real prices ($1,750,000 / $1,900,000) with an Offer.
  - Geko: set `listing.price_on_request` = true so its $80M placeholder stays hidden.
  - Backups: `audit/ds/pr/before/`.
- **`sections/azure-portfolio.liquid`:** new collection mode, with cards built from the products (category · length, 16-word description, link) and a "View the Azure range" link. On the Design page the in-house section now uses collection azure-yachts, with no static blocks.
- **`sections/azure-product-hero.liquid`:** when a product has only 1 photo, the gallery is hidden on desktop, because the hero already shows it.
- **Build process by material** (`sections/azure-build-process.liquid` + `templates/product.new-construction.json`; backups `audit/ds/bp/*.before.*`):
  - The section reads `yacht_specs.hull_material`. Fiberglass, GRP, composite or carbon → **moulded build**:
    - Heading "How a fiberglass yacht is built" and 7 phases: Brief & spec, Engineering & laminate design, Plug & mould creation, Lamination, Demoulding & assembly, Outfitting & systems, Launch & delivery.
    - 5 cost drivers. **No payment schedule** (the user will add it later).
  - Anything else → the existing steel/aluminum superyacht process with the payment schedule.
  - Phase and driver blocks have a new "Show for" setting (all / steel-aluminum / fiberglass).
- **hull_material set:**
  - Axiom 48 and Azure 60 sailing: Fiberglass. The 48s already had Fiberglass.
  - Vantage 85, Azure 80, Luxury 120, Magic Carpet: **Aluminum**. This follows the user's guideline "Aluminum for 70+ ft"; **the user to confirm per model**.
  - Geko: Steel / aluminum.
- **Known gap:** the steel/aluminum text is written for 50–70 m Italian-yard superyachts (steel cutting, helipad, 3–4 years), so it is a loose fit for the 80–130 ft aluminum designs.

### 23:56 · f56cb0f2 · LIVE: Design submenu added, "The designers" moved out of New Construction, 2 pages published (user requests)
- **`azure-main-menu`** (a83350eb's menu; changed because the user asked directly; backups `audit/ds/menu_before.json` and `menu_before2.json`):
  - **Design** now has a submenu: The design process (/pages/design), Designers (/pages/yacht-designers) and Naval architects (/pages/naval-architects).
  - **New Construction › "The designers"** (/pages/new-construction#designers) is removed; Designers is now under Design. The other items and IDs are unchanged.
- **Pages published:** Yacht Designers (706633629739) and Naval Architects (706633662507), so the menu links work.
  - The page body text mirrors the template content (all six designers, the five firms and the cross-links). The live theme 137386393643 has no designers/naval-architects templates, so it shows this text with the default page layout.
- **Note:** the live theme's header uses a different menu (Home / Yacht charters / Yachts for sale / … / Yacht design), so the dropdown shows in the working-copy preview and will go live when the working copy is published.

### 23:54 · f56cb0f2 · Design process page: general in-house design + portfolio; Zurn added to Naval Architects (user requests)
- **New `sections/azure-portfolio.liquid`** (this session's section; CSS in its own tagged `{% stylesheet %}`): image cards with eyebrow, title, text and an optional link. 4 columns on desktop, 2 on tablet, 1 on mobile.
- **`templates/page.design.json`** (md5 5540dc3b… checked before upload; backup `audit/ds/new/page.design.v2before.json`):
  - The "Azure Yachts, our own range" section (Azure 48 specs) is replaced by **"In-house design: Our own designs"**. It has general text on designing yachts and concepts in-house, with the 48 Hybrid and Axiom 48 named as examples.
  - The section includes an **8-card portfolio** taken from the old site's [design portfolio](https://azureyachtgroup.com/yachtdesign/#designportfolio): 48 Hybrid open, 48 Hybrid hard top, Axiom 48 (links to its product), Vantage 85 EcoSport, 80 ft performance day cruiser, Luxury 120, Magic Carpet 130 ft and the 60 ft performance sailing yacht.
    - It reuses the shop images uploaded earlier. Bullet 200 was left out because it is Franco Gnessi's.
    - The old site's "150-foot explorer" caption under the 48 open version was not used (copy error).
  - Approach text: "from the Azure 48 to … Franco Gnessi / DYD" changed to "from our own 48 Hybrid and Axiom 48 to custom superyacht projects with independent designers".
  - The user says the model's real name is **48 Hybrid**.
- **`templates/page.naval-architects.json`** (md5 c38b792e… checked before upload): the user approved the firm list and added **Zurn Yacht Design** (Doug Zurn, Marblehead MA, founded 1993).
  - Sources: [Southern Boating](https://southernboating.com/life/people/doug-zurn/), [Maine Built Boats](https://mainebuiltboats.com/zurn/), [Cruising World](https://www.cruisingworld.com/people/hinckley-picnic-boat-39-best-new-boat/), [Professional BoatBuilder](https://www.proboat.com/2019/12/doug-zurn/).
  - The neutral wording is kept; the user's approval covers the list, not a "we work with" claim.
- **Preview:** no Liquid errors, 8 cards with images, no overflow on desktop or mobile.
- **Still named "Azure 48" elsewhere:**
  - Menu "Azure 48 range" (azure-main-menu, a83350eb).
  - Product titles "Azure 48 Hybrid Saloon Express…".
  - Image alt texts "Azure 48 Element Hybrid…".
  - Left unchanged pending the user's naming decision.

### 23:45 · f56cb0f2 · Design section split into 3 pages (user request: Process, Designers, Naval Architects)
- **Working copy 192657260587 only:**
  - **`templates/page.design.json`** (a83350eb's file; edited at the user's request, md5 checked before: e1655e52…) is now **"The yacht design process"**.
    - Sections: hero, approach, the 4 steps, a new **In-house design** section (Azure 48 text and facts moved from the old designer block, photo from azure-yachts), "Explore yacht design" cards (Designers, Naval architects, New construction), and the inquiry form.
    - The old `designers` and `nc_link` sections were removed; the New Construction link is now a card.
    - Hero button 2 now goes to /pages/yacht-designers. Backup: `audit/ds/new/page.design.before.json`.
  - **New `templates/page.designers.json`:** hero, intro, the azure-designers section with **all 6 designers** the user listed (Franco Gnessi, Marco Casali, J&J Design, J. David Weiss, Jonathan Quinn Barnett, Kurt Strand). Each has a role, short bio, 4 facts and a "Full profile" link to its existing page.
    - The text is condensed from the verified bios already on the live profile pages; nothing new was added.
  - **New `templates/page.naval-architects.json`:** intro on what a naval architect does, then 4 established firms with links to their own sites. Worded neutrally, with **no claim that Azure works with them**.
    - **Lateral Naval Architects:** 2018, BMT and Oceanco, Southampton ([Boat International](https://www.boatinternational.com/yachts/news/oceanco-and-bmt-nigel-gee-join-forces-to-form-lateral-naval-architects--37203), [BMT brochure](https://www.bmt.org/media/7531/00648-ssd-brochure-1222.pdf), [Leviathan](https://www.boatinternational.com/yachts/news/oceanco-y722-superyacht-leviathan-delivery)).
    - **Vripack:** 1961 Sneek, 8,000+ projects, Project 406, Al Waab ([Vripack heritage](https://vripack.com/the-studio/heritage/)).
    - **Van Oossanen:** 1992, FDHF, Hull Vane ([oossanen.nl](https://oossanen.nl/about-us/)).
    - **Diana Yacht Design:** 1971 Amstelveen, now Alkmaar, 95+ superyachts, Legend ([Diana](https://dianayachtdesign.nl/about-us/)).
  - **`sections/azure-designers.liquid`** (md5 dee6dfbd… before; backup `audit/ds/new/azure-designers.before.liquid`):
    - New section settings "monogram panel when no photo" and "alternate photo side"; new block setting "Monogram".
    - CSS is in the section's own tagged `{% stylesheet %}`. Both settings default to off, so the Design page and product pages are unchanged.
- **Store (hidden, not visible to visitors):** created pages **Yacht Designers** `/pages/yacht-designers` (706633629739, template designers) and **Naval Architects** `/pages/naval-architects` (706633662507, template naval-architects). Both have their own SEO title and description.
- **Preview:** /pages/design?preview_theme_id=192657260587 with &view=designers or &view=naval-architects. One H1 each, no Liquid errors, no horizontal overflow; checked on desktop and mobile.
- **Pending user approval:**
  - Publish the 2 pages (only after the working copy is published, since the live theme doesn't have the templates).
  - Add Design submenu items to `azure-main-menu` (Process / Designers / Naval architects) and point "New Construction › The designers" to /pages/yacht-designers.
  - Change "See all our yacht designers" on the 6 live profile pages to /pages/yacht-designers.

### 23:39 · f56cb0f2 · New Construction page round 2 (user request: title and price on the hero, unpriced builds, cleaner specs, gallery with arrows and thumbnails)
- **Hero** `sections/azure-product-hero.liquid`: new setting "Show yacht name and price on the photo" (on).
  - Desktop shows the eyebrow (New construction), the **H1 yacht name** and the price over a soft bottom-only shade; the header area has no shade.
  - The details column hides its own title and price on desktop. Mobile is unchanged: the hero is hidden and the title and price stay in the details.
- **Price:** `snippets/azure-price.liquid`: **New Construction always shows "Price: Upon request"**, whatever number is stored. The user can't save a $0 product, so any placeholder price is fine.
  - `meta-tags` (no og:price) and `product-information` (JSON-LD without an Offer) also check `template_suffix == 'new-construction'`.
  - Geko's stored $80,000,000 is no longer shown or sent to search engines.
- **Specs strip:** `snippets/azure-yacht-facts.liquid` 'facts' layout for kind new shows Length, Beam, Guests, Cabins, Max speed and Designer (`new_build.designer`, falling back to builder). The style is `.ay-facts--strip` in a tagged block at the end of `azure-yacht.css`. The full table in the story section is unchanged.
- **Admin visibility** (why the specs looked hard-coded):
  - **New definitions:** `yacht_specs.cabins` 610424782891, `yacht_specs.cruising_speed` 610424815659, `yacht_specs.draft_ft` 610424848427, `new_build.designer` 610424881195, `new_build.status` 610424913963, `new_build.budget` 610424946731, `new_build.timeline` 610424979499, `new_build.operating_cost` 610425012267. Each matches the existing value type, so the values are kept.
  - **Pinned** (positions 5–24): all `yacht_specs.*` and `new_build.*`. They now show on Admin › Products › [yacht] › Metafields.
- **Gallery** `templates/product.new-construction.json` › media-gallery:
  - Changed from grid to **carousel**: large arrows, thumbnails on the right (72 px), constrained to the viewport, counter on mobile. Previous settings: `audit/nc/gallery_before.json`.
  - The hero's "hide first tile" only affects grid layouts.
- **Preview:** Geko and Axiom 48 on desktop and mobile; no errors, one H1, no Offer, no og:price, no overflow.
- Revert: files in `audit/nc/remote/` are the pre-change copies.

### 23:28 · f56cb0f2 · New Construction: details now sit below a full-width photo (user's choice, option 3). **Note for a83350eb:** this adds a section to your `product.new-construction` template. The gallery and details blocks are untouched.
- **New section** `sections/azure-product-hero.liquid` ("Full-width yacht photo", products only):
  - Desktop (≥750 px) shows the yacht's featured photo full width at 80vh (min 520, max 960 px), eager with fetchpriority high, so the transparent header sits on a photo.
  - Mobile is unchanged; the full-width slideshow already runs there.
  - Settings: optional replacement photo, height, focus, "stack details" (on), "hide same photo from grid" (on).
  - CSS is in its own `{% stylesheet %}` plus scoped inline `<style>` (`.ay-phero-wrap ~ .shopify-section …`), so the shared CSS is untouched.
- **Stacked desktop layout** (scoped to pages that use this section):
  - Order: photo, then details (max 1040 px, not sticky), then the gallery at full page width.
  - The first grid tile is hidden because it's the hero photo. The next tile spans both columns at 16:9, and the facts grid uses auto-fit.
- `templates/product.new-construction.json`: added `hero` as the first section. I pulled it first and it matched my last upload. Backup: `audit/hg/before_hero__templates__product.new-construction.json`.
- **Preview:** Geko and Axiom 48 desktop and mobile; no horizontal overflow and no Liquid errors.
- **Seen, not touched:**
  - Geko media was reordered by someone else during this work.
  - Geko has two copies of the same photo (`Yacht_06_three_quarter_sunset.jpg` and `…_square.jpg`), so it shows as both the hero and the large tile.
  - Geko now shows "Starting at $80,000,000" (not set by f56cb0f2).
- Revert: remove `hero` from the template order and sections, then delete the section file.

### 23:17 · f56cb0f2 · Header follow-up (user: "lost transparency on New Construction, breadcrumbs appeared again")
- `sections/header-group.json`: `enable_transparent_header_product` set back to **true**.
- `sections/header.liquid`: the product branch of the transparent logic now also requires `template.suffix == 'new-construction'`. New Construction listings are transparent again; brokerage, charter and weekly listings keep the solid header.
- `templates/product.new-construction.json`: section `breadcrumbs` set to `disabled: true`, as on brokerage. It had always been on, just hidden under the transparent header, which is why it showed once the header went solid. **Note for a83350eb:** your template; this is a one-flag change.
- **Preview:** Geko and Axiom 48 are transparent with no breadcrumbs; Azimut 50 is solid. **Open:** on New Construction the centred white logo and menu still sit partly over the white details column. Waiting for the user to choose how to fix it.
- Revert: set breadcrumbs `disabled` to false and remove the suffix condition. Files: `audit/hg/fix2__*`.

### 23:14 · f56cb0f2 · Header: dark gradient removed (user request: "a black gradient appeared on the header. Remove it"). **Note for a83350eb:** the gradient was in `sections/header.liquid` (the `.header[transparent]::before` rule in the "Azure: keep the transparent header readable" style block, added ~19:54 and not logged). Header is f56cb0f2's area; please don't re-add it.
- `sections/header.liquid`: removed only the `::before` gradient rule. The brokerage padding rule in the same block stays. Backup: `audit/hg/sections__header.liquid.before` (md5 a942809e…).
- **Side effect:** without the gradient, the white logo and menu vanished over the white details column on listing pages. `sections/header-group.json`: `enable_transparent_header_product` true → false, so listing pages now use the solid header (scheme-5). The home page, collections and hero pages keep the transparent header. Previous md5 4c4be4cc….
- **Preview check:** Azimut 50 and Eternal Spark show a solid header, the menu is readable and the gallery sits below it. Home and Design are unchanged and transparent, with no gradient.
- Revert: restore the backup and set `enable_transparent_header_product` back to true.

### 23:11 · f56cb0f2 · "Price upon request" switch for any listing (user request). **Note for a83350eb:** this edits 2 shared Savor files (product-information, meta-tags) and the inquiry-form snippet. Please pull fresh before you edit them.
- **New product metafield** `listing.price_on_request` "Price upon request" (boolean, pinned, storefront read; 610402238507). Admin › Products › [yacht] › Metafields → tick it. The stored price is kept but hidden.
- **Working-copy theme edits** (backups in `audit/pr/before/`):
  - `snippets/azure-price.liquid`: cards and detail pages show "Upon request" when the switch is on or the price is $0. "On request" was renamed to "Upon request".
  - `blocks/azure-yacht-summary.liquid`: the multi-option "Selected option / rates from" line is skipped when the switch is on.
  - `blocks/azure-weekly-rate.liquid` and `sections/azure-weekly-charter.liquid`: the weekly rate and the "Weekly rate" column of the Seasons table show "Upon request".
  - `snippets/azure-inquiry-form.liquid`: charter options drop the amount (text after " – " is cut) and data-price is "Upon request". "Rate on request" was renamed to "Upon request".
  - `snippets/meta-tags.liquid`: no `og:price` when the switch is on or the price is $0.
  - `sections/product-information.liquid`: JSON-LD is a Product without an Offer when the switch is on or the price is $0, so no $0 price is sent to search engines. Otherwise it's Shopify's standard `structured_data`.
- **Test:** I switched it on for Eternal Spark and Azimut 50. No Liquid errors, no Offer, no og:price; the summary, weekly band, seasons table and dropdown all showed "Upon request". Then I deleted both test metafields, so **no listing currently uses it**.
- **Not covered (free text):** prices typed into descriptions or SEO fields still show. Examples: Azimut 50 description "Price: $1,495,000"; Eternal Spark description "Charter rate From €334,800…" and its SEO description. Variant titles with € still appear in Shopify's hidden analytics JSON.
- **Live:** the live theme doesn't read this field, so it takes effect when the working copy is published.
- Revert: restore the 7 files from `audit/pr/before/` and delete definition 610402238507.

### 23:15 · f56cb0f2 · New Construction: separate "Side view" and "Deck plans" sections (user request). **Note for a83350eb:** this touches your template and Geko data; please don't build a second deck-plan feature.
- **How it works (no hard-coding):** two new product metafield definitions. Images are set per yacht in Admin › Products › [yacht] › Metafields, and the sections hide themselves when a yacht has none.
  - `new_build.side_view` "Side view drawing" (file_reference, images; 610397487147)
  - `new_build.deck_plans` "Deck plans" (list.file_reference, images; 610397519915). The order in the list is the slider order.
- **New section** `sections/azure-drawings.liquid` ("Yacht drawings", working copy):
  - Setting "Show": side view (single full-width drawing) or deck plans (slider with arrows, counter, dots, swipe and arrow keys).
  - Captions come from the image alt text, and clicking opens the full-size image. Its CSS is inside the section (`{% stylesheet %}`), so the shared `azure-yacht.css` is untouched.
- **`templates/product.new-construction.json`:** added sections `side_view` (sand, anchor `#side-view`) and `deck_plans` (white, anchor `#deck-plans`) after `story`. I pulled the template first; the md5 a7e9f72c… matched. Backup: `audit/geko/templates__product.new-construction.json`.
- **Files uploaded** (user's attachments, PNG converted to JPG):
  - `geko-side-profile.jpg` 46841694191659
  - `geko-deck-plan-main-deck-deck-1.jpg` 46841694257195
  - `geko-deck-plan-deck-2-top-view.jpg` 46841694289963
  - `geko-deck-plan-lower-decks.jpg` 46841694224427
- **Geko** (15467858067499): metafields set. side_view = the side profile; deck_plans = main deck & deck 1 → deck 2 & top view → lower decks.
- **Removed from the Geko gallery:** the 2 old deck-plan images, 46841508429867 (main deck GA) and 46841508462635 (upper deck GA). They were detached with fileUpdate › referencesToRemove, and the files are kept. They're now in their own section.
- **Not touched:** 7 images added to Geko at 23:01 UTC (`Yacht_01_stern_closeup.jpg`, `Yacht_02_aerial_bow_quarter.jpg`, `Yacht_03_aerial_aft_pool.jpg` and 4 still processing). They have no alt text. Who added them: a83350eb or the user?
- **Preview check:** no Liquid errors. Desktop 1440: the side view is full width, and the slider works (Next → 2/3). Mobile 390: no overflow, arrows hidden, swipe and dots.
- **Live:** the live theme lacks these sections, so they appear when the working copy is published. On live, Geko's gallery has lost the 2 old deck plans until then.
- Revert: delete the 2 sections from the template, attach the 2 old images back to Geko (fileUpdate › referencesToAdd), and delete the metafields.

### 23:10 · f56cb0f2 · Working copy: New Construction gallery matches the other listings (user request). **Note for a83350eb:** this template is yours; only the gallery block was changed.
- `templates/product.new-construction.json` › `main` › `media-gallery` settings were copied from `product.charter.json`:
  - carousel → **grid**, two columns, large first image
  - square tiles (aspect_ratio "1", was "adapt")
  - mobile controls counter (was dots)
  - limit_grid_tiles **true**, grid_tile_count **11**
  - Nothing else in the template changed.
- I pulled the file first; the md5 f29ab346… matched. Backup: `audit/gal/fresh__templates__product.new-construction.json`.
- **Preview check:** Geko (7 photos) and Axiom 48 (2) render in the grid with no Liquid errors. "View all" appears only once a listing has more than 11 photos.
- **Side effect:** square tiles crop the Geko deck plans in the grid. They're shown in full in the full-screen gallery.
- Revert: restore the backup gallery settings.

### 23:05 · f56cb0f2 · Working copy: photo limit is now the default for every listing
- **Why Eternal Spark looked different:** on the **live** theme, no listing has a photo limit. The limit (11 photos, then "View all photos") is custom code that exists only in the working copy. Eternal Spark stands out on live because it has 115 photos. In the working copy, Eternal Spark already shows 11 + "View all 115 photos".
- **Change:** in `blocks/_product-media-gallery.liquid`, the schema default for `limit_grid_tiles` is now **true**, so any template or new block gets the limit automatically. `templates/product.json` (the default product template) now has `limit_grid_tiles: true` and `grid_tile_count: 11`, like the charter, brokerage and weekly-charter templates. `product.new-construction` uses the carousel, so the limit doesn't apply there.
- Both files were pulled first and their md5 matched (0cc77eec…, 9441b577…). Backups: `audit/gal/gallery.before.liquid`, `audit/gal/product.before.json`.
- **Preview check:** Eternal Spark (115), Sea Ray 60 (62), Ascente 112 (39) and Tartan 37 (18) all show "View all N photos", with no Liquid errors.
- **Live:** this can't be fixed on the live theme through the connector. It takes effect when the working copy is published.
- Revert: set the default back to false and remove the two keys from `product.json`.

### 22:55 · f56cb0f2 · LIVE: Azure Axiom 48 published (user approved: "Publish the Axiom")
- Product 15467999723563 `azure-axiom-48-hybrid-catamaran`: status DRAFT → **ACTIVE**, published to the Online Store (publication 103098679339). It's now in the `new-construction` collection automatically.
- URL: https://azureyachtgroup.myshopify.com/products/azure-axiom-48-hybrid-catamaran
- The live Design page portfolio card "Azure Axiom 48 catamaran" now links to the product.
- **Known issue (same as Geko):** the live theme has no `product.new-construction` template, so the page shows "$0.00" and "Add to cart". The variant is $0, untracked, with inventory policy DENY. The working copy shows "On request". This is fixed when the working copy is published.
- Revert: set the status back to DRAFT and remove the link from the Design page.

### 22:50 · f56cb0f2 · LIVE Eternal Spark: euro booking options (user request) + Azure 48 decision
- **Store currency:** USD only; EUR isn't enabled. So the euro rate goes in the option names, and the USD price is the source's conversion (yachtcharterfleet: "approx. $372,500 / $389,000").
- **Option:** "Charter Package" renamed to **"Season"**. The two values (with the variants they belong to):
  - 7-Day Standard → "7 days, low season – €334,800 + expenses" (42691743023147): price $334,800 → **$372,500**, compare-at $349,800 removed (it looked like a discount)
  - 7-Day VIP → "7 days, high season – €349,800 + expenses" (42691743055915): price $349,800 → **$389,000**
- **Deleted variant:** "7-Day Ultimate Luxury Package" at $385,000 (42691743088683, SKU ES-7DAY-ULT-1768271603371). The package isn't backed by any source.
- **Working-copy `snippets/azure-inquiry-form.liquid`:** if a variant title already contains "€", the booking dropdown shows the title only, with no $ price. I pulled the file first; the md5 9710354b… matched. Backup: `audit/wc/inquiry-form.before_eur.liquid`.
- **Live theme:** the default product page still shows the USD price ($372,500). It can't be edited through the connector.
- Revert: backup `audit/p/eternal_spark_before_eur.json`. Rename the option back, restore the prices and compare-at, and recreate the third variant.
- **User decision (Azure 48):** keep "up to 2 hours" electric and "38 knots max" as already listed. The old-site figures of 3+ h and 40+ kn are rejected. No listing change was needed.

### 22:40 · f56cb0f2 · Weekly template fixes and preview check
- **Rate terms:** the default text no longer says "APA, usually 25 to 35 percent… VAT". That detail isn't verified per yacht. New text: "Running expenses, taxes and gratuity depend on the yacht and cruising area." Changed in `sections/azure-weekly-charter.liquid` (schema default) and `templates/product.weekly-charter.json`. I pulled both files first; local copies are `audit/wk/*.remote_before`.
- **CSS:** block `/* [f56cb0f2] Weekly charter stats: no empty cells */` appended to `assets/azure-yacht.css` (flex-wrap stats band). The md5 before the change was 8381632f…
- **Eternal Spark description:** "Running expenses (APA), VAT and gratuity are charged…" is now "Running expenses are charged…". The source only says "+ expenses".
- **Preview check** (working copy 192657260587): Eternal Spark, Y-8, Ascente 112 and Le Ponant all render `product.weekly-charter` with no Liquid errors. Desktop 1440 and mobile 390 were checked by screenshot, with no horizontal overflow (scrollWidth 390).
- **Flags (not changed):**
  - The Eternal Spark inquiry dropdown variant "7-Day Standard Package – $334,800" is in USD.
  - The Le Ponant listing data (84 m, 32 guests, 16 cabins, 1990, $540k) hasn't been reviewed.
  - Ascente 112 hasn't been reviewed.
- Other templates (home, collections, pages) haven't been checked since the C-1 merge.

### 22:34 · f56cb0f2 · LIVE collections: Eternal Spark location claims
- Eternal Spark is based in the Mediterranean (verified). I removed it from **Fort Lauderdale Yacht Charters** (697224560683, manual source "Selected yachts"). The collection now has 6 yachts. Its description changed from "from a 38 ft day boat to a 164 ft superyacht" to "…to a 62 ft flybridge".
- **Superyacht Charters** and **Multi-Day & Weekly** descriptions: "the Mediterranean" added to the list of cruising areas.
- Eternal Spark is also still in the leftover collection `custom-superyacht`. It's hidden, and a redirect is ready. No change.
- Revert: add the product back with collectionUpdate › sourcesToUpdate › inclusion.selectionsToAdd, and remove "the Mediterranean" from the two descriptions.

### 22:30 · f56cb0f2 · Working copy: footer social links
- `sections/footer-group.json` › block `social-links` (block_6806188553d0) now has URLs. All six are taken from the old site's footer, azureyachtgroup.com:
  - facebook.com/azureyachtgroup
  - instagram.com/azureyachts
  - youtube.com/@azureyachtgroup
  - tiktok.com/@azureyachts
  - x.com/azureyg
  - linkedin.com/company/azureyachtgroup
- Social links in Savor are block settings, not `settings_data.json`, so `settings_data.json` was not touched.
- I pulled the file first; the checksum b8315fb5… matched.
- Live footer: not changed, because the connector can't edit the live theme. Add them in live Customize, or they'll appear when the working copy is published.
- Revert: blank the six URLs (`f56cb0f2` backup `audit/wc/footer-group.before.json`).

### 22:27 · f56cb0f2 · LIVE Brokerage page text
- `/pages/brokerage` (104255979563): replaced the placeholder "Build this page using Theme Customizer sections." It now has an intro, the buying list (acquisition, inspections, negotiation, financing, insurance, sea trials and delivery), the selling list (valuation, marketing and photography, qualified buyers, transaction management) and contact details. The SEO description is set too.
- "IYBA-certified brokers" was **left out** because it isn't verified.
- Live has no `page.brokerage` template, so the text shows on the default page. The working-copy `page.brokerage.json` (hero, listings, inquiry) does **not** show the page's own text. A text section is to be added before publishing.
- Revert: body `<div style="text-align: center; padding: 60px 20px;"><h1>Yacht Brokerage Services</h1><p>Build this page using Theme Customizer sections.</p></div>`. Backup: `audit/p/brokerage_before.json`.

### 22:23 · f56cb0f2 · LIVE Design page: portfolio
- `/pages/design` (104256012331): new "Design portfolio" section above "Design services". It's a responsive grid with inline styles, so it works on the live theme.
- The 9 projects, with images from Shopify Files:
  - Azure 48 Element Hybrid, open
  - Azure 48 Element Hybrid, hard top
  - Axiom 48 catamaran
  - Luxury 120 motor yacht
  - 60 ft performance sailing yacht
  - 80 ft hybrid day cruiser
  - Magic Carpet (130 ft / 39.6 m expedition)
  - Vantage 85 EcoSport
  - DYD Bullet 200 by Franco Gnessi (links to the Franco Gnessi designer page)
- Text comes from the old site, azureyachtgroup.com/yachtdesign. The old caption "150-foot explorer" on Element was an error and was dropped. Bullet 200 ownership pricing is not published.
- Revert: restore the body from `f56cb0f2` `audit/p/design_page_before.html`.
- Waiting on the user: confirm they own the rights to the renders.

### 22:22 · f56cb0f2 · LIVE product: Azure Axiom 48 (DRAFT)
- New product `azure-axiom-48-hybrid-catamaran` (gid://shopify/Product/15467999723563), status **DRAFT**, so it isn't visible.
  - vendor Azure Yacht Group; type New Construction; template `new-construction`
  - tags `listing:for-sale`, `brand:azure-yachts`, `type:new-construction`, `new-construction`, `catamaran`, `hybrid`
  - `yacht_specs`: length_ft 48, beam_ft 25, builder Azure Yacht Group, engine_type Hybrid electric
  - 2 renders
  - price $0
- Not published, because the live theme would show "$0" and "Add to cart" (same issue as Geko). Waiting on the user. Revert: delete the product.

### 22:22 · f56cb0f2 · LIVE products: Azure 48 Hard Top and Hybrid Saloon Express (product data owned by a83350eb; small addition only)
- Added a "Hybrid system" paragraph above "Specifications" in both descriptions: silent electric mode, and more than 24 hours of onboard power from batteries and solar at anchor.
- **Not added:** the user's figures "3+ h electric at up to 9 kn" and "40+ kn diesel". They contradict the current listing specs ("up to 2 hours", "38 knots max"), and the old site gives 40 kn for the 36/38 ft eMotion. Waiting on the user.
- Backups: `audit/p/azure-48-hard-top_before.json`, `azure-48-hybrid-saloon-express_before.json`.

### 22:21 · f56cb0f2 · Working copy + live data: premium weekly-charter template
- Working copy, new files:
  - `sections/azure-weekly-charter.liquid`: "Your week on board", with a stats band, highlights, a seasons table, rate terms and a proposal button. Re-uploaded at 22:22 with metric-length detection and a price fallback.
  - `blocks/azure-weekly-rate.liquid`
  - `templates/product.weekly-charter.json`. Section order: main → weekly → story (`azure-yacht-story`) → how it works → more yachts (`weekly-charters`).
- CSS: block `/* [f56cb0f2] Weekly charter template */` appended to `assets/azure-yacht.css`.
- Metafield definitions `weekly_charter.rate_display`, `seasons`, `highlights` and `terms` (610370027563, 610370060331, 610370093099, 610370125867).
- templateSuffix `weekly-charter` set on Eternal Spark, Y-8, Ascente 112 and Le Ponant. The live theme has no such template, so live falls back to the default product page.
- Revert: set the templateSuffix back to `charter` and delete the three files.

### 22:20 · f56cb0f2 · LIVE products: Eternal Spark and Y-8 rewrites
- **Eternal Spark** (`eternal-spark-164ft-superyacht-charter`):
  - verified facts: Bilgin 163, 2024, 49.95 m, 12 guests / 6 suites, crew 9–10, Unique Yacht Design / Hot Lab, 5,000 nm, 12/17 kn, Mediterranean, €334,800–€349,800 a week plus expenses, IYAA 2025 award
  - new title, SEO and tags (removed bahamas; added mediterranean, bilgin)
  - removed `charter_specs.fuel_included` and `crew_services`
  - backup `audit/p/eternal_spark_before.json`
  - **Flag:** the price is 334800 in USD, but the real rate is in EUR.
- **Y-8** (`y-8-yacht-weekly-charter-premium-luxury-experience`):
  - rewritten as the YYachts Y8 (24 m), using yyachts.de
  - removed the leftover Fjord 41 XL text and unverifiable inclusions; 13 metafields deleted
  - backups `audit/p/y8_before.json`, `y8_deleted_metafields.json`
  - **Flag:** the price ($80k), location ("South Florida & Caribbean") and the actual hull are unconfirmed.

### 22:19 · f56cb0f2 · Shopify Files
- 10 renders from the old site uploaded (MediaImage 46841578618923–46841578913835). The list is in `audit/p/files.json`.

### 22:16 · f56cb0f2 · C-1 fix
- See C-1 above.

### ~22:05 · f56cb0f2 · Old site review / OneDrive
- Reviewed azureyachtgroup.com for reusable content: `Old-Website-Review.md`.
- An earlier CHANGELOG export went to the OneDrive root by mistake. It's a stray copy; the master is this folder.

### 22:12 · a83350eb · Log process
Sync rule added (coordination rule 5): after each change, update both files in OneDrive › Azure Yacht Group › Marketing › Azure Web, checking the eTag first. The user asked for this.

### 22:08 · a83350eb · OneDrive
Uploaded CHANGELOG.md, PLAN.md and azure-yacht.css.a83350eb-additions.css to OneDrive › Azure Yacht Group › Marketing › Azure Web. Earlier stray copies are in the OneDrive main folder (deletion awaiting the user's OK).

### ~22:04 · a83350eb · Audit only
Downloaded the full working copy (458 files) to `remote/`, compared it with the other session's history and opened C-1 to C-4. No store changes.

### 21:57 · f56cb0f2 · Live pages (reported from its session)
- Six designer pages created and published, all on the default template:
  - `franco-gnessi-yacht-designer` (706628976683)
  - `marco-casali-yacht-designer` (706629009451)
  - `jj-design-yacht-design-studio` (706629042219)
  - `david-weiss-yacht-designer` (706629074987)
  - `jonathan-quinn-barnett-yacht-designer` (706629107755)
  - `kurt-strand-yacht-designer` (706629140523)
- Live `/pages/design` text now includes a "Designers we work with" section.
- Revert: delete the pages and restore the Design page text from `f56cb0f2`'s backup.

### 21:54 · a83350eb · Working copy: design page and inquiry form
- `templates/page.design.json` rewritten: no listings; covers the design approach, process and designers.
- `snippets/azure-inquiry-form.liquid`:
  - new-build mode (`is_new`)
  - interest preselected from the page path
  - new "Yacht design" option
- See C-2.

### 21:53 · a83350eb · Working copy: CSS, new templates and sections
- New files:
  - `templates/product.new-construction.json`
  - `templates/page.new-construction.json`
  - `sections/azure-designers.liquid`
  - `sections/azure-build-process.liquid`
  - `sections/azure-yacht-story.liquid`
  - `blocks/azure-jump-links.liquid`
- Changed: `blocks/azure-yacht-summary.liquid` (new-build buttons) and `assets/azure-yacht.css`.
- The CSS upload caused C-1.

### ~21:50 · a83350eb · Menus (only the working copy uses them)
- `azure-main-menu` (321195049003):
  - Charters: Charter fleet, Miami, Fort Lauderdale, Superyacht, FAQ
  - Buy: All, Motor, Performance & sport, Sportfish & CC
  - Sell
  - New Construction: Azure Yachts, Franco Gnessi / DYD, How a build works `#build-process`, The designers `#designers`
  - Design, About, Contact
  - The Services dropdown is removed.
- `azure-footer-buy-sell` (321195180075) updated; see C-4.

### ~21:48 · a83350eb · Live store data
- Page "New Construction" created and published: 706628714539, handle `new-construction`, template `new-construction`. The live theme has no such template, so live shows the default page layout.
- Smart collection "Franco Gnessi / DYD Yachts" created: 697227182123, handle `franco-gnessi-dyd-yachts`, rule VENDOR = "Franco Gnessi / DYD". Published to Online Store.
- File `franco-gnessi-designer.jpg` uploaded (MediaImage 46841508495403).

### ~21:40 · a83350eb · Geko product (15467858067499)
- Handle `2026-franco-gnessi-dyd-geko-226-new-build` (unchanged).
- Title is now "GEKO 60 – 200 ft Franco Gnessi / DYD Superyacht New Build".
- Description rewritten from the user's brochure. Old text: `backup/geko_description_before_2026-11-02.txt`.
- 7 images added: renders and 2 GEKO deck plans.
- Template `new-construction`.
- `yacht_specs` fields:
  - length_ft 200 (was 226)
  - guests 10, cabins 5, crew 16
  - max speed 22 kn, cruising speed 16 kn
  - draft 10 ft
  - engine: hybrid azipods 1,940 kW
  - builder: "Shipyard TBD – design by Franco Gnessi / DYD"
- `new_build` fields: designer, status, budget €60M–€85M, timeline 36–48 months, operating cost €5M–€8M a year.
- Search title and description updated.
- Left out: unverified awards, and deck plans with a "Bullet" logo.

### 21:44 · f56cb0f2 · Live pages (reported)
- Live text written for About, Design, Sell Your Yacht and Service & Maintenance. It replaces the "Build this page…" placeholder.
- Live `main-menu`:
  - Sell Your Yacht now opens `/pages/sell-your-yacht`.
  - Yacht Design now opens `/pages/design`.

### 21:23–21:35 · f56cb0f2 · Collections and menus (reported)
- New smart collections, tag-based:
  - Motor Yachts for Sale (4)
  - Performance & Sport (3)
  - Sportfish & Center Console (4)
  - Sailboats (1)
  - Superyacht Charters 100 ft+ (3)
- Day Charters (13) and Multi-Day & Weekly (5) were rebuilt. Their old descriptions were removed and backed up.
- 10 brand collections were set to show for-sale yachts only.
- Product types and tags set on 6 listings: Sunseeker 95, Ferretti 80, Post 42, Argonaut 260, Wally 48, Boston Whaler 26.
- Working copy:
  - `templates/collection.brand.json` and `templates/index.json` (brand logo strip)
  - `sections/azure-hero.liquid`
  - `sections/footer-group.json`, plus a new menu `azure-footer-brands` (321213825067)
  - `snippets/azure-price.liquid`: "On request"
- `f56cb0f2` restored `templates/index.json` after an earlier overwrite at about 16:25 (cause unknown).
- Live `main-menu` and `footer` reorganized.
- Waiting on the user: hide 13 leftover collections in admin (redirects are ready).

### 20:46–20:53 · f56cb0f2 · Working copy and live (reported)
- New sections: `azure-features` (Why Azure), locations, `azure-testimonials` (hidden).
- Templates: `collection.json`, `collection.location.json`, `blog.json`, `article.json`, `page.faq.json`.
- Live collections Miami (6) and Fort Lauderdale (7) created.
- Live page `/pages/faq` (706626650155) created.
- For about a minute, three links were added to all menus by mistake. They were restored from backup.

### 19:11–20:42 · f56cb0f2 · Working-copy design (reported)
- `sections/header.liquid` and `header-group.json`:
  - transparent header and picture menu
  - page-transparency option
  - dark fade behind the header
  - menu color scheme 7
- `config/settings_data.json`: color schemes 1, 4 and 7, plus navy text.
- `blocks/_product-media-gallery.liquid` and `snippets/product-media-gallery-content.liquid`: grid gallery with a photo limit and "View all photos". These are changed core Savor files.
- `product.*` templates: tiles; brokerage breadcrumb turned off.
- `azure-steps`, `azure-journeys`, `azure-yacht-grid`, `azure-rich-text`, `azure-inquiry`, `azure-cta-band`: full-height and tile options.
- Templates `page.*`: transparency and full-height settings.
- CSS for all of this went into `assets/azure-yacht.css`, which is lost (see C-1).

### 19:24 · both · Contact details in Theme settings
- `a83350eb` added a "Contact details" group to `settings_schema`/`settings_data`, plus `blocks/azure-contact-details` and `snippets/azure-contact-tel` / `azure-contact-wa`.
- `f56cb0f2` connected these settings to the contact page, footer, inquiry and call-to-action sections.
- Values: (754) 444-6729, orders@azureyachtgroup.com, Hallandale Beach FL. WhatsApp is blank.

### Earlier on 2026-11-02 · a83350eb
- Duplicate titles:
  - Key West stub archived and redirected.
  - Repeated H2 headings removed from 20 product descriptions. Backup: `backup/product_descriptions_2026-11-02.json`.
- Live Contact page text and location phone changed to (754) 444-6729 / orders@.
- Geko product created (15467858067499) and made ACTIVE.
- Smart collection "New Construction" created: 697226231851, rule TYPE = New Construction.
- Working-copy `index.json` new-build grid now uses `new-construction`. `azure-price` shows "On request" at $0.

### 16:48–19:06 · f56cb0f2 · Live (reported)
- Live `main-menu`: About and Our Story now open `/pages/about`; Our Team removed.
- Contact page template set to `contact`, and its text replaced with an intro.
- SEO titles and descriptions written for all 33 products and 35 collections.
- Alt text added for 23 main images.
