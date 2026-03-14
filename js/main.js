/* --- INTEGRATCORE LUXURY ENGINE - DUAL THEME & SUPABASE --- */

const SUPABASE_URL = 'https://onrbrlmqblyddxtsoapk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ucmJybG1xYmx5ZGR4dHNvYXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNTk1NDYsImV4cCI6MjA4ODkzNTU0Nn0.WkzYwQqNA_QrtfgOAicWqc_suREHsabKoUbXpr-3T7M';

const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// === SISTEMA MULTI-IDIOMA ($100K TRANSLATION ENGINE) ===
const translations = {
    es: {
        nav_renta: 'BUSCO TU RENTA',
        nav_by: 'BY JOCELYN',
        btn_vip: 'EXPERIENCIA VIP',
        hero_title: 'El Arte de <br> <i class="emerald-text">Vivir Bien.</i>',
        hero_subtitle: 'Selección inmobiliaria de ultra-lujo en la República Dominicana.',
        hero_btn: 'Explorar Colección',
        section_title: 'La <span class="emerald-text">Colección</span>',
        section_subtitle: 'VENTAS Y RENTAS EXCLUSIVAS',
        card_btn: 'Solicitar Información',
        card_btn_rent: 'Agendar Visita',
        loading: 'Obteniendo portfolio confidencial...',
        footer_rights: 'Todos los derechos reservados.'
    },
    en: {
        nav_renta: 'SEEKING YOUR RENT',
        nav_by: 'BY JOCELYN',
        btn_vip: 'VIP EXPERIENCE',
        hero_title: 'The Art of <br> <i class="emerald-text">Living Well.</i>',
        hero_subtitle: 'Ultra-luxury real estate selection in the Dominican Republic.',
        hero_btn: 'Explore Collection',
        section_title: 'The <span class="emerald-text">Collection</span>',
        section_subtitle: 'EXCLUSIVE SALES & RENTALS',
        card_btn: 'Request Information',
        card_btn_rent: 'Schedule Visit',
        loading: 'Fetching confidential portfolio...',
        footer_rights: 'All rights reserved.'
    },
    it: {
        nav_renta: 'CERCO IL TUO AFFITTO',
        nav_by: 'BY JOCELYN',
        btn_vip: 'ESPERIENZA VIP',
        hero_title: 'L\'Arte di <br> <i class="emerald-text">Vivere Bene.</i>',
        hero_subtitle: 'Selezione immobiliare di ultra-lusso nella Repubblica Dominicana.',
        hero_btn: 'Esplora la Collezione',
        section_title: 'La <span class="emerald-text">Collezione</span>',
        section_subtitle: 'VENDITE E AFFITTI ESCLUSIVI',
        card_btn: 'Richiedi Informazioni',
        card_btn_rent: 'Prenota Visita',
        loading: 'Recupero portfolio riservato...',
        footer_rights: 'Tutti i diritti riservati.'
    },
    zh: {
        nav_renta: '寻找您的租金',
        nav_by: 'BY JOCELYN',
        btn_vip: 'VIP 体验',
        hero_title: '生活的 <br> <i class="emerald-text">艺术.</i>',
        hero_subtitle: '多米尼加共和国的超豪华房地产精选。',
        hero_btn: '探索系列',
        section_title: '精选 <span class="emerald-text">系列</span>',
        section_subtitle: '独家销售和租赁',
        card_btn: '查询信息',
        card_btn_rent: '预约参观',
        loading: '获取机密档案...',
        footer_rights: '版权所有。'
    }
};

