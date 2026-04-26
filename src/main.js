import './style.css';

// ============================================
// DATOS DE LA APLICACIÓN
// ============================================

const cursos = [
  {
    id: 1,
    titulo: 'Excel y Google Sheets',
    descripcion: 'Aprende a dominar Excel y Google Sheets para análisis de datos y automatización de tareas.',
    duracion: '6 semanas',
    nivel: 'Principiante',
    precio: '$20.000',
    imagen: 'https://lh3.googleusercontent.com/u/0/d/1UZwavgP4g6o4MYSVoSsUw7D35qJR-xo-'
  },
  {
    id: 2,
    titulo: 'Inteligencia Artificial',
    descripcion: 'Descubre cómo la IA puede mejorar tu día a día con aplicaciones prácticas y fáciles de implementar.',
    duracion: '8 semanas',
    nivel: 'Principiante',
    precio: '$30.000',
    imagen: 'https://lh3.googleusercontent.com/u/0/d/1GJxb4yqgRjjcVsZUC7r7F9Efk0iEwd_D'
  },
  {
    id: 3,
    titulo: 'Diseño Gráfico con Canva',
    descripcion: 'Aprende a crear diseños profesionales con Canva para tu negocio.',
    duracion: '4 semanas',
    nivel: 'Intermedio',
    precio: '$25.000',
    imagen: 'https://lh3.googleusercontent.com/u/0/d/1xTR1KNwB2temvLBD39Gr6lWvB1kCwCuK'
  },
  {
    id: 4,
    titulo: 'Ciberseguridad y Privacidad',
    descripcion: 'Protege tu información personal y profesional con prácticas de ciberseguridad efectivas.',
    duracion: '6 semanas',
    nivel: 'Intermedio',
    precio: '$35.000',
    imagen: 'https://lh3.googleusercontent.com/u/0/d/1N-AzTdMecINCoqbffOwS6PQpoNS0sTdY'
  },
  {
    id: 5,
    titulo: 'Programación Inicial con Python',
    descripcion: 'Fundamentos de programación con Python, estructuras de datos y buenas prácticas.',
    duracion: '8 semanas',
    nivel: 'Intermedio',
    precio: '$29.000',
    imagen: 'https://lh3.googleusercontent.com/u/0/d/1g3cwEeZd73vuxqNOuB2pb6_j2TpqGFQW'
  },
  {
    id: 6,
    titulo: 'Desarrollo Web Inicial',
    descripcion: 'Aprende a crear tu primera página web con HTML, CSS y JavaScript.',
    duracion: '10 semanas',
    nivel: 'Intermedio',
    precio: '$39.000',
    imagen: 'https://lh3.googleusercontent.com/u/0/d/1fBzL5cl93TbYuotm7aKF_2aw3gBL71Z7'
  },
  {
    id: 7,
    titulo: 'Educación Financiera',
    descripcion: 'Aprende a gestionar tus finanzas personales y a invertir de manera inteligente.',
    duracion: '6 semanas',
    nivel: 'Principiante',
    precio: '$15.900',
    imagen: 'https://lh3.googleusercontent.com/u/0/d/1p7IZTsU_jPqXE2MnyVHvA-_MUIPvZ0VM'
  },
  {
    id: 8,
    titulo: 'Informatica desde Cero',
    descripcion: 'En este curso vas a conocer el manejo básico de Windows y herramientas fundamentales ',
    duracion: '4 semanas',
    nivel: 'Principiante',
    precio: '$19.900',
    imagen: 'https://lh3.googleusercontent.com/u/0/d/1r2VDEIj6ZRWFtbiVqt_7ZuRv6M69flm_'
  },
  {
    id: 9,
    titulo: 'Herramientas en la Nube',
    descripcion: 'Aprende a utilizar herramientas en la nube como Google Drive para mejorar tu productividad.',
    duracion: '8 semanas',
    nivel: 'Principiante',
    precio: '$11.900',
    imagen: 'https://lh3.googleusercontent.com/u/0/d/1urafJSekGTIR6Nopfo3UYNmGaEg_Rg9i'
  },
  {
    id: 10,
    titulo: 'Word y PowerPoint Inicial',
    descripcion: 'Aprende a crear documentos y presentaciones profesionales con Word y PowerPoint.',
    duracion: '6 semanas',
    nivel: 'Principiante',
    precio: '$17.900',
    imagen: 'https://lh3.googleusercontent.com/u/0/d/14jk-aiPXqdNrESdUH91CKSaaKunDvmGc'
  },
  {
    id: 11,
    titulo: 'Disciplina y Productividad',
    descripcion: 'Aprende técnicas de disciplina y productividad para alcanzar tus metas personales y profesionales.',
    duracion: '4 semanas',
    nivel: 'Principiante',
    precio: '$9.900',
    imagen: 'https://lh3.googleusercontent.com/u/0/d/1iZSsraEcwiqzvRth5uVU74bha-fVK_XZ'
  },
  {
    id: 12,
    titulo: 'Uso de Celular Inicial',
    descripcion: 'Aprende a utilizar tu smartphone de manera eficiente para mejorar tu comunicación y productividad.',
    duracion: '4 semanas',
    nivel: 'Principiante',
    precio: '$9.900',
    imagen: 'https://lh3.googleusercontent.com/u/0/d/14UdwyJ8SeFe_YTPltgFD-CHhH4dgSVut'
  }
];

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

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initMobileMenu();
  renderNovedades();
  renderCursos();
  renderTecnologias();
  initScrollEffects();
  initFormValidation();
  initNavbarScroll();
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

  document.getElementById('courseModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('courseModal').classList.add('hidden');
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', (e) => {
  const modal = document.getElementById('courseModal');
  if (e.target === modal) {
    closeModal();
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

      <div class="flex justify-center mt-6 space-x-2" id="novedadesIndicators">
        ${novedades.map((_, index) => `
          <button onclick="goToNovedad(${index})" class="w-3 h-3 rounded-full bg-dark-300 dark:bg-dark-600 transition-colors" data-slide="${index}"></button>
        `).join('')}
      </div>
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

  window.goToNovedad = (index) => {
    currentIndex = index * 3;
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
  document.getElementById('novedadModalImage').alt = novedad.titulo;
  document.getElementById('novedadModalDescription').textContent = novedad.descripcion;
  document.getElementById('novedadModalDate').textContent = new Date(novedad.fecha).toLocaleDateString('es-ES');

  document.getElementById('novedadModal').classList.remove('hidden');
}

function closeNovedadModal() {
  document.getElementById('novedadModal').classList.add('hidden');
}

// Cerrar modal de novedades al hacer clic fuera
document.addEventListener('click', (e) => {
  const modal = document.getElementById('novedadModal');
  if (modal && e.target === modal) {
    closeNovedadModal();
  }
});

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
// VALIDACIÓN Y ENVÍO DE FORMULARIO
// ============================================

function initFormValidation() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', (e) => {
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

    // Simular envío
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      showNotification('¡Mensaje enviado exitosamente! Nos comunicaremos pronto.', 'success');
      form.reset();
    }, 1500);
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
// UTILIDADES
// ============================================

// Hacer la función closeModal disponible globalmente
window.openModal = openModal;
window.closeModal = closeModal;

// Log de inicialización
console.log('%c🚀 IAMTEC - Landing Page', 'font-size: 20px; color: #0ea5e9; font-weight: bold;');
console.log('%cTecnologías: Vite, Tailwind CSS, JavaScript Vanilla', 'font-size: 14px; color: #6b7280;');



