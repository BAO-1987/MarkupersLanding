import Swiper, {
  Autoplay,
  Pagination,
  Navigation,
} from 'swiper';

const sliderOptions = {
  slidesPerView: 2,
  spaceBetween: 5,
  modules: [Autoplay, Pagination, Navigation],
  dragable: true,
  grabCursor: true,
  breakpoints: {

    576: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  navigation: {
    nextEl: ".recent-slider__next",
    prevEl: ".recent-slider__prev",
  },

  pagination: {
    el: '.recent-slider__pagination',
  },
};

const recentSlider = new Swiper('.recent-slider', sliderOptions);