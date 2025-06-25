---
id: hubspot-referral-progress-tracking
title: Referral Progress Tracking & Visual Indicators
sidebar_position: 10
description: Visual progress tracking system for referrals with stage indicators and process descriptions
---

# Referral Progress Tracking & Visual Indicators

## Overview

This system provides visual progress tracking for each referral, showing current stage, completion percentage, and detailed process descriptions. Partners and administrators can see exactly where each referral stands in the conversion process.

## Progress Tracking Pipeline

### Stage 1: Referral Received (10% Complete)
```yaml
Stage Name: "Referral Received"
Status: Initial
Progress: 10%
Duration: 0-24 hours
Color Code: #E3F2FD (Light Blue)
Icon: 🎯
```

**Process Description:**
- Referral link clicked or code entered
- Initial tracking cookie set
- UTM parameters captured
- Partner attribution recorded
- Lead enters CRM system

**Visual Indicators:**
- ✅ Referral code validated
- ✅ Partner identified
- ⏳ Awaiting first contact
- ⏳ Lead qualification pending

**Automated Actions:**
- Send partner notification email
- Create deal record
- Set initial properties
- Assign to sales team

---

### Stage 2: Initial Contact (25% Complete)
```yaml
Stage Name: "Initial Contact"
Status: In Progress
Progress: 25%
Duration: 1-3 days
Color Code: #FFF3E0 (Light Orange)
Icon: 📞
```

**Process Description:**
- First contact attempt made
- Lead qualification in progress
- Charter interest confirmed
- Initial requirements gathered
- Budget range discussed

**Visual Indicators:**
- ✅ Contact information verified
- ✅ Charter interest confirmed
- ⏳ Requirements gathering
- ⏳ Proposal preparation

**Required Actions:**
- [ ] Phone/email contact made
- [ ] Charter requirements documented
- [ ] Budget range established
- [ ] Preferred dates identified

---

### Stage 3: Proposal Sent (50% Complete)
```yaml
Stage Name: "Proposal Sent"
Status: Active
Progress: 50%
Duration: 3-7 days
Color Code: #F3E5F5 (Light Purple)
Icon: 📋
```

**Process Description:**
- Custom charter proposal created
- Yacht options presented
- Pricing and packages outlined
- Terms and conditions shared
- Follow-up scheduled

**Visual Indicators:**
- ✅ Proposal customized
- ✅ Yacht availability confirmed
- ✅ Pricing calculated
- ⏳ Client review in progress

**Proposal Components:**
- [ ] Yacht specifications
- [ ] Charter itinerary
- [ ] Pricing breakdown
- [ ] Terms & conditions
- [ ] Insurance requirements

---

### Stage 4: Negotiation (75% Complete)
```yaml
Stage Name: "Negotiation"
Status: Hot Lead
Progress: 75%
Duration: 2-5 days
Color Code: #E8F5E8 (Light Green)
Icon: 🤝
```

**Process Description:**
- Terms negotiation active
- Pricing discussions ongoing
- Contract modifications requested
- Final details being confirmed
- Booking preparation started

**Visual Indicators:**
- ✅ Proposal reviewed by client
- ✅ Interest confirmed
- ⏳ Terms negotiation
- ⏳ Contract finalization

**Negotiation Points:**
- [ ] Charter dates confirmed
- [ ] Pricing agreed upon
- [ ] Special requests addressed
- [ ] Payment terms set
- [ ] Cancellation policy accepted

---

### Stage 5: Closed Won (100% Complete)
```yaml
Stage Name: "Closed Won"
Status: Booked
Progress: 100%
Duration: Immediate
Color Code: #4CAF50 (Green)
Icon: ✅
```

**Process Description:**
- Charter booking confirmed
- Contract signed
- Deposit received
- Commission earned
- Partner notification sent

**Visual Indicators:**
- ✅ Contract executed
- ✅ Payment received
- ✅ Charter confirmed
- ✅ Commission calculated

**Completion Actions:**
- ✅ Booking confirmation sent
- ✅ Charter details finalized
- ✅ Commission recorded
- ✅ Partner credited

---

### Stage 6: Closed Lost (0% Complete)
```yaml
Stage Name: "Closed Lost"
Status: Lost
Progress: 0%
Duration: Variable
Color Code: #FFEBEE (Light Red)
Icon: ❌
```

**Process Description:**
- Referral did not convert
- Reason for loss documented
- Partner feedback provided
- Lessons learned captured
- Future opportunities noted

**Loss Reasons:**
- [ ] Budget constraints
- [ ] Timing issues
- [ ] Competitor chosen
- [ ] Requirements changed
- [ ] Lost interest

## Visual Progress Dashboard

### HubSpot Dashboard Configuration

#### Progress Bar Widget
```javascript
// Custom progress bar for deal records
function createProgressBar(stage, percentage) {
  return `
    <div class="referral-progress-container">
      <div class="progress-header">
        <span class="stage-name">${stage}</span>
        <span class="progress-percentage">${percentage}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${percentage}%"></div>
      </div>
      <div class="stage-description">
        ${getStageDescription(stage)}
      </div>
    </div>
  `;
}
```

#### CSS Styling
```css
.referral-progress-container {
  margin: 15px 0;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fafafa;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: bold;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #8BC34A);
  transition: width 0.3s ease;
}

.stage-description {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
}

/* Stage-specific colors */
.stage-received .progress-fill { background: #2196F3; }
.stage-contact .progress-fill { background: #FF9800; }
.stage-proposal .progress-fill { background: #9C27B0; }
.stage-negotiation .progress-fill { background: #4CAF50; }
.stage-won .progress-fill { background: #4CAF50; }
.stage-lost .progress-fill { background: #F44336; }
```