window.changeLanguage = function(lang) {
    const t = translations[lang];
    if(!t) return;
    
    // UI Button Updates
    document.getElementById('languageDropdown').innerHTML = `<i class="fas fa-globe me-1"></i> ${lang.toUpperCase()}`;
    
    // Text Updates
    document.querySelectorAll('.hero-content h1').forEach(el => el.innerHTML = t.hero_title);
    document.querySelectorAll('.hero-content p').forEach(el => el.innerHTML = t.hero_subtitle);
    document.querySelectorAll('.hero-content .btn-molded-main').forEach(el => el.innerHTML = t.hero_btn);
    
    const sectionTitle = document.querySelector('#catalogo h2');
    if(sectionTitle) sectionTitle.innerHTML = t.section_title;
    
    const sectionSubtitle = document.querySelector('#catalogo .theme-muted.fw-bold');
    if(sectionSubtitle) sectionSubtitle.innerHTML = t.section_subtitle;
    
    document.querySelectorAll('.btn-emerald-pill').forEach(el => el.innerHTML = t.btn_vip);
    
    // Update active property cards
    document.querySelectorAll('#dinamic-properties .btn-molded-outline').forEach(btn => {
        btn.innerHTML = btn.getAttribute('href').includes('Renta') ? t.card_btn_rent : t.card_btn;
    });
};

document.addEventListener('DOMContentLoaded', () => {

    const preloader = document.getElementById('preloader');
    if(preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        }, 700);
    }



    const dot = document.querySelector(".cursor-dot");
    const out = document.querySelector(".cursor-outline");
    if (dot && out && window.innerWidth > 992) {
        window.addEventListener("mousemove", (e) => {
            dot.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 50, fill: "forwards" });
            out.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 400, fill: "forwards" });
        });
        document.querySelectorAll('a, button, .magnetic, .magnetic-slight').forEach(el => {
            el.addEventListener("mouseenter", () => {
                out.style.transform = 'translate(-50%, -50%) scale(1.5)';
                out.style.backgroundColor = 'rgba(80, 200, 120, 0.1)';
            });
            el.addEventListener("mouseleave", () => {
                out.style.transform = 'translate(-50%, -50%) scale(1)';
                out.style.backgroundColor = 'transparent';
            });
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
            this.style.transition = 'transform 0.5s ease';
        });
        el.addEventListener('mouseenter', function() {
            this.style.transition = 'none';
        });
    });

    if(supabaseClient && document.getElementById('dinamic-properties')) {
        cargarVillasDesdeBD();
    }
});

// Transformación Nav al Scroll
window.onscroll = function() {
    const pill = document.querySelector('.nav-glass-pill');
    if(pill) {
        if (window.scrollY > 100) {
            pill.style.padding = "10px 20px";
            pill.style.background = "rgba(255, 255, 255, 0.95)";
            pill.style.borderColor = "rgba(14, 124, 88, 0.2)";
            pill.style.boxShadow = "0 10px 20px rgba(27,59,90,0.05)";
        } else {
            pill.style.padding = "20px 25px";
            pill.style.background = "rgba(250, 252, 255, 0.9)";
            pill.style.borderColor = "rgba(27, 59, 90, 0.05)";
            pill.style.boxShadow = "0 10px 30px rgba(27,59,90,0.05)";
        }
    }
};

