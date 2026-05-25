import './style.css';
import { cursos } from './datosCursos.js';

// ============================================
// DATOS DE LA APLICACIÓN
// ============================================

const novedades = [
  {
    id: 1,
    imagen: 'https://lh3.googleusercontent.com/u/0/d/1_Es8bLQkqy9vlS4FzQHObBegc806E9XM',
    titulo: '4G vs 5G vs 6G vs 7G',
    vermas: 'https://www.instagram.com/innovar.iamtec/p/DXaA8CulhYK/'
  },
  {
    id: 2,
    imagen: 'https://lh3.googleusercontent.com/u/0/d/1VbpmdbA8MD9hs8wg2HQV5C5Djl1MwOZm',
    titulo: '¿Cómo armar tu propia PC gamer?',
    vermas: 'https://www.instagram.com/innovar.iamtec/p/DWcYMGSDZJt/'
  },
  {
    id: 3,
    imagen: 'https://lh3.googleusercontent.com/u/0/d/12keVv2SsJPUCstFrEesCkGf6W-ay6YM3',
    titulo: 'Mejores apps para escuchar música',
    vermas: 'https://www.instagram.com/innovar.iamtec/p/DV_2UUrleVC/'
  },
  {
    id: 4,
    imagen: 'https://lh3.googleusercontent.com/u/0/d/10uIvTpgVjnIK5__ChFjbXEPLZ-cpbD8M',
    titulo: '¿Cómo evitar virus y malware en tu PC?',
    vermas: 'https://www.instagram.com/innovar.iamtec/p/DVhR80Yjc-V/'
  },
  {
    id: 5,
    imagen: 'https://lh3.googleusercontent.com/u/0/d/1wquMTWoCGVYmcWPgKGyp8oY_mS7vMN4b',
    titulo: 'Avances en autos eléctricos y autónomos',
    vermas: 'https://www.instagram.com/innovar.iamtec/p/DUwWUUlkRTu/'
  },
  {
    id: 6,
    imagen: 'https://lh3.googleusercontent.com/u/0/d/1h98_YAflofzNNFSUk8rcZlS_lB2SIUrV',
    titulo: 'Películas y series sobre tecnología',
    vermas: 'https://www.instagram.com/p/DUZqDnCjcJ6/'
  },
];

const tecnologias = [
  { nombre: 'Office', icono: 'fas fa-file-alt' },
  { nombre: 'Google Drive', icono: 'fab fa-google-drive' },
  { nombre: 'Windows', icono: 'fab fa-windows' },
  { nombre: 'IA', icono: 'fas fa-robot' },
  { nombre: 'Canva', icono: 'fas fa-palette' },
  { nombre: 'HTML5', icono: 'fab fa-html5' },
  { nombre: 'Ciberseguridad', icono: 'fas fa-shield-alt' },
  { nombre: 'JavaScript', icono: 'fab fa-js-square' },
  { nombre: 'Bootstrap', icono: 'fab fa-bootstrap' },
  { nombre: 'CSS3', icono: 'fab fa-css3-alt' },
  { nombre: 'Tailwind CSS', icono: 'fas fa-wind' },
  { nombre: 'React', icono: 'fab fa-react' },
  { nombre: 'Node.js', icono: 'fab fa-node-js' },
  { nombre: 'Python', icono: 'fab fa-python' },
  { nombre: 'SQL', icono: 'fas fa-database' },
  { nombre: 'Android', icono: 'fab fa-android' },
  { nombre: 'Finanzas', icono: 'fas fa-chart-line' },
  { nombre: 'Productividad', icono: 'fas fa-tasks' }
];

const basePath = import.meta.env.BASE_URL || '/';

