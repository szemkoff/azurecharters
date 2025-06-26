---
title: Zapier Referral System Setup
sidebar_label: Zapier Setup Guide
---

# Zapier Referral System Implementation

## 🎯 Overview

**Total Setup Time:** 30 minutes  
**Monthly Maintenance:** 15 minutes  
**System Capacity:** 100 tasks/month (≈20 referrals)  
**Cost:** $0/month using Zapier Free plan

**What You'll Build:**
- 5 automated Zapier workflows
- Google Sheets partner dashboards
- Automated email notifications
- QuickBooks integration
- Monthly payment processing

---

## 🔧 Technology Stack

### Core Components (100% Free)
- **Zapier Free** - 5 automations, 100 tasks/month
- **Google Sheets** - Partner tracking and dashboards
- **Trello** - Lead management system
- **Gmail** - Email notifications
- **QuickBooks** - Financial tracking
- **Zelle** - Payment processing

### Upgrade Path
- **Zapier Starter** ($19.99/month) - 20 Zaps, 750 tasks/month
- **Google Apps Script** - Unlimited capacity alternative

---

## 📋 Phase 1: Google Sheets Setup (10 minutes)

### Step 1: Create Master Spreadsheet

1. **Go to [sheets.google.com](https://sheets.google.com)**
2. **Click "Blank"** to create new sheet
3. **Rename to:** "Azure Yacht Group - Referral System"
4. **Create 4 tabs:** Partners, Referrals, Monthly Summary, Settings

### Step 2: Partners Tab Headers

```
A1: Partner ID    E1: Status        I1: Total Referrals
B1: Name          F1: Join Date     J1: Total Earned  
C1: Email         G1: Zelle Info    K1: Last Payment
D1: Phone         H1: Referral Code L1: Notes
```

### Step 3: Referrals Tab Headers

```
A1: Referral ID   G1: Your Revenue    M1: Notes
B1: Date          H1: Commission      N1: Trello Card ID
C1: Customer      I1: Status          O1: Partner Email
D1: Customer Email J1: Charter Date   P1: Payment Status
E1: Partner Code  K1: Payment Date    Q1: Created By
F1: Retail Price  L1: Payment Ref     R1: Updated Date
```

### Step 4: Add Commission Formula

**In cell H2 (Commission column):**
```excel
=IF(G2="","",IF(G2<=300,100,IF(G2<=500,150,IF(G2<=800,200,300))))
```

**Copy this formula down the entire H column**

### Step 5: Monthly Summary Tab

```
A1: Month         C1: Total Revenue    E1: Avg Commission
B1: Referrals     D1: Total Paid       F1: Pending Amount
```

---

## ⚡ Phase 2: Zapier Automations (15 minutes)

### Zap 1: Trello → Google Sheets (Log Referrals)

**Trigger:** Trello - Card Moved to List
- **Board:** Your Trello board
- **List:** "Proposal"

**Action:** Google Sheets - Create Spreadsheet Row
- **Spreadsheet:** Azure Yacht Group - Referral System
- **Worksheet:** Referrals
- **Mapping:**
  - Referral ID: `REF-{{zap_meta_human_now_date}}`
  - Date: `{{date}}`
  - Customer: `{{card_name}}`
  - Partner Code: Extract from card description
  - Retail Price: Extract from card description  
  - Your Revenue: Extract from card description
  - Status: "Pending"
  - Trello Card ID: `{{card_id}}`
  - Created By: "Zapier"

**Filter:** Only if card description contains "PARTNER:"

### Zap 2: Google Sheets → Gmail (Partner Notification)

**Trigger:** Google Sheets - New Spreadsheet Row
- **Spreadsheet:** Azure Yacht Group - Referral System
- **Worksheet:** Referrals

**Action:** Gmail - Send Email
- **To:** Partner email (lookup from Partners tab)
- **Subject:** "New Referral Logged - {{Customer Name}}"
- **Body:**
```
Hi {{Partner Name}},

Great news! Your referral has been logged in our system.

🎯 REFERRAL DETAILS
Customer: {{Customer Name}}
Referral ID: {{Referral ID}}
Commission: ${{Commission}}
Status: Pending

📊 TRACK YOUR PROGRESS
View your dashboard: [Your filtered view link]

Thanks for your partnership!
Azure Yacht Group
```

### Zap 3: Google Sheets → Gmail (Monthly Payment Alert)

**Trigger:** Google Sheets - New or Updated Spreadsheet Row
- **Spreadsheet:** Azure Yacht Group - Referral System
- **Worksheet:** Referrals

**Filter:** Status = "Completed" AND Payment Date is empty

**Action:** Gmail - Send Email (to you)
- **To:** Your email
- **Subject:** "Commission Payment Due - {{Partner Name}}"
- **Body:**
```
Payment Due Alert

Partner: {{Partner Name}}
Amount: ${{Commission}}
Referral: {{Customer Name}}
Date Completed: {{Updated Date}}

Process payment via Zelle to: {{Partner Zelle Info}}
```

### Zap 4: Trello → QuickBooks (Create Invoices)

**Trigger:** Trello - Card Moved to List
- **Board:** Your Trello board
- **List:** "Completed"

**Action:** QuickBooks - Create Invoice
- **Customer:** Extract from card name
- **Amount:** Extract retail price from description
- **Description:** "Yacht Charter - {{Card Name}}"
- **Due Date:** Today + 30 days

### Zap 5: Google Sheets → QuickBooks (Log Commission Expenses)

**Trigger:** Google Sheets - New or Updated Spreadsheet Row
- **Spreadsheet:** Azure Yacht Group - Referral System
- **Worksheet:** Referrals

**Filter:** Payment Status = "Paid"

**Action:** QuickBooks - Create Expense
- **Vendor:** Partner name
- **Amount:** Commission amount
- **Category:** "Referral Commissions"
- **Description:** "Commission - {{Referral ID}}"
- **Date:** Payment date

---

## 🔄 Phase 3: Trello Card Format (5 minutes)

### Required Card Description Format

**For Zapier to extract data, use this format:**

```
PARTNER: AZURE-JOHN
CUSTOMER: john.doe@email.com
RETAIL: 5000
REVENUE: 300
CHARTER: 2/15/2025

Additional notes...
```

**Example Card:**
- **Title:** "Smith Family - 7 Day Caribbean Charter"
- **Description:**
```
PARTNER: AZURE-TRAVEL
CUSTOMER: mike.smith@email.com
RETAIL: 8500
REVENUE: 800
CHARTER: 3/1/2025

Family of 4, prefer modern yacht
Flexible on dates
High-end client
```

---

## 📊 System Workflow

### Automated Process Flow

1. **Lead Received** → Create Trello card with referral format
2. **Move to "Proposal"** → **Zap 1** logs referral in Sheets
3. **Google Sheets calculates** commission automatically
4. **Zap 2** emails partner with notification
5. **Move to "Completed"** → **Zap 4** creates QuickBooks invoice
6. **You pay partner** → Update payment status in Sheets
7. **Zap 5** logs expense in QuickBooks
8. **Zap 3** sends you monthly payment alerts

### Manual Tasks (Monthly)
- Process Zelle payments to partners
- Update payment status in Google Sheets
- Review partner performance
- Add new partners to system

---

## 📈 Scaling Options

### When You Hit 100 Tasks/Month

**Option 1: Upgrade Zapier**
- **Zapier Starter:** $19.99/month, 750 tasks
- **Zapier Professional:** $49/month, 2,000 tasks

**Option 2: Switch to Google Apps Script**
- **Unlimited tasks** for free
- **More complex logic** possible
- **Requires coding** knowledge

**Option 3: Hybrid Approach**
- **Keep Zapier** for simple automations
- **Add Apps Script** for complex calculations
- **Best of both worlds**

---

## 🛠️ Setup Checklist

### Pre-Setup Requirements
- [ ] Google account with Sheets access
- [ ] Zapier free account
- [ ] Trello board with "Proposal" and "Completed" lists
- [ ] QuickBooks account
- [ ] Gmail account

### Implementation Steps
- [ ] Create Google Sheets with 4 tabs
- [ ] Add column headers and formulas
- [ ] Set up Zap 1: Trello → Sheets
- [ ] Set up Zap 2: Sheets → Gmail (partners)
- [ ] Set up Zap 3: Sheets → Gmail (payments)
- [ ] Set up Zap 4: Trello → QuickBooks
- [ ] Set up Zap 5: Sheets → QuickBooks
- [ ] Test with sample referral
- [ ] Create partner filtered views
- [ ] Document card description format

### Go-Live Checklist
- [ ] All Zaps tested and working
- [ ] Sample referral processed successfully
- [ ] Partner notifications working
- [ ] Commission calculations correct
- [ ] QuickBooks integration tested
- [ ] Payment workflow documented

---

## 🎯 Success Metrics

### Monthly Tracking
- **Referrals processed:** Target 15-20/month
- **Zapier tasks used:** Monitor to stay under 100
- **Partner satisfaction:** Email response rates
- **Payment processing time:** Target <48 hours

### Growth Indicators
- **Task usage trending up:** Consider Zapier upgrade
- **20+ referrals/month:** Evaluate Apps Script migration
- **Partner complaints:** Review automation accuracy
- **Manual work increasing:** Optimize workflows

This Zapier implementation provides professional automation without coding requirements, perfect for getting started with referral system management. 