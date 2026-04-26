/**
 * EJEMPLO: Componente Reutilizable de Button
 * 
 * Este archivo muestra cómo crear componentes modulares
 * para expandir el proyecto de forma escalable
 */

/**
 * Crea un botón reutilizable con diferentes variantes
 * @param {Object} config - Configuración del botón
 * @param {string} config.text - Texto del botón
 * @param {string} config.type - Tipo: 'primary', 'secondary', 'danger' (default: 'primary')
 * @param {string} config.size - Tamaño: 'sm', 'md', 'lg' (default: 'md')
 * @param {boolean} config.fullWidth - Ancho 100% (default: false)
 * @param {Function} config.onClick - Callback al hacer click
 * @param {string} config.icon - Clase de Icon Font Awesome (opcional)
 * @param {boolean} config.loading - Estado de carga (default: false)
 * @param {boolean} config.disabled - Deshabilitado (default: false)
 * @returns {HTMLElement} - Elemento del botón
 */
export function createButton(config) {
  const {
    text = 'Button',
    type = 'primary',
    size = 'md',
    fullWidth = false,
    onClick = null,
    icon = null,
    loading = false,
    disabled = false
  } = config;

  // Validar tipo válido
  if (!['primary', 'secondary', 'danger', 'success'].includes(type)) {
    throw new Error(`Tipo de botón inválido: ${type}`);
  }

  const button = document.createElement('button');
  
  // Clases base
  const baseClasses = 'px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95';
  
  // Clases por tipo
  const typeClasses = {
    primary: 'bg-gradient-to-r from-primary-500 to-cyan-500 text-white hover:shadow-lg',
    secondary: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-dark-700',
    danger: 'bg-red-500 text-white hover:shadow-lg hover:bg-red-600',
    success: 'bg-green-500 text-white hover:shadow-lg hover:bg-green-600'
  };

  // Clases por tamaño
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  // Aplicar clases
  button.className = `
    ${baseClasses}
    ${typeClasses[type]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : 'cursor-pointer'}
  `.trim();

  // Agregar atributos
  button.disabled = disabled;
  button.type = 'button';
  
  // Contenido
  if (loading) {
    button.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i>${text}`;
    button.disabled = true;
  } else if (icon) {
    button.innerHTML = `<i class="${icon} mr-2"></i>${text}`;
  } else {
    button.textContent = text;
  }

  // Event listener
  if (onClick && !disabled) {
    button.addEventListener('click', onClick);
  }

  return button;
}

/**
 * EJEMPLO: Componente Reutilizable de Card
 */
export function createCard(config) {
  const {
    title = 'Card Title',
    description = 'Card description',
    image = null,
    footer = null,
    onClick = null,
    className = ''
  } = config;

  const card = document.createElement('div');
  card.className = `
    bg-white dark:bg-dark-700 rounded-xl shadow-lg 
    hover:shadow-2xl transition-all hover:-translate-y-2
    ${className}
  `.trim();

  let html = '';

  // Imagen si existe
  if (image) {
    html += `
      <div class="h-48 bg-gradient-to-br from-primary-100 to-cyan-100 
                  dark:from-dark-600 dark:to-dark-500 rounded-t-xl 
                  overflow-hidden flex items-center justify-center">
        <img src="${image}" alt="${title}" class="w-full h-full object-cover">
      </div>
    `;
  }

  // Contenido
  html += `
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">${title}</h3>
      <p class="text-dark-600 dark:text-dark-300 text-sm">${description}</p>
  `;

  if (footer) {
    html += `<div class="mt-4">${footer}</div>`;
  }

  html += `</div>`;

  card.innerHTML = html;

  if (onClick) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', onClick);
  }

  return card;
}

/**
 * EJEMPLO: Componente Modal Reutilizable
 */
export function createModal(config) {
  const {
    title = 'Modal Title',
    content = 'Modal Content',
    buttons = [],
    onClose = null,
    size = 'md' // sm, md, lg
  } = config;

  // Crear overlay
  const overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-40';
  
  // Crear modal
  const modal = document.createElement('div');
  const sizeClass = {
    sm: 'max-w-sm',
    md: 'max-w-2xl',
    lg: 'max-w-4xl'
  }[size];

  modal.className = `
    fixed inset-0 z-50 flex items-center justify-center p-4
  `;

  const modalBox = document.createElement('div');
  modalBox.className = `
    bg-white dark:bg-dark-700 rounded-xl shadow-2xl 
    ${sizeClass} w-full max-h-96 overflow-y-auto
  `;

  // Header
  const header = document.createElement('div');
  header.className = `
    sticky top-0 bg-white dark:bg-dark-700 p-6 border-b 
    border-dark-200 dark:border-dark-600 flex justify-between items-center
  `;
  header.innerHTML = `
    <h2 class="text-2xl font-bold">${title}</h2>
    <button class="text-dark-500 hover:text-dark-700 dark:hover:text-dark-300">
      <i class="fas fa-times text-2xl"></i>
    </button>
  `;

  // Body
  const body = document.createElement('div');
  body.className = 'p-6';
  body.innerHTML = content;

  // Footer con botones
  const footer = document.createElement('div');
  footer.className = 'p-6 border-t border-dark-200 dark:border-dark-600 flex gap-4';
  
  buttons.forEach(btn => {
    const button = createButton(btn);
    footer.appendChild(button);
  });

  modalBox.appendChild(header);
  modalBox.appendChild(body);
  if (buttons.length > 0) {
    modalBox.appendChild(footer);
  }

  modal.appendChild(modalBox);

  // Close button handler
  const closeBtn = header.querySelector('button');
  closeBtn.addEventListener('click', () => {
    modal.remove();
    overlay.remove();
    if (onClose) onClose();
  });

  // Click outside to close
  overlay.addEventListener('click', () => {
    modal.remove();
    overlay.remove();
    if (onClose) onClose();
  });

  // Agregar al documento
  document.body.appendChild(overlay);
  document.body.appendChild(modal);

  return { modal, overlay, close: () => {
    modal.remove();
    overlay.remove();
  }};
}

/**
 * EJEMPLO DE USO:
 * 
 * // Crear un botón
 * const btn = createButton({
 *   text: 'Click aquí',
 *   type: 'primary',
 *   size: 'lg',
 *   icon: 'fas fa-check',
 *   onClick: () => console.log('Clicked!')
 * });
 * document.body.appendChild(btn);
 * 
 * // Crear una card
 * const card = createCard({
 *   title: 'Mi Card',
 *   description: 'Esta es una card de ejemplo',
 *   footer: '<p>Footer content</p>',
 *   onClick: () => console.log('Card clicked')
 * });
 * document.body.appendChild(card);
 * 
 * // Crear un modal
 * createModal({
 *   title: 'Confirmación',
 *   content: '<p>¿Estás seguro?</p>',
 *   buttons: [
 *     { text: 'Cancelar', type: 'secondary' },
 *     { text: 'Confirmar', type: 'primary' }
 *   ],
 *   onClose: () => console.log('Modal cerrado')
 * });
 */

// Exportar todas las funciones
export const components = {
  createButton,
  createCard,
  createModal
};
