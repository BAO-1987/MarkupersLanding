import lightGallery from 'lightgallery';
let $lgSwiper = document.getElementById('lg-swipper');
import Swiper, {
  Autoplay,
  Pagination,
  Navigation,
} from 'swiper';


const productSlider = new Swiper(".product-slider", {
  navigation: {
    nextEl: ".product-slider__next",
    prevEl: ".product-slider__prev",
  },

  modules: [Autoplay, Pagination, Navigation],
  dragable: true,
  grabCursor: true,
  on: {
    init: function () {
      const lg = lightGallery($lgSwiper, {
        speed: 300,
      });
      $lgSwiper.addEventListener("lgBeforeClose", () => {
        productSlider.slideTo(lg.index, 0);
      });
    }
  }
});

//  import Swiper, {
//    Autoplay,
//    Pagination,
//    Navigation,
//  } from 'swiper';

// const sliderOptions = {
//   slidesPerView: 1,
//   modules: [Autoplay, Pagination, Navigation],
//   dragable: true,
//   grabCursor: true,

//   pagination: {
//     el: '.single-slider__pagination',
//   },

//   navigation: {
//     nextEl: ".product-slider__next",
//     prevEl: ".product-slider__prev",
//   },
// };

// const productSlider = new Swiper('.product-slider', sliderOptions);