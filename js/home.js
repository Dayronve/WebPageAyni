'use strict';

/**
 * Inicializa el botón de menú con la nueva funcionalidad del sidebar
 */
const toggleMenu = () => {
  const menuBtn = document.querySelector('.header__menu-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const mainContent = document.getElementById('mainContent');

  // Función para alternar el menú
  const handleToggleMenu = () => {
    console.log('Menú clickeado');
    
    const isActive = sidebar.classList.contains('active');
    
    if (isActive) {
      // Cerrar menú
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      mainContent.classList.remove('shifted');
      menuBtn.classList.remove('active');
      menuBtn.innerHTML = '&#9776;';
    } else {
      // Abrir menú
      sidebar.classList.add('active');
      overlay.classList.add('active');
      mainContent.classList.add('shifted');
      menuBtn.classList.add('active');
      menuBtn.innerHTML = '&#10005;';
    }
  };

  // Event listeners
  menuBtn.addEventListener('click', handleToggleMenu);
  overlay.addEventListener('click', handleToggleMenu);

  // Cerrar menú al hacer clic en un enlace (opcional)
  document.querySelectorAll('.sidebar__item').forEach(item => {
    item.addEventListener('click', () => {
      // Aquí puedes agregar lógica para navegar
      console.log('Navegando a:', item.querySelector('.sidebar__text').textContent);
      // handleToggleMenu(); // Descomenta si quieres cerrar el menú al hacer clic
    });
  });

  // Cerrar menú con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
      handleToggleMenu();
    }
  });

  // Animación adicional para el botón de menú
  menuBtn.addEventListener('mouseenter', () => {
    if (!sidebar.classList.contains('active')) {
      menuBtn.style.transform = 'scale(1.1) rotate(90deg)';
    }
  });

  menuBtn.addEventListener('mouseleave', () => {
    if (!sidebar.classList.contains('active')) {
      menuBtn.style.transform = 'scale(1) rotate(0deg)';
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  toggleMenu();
});

