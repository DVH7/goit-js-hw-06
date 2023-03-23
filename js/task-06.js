const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", onInputBlur)


function onInputBlur(event) {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
};