# 📊 Proyecto-Copilot: Estructuras de Datos - Grafos

Blog técnico moderno, responsivo y bien documentado sobre la estructura de datos **Grafos**.

**Autor:** Julián Suárez  
**Institución:** Universidad INCCA  
**Materia:** Estructura de Datos  
**Proyecto:** Proyecto-Copilot  
**Año:** 2025

## 📝 Información del Proyecto

Este es un trabajo académico presentado en la materia **Estructura de Datos** de la **Universidad INCCA**. 

El proyecto demuestra la aplicación de tecnologías web modernas en la educación de conceptos técnicos complejos, combinando:
- Contenido técnico de alta calidad
- Desarrollo web profesional
- Control de versiones con Git

## 👨‍💻 Autor

**Julián Suárez**  
Universidad INCCA  
Materia: Estructura de Datos  
Fecha: Diciembre 2025

## 📚 Contenido

El blog incluye tres artículos fundamentales:

### Post #1: Introducción a los Grafos
- Definición de Grafo: G = (V, E)
- Conceptos clave: Vértices, Aristas, Grado
- Tipos de Grafos: No dirigidos, Dirigidos, Ponderados
- Aplicaciones prácticas en el mundo real
- Diagrama visual de un grafo no dirigido

### Post #2: Representación de Grafos
- **Lista de Adyacencia:** O(V+E) espacio, ideal para grafos dispersos
  - Estructura y ejemplos en código
  - Ventajas y desventajas
- **Matriz de Adyacencia:** O(V²) espacio, acceso O(1) a aristas
  - Representación visual con tabla
  - Comparación de complejidades
- Cuándo usar cada una
- Tabla comparativa completa

### Post #3: Algoritmos Fundamentales de Recorrido
- **BFS (Breadth-First Search):**
  - Estrategia con cola
  - Pseudocódigo y código Python
  - Visualización del proceso
  - Complejidad: O(V+E)
  - Aplicaciones: caminos más cortos, exploración por niveles
- **DFS (Depth-First Search):**
  - Versión recursiva e iterativa
  - Pseudocódigo y código Python
  - Visualización del proceso
  - Complejidad: O(V+E)
  - Aplicaciones: ciclos, ordenamiento topológico
- Comparación BFS vs DFS

## 🏗️ Estructura del Proyecto

```
proyecto-copilot/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos profesionales
├── js/
│   └── app.js             # Lógica de la aplicación
├── posts/
│   ├── post-1-introduccion.html       # Artículo 1
│   ├── post-2-representacion.html     # Artículo 2
│   └── post-3-algoritmos.html         # Artículo 3
├── assets/                # Recursos multimedia
├── .gitignore            # Archivos a ignorar en Git
├── README.md             # Este archivo
└── .github/
    └── copilot-instructions.md  # Instrucciones de Copilot
```

## 🎨 Características del Diseño

### Visual
- **Paleta de Colores Moderna:**
  - Azul Primario: #2563eb
  - Púrpura Secundario: #7c3aed
  - Verde Acento: #059669
  - Grises Neutros para textos

- **Tipografía:**
  - Fuente principal: Segoe UI, sans-serif
  - Monoespaciada: Courier New para código

### Responsividad
- **Desktop:** Diseño fluido multi-columna
- **Tablet:** Ajustes para pantallas medianas
- **Móvil:** Interfaz optimizada para pequeñas pantallas

### Componentes
- Navegación sticky (pegada en el top)
- Hero section con gradiente
- Grid de posts interactivo
- Tarjetas de posts con hover effects
- Sección About informativa
- Footer con información

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Semántica correcta y accesible
- **CSS3:** Flexbox, Grid, Gradientes, Animaciones
- **JavaScript (Vanilla):** Sin dependencias externas
- **Git:** Control de versiones

## 🚀 Cómo Usar

### 1. Clonar el Repositorio
```bash
git clone https://github.com/usuario/proyecto-copilot.git
cd proyecto-copilot
```

