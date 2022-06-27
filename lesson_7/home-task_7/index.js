document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.nav__list');
  const burger = document.querySelector('.burger');
  const lines = document.querySelectorAll('.burger__line');

  burger.addEventListener('click', () => {
    lines.forEach(elem => {
      elem.classList.toggle('open-burger');
    });
    list.classList.toggle('show-menu');
  });
});