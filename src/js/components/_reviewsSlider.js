import Swiper, {
  Navigation,
  Parallax
} from 'swiper';

const reviewsSlider = new Swiper('.reviews-slider', {
  slidesPerView: 1,
  parallax: true,
  modules: [Parallax, Navigation],
  spaceBetween: 30,
  speed: 600,
  draggable: true,
  grabCursor: true,

  navigation: {
    nextEl: ".reviews-slider__next",
    prevEl: ".reviews-slider__prev",
  },
});