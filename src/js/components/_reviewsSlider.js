import Swiper, {
  Pagination,
  Navigation,
} from 'swiper';

const sliderOptions = {
  slidesPerView: 1,
  modules: [Pagination, Navigation],
  dragable: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: ".reviews-slider__next",
    prevEl: ".reviews-slider__prev",
  },
};

const reviewsSlider = new Swiper('.reviews-slider', sliderOptions);