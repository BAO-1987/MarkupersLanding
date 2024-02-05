import Swiper, {
  Parallax,
  Navigation
} from 'swiper';


const portfolioSlider = new Swiper('.portfolio-slider', {
  slidesPerView: 1,
  parallax: true,
  modules: [Parallax, Navigation],
  spaceBetween: 30,
  speed: 600,
  draggable: true,
  grabCursor: true,

  navigation: {
    nextEl: ".portfolio-slider__next",
    prevEl: ".portfolio-slider__prev",
  },

});