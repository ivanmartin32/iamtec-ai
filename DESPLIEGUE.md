# 📋 DESPLIEGUE Y BUILD

Guía completa para compilar y desplegar tu landing page IAMTEC a producción.

---

## 🏗️ Construir para Producción

### Paso 1: Compilar el Proyecto
```bash
npm run build
```

**Qué sucede:**
- Vite optimiza y minifica todo el código
- Genera carpeta `dist/` lista para producción
- Comprime archivos CSS y JavaScript
- Optimiza imágenes
- Crea archivos de hashing para cache

**Resultado:**
```
dist/
├── index.html
├── assets/
│   ├── main.abc123.js
│   └── style.def456.css
└── favicon.ico
```

### Paso 2: Previsualizar Build
```bash
npm run preview
```

Esto inicia un servidor local con los archivos compilados para verificar que todo funciona correctamente.

---

## 🌐 Opciones de Despliegue

### Opción 1: Vercel ⭐ (Recomendado)

**Ventajas:**
- Despliegue automático desde Git
- CDN global
- HTTPS automático
- Dominio personalizado gratis
- Rendimiento excelente

**Pasos:**

1. Instala Vercel CLI:
```bash
npm install -g vercel
```

2. Ejecuta:
```bash
vercel
```

3. Sigue las indicaciones en pantalla
4. Tu sitio estará en vivo en minutos

**Ver en:** `https://tu-proyecto.vercel.app`

---

### Opción 2: Netlify

**Ventajas:**
- Interfaz visual simple
- Form submissions automático
- Redirects y rewriting
- Previsualización de deploy

**Pasos:**

1. Abre https://netlify.com
2. Login con GitHub/Google
3. Click en "New site from Git"
4. Selecciona el repositorio
5. Click en Deploy

O arrastra manualmente:
```bash
npm run build
# Arrastra carpeta dist/ a Netlify
```

**Ver en:** `https://tu-proyecto.netlify.app`

---

### Opción 3: GitHub Pages

**Ventajas:**
- 100% gratis
- Integrado con GitHub
- Historial de versiones automático

**Pasos:**

1. Modifica `vite.config.js`:
```javascript
export default {
  base: '/iamtec-ai/',  // o tu nombre de repo
  // ... resto de config
}
```

2. Ejecuta:
```bash
npm run build
```

3. Crea rama `gh-pages`:
```bash
git subtree push --prefix dist origin gh-pages
```

4. Ve a Settings → Pages → selecciona `gh-pages`

**Ver en:** `https://tu-usuario.github.io/iamtec-ai`

---

### Opción 4: Servidor FTP/Web Hosting Tradicional

**Requisitos:**
- Acceso FTP/SFTP
- Servidor web (Apache, Nginx)
- Certificado SSL (recomendado)

**Pasos:**

1. Compila:
```bash
npm run build
```

2. Conecta por FTP/SFTP:
```bash
# Usando WinSCP, FileZilla o terminal
sftp usuario@servidor.com
```

3. Sube contenido de `dist/` a `public_html/` o `www/`

4. Asegúrate de que el servidor sirve `index.html` para todas las rutas

---

### Opción 5: Docker + Docker Compose

**Dockerfile:**

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Compilar y ejecutar:**
```bash
docker build -t iamtec-landing .
docker run -p 80:80 iamtec-landing
```

---

## 🚀 Optimizaciones Pre-Deploy

### 1. Verificar Performance
```bash
# Genera reporte Lighthouse
npm run build
npx lighthouse http://localhost:3001 --view
```

### 2. Validar HTML
```bash
# Asegúrate que no hay warnings
npm run build
```

### 3. Probar en Producción Local
```bash
npm run preview
# Abre http://localhost:4173
# Usa DevTools para simular throttling
```

### 4. Checklist de Seguridad

- [ ] No hay datos sensibles en el código
- [ ] HTTPS está habilitado (excepto localhost)
- [ ] Headers de seguridad configurados
- [ ] CORS configurado si usa API
- [ ] Validación de formularios en cliente y servidor

---

## 📊 Monitoreo Post-Deploy

### Google Analytics
```javascript
// Agregar a index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Sentry para Errores
```bash
npm install @sentry/browser
```

```javascript
// En main.js
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "TU_DSN",
  environment: "production"
});
```

---

## 🔄 Actualizar Después del Deploy

### Desde Git (Vercel/Netlify)
```bash
git push origin main
# Se despliega automáticamente
```

### Manual (FTP)
```bash
npm run build
# Sube contenido actualizado de dist/
```

---

## 🐛 Solucionar Problemas

### ❌ "404 on refresh"
**Solución (Nginx):**
```nginx
location / {
  try_files $uri /index.html;
}
```

**Solución (Apache):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### ❌ "CSS no carga"
- Verifica que `base` en `vite.config.js` es correcto
- Comprueba rutas de archivos en DevTools

### ❌ "Scripts no funcionan"
- Verifica que JavaScript esté habilitado
- Revisa errores en Console (F12)
- Comprueba CORS si usa API externa

---

## 📈 Tabla de Rendimiento

| Plataforma | Tiempo Deploy | Costo | CDN Global |
|-----------|---|---------|---|
| **Vercel** | < 1 min | Gratis | ✅ Sí |
| **Netlify** | < 1 min | Gratis | ✅ Sí |
| **GitHub Pages** | < 5 min | Gratis | ⚠️ Limitado |
| **FTP Hosting** | Manual | $50-200/año | ❌ No |
| **Docker** | Manual | Variable | ❌ No |

---

## 💾 Backup y Versionado

### Git Commits
```bash
git add .
git commit -m "Versión 1.0.0 - Release producción"
git tag -a v1.0.0 -m "Versión 1.0.0"
git push origin main --tags
```

### Backup Local
```bash
# Zip compressed backup
Compress-Archive -Path "iamtec-ai" -DestinationPath "backup-$(Get-Date -Format 'yyyy-MM-dd').zip"
```

---

## 🎯 Checklist Final

- [ ] Build sin errores: `npm run build`
- [ ] Lighthouse score > 90
- [ ] Todas las secciones son responsivas
- [ ] Dark mode funciona
- [ ] Formulario funciona
- [ ] Modal funciona
- [ ] Sin errores en Console (F12)
- [ ] URLs relativas funcionan
- [ ] Open Graph meta tags configurados
- [ ] Favicon presente

---

## 📞 Soporte

Si tienes problemas con el deploy:

1. Verifica los logs del servidor
2. Usa DevTools (F12) para debuggear
3. Revisa la documentación oficial de tu plataforma
4. Contacta al soporte técnico

---

**¡Tu Landing Page está lista para producción!** 🚀

Última actualización: Abril 2024
