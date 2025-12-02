# Proyecto-copilot
Sitio de ejemplo: Blog Técnico sobre Grafos (Estructura de Datos)

Este repositorio contiene un sitio estático sencillo (HTML/CSS/JS) que sirve de blog técnico con 3 posts iniciales:

- `Introducción a los Grafos` — Definición, nodos, aristas y tipos. (ejemplo con 5 nodos)
- `Representación de Grafos` — Lista de adyacencia vs Matriz de adyacencia (con ejemplo y tablas)
- `Algoritmos Fundamentales: BFS y DFS` — Explicación y snippets de código (JS y Python)

Estructura del proyecto:

```
/site
	/posts
		post1-introduccion.html
		post2-representacion.html
		post3-recorridos.html
	/styles
		style.css
	/assets
	index.html
	script.js
README.md
```

Cómo ejecutar localmente:

1. Abre un terminal en la carpeta del proyecto.
2. Ejecuta un servidor simple (Python 3 debe estar instalado):

```bash
cd site
python3 -m http.server 8000
```

3. Abre tu navegador y visita `http://localhost:8000/index.html`.

Este proyecto está pensado para ser una base: puedes añadir más posts, mejorar el diseño o convertirlo en sitio con generador de sitios estáticos (Jekyll, Hugo, etc.).

Contribuciones:
- Haz fork del repo, añade posts o mejoras y crea un Pull Request.

Publicación en GitHub Pages:

- Opción 1 (rápida): Mueve el contenido de `site/` a `docs/` en la rama `main` y en los ajustes del repositorio (Settings → Pages) selecciona `main`/`docs` como fuente.
- Opción 2: Publica la carpeta `site/` en la rama `gh-pages` con herramientas como `gh-pages` o un workflow de GitHub Actions.

Licencia: MIT

Autor y contexto del proyecto:
- Autor: Julián Suárez
- Proyecto: proyecto-copilot
- Asignatura: Estructura de Datos
- Universidad: INCCA
