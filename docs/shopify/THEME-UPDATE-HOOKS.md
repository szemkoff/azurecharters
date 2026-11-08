# Azure theme: what to re-add after a Savor update

Last checked: Savor 4.4.0 (draft 192712441899), 3 Nov 2026. Updated 7 Nov 2026 (b7d9a3fa): link-preview hooks.

Shopify's "Add to draft" update replaces Savor's own files. It keeps our files (`azure-*` sections, blocks, snippets and assets) and the templates. After each update, open the new draft in Edit code and re-add the six hooks below. Each is marked `Azure hook` / `AZURE HOOK` (search the code for "Azure hook" to find them all). Then preview with `?_fd=0&preview_theme_id=<id>` and publish.

| File | Re-add | Purpose |
|---|---|---|
| `sections/product-information.liquid` | Replace the `<script type="application/ld+json">{{ closest.product \| structured_data }}</script>` block with `{%- render 'azure-product-schema', product: closest.product -%}` | No $0 price in Google structured data for "upon request" yachts |
| `snippets/meta-tags.liquid` | Change `{%- if request.page_type == 'product' -%}` (the og:price block) to `{%- if request.page_type == 'product' and product.price > 100 and product.metafields.listing.price_on_request.value != true -%}` | No $0 og:price in social previews |
| `snippets/product-media-gallery-content.liquid` | Right after the grid `</ul>`, add `{%- render 'azure-gallery-limit', count: sorted_media.size, zoom: block_settings.zoom -%}` | Show 11 photos plus a "View all N photos" button |
| `sections/header.liquid` | (1) Add `and template.suffix == 'new-construction'` to the product transparent condition. (2) Add an `elsif section.settings.enable_transparent_header_collection and template.name == 'page' and template.suffix != blank and template.suffix != 'contact'` branch that sets `transparent = 'always'` with the collection text colour. (3) Change `<h1 class="visually-hidden">{{ shop.name }}</h1>` to `<p …>` | Transparent header over full-height heroes; one h1 per page |
| `layout/theme.liquid` | Change `{%- render 'meta-tags' -%}` to `{%- render 'meta-tags', azure_layout: content_for_layout -%}` ([b7d9a3fa], 7 Nov) | Passes the page to the link-preview snippet |
| `snippets/meta-tags.liquid` | Replace the `{%- if page_image -%}` og:image / secure_url / width / height block with `{%- render 'azure-og-image', layout_html: azure_layout -%}` ([b7d9a3fa], 7 Nov) | Link previews (WhatsApp, iMessage, Facebook) use the page hero or first yacht photo instead of the store default |

Also check after each update:
- Shopify may insert a standard `main` section (page title or product grid) into `page.*` and `collection.*` templates. Remove it so the Azure hero stays first.
- Link previews: set a page's or collection's own preview picture in its "Share image" field (metafield `custom.share_image`, in Shopify admin). That data doesn't depend on the theme. The logic is in `snippets/azure-og-image.liquid`, and the hero sections write a hidden `<!--ay-og:…-->` marker it reads.
- Contact details are in shop metafields `azure.contact_*` (Settings › Custom data › Shop). They don't depend on the theme.
