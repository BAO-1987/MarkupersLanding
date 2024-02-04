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
