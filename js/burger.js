const openMenu = document.querySelector('.open-button');
const menu = document.querySelector('.navbar');
const closeMenu = document.querySelector('.close-button');

const toggleMenu = (event) => {
  menu.classList.toggle("navbar-open")
};
 openMenu.addEventListener('click', toggleMenu);
 closeMenu.addEventListener('click', toggleMenu);
