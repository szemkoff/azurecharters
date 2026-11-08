# Azure Yacht Group – Synced Implementation Plan

Last synced: **2026-11-08 18:10 UTC** by Cursor Cloud Agent (live Shopify query). LIVE theme = **Q `192969080875`** (published 8 Nov by Stan); rollback = P `192968851499`; **next working copy = duplicate Q before any further theme edits** (no R exists yet). This plan combines session `f56cb0f2`'s plan with this session's work. The full plan is in session 20cabc4e: `Azure-Yacht-Group--Savor-Website-Implementation-Plan.md`. Every change is logged in `CHANGELOG.md`. **Master copies are in OneDrive › Azure Yacht Group › Marketing › Azure Web.** Update both files there after every change: download, merge, then upload with an eTag check (CHANGELOG rule 5).

Status key: DONE · WIP · TODO · USER (waiting on the user) · BLOCKED

## Ownership (to avoid more overwrites)

| Area | Owner |
|---|---|
| Header, gallery, color schemes, full-height and tile CSS, collections, brand strip, homepage `index.json`, live page text, designer pages | `f56cb0f2` |
| New Construction (Geko, page, templates, build process, designers section), `page.design.json`, header menu structure, contact settings group, product data cleanup | `a83350eb` |
| `assets/azure-yacht.css` | Shared. Pull before editing and add tagged blocks only. The C-1 merge is done (22:16). |
| Weekly-charter template (`product.weekly-charter`, `azure-weekly-charter`, `azure-weekly-rate`, `weekly_charter.*` metafields), Design page portfolio (live text), drawings section `azure-drawings` + `new_build.side_view` / `deck_plans`, price-upon-request switch `listing.price_on_request` (azure-price, inquiry form, JSON-LD/og:price) | `f56cb0f2` |

## Phase status

| # | Phase | Status | Notes |
|---|---|---|---|
| 1 | Protect and audit | DONE | Working copy exists. Audit report done. |
| 2 | Design foundation | WIP | Colors, header, picture menu and contact settings are done. C-1 CSS fix done (22:16). Preview check pending. |
| 3 | Homepage and navigation | WIP | Homepage sections and brand strip done. Header menu restructured (Charters / Buy / Sell / New Construction / Design / About / Contact). Footer menus done. |
| 4 | Catalog and collections | WIP | Type and brand collections, Miami and Fort Lauderdale, New Construction and Franco Gnessi / DYD are done. The user must hide 13 leftover collections in admin. |
| 5 | Yacht pages | WIP | Charter and brokerage templates and the grid gallery are done. `product.new-construction` done (Geko, Bullet 200, MUMBLE 58 — now ACTIVE, all Azure Design concepts). `product.weekly-charter` done (Eternal Spark, Y-8, Ascente 112, Le Ponant). Eternal Spark and Y-8 rewritten. Axiom 48 ACTIVE. The Azure 48s still use the brokerage template (USER decision). **53 products total live/draft as of 8 Nov.** |
| 6 | Supporting pages | WIP | Live text for About, Design, Sell and Service. FAQ, New Construction and six designer pages done. Live Design page has the 9-project portfolio. Brokerage page text done. Footer social links done. Booking terms: USER. Destinations page live with Puerto Rico, Exumas, Bimini, Japan/South Korea. |
| 7 | Lead handling and tracking | TODO | Test inquiry not sent. Inquiries go to the store email (stan@). Click tracking not set up. |
| 8 | SEO, testing, launch | WIP | Product and collection SEO done. Domain live. Search Console connected but no API units. QA and full tracking are TODO. Hero videos live in Q (Eternal Spark film, reduced-motion fix, tap-to-start). |

## Next actions (in order)

1. ~~[f56cb0f2] C-1~~ DONE 22:16.
2. **[a83350eb] C-2:** add the six designer pages and the 9-project portfolio to `page.design.json`. The CDN URLs are in the CHANGELOG entry for 22:23.
3. **[f56cb0f2] WIP:** ~~Brokerage text~~ done 22:27. ~~Social links~~ done 22:30 (footer block). ~~Eternal Spark location~~ done 22:34 (removed from Fort Lauderdale).
4. **[either] Preview check:** `product.weekly-charter` DONE 22:40 (4 yachts, desktop and mobile). Still to check: home, collections, pages and the other product templates since the C-1 merge.
5. ~~**[USER] Geko and Axiom 48 (both ACTIVE since 22:55) on the live theme:** live has no `product.new-construction` template, so the page shows $0 and "Add to cart". Options: publish the working copy, set the price to "On request", or keep the listing in draft.~~ RESOLVED 7 Nov 08:20: H is live with `product.new-construction`; no $0 or Add to cart.
6. **[b7d9a3fa] Effectiveness roadmap:** follow the steps in the "Effectiveness roadmap" section below (from `SITE-AUDIT.md`, 7 Nov).

