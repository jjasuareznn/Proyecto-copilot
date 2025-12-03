// ============================================
// FUNCIONALIDAD PRINCIPAL DEL BLOG
// ============================================

// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Manejo del formulario de contacto
const formularioContacto = document.getElementById('formularioContacto');
if (formularioContacto) {
    formularioContacto.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Obtener valores
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Validación básica
        if (!nombre || !email || !asunto || !mensaje) {
            alert('Por favor, completa todos los campos');
            return;
        }
        
        // Mensaje de éxito
        alert(`Gracias ${nombre}, tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto pronto.`);
        
        // Limpiar formulario
        formularioContacto.reset();
    });
}

// Efecto de aparición para las tarjetas de artículos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.articulo-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Animación de contador al scrollear
let animated = false;

window.addEventListener('scroll', () => {
    const recursosSection = document.querySelector('.recursos-section');
    if (recursosSection && !animated) {
        const rect = recursosSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            animarContadores();
            animated = true;
        }
    }
});

function animarContadores() {
    const tarjetas = document.querySelectorAll('.recurso-card');
    tarjetas.forEach((tarjeta, index) => {
        tarjeta.style.animation = `slideInLeft 0.5s ease ${index * 0.1}s forwards`;
        tarjeta.style.opacity = '0';
    });
}

// Resaltar enlace de navegación actual
function resaltarNavegacionActual() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

resaltarNavegacionActual();

// Inicialización de tooltips
function inicializarTooltips() {
    const elementos = document.querySelectorAll('[data-tooltip]');
    elementos.forEach(elemento => {
        elemento.addEventListener('mouseenter', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            document.body.appendChild(tooltip);

            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });

        elemento.addEventListener('mouseleave', function() {
            document.querySelectorAll('.tooltip').forEach(t => t.remove());
        });
    });
}

inicializarTooltips();

// Log de éxito
console.log('%cBlog de Grafos Cargado Exitosamente', 'color: #2563eb; font-size: 14px; font-weight: bold;');
