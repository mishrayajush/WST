document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous errors
    const errors = document.querySelectorAll('.error-msg');
    errors.forEach(err => err.innerText = "");

    let isValid = true;

    // Get Values
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value;
    const qual = document.getElementById('qualification').value;

    // Name Validation
    if (name.length < 3) {
        document.getElementById('nameError').innerText = "Name must be at least 3 characters long.";
        isValid = false;
    }

    // Email Validation (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Phone Validation
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').innerText = "Enter a valid 10-digit mobile number.";
        isValid = false;
    }

    // DOB Validation
    if (!dob) {
        document.getElementById('dobError').innerText = "Date of birth is required.";
        isValid = false;
    }

    // Qualification Validation
    if (qual === "") {
        document.getElementById('qualError').innerText = "Please select your qualification.";
        isValid = false;
    }

    // Final Action
    if (isValid) {
        alert("Registration Successful!\nWelcome, " + name);
        console.log("Form Data Submitted:", { name, email, phone, dob, qual });
        // this.reset(); // Uncomment to clear form after success
    }
});