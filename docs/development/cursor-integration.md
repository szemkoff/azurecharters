# Cursor IDE Integration

This guide details how to use Cursor IDE to enhance your charter website development process, from creating custom code to maintaining and optimizing your site.

## Why Use Cursor IDE for Charter Website Development

Cursor IDE provides several advantages for charter website development:

1. **AI-Powered Development**: Generate custom code with AI assistance
2. **Charter-Specific Templates**: Quickly implement common charter website components
3. **API Integration Expertise**: Easily connect to booking systems and other services
4. **Collaborative Editing**: Work with team members in real-time
5. **Version Control**: Track changes and maintain code quality
6. **Performance Optimization**: Identify and fix performance issues

## Setting Up Cursor for Charter Development

### Installation and Configuration

1. **Download and Install Cursor**:
   - Download from [cursor.sh](https://cursor.sh)
   - Install on your development machine
   - Launch and complete initial setup

2. **Configure for Charter Development**:
   - Set up a dedicated project folder for your charter website
   - Initialize a Git repository for version control
   - Configure linting rules for HTML, CSS, and JavaScript

3. **Connect to Version Control**:
   ```bash
   # Initialize Git repository
   git init
   
   # Add remote repository
   git remote add origin https://github.com/yourusername/charter-website.git
   
   # Create initial commit
   git add .
   git commit -m "Initial charter website setup"
   git push -u origin main
   ```

## AI-Assisted Charter Website Development

### Code Generation for Charter Components

Use Cursor's AI capabilities to generate charter-specific components:

1. **Create a Prompt for Yacht Search**:
   ```
   Create a yacht search filter component with these filters:
   - Yacht size (30-50ft, 50-80ft, 80-100ft, 100ft+)
   - Yacht type (Motor, Sailing, Catamaran)
   - Destination (Mediterranean, Caribbean, Asia Pacific)
   - Price range (Under $10k, $10k-$20k, $20k-$50k, $50k+)
   - Number of guests (2-6, 6-10, 10-12, 12+)
   - Include a submit button and reset filters button
   ```

2. **Generate Yacht Listing Grid**:
   ```
   Create a responsive grid layout for yacht listings with:
   - Featured image with optional "Featured" badge
   - Yacht name and brief description
   - Key specifications (length, guests, cabins)
   - Price display (per week)
   - "View Details" button
   - Make it responsive for mobile, tablet, and desktop
   ```

3. **Create Yacht Details Layout**:
   ```
   Design a yacht details page layout with:
   - Image gallery/slider at the top
   - Yacht name and key features
   - Tab navigation for: Overview, Specifications, Amenities, Crew, Calendar
   - Pricing calculator
   - Inquiry form
   - Similar yachts section
   ```

### Cursor-Specific Commands for Charter Development

Use these Cursor keyboard shortcuts to accelerate development:

| Command | Windows/Linux | Mac | Use Case |
|---------|---------------|-----|----------|
| AI Complete | Alt+\ | Option+\ | Complete code snippets for yacht filters |
| Chat with AI | Ctrl+L | Cmd+L | Ask about implementing yacht search functionality |
| Explain Code | Alt+/ | Option+/ | Understand complex booking system integration |
| Search Files | Ctrl+P | Cmd+P | Navigate between yacht templates quickly |
| Command Palette | Ctrl+Shift+P | Cmd+Shift+P | Access all Cursor features |

## Tilda Integration with Cursor

Use Cursor to develop custom code for your Tilda charter website:

### Working with Tilda's Code Editor

1. **Export Tilda Code**:
   - In Tilda, navigate to your page
   - Click "Export" in page settings
   - Download the HTML/CSS/JS files
   - Import them into Cursor for editing

2. **Develop Custom Components**:
   - Use Cursor to develop custom Tilda Zero Blocks
   - Test locally before integrating with Tilda
   - Use version control to track changes

3. **Importing Code Back to Tilda**:
   - Use Tilda's Code Editor (in Zero Block)
   - Copy your refined code from Cursor
   - Paste into the appropriate sections in Tilda

### Example: Creating a Custom Yacht Search Component

```javascript
// @cursor-generated
/**
 * Advanced Yacht Search Component for Tilda
 * This component allows filtering yachts by multiple criteria
 */

// Configuration
const YACHT_CONFIG = {
  // API endpoint for yacht data (change this to your actual endpoint)
  apiEndpoint: '/yachts.json',
  
  // Filter definitions
  filters: {
    sizes: ['30-50ft', '50-80ft', '80-100ft', '100ft+'],
    types: ['Motor Yacht', 'Sailing Yacht', 'Catamaran', 'Gulet'],
    destinations: ['Mediterranean', 'Caribbean', 'Asia Pacific', 'Other'],
    priceRanges: ['Under $10,000', '$10,000 - $20,000', '$20,000 - $50,000', 'Over $50,000'],
    guestCounts: ['2-6', '6-10', '10-12', '12+']
  },
  
  // Selectors
  selectors: {
    container: '.yacht-search-container',
    filterForm: '.yacht-filter-form',
    resultsContainer: '.yacht-results-container',
    countDisplay: '.results-count',
    filterFields: {
      size: '#filter-size',
      type: '#filter-type',
      destination: '#filter-destination',
      price: '#filter-price',
      guests: '#filter-guests'
    },
    submitButton: '.search-submit',
    resetButton: '.search-reset'
  }
};

// Main yacht search class
class YachtSearch {
  constructor(config) {
    this.config = config;
    this.yachts = [];
    this.filteredYachts = [];
    this.container = document.querySelector(config.selectors.container);
    
    if (!this.container) {
      console.error('Yacht search container not found');
      return;
    }
    
    this.initialize();
  }
  
  async initialize() {
    // Fetch yacht data
    await this.fetchYachts();
    
    // Set up event listeners
    this.setupEventListeners();
    
    // Initial render
    this.renderResults(this.yachts);
  }
  
  async fetchYachts() {
    try {
      const response = await fetch(this.config.apiEndpoint);
      if (!response.ok) {
        throw new Error('Failed to fetch yacht data');
      }
      
      this.yachts = await response.json();
      this.filteredYachts = [...this.yachts];
      
    } catch (error) {
      console.error('Error fetching yacht data:', error);
      // Use sample data as fallback
      this.yachts = this.getSampleYachts();
      this.filteredYachts = [...this.yachts];
    }
  }
  
  getSampleYachts() {
    // Sample yacht data for testing
    return [
      {
        id: 'yacht1',
        name: 'Azure Dream',
        type: 'Motor Yacht',
        size: '80-100ft',
        length: '85ft',
        guests: 8,
        cabins: 4,
        destination: 'Mediterranean',
        price: 35000,
        priceRange: '$20,000 - $50,000',
        guestCount: '6-10',
        image: 'https://example.com/yachts/azure-dream.jpg',
        featured: true
      },
      // Add more sample yachts here
    ];
  }
  
  setupEventListeners() {
    const form = this.container.querySelector(this.config.selectors.filterForm);
    const submitBtn = this.container.querySelector(this.config.selectors.submitButton);
    const resetBtn = this.container.querySelector(this.config.selectors.resetButton);
    
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.applyFilters();
      });
    }
    
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        this.applyFilters();
      });
    }
    
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.resetFilters();
      });
    }
  }
  
  applyFilters() {
    const filters = this.getFilterValues();
    
    this.filteredYachts = this.yachts.filter(yacht => {
      let matches = true;
      
      // Check each filter
      if (filters.size && yacht.size !== filters.size) {
        matches = false;
      }
      
      if (filters.type && yacht.type !== filters.type) {
        matches = false;
      }
      
      if (filters.destination && yacht.destination !== filters.destination) {
        matches = false;
      }
      
      if (filters.priceRange && yacht.priceRange !== filters.priceRange) {
        matches = false;
      }
      
      if (filters.guestCount && yacht.guestCount !== filters.guestCount) {
        matches = false;
      }
      
      return matches;
    });
    
    this.renderResults(this.filteredYachts);
  }
  
  getFilterValues() {
    const selectors = this.config.selectors.filterFields;
    
    return {
      size: this.getSelectValue(selectors.size),
      type: this.getSelectValue(selectors.type),
      destination: this.getSelectValue(selectors.destination),
      priceRange: this.getSelectValue(selectors.price),
      guestCount: this.getSelectValue(selectors.guests)
    };
  }
  
  getSelectValue(selector) {
    const element = this.container.querySelector(selector);
    return element ? element.value : '';
  }
  
  resetFilters() {
    const selectors = this.config.selectors.filterFields;
    
    // Reset all select elements
    Object.values(selectors).forEach(selector => {
      const element = this.container.querySelector(selector);
      if (element) {
        element.selectedIndex = 0;
      }
    });
    
    // Reset results to show all yachts
    this.filteredYachts = [...this.yachts];
    this.renderResults(this.filteredYachts);
  }
  
  renderResults(yachts) {
    const resultsContainer = this.container.querySelector(this.config.selectors.resultsContainer);
    const countDisplay = this.container.querySelector(this.config.selectors.countDisplay);
    
    if (!resultsContainer) {
      console.error('Results container not found');
      return;
    }
    
    // Update count display
    if (countDisplay) {
      countDisplay.textContent = `${yachts.length} yachts found`;
    }
    
    // Generate HTML for yacht cards
    resultsContainer.innerHTML = yachts.map(yacht => this.generateYachtCard(yacht)).join('');
  }
  
  generateYachtCard(yacht) {
    return `
      <div class="yacht-card" data-id="${yacht.id}">
        <div class="yacht-card-image">
          <img src="${yacht.image}" alt="${yacht.name}">
          ${yacht.featured ? '<span class="featured-badge">Featured</span>' : ''}
        </div>
        <div class="yacht-card-content">
          <h3 class="yacht-name">${yacht.name}</h3>
          <div class="yacht-specs">
            <span class="spec"><i class="icon-ruler"></i> ${yacht.length}</span>
            <span class="spec"><i class="icon-user"></i> ${yacht.guests} Guests</span>
            <span class="spec"><i class="icon-bed"></i> ${yacht.cabins} Cabins</span>
          </div>
          <div class="yacht-price">
            <span class="price-label">From</span>
            <span class="price-value">$${yacht.price.toLocaleString()}</span>
            <span class="price-period">/ week</span>
          </div>
          <a href="/yacht/${yacht.id}" class="view-details-btn">View Details</a>
        </div>
      </div>
    `;
  }
}

// Initialize on document ready
document.addEventListener('DOMContentLoaded', () => {
  new YachtSearch(YACHT_CONFIG);
});
```

## Advanced Development Tasks

### Creating a Yacht Availability System

Use Cursor to develop a yacht availability calendar that connects with your booking system:

```javascript
// @cursor-generated
/**
 * Yacht Availability Calendar
 * This component displays a calendar showing yacht availability and allows booking requests
 */
class YachtAvailabilityCalendar {
  constructor(config) {
    this.yachtId = config.yachtId;
    this.containerId = config.containerId;
    this.apiEndpoint = config.apiEndpoint;
    this.container = document.getElementById(this.containerId);
    this.currentDate = new Date();
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();
    this.availabilityData = [];
    
    this.init();
  }
  
  async init() {
    if (!this.container) {
      console.error('Calendar container not found');
      return;
    }
    
    await this.fetchAvailability();
    this.renderCalendar();
    this.setupEventListeners();
  }
  
  async fetchAvailability() {
    try {
      const response = await fetch(`${this.apiEndpoint}/availability/${this.yachtId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch availability data');
      }
      
      this.availabilityData = await response.json();
    } catch (error) {
      console.error('Error fetching availability:', error);
      // Use sample data as fallback
      this.availabilityData = this.getSampleAvailability();
    }
  }
  
  getSampleAvailability() {
    // Sample availability data for testing
    const data = {};
    const today = new Date();
    
    // Set some random dates as booked
    for (let i = 1; i <= 28; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), i);
      const dateString = this.formatDate(date);
      
      // Randomly assign status
      const rand = Math.random();
      let status;
      
      if (rand < 0.2) {
        status = 'booked';
      } else if (rand < 0.3) {
        status = 'option';
      } else {
        status = 'available';
      }
      
      data[dateString] = status;
    }
    
    return data;
  }
  
  formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  renderCalendar() {
    // Create calendar header
    const calendarHeader = this.createCalendarHeader();
    
    // Create calendar grid
    const calendarGrid = this.createCalendarGrid();
    
    // Create booking form
    const bookingForm = this.createBookingForm();
    
    // Combine everything
    this.container.innerHTML = `
      <div class="yacht-calendar-wrapper">
        ${calendarHeader}
        ${calendarGrid}
        ${bookingForm}
      </div>
    `;
  }
  
  createCalendarHeader() {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    return `
      <div class="calendar-header">
        <button class="nav-btn prev-month">&lt;</button>
        <h3 class="current-month">${monthNames[this.currentMonth]} ${this.currentYear}</h3>
        <button class="nav-btn next-month">&gt;</button>
      </div>
    `;
  }
  
  createCalendarGrid() {
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    
    let calendarDays = '';
    
    // Create day headers
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayHeaders = dayNames.map(day => `<div class="calendar-day-header">${day}</div>`).join('');
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays += '<div class="calendar-day empty"></div>';
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(this.currentYear, this.currentMonth, day);
      const dateString = this.formatDate(date);
      const status = this.availabilityData[dateString] || 'available';
      
      calendarDays += `
        <div class="calendar-day status-${status}" data-date="${dateString}">
          <span class="day-number">${day}</span>
        </div>
      `;
    }
    
    return `
      <div class="calendar-grid">
        ${dayHeaders}
        ${calendarDays}
      </div>
      <div class="calendar-legend">
        <div class="legend-item"><span class="legend-color available"></span> Available</div>
        <div class="legend-item"><span class="legend-color booked"></span> Booked</div>
        <div class="legend-item"><span class="legend-color option"></span> Option</div>
      </div>
    `;
  }
  
  createBookingForm() {
    return `
      <div class="booking-form">
        <h4>Request Booking</h4>
        <form id="yacht-booking-form">
          <div class="form-group">
            <label for="start-date">Start Date</label>
            <input type="date" id="start-date" name="start-date" required>
          </div>
          <div class="form-group">
            <label for="end-date">End Date</label>
            <input type="date" id="end-date" name="end-date" required>
          </div>
          <div class="form-group">
            <label for="guests">Number of Guests</label>
            <input type="number" id="guests" name="guests" min="1" required>
          </div>
          <button type="submit" class="booking-submit">Check Availability</button>
        </form>
      </div>
    `;
  }
  
  setupEventListeners() {
    // Month navigation
    const prevMonthBtn = this.container.querySelector('.prev-month');
    const nextMonthBtn = this.container.querySelector('.next-month');
    
    if (prevMonthBtn) {
      prevMonthBtn.addEventListener('click', () => {
        this.navigateMonth(-1);
      });
    }
    
    if (nextMonthBtn) {
      nextMonthBtn.addEventListener('click', () => {
        this.navigateMonth(1);
      });
    }
    
    // Booking form submission
    const bookingForm = this.container.querySelector('#yacht-booking-form');
    
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleBookingRequest();
      });
    }
  }
  
  navigateMonth(direction) {
    this.currentMonth += direction;
    
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    
    this.renderCalendar();
    this.setupEventListeners();
  }
  
  handleBookingRequest() {
    const startDateInput = this.container.querySelector('#start-date');
    const endDateInput = this.container.querySelector('#end-date');
    const guestsInput = this.container.querySelector('#guests');
    
    if (!startDateInput || !endDateInput || !guestsInput) {
      console.error('Form inputs not found');
      return;
    }
    
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    const guests = guestsInput.value;
    
    // Validate dates
    if (new Date(startDate) >= new Date(endDate)) {
      alert('End date must be after start date');
      return;
    }
    
    // Check availability for the selected date range
    const isAvailable = this.checkDateRangeAvailability(startDate, endDate);
    
    if (!isAvailable) {
      alert('Sorry, the yacht is not available for the selected dates');
      return;
    }
    
    // Submit booking request
    this.submitBookingRequest(startDate, endDate, guests);
  }
  
  checkDateRangeAvailability(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    for (let day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {
      const dateString = this.formatDate(day);
      const status = this.availabilityData[dateString];
      
      if (status === 'booked') {
        return false;
      }
    }
    
    return true;
  }
  
  async submitBookingRequest(startDate, endDate, guests) {
    try {
      const response = await fetch(`${this.apiEndpoint}/booking-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          yachtId: this.yachtId,
          startDate,
          endDate,
          guests
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit booking request');
      }
      
      const result = await response.json();
      
      // Show success message
      alert('Your booking request has been submitted successfully! Reference: ' + result.bookingId);
      
    } catch (error) {
      console.error('Error submitting booking request:', error);
      alert('There was an error submitting your booking request. Please try again or contact us directly.');
    }
  }
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  new YachtAvailabilityCalendar({
    yachtId: 'yacht-123',
    containerId: 'availability-calendar',
    apiEndpoint: 'https://api.example.com/yachts'
  });
});
```

## Integrating with External APIs

### Booking System Integration

Develop a connection between your Tilda site and a yacht booking system:

```javascript
// @cursor-generated
/**
 * Booking System Integration
 * Connects Tilda forms with external booking systems
 */
class BookingSystemIntegration {
  constructor(config) {
    this.apiKey = config.apiKey;
    this.apiEndpoint = config.apiEndpoint;
    this.formSelector = config.formSelector;
    
    this.init();
  }
  
  init() {
    const bookingForms = document.querySelectorAll(this.formSelector);
    
    if (bookingForms.length === 0) {
      console.warn('No booking forms found on the page');
      return;
    }
    
    bookingForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmission(form);
      });
    });
  }
  
  async handleFormSubmission(form) {
    // Show loading state
    this.setFormLoading(form, true);
    
    // Collect form data
    const formData = new FormData(form);
    const bookingData = this.processFormData(formData);
    
    try {
      // Send data to booking system
      const response = await this.sendToBookingSystem(bookingData);
      
      // Handle successful booking
      this.handleSuccessfulBooking(form, response);
      
    } catch (error) {
      // Handle booking error
      this.handleBookingError(form, error);
    } finally {
      // Reset loading state
      this.setFormLoading(form, false);
    }
  }
  
  processFormData(formData) {
    // Extract and format booking data
    return {
      yachtId: formData.get('yacht-id'),
      startDate: formData.get('start-date'),
      endDate: formData.get('end-date'),
      guestCount: parseInt(formData.get('guests'), 10),
      customerInfo: {
        name: formData.get('customer-name'),
        email: formData.get('customer-email'),
        phone: formData.get('customer-phone')
      },
      specialRequests: formData.get('special-requests') || '',
      timestamp: new Date().toISOString()
    };
  }
  
  async sendToBookingSystem(bookingData) {
    const response = await fetch(this.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(bookingData)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create booking');
    }
    
    return await response.json();
  }
  
  setFormLoading(form, isLoading) {
    const submitButton = form.querySelector('button[type="submit"]');
    
    if (!submitButton) {
      return;
    }
    
    if (isLoading) {
      submitButton.disabled = true;
      submitButton.dataset.originalText = submitButton.textContent;
      submitButton.textContent = 'Processing...';
      form.classList.add('loading');
    } else {
      submitButton.disabled = false;
      submitButton.textContent = submitButton.dataset.originalText || 'Submit';
      form.classList.remove('loading');
    }
  }
  
  handleSuccessfulBooking(form, response) {
    // Hide the form
    form.classList.add('hidden');
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'booking-success';
    successMessage.innerHTML = `
      <h3>Thank You for Your Booking Request!</h3>
      <p>Your booking reference is: <strong>${response.bookingId}</strong></p>
      <p>We will contact you shortly to confirm your charter details.</p>
    `;
    
    form.parentNode.insertBefore(successMessage, form.nextSibling);
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth' });
  }
  
  handleBookingError(form, error) {
    // Create or update error message
    let errorMessage = form.querySelector('.booking-error');
    
    if (!errorMessage) {
      errorMessage = document.createElement('div');
      errorMessage.className = 'booking-error';
      form.prepend(errorMessage);
    }
    
    errorMessage.textContent = error.message || 'There was an error processing your booking. Please try again or contact us directly.';
    
    // Scroll to error message
    errorMessage.scrollIntoView({ behavior: 'smooth' });
  }
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  new BookingSystemIntegration({
    apiKey: 'your-booking-system-api-key',
    apiEndpoint: 'https://api.booking-system.com/bookings',
    formSelector: '.yacht-booking-form'
  });
});
```

## Performance Optimization

Use Cursor to identify and fix performance issues:

### Image Optimization Script

```javascript
// @cursor-generated
/**
 * Yacht Image Optimization
 * Optimizes yacht images for better performance
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const config = {
  inputDir: './original-images',
  outputDir: './optimized-images',
  sizes: {
    thumbnail: 300,
    medium: 800,
    large: 1600,
    full: 2000
  },
  quality: 80,
  formats: ['webp', 'jpg']
};

// Create output directory if it doesn't exist
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Process each size directory
Object.keys(config.sizes).forEach(size => {
  const sizeDir = path.join(config.outputDir, size);
  if (!fs.existsSync(sizeDir)) {
    fs.mkdirSync(sizeDir, { recursive: true });
  }
  
  // Create format directories within size directory
  config.formats.forEach(format => {
    const formatDir = path.join(sizeDir, format);
    if (!fs.existsSync(formatDir)) {
      fs.mkdirSync(formatDir, { recursive: true });
    }
  });
});

// Process images
async function processImages() {
  try {
    const files = fs.readdirSync(config.inputDir);
    
    console.log(`Found ${files.length} images to process`);
    
    for (const file of files) {
      const inputPath = path.join(config.inputDir, file);
      const fileStats = fs.statSync(inputPath);
      
      // Skip directories
      if (fileStats.isDirectory()) {
        continue;
      }
      
      // Check if file is an image
      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
        console.log(`Skipping non-image file: ${file}`);
        continue;
      }
      
      const fileName = path.basename(file, ext);
      
      console.log(`Processing image: ${file}`);
      
      // Process each size and format
      for (const [sizeName, width] of Object.entries(config.sizes)) {
        for (const format of config.formats) {
          const outputPath = path.join(
            config.outputDir,
            sizeName,
            format,
            `${fileName}.${format}`
          );
          
          try {
            await sharp(inputPath)
              .resize(width, null, { withoutEnlargement: true })
              [format]({ quality: config.quality })
              .toFile(outputPath);
            
            console.log(`Created ${sizeName} ${format}: ${outputPath}`);
          } catch (error) {
            console.error(`Error processing ${file} to ${sizeName} ${format}:`, error);
          }
        }
      }
    }
    
    console.log('Image processing completed');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

// Run the process
processImages();
```

## Best Practices for Charter Website Development

### Code Structure

Organize your charter website code in Cursor with this structure:

```
charter-website/
├── components/
│   ├── yacht-search/
│   │   ├── index.js
│   │   ├── filters.js
│   │   └── results.js
│   ├── yacht-details/
│   │   ├── index.js
│   │   ├── gallery.js
│   │   ├── specifications.js
│   │   └── booking-form.js
│   └── common/
│       ├── header.js
│       ├── footer.js
│       └── contact-form.js
├── utils/
│   ├── api.js
│   ├── formatters.js
│   └── validation.js
├── styles/
│   ├── main.css
│   ├── yacht-search.css
│   └── yacht-details.css
└── assets/
    ├── images/
    ├── icons/
    └── fonts/
```

### Documentation Practices

Document your charter website code with these conventions:

```javascript
/**
 * YachtSearch Component
 * 
 * @description Creates a filterable search interface for yacht charters
 * @version 1.2.0
 * @author Your Name
 * 
 * @param {Object} config - Configuration options
 * @param {string} config.containerId - ID of the container element
 * @param {string} config.apiEndpoint - API endpoint for yacht data
 * @param {Object} config.filters - Filter configuration
 * 
 * @example
 * const yachtSearch = new YachtSearch({
 *   containerId: 'yacht-search',
 *   apiEndpoint: '/api/yachts',
 *   filters: {
 *     destinations: ['Mediterranean', 'Caribbean']
 *   }
 * });
 */
```

## Next Steps

To leverage Cursor for your charter website development:

1. [Download and install Cursor](https://cursor.sh)
2. Clone this framework repository
3. Explore the [code samples](./code-samples) section
4. Watch our [Cursor tutorial videos](https://www.example.com/cursor-tutorials)
5. Join our [developer community](https://discord.gg/azureyachtgroup) for assistance 