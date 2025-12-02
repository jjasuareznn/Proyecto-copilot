// =============================================
// BLOG TÉCNICO DE GRAFOS - APLICACIÓN PRINCIPAL
// =============================================

// Definición de posts
const posts = [
    {
        id: 1,
        title: "Introducción a los Grafos: Nodos, Aristas y Tipos",
        excerpt: "Aprende qué son los grafos, sus componentes fundamentales y los diferentes tipos que existen.",
        date: "1 de Diciembre, 2025",
        file: "posts/post-1-introduccion.html",
        icon: "📚",
        color: "primary"
    },
    {
        id: 2,
        title: "Representación de Grafos",
        excerpt: "Explora las dos principales formas de representar grafos: Lista de Adyacencia y Matriz de Adyacencia.",
        date: "1 de Diciembre, 2025",
        file: "posts/post-2-representacion.html",
        icon: "🗂️",
        color: "secondary"
    },
    {
        id: 3,
        title: "Algoritmos Fundamentales de Recorrido",
        excerpt: "Domina BFS y DFS, los dos algoritmos esenciales para recorrer grafos.",
        date: "1 de Diciembre, 2025",
        file: "posts/post-3-algoritmos.html",
        icon: "⚡",
        color: "accent"
    }
];

/**
 * Carga y renderiza todos los posts en la página principal
 */
function loadPosts() {
    const container = document.getElementById('postsContainer');
    
    if (!container) return;

    container.innerHTML = posts.map(post => `
        <article class="post-card">
            <div class="post-header">
                <div style="font-size: 2.5rem; margin-bottom: 1rem;">${post.icon}</div>
                <span class="post-number">Post #${post.id}</span>
                <h3>${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
            </div>
            <div class="post-content">
                <p>
                    Este artículo proporciona una guía completa y detallada sobre 
                    ${post.id === 1 ? "los conceptos fundamentales de grafos, incluyendo definiciones, componentes y clasificación." 
                    : post.id === 2 ? "las formas más eficientes de almacenar y acceder a datos de grafos en memoria."
                    : "los algoritmos esenciales para explorar y analizar estructuras de grafos."}
                </p>
            </div>
            <div class="post-footer">
                <span class="post-date">📅 ${post.date}</span>
                <a href="${post.file}" class="read-more">Leer más →</a>
            </div>
        </article>
    `).join('');
}

/**
 * Inicializa la aplicación cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
    
    // Actualizar el enlace activo en la navegación según la página actual
    updateActiveNavLink();
});

/**
 * Actualiza el enlace activo en la navegación
 */
function updateActiveNavLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (currentPage === '/' || currentPage.endsWith('index.html')) {
            navLinks[0].classList.add('active');
        }
    });
}

/**
 * Suaviza el scroll hacia secciones específicas
 */
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

console.log('✅ Aplicación de Blog Técnico de Grafos inicializada');
