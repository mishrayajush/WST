# Quick Reference: Indianization Checklist

## 🟢 GREEN - Already Indianized (No Changes Needed)
These folders already contain appropriate Indian data and require no updates:

- **Q2** - Online Shopping Website (already using ₹ Rupees)
- **Q4** - Electricity Bill Form (₹ currency, UPI payments)
- **Q8** - Sports Tournament (Mumbai location, Indian venues)
- **Q9** - School System (Indian names, Indian grades)
- **Q10** - College Website (Indian names, Indian degrees)
- **Q13** - User Database JSON (Indian names: Aarav, Priya, Rajesh)
- **Q15** - User Database Read File (Indian names)
- **Q16** - Student Records Sync (Indian names, Indian grades)
- **Q17** - Student Records Async (Indian names, Indian grades)
- **Q18** - Student Functions (Indian names, Indian subjects)
- **Q19** - Console Error (No data to localize)
- **Q20** - Console Warn (No data to localize)

---

## 🟡 YELLOW - Partially Indianized (Minor Changes)
These folders need small terminology or naming updates:

### Q3 - Hospital Patient Admission Form
- [ ] Rename "Zip Code" → "PIN Code"
- [ ] Ensure phone validation is 10-digit format
- [ ] Consider adding Indian state options in dropdown

### Q6 - Social Media Post (JSON)
- [ ] Change user names from Western to Indian names:
  - John Doe → Aarav Sharma
  - Jane Smith → Priya Verma
  - Alice Wonder → Ananya Verma
  - Bob Builder → Rajesh Kumar
  - (etc.)

---

## 🔴 RED - Major Changes Needed (Currency & Data Conversion)

### Q5 - E-commerce Cart (JSON)
**Changes Required:**
- [ ] Change `"currency": "USD"` → `"currency": "INR"`
- [ ] Convert all prices (multiply by 83):
  - Laptop: $899.99 → ₹74,699
  - USB Mouse: $25.50 → ₹2,117
  - Keyboard: $120.00 → ₹9,960
  - Monitor Stand: $45.99 → ₹3,817
- [ ] Update tax and shipping calculations if needed

**File:** `/Users/mpa/Desktop/journal/Q5-EcommerceCart/cart.json`

---

### Q7 - Airline System (JSON)
**Changes Required:**
- [ ] Convert ticket prices from USD to INR:
  - Business class: $1200 → ₹99,600
  - Economy class: $400 → ₹33,200
- [ ] Update passenger information:
  - Change names to Indian names
  - Update phone numbers to +91 format
  - Change nationality to Indian (or add Indian passengers)
- [ ] Update email domains to Indian domains
- [ ] Consider adding Indian cities (Delhi, Mumbai, Bangalore)

**File:** `/Users/mpa/Desktop/journal/Q7-AirlineSystem/airline.json`

**Example Changes:**
```json
// Change passenger from:
{
  "firstName": "John",
  "lastName": "Doe",
  "nationality": "USA",
  "phone": "+1-212-555-0100"
}

// To:
{
  "firstName": "Aarav",
  "lastName": "Sharma",
  "nationality": "India",
  "phone": "+91-9876543210"
}
```

---

### Q11 - Travel Booking System (JSON)
**Changes Required:**
- [ ] Convert all USD prices to INR (multiply by 83):
  - Trip costs: $5000 → ₹415,000
  - Hotel rates: $200/night → ₹16,600/night
  - Flight prices: $800 → ₹66,400, $150 → ₹12,450
- [ ] Update user information:
  - Change names to Indian names
  - Update phone numbers to +91 format
- [ ] Add Indian destinations and cities:
  - Add hotels in: Delhi, Goa, Kerala, Jaipur
  - Add flights from: Mumbai, Delhi, Bangalore
- [ ] Update email domains

**File:** `/Users/mpa/Desktop/journal/Q11-TravelBookingSystem/booking.json`

**Price Conversion Examples:**
| Item | USD | INR |
|------|-----|-----|
| Europe Tour | $5,000 | ₹415,000 |
| Asia Adventure | $3,500 | ₹290,500 |
| Luxe Hotel | $200/night | ₹16,600/night |
| Economy Flight | $800/person | ₹66,400/person |

---

