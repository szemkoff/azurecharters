---
sidebar_position: 5
title: Yacht Data Import Guide
description: Comprehensive guide for importing yacht listings with parent-child variants into Tilda
---

# Yacht Data Import Guide

This guide explains how to bulk import yacht listings into your Tilda website using CSV files with parent-child variant structure.

## Parent-Child Variant System

Azure Yacht Group utilizes a parent-child variant system for yacht listings that offers several advantages:

1. **Centralized Product Management**: Main yacht details managed in one parent product
2. **Flexible Charter Options**: Multiple charter durations as child variants
3. **Visual Consistency**: Shared imagery and specifications across variants
4. **SEO Optimization**: Primary product page concentrates SEO value
5. **Simplified Navigation**: Users select options from a single product page

## CSV Format Overview

Our yacht listings CSV template follows Tilda's import format with additional fields for variant management:

| Field | Description | Parent Product | Child Variant |
|-------|-------------|:--------------:|:-------------:|
| Tilda UID | Unique identifier | Required | Required |
| Brand | Yacht manufacturer | Required | Optional |
| SKU | Stock Keeping Unit | Required | Required |
| Mark | Special label | Optional | Optional |
| Category | Yacht category | Required | Required |
| Title | Yacht name | Required | Required |
| Description | Brief description | Required | Required |
| Text | Detailed HTML content | Required | Empty |
| Photo | Image URLs (space separated) | Required | Empty |
| Price | Current price | 0 | Required |
| Quantity | Available inventory | 1 | 1 |
| Price Old | Previous price | 0 | Optional |
| Editions | JSON for product options | Required | Empty |
| Modifications | Variant specification | Empty | Required |
| External ID | Your reference ID | Optional | Optional |
| Parent UID | Links child to parent | Empty | Required |
| Characteristics | Custom specifications | Optional | Optional |
| SEO fields | Meta tags, etc. | Optional | Empty |
| Tabs:1, Tabs:2 | Tabbed content sections | Optional | Empty |

## Parent Product Structure

The parent product row contains:

1. **Complete Yacht Information**: All specifications, images, and details
2. **HTML Content**: Rich HTML in the `Text` field with formatted specifications and icons
3. **Zero Price**: Parent product typically has price set to 0
4. **Product Options**: JSON definition in the `Editions` field that defines available options:

```
product_options:[{"title":"Charter Duration","params":{"view":"select","hasColor":false,"linkImage":false}}]
```

5. **Tabbed Content**: Optional tabs for additional content sections like pricing tables:

```
info|#|Charter Rates|#|<div><h3>Charter Rates</h3><table style="width:100%;border-collapse:collapse;margin-top:20px"><tr style="border-bottom:1px solid #eee"><th style="text-align:left;padding:10px;width:60%">Duration</th><th style="text-align:right;padding:10px">Price</th></tr><tr style="border-bottom:1px solid #eee"><td style="padding:10px">4 Hours</td><td style="text-align:right;padding:10px">$4,000</td></tr></table></div>
```

## Child Variant Structure

Each child variant row contains:

1. **Basic Information**: Title, SKU, Category matching parent
2. **Variant-Specific Price**: Actual price for this charter option
3. **Parent UID Reference**: Links this variant to the parent product
4. **Option Selection**: The `Modifications` field specifies which option this variant represents:

```
Charter Duration:4 Hours
```

5. **Empty Fields**: Many fields (Text, Photo, Editions, Tabs) are left empty in variant rows

## Complete Import Example

Here's an example of a parent product with four charter duration variants:

