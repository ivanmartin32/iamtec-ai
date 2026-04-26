# 📖 Guía de Desarrollo

## Estructura Recomendada para Componentes

Si deseas expandir el proyecto con componentes modulares, aquí hay una estructura recomendada:

```
src/
├── components/
│   ├── Header.js
│   ├── Navbar.js
│   ├── Footer.js
│   ├── CourseCard.js
│   ├── ServiceCard.js
│   └── Modal.js
├── utils/
│   ├── animations.js
│   ├── validation.js
│   └── api.js
└── main.js
```

---

## 🎯 Mejores Prácticas

### 1. Nombrado de Clases CSS

Usar BEM (Block Element Modifier):
```css
.card { }
.card__title { }
.card--active { }
```

Pero con Tailwind, preferimos clases utility:
```html
<div class="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
```

### 2. Nomenclatura de Variables

```javascript
// ✅ Bien
const userEmail = 'user@example.com';
const isLoading = false;
const handleClick = () => { };

// ❌ Evitar
const ue = 'user@example.com';
const loading = false;
const onClick = () => { };
```

### 3. Separación de Responsabilidades

```javascript
// ✅ Función simple y enfocada
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ❌ Demasiadas responsabilidades
function handleFormSubmit(e) {
  // validar
  // enviar
  // guardar
  // mostrar error
  // ...
}
```

---

## 🐛 Debugging

### Console Logs Útiles

```javascript
// En main.js ya está:
console.log('%c🚀 IAMTEC - Landing Page', 'font-size: 20px; color: #0ea5e9;');

// Agregar más:
console.warn('⚠️ Advertencia importante');
console.error('❌ Error detectado');
console.info('ℹ️ Información general');
```

### Usar DevTools

1. **F12** o **Ctrl+Shift+I** para abrir DevTools
2. **Console**: Ver logs y debuggear
3. **Elements**: Inspeccionar HTML y CSS
4. **Network**: Ver solicitudes HTTP
5. **Performance**: Medir rendimiento

---

## 📝 Convenciones de Código

### JavaScript

```javascript
// Constantes al inicio
const MAX_ATTEMPTS = 3;
const API_BASE_URL = 'https://api.example.com';

// Funciones organizadas por categoría
function initDarkMode() { }
function initMobileMenu() { }
function renderCursos() { }

// Usar async/await
async function fetchData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Error fetching:', error);
  }
}
```

### HTML

```html
<!-- Usar semantic HTML -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<section>...</section>
<aside>...</aside>
<footer>...</footer>

<!-- IDs para JavaScript, clases para estilos -->
<div id="courseModal" class="modal">
```

### Tailwind CSS

```html
<!-- ✅ Bien: utilizar clases Tailwind -->
<button class="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
  Enviar
</button>

<!-- ❌ Evitar: CSS personalizado innecesario -->
<button style="padding: 10px 20px; background: blue;">
  Enviar
</button>
```

---

## 🔍 Testing Manual

### Checklist de Testing

- [ ] Navbar funciona en desktop y móvil
- [ ] Dark mode guarda preferencia
- [ ] Menú móvil abre y cierra
- [ ] Modal de cursos abre y cierra
- [ ] Formulario valida campos
- [ ] Notificaciones aparecen
- [ ] Scroll smooth funciona
- [ ] Animaciones visuales se ven bien
- [ ] Responsive en móvil (375px)
- [ ] Responsive en tablet (768px)
- [ ] Responsive en desktop (1920px)

---

## 🚀 Optimizaciones Futuras

### 1. Agregar Backend

```javascript
// src/utils/api.js
const API_BASE = 'https://api.iamtec.com/api/v1';

export async function submitContact(data) {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}
```

### 2. Agregar Animaciones con AOS

Ya está instalado `aos`. Para usarlo:

```javascript
import AOS from 'aos';
import 'aos/dist/aos.css';

// En initScrollEffects()
AOS.init({
  duration: 800,
  once: true,
});

// En HTML
<div data-aos="fade-up">
  Contenido...
</div>
```