const serviceActions = {
  cursosInformaticos: {
    type: 'scroll',
    targetId: 'cursos',
    title: 'Cursos de Informática',
    description: 'Navega directamente a nuestro catálogo de cursos y descubre la formación que mejor se adapta a tus objetivos.'
  },
  serviciosTecnicos: {
    type: 'modal',
    title: 'Servicios Técnicos',
    subtitle: 'Soporte, reparación y mantenimiento especializado para sistemas empresariales.',
    details: [
      { label: 'Diagnóstico en sitio', value: 'Evaluación rápida de hardware y software' },
      { label: 'Mantenimiento preventivo', value: 'Actualizaciones, limpieza y optimización proactiva' },
      { label: 'Reparación de emergencias', value: 'Atención rápida para reducir tiempos de inactividad' },
      { label: 'Soporte remoto', value: 'Asistencia técnica a distancia para resolver problemas urgentes' }
    ],
    ctaText: 'Contactar',
    ctaHref: '#contacto'
  },
  asesoramientoIt: {
    type: 'modal',
    title: 'Asesoramiento IT',
    subtitle: 'Consultoría estratégica para actualizar tu infraestructura y sistema de trabajo.',
    details: [
      { label: 'Análisis de infraestructura', value: 'Análisis de redes, servidores y seguridad' },
      { label: 'Planificación de mejoras', value: 'Estrategias escalables para crecimiento digital' },
      { label: 'Gestión de proyectos', value: 'Acompañamiento en despliegues y migraciones' },
      { label: 'Capacitación personalizada', value: 'Formación a medida para tu equipo' }
    ],
    ctaText: 'Contactar',
    ctaHref: '#contacto'
  },
  redesVideoVigilancia: {
    type: 'tabs',
    title: 'Redes y VideoVigilancia',
    subtitle: 'Soluciones integradas de conectividad y seguridad para tu empresa.',
    tabs: [
      {
        id: 'redes',
        label: 'Redes',
        items: [
          'Diseño e instalación de redes LAN/WAN',
          'Optimización de WiFi empresarial y enlaces dedicados',
          'Seguridad perimetral y segmentación de tráfico',
          'Monitoreo y análisis de rendimiento de red'
        ]
      },
      {
        id: 'videovigilancia',
        label: 'VideoVigilancia',
        items: [
          'Cámaras IP y grabación en alta definición',
          'Monitoreo remoto y notificaciones inteligentes',
          'Integración con control de acceso y alertas',
          'Mantenimiento activo y preventivo'
        ]
      }
    ],
    ctaText: 'Contactar',
    ctaHref: '#contacto'
  },
  desarrolloWeb: {
    type: 'route',
    title: 'Desarrollo Web',
    href: `${basePath}desarrollo-web/`
  },
  impresion3D: {
    type: 'route',
    title: 'Impresión 3D',
    href: `${basePath}impresion-3d/`
  }
};

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initMobileMenu();
  renderNovedades();
  renderCursos();
  initServiceActions();
  renderTecnologias();
  initScrollEffects();
  initFormValidation();
  initNavbarScroll();
  
  // Agregar event listener para el formulario de aceptación de términos
  const termsForm = document.getElementById('termsAcceptanceForm');
  if (termsForm) {
    termsForm.addEventListener('submit', sendTermsAcceptance);
  }
  // Agregar event listener para el formulario de aceptación de política de privacidad
  const privacyForm = document.getElementById('privacyAcceptanceForm');
  if (privacyForm) {
    privacyForm.addEventListener('submit', sendPrivacyAcceptance);
  }
});

// ============================================
// DARK MODE
// ============================================

function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  const html = document.documentElement;

  // Cargar preferencia guardada o detectar sistema
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = prefersDark ? 'dark' : 'cyan';

  // Aplicar tema guardado o por defecto
  applyTheme(savedTheme || defaultTheme);

  toggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'cyan' : 'dark';

    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
}

function applyTheme(theme) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);

  // Remover clases anteriores
  html.classList.remove('dark', 'theme-cyan');

  // Aplicar clase correspondiente
  if (theme === 'dark') {
    html.classList.add('dark');
  } else if (theme === 'cyan') {
    html.classList.add('theme-cyan');
  }
  // Para light, no se añade ninguna clase adicional
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuLinks = mobileMenu.querySelectorAll('a');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Cerrar menú al hacer clic en un link
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// ============================================
// RENDERIZAR CURSOS
// ============================================

