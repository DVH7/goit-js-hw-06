console.log(
  `Number of categories: ${document.querySelectorAll(".item").length}`
);

document.querySelectorAll(".item").forEach(function (number) {
  console.log(`Categories: ${number.querySelector("h2").textContent}`);
  console.log(`Elements: ${number.querySelectorAll("li").length}`);
});