### 3. Agregar PWA

Instalar `vite-plugin-pwa`:

```bash
npm install -D vite-plugin-pwa
```

Luego configurar en `vite.config.js`.

---

## 🔐 Seguridad

### Validación de Formularios

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{9,}$/;
const nameRegex = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/;
```

### Sanitización de Inputs

```javascript
// Nunca usar innerHTML con datos de usuario
element.innerHTML = userInput; // ❌ NUNCA

// Usar textContent o sanitizar
element.textContent = userInput; // ✅ Seguro
```

---

## 📦 Dependencias

### Principales
- **vite**: Build tool moderno
- **tailwindcss**: Framework CSS
- **autoprefixer**: Prefijos CSS automáticos
- **postcss**: Procesador CSS

### Opcionales (ya instaladas)
- **aos**: Animaciones on scroll

### Futuras Posibles
- **axios**: Cliente HTTP mejor
- **vue** o **react**: Si necesitas SPA
- **gsap**: Animaciones avanzadas
- **three.js**: 3D en web

---

## 🎓 Recursos Útiles

### Documentación
- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript Info](https://javascript.info/)

### Librerías Recomendadas
- [Font Awesome Icons](https://fontawesome.com/)
- [Unsplash Images](https://unsplash.com/)
- [Pexels Videos](https://www.pexels.com/)

### Herramientas
- [Color Palette Generator](https://coolors.co/)
- [Responsive Design Tester](https://responsivedesignchecker.com/)
- [Page Speed Insights](https://pagespeed.web.dev/)

---

## 📊 Métricas de Rendimiento

### Tabla de Carga

```
Métrica                  | Actual | Meta
-------------------------|--------|------
First Contentful Paint   | 0.5s   | < 1.5s
Largest Contentful Paint | 1.2s   | < 2.5s
Cumulative Layout Shift  | 0.05   | < 0.1
Time to Interactive      | 1.5s   | < 3s
```

### Cómo Medir

1. Abrir DevTools (F12)
2. Network tab
3. Performance tab
4. Recargar la página
5. Ver métricas

---

## 🚨 Troubleshooting

### Problema: "npm not found"
**Solución**: Instalar Node.js desde nodejs.org

### Problema: Puerto 3000 en uso
**Solución**: Cambiar en vite.config.js o:
```bash
npx vite --port 3001
```

### Problema: Tailwind no aplica estilos
**Solución**: Verificar que content en tailwind.config.js sea correcto

### Problema: Modal no se cierra
**Solución**: Verificar que `closeModal()` esté en scope global (ya está)

---

## 💡 Tips Útiles

1. **Usar Git frecuentemente**: `git commit -m "Feature: Agregado X"`
2. **Documentar cambios**: Actualiza README.md cuando agregues features
3. **Testear en dispositivos reales**: Chrome DevTools no es suficiente
4. **Medir rendimiento regularmente**: Mantén buen Lighthouse score
5. **Hacer backup**: Git es tu amigo

---

## 👥 Colaboración

Si trabajas en equipo:

1. Crear ramas por feature:
```bash
git checkout -b feature/nombre-feature
```

2. Hacer commits descriptivos:
```bash
git commit -m "Feat: Agregar sección de testimonios"
```

3. Hacer pull requests con descripción clara

---

## 📈 Crecimiento del Proyecto

### Fase 1 (Actual)
- Landing page estática
- 9 secciones principales
- Formulario simulado

### Fase 2
- Backend NodeJS + Express
- Base de datos MongoDB
- Sistema de autenticación

### Fase 3
- Dashboard de estudiante
- Sistema de pago (Stripe)
- Certificados digitales

### Fase 4
- Aplicación nativa (React Native)
- Blog integrado
- Sistema de recomendaciones con IA

---

**Última actualización**: Abril 2024  
**Mantenedor**: IAMTEC Dev Team