function renderCursos() {
  const container = document.getElementById('cursosContainer');
  
  container.innerHTML = cursos.map(curso => `
    <div class="curso-card bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group">
      <div class="bg-gradient-to-r from-primary-100 to-cyan-100 dark:from-dark-600 dark:to-dark-500 flex items-center justify-center min-h-48 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
        <img src="${curso.imagen}" alt="imagen" class="rounded-lg"/>
      </div>
      
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2 theme-cyan:text-primary-500">${curso.titulo}</h3>
        <p class="text-dark-600 dark:text-dark-300 theme-cyan:text-primary-500 text-sm mb-4">${curso.descripcion}</p>
        
        <div class="flex items-center justify-between mb-4 text-sm">
          <span class="inline-block px-3 py-1 bg-primary-100 dark:bg-dark-600 text-primary-700 dark:text-primary-300 rounded-full">
            ${curso.nivel}
          </span>
          <span class="text-primary-600 dark:text-primary-400 font-semibold">${curso.precio}</span>
        </div>

        <div class="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400 mb-4">
          <span><i class="fas fa-clock mr-1"></i>${curso.duracion}</span>
        </div>

        <button onclick="openModal('${curso.id}')" class="w-full px-4 py-2 bg-gradient-to-r from-primary-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
          Ver Detalles
        </button>
      </div>
    </div>
  `).join('');
}

// ============================================
// MODAL DE CURSOS
// ============================================

function openModal(cursoId) {
  const curso = cursos.find(c => c.id == cursoId);
  if (!curso) return;

  document.getElementById('modalTitle').textContent = curso.titulo;
  document.getElementById('modalDescription').textContent = curso.descripcion;
  document.getElementById('modalDuration').textContent = curso.duracion;
  document.getElementById('modalLevel').textContent = curso.nivel;
  document.getElementById('modalPrice').textContent = curso.precio;

  const modal = document.getElementById('courseModal');
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeCourseModal() {
  const modal = document.getElementById('courseModal');
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function initServiceActions() {
  document.querySelectorAll('[data-service]').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const actionKey = button.dataset.service;
      const action = serviceActions[actionKey];
      if (!action) return;

      if (action.type === 'scroll') {
        const target = document.getElementById(action.targetId);
        target?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      if (action.type === 'route') {
        window.location.href = action.href;
        return;
      }

      openServiceModal(action);
    });
  });
}

