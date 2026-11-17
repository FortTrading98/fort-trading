// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && nav) {
            nav.classList.remove('open');
            menuToggle?.setAttribute('aria-expanded', 'false');
        }
    });
});

// Reset menu state when resizing back to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav) {
        nav.classList.remove('open');
        menuToggle?.setAttribute('aria-expanded', 'false');
    }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ignore bare "#" links so querySelector doesn't throw
        if (!href || href === '#') return;

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Stop the page from refreshing

        // Show a "sending" message
        formNote.textContent = 'Sending your inquiry...';
        formNote.style.color = '#555';

        // Simulate sending (we'll connect a real email service later)
        setTimeout(() => {
            formNote.textContent = '✅ Thank you! Your inquiry has been sent. We will get back to you shortly.';
            formNote.style.color = '#16a34a'; // Green
            contactForm.reset(); // Clear the form fields
        }, 1500);
    });
}