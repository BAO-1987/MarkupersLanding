import Swiper, {
  Autoplay,
  Pagination,
  Navigation,
} from 'swiper';

const sliderOptions = {
  slidesPerView: 1,
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  draggable: true,
  grabCursor: true,

  navigation: {
    nextEl: ".portfolio-slider__next",
    prevEl: ".portfolio-slider__prev",
  },

};

const portfolioSlider = new Swiper('.portfolio-slider', sliderOptions);