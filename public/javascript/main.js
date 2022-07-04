const backdrop = document.querySelector('.backdrop');
const sideDrawer = document.querySelector('.header-navbar-mobile');
const menuToggle = document.querySelector('.header-toggle-button');

function backdropClickHandler() {
  backdrop.style.display = 'none';
  sideDrawer.classList.remove('open');
}

function menuToggleClickHandler() {
  backdrop.style.display = 'block';
  sideDrawer.classList.add('open');
}


backdrop.addEventListener('click', backdropClickHandler);
menuToggle.addEventListener('click', menuToggleClickHandler);