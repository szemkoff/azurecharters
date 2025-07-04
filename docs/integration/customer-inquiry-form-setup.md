---
title: Customer Inquiry Form Setup
sidebar_label: Customer Inquiry Form
---

# Customer Inquiry Form with Partner Tracking

## 🎯 Overview

Create a professional customer inquiry form using HubSpot embedded in your Tilda website with automatic partner tracking via URL parameters. This integrates seamlessly with your Google Sheets-HubSpot-Trello-Zapier system.

**Setup Time:** 15 minutes  
**Cost:** FREE  
**Features:** Partner tracking, CRM integration, automated workflows

---

## 🚀 **Complete Setup Guide**

### **Step 1: Create HubSpot Form (8 minutes)**

#### **1.1 Create New Form**

1. **Go to HubSpot → Marketing → Forms**
2. **Click "Create form" → "Embedded form"**
3. **Name:** "Yacht Charter Inquiry"
4. **Form type:** Regular form

#### **1.2 Add Form Fields**

**Essential Fields:**

**Name** (Short text, Required)
- **Label:** "Full Name"
- **Internal name:** `firstname` (HubSpot default)
- **Required:** Yes
- **Placeholder:** "Enter your full name"

**Email** (Email, Required)
- **Label:** "Email Address"
- **Internal name:** `email` (HubSpot default)
- **Required:** Yes
- **Placeholder:** "your@email.com"

**Phone** (Phone number, Required)
- **Label:** "Phone Number"
- **Internal name:** `phone` (HubSpot default)
- **Required:** Yes
- **Placeholder:** "(305) 123-4567"

**Charter Date** (Date picker)
- **Label:** "Preferred Charter Date"
- **Internal name:** `charter_date`
- **Required:** No
- **Help text:** "Flexible dates? We'll help you find the best options"

**Group Size** (Number)
- **Label:** "Group Size"
- **Internal name:** `group_size`
- **Required:** Yes
- **Min value:** 1
- **Max value:** 50
- **Placeholder:** "How many people?"

**Budget Range** (Dropdown, Required)
- **Label:** "Charter Budget Range"
- **Internal name:** `budget_range`
- **Required:** Yes
- **Options:**
  - $3,000 - $5,000
  - $5,000 - $10,000
  - $10,000 - $20,000
  - $20,000 - $50,000
  - $50,000+
  - I need help determining budget

**Special Requirements** (Multi-line text)
- **Label:** "Special Requirements or Requests"
- **Internal name:** `special_requirements`
- **Required:** No
- **Placeholder:** "Special occasions, dietary restrictions, accessibility needs, etc."

**Referral Partner** (Hidden field) ⭐ **CRITICAL FOR TRACKING**
- **Label:** "Referral Partner"
- **Internal name:** `referral_partner`
- **Field type:** Hidden field
- **Default value:** `{urlparam.partner}`
- **Description:** This captures the partner code from URL parameters

#### **1.3 Form Options & Settings**

**Options Tab:**
- ✅ **Always create contact for new email address**
- ✅ **Update contact if email address already exists**
- ❌ **Create new contact for existing email** (unchecked)

**Style & Preview Tab:**
- **Form title:** "Request Your Yacht Charter Quote"
- **Submit button text:** "Get My Charter Quote"
- **Thank you message:**
  ```
  Thank you for your interest in Azure Yacht Group! 
  
  We'll contact you within 24 hours with personalized yacht options 
  for your group of {group_size} on {charter_date}.
  
  Questions? Call us at (305) XXX-XXXX
  ```

**Follow-up Tab:**
- **Redirect URL:** Leave blank (use thank you message)
- **Email notifications:** Enable for your email address

### **Step 2: Get HubSpot Embed Code (2 minutes)**

#### **2.1 Generate Embed Code**

1. **Click "Embed" tab in HubSpot form**
2. **Select "Embed code" option**
3. **Copy the JavaScript embed code** (looks like this):

```javascript
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "YOUR-PORTAL-ID",
    formId: "YOUR-FORM-ID",
    target: "#hubspot-form-container"
  });
</script>
```

4. **Save this code** - you'll need it for Tilda

### **Step 3: Embed in Tilda Website (3 minutes)**

