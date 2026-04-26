# 🏗️ ARQUITECTURA DEL PROYECTO

Guía técnica profunda sobre la arquitectura y estructura del proyecto IAMTEC Landing Page.

---

## 🎯 Principios de Diseño

### 1. **Simplicidad**
- Vanilla JavaScript (sin frameworks)
- Enfoque data-driven
- Componentes reutilizables
- Código declarativo

### 2. **Rendimiento**
- Carga rápida (< 1.5s)
- Lighthouse 90+
- Lazy loading de elementos
- Optimización automática con Vite

### 3. **Escalabilidad**
- Estructura modular
- Separación de concerns
- Fácil de extender
- Listo para backend

### 4. **Mantenibilidad**
- Código comentado
- Convenciones claras
- Documentación completa
- Deploy sencillo

---

## 📁 Estructura de Directorio

```
iamtec-ai/
│
├── 📄 index.html                   # Punto de entrada HTML
├── 📄 package.json                 # Dependencias y scripts
├── 📄 vite.config.js               # Config Vite
├── 📄 tailwind.config.js           # Config Tailwind
├── 📄 postcss.config.js            # Config PostCSS
│
├── 📁 src/                         # Código fuente
│   ├── 📄 main.js                  # Entrada JavaScript principal
│   ├── 📄 style.css                # Estilos globales
│   └── 📁 components/
│       └── 📄 examples.js          # Ejemplos de componentes
│
├── 📁 dist/                        # Build producción (generado)
├── 📁 node_modules/                # Dependencias npm (generado)
│
├── 📄 README.md                    # Documentación
├── 📄 GUIA_RAPIDA.md               # Guía rápida
├── 📄 DESARROLLO.md                # Guía de desarrollo
├── 📄 DESPLIEGUE.md                # Guía de despliegue
├── 📄 ARQUITECTURA.md              # Este archivo
├── 📄 CHANGELOG.md                 # Historial
├── 📄 .env.example                 # Variables de entorno (template)
└── 📄 .gitignore                   # Config Git
```

---

## 🔄 Flujo de Datos

### 1. **Inicialización**

```
Navegador carga index.html
        ↓
Vite carga src/main.js
        ↓
DOMContentLoaded event dispara
        ↓
Se ejecutan funciones de inicialización:
  → initDarkMode()
  → initMobileMenu()
  → renderCursos()
  → renderTecnologias()
  → initScrollEffects()
  → initFormValidation()
  → initNavbarScroll()
```

### 2. **Renderizado de Contenido**

```javascript
// Datos (en main.js)
const cursos = [...]
const tecnologias = [...]

// Renderizado
renderCursos()      → Genera HTML de cursos
renderTecnologias() → Genera HTML de tech badges

// Inyección en DOM
document.getElementById('cursosContainer').innerHTML = html
```

### 3. **Event Listeners**

```
Usuario interactúa
        ↓
Event bubbling/capturing
        ↓
Event listener handler
        ↓
Actualizar DOM o llamar API
        ↓
Re-render si es necesario
```

### 4. **Animaciones**

```
Scroll evento
        ↓
IntersectionObserver detecta elemento
        ↓
Elemento en viewport
        ↓
Aplicar estilos de animación
        ↓
CSS Animation ejecuta
```

---

## 🎨 Stack Tecnológico

### Frontend Stack
```
HTML5 (Semantic)
   ↓
Tailwind CSS (Utility-first)
   ↓
JavaScript ES6+ (Vanilla)
   ↓
Vite (Build & Dev tool)
```

### Herramientas Complementarias
```
Font Awesome  → Iconos
PostCSS       → Procesamiento CSS
Autoprefixer  → Prefijos CSS automáticos
```

---

## 📋 Componentes Principales

### 1. **Navbar Component**
```javascript
Responsabilidades:
- Renderizar navegación
- Manejar mobile menu toggle
- Dark mode toggle
- Link scroll smooth
- Efecto scroll en navbar

Elementos:
- Logo
- Links de navegación
- Botones de acción
- Toggle dark mode
- Menu icon (mobile)
```

