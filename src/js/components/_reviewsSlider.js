import Swiper, {
  Pagination,
  Navigation,
} from 'swiper';

const sliderOptions = {
  slidesPerView: 1,
  modules: [Pagination, Navigation],
  draggable: true,
  grabCursor: true,

  navigation: {
    nextEl: ".reviews-slider__next",
    prevEl: ".reviews-slider__prev",
  },
};

const reviewsSlider = new Swiper('.reviews-slider', sliderOptions);