#### **3.1 Create or Edit Tilda Page**

1. **Go to your Tilda website editor**
2. **Navigate to your charter inquiry page** (or create new page)
3. **Page URL should be:** `/charter-inquiry` or `/contact`

#### **3.2 Add HubSpot Form Block**

1. **Add new block** → **"Other" category** → **"HTML"**
2. **In the HTML block, add:**

```html
<!-- HubSpot Form Container -->
<div id="hubspot-form-container" style="max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="text-align: center; margin-bottom: 30px; color: #2c3e50;">
    Request Your Yacht Charter Quote
  </h2>
  <p style="text-align: center; margin-bottom: 30px; color: #7f8c8d;">
    Tell us about your perfect yacht charter experience and we'll create a personalized proposal for you.
  </p>
</div>

<!-- HubSpot Form Script -->
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "YOUR-PORTAL-ID",
    formId: "YOUR-FORM-ID",
    target: "#hubspot-form-container",
    css: `
      .hs-form {
        max-width: 100%;
      }
      .hs-form-field {
        margin-bottom: 20px;
      }
      .hs-form-field label {
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        display: block;
      }
      .hs-input {
        width: 100%;
        padding: 12px;
        border: 2px solid #e0e6ed;
        border-radius: 6px;
        font-size: 16px;
        transition: border-color 0.3s;
      }
      .hs-input:focus {
        border-color: #3498db;
        outline: none;
      }
      .hs-button {
        background-color: #3498db;
        color: white;
        padding: 15px 30px;
        border: none;
        border-radius: 6px;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
        transition: background-color 0.3s;
      }
      .hs-button:hover {
        background-color: #2980b9;
      }
    `
  });
</script>
```

3. **Replace YOUR-PORTAL-ID and YOUR-FORM-ID** with your actual HubSpot values
4. **Publish the page**

### **Step 4: Set Up Zapier Automation (2 minutes)**

#### **4.1 Create Customer Inquiry Automation**

**Trigger:** HubSpot - New Contact
- **Filter:** Only contacts with "Charter Date" field populated

**Action 1:** Gmail - Send Email
- **To:** Your email address
- **Subject:** "🛥️ New Charter Inquiry - \{\{First Name\}\} \{\{Last Name\}\}"
- **Body:**
```
🛥️ NEW YACHT CHARTER INQUIRY

CUSTOMER DETAILS:
Name: \{\{First Name\}\} \{\{Last Name\}\}
Email: \{\{Email\}\}
Phone: \{\{Phone Number\}\}
Charter Date: \{\{Charter Date\}\}
Group Size: \{\{Group Size\}\}
Budget Range: \{\{Budget Range\}\}

PARTNER TRACKING:
Referred by: \{\{Referral Partner\}\} ⭐

SPECIAL REQUIREMENTS:
\{\{Special Requirements\}\}

NEXT STEPS:
1. Call customer within 24 hours: \{\{Phone Number\}\}
2. Send yacht options for \{\{Budget Range\}\} budget
3. Create detailed proposal

HubSpot Contact: https://app.hubspot.com/contacts/[PORTAL-ID]/contact/\{\{Contact ID\}\}

Priority: \{\{Budget Range\}\} budget = High Priority
```

**Action 2:** Trello - Create Card
- **Board:** Your yacht charter board
- **List:** "New Leads"
- **Card Name:** "Charter Inquiry - \{\{First Name\}\} \{\{Last Name\}\}"
- **Description:**
```
CUSTOMER: \{\{First Name\}\} \{\{Last Name\}\}
EMAIL: \{\{Email\}\}
PHONE: \{\{Phone Number\}\}
CHARTER DATE: \{\{Charter Date\}\}
GROUP SIZE: \{\{Group Size\}\}
BUDGET: \{\{Budget Range\}\}
PARTNER: \{\{Referral Partner\}\} ⭐
REQUIREMENTS: \{\{Special Requirements\}\}

Source: Website inquiry form
HubSpot: https://app.hubspot.com/contacts/[PORTAL-ID]/contact/\{\{Contact ID\}\}
Status: New inquiry - needs follow-up within 24h
```

---

## 🔗 **Partner Tracking Implementation**

### **Step 5: Create Partner Referral Links**

