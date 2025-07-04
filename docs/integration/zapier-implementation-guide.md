---
title: Zapier Referral System Setup
sidebar_label: Zapier Setup Guide
---

# Zapier Referral System Implementation

## 🚀 **Complete Setup in 30 Minutes**

**Perfect choice!** Zapier's free plan gives you everything you need to start tracking referrals immediately with the Google Sheets-HubSpot-Trello-Zapier solution.

**Total Setup Time:** 30 minutes  
**Monthly Maintenance:** 20 minutes  
**System Capacity:** 100 tasks/month (≈30 referrals)  
**Cost:** $0/month - completely free solution

---

## ✅ **30-Minute Implementation Checklist**

### **Step 1: Google Sheets Setup (10 minutes)**

1. **Create new Google Sheet:** [Go to sheets.google.com](https://sheets.google.com)
2. **Name it:** "Azure Yacht Group - Referral System"
3. **Create 4 tabs:** Partners | Referrals | Monthly Summary | Settings

**Copy-paste these headers:**

**Partners Tab (Row 1):**
```
Partner ID | Name | Email | Phone | Status | Join Date | Zelle Info | Referral Code | Total Referrals | Total Earned | Last Payment | Notes
```

**Referrals Tab (Row 1):**
```
Date | Customer | Customer Email | Partner Code | Retail Price | Your Revenue | Commission | Status | Charter Date | Payment Date | Payment Ref | Notes
```

**Add this formula in Commission column (H2):**
```
=IF(G2="","",IF(G2<=300,100,IF(G2<=500,150,IF(G2<=800,200,300))))
```

**Monthly Summary Tab (Row 1):**
```
Month | Referrals | Total Revenue | Total Paid | Avg Commission | Pending Amount | Tax Year Summary | Total Expenses
```

### **Step 2: Zapier Automations (15 minutes)**

**You get 5 free automations - use 3 for referrals:**

#### **Zap 1: Log New Referrals**
- **Trigger:** Trello → Card moved to "Proposal"
- **Action:** Google Sheets → Add row to Referrals tab
- **Filter:** Card description contains "PARTNER:"

#### **Zap 2: Notify Partners**
- **Trigger:** Google Sheets → New row in Referrals
- **Action:** Gmail → Send notification email

#### **Zap 3: Update Revenue**
- **Trigger:** Trello → Card moved to "Completed"
- **Action:** Google Sheets → Update commission status

### **Step 3: Trello Card Format (5 minutes)**

**Use this exact format in card descriptions:**
```
PARTNER: AZURE-JOHN
CUSTOMER: john.doe@email.com
RETAIL: 5000
REVENUE: 300
CHARTER: 2/15/2025

Additional notes...
```

---

## 🔧 **Technology Stack**

### **Core Components**
- **Zapier** - 5 automations available, 100 tasks/month (3 for partner tracking + 2 for HubSpot)
- **Google Sheets** - Partner tracking, dashboards & financial records
- **Trello** - Lead management system
- **Gmail** - Email notifications
- **Zelle** - Payment processing

### **CRM Integration**
- **HubSpot** - Your existing CRM with lead scoring and automated follow-up (uses 2 additional Zapier automations - see [HubSpot Integration Guide](/docs/integration/hubspot-referral-integration))

### **Upgrade Path**
- **Zapier Starter** ($19.99/month) - 20 Zaps, 750 tasks/month for higher volume

---

## 📋 **Detailed Setup Instructions**

### **Phase 1: Google Sheets Setup (10 minutes)**

#### **Step 1: Create Master Spreadsheet**

1. **Go to [sheets.google.com](https://sheets.google.com)**
2. **Click "Blank"** to create new sheet
3. **Rename to:** "Azure Yacht Group - Referral System"
4. **Create 4 tabs:** Partners, Referrals, Monthly Summary, Settings

#### **Step 2: Partners Tab Headers**

```
A1: Partner ID    E1: Status        I1: Total Referrals
B1: Name          F1: Join Date     J1: Total Earned  
C1: Email         G1: Zelle Info    K1: Last Payment
D1: Phone         H1: Referral Code L1: Notes
```

#### **Step 3: Referrals Tab Headers**

```
A1: Referral ID   G1: Your Revenue    M1: Notes
B1: Date          H1: Commission      N1: Trello Card ID
C1: Customer      I1: Status          O1: Partner Email
D1: Customer Email J1: Charter Date   P1: Payment Status
E1: Partner Code  K1: Payment Date    Q1: Created By
F1: Retail Price  L1: Payment Ref     R1: Updated Date
```

#### **Step 4: Add Commission Formula**

**In cell H2 (Commission column):**
```excel
=IF(G2="","",IF(G2<=300,100,IF(G2<=500,150,IF(G2<=800,200,300))))
```

**Copy this formula down the entire H column**

#### **Step 5: Monthly Summary Tab**

```
A1: Month         C1: Total Revenue    E1: Avg Commission    G1: Tax Year Summary
B1: Referrals     D1: Total Paid       F1: Pending Amount    H1: Total Expenses
```

### **Phase 2: Zapier Automations (15 minutes)**

**Using only 3 of your 5 free Zapier automations:**

#### **Zap 1: Trello → Google Sheets (Log Referrals)**

**Trigger:** Trello - Card Moved to List
- **Board:** Your Trello board
- **List:** "Proposal"

**Action:** Google Sheets - Create Spreadsheet Row
- **Spreadsheet:** Azure Yacht Group - Referral System
- **Worksheet:** Referrals
- **Mapping:**
  - Referral ID: `REF-\{\{zap_meta_human_now_date\}\}`
  - Date: `\{\{date\}\}`
  - Customer: `\{\{card_name\}\}`
  - Partner Code: Extract from card description
  - Retail Price: Extract from card description  
  - Your Revenue: Extract from card description
  - Status: "Pending"
  - Trello Card ID: `\{\{card_id\}\}`
  - Created By: "Zapier"

**Filter:** Only if card description contains "PARTNER:"

#### **Zap 2: Google Sheets → Gmail (Partner Notification)**

**Trigger:** Google Sheets - New Spreadsheet Row
- **Spreadsheet:** Azure Yacht Group - Referral System
- **Worksheet:** Referrals

**Action:** Gmail - Send Email
- **To:** Partner email (lookup from Partners tab)
- **Subject:** "New Referral Logged - \{\{Customer Name\}\}"
- **Body:**
```
Hi \{\{Partner Name\}\},

Great news! Your referral has been logged in our system.

🎯 REFERRAL DETAILS
Customer: \{\{Customer Name\}\}
Referral ID: \{\{Referral ID\}\}
Commission: $\{\{Commission\}\}
Status: Pending

📊 TRACK YOUR PROGRESS
View your dashboard: [Your filtered view link]

Thanks for your partnership!
Azure Yacht Group
```

#### **Zap 3: Trello → Google Sheets (Revenue Tracking)**

**Trigger:** Trello - Card Moved to List
- **Board:** Your Trello board
- **List:** "Completed"

**Action:** Google Sheets - Update Spreadsheet Row
- **Spreadsheet:** Azure Yacht Group - Referral System
- **Worksheet:** Referrals
- **Update matching row where Trello Card ID matches**
- **Set Status to:** "Completed"
- **Set Payment Status to:** "Ready for Payment"

### **Phase 3: Trello Card Format (5 minutes)**

#### **Required Card Description Format**

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

## 🎯 **Your Free Plan Limits & Strategy**

### **What You Get FREE:**
- ✅ **100 tasks/month** (≈30 referrals)
- ✅ **5 automations** (3 for referrals + 2 for HubSpot)
- ✅ **15-minute intervals** (fast enough for referrals)
- ✅ **Single-step Zaps** (perfect for this setup)

### **Smart Usage Strategy:**
- **Primary focus:** High-value yacht charter referrals
- **Track carefully:** ~30 referrals/month = $15K-45K potential revenue
- **Upgrade trigger:** When you hit 80 tasks consistently

### **Cost vs. Revenue:**
- **Your investment:** $0/month
- **Conservative estimate:** 30 referrals × $1,000 avg commission = $30,000/month
- **ROI:** Infinite (free plan) 

---

## 📊 **Monthly Workflow (20 minutes/month)**

### **Week 1-3: Daily (2 minutes)**
1. Move Trello cards with PARTNER format
2. Verify automations fired correctly
3. Check partner emails were sent

### **Month-end (15 minutes)**
1. **Export commission report** from Google Sheets
2. **Process Zelle payments** to partners
3. **Update "Last Payment" column**
4. **Send monthly partner summary**

---

## 🔧 **Pro Tips for Free Plan Success**

### **Maximize Your 100 Tasks:**
- **Use filters wisely** - Only trigger on cards with "PARTNER:"
- **Combine actions** - One Zap does multiple sheet updates
- **Manual backup** - Keep secondary tracking method

### **Scale Efficiently:**
- **Start selective** - Only track referrals over $3,000
- **Quality over quantity** - Focus on high-value partners
- **Monitor usage** - Zapier shows task consumption

### **Upgrade Indicators:**
- **Hitting 80+ tasks consistently**
- **Need for multi-step Zaps**
- **Want faster than 15-minute intervals**

---

## 📈 **Growth Path with Zapier**

### **Current: Free Plan**
- 30 referrals/month capacity
- Perfect for testing and initial growth

### **Next: Starter Plan ($19.99/month)**
- 750 tasks/month = 250+ referrals
- Multi-step Zaps for complex workflows
- 2-minute intervals

### **Future: Professional Plan ($49/month)**
- Unlimited basic features
- Premium apps integration
- Advanced formatting

---

## 🎯 **Why This Solution Works**

### **Zapier Free vs. Premium Solutions:**
- ✅ **$0 vs $400+/month** - Save $4,800+ annually
- ✅ **Same core functionality** - Track, notify, pay
- ✅ **100% customizable** - Build exactly what you need
- ✅ **No vendor lock-in** - Your data stays yours

### **When to Consider Upgrading:**
- Consistently processing 80+ referrals/month
- Need advanced fraud detection
- Want professional partner portals
- Require white-label branding

---

## 🚀 **Ready to Launch?**

### **Today's Action Items:**
1. **Set up Google Sheets** (10 minutes)
2. **Create 3 Zapier automations** (15 minutes)
3. **Test with dummy data** (5 minutes)
4. **Add 3-5 initial partners** to spreadsheet

### **This Week:**
1. **Invite first 10 partners** with referral codes
2. **Create partner onboarding email template**
3. **Test full workflow** with real Trello card

### **This Month:**
1. **Track performance** - aim for 10-15 referrals
2. **Optimize commission structure** based on results
3. **Expand to 20-30 partner network**

---

## 📞 **Need Help?**

**Technical Issues:** 
- Zapier has excellent help docs
- Google Sheets support is comprehensive
- Community forums for troubleshooting

**Strategy Questions:** 
- Monitor your metrics monthly
- A/B test commission amounts
- Survey partners for feedback

---

## 🎉 **Bottom Line**

You're making a smart choice! Starting with Zapier's free plan lets you:

- **Validate the referral model** without upfront costs
- **Learn what works** before investing in premium tools
- **Scale gradually** as revenue grows
- **Keep 100% of early profits** to reinvest

**Your potential with just the free plan:** $30,000+ monthly referral revenue for $0 investment.

---

## 🔗 **Related Documentation**

- **[HubSpot Integration Guide](/docs/integration/hubspot-referral-integration)** - Connect referrals to your CRM
- **[Google Sheets Filtered Views Setup](/docs/integration/google-sheets-filtered-views-setup)** - Partner dashboards
- **[Partner Application](/docs/integration/partner-application)** - Partner onboarding
- **[Partner Agreement](/docs/integration/partner-agreement)** - Legal framework
- **[Partner Booklet](/docs/integration/partner-booklet)** - Marketing materials 