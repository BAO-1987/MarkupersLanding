import ScrollReveal from "scrollreveal";
ScrollReveal({
  easing: "ease",
});


ScrollReveal().reveal(".text, .delivery__content, .slider, .app__content,  .catalog__inner, .filter, .sort, .product-info, .tabs, .recent__content", {
  duration: 1200,
  distance: "20px",
  delay: "100",
  origin: "top",
});

ScrollReveal().reveal(".services-home__list> li, .stages__list> li", {
  duration: 500,
  distance: "20px",
  delay: "100",
  origin: "top",
  interval: 500,
  opacity: 0,
});


ScrollReveal().reveal(".hero__image, .delivery__image, .app__image", {
  duration: 1000,
  distance: "20px",
  delay: "100",
  origin: "right",
});

ScrollReveal().reveal(".delivery__image", {
  origin: "left",
});

// ScrollReveal().reveal(".title", {
//   duration: 1200,
//   distance: "20px",
//   delay: "100",
//   origin: "top",
// });



ScrollReveal().reveal(".footer__top, .categories__btn, .pagination", {
  duration: 800,
  distance: "25px",
  delay: "100",
  origin: "bottom",
});