function openServiceModal(action) {
  const modal = document.getElementById('serviceModal');
  if (!modal) return;

  modal.setAttribute('aria-hidden', 'false');
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');

  modal.querySelector('#serviceModalTitle').textContent = action.title;
  modal.querySelector('#serviceModalDescription').textContent = action.subtitle || action.description || '';
  const body = modal.querySelector('#serviceModalBody');
  const cta = modal.querySelector('#serviceModalCTA');

  if (action.type === 'tabs') {
    body.innerHTML = `
      <div class="space-y-4">
        <div class="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Opciones de servicio">
          ${action.tabs.map((tab, index) => `
            <button type="button"
              role="tab"
              aria-controls="panel-${tab.id}"
              aria-selected="${index === 0}"
              data-tab="${tab.id}"
              class="tab-button px-4 py-2 rounded-full border border-dark-200 dark:border-dark-600 text-sm font-semibold transition-colors ${index === 0 ? 'bg-primary-500 text-white' : 'bg-white dark:bg-dark-700 text-dark-700 dark:text-white'}">
              ${tab.label}
            </button>
          `).join('')}
        </div>
        ${action.tabs.map((tab, index) => `
          <div id="panel-${tab.id}" role="tabpanel" class="service-tab-panel ${index === 0 ? '' : 'hidden'}">
            <ul class="list-disc list-inside space-y-2 text-dark-600 dark:text-dark-300">
              ${tab.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    `;

    body.querySelectorAll('[data-tab]').forEach(button => {
      button.addEventListener('click', () => switchServiceTab(button.dataset.tab));
    });
  } else {
    body.innerHTML = `
      <div class="space-y-4">
        <p class="text-dark-600 dark:text-dark-300">${action.description || ''}</p>
        <div class="grid gap-3 md:grid-cols-2">
          ${action.details.map(detail => `
            <div class="bg-primary-50 dark:bg-dark-600 p-4 rounded-2xl">
              <p class="text-sm font-semibold text-primary-700 dark:text-primary-300">${detail.label}</p>
              <p class="text-sm text-dark-500 dark:text-dark-300">${detail.value}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  cta.textContent = action.ctaText || 'Contactar';
  cta.href = action.ctaHref || '#contacto';
  cta.onclick = (event) => {
    if (action.ctaHref === '#contacto') {
      event.preventDefault();
      closeServiceModal();
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }
  };
}

function switchServiceTab(selectedTabId) {
  const buttons = document.querySelectorAll('#serviceModal [data-tab]');
  const panels = document.querySelectorAll('.service-tab-panel');

  buttons.forEach(button => {
    const active = button.dataset.tab === selectedTabId;
    button.setAttribute('aria-selected', active);
    button.classList.toggle('bg-primary-500', active);
    button.classList.toggle('text-white', active);
    button.classList.toggle('bg-white', !active);
    button.classList.toggle('dark:bg-dark-700', !active);
    button.classList.toggle('text-dark-700', !active);
  });

  panels.forEach(panel => {
    panel.classList.toggle('hidden', panel.id !== `panel-${selectedTabId}`);
  });
}

function closeServiceModal() {
  const modal = document.getElementById('serviceModal');
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', (e) => {
  const courseModal = document.getElementById('courseModal');
  const serviceModal = document.getElementById('serviceModal');

  if (e.target === courseModal) {
    closeCourseModal();
  }

  if (e.target === serviceModal) {
    closeServiceModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCourseModal();
    closeServiceModal();
  }
});

// ============================================
// RENDERIZAR NOVEDADES
// ============================================

function renderNovedades() {
  const container = document.getElementById('novedadesContainer');

  container.innerHTML = `
    <div class="novedades-carousel relative overflow-hidden">
      <div class="novedades-slider flex transition-transform duration-500 ease-in-out" id="novedadesSlider">
        ${novedades.map((novedad, index) => `
          <div class="novedad-slide flex-shrink-0 w-full lg:w-1/3 px-4">
            <div class="bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
              <div class="relative overflow-hidden">
                <img src="${novedad.imagen}" alt="${novedad.titulo}" class="w-full h-84 object-cover group-hover:scale-105 transition-transform duration-300">
              </div>
              <div class="p-4">
                <div class="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400">
                  <p class="text-white/90 text-sm">${novedad.titulo}</p>
                  <a href="${novedad.vermas}" target="_blank" class="text-primary-500 hover:text-primary-600 font-semibold">
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <button onclick="prevNovedad()" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-dark-700/90 hover:bg-white dark:hover:bg-dark-700 rounded-full p-3 shadow-lg transition-all" id="prevBtn">
        <i class="fas fa-chevron-left text-primary-500"></i>
      </button>

      <button onclick="nextNovedad()" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-dark-700/90 hover:bg-white dark:hover:bg-dark-700 rounded-full p-3 shadow-lg transition-all" id="nextBtn">
        <i class="fas fa-chevron-right text-primary-500"></i>
      </button>
    </div>
  `;

  // Inicializar carrusel
  initNovedadesCarousel();
}

function initNovedadesCarousel() {
  let currentIndex = 0;
  const slider = document.getElementById('novedadesSlider');
  const indicators = document.querySelectorAll('#novedadesIndicators button');

  function updateCarousel() {
    const translateX = -currentIndex * (100 / 3); // 3 slides por vista
    slider.style.transform = `translateX(${translateX}%)`;

    indicators.forEach((indicator, index) => {
      if (index === Math.floor(currentIndex / 3)) {
        indicator.classList.add('bg-primary-500');
        indicator.classList.remove('bg-dark-300', 'dark:bg-dark-600');
      } else {
        indicator.classList.remove('bg-primary-500');
        indicator.classList.add('bg-dark-300', 'dark:bg-dark-600');
      }
    });
  }

  window.nextNovedad = () => {
    currentIndex = (currentIndex + 3) % novedades.length;
    updateCarousel();
  };

  window.prevNovedad = () => {
    currentIndex = currentIndex - 3;
    if (currentIndex < 0) currentIndex = Math.max(0, novedades.length - 3);
    updateCarousel();
  };
  
  updateCarousel();
}

function openNovedadModal(novedadId) {
  const novedad = novedades.find(n => n.id == novedadId);
  if (!novedad) return;

  // Crear modal si no existe
  if (!document.getElementById('novedadModal')) {
    const modal = document.createElement('div');
    modal.id = 'novedadModal';
    modal.className = 'hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
      <div class="bg-white dark:bg-dark-700 rounded-xl max-w-2xl w-full max-h-96 overflow-y-auto">
        <div class="sticky top-0 bg-white dark:bg-dark-700 p-6 border-b border-dark-200 dark:border-dark-600 flex justify-between items-center">
          <h2 id="novedadModalTitle" class="text-2xl font-bold"></h2>
          <button onclick="closeNovedadModal()" class="text-dark-500 hover:text-dark-700 dark:hover:text-dark-300">
            <i class="fas fa-times text-2xl"></i>
          </button>
        </div>
        <div class="p-6">
          <img id="novedadModalImage" src="" alt="" class="w-full h-48 object-cover rounded-lg mb-4">
          <p id="novedadModalDescription" class="text-dark-600 dark:text-dark-300 mb-4"></p>
          <div class="text-sm text-dark-500 dark:text-dark-400">
            <i class="fas fa-calendar mr-1"></i>Publicado el <span id="novedadModalDate"></span>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  document.getElementById('novedadModalTitle').textContent = novedad.titulo;
  document.getElementById('novedadModalImage').src = novedad.imagen;

  document.getElementById('novedadModal').classList.remove('hidden');
}

function closeNovedadModal() {
  document.getElementById('novedadModal').classList.add('hidden');
}

// ============================================
// RENDERIZAR TECNOLOGÍAS
// ============================================

function renderTecnologias() {
  const container = document.getElementById('techGrid');
  
  container.innerHTML = tecnologias.map((tech, index) => `
    <div class="tech-badge" style="animation-delay: ${index * 0.1}s;">
      <div class="text-center">
        <i class="${tech.icono} text-5xl text-primary-500 mb-2"></i>
        <p class="text-sm font-semibold theme-cyan:text-primary-500">${tech.nombre}</p>
      </div>
    </div>
  `).join('');
}

// ============================================
// SCROLL EFFECTS
// ============================================

function initScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observar elementos con clase fade-in
  document.querySelectorAll('.fade-in-element').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
  });

  // Observar service cards
  document.querySelectorAll('.service-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
  });

  // Observar curso cards
  document.querySelectorAll('.curso-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
  });

  // Observar testimonial cards
  document.querySelectorAll('.testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
  });

  // Observar tech badges
  document.querySelectorAll('.tech-badge').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
  });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

