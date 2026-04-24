function calculateBill() {
    const prev = parseFloat(document.getElementById('prevReading').value) || 0;
    const curr = parseFloat(document.getElementById('currReading').value) || 0;
    
    if (curr < prev) {
        alert("Current reading cannot be less than previous reading!");
        return;
    }

    const units = curr - prev;
    document.getElementById('unitsValue').innerText = units;

    let amount = 0;

    // Tariff Logic:
    // First 100 units: ₹3/unit
    // Next 200 units: ₹5/unit
    // Above 300 units: ₹8/unit
    if (units <= 100) {
        amount = units * 3;
    } else if (units <= 300) {
        amount = (100 * 3) + (units - 100) * 5;
    } else {
        amount = (100 * 3) + (200 * 5) + (units - 300) * 8;
    }

    document.getElementById('totalAmount').innerText = amount.toFixed(2);
}

document.getElementById('ebillForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cn = document.getElementById('consumerNo').value.trim();
    const name = document.getElementById('consumerName').value.trim();
    const amount = document.getElementById('totalAmount').innerText;

    if (cn === "" || name === "") {
        alert("Please provide Consumer Number and Name.");
        return;
    }

    if (parseFloat(amount) <= 0) {
        alert("Please calculate the bill amount before proceeding.");
        return;
    }

    alert(`Redirecting to Payment Gateway...\nConsumer: ${name}\nAmount: ₹${amount}`);
});