#### **5.1 Partner URL Format**

**Base URL:** `https://azureyachtgroup.com/charter-inquiry`

**Partner URLs:**
```
https://azureyachtgroup.com/charter-inquiry?partner=AZURE-JOHN
https://azureyachtgroup.com/charter-inquiry?partner=AZURE-MARY
https://azureyachtgroup.com/charter-inquiry?partner=AZURE-TRAVEL
https://azureyachtgroup.com/charter-inquiry?partner=AZURE-CONCIERGE
```

#### **5.2 Partner Communication Template**

**Send this to each partner:**

```
Subject: Your Personal Referral Link - Azure Yacht Group

Hi [Partner Name],

Your unique referral tracking link is ready! 🚀

🔗 YOUR REFERRAL LINK:
https://azureyachtgroup.com/charter-inquiry?partner=AZURE-[CODE]

HOW IT WORKS:
✅ Share this exact link with potential customers
✅ When they fill out the form, you automatically get credit
✅ We track everything and calculate your commission
✅ You earn $100-300 per successful booking

SHARING STRATEGIES:
📱 Text the link directly: "Check out this yacht charter company - fill out this quick form for a quote"
📧 Include in emails to clients
📲 Post on social media with yacht photos
💬 Share in conversations: "I know a great yacht charter company, here's their form"

COMMISSION STRUCTURE:
$300 revenue = $100 commission
$500 revenue = $150 commission  
$800 revenue = $200 commission
$1000+ revenue = $300 commission

TRACKING:
✅ Real-time dashboard shows your referrals
✅ Monthly commission reports
✅ Payments via Zelle every month

Questions? Reply to this email or call [phone].

Thanks for partnering with Azure Yacht Group!

Best regards,
[Your Name]
Azure Yacht Group
```

---

## 📊 **Testing & Validation**

### **Step 6: Test the Complete System (5 minutes)**

#### **6.1 Test Partner Tracking**

1. **Open partner URL:** `https://azureyachtgroup.com/charter-inquiry?partner=TEST-PARTNER`
2. **Fill out form** with test data
3. **Submit form**
4. **Verify in HubSpot:** Contact should show "Referral Partner: TEST-PARTNER"
5. **Check email:** Should receive notification with partner info
6. **Check Trello:** Card should be created with partner attribution

#### **6.2 Test Regular Form**

1. **Open regular URL:** `https://azureyachtgroup.com/charter-inquiry`
2. **Fill out form** without partner parameter
3. **Verify:** "Referral Partner" field should be empty
4. **Confirm:** All other automation still works

#### **6.3 Validation Checklist**

- [ ] Form displays correctly on desktop
- [ ] Form displays correctly on mobile
- [ ] Partner parameter captured correctly
- [ ] HubSpot contact created with all fields
- [ ] Email notification received with partner info
- [ ] Trello card created with partner attribution
- [ ] Thank you message displays properly
- [ ] Form validation works (required fields)

---

## 🔄 **Customer Follow-Up Process**

### **When You Receive Inquiry:**

#### **Immediate Response (Within 2 Hours):**

1. **Call the customer** using phone number from form
2. **Reference their specific requirements** from the form
3. **If partner referral:** Thank them for working with [Partner Name]

#### **Email Follow-Up Template:**

```
Subject: Your Yacht Charter Quote - [Customer Name]

Hi [Customer Name],

Thank you for your yacht charter inquiry! I'm excited to help you plan an amazing experience for your group of [Group Size] on [Charter Date].

Based on your budget range of [Budget Range], I've selected 3 perfect yacht options:

🛥️ OPTION 1: [Yacht Name]
- [Brief description]
- Perfect for [specific needs from form]

🛥️ OPTION 2: [Yacht Name]  
- [Brief description]
- Great for [group size/requirements]

🛥️ OPTION 3: [Yacht Name]
- [Brief description]
- Ideal for [special requirements]

NEXT STEPS:
I'd love to discuss your vision and help you choose the perfect yacht. 

When would be a good time for a quick 10-minute call today or tomorrow?

[If partner referral: "Thanks for working with [Partner Name] - they always send us wonderful clients!"]

Best regards,
[Your Name]
Azure Yacht Group
[Phone] | [Email]
```

