/* --- INTEGRATCORE LUXURY ENGINE - DUAL THEME & SUPABASE --- */

const SUPABASE_URL = 'https://onrbrlmqblyddxtsoapk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ucmJybG1xYmx5ZGR4dHNvYXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNTk1NDYsImV4cCI6MjA4ODkzNTU0Nn0.WkzYwQqNA_QrtfgOAicWqc_suREHsabKoUbXpr-3T7M';

const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

document.addEventListener('DOMContentLoaded', () => {

    const preloader = document.getElementById('preloader');
    if(preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        }, 700);
    }

    const themeToggleBtn = document.getElementById('theme-toggle');
    if(themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector('i');
        const currentTheme = localStorage.getItem('theme') || 'light'; 

        if (currentTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }

        themeToggleBtn.addEventListener('click', () => {
            if (document.body.getAttribute('data-theme') === 'dark') {
                document.body.removeAttribute('data-theme');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            } else {
                document.body.setAttribute('data-theme', 'dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

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

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: "0px 0px 100px 0px" });

    document.querySelectorAll('.reveal, .reveal-delay, .reveal-delay-2, .reveal-right').forEach(el => {
        revealObserver.observe(el);
    });

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

    if(supabaseClient && document.querySelector('#catalogo .row')) {
        cargarVillasDesdeBD();
    }
});

async function cargarVillasDesdeBD() {
    const contenedorVillas = document.querySelector('#catalogo .row');
    if(!contenedorVillas) return;

    const { data: propiedades, error } = await supabaseClient
        .from('propiedades')
        .select('*');

    if (error) {
        console.error("Error conectando a la Bóveda:", error);
        return;
    }

    if(propiedades && propiedades.length > 0) {
        contenedorVillas.innerHTML = ''; 

        propiedades.forEach((villa) => {
            let fotoPortada = (villa.fotos && villa.fotos.length > 0) ? villa.fotos[0] : 'img/propiedades/villa-1.jpg';
            let amenidadesTexto = villa.amenidades ? villa.amenidades : 'Detalles exclusivos de alto nivel.';
            
            // LÓGICA INTELIGENTE INTEGRATCORE: Si el nombre contiene la palabra "Renta", cambia la etiqueta automáticamente.
            let esRenta = villa.nombre.toLowerCase().includes('renta') || villa.nombre.toLowerCase().includes('alquiler');
            let badgeHTML = esRenta 
                ? `<div class="glass-badge badge-renta z-3">EN RENTA</div>` 
                : `<div class="glass-badge z-3">COLECCIÓN</div>`;

            const htmlVilla = `
                <div class="col-md-6 col-lg-5 reveal active">
                    <div class="molded-card magnetic-slight">
                        <div class="molded-img-placeholder p-0">
                            ${badgeHTML}
                            <img src="${fotoPortada}" class="d-block w-100 h-100 object-fit-cover" alt="${villa.nombre}">
                            <div class="image-overlay z-2"></div>
                        </div>
                        <div class="p-4 text-center">
                            <div class="mb-2">
                                <h4 class="theme-text syncopate-font fs-5 m-0 mb-1">${villa.nombre}</h4>
                                <p class="emerald-text fw-bold h5 m-0">US$ ${villa.precio}</p>
                            </div>
                            <p class="theme-muted small mb-4">${amenidadesTexto}</p>
                            <a href="https://wa.me/18492508144?text=Hola%20Jocelyn,%20me%20interesa%20${encodeURIComponent(villa.nombre)}." target="_blank" class="btn-molded-outline text-center magnetic">Solicitar Información</a>
                        </div>
                    </div>
                </div>
            `;
            contenedorVillas.innerHTML += htmlVilla;
        });
    }
}
