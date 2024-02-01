// let updateCursor = ({
//   x,
//   y
// }) => {
//   document.documentElement.style.setProperty('--x', x)
//   document.documentElement.style.setProperty('--y', y)
// }

// document.body.addEventListener('pointermove', updateCursor)

// const elements = document.querySelectorAll('.title');
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     const element = entry.target;

//     if (entry.isIntersecting) {
//       element.classList.add('title-animation');
//     } else {
//       element.classList.remove('title-animation');
//     }
//   });
// });

// elements.forEach(element => {
//   observer.observe(element);
// });
const elementsWithData = document.querySelectorAll('[data-animation]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const element = entry.target;

    if (entry.isIntersecting && !element.classList.contains('animated')) {
      element.classList.add('title-animation', 'animated');
    }
  });
});

elementsWithData.forEach(element => {
  observer.observe(element);
});