### Process Timeline View

#### Timeline Component
```yaml
Timeline Configuration:
  Display Type: Horizontal
  Show Icons: Yes
  Show Dates: Yes
  Show Duration: Yes
  Interactive: Yes

Timeline Elements:
  1. Referral Received
     - Icon: 🎯
     - Date: Auto-populated
     - Status: Completed/Current/Pending
  
  2. Initial Contact
     - Icon: 📞
     - Date: First contact date
     - Status: Completed/Current/Pending
  
  3. Proposal Sent
     - Icon: 📋
     - Date: Proposal send date
     - Status: Completed/Current/Pending
  
  4. Negotiation
     - Icon: 🤝
     - Date: Negotiation start
     - Status: Completed/Current/Pending
  
  5. Booking Confirmed
     - Icon: ✅
     - Date: Booking date
     - Status: Completed/Pending
```

## Automated Progress Updates

### Workflow Triggers

#### Progress Update Workflow
```yaml
Workflow Name: "Referral Progress Tracker"
Trigger: Deal stage change
Re-enrollment: Yes

Actions:
1. Calculate Progress Percentage
   - Stage 1: 10%
   - Stage 2: 25%
   - Stage 3: 50%
   - Stage 4: 75%
   - Stage 5: 100%
   - Stage 6: 0%

2. Update Progress Properties
   - Set progress_percentage
   - Set current_stage_description
   - Set stage_color_code
   - Set estimated_completion_date

3. Send Progress Notifications
   - Partner progress update
   - Internal team notification
   - Client status update (if applicable)

4. Update Visual Indicators
   - Refresh dashboard widgets
   - Update timeline view
   - Trigger progress bar animation
```

### Email Notifications

#### Partner Progress Update
```html
<!-- Email Template: Partner Progress Update -->
<div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
  <h2>🎯 Referral Progress Update</h2>
  
  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3>{{contact.firstname}} {{contact.lastname}}</h3>
    <p><strong>Current Stage:</strong> {{deal.dealstage}}</p>
    <p><strong>Progress:</strong> {{deal.progress_percentage}}% Complete</p>
    
    <!-- Progress Bar -->
    <div style="width: 100%; height: 20px; background: #e0e0e0; border-radius: 10px; overflow: hidden;">
      <div style="width: {{deal.progress_percentage}}%; height: 100%; background: #4CAF50;"></div>
    </div>
    
    <p style="margin-top: 15px;">
      <strong>Next Steps:</strong> {{deal.current_stage_description}}
    </p>
  </div>
  
  <p>We'll keep you updated as your referral progresses through our charter booking process.</p>
</div>
```

## Partner Dashboard Integration

### Custom Dashboard Properties

#### Dashboard Widgets
```yaml
Widget 1: Active Referrals Progress
  Type: Table
  Columns:
    - Client Name
    - Current Stage
    - Progress %
    - Days in Stage
    - Expected Close Date
    - Commission Value

Widget 2: Progress Summary
  Type: Donut Chart
  Data:
    - Referrals by Stage
    - Conversion Rates
    - Average Time per Stage

Widget 3: Recent Activity
  Type: Timeline
  Shows:
    - Stage changes
    - Key milestones
    - Next actions
```

### Mobile-Friendly Progress View

#### Mobile Dashboard
```css
@media (max-width: 768px) {
  .referral-progress-container {
    padding: 10px;
    margin: 10px 0;
  }
  
  .progress-header {
    flex-direction: column;
    gap: 5px;
  }
  
  .stage-description {
    font-size: 12px;
  }
  
  .progress-percentage {
    font-size: 18px;
    color: #4CAF50;
    font-weight: bold;
  }
}
```

## Reporting & Analytics

### Progress Reports

#### Weekly Progress Report
```yaml
Report Name: "Referral Progress Summary"
Frequency: Weekly
Recipients: Partner Success Team

Metrics:
  - Total Active Referrals
  - Stage Distribution
  - Average Time per Stage
  - Conversion Rates by Stage
  - Top Performing Partners
  - Bottleneck Identification

Visualizations:
  - Funnel Chart: Stage Progression
  - Bar Chart: Time in Each Stage
  - Line Chart: Weekly Progress Trends
  - Table: Individual Referral Status
```

#### Partner Performance Dashboard
```yaml
Dashboard Name: "Partner Referral Performance"
Access: Partner Portal

Sections:
  1. My Active Referrals
     - Progress bars for each referral
     - Current stage descriptions
     - Expected completion dates
  
  2. Performance Metrics
     - Total referrals this month
     - Conversion rate
     - Average time to close
     - Commission earned
  
  3. Stage Analysis
     - Where referrals typically stall
     - Success rate by stage
     - Improvement opportunities
```

## Implementation Checklist

### Phase 1: Basic Progress Tracking
- [ ] Create progress percentage property
- [ ] Set up stage change workflows
- [ ] Configure basic progress bar
- [ ] Test stage transitions

### Phase 2: Visual Enhancements
- [ ] Implement progress dashboard
- [ ] Create timeline view
- [ ] Add stage-specific styling
- [ ] Mobile optimization

### Phase 3: Automation & Notifications
- [ ] Set up automated progress emails
- [ ] Configure partner notifications
- [ ] Implement progress alerts
- [ ] Create escalation workflows

### Phase 4: Reporting & Analytics
- [ ] Build progress reports
- [ ] Create partner dashboard
- [ ] Set up performance metrics
- [ ] Implement bottleneck analysis

This comprehensive progress tracking system provides clear visibility into each referral's journey, helping both partners and your team understand exactly where each opportunity stands and what actions are needed to move it forward. 