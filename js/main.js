/* --- INTEGRATCORE $20K LOGIC --- */

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Preloader Fade Out
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 1500);

    // 2. Custom Cursor Logic (Solo Desktop)
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if(window.innerWidth > 992) {
        window.addEventListener('mousemove', function(e) {
            const posX = e.clientX;
            const posY = e.clientY;
            
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            // Retraso suave para el contorno
            setTimeout(() => {
                cursorOutline.style.left = `${posX}px`;
                cursorOutline.style.top = `${posY}px`;
            }, 50);
        });

        // Hover states for cursor
        document.querySelectorAll('a, button, .magnetic, .magnetic-slight').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.backgroundColor = 'rgba(80, 200, 120, 0.1)';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.backgroundColor = 'transparent';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }

    // 3. Efecto Botones Magnéticos
    const magnetics = document.querySelectorAll('.magnetic');
    magnetics.forEach(magnet => {
        magnet.addEventListener('mousemove', function(e) {
            const position = magnet.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;
            
            magnet.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        magnet.addEventListener('mouseleave', function() {
            magnet.style.transform = 'translate(0px, 0px)';
            magnet.style.transition = 'transform 0.5s ease';
        });
        magnet.addEventListener('mouseenter', function() {
            magnet.style.transition = 'none';
        });
    });

    // 4. Scroll Reveal Avanzado
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal, .reveal-delay, .reveal-delay-2, .reveal-right").forEach(el => observer.observe(el));
});

// 5. Transformación Nav al Scroll
window.onscroll = function() {
    const pill = document.querySelector('.nav-glass-pill');
    if (window.scrollY > 100) {
        pill.style.padding = "10px 20px";
        pill.style.background = "rgba(0, 0, 0, 0.85)";
        pill.style.borderColor = "rgba(80, 200, 120, 0.3)";
    } else {
        pill.style.padding = "20px 25px";
        pill.style.background = "rgba(5, 5, 5, 0.5)";
        pill.style.borderColor = "rgba(255, 255, 255, 0.08)";
    }
};