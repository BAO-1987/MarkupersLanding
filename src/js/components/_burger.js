const navigation = document.querySelector('.header');
const page = document.querySelector('.page');

navigation ?.addEventListener('click', onBurgerBtnClick);

const links = document.querySelectorAll('.nav__link');
links.forEach(link => {
  link.addEventListener('click', () => {
    closeBurger();
  });
});

function onBurgerBtnClick(e) {
  if (!e.target.parentNode.matches('.burger') && !e.target.matches('.burger')) {
    return;
  }
  e.addEventListener;

  this.classList.remove('closed');
  page.classList.add('open');

  if (this.matches('.opened')) {
    this.classList.add('closed');
    page.classList.remove('open');

    setTimeout(() => {
      this.classList.remove('opened');
    }, 500);
  }

  this.classList.add('opened');
}

function closeBurger() {
  navigation.classList.remove('opened');
  navigation.classList.add('closed');
  page.classList.remove('open');
}