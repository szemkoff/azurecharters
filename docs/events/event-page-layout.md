# Event Experiences

## Hero Section
**Title:** Luxury Yacht Events & Experiences
**Subtitle:** Curated Maritime Events for Unforgettable Moments
**Background:** [High-quality image of yacht event]

## Event Categories Navigation
- Corporate Events
- Special Celebrations
- Luxury Experiences
- Themed Cruises
- Private Functions

## Featured Events Section

### Event Card Template
```jsx
<div class="event-card">
    <div class="event-image">
        <!-- Event image -->
        <span class="event-tag">[Category]</span>
    </div>
    <div class="event-content">
        <h3 class="event-title">[Event Name]</h3>
        <p class="event-description">[Brief Description]</p>
        <div class="event-details">
            <span class="duration"><i class="icon-clock"></i> [Duration]</span>
            <span class="guests"><i class="icon-group"></i> [Guest Capacity]</span>
            <span class="location"><i class="icon-location"></i> [Location]</span>
        </div>
        <div class="event-price">
            <span class="price">From $[Amount]</span>
            <span class="per">/event</span>
        </div>
        <button class="book-now">Book Now</button>
    </div>
</div>
```

## Sample Event Cards

### Corporate Events

#### Executive Yacht Meeting
```jsx
<EventCard
    image="/images/executive-meeting.jpg"
    category="Corporate"
    title="Executive Yacht Meeting"
    description="Transform your business meetings into an exclusive maritime experience. Full audiovisual equipment and catering included."
    duration="4-8 hours"
    capacity="12-30 guests"
    location="Miami Harbor"
    price="5,000"
/>
```

#### Corporate Team Building
```jsx
<EventCard
    image="/images/team-building.jpg"
    category="Corporate"
    title="Team Building Cruise"
    description="Strengthen team bonds with a curated day of sailing, activities, and gourmet dining."
    duration="Full Day"
    capacity="20-50 guests"
    location="Florida Keys"
    price="8,500"
/>
```

### Special Celebrations

#### Luxury Wedding Package
```jsx
<EventCard
    image="/images/yacht-wedding.jpg"
    category="Celebrations"
    title="Maritime Wedding Experience"
    description="Your dream wedding on the water. Complete with ceremony setup, catering, and photography."
    duration="6-12 hours"
    capacity="Up to 100 guests"
    location="Custom Routes"
    price="15,000"
/>
```

#### Anniversary Celebration
```jsx
<EventCard
    image="/images/anniversary.jpg"
    category="Celebrations"
    title="Romantic Anniversary Cruise"
    description="Celebrate your special day with a private cruise, champagne, and gourmet dinner."
    duration="4 hours"
    capacity="2-20 guests"
    location="Sunset Route"
    price="3,500"
/>
```

### Themed Experiences

#### Wine Tasting Cruise
```jsx
<EventCard
    image="/images/wine-tasting.jpg"
    category="Experiences"
    title="Wine & Waves Experience"
    description="Curated wine tasting experience with sommelier and paired gourmet appetizers."
    duration="3 hours"
    capacity="10-30 guests"
    location="Coastal Waters"
    price="4,500"
/>
```

#### Sunset Jazz Cruise
```jsx
<EventCard
    image="/images/jazz-cruise.jpg"
    category="Experiences"
    title="Jazz at Sea"
    description="Live jazz performance, cocktails, and appetizers while cruising into the sunset."
    duration="3 hours"
    capacity="20-40 guests"
    location="Harbor Route"
    price="6,000"
/>
```

## Styling Guidelines

### Color Scheme
```css
:root {
    --primary: #1B3C59;
    --secondary: #456789;
    --accent: #GOLD;
    --text-dark: #333333;
    --text-light: #FFFFFF;
    --background: #F5F5F5;
}
```

### Typography
```css
.event-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
}

.event-description {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
}

.price {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}
```

### Card Design
```css
.event-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.event-card:hover {
    transform: translateY(-5px);
}
```

## Booking Process

### Quick Booking Steps
1. Select Event Package
2. Choose Date & Time
3. Specify Guest Count
4. Add Custom Requirements
5. Secure with Deposit

### Booking Form Fields
```jsx
<BookingForm>
    <Field name="eventType" label="Event Type" type="select" />
    <Field name="date" label="Preferred Date" type="date" />
    <Field name="time" label="Preferred Time" type="time" />
    <Field name="guestCount" label="Number of Guests" type="number" />
    <Field name="specialRequests" label="Special Requirements" type="textarea" />
    <Field name="contactName" label="Contact Name" type="text" />
    <Field name="contactEmail" label="Email" type="email" />
    <Field name="contactPhone" label="Phone" type="tel" />
</BookingForm>
```

## Additional Features

### Event Customization Options
- Custom Catering Menus
- Decoration Packages
- Entertainment Add-ons
- Photography Services
- Transportation Services

### Pricing Display
```jsx
<PricingSection>
    <BasePrice>Base Package Price</BasePrice>
    <AddOns>Optional Add-ons</AddOns>
    <TotalPrice>Total Event Cost</TotalPrice>
</PricingSection>
```

### Availability Calendar
```jsx
<Calendar
    available={true}
    bookedDates={[...dates]}
    pricePerDay={...prices}
/>
```

## Mobile Responsiveness

### Card Grid Layout
```css
.event-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
}

@media (max-width: 768px) {
    .event-grid {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
}
```

## Call-to-Action Sections

### Contact Section
```jsx
<ContactSection>
    <h2>Need a Custom Event Package?</h2>
    <p>Our event specialists are ready to help create your perfect occasion</p>
    <Button>Contact Event Planner</Button>
</ContactSection>
```

### FAQ Section
```jsx
<FAQSection>
    <FAQ question="What's included in the base price?">
        Base packages include vessel charter, standard catering, and basic setup.
    </FAQ>
    <FAQ question="Can I customize the event package?">
        Yes, all packages can be customized to your specific requirements.
    </FAQ>
    <FAQ question="What is the booking and cancellation policy?">
        [Link to booking policy]
    </FAQ>
</FAQSection>
```

## SEO Optimization
```html
<meta name="description" content="Luxury yacht events and experiences in Miami. Corporate events, weddings, celebrations, and themed cruises with fixed pricing.">
<meta name="keywords" content="yacht events, corporate events, yacht wedding, luxury experiences, Miami yacht charter">
```

## Analytics Integration
```javascript
// Event tracking
function trackEventView(eventId, eventName) {
    analytics.track('Event View', {
        eventId: eventId,
        eventName: eventName,
        timestamp: new Date()
    });
}

// Booking funnel tracking
function trackBookingStep(step, eventType) {
    analytics.track('Booking Step', {
        step: step,
        eventType: eventType,
        timestamp: new Date()
    });
}
``` 