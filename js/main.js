document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader más rápido
    const preloader = document.getElementById('preloader');
    if(preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        }, 500);
    }

    // 2. Revelación Ultra-Sensible
    const observerOptions = {
        threshold: 0.01, // Se activa con solo ver 1 píxel
        rootMargin: "0px 0px 200px 0px" // Carga la foto 200px antes de que llegues
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // IMPORTANTE: Una vez aparece, no se vuelve a esconder
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-delay, .reveal-delay-2, .reveal-right').forEach((el) => {
        observer.observe(el);
    });
});
