const value = document.querySelector("#value");
const counterDecrementBtn = document.querySelector(
  'button[data-action="decrement"]'
);

const counterIncrementBtn = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;

counterDecrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
counterIncrementBtn.addEventListener("click", () => {
  counterValue += 1;

  value.textContent = counterValue;
});