// ============================================
// CONFIGURACIÓN DE EMAILJS (desde archivo separado)
// ============================================
import { emailjsConfig, isEmailJsConfigured } from './emailjs-config.js';

// Inicializar EmailJS
if (isEmailJsConfigured()) {
  emailjs.init(emailjsConfig.publicKey);
}

// ============================================
// VALIDACIÓN Y ENVÍO DE FORMULARIO
// ============================================

function initFormValidation() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validación básica
    if (!name || !email || !subject || !message) {
      showNotification('Por favor completa todos los campos', 'error');
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification('Por favor ingresa un email válido', 'error');
      return;
    }

    // Verificar si EmailJS está configurado
    if (!isEmailJsConfigured()) {
      showNotification('⚠️ El servicio de correo no está configurado. Por favor, comunícate directamente a: ' + emailjsConfig.recipientEmail, 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    try {
      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          to_email: emailjsConfig.recipientEmail,
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          reply_to: email
        }
      );

      showNotification('¡Mensaje enviado exitosamente! Nos comunicaremos pronto.', 'success');
      form.reset();
    } catch (error) {
      console.error('Error al enviar:', error);
      showNotification('Error al enviar el mensaje. Por favor intenta más tarde.', 'error');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

// ============================================
// NOTIFICACIONES
// ============================================

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-6 right-6 px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce-in ${
    type === 'success' 
      ? 'bg-green-500 text-white' 
      : type === 'error'
      ? 'bg-red-500 text-white'
      : 'bg-primary-500 text-white'
  }`;
  
  notification.innerHTML = `
    <div class="flex items-center space-x-2">
      <i class="fas ${
        type === 'success' 
          ? 'fa-check-circle' 
          : type === 'error'
          ? 'fa-exclamation-circle'
          : 'fa-info-circle'
      }"></i>
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideUp 0.3s ease-out reverse';
    setTimeout(() => notification.remove(), 300);
  }, 3500);
}

