// const quantityInput = document.querySelector(".stepper__input");
// const incrementButton = document.querySelector(".stepper__btn--up");
// const decrementButton = document.querySelector(".stepper__btn--down");

// incrementButton.addEventListener("click", () => {
//   quantityInput.value = parseInt(quantityInput.value) + 1;
// });

// decrementButton.addEventListener("click", () => {
//   if (parseInt(quantityInput.value) > 0) {
//     quantityInput.value = parseInt(quantityInput.value) - 1;
//   }
// });

// quantityInput.addEventListener("input", () => {
//   const value = parseInt(quantityInput.value);
//   if (!isNaN(value) && value >= 0 && value <= 99) {
//     quantityInput.value = value;
//   } else {
//     quantityInput.value = 1;
//   }
// });
const quantityInput = document.querySelector(".stepper__input");
const incrementButton = document.querySelector(".stepper__btn--up");
const decrementButton = document.querySelector(".stepper__btn--down");

if (quantityInput && incrementButton && decrementButton) {
  incrementButton.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });

  decrementButton.addEventListener("click", () => {
    if (parseInt(quantityInput.value) > 0) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  });

  quantityInput.addEventListener("input", () => {
    const value = parseInt(quantityInput.value);
    if (!isNaN(value) && value >= 0 && value <= 99) {
      quantityInput.value = value;
    } else {
      quantityInput.value = 1;
    }
  });
}