## Effectiveness roadmap (from SITE-AUDIT.md, 7 Nov 08:00, b7d9a3fa)

Full findings are in `SITE-AUDIT.md` (same folder). Summary: navigation and new-construction content are strong; trust, response speed and charter pricing are the main gaps.

1. ~~**[USER] Publish H.**~~ DONE 7 Nov 08:20 (verified live; working copy is now I).
2. **[USER → us] Proof:** 2–3 real client stories or one delivered project, with permission. We build the section. Never write testimonials for the user. USER
3. **[USER → us] Response speed:** decide on WhatsApp and a stated reply time; we add the button and the wording. USER
4. **[USER → us] Charter "from" prices:** user supplies real indicative day/week rates; we show them on the charter yachts. USER
5. **[USER → us] Owner services:** ~~user lists the services Azure actually provides; we expand Service & maintenance.~~ **DONE 8 Nov 18:31.** Service & maintenance page expanded with engine/transmission service, pre-purchase inspections, seasonal prep, routine programs. Team certifications from Marine Technical Training Academy (Fort Lauderdale, FL) — gasoline engines, diesel engines, marine transmissions — attributed collectively, no individual named.
6. **[us] Measurement:** inquiry/click tracking, Search Console, a test inquiry, then review which pages produce inquiries (phases 7–8). TODO
7. **Re-audit** after steps 1–3, and about 60 days after publishing using real inquiry data.

## Decisions waiting on the user