// ============================================
// MODAL DE TÉRMINOS Y CONDICIONES
// ============================================

function openTermsModal() {
  const modal = document.getElementById('termsModal');
  modal.classList.remove('hidden');
}

function closeTermsModal() {
  const modal = document.getElementById('termsModal');
  const form = document.getElementById('termsAcceptanceForm');
  const buttons = document.getElementById('termsButtons');
  
  // Restaurar a estado inicial
  form.classList.add('hidden');
  buttons.classList.remove('hidden');
  form.reset();
  
  modal.classList.add('hidden');
}

function acceptTerms() {
  const buttons = document.getElementById('termsButtons');
  const form = document.getElementById('termsAcceptanceForm');
  
  // Ocultar botones y mostrar formulario
  buttons.classList.add('hidden');
  form.classList.remove('hidden');
}

function rejectTerms() {
  closeTermsModal();
  showNotification('Has rechazado los Términos y Condiciones', 'info');
}

function cancelAcceptance() {
  const buttons = document.getElementById('termsButtons');
  const form = document.getElementById('termsAcceptanceForm');
  
  // Restaurar botones y ocultar formulario
  buttons.classList.remove('hidden');
  form.classList.add('hidden');
  form.reset();
}

async function sendTermsAcceptance(e) {
  e.preventDefault();
  
  const name = document.getElementById('acceptanceName').value.trim();
  const surname = document.getElementById('acceptanceSurname').value.trim();
  const email = document.getElementById('acceptanceEmail').value.trim();
  
  if (!name || !surname || !email) {
    showNotification('Por favor completa todos los campos', 'error');
    return;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showNotification('Por favor ingresa un email válido', 'error');
    return;
  }
  
  // Verificar si EmailJS está configurado
  if (!isEmailJsConfigured()) {
    showNotification('⚠️ El servicio de correo no está configurado. Por favor, comunícate directamente a: ' + emailjsConfig.recipientEmail, 'error');
    return;
  }
  
  const submitBtn = document.querySelector('#termsAcceptanceForm button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;
  
  try {
    const acceptanceDate = new Date().toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      {
        to_email: emailjsConfig.recipientEmail,
        from_name: name + ' ' + surname,
        from_email: email,
        subject: 'Aceptación de Términos y Condiciones - Iamtec',
        message: `El usuario ha aceptado los Términos y Condiciones de Iamtec.\n\nNombre: ${name}\nApellido: ${surname}\nEmail: ${email}\nFecha de Aceptación: ${acceptanceDate}`,
        reply_to: email
      }
    );
    
    showNotification('¡Aceptación registrada exitosamente!', 'success');
    closeTermsModal();
  } catch (error) {
    console.error('Error al enviar:', error);
    showNotification('Error al registrar la aceptación. Por favor intenta más tarde.', 'error');
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
}

// ============================================
// MODAL DE POLÍTICA DE PRIVACIDAD
// ============================================

function openPrivacyModal() {
  const modal = document.getElementById('privacyModal');
  if (modal) modal.classList.remove('hidden');
}

function closePrivacyModal() {
  const modal = document.getElementById('privacyModal');
  const form = document.getElementById('privacyAcceptanceForm');
  const buttons = document.getElementById('privacyButtons');
  if (!modal) return;

  // Restaurar a estado inicial
  if (form) {
    form.classList.add('hidden');
    form.reset();
  }
  if (buttons) buttons.classList.remove('hidden');

  modal.classList.add('hidden');
}

function acceptPrivacy() {
  const buttons = document.getElementById('privacyButtons');
  const form = document.getElementById('privacyAcceptanceForm');
  if (!buttons || !form) return;

  buttons.classList.add('hidden');
  form.classList.remove('hidden');
}

function rejectPrivacy() {
  closePrivacyModal();
  showNotification('Has rechazado la Política de Privacidad', 'info');
}

function cancelPrivacyAcceptance() {
  const buttons = document.getElementById('privacyButtons');
  const form = document.getElementById('privacyAcceptanceForm');
  if (!buttons || !form) return;

  buttons.classList.remove('hidden');
  form.classList.add('hidden');
  form.reset();
}

async function sendPrivacyAcceptance(e) {
  e.preventDefault();

  const name = document.getElementById('privacyName')?.value.trim() || '';
  const surname = document.getElementById('privacySurname')?.value.trim() || '';
  const email = document.getElementById('privacyEmail')?.value.trim() || '';

  if (!name || !surname || !email) {
    showNotification('Por favor completa todos los campos', 'error');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showNotification('Por favor ingresa un email válido', 'error');
    return;
  }

  if (!isEmailJsConfigured()) {
    showNotification('⚠️ El servicio de correo no está configurado. Por favor, comunícate directamente a: ' + emailjsConfig.recipientEmail, 'error');
    return;
  }

  const submitBtn = document.querySelector('#privacyAcceptanceForm button[type="submit"]');
  const originalText = submitBtn ? submitBtn.textContent : 'Enviando...';
  if (submitBtn) {
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
  }

  try {
    const acceptanceDate = new Date().toLocaleString('es-ES');
    const templateVars = {
      to_email: emailjsConfig.recipientEmail,
      from_name: name + ' ' + surname,
      from_email: email,
      subject: 'Aceptación de Política de Privacidad - Iamtec',
      message: `El usuario ha aceptado la Política de Privacidad de Iamtec.\n\nNombre: ${name}\nApellido: ${surname}\nEmail: ${email}\nFecha de Aceptación: ${acceptanceDate}`,
      reply_to: email
    };

    console.log('Privacy acceptance payload', templateVars);

    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateVars
    );

    console.log('EmailJS response (privacy):', response);
    showNotification('¡Aceptación de Política de Privacidad registrada exitosamente!', 'success');
    closePrivacyModal();
  } catch (error) {
    console.error('Error al enviar aceptación de privacidad:', error);
    showNotification('Error al registrar la aceptación. Por favor intenta más tarde.', 'error');
  } finally {
    if (submitBtn) {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }
}

// ============================================
// UTILIDADES
// ============================================

// Hacer las funciones disponibles globalmente
window.openModal = openModal;
window.closeCourseModal = closeCourseModal;
window.closeServiceModal = closeServiceModal;
window.openTermsModal = openTermsModal;
window.closeTermsModal = closeTermsModal;
window.acceptTerms = acceptTerms;
window.rejectTerms = rejectTerms;
window.cancelAcceptance = cancelAcceptance;
window.openPrivacyModal = openPrivacyModal;
window.closePrivacyModal = closePrivacyModal;
window.acceptPrivacy = acceptPrivacy;
window.rejectPrivacy = rejectPrivacy;
window.cancelPrivacyAcceptance = cancelPrivacyAcceptance;

// Log de inicialización
console.log('%c🚀 IAMTEC - Landing Page', 'font-size: 20px; color: #0ea5e9; font-weight: bold;');
console.log('%cTecnologías: Vite, Tailwind CSS, JavaScript Vanilla', 'font-size: 14px; color: #6b7280;');



