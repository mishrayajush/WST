// Simple sticky header logic
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.college-nav');
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Dynamic Greeting based on time
const hour = new Date().getHours();
const greeting = hour < 12 ? "Good Morning" : "Welcome to Campus";
console.log(`${greeting}! Ready for the 2026 session?`);