- **8 Nov 18:10 UTC (Cursor Agent):** ~~MUMBLE 58 draft~~ **MUMBLE 58 is now ACTIVE** (Product 15484672475179, confirmed live via API). Still open: correct length (190 ft brochure vs 194.55 ft YachtWorld), show EUR 65M price or keep upon-request, fill missing guest/crew count, fill beam/draft/cabins/engines/speed from DYD.
- **8 Nov 17:10 UTC (9ecfdbb7):** ~~MUMBLE 58: specs decision~~ — RESOLVED (now ACTIVE).
- **8 Nov 16:56 UTC (9ecfdbb7):** ~~MUMBLE 58 draft listing ready to review~~ — RESOLVED (now ACTIVE).
- **8 Nov 11:50 (b7d9a3fa):** Q is LIVE (published by Stan, confirmed working). Hero video items for O/P/Q below are RESOLVED. Rollback = P 192968851499. Next working copy: duplicate Q before theme edits.
- **8 Nov 11:21 (b7d9a3fa):** Publish draft **Q**: homepage now plays the eternalsparkyacht.com film with the name shots removed (plus reduced-motion fix). Delete unused trimmed clips from Files?
- **8 Nov 11:01 (b7d9a3fa):** Draft **Q** now also has the Eternal Spark homepage video. For a sharper homepage video, send the original HD/4K Eternal Spark file (Shopify only has 852×480).
- **8 Nov 10:54 (b7d9a3fa):** Publish draft **Q** (192969080875): hero videos now play even with reduced motion on (Stan's computer has it on). Supersedes the P reduced-motion question.
- **8 Nov 10:48 (b7d9a3fa):** Publish draft **P** (192968851499): hero videos start on first tap when the phone blocks autoplay. Decide whether videos should also play when Reduce Motion is on (currently photo only).
- **7 Nov 18:20 (b7d9a3fa):** Publish draft **O** (192950665259) to get hero videos on Home and Charters. Swap clips in Theme editor › hero › Background video if preferred.
- **7 Nov 17:21: Japan & South Korea voyage is LIVE** on the Online Store and in Charters › Destinations. Still open: resale/booking terms with Ritz-Carlton Yacht Collection, photo rights (low-res port photos), whether to publish to other channels. The Destinations hero takes image 1 of the newest destination, so it may now show the Luminara Suite photo; check and pin a Bahamas image if needed. The page's booking steps/trust copy assume crewed charters, not per-guest cruise fares.
- **7 Nov 18:10 (b7d9a3fa):** New listing live: 2025 Key West 291 FS, West Palm Beach, $248,000. Please confirm the engine hours (the ad says 22 in the text and 20 in the specs) and send the top/cruise speed if you want it shown.
- **7 Nov 16:45 (email-to-listing): Review & publish draft charter destination "Japan & South Korea 11-Day Voyage from Tokyo"** (`15482350731307`). This is a Ritz-Carlton Yacht Collection voyage on Luminara, not an Azure-operated charter. USER: confirm Azure may resell/advertise it and how bookings are handled (travel-advisor/commission terms), confirm photo usage rights (all images from RCYC's site; port photos are low-res 280 px), decide whether to show per-guest fares publicly. Missing: guest capacity, cabins, inclusions/exclusions, booking terms. Fares as of 7 Nov 2026 can change.
- **7 Nov 18:00 (b7d9a3fa):** DYD collection hero fixed: it showed a Sunseeker, now the BULLET 200. WhatsApp may still show the old preview for that link; add ?v=2 to refresh.
- **7 Nov 17:50 (b7d9a3fa):** Draft N (192925564971) is ready to publish. Link previews now use each page's hero or first yacht photo, and the hooks are logged in THEME-UPDATE-HOOKS.md. Still open: change the store-wide share image in Online Store › Preferences (currently Eternal Spark) to an Azure photo. Optionally set a "Share image" on any page or collection.
- **7 Nov 17:40 (b7d9a3fa):** DYD collection link preview fixed. Ask: fix share images for 15 other collections + pages (collection images now; theme fallback in draft N)? Also consider changing the store-wide social sharing image (Preferences) to an Azure brand photo.
- **7 Nov 17:30 (b7d9a3fa):** M is live (L = rollback). Facts strip is not on the live homepage; phone was previewing old theme J. Next edits go into a new draft N.
- **7 Nov 17:20 (b7d9a3fa):** Design page deck image is now a line drawing (AI-assisted from our render) in M. Optional: move the original render into the 3D & renders group. Waiting: publish M.
- **7 Nov 17:10 (b7d9a3fa):** Yacht Designers cards now have large photos in M. Waiting: publish M.
- **7 Nov 17:00 (b7d9a3fa):** Homepage + Buy wording now Azure Yacht Design in M. Waiting: publish M, insurance & financing details.
- **7 Nov 16:50 (b7d9a3fa):** Collection + menus renamed Azure Yacht Design. Ask: update remaining "Azure Yachts" copy on homepage and Buy page?
- **7 Nov 16:40 (b7d9a3fa):** Homepage card renamed Azure Yacht Design. Ask: rename the menu tile / azure-yachts collection title too?
- **7 Nov 16:30 (b7d9a3fa):** Charter fleet filters (location, type) live in M; Miami/FL removed from main menu; icon alignment fixed. Waiting: publish M (live menu layout), insurance & financing details.
- **7 Nov 16:10 (b7d9a3fa):** Destinations page + collection live; destinations removed from charter fleet; Charters menu stacked in M. Live L menu looks cramped until M is published. Waiting: publish M, more destinations, insurance & financing details.
- **7 Nov 15:55 (b7d9a3fa):** Homepage new-build block now lists builder brands (Azure Yachts, Franco Gnessi / DYD) in M. Waiting: next brands to add (collection + logo), insurance & financing details, publish M.
- **7 Nov 15:40 (b7d9a3fa):** Added Azimut 68, Galeon 68, Galeon 55, Exumas and Bimini (live); charter hero video + iPad menu fix in M. Waiting: confirm Azimut 68 price ($3,200/$3,800 vs $3,500/$4,000), own photos for Bimini/Exumas/Galeon 55, what is included on the 3 new yachts, insurance & financing details (partners, licensing, what AYG does itself), remove 'Cost' prices on azurcharters.com, publish M.
- **7 Nov 15:25 (b7d9a3fa):** Homepage wording broadened in M (H1 without location, eyebrow "Based in Fort Lauderdale", title "Yacht Brokerage, Charters & New Builds"). Waiting: which services to list on Service & maintenance; publish M.
- **7 Nov 15:10 (b7d9a3fa):** Duplicate cleanups done in M + brokerage merged into Buy. Waiting: which services to list on Service & maintenance; whether to drop "in South Florida" from the homepage H1 (location stays in title, description and eyebrow); publish M.
- **7 Nov 14:50 (b7d9a3fa):** Designer profiles are built in M. Possible cleanups found (user to choose): NC page PM block and designer list (duplicates), Design page designer list and size guide (duplicates), new-build product 56-step build timeline (duplicate of Build process), merge /pages/brokerage into Buy, Service page is thin. Publish M.
- **7 Nov 14:15 (b7d9a3fa):** Buying guide is live and Guides is in the header (About) and footer menus. Still to do: publish theme M (the live L homepage guides strip is empty), and decide whether to hide /pages/our-approach.
- **7 Nov 14:05 (b7d9a3fa):** Approve and publish the buying guide draft (homepage buy card appears after that). Publish theme M (the live L homepage guides strip is empty since the guides moved to /blogs/guides). Hide /pages/our-approach? Add Guides to the menu/footer?
- **7 Nov 13:45 (b7d9a3fa):** Publish **theme M** soon: the live L homepage guides strip is empty since the guides moved to /blogs/guides. Decide which 3 guides the homepage should feature.
- **7 Nov 13:20 (b7d9a3fa):** L is live (K is the rollback). Publish **theme M** (192907345963) for the News / Guides blog split. Optional: add "Guides" to the menu or footer (menus are global). Still pending: hide /pages/our-approach.
- **7 Nov 12:50 (b7d9a3fa):** K is live (J is the rollback). Publish **theme L** (192907083819) to remove the facts strip. Approve hiding /pages/our-approach (now unlinked). Add "Our approach" to the menu is no longer needed; the values live at /pages/about#approach.
- **7 Nov 12:35 (b7d9a3fa):** Rule: the founding year (2020) appears only in the founder letter on About, nowhere else.
- **7 Nov 12:25 (b7d9a3fa):** The founder letter line is resolved: it now reads "Azure Yacht Group was founded in 2020…". Keep the founding year off the homepage.
- **7 Nov 12:15 (b7d9a3fa):** Founding year confirmed as **2020** (resolves 2012 vs 2022). It is used in K on the homepage facts strip and the About page. Still to confirm: the founder letter line "I started Azure Yacht Group...".
- **7 Nov 11:40 (b7d9a3fa):** Review and publish **theme K** (192906493995): company-voice homepage, with the founder letter and values on About. Theme J is live now and is the rollback. After publishing: hide /pages/our-approach.
- **7 Nov 11:15 (b7d9a3fa):** Homepage redesign + Our Approach page are ready in **theme J**. To do: publish J; add "Our approach" under About in the main menu; supply a landscape hero video; confirm the founder letter line "I started Azure Yacht Group…" and the start year; decide on the Sunseeker 95 MIRRACLE listing status (its video is on the homepage).
- **7 Nov 10:55 (b7d9a3fa):** The About page build diagram is now generic in J. Should the New construction hero ("48 Hybrid by J. David Weiss") and the Design page portfolio text ("designed by J. David Weiss") also become generic, or stay as they are?
- **7 Nov 10:40 (b7d9a3fa):** Publish **theme J** (192903610411) to remove "$0.00 USD" from the search drawer for upon-request yachts.
- **7 Nov 10:40 (b7d9a3fa):** In Shopify admin → Settings → Policies (the connector can't edit these): change stan@azureyachtgroup.com to orders@azureyachtgroup.com in the Privacy, Refund and Contact information policies. Also change the store contact email in Store details if that is where it comes from. Replace "in line with the practices of the International Yacht Brokers Association (IYBA)" with "in line with IYBA practices" in the Refund and Legal notice policies.
- **7 Nov 10:40 (b7d9a3fa):** Approve deleting 15 orphan or empty collections that are still indexable: tartan, boston-whaler, argonaut, key-west, sailboats-for-sale, azimut-yachts-for-sale (duplicate of azimut), solstice-glide, solstice-glide-1, elisium-glide, the-celeste-horizon, design-services, event-charters, maintenance-and-repairs, yacht-brokerage (duplicate of /pages/brokerage) and latest-listings (replaced by just-listed). Redirects already exist for most; I'd add the rest.
- **7 Nov 10:40 (b7d9a3fa):** Three listings imported from Yacht Habit (2018 Sunseeker 95, 1998 Ferretti 80, 2008 Post 42) have thin data and "available through Yacht Habit" copy, and may use the other broker's photos. Keep, rewrite or draft? If the 2018 Sunseeker 95 is MIRRACLE, I'd link it to the video post.
- **7 Nov 09:55 (b7d9a3fa):** Instagram feed: tell me which feed app the old site used (or reinstall one in Shopify admin and connect @azureyachts). I will place it in theme I before "Latest from Azure". Homepage charter and new construction grids are now hidden in I; publish I to apply.
- **7 Nov 09:50 (b7d9a3fa):** Set the public Tartan 37 video (youtu.be/g_Nye7ygIAc) to **Unlisted** in YouTube Studio (Details → Visibility → Unlisted → Save). The connector can't change privacy, and Studio sign-in isn't possible from the current app. The private duplicate mpQ_RC1ecuo is already hidden.
- **7 Nov 09:30 (b7d9a3fa):** Focus on bigger yachts: no listings under $200k, no Tartan (under contract). 4 boats drafted, 3 posts hidden, redirects, menus cleaned. Rule for new listings: skip sale boats under $200k. USER: hide the 5 empty collections in admin; set Tartan YouTube video to unlisted?; publish I.
- **7 Nov 09:10 (b7d9a3fa):** News blog live: 40 backdated articles (Mon/Thu, 22 Jun–5 Nov 2026) + 12 YouTube video posts dated to upload day; Axiom article cleaned. About menu → About us / News; footer News. Homepage + About news strips in I. USER: publish I; OK to post the skipped videos (Element 48, 48 Hybrid design process [unlisted], May 10 2025, 2021–22 company videos)? Photos for Sunseeker 75 / Azimut 60 / Princess 65 / Azimut 65 charters; keep adding a post per new listing/video.
- **7 Nov 08:20 (b7d9a3fa):** H PUBLISHED by the user and verified live. New working copy I `192901152811`; G is the rollback. Next: roadmap steps 2–6.
- **7 Nov 08:00 (b7d9a3fa):** Site effectiveness audit saved as `SITE-AUDIT.md`; 6-step roadmap added to PLAN. USER: publish H, client stories, WhatsApp/reply time, charter rates, owner services list.
- **7 Nov 07:40 (b7d9a3fa):** Buy = brokerage only (Azure NC removed). Menus: NC submenu with PM + Shipyards icons; Charters two-level (types / destinations) in H-only menu `azure-main-menu-h`. About redesigned. PM page graphics (option diagrams + stage timeline). Shipyards: 9 photos with credits + View on map. Collection intro collapsible (Read more). USER: publish H; Dmitry Wolf on About?
- **7 Nov 06:50 (b7d9a3fa):** PM options: we act as your project management company / we select a project management company / we oversee. 48 Hybrid 38 kn, South Florida kept.
- **7 Nov 06:30 (b7d9a3fa):** GEKO 60 and Bullet 200 vendor = DYD (live).
- **7 Nov 06:15 (b7d9a3fa):** Azure 48 Hybrid: J. David Weiss design, Zurn Yacht Design naval architecture, to be built at New England Boatworks (vendor/builder updated live). Concepts vendor = Azure Design. Axiom 48 = Azure Design (confirmed). Azure 39 DROPPED, never mention it. USER: publish H.
- **7 Nov 05:30 (b7d9a3fa):** Azure positioned as project management, not a designer. New LIVE Project Management page (layout in H). 48 Hybrid credited to J. David Weiss; other concepts = "Azure Design". Naval architects + DLBA/Murray/Vanguard; Safe Harbor NEB; all yards labelled examples; compact designer lists; New build guide nav. USER: publish H
- **7 Nov 04:30 (b7d9a3fa):** Design page rebuilt in H (team diagram, 8-stage process, sketch gallery, options, size & material guide, 7 designers). New LIVE Shipyards page (full layout in H). Design pages' footer now links to new construction, naval architects, shipyards and designers instead of buy/sell/charter. USER: approve design images, confirm yards, add more naval architects?, publish H.
- **7 Nov 03:50 (b7d9a3fa):** New construction page in H: "Designers we work with" list (Franco Gnessi / DYD and Azure Yachts, linked to their collections). USER: other designers to add? Publish H.
- **7 Nov 03:25 (b7d9a3fa):** broker name is **Stanley Zemskoff**; photo added (upscaled from the user's headshot). USER: publish H.
- **7 Nov 03:05 (b7d9a3fa): H also has** a broker profile (now Stanley Zemskoff, with photo), a "Request a call" option and an optional budget field on the charter forms. USER: headshot, optional WhatsApp and languages, confirm public naming, publish H.
- **7 Nov 02:35 (b7d9a3fa): WORKING THEME = "Azure Savor – H" `192895877163`.** Charter pages have a 4-step booking path and a "Your booking is protected" section. USER: preview and publish H. Optional next steps: a broker profile block, a "Request a call" option and a budget field on the inquiry form, and a "no added broker fee" line (only if true for Azure).
- **7 Nov 02:10 (b7d9a3fa): G IS MAIN (published by the user).** The charter-terms page now has a note that exact terms depend on the charter agreement (live). Next working copy: duplicate G before further theme edits. USER: re-run the Semrush Site Audit.
- **7 Nov 01:55 (b7d9a3fa):** top-level "New in Stock" removed from the live main menu (it remains under Buy). Semrush connected, but no API units. USER will make the orders@ email and policy edits in admin.
- **7 Nov 01:45 (b7d9a3fa): Semrush fixes.** SEO titles and GEKO title LIVE. In G: meta-description fallbacks, product schema (shippingDetails removed; no schema on listings with no photo) and the "Powered by Shopify" footer link removed. USER: publish G; policy and store-email edits in admin (stan@ → orders@); resend the Yacht Habit rename list.
- **7 Nov 01:20 (b7d9a3fa): F is MAIN (published by user). WORKING THEME = "Azure Savor – G" `192891781163`:** the Franco Gnessi profile moved from New Construction to the collection `franco-gnessi-dyd-yachts` (new template `collection.franco-gnessi`; suffix already set live). USER: preview and publish G. Azimut 55 charter now has 13 real photos (live).
- **6 Nov 23:55 (b7d9a3fa): Working copy F `192889454635`:** main tiles = darkened photo + centred icon (7 Nov 00:15), secondary links frameless, black submenu with white text, sharper line icons, builder logos (Azure, DYD), and informational links in a second row. USER: preview and publish F. ~~Confirm DYD logo use~~: CONFIRMED 00:30. Future builders: upload `menu-logo-<collection-handle>.png` to Files.
- **6 Nov 23:05 (b7d9a3fa): E is MAIN (published by user). Working copy F `192889454635`** adds mono-colour line icons in place of the mega-menu and drawer photos. USER: preview and publish F.
- New construction process page (2026-11-06 22:30):
  - ~~Make /pages/new-construction-process visible~~: DONE 23:05.
  - ~~Approve updating the menu item "How a build works" in azure-main-menu-brokerage to point to /pages/new-construction-process~~: DONE 00:30 (live).
  - Confirm usage rights for the build-hall photos you supplied.
  - Confirm GEKO 60's hull material. (Title fixed 7 Nov 01:45.)
- Homepage hero is now the Pershing 8X ALEXANDRA photo, upscaled to 3200 px (2026-11-06 21:55). Confirm photo usage rights with Luke Brown Yachts. A native high-res original from them would be better still.
- **6 Nov 21:40 (b7d9a3fa): D is MAIN (published by user). Working copy E `192886964267` adds:** reviews moved to the Charters page, "Just listed" (3 newest listings, automatic), and the homepage SEO title and description. Pershing 8X and Ferretti 720 are now live and featured. USER: publish E. ARLENE now shows on the homepage; get Merle Wood's consent or set ARLENE to draft.
- **6 Nov 21:00 (b7d9a3fa): Brokerage-first homepage, menu and inquiry funnel in D.** New collection "New boats in stock" (2 Canados) and new menu `azure-main-menu-brokerage`. USER: preview and publish D. Consider updating the homepage SEO title (Online Store › Preferences) to lead with yacht sales, and adding more listings to Featured yachts for sale.
- **6 Nov 20:25 (b7d9a3fa): Product snippets error fixed in D** (no Product markup on upon-request / $0 listings). USER: publish D, then click "Validate fix" in both Search Console reports.
- **6 Nov 20:10 (b7d9a3fa): Legal notice draft.** USER: confirm the legal entity (Sunbiz shows no "Azure Yacht Group LLC"; "AZURE YACHT GROUP INC." F21000006718 is inactive), state, registration no., representative, broker license (Ch. 326) and governing law. Then counsel review and paste into Settings › Policies.
- **6 Nov 19:45 (b7d9a3fa): Refund policy draft (brokerage purchase-agreement terms, IYBA not named).** USER: counsel review, then paste into Settings › Policies. IYBA: approved 19:55 to say the policy is "in line with IYBA practices" (alignment only, no membership claim). D now links offers to /policies/refund-policy.
- **6 Nov 19:20 (b7d9a3fa): Search Console merchant-listing warnings fixed in working copy D** `192883654699`. USER: approve "not returnable / not shipped" in the offer markup, preview and publish D, click "Validate fix" in Search Console, and replace the generic 30-day Refund policy.
- **6 Nov 17:30 (b7d9a3fa): Ferretti and Pershing placeholders replaced with real boats (DRAFT)**: 2020 Pershing 8X ALEXANDRA ($3.995M) and 2023 Ferretti 720 Hull #4 ($3.85M). Both are off the live site until published; redirects are in place. **New DRAFT Canados 571 Blade.** USER: confirm prices and photo rights with Luke Brown / Yachting Experts. For the 571, confirm the cabin count and real photos (location confirmed as Fort Lauderdale on 6 Nov, 17:40). Then publish.

- **6 Nov 18:10 (b7d9a3fa): All 27 sale listings categorized (Yachts / Motor Boats / Sailboats) with their category fields filled.** DONE 18:35: charters set to Travel & Leisure. Price on request is now automatic at $0.00.

- **6 Nov 16:45 (b7d9a3fa): DRAFT listing 2009 Horizon 76 ARLENE** (`15479587176491`). USER: get written consent from Merle Wood (Iain Lawrie) to advertise online and confirm the price ($1.195M in the email vs $1.095M elsewhere), then publish. The email watcher now also fires on self-forwards (message_sent trigger).

- **6 Nov 16:20 (b7d9a3fa): DRAFT listing 2026 Canados Gladiator 493 Grand** (`15479585439787`). USER: confirm the price with Yachting Experts (it shows price on request for now), confirm photo rights, then publish. The forwarded Horizon 76 "Arlene" email (15:58) is being handled by the email-to-listing automation.

- **6 Nov 15:55 (b7d9a3fa): THEME C PUBLISHED (DONE).** Email-to-listing automation is live: forward a listing email to **stan+listings@azureyachtgroup.com** and a DRAFT listing is created. USER: review and publish each draft. Policy text still needs to be pasted manually (Settings › Policies).

- **6 Nov 15:45 (b7d9a3fa): WORKING THEME = "Azure Savor – C" `192880148523`** (copy of B). Done: Azimut set to 55 ft, Yacht Habit N/A placeholders fixed, Hallandale Beach replaced with Fort Lauderdale (pages live; homepage and About template text in C). USER: publish C, approve the policy text.

- **6 Nov 15:20 (b7d9a3fa): THEME B IS LIVE; charter terms and brokerage disclaimer published; domain DONE.** Site check clean (see CHANGELOG). Done: redirect `/pages/charter-services` → `/pages/charters`; contact location set to 1314 E Las Olas Blvd #2256, Fort Lauderdale. USER:
  1. Check the stan@ inbox for the test inquiry (hCaptcha appeared).
  2. Azimut charter listing: 50 or 55 ft?
  3. Real details for the 5 Yacht Habit placeholder listings.
  4. Review the policy text (Azure Yacht Group LLC, Las Olas address, (754) 444-6729).
  5. Replace "Hallandale Beach" in the homepage text (needs a new theme copy) and the About page.

- **4 Nov 14:30 (359247fc): THEME A IS LIVE (MAIN). WORKING THEME = "Azure Savor – B" `192766771243`.** The site check is done; 7 fixes are in B (see the CHANGELOG entry for 14:30). USER:
  1. Publish B.
  2. Approve publishing the hidden pages "Charter terms" and "Brokerage disclaimer". They are linked live and currently return 404.
  3. Approve the live data fixes: Azure 48 → 48 Hybrid in two collection texts, the Wally 48 description, and the duplicate Azimut 50 listing with its SEO title.
  4. Hallandale Beach or Las Olas, Fort Lauderdale? The site and the Google profile disagree.
  - DOMAIN: azureyachtgroup.com now points to Shopify. DONE.

- **3 Nov 19:25 (359247fc): Testimonials DONE in theme A.** 6 of the 7 real Google reviews (all 5 stars) are on the homepage, with a link to Google. **Rule: do not mention Udo Willersinn on the website.** That closes the IYBA question: no IYBA claim on the site.

- **3 Nov 19:10 (359247fc): Round A status.**
  - **Done in theme A:** inquiry-only (quick add off), fiberglass and aluminum payment stages, terms note, H1.
  - **Done live:** Azure 60 is now a catamaran with its original render, Le Ponant has photos, 34 crew and the rate in €, Ascente has the 2025 refit.
  - **USER:**
    1. Review the hidden pages "Charter terms" and "Brokerage disclaimer" and confirm the deposit and cancellation numbers.
    2. ~~Connect Google Business Profile for real testimonials.~~ DONE 19:25.
    3. Decide whether Le Ponant is all-inclusive or €540k plus APA.
    4. ~~Udo Willersinn / IYBA~~ CLOSED 19:25: the user said not to mention him on the website. No IYBA claim.
    5. Publish theme A and the two pages together.

- **3 Nov 18:55 (359247fc): WORKING THEME = "Azure Savor – A" `192719683627`** (a copy of MAIN). Do all theme edits there. The user publishes it at the end of the round. Done in A so far: the product-page H1 fix.

- **3 Nov 18:35 (359247fc): Featured yachts for sale.** The collection `featured-yachts-for-sale` (Wally 48, Azimut 50, Sunseeker Predator 68) DONE. The user set it on the homepage, and the live site was checked.

- **3 Nov 18:10 (359247fc): Featured charters.** The collection `featured-charters` (Fjord 41 XL, Sea Ray Sundancer 60, Eternal Spark) DONE 18:25. The user set it on the homepage, and the live site was checked. See the CHANGELOG entry for 18:10.

- **3 Nov (f56cb0f2): theme update. DONE.** The user published Savor 4.4.0 (192712441899), and the live site was checked. The rollback copy is 192657260587. After future updates, re-add the hooks in `THEME-UPDATE-HOOKS.md`.
- **3 Nov: DOMAIN.** The Shopify primary domain is azureyachtgroup.com, but the domain still points to the old Tilda site, so visitors don't see the Shopify store. USER: point DNS to Shopify (A 23.227.38.65, AAAA 2620:0127:f00f:5::, CNAME www → shops.myshopify.com.; Shopify Help "Connect your third-party domain manually") or change the primary domain back until launch.

- **2 Nov answers received:** keep new products Active; aluminum confirmed; separate aluminum process (done, no payment stages yet); 60 ft image replaced with a concept illustration (swap for a real render when available); naval architects "works with" (done); designer photos from the web (done); publishing approved, but the user must click Publish in Shopify admin (connector blocks it).
- **Still open:** aluminum payment stages, if wanted; Geko duplicate square image; Y-8 / Le Ponant / Ascente data; image rights; testimonials and terms; whether to show new_build.budget.

- **In-house designs (3 Nov, f56cb0f2):** confirm hull material per model (Vantage 85, Azure 80, Luxury 120 and Magic Carpet are set to Aluminum, the rest Fiberglass); add the fiberglass payment stages later; decide whether 70–130 ft aluminum builds need their own process text; confirm the 60 ft sailing yacht render (it shows a catamaran).
- **Design pages (2 Nov, f56cb0f2):** DONE: pages published and Design submenu added, with "The designers" moved out of New Construction (user request). Profile back-links also DONE (3 Nov). Send photos and get consent for Casali, J&J, Weiss, Barnett and Strand (monogram panels are used for now). Confirm which naval architecture firms Azure actually works with before saying so.
- **Geko:** show the €60M–€85M budget publicly? Choose how to fix the live Geko page (see next action 4).
- **Design page:** review the generic process text on the working-copy Design page. Confirm the design services list.
- **Designers:** get consent from each of the six designers. Share any projects done together.
- **Azure 48s:** give them a lighter new-build template instead of the brokerage one?
- **Yacht Habit:** renames APPROVED 7 Nov, but the list is lost. USER: resend the seven renames.
- **Email:** USER (admin only): store email → orders@; stan@ → orders@ in the Contact, Privacy and Refund policies. "[INSERT TRADING NAME]" is no longer present (checked 7 Nov).
- **Contact details:** WhatsApp number, full address and custom domain.
- **Content:** real testimonials, charter deposit and cancellation terms, brokerage disclaimer, and photos for 4 charter listings: Sunseeker 75, Princess 65, Azimut 60 and Azimut 65 'Elegance'. Azimut 55 was done 7 Nov 01:20. For Elegance, confirm whether it is the OneDrive "Alegra" boat.
- **Checkout:** confirm inquiry-only for both charter and brokerage.
- ~~Homepage hero link~~ DONE: no charter-services links remain, and the 301 to /pages/charters is in place.
- **Publishing:** explicit approval to publish the working copy.

- ~~Azure 48 hybrid figures~~ DECIDED 22:50: keep 2 h electric / 38 kn max (as listed).
- ~~Eternal Spark price~~ DONE 22:50: euro rates in the option names, USD $372,500 / $389,000.
- ~~Y-8~~ APPROVED by the user 7 Nov. (Was: confirm the hull, price ($80k vs about €35–41k a week for comparable Y8s) and the cruising area.)
- ~~Image rights~~ CONFIRMED by the user 7 Nov. (Was: confirm you own the 10 old-site renders now on the Design page and Axiom 48.)
- **IYBA:** "IYBA-certified brokers" is left out until it's verified.

## Ground rules (both sessions)

- Work only in the working copy. Live store data changes only with approval. Never publish without approval.
- Don't invent specs, testimonials, availability or inclusions. Don't promise rankings. Never ask for passwords.