#### **Trello Workflow:**

1. **New Leads** → Initial contact made
2. **Proposal** → Quote sent, awaiting response  
3. **Review** → Customer reviewing options
4. **Scheduled** → Charter confirmed and scheduled
5. **Completed** → Charter completed successfully

**If partner referral:** Add commission tracking when moved to "Completed"

---

## 📈 **Analytics & Optimization**

### **Key Metrics to Track:**

#### **Form Performance:**
- **Conversion rate:** Visitors to form submissions
- **Completion rate:** Started forms to completed submissions
- **Source attribution:** Which partners drive most inquiries
- **Budget distribution:** Most common budget ranges

#### **Partner Performance:**
- **Referrals per partner:** Monthly tracking
- **Conversion rates:** Partner referrals to bookings
- **Revenue per partner:** Total value generated
- **Top performing partners:** Identify and reward

#### **Customer Insights:**
- **Popular charter dates:** Seasonal trends
- **Group sizes:** Most common party sizes
- **Budget ranges:** Price sensitivity analysis
- **Special requirements:** Common requests

### **Monthly Optimization:**

1. **Review form analytics** in HubSpot
2. **Analyze partner performance** from tracking data
3. **A/B test form elements** (headlines, button text, field order)
4. **Optimize partner communication** based on performance
5. **Refine follow-up templates** based on conversion rates

---

## 🎯 **Success Metrics & Goals**

### **Month 1 Targets:**
- **20-30 form submissions**
- **5-10 qualified leads**
- **2-3 bookings**
- **$15,000-30,000 revenue**
- **3-5 partner referrals**

### **Month 3 Targets:**
- **50-75 form submissions**
- **15-25 qualified leads**
- **8-12 bookings**
- **$60,000-100,000 revenue**
- **10-15 partner referrals**

### **Success Indicators:**
- **Form completion rate >80%**
- **Lead to booking rate >25%**
- **Partner referral rate >20%**
- **Customer satisfaction >95%**

---

## 🔧 **Troubleshooting**

### **Common Issues:**

#### **Partner Parameter Not Capturing:**
- **Check:** URL format is correct (`?partner=CODE`)
- **Verify:** Hidden field default value is `{urlparam.partner}`
- **Test:** Try different browsers and devices

#### **Form Not Displaying:**
- **Check:** HubSpot embed code is correct
- **Verify:** Portal ID and Form ID are accurate
- **Test:** Try without custom CSS first

#### **Zapier Not Triggering:**
- **Check:** HubSpot trigger is set to "New Contact"
- **Verify:** Filter conditions are correct
- **Test:** Create test contact manually in HubSpot

#### **Mobile Display Issues:**
- **Check:** Tilda responsive settings
- **Verify:** HubSpot form mobile optimization
- **Test:** Multiple mobile devices and browsers

---

## 🚀 **Next Steps**

### **This Week:**
1. **Set up HubSpot form** with partner tracking
2. **Embed in Tilda website**
3. **Configure Zapier automation**
4. **Test complete workflow**

### **Next Week:**
1. **Create partner referral links**
2. **Send partner communication**
3. **Launch form on website**
4. **Monitor initial submissions**

### **Ongoing:**
1. **Respond to inquiries within 24 hours**
2. **Track partner performance monthly**
3. **Optimize form based on analytics**
4. **Expand partner network based on results**

---

## 💡 **Pro Tips**

### **Form Optimization:**
- **Keep required fields minimal** - only ask for essentials
- **Use progressive profiling** - collect more data over time
- **Add social proof** - testimonials or partner logos
- **Mobile-first design** - most traffic comes from mobile

### **Partner Success:**
- **Provide marketing materials** - yacht photos, descriptions
- **Regular communication** - monthly performance updates
- **Incentive programs** - bonuses for top performers
- **Training sessions** - help partners sell effectively

### **Customer Experience:**
- **Fast response times** - call within 2 hours
- **Personalized follow-up** - reference their specific needs
- **Multiple options** - always provide 2-3 yacht choices
- **Professional presentation** - detailed proposals and contracts

Your customer inquiry form with partner tracking is now ready to capture leads and drive revenue while maintaining perfect integration with your existing systems! 🎯 