### Q14 - Product List JSON (Async)
**Changes Required:**
- [ ] Convert all product prices from USD to INR:
  - Laptop: $899.99 → ₹74,699
  - Smartphone: $599.99 → ₹49,799
  - Headphones: $199.99 → ₹16,599
  - USB Cable: $12.99 → ₹1,078

**File:** `/Users/mpa/Desktop/journal/Q14-ProductListJSON/data.json`

---

### Q1 - Student Registration Form (Optional Enhancement)
**Status:** Already good, but can enhance:
- [ ] Add India-specific validation for phone (10 digits)
- [ ] Add common Indian cities in dropdown
- [ ] Consider adding "Country" field set to "India"

**File:** `/Users/mpa/Desktop/journal/Q1-StudentRegistrationForm/index.html`

---

## Modification Priority Order

### Phase 1: Quick Wins (10-15 minutes)
1. Q3: Rename "Zip Code" → "PIN Code" (simple text replacement)
2. Q6: Update social media user names (simple JSON update)

### Phase 2: Currency Conversions (20-30 minutes)
3. Q5: Convert cart prices USD → INR
4. Q14: Convert product prices USD → INR
5. Q7: Convert airline ticket prices USD → INR
6. Q11: Convert all travel prices USD → INR

### Phase 3: Data Updates (15-20 minutes)
7. Q7: Update passenger names and phone formats
8. Q11: Update user data and add Indian destinations
9. Q1: Optional enhancements for Indian specificity

---

## File Location Reference

| Q # | Folder Path | Files to Update |
|-----|-------------|-----------------|
| Q1 | `Q1-StudentRegistrationForm/` | `index.html` |
| Q3 | `Q3-PatientAdmissionForm/` | `index.html` |
| Q5 | `Q5-EcommerceCart/` | `cart.json` |
| Q6 | `Q6-SocialMediaPost/` | `post.json` |
| Q7 | `Q7-AirlineSystem/` | `airline.json` |
| Q11 | `Q11-TravelBookingSystem/` | `booking.json` |
| Q14 | `Q14-ProductListJSON/` | `data.json` |

---

## Testing Checklist After Updates

### For Web Forms (Q1, Q3, Q4, Q10):
- [ ] Test phone number validation
- [ ] Test form submission
- [ ] Verify all error messages display correctly
- [ ] Check responsive design

### For JSON Files (Q5-Q11, Q14):
- [ ] Validate JSON syntax (no trailing commas)
- [ ] Verify all currency symbols are ₹
- [ ] Check all prices are in correct range
- [ ] Verify phone numbers follow Indian format

### For Node.js Files (Q12-Q18):
- [ ] Run: `node app.js` to verify execution
- [ ] Check console output for data
- [ ] Verify no errors in execution

---

## Sample Data Templates for Indian Context

### Indian Phone Number Format
```
+91-9876543210          (Mobile)
+91-22-1234-5678        (Landline)
9876543210              (Without country code)
```

### Indian PIN Code Format
```
400001    (Mumbai)
110001    (Delhi)
560034    (Bangalore)
500081    (Hyderabad)
```

### Indian Address Components
```
Flat 101, Rajesh Apartments,
Near Central Park,
Andheri East,
Mumbai, Maharashtra 400069,
India
```

### Indian Name Examples
```
Male: Aarav, Arjun, Rajesh, Vikram, Nikhil
Female: Priya, Ananya, Aditi, Neha, Sunita
```

### Indian Currency Formatting
```
₹10,000
₹1,00,000
₹10,00,000
₹1,00,00,000
```

---

## Currency Conversion Rates (Reference)
**Base Rate: 1 USD = 83 INR**

### Common Product Prices
| USD | INR |
|-----|-----|
| $12.99 | ₹1,078 |
| $25.50 | ₹2,117 |
| $45.99 | ₹3,817 |
| $120.00 | ₹9,960 |
| $180.00 | ₹14,940 |
| $199.99 | ₹16,599 |
| $200.00 | ₹16,600 |
| $400.00 | ₹33,200 |
| $599.99 | ₹49,799 |
| $800.00 | ₹66,400 |
| $899.99 | ₹74,699 |
| $1,200.00 | ₹99,600 |
| $3,500.00 | ₹290,500 |
| $5,000.00 | ₹415,000 |

---

End of Quick Reference Guide
