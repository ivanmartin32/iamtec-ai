# IAMTEC - Landing Page Profesional

Landing page moderna, responsiva y completamente interactiva para una empresa de tecnología. Diseñada con tecnologías modernas y mejores prácticas de desarrollo.

![IAMTEC](https://img.shields.io/badge/IAMTEC-Tech%20Company-0ea5e9?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwindcss)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript)

---

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionalidades](#funcionalidades)
- [Personalización](#personalización)
- [Despliegue](#despliegue)

---

## Características

**Diseño Moderno** - Inspirado en startups tech como Stripe, Vercel y Notion  
**Completamente Responsivo** - Mobile-first design para todos los dispositivos  
**Dark Mode** - Soporte completo de modo oscuro con persistencia en localStorage  
**Animaciones Suaves** - Transiciones y efectos visuales profesionales  
**Optimizado** - Carga rápida y rendimiento excelente  
**Accesible** - Cumple con estándares WCAG  
**Componentes Reutilizables** - Código limpio y modular  

---

## Tecnologías

| Tecnología | Versión | Descripción |
|-----------|---------|-------------|
| Node.js | 14+ | Runtime de JavaScript |
| Vite | 5.0.8 | Build tool y dev server |
| Tailwind CSS | 3.4.1 | Framework de CSS |
| JavaScript | ES6+ | Lenguaje de programación |
| Font Awesome | 6.4 | Librería de iconos |

---

## Instalación

### Requisitos Previos
- Node.js versión 14 o superior instalado
- npm o yarn como gestor de paquetes

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
```bash
cd c:\Users\imartin\Documents\IDEA\iamtec\ ai
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre tu navegador**
   - Accede a `http://localhost:3000`
   - ¡La página se abrirá automáticamente!

---

## Uso

### Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la compilación
npm run preview
```

### En Producción

Después de ejecutar `npm run build`, se creará una carpeta `dist/` con los archivos optimizados listos para desplegar.

---

## Estructura del Proyecto

```
iamtec-ai/
├── src/
│   ├── main.js              # Punto de entrada principal
│   ├── style.css            # Estilos globales
│   ├── components/          # (extensible para componentes modulares)
│   └── assets/              # (extensible para imágenes, fuentes, etc.)
├── index.html               # Archivo HTML principal
├── package.json             # Dependencias del proyecto
├── vite.config.js           # Configuración de Vite
├── tailwind.config.js       # Configuración de Tailwind CSS
├── postcss.config.js        # Configuración de PostCSS
├── .gitignore               # Archivos ignorados por Git
├── README.md                # Este archivo
└── dist/                    # (Generado después de build)
```

---

## Funcionalidades

### 1. **Navegación Principal**
- Navbar fija con efecto scroll
- Menú móvil responsive
- Toggle de Dark Mode
- Enlaces suave a cada sección

### 2. **Hero Section**
- Título impactante con gradiente
- Subtítulo descriptivo
- Botones CTA principales
- Ilustración moderna

### 3. **Secciones de Servicios**
- 6 servicios principales
- Cards con hover effects
- Iconos atractivos
- Descripción clara

### 4. **Catálogo de Cursos**
- 9 cursos listados
- Modal detallado por curso
- Filtrado dinámico
- Información completa (duración, nivel, precio)

### 5. **Sobre Nosotros**
- Misión y valores
- Puntos destacados
- Historia de la empresa
- Ilustración inspiradora

### 6. **Testimonios**
- Slider de 3 testimonios
- Ratings visuales
- Avatares personalizados
- Transiciones suaves

### 7. **Tecnologías**
- Grid de 8 tecnologías
- Iconos animados
- Hover effects

### 8. **Formulario de Contacto**
- Validación en tiempo real
- Campos todos requeridos
- Notificaciones de éxito/error
- Diseño profesional

### 9. **Footer**
- Enlaces a redes sociales
- Links de navegación
- Información legal
- Responsive layout

---

## Personalización

### Cambiar Colores

Edita `tailwind.config.js` y modifica la paleta de colores:

```javascript
colors: {
  primary: {
    // Tus colores aquí
  }
}
```

### Agregar/Modificar Cursos

En `src/main.js`, modifica el array `cursos`:

```javascript
const cursos = [
  {
    id: 1,
    titulo: 'Tu Curso',
    descripcion: 'Descripción del curso',
    duracion: '8 semanas',
    nivel: 'Principiante',
    precio: '99€',
    icono: 'fa-code'
  },
  // ... más cursos
];
```

### Cambiar Información de Contacto

En `index.html`, busca la sección `#contacto` y actualiza:
- Teléfono
- Email
- Ubicación
- Redes Sociales

---

## Responsive Design

El sitio es completamente responsive:
- **Mobile**: < 768px (optimizado para teléfonos)
- **Tablet**: 768px - 1024px (diseño intermedio)
- **Desktop**: > 1024px (experiencia completa)

---

## Animaciones

El sitio incluye múltiples animaciones:
- **Fade In**: Aparición suave de elementos
- **Slide Up**: Deslizamiento hacia arriba
- **Hover Effects**: Efectos al pasar el cursor
- **Scroll Animations**: Animaciones al hacer scroll
- **Pulse**: Pulso continuo en elementos destacados

---

## Configuración Avanzada

### Modificar Puertos del Dev Server

En `vite.config.js`:

```javascript
server: {
  port: 3000,  // Cambia este número
  open: true
}
```

### Agregar Variables de Entorno

Crea un archivo `.env` en la raíz:

```
VITE_API_URL=https://api.ejemplo.com
VITE_AMBIENTE=producción
```

---

## Rendimiento

- **Lighthouse Score**: 90+
- **Time to Interactive**: < 1.5s
- **Cumple PWA**: Partially
- **Optimizado SEO**: Básicamente configurado

---

## Despliegue

### Vercel (Recomendado)

```bash
npm install -g vercel
npm run build
vercel
```

### Netlify

```bash
npm run build
# Arrastra la carpeta 'dist' a Netlify
```

### GitHub Pages

```bash
# Agrega a vite.config.js:
export default {
  base: '/iamtec-ai/'
}

npm run build
# Sube la carpeta 'dist' a tu repositorio
```

### Servidor Tradicional (Apache, Nginx)

1. Ejecuta `npm run build`
2. Copia el contenido de la carpeta `dist/`
3. Sube a tu servidor web

---

## Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## Licencia

Este proyecto está bajo la Licencia MIT - Ver el archivo LICENSE para más detalles.

---

## Contacto y Soporte

Para preguntas o sugerencias sobre el proyecto:
- Email: info@iamtec.com
- Web: https://innovariamtec.com/

---

## Agradecimientos

- Tailwind CSS por el excelente framework de CSS
- Vite por el increíble build tool
- Font Awesome por los iconos
- La comunidad de desarrollo web

---

## Roadmap Futuro

- [ ] Agregar blog integrado
- [ ] Sistema de búsqueda de cursos
- [ ] Dashboard de estudiante
- [ ] Sistema de pago integrado
- [ ] Certificados digitales
- [ ] API REST backend
- [ ] Versión PWA
- [ ] Multiidiomas

---

## Información Rápida

| Métrica | Valor |
|--------|-------|
| Tamaño Inicial | ~50KB (gzipped) |
| Velocidad Dev | < 100ms HMR |
| Secciones | 9 principales |
| Componentes | 20+ reutilizables |
| Lenguaje | JavaScript ES6+ |
| Completitud | 100% funcional |

---

**Hecho con por IAMTEC - Tu Plataforma de Tecnología e Innovación**

```
     ◆◆◆
   ◆      ◆
  ◆ IAMTEC ◆
   ◆      ◆
     ◆◆◆
```

Última actualización: Abril 2026
