
const filterBtn = document.querySelector(".sort__btn");
const filterBtnClose = document.querySelector(".filter__close");
const filterForm = document.querySelector(".filter");
const page = document.querySelector(".page");

filterBtn?.addEventListener("click", () => {
  filterForm.classList.add("filter--active");
  page.classList.add("open");
});

filterBtnClose?.addEventListener("click", () => {
  filterForm.classList.remove("filter--active");
  page.classList.remove("open");
});