import Swiper, {
  Autoplay,
  Pagination,
  Navigation
} from 'swiper';

const sliderOptions = {
  slidesPerView: 1,
  modules: [Autoplay, Pagination, Navigation],
  draggable: true,
  grabCursor: true,

  pagination: {
    el: '.product-slider__pagination',
  },

  navigation: {
    nextEl: '.product-slider__next',
    prevEl: '.product-slider__prev',
  },
};

const swiper = new Swiper('.product-slider', sliderOptions);

import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js'
import PhotoSwipe from 'photoswipe';

const photo_swipe_options = {
  gallery: '#my-gallery',
  pswpModule: PhotoSwipe,
  // set background opacity
  bgOpacity: 1,
  showHideOpacity: true,
  children: 'a',
  loop: false,
  showHideAnimationType: 'zoom',
  /* options: fade, zoom, none */

  /* Click on image moves to the next slide */
  imageClickAction: 'next',
  tapAction: 'next',

  /* ## Hiding a specific UI element ## */
  zoom: false,
  close: true,
  counter: true,
  arrowKeys: true,
  /* ## Options ## */
  bgOpacity: "1",
  /* deafult: 0.8 */
  wheelToZoom: true,
  /* deafult: undefined */
};

const lightbox = new PhotoSwipeLightbox(photo_swipe_options);

lightbox.init();

lightbox.on('change', () => {
  const {
    pswp
  } = lightbox;
  swiper.slideTo(pswp.currIndex, 0, false);
});

/* ### PhotoSwipe events ### */

lightbox.on('afterInit', () => {
  const {
    pswp
  } = lightbox;
  if (swiper.params.autoplay.enabled) {
    swiper.autoplay.stop();
  };
});

lightbox.on('closingAnimationStart', () => {
  //console.log('closingAnimationStart');
  const {
    pswp
  } = lightbox;
  swiper.slideTo(pswp.currIndex, 0, false);
  /* if autoplay enabled == true -> autoplay.start() when close lightbox */
  if (swiper.params.autoplay.enabled) {
    swiper.autoplay.start();
  }
});

lightbox.on('uiRegister', function () {
  lightbox.pswp.ui.registerElement({
    name: 'bulletsIndicator',
    className: 'pswp__bullets-indicator',
    appendTo: 'wrapper',
    onInit: (el, pswp) => {
      const bullets = [];
      let bullet;
      let prevIndex = -1;

      for (let i = 0; i < pswp.getNumItems(); i++) {
        bullet = document.createElement('div');
        bullet.className = 'pswp__bullet';
        bullet.onclick = (e) => {
          pswp.goTo(bullets.indexOf(e.target));
        };
        el.appendChild(bullet);
        bullets.push(bullet);
      }

      pswp.on('change', (a, ) => {
        if (prevIndex >= 0) {
          bullets[prevIndex].classList.remove('pswp__bullet--active');
        }
        bullets[pswp.currIndex].classList.add('pswp__bullet--active');
        prevIndex = pswp.currIndex;
      });
    }
  });
});
lightbox.init();