### 2. **Hero Section**
```javascript
Responsabilidades:
- Mostrar título y subtítulo
- Botones CTA prominentes
- Ilustración/imagen
- Animación al cargar

Elementos:
- Título con gradiente
- Subtítulo descriptivo
- Botones "Ver Cursos" y "Explorar Servicios"
- Ilustración interactiva
```

### 3. **Services Grid**
```javascript
Responsabilidades:
- Mostrar 6 servicios
- Hover effects
- Icon animation
- Descripción clara

Estructura:
- Service Card × 6
  - Icon con background
  - Título
  - Descripción
  - Link "Más info"
```

### 4. **Courses Section**
```javascript
Responsabilidades:
- Renderizar cursos dinámicamente
- Abrir/cerrar modal
- Mostrar detalles en modal
- Manejar inscripción (simulada)

Datos generados:
- 9 cursos del array
- Cards con información
- Modal con detalles
- Validación de inscripción
```

### 5. **Contact Form**
```javascript
Responsabilidades:
- Validar campos
- Validar email
- Simular envío
- Mostrar notificaciones
- Guardar datos (simulado)

Validaciones:
- Campos requeridos
- Email válido
- Longitud mínima
```

### 6. **Modal System**
```javascript
Responsabilidades:
- Crear overlay
- Mostrar contenido dinámico
- Cerrar por botón o click fuera
- Transiciones suaves

Estados:
- Cerrado (hidden)
- Abierto (visible)
- Cargando (simulado)
```

---

## 🌐 Flujo de Estado

### Estado Local (Componente)
```javascript
// En main.js
const cursos = [...]        // Estado de cursos
const tecnologias = [...]   // Estado de tecnologías

// En localStorage
darkMode (boolean)          // Preferencia usuario
```

### Sin Estado Global Compartido
- Cada función es independiente
- No hay shared state complexity
- Fácil de debuggear
- Listo para agregar state management (Redux, Zustand)

---

## ⚡ Performance Optimization

### 1. **Lazy Loading de Elementos**

```javascript
IntersectionObserver({
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}) observa elementos y:
- Espera a que entren en viewport
- Aplica animación fade-in
- Evita renderizar todo al inicio
```

### 2. **Defer Loading de Scripts**

```html
<!-- En index.html -->
<script type="module" src="/src/main.js" defer></script>
```

### 3. **CSS Minification**

Vite automáticamente:
- Minifica CSS
- Remueve unused styles (Tailwind PurgeCSS)
- Genera hashes para cache busting

### 4. **Image Optimization**

Recomendaciones:
- Usar WebP en lugar de PNG/JPG
- Máximo 100KB por imagen
- Usar srcset para responsive images
- Comprimir con TinyPNG

---

## 🔌 Extensibilidad

### Cómo Agregar Nuevas Secciones

```javascript
// 1. En main.js, crear datos
const nuevaSección = [...]

// 2. Crear función render
function renderNuevaSeccion() {
  const html = nuevaSección.map(item => `
    <!-- HTML template -->
  `).join('')
  
  document.getElementById('id').innerHTML = html
}

// 3. Llamar en initización
document.addEventListener('DOMContentLoaded', () => {
  renderNuevaSeccion()
})
```

### Cómo Agregar Componentes Reutilizables

Ver `src/components/examples.js` para ejemplos de:
- `createButton()` - Botones configurable
- `createCard()` - Cards genéricas
- `createModal()` - Modales dinámicas

---

## 🔐 Seguridad

### Input Validation
```javascript
// Validación de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
emailRegex.test(email)

// Validación de nombre
const nameRegex = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/
nameRegex.test(name)
```

### XSS Prevention
```javascript
// ❌ NUNCA
element.innerHTML = userInput

// ✅ SEGURO
element.textContent = userInput
// o sanitizar antes de innerHTML
```

### CSRF Protection (Para futuro backend)
```javascript
// Agregar token CSRF en formularios
fetch('/api/contact', {
  method: 'POST',
  headers: {
    'X-CSRF-Token': token,
    'Content-Type': 'application/json'
  }
})
```

---

## 📱 Responsive Design Strategy

