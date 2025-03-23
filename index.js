// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    // Floating animation observer
    const floatObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'float 6s ease-in-out infinite';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.floating-img').forEach(img => {
        floatObserver.observe(img);
    });

    // Card hover effect
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
});
