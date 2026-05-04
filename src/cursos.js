import { cursos } from '/src/datosCursos.js';

function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = prefersDark ? 'dark' : 'cyan';

  applyTheme(savedTheme || defaultTheme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'cyan' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('theme', nextTheme);
    });
  }
}

function applyTheme(theme) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);
  html.classList.remove('dark', 'theme-cyan');

  if (theme === 'dark') {
    html.classList.add('dark');
  } else if (theme === 'cyan') {
    html.classList.add('theme-cyan');
  }
}

function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuLinks = mobileMenu?.querySelectorAll('a');

  menuToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  menuLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
    });
  });
}

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function renderCatalog(items) {
  const container = document.getElementById('courseCatalog');
  const totalLabel = document.getElementById('courseCountLabel');

  if (!container) return;

  container.innerHTML = items.map(curso => `
    <div class="curso-card bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group">
      <div class="bg-gradient-to-r from-primary-100 to-cyan-100 dark:from-dark-600 dark:to-dark-500 flex items-center justify-center min-h-48 relative overflow-hidden">
        <img src="${curso.imagen}" alt="${curso.titulo}" class="w-full h-full object-cover rounded-lg" />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2 theme-cyan:text-primary-500">${curso.titulo}</h3>
        <p class="text-dark-600 dark:text-dark-300 theme-cyan:text-primary-500 text-sm mb-4">${curso.descripcion}</p>
        <div class="flex flex-wrap gap-2 items-center mb-4 text-sm">
          <span class="inline-block px-3 py-1 bg-primary-100 dark:bg-dark-600 text-primary-700 dark:text-primary-300 rounded-full">${curso.nivel}</span>
          <span class="text-primary-600 dark:text-primary-400 font-semibold">${curso.precio}</span>
        </div>
        <div class="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400 mb-4">
          <span><i class="fas fa-clock mr-1"></i>${curso.duracion}</span>
        </div>
        <button onclick="openCourseModal(${curso.id})" class="w-full px-4 py-2 bg-gradient-to-r from-primary-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
          Ver Detalles
        </button>
      </div>
    </div>
  `).join('');

  if (totalLabel) {
    totalLabel.textContent = `${items.length} curso${items.length === 1 ? '' : 's'} disponibles`;
  }
}

function sortCourses(items, order) {
  return [...items].sort((a, b) => {
    const titleA = a.titulo.toLowerCase();
    const titleB = b.titulo.toLowerCase();
    return order === 'asc' ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
  });
}

function filterCourses(query, level) {
  return cursos.filter(curso => {
    const matchName = curso.titulo.toLowerCase().includes(query.toLowerCase());
    const matchLevel = level === 'todos' || curso.nivel === level;
    return matchName && matchLevel;
  });
}

function updateCatalog() {
  const searchInput = document.getElementById('courseSearch');
  const levelFilter = document.getElementById('courseLevel');
  const sortOrder = document.getElementById('courseSort');

  const query = searchInput?.value.trim() || '';
  const level = levelFilter?.value || 'todos';
  const order = sortOrder?.value || 'asc';

  const filtered = filterCourses(query, level);
  const sorted = sortCourses(filtered, order);
  renderCatalog(sorted);
}

function initCatalogControls() {
  const searchInput = document.getElementById('courseSearch');
  const levelFilter = document.getElementById('courseLevel');
  const sortOrder = document.getElementById('courseSort');

  searchInput?.addEventListener('input', updateCatalog);
  levelFilter?.addEventListener('change', updateCatalog);
  sortOrder?.addEventListener('change', updateCatalog);
}

function initScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-element, .curso-card, .instructor-card, .catalog-controls').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
  });
}

function openCourseModal(cursoId) {
  const curso = cursos.find(c => c.id === cursoId);
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

function closeModal() {
  const modal = document.getElementById('courseModal');
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

document.addEventListener('click', (e) => {
  const courseModal = document.getElementById('courseModal');
  if (e.target === courseModal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initMobileMenu();
  initNavbarScroll();
  renderCatalog(sortCourses(cursos, 'asc'));
  initCatalogControls();
  initScrollEffects();

  window.openCourseModal = openCourseModal;
  window.closeModal = closeModal;
});
