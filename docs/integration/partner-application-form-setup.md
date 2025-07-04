---
title: Partner Application Form Setup
sidebar_label: Application Form Setup
---

# Partner Application Form Setup with Google Forms

## 🎯 Overview

Create a professional partner application form using Google Forms that integrates seamlessly with your Google Sheets-HubSpot-Trello-Zapier referral system.

**Setup Time:** 15 minutes  
**Cost:** FREE  
**Integration:** Automatic data collection in Google Sheets + Zapier automation

---

## 📋 Step 1: Create Google Form (10 minutes)

### 1.1 Create New Form

1. **Go to [forms.google.com](https://forms.google.com)**
2. **Click "Blank"** to create new form
3. **Title:** "Azure Yacht Group - Partner Application"
4. **Description:** "Join our exclusive referral program and earn $100-300 per successful yacht charter referral"

### 1.2 Add Form Sections

#### **Section 1: Personal Information**

**Full Name** (Short answer, Required)
- Type: Short answer
- Required: Yes

**Email Address** (Email, Required)
- Type: Email
- Required: Yes
- Validation: Email format

**Phone Number** (Short answer, Required)
- Type: Short answer
- Required: Yes

**City/State** (Short answer, Required)
- Type: Short answer
- Required: Yes

**Preferred Contact Method** (Multiple choice, Required)
- Type: Multiple choice
- Required: Yes
- Options:
  - Email
  - Phone
  - Text/SMS
  - WhatsApp

#### **Section 2: Social Media & Online Presence**

**Instagram Handle** (Short answer, Optional)
- Type: Short answer
- Description: "Example: @yourusername"

**Instagram Follower Count** (Multiple choice)
- Type: Multiple choice
- Options:
  - Under 1,000
  - 1,000 - 5,000
  - 5,000 - 10,000
  - 10,000 - 25,000
  - 25,000 - 50,000
  - 50,000+
  - I don't use Instagram

**TikTok Handle** (Short answer, Optional)
- Type: Short answer
- Description: "Example: @yourusername"

**Website/Blog** (Short answer, Optional)
- Type: Short answer
- Description: "Your website URL"

#### **Section 3: Professional Background**

**Current Occupation** (Short answer, Required)
- Type: Short answer
- Required: Yes

**Industry** (Multiple choice, Required)
- Type: Multiple choice
- Required: Yes
- Options:
  - Hospitality/Tourism
  - Real Estate
  - Event Planning
  - Marketing/Social Media
  - Entertainment/Media
  - Business/Corporate
  - Lifestyle/Fashion
  - Fitness/Wellness
  - Other

**Years of Experience** (Multiple choice)
- Type: Multiple choice
- Options:
  - Less than 1 year
  - 1-3 years
  - 3-5 years
  - 5-10 years
  - 10+ years

#### **Section 4: Referral Experience**

**Previous Referral Program Experience** (Multiple choice, Required)
- Type: Multiple choice
- Required: Yes
- Options:
  - Yes, multiple programs
  - Yes, one or two programs
  - No, this would be my first

**Target Audience** (Checkboxes, Required)
- Type: Checkboxes
- Required: Yes
- Options:
  - Young professionals (25-35)
  - Established professionals (35-50)
  - High-net-worth individuals
  - Corporate executives
  - Event planners
  - Local Miami residents
  - Tourists/visitors to Miami
  - Social media followers interested in luxury
  - Other

**Promotion Strategy** (Paragraph, Required)
- Type: Paragraph
- Required: Yes
- Description: "Please explain how you plan to promote Azure Yacht Group services, including specific tactics, content ideas, and target audiences. (Minimum 100 words)"

#### **Section 5: Goals & Commitment**

**Monthly Referral Goal** (Multiple choice)
- Type: Multiple choice
- Options:
  - 1-2 referrals per month
  - 3-5 referrals per month
  - 6-10 referrals per month
  - 10+ referrals per month
  - I'm not sure yet

**Weekly Time Commitment** (Multiple choice, Required)
- Type: Multiple choice
- Required: Yes
- Options:
  - 1-2 hours
  - 3-5 hours
  - 6-10 hours
  - 10+ hours
  - It varies significantly

#### **Section 6: Payment Information**

**Preferred Payment Method** (Multiple choice, Required)
- Type: Multiple choice
- Required: Yes
- Options:
  - Zelle
  - PayPal
  - Venmo
  - Bank transfer
  - Other

**Zelle Email/Phone** (Short answer, Conditional)
- Type: Short answer
- Description: "Required if Zelle selected - This will be used for commission payments"

#### **Section 7: Legal & Compliance**

**Age Verification** (Multiple choice, Required)
- Type: Multiple choice
- Required: Yes
- Options:
  - Yes, I am 18 years of age or older
  - No

**Work Authorization** (Multiple choice, Required)
- Type: Multiple choice
- Required: Yes
- Options:
  - Yes, I am legally authorized to work in the United States
  - No

**FTC Compliance** (Multiple choice, Required)
- Type: Multiple choice
- Required: Yes
- Options:
  - Yes, I understand I must disclose my referral relationship
  - No
  - I need more information about these requirements

**Partner Agreement** (Checkboxes, Required)
- Type: Checkboxes
- Required: Yes
- Options:
  - I have read and agree to the Azure Yacht Group Referral Partner Agreement

---

## 📊 Step 2: Configure Response Settings (2 minutes)

### 2.1 Response Destination

1. **Click "Responses" tab**
2. **Click green Sheets icon** to create connected spreadsheet
3. **Name spreadsheet:** "Azure Yacht Group - Partner Applications"
4. **Click "Create"**

### 2.2 Response Notifications

1. **In Responses tab, click three dots menu**
2. **Select "Get email notifications for new responses"**
3. **Your email will be notified** of each new application

---

## ⚡ Step 3: Zapier Integration (3 minutes)

### 3.1 Create Zapier Automation

**Trigger:** Google Forms - New Response
- **Form:** Azure Yacht Group - Partner Application

**Action 1:** Email - Send Email
- **To:** Your email address
- **Subject:** "New Partner Application - \{\{Full Name\}\}"
- **Body:**
```
New partner application received!

Name: \{\{Full Name\}\}
Email: \{\{Email Address\}\}
Phone: \{\{Phone Number\}\}
Industry: \{\{Industry\}\}
Experience: \{\{Previous Referral Program Experience\}\}
Monthly Goal: \{\{Monthly Referral Goal\}\}

Review application: [Link to Google Sheets]
```

**Action 2:** Google Sheets - Create Row (Optional)
- **Spreadsheet:** Azure Yacht Group - Referral System
- **Worksheet:** Partners
- **Add preliminary partner data** for approved applications

---

## 🎨 Step 4: Form Customization (5 minutes)

### 4.1 Theme & Branding

1. **Click "Customize theme" (palette icon)**
2. **Choose color scheme** matching Azure Yacht Group branding
3. **Upload header image** (optional) - yacht or logo
4. **Select font** - professional, readable font

### 4.2 Form Settings

1. **Click "Settings" (gear icon)**
2. **General tab:**
   - ✅ Collect email addresses
   - ✅ Limit to 1 response per person
   - ✅ Allow response editing after submit

3. **Presentation tab:**
   - ✅ Show progress bar
   - ✅ Shuffle question order (optional)
   - **Confirmation message:** "Thank you for your interest in the Azure Yacht Group Partner Program! We'll review your application within 3-5 business days and contact you with next steps."

---

## 🔗 Step 5: Form Deployment (2 minutes)

### 5.1 Get Form Link

1. **Click "Send" button**
2. **Copy form URL** from "Link" tab
3. **Shorten URL** if desired (bit.ly, tinyurl.com)

### 5.2 Embedding Options

**Option A: Direct Link**
- Share URL directly with potential partners
- Add to email signatures
- Include in social media posts

**Option B: Website Embed**
```html
<iframe src="https://docs.google.com/forms/d/e/[FORM_ID]/viewform?embedded=true" 
        width="100%" height="1200" frameborder="0" marginheight="0" marginwidth="0">
</iframe>
```

**Option C: Tilda Integration**
- Add HTML block to Tilda page
- Embed Google Form iframe
- Style to match website design

---

## 📈 Step 6: Testing & Launch (3 minutes)

### 6.1 Test Form

1. **Submit test application** with dummy data
2. **Verify Google Sheets** receives data correctly
3. **Check Zapier automation** fires properly
4. **Confirm email notifications** work

### 6.2 Launch Checklist

- [ ] Form tested with sample data
- [ ] Google Sheets integration working
- [ ] Zapier automation active
- [ ] Email notifications enabled
- [ ] Form embedded on website or link shared
- [ ] Application review process documented

---

## 🔄 Step 7: Application Processing Workflow

### 7.1 Daily Review Process

1. **Check Google Sheets** for new applications
2. **Review application quality** and completeness
3. **Score applications** based on criteria:
   - Social media following
   - Professional background
   - Referral experience
   - Promotion strategy quality
   - Target audience alignment

### 7.2 Approval Process

**For Approved Applications:**
1. **Add to Partners tab** in main referral system
2. **Create filtered view** for new partner
3. **Send welcome email** with:
   - Partner agreement to sign
   - Dashboard link
   - Marketing materials
   - Referral code (AZURE-[NAME])
   - Getting started guide

**For Rejected Applications:**
1. **Send polite rejection email**
2. **Archive application** in separate sheet
3. **Note reason** for future reference

---

## 📊 Form Analytics & Optimization

### 7.1 Google Forms Analytics

1. **View response summary** in Forms
2. **Track application volume** over time
3. **Analyze response patterns** by question

### 7.2 Conversion Tracking

**Track these metrics:**
- Application completion rate
- Application approval rate
- Source of applications (social media, website, etc.)
- Time from application to first referral

### 7.3 Form Optimization

**Monthly review:**
- Simplify questions with high abandonment
- Add questions that help identify quality partners
- Update industry options based on responses
- Refine approval criteria based on partner performance

---

## 🎯 Success Metrics

### Target Performance
- **10-15 applications/month** from marketing efforts
- **30-50% approval rate** for quality partners
- **2-week average** from application to first referral
- **80%+ form completion rate** for started applications

### Quality Indicators
- Partners with existing social media following
- Professional background in relevant industries
- Clear promotion strategy
- Realistic monthly goals
- Understanding of FTC compliance requirements

---

## 🔗 Integration with Existing System

This Google Form integrates perfectly with your current setup:

- **Google Sheets** - Automatic data collection
- **Zapier** - Automated notifications and processing
- **HubSpot** - Can sync approved partners to CRM
- **Trello** - Create onboarding tasks for new partners

The form provides a professional application process while maintaining your zero-cost approach and seamless integration with existing tools. 