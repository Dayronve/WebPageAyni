'use strict';

/**
 * Inicializa el botón de menú para futuras acciones
 */
const toggleMenu = () => {
  const menuBtn = document.querySelector('.header__menu-btn');
  menuBtn.addEventListener('click', () => {
    console.log('Menú clickeado');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  toggleMenu();
});
