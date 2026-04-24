/**
 * CONFIGURACIÓN - Busco tu Renta by Jocelyn
 * Actualiza estos valores con tus datos de Supabase
 */
window.CONFIG = {
    // 🔑 Supabase (obtén estos datos en: https://supabase.com → Tu Proyecto → Settings → API)
    supabase: {
        url: 'PON_TU_SUPABASE_URL_AQUI',      // Ej: https://xyzabc.supabase.co
        key: 'PON_TU_ANON_KEY_AQUI'            // Clave anon public (no la secret)
    },
    
    // 📱 Contacto
    whatsapp: '18492508144',                   // Número de WhatsApp con código de país
    email: 'jocelyn@buscoturenta.com',         // Email de contacto
    
    // 🔐 Admin (para demo - en producción usar Supabase Auth)
    admin: {
        user: 'admin@jocelyn.com',             // Email del admin
        pass: 'Jocelyn2026!'                   // ⚠️ Cambiar en producción
    },
    
    // 🎨 Branding
    brand: {
        name: 'Busco tu Renta by Jocelyn',
        tagline: 'Bienes Raíces de Lujo | República Dominicana',
        colors: {
            primary: '#CFA04E',    // Dorado
            dark: '#0b0b0b',       // Negro onice
            gray: '#161616'        // Gris oscuro
        }
    },
    
    // 🖼️ Imágenes por defecto
    images: {
        placeholder: 'https://placehold.co/800x600/161616/CFA04E?text=Propiedad',
        hero: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
        about: 'img/jocelyn.jpg'  // Foto local de Jocelyn
    }
};