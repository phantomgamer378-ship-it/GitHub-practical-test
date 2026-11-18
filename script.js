// Simple JavaScript interaction for portfolio

document.addEventListener('DOMContentLoaded', () => {
    // 1. Say Hello Greeting button
    const greetBtn = document.getElementById('greet-btn');
    const greetMsg = document.getElementById('greet-msg');

    if (greetBtn && greetMsg) {
        greetBtn.addEventListener('click', () => {
            greetMsg.textContent = "Thanks for visiting my portfolio! Have a great day!";
        });
    }

    // 2. Simple Contact form submission handler
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name-input').value;
            formStatus.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
            contactForm.reset();
        });
    }
});
