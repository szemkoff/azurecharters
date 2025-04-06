# Yacht Data Import Guide

This guide explains how to bulk import yacht listings into your Tilda website using CSV files.

## CSV Format Overview

The yacht listings CSV template contains the following key fields:

| Field | Description | Example |
|-------|-------------|---------|
| Title | Yacht name | "Azure Princess" |
| Description | Brief yacht description | "Luxurious motor yacht offering..." |
| Length | Length in feet | 64 |
| Guests | Maximum guest capacity | 10 |
| Cabins | Number of cabins | 3 |
| Crew | Number of crew members | 4 |
| Year | Year built/refitted | 2018 |
| Builder | Yacht manufacturer | "Sunseeker" |
| Main_Image_URL | Primary image URL | https://example.com/yacht1-main.jpg |
| Image_URL_1-4 | Additional image URLs | https://example.com/yacht1-1.jpg |
| SKU | Stock Keeping Unit | AP-W-BASIC |
| Base_Price | Current price | 25000 |
| Old_Price | Previous/strikethrough price | 28000 |
| Quantity | Available inventory (typically 1) | 1 |
| Charter_Duration | Length of charter | "Week", "Day", "Half-day" |
| Package_Type | Service level | "Basic", "Premium", "All-inclusive" |
| Category | Yacht category | "Motor Yachts", "Sailing Yachts" |
| Card_Mark | Special label | "NEW", "SALE", "-20%" |
| Engine | Engine specifications | "2x MAN 1200HP" |
| Max_Speed | Maximum speed in knots | 28 |
| Cruising_Speed | Cruising speed in knots | 22 |
| Beam | Width in meters | 5.4 |
| Draft | Draft in meters | 1.8 |
| Water_Toys | Available equipment | "Jet ski, SeaBob, Paddleboard..." |
| Additional_Info | Extra details | "Includes basic crew service..." |
| External_ID | Unique identifier | YT001 |

## Product Variants Structure

For each yacht, you can create multiple variants based on:
1. Charter duration (Week, Day, Half-day)
2. Package type (Basic, Premium, All-inclusive)

In the CSV file, only the first row for each yacht contains all details. Subsequent variants only need:
- Title (same as the main listing)
- SKU (unique for each variant)
- Price information
- Charter_Duration
- Package_Type
- Additional_Info specific to that variant

## Importing to Tilda

To import the CSV file into Tilda:

1. Log in to your Tilda admin dashboard
2. Navigate to **Store → Products**
3. Click the **Import** button
4. Select the CSV file
5. Match the CSV columns to Tilda fields
6. Review the data preview
7. Click **Import** to begin the process

## Sample CSV Template

We've created a sample CSV template with two yacht listings and their variants, which you can find at:
`/charter-framework/yacht-listings-template.csv`

## Best Practices

1. **Images**: Ensure all image URLs are publicly accessible
2. **SKUs**: Create a consistent SKU system (e.g., yachtcode-duration-package)
3. **Variants**: Include all variants even if not immediately available
4. **Descriptions**: Keep main descriptions concise for better display
5. **Pricing**: Include both current and old prices for marketing appeal

## Troubleshooting

- **Image Import Failures**: Verify image URLs are correct and accessible
- **Character Encoding**: Save CSV files in UTF-8 format
- **Quotation Marks**: Enclose text fields in double quotes, especially if they contain commas
- **Field Mapping**: Check field mapping carefully during the import process 