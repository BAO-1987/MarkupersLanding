import ScrollReveal from "scrollreveal";
ScrollReveal({
  easing: "ease",
});

ScrollReveal().reveal(".header", {
  duration: 800,
  distance: "100%",
  delay: "800",
  origin: "top",
  mobile: false,
});

ScrollReveal().reveal(".hero__title", {
  duration: 700,
  distance: "20px",
  easing: "ease",
  delay: "150",
  origin: "top",
});

ScrollReveal().reveal(".hero__btn", {
  duration: 800,
  distance: "30px",
  delay: "600",
  origin: "bottom",
  mobile: false,
});



ScrollReveal().reveal(".text, .portfolio, .reviews, .contacts, .stages__list", {
  duration: 1200,
  distance: "20px",
  delay: "100",
  origin: "top",
});

ScrollReveal().reveal(".faq__list> li", {
  duration: 500,
  distance: "20px",
  delay: "100",
  origin: "top",
  interval: 500,
});




// ScrollReveal().reveal(".hero__image, .delivery__image, .app__image", {
//   duration: 1000,
//   distance: "20px",
//   delay: "100",
//   origin: "right",
// });

// ScrollReveal().reveal(".delivery__image", {
//   origin: "left",
// });

// ScrollReveal().reveal(".title", {
//   duration: 1200,
//   distance: "20px",
//   delay: "100",
//   origin: "top",
// });



// ScrollReveal().reveal(".btn", {
//   duration: 300,
//   distance: "25px",
//   delay: "100",
//   origin: "top",
// });