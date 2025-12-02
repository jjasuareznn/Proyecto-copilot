# Blog Técnico - Grafos y Estructuras de Datos

## 🎓 Información de la Entrega

- **Estudiante**: Julián Suárez
- **Institución**: Universidad INCCA
- **Materia**: Estructura de Datos 2
- **Fecha de Entrega**: 1 de Diciembre, 2025

---

## 📋 Descripción

Este es un blog técnico completo dedicado a la enseñanza de **Grafos** como estructura de datos. El proyecto combina:

- **Contenido Educativo de Alta Calidad**: Tres artículos detallados sobre grafos
- **Desarrollo Web Moderno**: HTML5, CSS3 y JavaScript vanilla
- **Diseño Responsivo**: Funciona perfectamente en dispositivos móviles, tablets y escritorio
- **Control de Versiones**: Git/GitHub integrado

## 📁 Estructura del Proyecto

```
Proyecto-copilot/
├── blog/                          # Carpeta principal del blog
│   ├── index.html                 # Página principal
│   ├── post1.html                 # Artículo 1: Introducción a Grafos
│   ├── post2.html                 # Artículo 2: Representación de Grafos
│   ├── post3.html                 # Artículo 3: Algoritmos BFS/DFS
│   ├── css/
│   │   ├── style.css              # Estilos principales
│   │   └── post.css               # Estilos para artículos
│   ├── js/
│   │   └── main.js                # Funcionalidad JavaScript
│   └── images/                    # Carpeta para imágenes
├── cola.py                        # Implementación estructura Cola
├── test_cola.py                   # Ejemplos y pruebas de Cola
├── test_cola_unitaria.py          # Pruebas unitarias de Cola
└── README.md                      # Este archivo
```

## 🎯 Contenido del Blog

### Post #1: Introducción a los Grafos
**URL**: `post1.html`

Cubre los conceptos fundamentales:
- Definición formal de un grafo
- Componentes: vértices y aristas
- Tipos de grafos (dirigidos, no dirigidos, ponderados)
- Ejemplo visual de un grafo no dirigido con 5 nodos
- Aplicaciones prácticas

### Post #2: Representación de Grafos
**URL**: `post2.html`

Explora las dos formas de representar grafos:
- **Matriz de Adyacencia**: Definición, ventajas, desventajas
- **Lista de Adyacencia**: Definición, ventajas, desventajas
- Comparación de complejidad (tiempo y espacio)
- Cuándo usar cada representación
- Implementaciones en Python

### Post #3: Algoritmos de Recorrido
**URL**: `post3.html`

Algoritmos fundamentales para explorar grafos:
- **BFS (Breadth-First Search)**: Búsqueda por amplitud
  - Concepto y características
  - Pseudocódigo e implementación
  - Casos de uso
- **DFS (Depth-First Search)**: Búsqueda por profundidad
  - Concepto y características
  - Implementación recursiva e iterativa
  - Casos de uso
- Comparación detallada BFS vs DFS
- Aplicaciones prácticas de cada algoritmo

## 🚀 Características Principales

### Diseño Responsivo
- Adaptado para móviles, tablets y escritorio
- Media queries para todos los dispositivos

### Elementos Interactivos
- Navegación suave con scroll
- Animaciones CSS fluidas
- Efectos hover en tarjetas
- Formulario de contacto funcional
- Tabla de contenidos con navegación interna

### Visualizaciones
- Diagramas SVG de grafos
- Tablas de datos interactivas
- Bloques de código con sintaxis clara
- Cuadros de información destacados

### Componentes
- Barra de navegación sticky
- Sección hero con animaciones
- Grid de artículos
- Sección de recursos
- Formulario de contacto
- Footer con redes sociales

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con:
  - Variables CSS personalizadas
  - Flexbox y Grid
  - Animaciones CSS
  - Media queries responsivas
- **JavaScript Vanilla**: Sin dependencias externas
  - Scroll suave
  - Manejo de formularios
  - Observadores de intersección
  - Navegación activa

### Íconos
- Font Awesome 6.0.0 (CDN)

