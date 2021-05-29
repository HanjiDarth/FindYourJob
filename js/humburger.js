const menuElem = document.querySelector('.humburger-menu');
const humburgerElem = document.querySelector('.humburger-button');
const firstElem = document.querySelector('.first-elem');

const toggleMenu = () => {
      menuElem.classList.toggle('humburger-menu-active');
      humburgerElem.classList.toggle('humburger-button-active');
      firstElem.classList.toggle('under-humburger');

      if (menuElem.classList.contains('humburger-menu-active')) {
        document.body.addEventListener('click', handlerMenu)
      } else {
        document.body.removeEventListener('click', handlerMenu)
      }
  };

const handlerMenu = event => {
  
  const target = event.target;
  const parent = target.closest('.humburger-menu');

  if ((!parent && target !== humburgerElem) ||
    target.classList.contains('menu-link')) {
      toggleMenu()
    }
}

humburgerElem.addEventListener('click', toggleMenu);