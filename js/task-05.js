const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", changeOutput);

function changeOutput(event) {
  console.log(event.currentTarget.value);
  outputText.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    outputText.textContent = "Anonymous";
  }
}
