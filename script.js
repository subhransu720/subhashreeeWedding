// Scroll Animation
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Observe all animated elements
    document.querySelectorAll('.animate-slide-up').forEach((element) => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(50px)';
        observer.observe(element);
    });

    // Countdown Timer
    const weddingDate = new Date('December 10, 2023 18:00:00').getTime();
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        document.getElementById('countdown').innerHTML = 
            `${days} days ${hours} hours to go!`;
        
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = "Wedding Day!";
        }
    }, 1000);
});