## 📱 Compatibilidad

- ✅ Chrome/Edge (versión 90+)
- ✅ Firefox (versión 88+)
- ✅ Safari (versión 14+)
- ✅ Dispositivos móviles (iOS/Android)

## 🎨 Paleta de Colores

```css
--primary-color: #2563eb;      /* Azul principal */
--secondary-color: #1e40af;    /* Azul oscuro */
--accent-color: #f59e0b;       /* Ámbar */
--success-color: #10b981;      /* Verde */
--dark-bg: #0f172a;           /* Fondo oscuro */
--light-bg: #f8fafc;          /* Fondo claro */
```

## 📊 Archivos Python Adicionales

El proyecto incluye implementaciones de la estructura Cola:

### cola.py
Implementación completa de estructura Cola con:
- `Nodo`: Clase para representar nodos
- `Cola`: Implementación con nodos ligados
- `ColaArreglo`: Implementación con arreglo circular

### test_cola.py
Ejemplos prácticos de uso:
- Cola básica
- Cola con arreglo
- Aplicaciones reales
- Manejo de errores

### test_cola_unitaria.py
Suite de pruebas unitarias con 30+ tests

## 🚀 Cómo Ejecutar

### Ver el Blog en Navegador
1. Abre el archivo `blog/index.html` directamente en tu navegador
2. O sirvelo localmente con:
   ```bash
   python -m http.server 8000
   # Luego accede a: http://localhost:8000/blog/
   ```

### Ejecutar Ejemplos de Cola
```bash
python test_cola.py
```

### Ejecutar Pruebas Unitarias
```bash
python -m unittest test_cola_unitaria.py -v
```

## 📝 Características del Contenido

### Cada Artículo Incluye:
- ✅ Tabla de contenidos interactiva
- ✅ Títulos y subtítulos jerárquicos
- ✅ Párrafos explicativos claros
- ✅ Listas ordenadas y sin orden
- ✅ Cuadros de información destacados
- ✅ Bloques de código con sintaxis
- ✅ Ejemplos visuales con SVG
- ✅ Tablas de comparación
- ✅ Aplicaciones prácticas
- ✅ Navegación entre posts
- ✅ Metadatos (autor, fecha, tiempo de lectura)

## 🎓 Objetivos Educativos

Este blog ayuda al estudiante a:
1. **Entender** los conceptos fundamentales de grafos
2. **Comparar** diferentes representaciones
3. **Aprender** algoritmos esenciales de recorrido
4. **Aplicar** estos conocimientos en problemas reales
5. **Investigar** más sobre cada tema con ejemplos de código

## 📚 Recursos Adicionales

### Tópicos Cubiertos:
- Definiciones formales de grafos
- Tipos de grafos
- Representación en memoria
- Análisis de complejidad
- Algoritmos de recorrido
- Casos de uso del mundo real

### Para Aprender Más:
El blog proporciona bases sólidas para estudiar:
- Caminos más cortos (Dijkstra, Bellman-Ford)
- Árboles de expansión mínima (Kruskal, Prim)
- Ordenamiento topológico
- Componentes fuertemente conectadas
- Flujo máximo en redes

## 🔧 Personalización

Puedes personalizar fácilmente:

### Cambiar colores
Edita las variables CSS en `css/style.css`:
```css
:root {
    --primary-color: #tu-color;
    --secondary-color: #tu-color;
    /* ... */
}
```

### Agregar más artículos
1. Crea `postN.html` basado en los existentes
2. Actualiza los enlaces en `index.html`
3. Sigue la estructura de estilos existente

### Modificar contenido
Cada HTML es autocontenido y fácil de editar.

## 📄 Licencia

Este proyecto es para fines educativos.

## 👤 Autor

**Julián Suárez**
- Universidad: INCCA
- Materia: Estructura de Datos 2
- Período: Diciembre 2025

---

**¡Gracias por visitar el blog técnico de Grafos!** 🚀

Para cualquier duda o sugerencia, no dudes en contactarnos a través del formulario en la página principal.
