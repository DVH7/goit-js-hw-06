const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const elementsLi = ingredients.map((ingredient) => {
  const ingridEl = document.createElement("li");
  ingridEl.textContent = ingredient;
  ingridEl.classList.add("item");

  return ingridEl;
});

const elementUl = document.querySelector("ul");
elementUl.append(...elementsLi);
console.log(elementUl);