async function cargarVillasDesdeBD() {
    const contenedorVillas = document.getElementById('dinamic-properties');
    if(!contenedorVillas) return;

    try {
        const { data: propiedades, error } = await supabaseClient
            .from('propiedades')
            .select('*');

        if (error) {
            console.error("Error conectando a supabase:", error);
            return;
        }

        if(!propiedades || propiedades.length === 0) {
            contenedorVillas.innerHTML = `
                <div class="col-12 text-center py-5">
                    <p class="theme-muted"><i class="fas fa-gem me-2 emerald-text"></i>Próximamente nuevas propiedades exclusivas.</p>
                    <a href="https://api.whatsapp.com/send?phone=18492508144" target="_blank" class="btn-molded-outline magnetic mt-3 d-inline-block">Consultar Disponibilidad</a>
                </div>
            `;
            return;
        }

        if(propiedades.length > 0) {
            contenedorVillas.innerHTML = ''; 
            
            // Configura el idioma actual para los botones
            const currentLang = document.getElementById('languageDropdown') ? 
                document.getElementById('languageDropdown').innerText.trim().replace(/[^a-zA-Z]/g, '').toLowerCase() : 'es';
            const t = translations[currentLang] || translations.es;

            propiedades.forEach((villa, index) => {
                let isRenta = villa.nombre.toLowerCase().includes('renta') || villa.nombre.toLowerCase().includes('alquiler');
                let badgeHtml = isRenta ? '<div class="glass-badge badge-renta z-3">EN RENTA</div>' : '<div class="glass-badge z-3">COLECCIÓN</div>';
                
                // Generate WhatsApp message
                let waMsg = `Hola Jocelyn, me interesa la propiedad: ${villa.nombre}. ID: ${villa.id}`;
                let encodedWa = encodeURIComponent(waMsg);
                
                // Use translation dictionaries for active btn
                let btnText = isRenta ? t.card_btn_rent : t.card_btn;

                // FOTOS (Validación Segura y Fotos Ultra Lujo $100K)
                let fotosArray = [];
                if(villa.fotos && Array.isArray(villa.fotos) && villa.fotos.length > 0) {
                    fotosArray = villa.fotos;
                } else {
                    // Fotos Placeholder de Ultra Lujo desde Unsplash si no subió fotos
                    fotosArray = [
                        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
                        'https://images.unsplash.com/photo-1600607687930-cebc5a777227?auto=format&fit=crop&q=80&w=800',
                        'https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?auto=format&fit=crop&q=80&w=800',
                        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800'
                    ];
                }
                
                // Si solo subió 1 foto, le rellenamos para que tenga un carrusel
                if(fotosArray.length === 1) {
                    fotosArray.push('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800');
                    fotosArray.push('https://images.unsplash.com/photo-1600607687930-cebc5a777227?auto=format&fit=crop&q=80&w=800');
                }

                let carouselId = `dinamic-carousel-${index}`;
                let carouselIndicators = '';
                let carouselInner = '';

                fotosArray.forEach((foto, i) => {
                    carouselIndicators += `<button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${i}" ${i === 0 ? 'class="active" aria-current="true"' : ''}></button>`;
                    carouselInner += `
                        <div class="carousel-item h-100 ${i === 0 ? 'active' : ''}">
                            <img src="${foto}" class="card-image-real d-block w-100 h-100 object-fit-cover" alt="${villa.nombre} - Foto ${i+1}">
                        </div>
                    `;
                });

                const htmlVilla = `
                    <div class="col-md-6 col-lg-5 reveal active" style="opacity:1; transform:translateY(0)">
                        <div class="molded-card magnetic-slight">
                            <div id="${carouselId}" class="carousel slide molded-img-placeholder p-0" data-bs-ride="carousel">
                                ${badgeHtml}
                                <div class="carousel-indicators z-3">
                                    ${carouselIndicators}
                                </div>
                                <div class="carousel-inner h-100">
                                    ${carouselInner}
                                </div>
                                <button class="carousel-control-prev z-3" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next z-3" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                                <div class="image-overlay z-2"></div>
                            </div>
                            <div class="p-4 text-center">
                                <div class="mb-2">
                                    <h4 class="theme-text syncopate-font fs-5 m-0 mb-1">${villa.nombre}</h4>
                                    <p class="emerald-text fw-bold h5 m-0">US$ ${villa.precio}</p>
                                </div>
                                <p class="theme-muted small mb-4">${villa.descripcion || villa.amenidades || 'Detalles exclusivos de alto nivel.'}</p>
                                <a href="https://api.whatsapp.com/send?phone=18492508144&text=${encodedWa}" target="_blank" class="btn-molded-outline text-center magnetic">${btnText}</a>
                            </div>
                        </div>
                    </div>
                `;
                contenedorVillas.innerHTML += htmlVilla;
            });
        }
    } catch(err) {
        console.error("Supabase fail", err);
    }
}
