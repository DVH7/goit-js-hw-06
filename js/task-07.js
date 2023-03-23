const inputSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputSize.addEventListener("input", changeSpanText);

function changeSpanText() {
  spanText.style.fontSize = `${inputSize.value + "px"}`;
}
