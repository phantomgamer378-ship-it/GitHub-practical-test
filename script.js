// Simple JavaScript interaction for portfolio

document.addEventListener('DOMContentLoaded', () => {
    const greetBtn = document.getElementById('greet-btn');
    const greetMsg = document.getElementById('greet-msg');

    if (greetBtn && greetMsg) {
        greetBtn.addEventListener('click', () => {
            greetMsg.textContent = "Hello! Thanks for visiting my portfolio website 👋";
        });
    }
});
