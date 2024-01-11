import { _querySelector, _add, _remove } from '../_config.js';

let headerHeight = parseFloat(
  document.documentElement.style.getPropertyValue('--header-height')
);

const header = document.querySelector('.header');
const first = document.querySelector('.main');
const firstHeight = first.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance >= 15 + headerHeight) {
  	header.classList.add('is-scroll');
  	first.style.paddingTop = headerHeight + 'px';
  } else {
  	header.classList.remove('is-scroll');
  	first.style.paddingTop = null;
  }
  lastScrollTop = scrollDistance;
});

