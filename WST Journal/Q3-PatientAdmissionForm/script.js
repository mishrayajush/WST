// Function to derive age from DOB
function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) return;

    const birthDate = new Date(dobInput);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Adjust if birthday hasn't happened yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('age').value = age + " Years";
}

// Form Validation Logic
document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('patientName').value;
    const adhar = document.getElementById('adhar').value;
    const contact = document.getElementById('contact').value;
    const dob = document.getElementById('dob').value;

    // Basic Validation Rules
    if (name === "" || dob === "") {
        alert("Please fill in all mandatory (*) fields.");
        return;
    }

    if (!/^\d{12}$/.test(adhar)) {
        alert("Adhar ID must be exactly 12 digits.");
        return;
    }

    if (!/^\d{10}$/.test(contact)) {
        alert("Contact number must be 10 digits.");
        return;
    }

    alert("Patient " + name + " has been registered successfully.");
    console.log("Admission Data Verified and Saved.");
});