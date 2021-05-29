const menuElem = document.querySelector('.burger-menu');
const humburgerElem = document.querySelector('.burger-button');
const firstElem = document.querySelector('.first-elem');

const toggleMenu = () => {
      menuElem.classList.toggle('burger-menu-active');
      humburgerElem.classList.toggle('burger-button-active');
      firstElem.classList.toggle('under-burger');

      if (menuElem.classList.contains('burger-menu-active')) {
        document.body.addEventListener('click', handlerMenu)
      } else {
        document.body.removeEventListener('click', handlerMenu)
      }
  };

const handlerMenu = event => {
  
  const target = event.target;
  const parent = target.closest('.burger-menu');

  if ((!parent && target !== humburgerElem) ||
    target.classList.contains('menu-link')) {
      toggleMenu()
    }
}

humburgerElem.addEventListener('click', toggleMenu);