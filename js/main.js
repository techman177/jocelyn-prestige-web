/* --- INTEGRATCORE LUXURY ENGINE --- */

document.addEventListener('DOMContentLoaded', () => {

    // 1. GESTIÓN DEL PRELOADER (Corregido y Rápido)
    const preloader = document.getElementById('preloader');
    if(preloader) {
        // Asegurar que se quite incluso si la web tarda mucho
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 600);
        }, 800);
    }

    // 2. CUSTOM CURSOR (IntegratCore Fluid Logic)
    const dot = document.querySelector(".cursor-dot");
    const out = document.querySelector(".cursor-outline");

    window.addEventListener("mousemove", (e) => {
        dot.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 100, fill: "forwards" });
        out.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 600, fill: "forwards" });
    });

    // 3. MOTOR DE REVELACIÓN (REVEAL ANIMATION ENGINE)
    // Corregido: Anticipa la carga y fija el elemento
    const observerOptions = {
        threshold: 0.05, // Se activa con solo ver el 5%
        rootMargin: "0px 0px 150px 0px" // Carga 150px antes de que llegue el usuario
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Una vez activado, dejamos de observarlo para ahorrar rendimiento
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.reveal, .reveal-delay, .reveal-delay-2, .reveal-right');
    animatedElements.forEach(el => revealObserver.observe(el));

    // 4. CORRECCIÓN DE CARGA DE IMÁGENES (Evita "escondidas")
    const realImages = document.querySelectorAll('.card-image-real, .advisor-frame-circle img');
    realImages.forEach(img => {
        // Si ya cargó (por caché)
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });

    // 5. EFECTO MAGNÉTICO (Magnetic Button Logic)
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach((el) => {
        el.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.pageX - rect.left - rect.width / 2;
            const y = e.pageY - rect.top - rect.height / 2;
            this.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
        });
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0px, 0px)';
        });
    });

});