```csv
"Tilda UID";Brand;SKU;Mark;Category;Title;Description;Text;Photo;Price;Quantity;"Price Old";Editions;Modifications;"External ID";"Parent UID";Characteristics:Length;Characteristics:Guests;Characteristics:Cabins;Characteristics:Crew;Characteristics:Year;Weight;Length;Width;Height;Unit;Portion;"SEO title";"SEO descr";"SEO keywords";"FB title";"FB descr";Url;Tabs:1;Tabs:2
987654321001;Azimut;"Azimut 70";PREMIUM;"Motor Yachts;Yacht Charters;Featured Yachts";"Azimut 70 'Drakkar'";"Length: 70ft | Guests: 8 | Cabins: 4<br />Experience unparalleled luxury aboard this meticulously maintained Azimut 70 Evolution.";"<p>Embark on an unforgettable journey aboard the 'Drakkar', a magnificent Azimut 70 Evolution that masterfully combines breathtaking Italian design with exhilarating performance.</p><h3>Specifications</h3><div style=""display:flex;flex-wrap:wrap""><div style=""flex:0 0 48%;margin-bottom:20px;display:flex;align-items:center""><div style=""width:50px;height:50px;border-radius:50%;background:#f5f5f5;display:flex;align-items:center;justify-content:center;margin-right:15px;font-size:24px;"">👥</div><div><div style=""color:#999;font-size:14px"">GUESTS</div><div style=""font-size:28px;font-weight:bold"">8</div></div></div></div>";;0;1;0;"product_options:[{""title"":""Charter Duration"",""params"":{""view"":""select"",""hasColor"":false,""linkImage"":false}}]";"";"EfDrKkr2dRak";"";70;8;4;2;2012;45000;70;19;20;PCE;1;"Azimut 70 'Drakkar' Luxury Yacht Charter | Miami";"Experience the ultimate luxury aboard this meticulously maintained 70ft Azimut Evolution featuring 4 staterooms, twin MAN 1360hp engines, and elite amenities.";"luxury yacht charter miami, azimut 70, private yacht rental";"";"";https://azureyachtgroup.com/yacht-charters/drakkar;"info|#|Charter Rates|#|<div><h3>Charter Rates</h3><table style=""width:100%;border-collapse:collapse;margin-top:20px""><tr style=""border-bottom:1px solid #eee""><th style=""text-align:left;padding:10px;width:60%"">Duration</th><th style=""text-align:right;padding:10px"">Price</th></tr><tr style=""border-bottom:1px solid #eee""><td style=""padding:10px"">4 Hours</td><td style=""text-align:right;padding:10px"">$4,000</td></tr><tr style=""border-bottom:1px solid #eee""><td style=""padding:10px"">8 Hours</td><td style=""text-align:right;padding:10px"">$7,500</td></tr><tr style=""border-bottom:1px solid #eee""><td style=""padding:10px"">Weekly</td><td style=""text-align:right;padding:10px"">$145,000</td></tr><tr><td style=""padding:10px"">Custom Request</td><td style=""text-align:right;padding:10px"">Contact Us</td></tr></table></div>";
987654321002;Azimut;"AZ70-4H";PREMIUM;"Motor Yachts;Yacht Charters;Featured Yachts";"Azimut 70 'Drakkar' - 4 Hour Charter";"Length: 70ft | Guests: 8 | Cabins: 4";;;4000;1;0;;"Charter Duration:4 Hours";"EfDrKkr2dRak-4H";987654321001;70;8;4;2;2012;45000;70;19;20;PCE;1;;;;;;
987654321003;Azimut;"AZ70-8H";PREMIUM;"Motor Yachts;Yacht Charters;Featured Yachts";"Azimut 70 'Drakkar' - 8 Hour Charter";"Length: 70ft | Guests: 8 | Cabins: 4";;;7500;1;0;;"Charter Duration:8 Hours";"EfDrKkr2dRak-8H";987654321001;70;8;4;2;2012;45000;70;19;20;PCE;1;;;;;;
987654321004;Azimut;"AZ70-WEEK";PREMIUM;"Motor Yachts;Yacht Charters;Featured Yachts";"Azimut 70 'Drakkar' - Weekly Charter";"Length: 70ft | Guests: 8 | Cabins: 4";;;145000;1;0;;"Charter Duration:Weekly";"EfDrKkr2dRak-W";987654321001;70;8;4;2;2012;45000;70;19;20;PCE;1;;;;;;
987654321005;Azimut;"AZ70-CUSTOM";PREMIUM;"Motor Yachts;Yacht Charters;Featured Yachts";"Azimut 70 'Drakkar' - Custom Charter";"Length: 70ft | Guests: 8 | Cabins: 4";;;0;1;0;;"Charter Duration:Custom Request";"EfDrKkr2dRak-C";987654321001;70;8;4;2;2012;45000;70;19;20;PCE;1;;;;;;
```

## HTML Content Recommendations

For the `Text` field in parent products, we recommend:

1. **Icon Integration**: Use unicode emoji icons (👥, 🛏️, 👤) for guest/cabin/crew counts
2. **Responsive Layout**: Create flexible display using flex layout styles
3. **Visual Hierarchy**: Use clear typography and spacing for readability
4. **Consistent Styling**: Maintain brand fonts and colors

Example of a specification block with emoji icons:

```html
<div style="display:flex;flex-wrap:wrap;font-family:Arial,sans-serif">
  <div style="flex:0 0 48%;margin-bottom:20px;display:flex;align-items:center">
    <div style="width:50px;height:50px;border-radius:50%;background:#f5f5f5;display:flex;align-items:center;justify-content:center;margin-right:15px;font-size:24px;">👥</div>
    <div>
      <div style="color:#999;font-size:14px">GUESTS</div>
      <div style="font-size:28px;font-weight:bold">8</div>
    </div>
  </div>
  <!-- Additional specification blocks... -->
</div>
```

## Importing to Tilda

To import the CSV file into Tilda:

1. Log in to your Tilda admin dashboard
2. Navigate to **Store → Products**
3. Click the **Import** button
4. Select the CSV file (UTF-8 encoding required)
5. Match the CSV columns to Tilda fields
6. Review the data preview
7. Click **Import** to begin the process

## Common Import Issues

| Issue | Solution |
|-------|----------|
| Wrong data columns number | Ensure all rows have the same number of semicolons, even for empty fields |
| Missing parent links | Verify all child variants have correct Parent UID values |
| Editions format error | Check JSON format in the Editions field for parent products |
| Empty child fields | Some fields like Text and Photo should be empty in child variants |
| HTML formatting issues | Use double quotes within HTML and escape with backslashes where needed |

## Best Practices

1. **Consistent UIDs**: Develop a logical numbering system for product UIDs
2. **SKU System**: Create a consistent SKU system (e.g., `BRAND-MODEL-OPTION`)
3. **Variants Order**: List all variants immediately after their parent product
4. **HTML Validation**: Validate HTML content before import to prevent formatting issues
5. **Small Batches**: Import in batches of 10-20 products for easier troubleshooting

## Reference Files

We've created reference files to help with your imports:

- Complete template: `/yacht-listings/tilda-final-corrected-v2.csv`
- Sample import: `/yacht-listings/tilda-import-final.csv`
- Test file: `/yacht-listings/tilda-parent-child-variants.csv`

## Advanced Features

Our parent-child system supports these advanced features:

1. **Multiple Variant Types**: Beyond charter duration, options can include different service levels
2. **Tabbed Content**: Multiple content tabs for different aspects of the yacht
3. **Custom Characteristics**: Store specific yacht details in dedicated fields for filtering
4. **URL Structure**: SEO-friendly URLs with consistent patterns

---

*Last Updated: April 30, 2025*  
*Contact: data@azureyachtgroup.com for import assistance* 