/* --- INTEGRATCORE LUXURY ENGINE - SUPABASE READY --- */

document.addEventListener('DOMContentLoaded', () => {

    // 1. PRELOADER ULTRA-RÁPIDO
    const preloader = document.getElementById('preloader');
    if(preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        }, 700); // Quita la carga más rápido para no hacer esperar al cliente
    }

    // 2. CURSOR VIP (Con efecto de expansión al hacer click)
    const dot = document.querySelector(".cursor-dot");
    const out = document.querySelector(".cursor-outline");

    if (dot && out) {
        window.addEventListener("mousemove", (e) => {
            dot.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 50, fill: "forwards" });
            out.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 400, fill: "forwards" });
        });
        window.addEventListener("mousedown", () => {
            out.style.transform = 'translate(-50%, -50%) scale(1.5)';
            out.style.backgroundColor = 'rgba(80, 200, 120, 0.1)';
        });
        window.addEventListener("mouseup", () => {
            out.style.transform = 'translate(-50%, -50%) scale(1)';
            out.style.backgroundColor = 'transparent';
        });
    }

    // 3. OBSERVER DE APARICIÓN PERFECTA (Nunca más se esconden)
    const observerOptions = {
        threshold: 0.05, 
        rootMargin: "0px 0px 100px 0px" 
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Las fija permanentemente
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-delay, .reveal-delay-2, .reveal-right').forEach(el => {
        revealObserver.observe(el);
    });

    // 4. GARANTÍA DE CARGA DE IMÁGENES
    const realImages = document.querySelectorAll('.card-image-real');
    realImages.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => img.classList.add('loaded'));
        }
    });

    // 5. EFECTO MAGNÉTICO INTEGRATCORE
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach((el) => {
        el.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.pageX - rect.left - rect.width / 2;
            const y = e.pageY - rect.top - rect.height / 2;
            this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0px, 0px)';
        });
    });

});
