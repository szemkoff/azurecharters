# Charter Website Templates

This document provides templates for Tilda implementation of charter websites.

## Yacht Listing Templates

### Standard Yacht Card

Use this template for consistent yacht listings across your site:

```html
<div class="t-card yacht-card">
  <div class="yacht-image">
    <img src="{{yacht_image}}" alt="{{yacht_name}}">
    <div class="yacht-overlay">
      <span class="yacht-length">{{yacht_length}}m</span>
      <span class="yacht-year">{{yacht_year}}</span>
    </div>
  </div>
  <div class="yacht-details">
    <h3 class="yacht-name">{{yacht_name}}</h3>
    <div class="yacht-specs">
      <div class="spec">
        <i class="icon-guests"></i>
        <span>{{yacht_guests}} Guests</span>
      </div>
      <div class="spec">
        <i class="icon-cabins"></i>
        <span>{{yacht_cabins}} Cabins</span>
      </div>
      <div class="spec">
        <i class="icon-crew"></i>
        <span>{{yacht_crew}} Crew</span>
      </div>
    </div>
    <div class="yacht-price">
      From {{yacht_price}} per week
    </div>
    <a href="{{yacht_detail_url}}" class="t-btn t-btn_sm">View Details</a>
  </div>
</div>
```

### Featured Yacht Block

Template for highlighting premium yacht offerings:

```html
<div class="t-container featured-yacht">
  <div class="t-col t-col_6">
    <img src="{{yacht_image}}" alt="{{yacht_name}}" class="featured-yacht-image">
  </div>
  <div class="t-col t-col_6">
    <div class="featured-yacht-content">
      <span class="featured-tag">Featured</span>
      <h2 class="featured-yacht-name">{{yacht_name}}</h2>
      <p class="featured-yacht-desc">{{yacht_description}}</p>
      <div class="featured-yacht-specs">
        <div class="spec-group">
          <div class="spec"><strong>Length:</strong> {{yacht_length}}m</div>
          <div class="spec"><strong>Beam:</strong> {{yacht_beam}}m</div>
          <div class="spec"><strong>Year:</strong> {{yacht_year}}</div>
        </div>
        <div class="spec-group">
          <div class="spec"><strong>Guests:</strong> {{yacht_guests}}</div>
          <div class="spec"><strong>Cabins:</strong> {{yacht_cabins}}</div>
          <div class="spec"><strong>Crew:</strong> {{yacht_crew}}</div>
        </div>
      </div>
      <div class="featured-yacht-price">
        From <strong>{{yacht_price}}</strong> per week
      </div>
      <div class="featured-yacht-cta">
        <a href="{{yacht_detail_url}}" class="t-btn">View Details</a>
        <a href="{{enquiry_url}}" class="t-btn t-btn_secondary">Enquire Now</a>
      </div>
    </div>
  </div>
</div>
```

## Inquiry Form Templates

### Quick Inquiry Form

```html
<form class="t-form inquiry-form">
  <div class="t-form__inputsbox">
    <div class="t-input-group">
      <input type="text" name="name" class="t-input" placeholder="Your Name" required>
    </div>
    <div class="t-input-group">
      <input type="email" name="email" class="t-input" placeholder="Email" required>
    </div>
    <div class="t-input-group">
      <select name="yacht" class="t-input">
        <option value="">Select Yacht</option>
        {{#each yachts}}
        <option value="{{id}}">{{name}}</option>
        {{/each}}
      </select>
    </div>
    <div class="t-input-group">
      <textarea name="message" class="t-input" placeholder="Your Message"></textarea>
    </div>
    <div class="t-form__submit">
      <button type="submit" class="t-submit">Send Inquiry</button>
    </div>
  </div>
</form>
```

More templates will be added in future updates. 