// --- INTEGRATCORE LUXURY ENGINE ---

document.addEventListener('DOMContentLoaded', () => {

    // 1. GESTIÓN DEL PRELOADER (Pantalla de carga)
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            if(preloader) {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }
        }, 1000); // Se va después de 1 segundo
    });

    // 2. CURSOR PERSONALIZADO DE LUJO
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Punto central
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // El aro sigue al punto con un poco de retraso para efecto fluido
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // 3. MOTOR DE APARICIÓN (REVEAL ANIMATION)
    // Esto es lo que hace que las fotos dejen de "esconderse"
    const observerOptions = {
        threshold: 0.15, // Se activa cuando se ve el 15% del elemento
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Una vez que aparece, dejamos de observarlo para ahorrar memoria
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleccionamos todos los elementos que tienen clases de animación
    const targets = document.querySelectorAll('.reveal, .reveal-delay, .reveal-delay-2, .reveal-right');
    targets.forEach(target => observer.observe(target));

    // 4. EFECTO MAGNÉTICO EN BOTONES
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach((el) => {
        el.addEventListener('mousemove', function(e) {
            const pos = this.getBoundingClientRect();
            const x = e.pageX - pos.left - pos.width / 2;
            const y = e.pageY - pos.top - pos.height / 2;

            this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        el.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0px, 0px)';
        });
    });

});
