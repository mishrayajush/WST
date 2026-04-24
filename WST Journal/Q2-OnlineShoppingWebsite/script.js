let cartCount = 0;

// Add to Cart Functionality
const addBtns = document.querySelectorAll('.add-btn');
addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
        alert("Product added to cart!");
    });
});

// Modal Logic for Product Description
const modal = document.getElementById("descModal");

function showDesc(title, description) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalBody").innerText = description;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}