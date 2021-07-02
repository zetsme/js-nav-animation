const menuBars = document.querySelector('.menu-bars');
const overlay = document.querySelector('#overlay');
const navItems = document.querySelectorAll('.overlay nav ul li');

const toggleNav = () => {
  menuBars.classList.toggle('open');
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-hide', 'overlay-show');
    navItems.forEach((item) => {
      item.classList.replace('slide-out', 'slide-in');
    });
  } else {
    overlay.classList.replace('overlay-show', 'overlay-hide');
    navItems.forEach((item) => {
      item.classList.replace('slide-in', 'slide-out');
    });
  }
};

menuBars.addEventListener('click', toggleNav);
navItems.forEach((item) => item.addEventListener('click', toggleNav));
overlay.classList.add('overlay-hide');
