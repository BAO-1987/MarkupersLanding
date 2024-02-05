const navigation = document.querySelector(".header");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--header-height",
  navigationHeight + "px"
);