### Breakpoints (Tailwind)
```
sm: 640px   (Phones)
md: 768px   (Tablets)
lg: 1024px  (Desktops)
xl: 1280px  (Large Desktops)
```

### Mobile First Approach
```css
/* Base: Mobile */
.container {
  flex-direction: column;
}

/* Tablet up */
@media (md: 768px) {
  .container {
    flex-direction: row;
  }
}
```

### Componentes Responsive
```html
<!-- Grid que cambia según tamaño -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- Auto-responsive -->
</div>
```

---

## 🎨 CSS Architecture

### Estructura de Estilos
```
Tailwind Directives (src/style.css)
  ↓
  ├── @import 'tailwindcss/base'
  ├── @import 'tailwindcss/components'
  └── @import 'tailwindcss/utilities'
  ↓
Custom CSS
  ├── Animaciones personalizadas
  ├── Clases de utilidad adicionales
  ├── Componentes especiales
  └── Responsive overrides
```

### BEM vs Tailwind
```html
<!-- Evitar BEM, usar Tailwind -->
<div class="px-6 py-4 rounded-lg shadow-lg hover:shadow-xl">
  <!-- Mejor que: -->
  <!-- <div class="card card__content card--hover"> -->
</div>
```

---

## 🧪 Testing Strategy

### Testing Manual
```
Checklist de test (ver DESARROLLO.md)
- Navbar en desktop/tablet/mobile
- Dark mode persistence
- Form validation
- Modal open/close
- Scroll animations
- Responsive en varias resoluciones
```

### Testing Futuro
```javascript
// Agregar Jest + JSDOM para unit tests
import { createButton } from './components'

test('createButton renders with correct text', () => {
  const btn = createButton({ text: 'Click' })
  expect(btn.textContent).toBe('Click')
})
```

---

## 🔄 CI/CD Pipeline (Recomendado)

```yaml
# .github/workflows/deploy.yml
name: Deploy

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        run: npm run deploy
```

---

## 📊 Métricas de Calidad

### Lighthouse Targets
```
Performance:        ≥ 90
Accessibility:      ≥ 90
Best Practices:     ≥ 90
SEO:                ≥ 90
```

### Code Metrics
```
Lines of Code:      < 1000 (src/main.js)
Cyclomatic Complexity: < 10 per function
Duplication:        < 5%
```

---

## 🚀 Escalamiento Futuro

### Fase 1: SPA (Single Page Application)
```
Agregar router:
import Router from './router'

// Routes
/courses → view de cursos
/course/:id → detalle de curso
/checkout → carrito
```

### Fase 2: State Management
```
Usar Pinia o Zustand:
- GlobalStore
  - User state
  - Cart state
  - UI state
```

### Fase 3: API Backend
```
Node.js + Express
- /api/courses - GET cursos
- /api/contact - POST mensajes
- /api/auth - Autenticación
- /api/payments - Pagos
```

### Fase 4: Real-time Features
```
WebSocket con Socket.io:
- Notificaciones en tiempo real
- Chat de soporte
- Actualizaciones en vivo
```

---

## 📈 Growth Path

```
MVP (Actual)
    ↓
Agregar Backend
    ↓
Sistema de Pagos
    ↓
Autenticación y Dashboard
    ↓
Real-time Features
    ↓
Aplicación Móvil
    ↓
AI/ML Features
```

---

## 🎓 Aprendizajes Clave

1. **Vanilla JS es poderoso** - No siempre necesitas frameworks
2. **Utility-first CSS** - Tailwind acelera desarrollo
3. **Mobile-first design** - Base para responsive
4. **Progressive enhancement** - Funciona sin JS
5. **Modular thinking** - Componentes reutilizables

---

## 📚 Recursos Arquitectónicos

- [12 Factor App](https://12factor.net/) - Mejores prácticas
- [Web.dev Architecture](https://web.dev/performance/) - Performance
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID) - Diseño
- [Clean Code](https://www.oreilly.com/library/view/clean-code-a/9780136083238/) - Código

---

**Última actualización**: Abril 2024

Mantente actualizado siguiendo las mejores prácticas de la industria.