### 2. Abrir en Navegador
Simplemente abre `index.html` en tu navegador web favorito:
- **Opción 1:** Double-click en `index.html`
- **Opción 2:** Arrastra `index.html` al navegador
- **Opción 3:** Usa un servidor local (recomendado)

### 3. Servidor Local (Recomendado)

**Con Python 3:**
```bash
python -m http.server 8000
# Luego visita http://localhost:8000
```

**Con Node.js (usando http-server):**
```bash
npx http-server
# Luego visita http://localhost:8080
```

**Con VS Code:**
- Instala la extensión "Live Server"
- Click derecho en `index.html` → "Open with Live Server"

## 📖 Navegación

### Página Principal (index.html)
- Menú de navegación con enlaces smooth scroll
- Hero section introductoria
- Grid de tarjetas de posts
- Sección sobre el blog
- Footer con información

### Artículos Individuales
- Enlace "Volver a artículos" para regresar
- Contenido bien estructurado con headings
- Ejemplos de código formateados
- Diagramas y visualizaciones
- Tablas comparativas

## 💡 Contenido Técnico Destacado

### Conceptos Explicados
1. **Definición Formal:** G = (V, E)
2. **Tipos:** Dirigidos, No dirigidos, Ponderados
3. **Representaciones:** Lista de Adyacencia vs Matriz
4. **Algoritmos:** BFS y DFS con pseudocódigo
5. **Complejidades:** Análisis de tiempo y espacio

### Ejemplos Prácticos
- Código Python ejecutable
- Pseudocódigo estructurado
- Diagramas SVG de grafos
- Tablas de comparación
- Visualizaciones del proceso

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `css/style.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #059669;
    /* ... más variables */
}
```

### Agregar Nuevos Posts
1. Crea un nuevo archivo en `posts/post-X-nombre.html`
2. Copia la estructura de un post existente
3. Actualiza el contenido
4. Añade la entrada en `js/app.js` en el array `posts`

### Modificar Estilos
- Estilos principales: `css/style.css`
- Responsive breakpoints:
  - 768px: Tablet
  - 480px: Móvil

## 📊 Git & GitHub

### Flujo de Control de Versiones
```bash
# Inicializar (ya hecho)
git init

# Ver estado
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "feat: agregar contenido de grafos"

# Ver historial
git log --oneline
```

### Estructura de Commits
Se recomienda usar conventional commits:
- `feat:` Nueva característica
- `fix:` Corrección de errores
- `docs:` Cambios en documentación
- `style:` Cambios de estilos CSS
- `content:` Cambios en contenido

## ✅ Verificación de Funcionalidad

### Checklist
- [ ] Página principal carga correctamente
- [ ] Navegación funciona y hace scroll smooth
- [ ] Los tres posts son accesibles
- [ ] Diseño es responsivo en móvil
- [ ] Todos los enlaces internos funcionan
- [ ] No hay errores en la consola del navegador
- [ ] Imágenes/diagramas SVG se renderizan
- [ ] Git tiene commits iniciales

## 📱 Compatibilidad

- ✅ Chrome/Chromium 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Navegadores móviles modernos

## 🎓 Objetivos Educativos

Este proyecto demuestra:
1. **Desarrollo Web Frontend:** HTML5, CSS3, JavaScript
2. **Diseño Responsivo:** Mobile-first approach
3. **Contenido Técnico:** Explicaciones claras y ejemplos
4. **Control de Versiones:** Git workflow
5. **Buenas Prácticas:** Código limpio y semántico

## 🤝 Contribuciones

Para contribuir:
1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/mejora`
3. Haz commits: `git commit -m 'feat: nueva mejora'`
4. Push: `git push origin feature/mejora`
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Eres libre de usar, modificar y distribuir este código.

## 👨‍💻 Autor

**Julián Suárez**  
Universidad INCCA  
Materia: Estructura de Datos  
Fecha: Diciembre 2025

---

## 📚 Referencias

- Estructuras de Datos Clásicas
- Teoría de Grafos
- Algoritmos Fundamentales
- Best Practices en Web Development

---

**¿Preguntas o sugerencias?** Abre un issue en el repositorio.

**¡Feliz aprendizaje!** 🚀
