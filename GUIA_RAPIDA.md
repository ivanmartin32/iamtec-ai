# 🚀 GUÍA RÁPIDA - IAMTEC Landing Page

¡Bienvenido! Esta es la guía rápida para empezar con tu landing page de IAMTEC en menos de 5 minutos.

---

## ⚡ Inicio Rápido (5 minutos)

### Paso 1: Abre la Terminal/PowerShell
```powershell
# En Windows, presiona Win + R y escribe: powershell
```

### Paso 2: Navega al Proyecto
```powershell
cd "c:\Users\imartin\Documents\IDEA\iamtec ai"
```

### Paso 3: Instala las Dependencias
```bash
npm install
```
⏳ Esto tomará 2-3 minutos la primera vez.

### Paso 4: Inicia el Servidor
```bash
npm run dev
```

### Paso 5: ¡Listo! 🎉
- Tu navegador se abrirá automáticamente en `http://localhost:3000`
- ¡La landing page está viva!

---

## 🎮 Comandos Principales

```bash
# Iniciar desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview

# Limpiar dependencias
npm install
```

---

## 🛠️ Estructura de Carpetas

```
iamtec-ai/
│
├── 📄 index.html          ← Página principal HTML
├── 📄 package.json        ← Dependencias del proyecto
├── 📄 README.md           ← Documentación completa
├── 📄 DESARROLLO.md       ← Guía de desarrollo
├── 📄 CHANGELOG.md        ← Historial de cambios
│
├── 📁 src/                ← Código fuente
│   ├── 📄 main.js         ← JavaScript principal
│   ├── 📄 style.css       ← Estilos globales
│   └── 📁 components/     ← Componentes reutilizables
│
└── 📁 dist/               ← Build producción (se genera)
```

---

## 🎨 Secciones de la Página

| Sección | Descripción |
|---------|------------|
| **Hero** | Bienvenida impactante con CTAs |
| **Servicios** | 6 opciones de servicios |
| **Cursos** | 9 cursos con modal expandible |
| **Sobre Nosotros** | Información de IAMTEC |
| **Testimonios** | 3 opiniones de clientes |
| **Tecnologías** | Stack tecnológico |
| **Contacto** | Formulario de comunicación |
| **Footer** | Enlaces y redes sociales |

---

## 🌙 Modo Oscuro

- Click en el ícono de la luna/sol en la navbar
- Se guarda automáticamente en tu navegador
- Se activa automáticamente si tu sistema usa dark mode

---

## 📝 Cómo Personalizar

### 1️⃣ Cambiar Cursos

Abre `src/main.js` y busca `const cursos = [`:

```javascript
{
  id: 99,
  titulo: 'Mi Nuevo Curso',
  descripcion: 'Descripción aquí',
  duracion: '8 semanas',
  nivel: 'Principiante',
  precio: '$99',
  icono: 'fa-code'
}
```

### 2️⃣ Cambiar Colores

Abre `tailwind.config.js` y modifica la sección `colors`.

Colores usados actualmente:
- **Azul**: `primary-500` (#0ea5e9)
- **Cyan**: `cyan-500` (#06b6d4)

### 3️⃣ Cambiar Información de Contacto

Abre `index.html` y busca la sección `#contacto`.

Edita:
- Teléfono
- Email
- Ubicación
- Redes sociales

### 4️⃣ Cambiar Logo/Título

En `index.html`, busca:
```html
<div class="text-2xl font-bold">
  ◆ IAMTEC
</div>
```

Reemplaza con tu logo o texto.

---

## 🐛 Solucionar Problemas

### ❌ "npm: command not found"
- Instala Node.js desde https://nodejs.org
- Reinicia tu terminal

### ❌ "Puerto 3000 en uso"
```bash
npm run dev -- --port 3001
```

### ❌ "No se ven los estilos"
```bash
# Elimina dependencias y reinstala
rm -r node_modules package-lock.json
npm install
```

### ❌ "El modal no funciona"
- Actualiza la página (F5)
- Verifica que no haya errores en la consola (F12)

---

## 📱 Probar en Dispositivos

### En tu Computadora
1. Abre DevTools (F12)
2. Click en el ícono de dispositivo móvil
3. Selecciona diferentes tamaños

### En tu Teléfono
1. Abre terminal en la carpeta del proyecto
2. Obtén tu IP local:
```bash
# En PowerShell
ipconfig | grep "IPv4"
```
3. En el teléfono, abre: `http://tu-ip:3000`

---

## 🚀 Desplegar a Internet

### Opción 1: Vercel (Recomendado ⭐)
```bash
npm install -g vercel
npm run build
vercel
```

### Opción 2: Netlify
1. Abre https://netlify.com
2. Arrastras la carpeta `dist/` después de hacer `npm run build`
3. ¡Listo! Tu sitio está en línea

### Opción 3: GitHub Pages
1. Crea repositorio en GitHub
2. Push del código
3. Activa GitHub Pages en configuración

---

## 📊 Checklist de Funcionalidades

✅ **Funcionando:**
- [x] Navbar responsivo
- [x] Dark mode
- [x] Menú móvil
- [x] Hero section
- [x] Servicios con hover
- [x] Cursos con modal
- [x] Formulario validado
- [x] Animaciones al scroll
- [x] Footer con redes
- [x] Totalmente responsive

🔄 **Próximamente:**
- [ ] Sistema de inscripción
- [ ] Pagos integrados
- [ ] Blog
- [ ] Dashboard

---

## 💡 Tips Útiles

1. **Guardar cambios automáticamente**
   - Vite recompila al guardar (HMR)
   - No necesitas recargar manualmente

2. **Usar DevTools**
   - F12 → Elements → Inspecciona elementos
   - Network → Ve qué se carga
   - Console → Ve los logs

3. **Cambios rápidos**
   - HTML: cambios en tiempo real
   - CSS: cambios en tiempo real
   - JS: requiere recarga (automático)

4. **Optimizar imágenes**
   - Usa herramientas como TinyPNG
   - Formatos: WebP es mejor que JPG
   - Tamaño máximo: 100KB por imagen

---

## 📚 Documentación Adicional

Para información más detallada, ve a:
- `README.md` - Documentación completa
- `DESARROLLO.md` - Guía de desarrollo
- `CHANGELOG.md` - Historial de cambios

---

## 🤝 Necesitas Ayuda?

### Documentación Oficial
- Vite: https://vitejs.dev/
- Tailwind: https://tailwindcss.com/
- Font Awesome: https://fontawesome.com/

### Comunidades
- Stack Overflow
- CSS-Tricks
- Dev.to

---

## ✨ ¡Ahora Estás Listo!

Puedes:
- ✅ Ver la página en vivo
- ✅ Personalizar contenido
- ✅ Agregar más funcionalidades
- ✅ Desplegar a Internet

---

## 🎓 Próximos Pasos

1. **Comprende la estructura**: Lee README.md
2. **Modifica contenido**: Cambia cursos, servicios, etc.
3. **Aprende JavaScript**: Ve DESARROLLO.md
4. **Agrega backend**: Conecta con servidor
5. **Despliega**: Sube a Vercel, Netlify o tu servidor

---

## 📞 Información de Contacto

**IAMTEC - Tu Plataforma de Tecnología**
- 📧 Email: info@iamtec.com
- 🌐 Web: https://innovariamtec.com/
- 📱 Teléfono: +34 XXX XXX XXX

---

**¡Gracias por usar IAMTEC!**

Última actualización: 7 de Abril de 2024

```
    ◆◆◆
   ◆   ◆
  ◆ IAMTEC ◆
   ◆   ◆
    ◆◆◆
```
