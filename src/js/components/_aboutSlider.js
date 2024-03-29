import Swiper from 'swiper';


window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;
    const sliderElement = document.querySelector(swiperClass);


    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      // Check if the slider element with the specified class exists on the page.
      if (document.querySelector(className)) {
        swiper = new Swiper(className, settings);

        if (callback) {
          callback(swiper);
        }
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };


  resizableSwiper(
    '(max-width: 575px)',
    '.about__slider', {
      loop: true,
      spaceBetween: 20,
      grabCursor: true,
      slidesPerView: 1,
    },
  );
});