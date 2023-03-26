function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlInput = document.querySelector("#controls input");
const createDiv = document.querySelector('button[data-create]')
const destroyDiv = document.querySelector("button[data-destroy]");
const boxes = document.getElementById("#boxes");

createDiv.addEventListener("click", getAmount());
destroyDiv.addEventListener("click", destroyBoxes());


function getAmount() {
  let countBox = Number(controlInput.getAttribute("count"));
  console.log(countBox);
  let amount = document.querySelector("#controls input").value;
  createBoxes(amount);
  console.log(amount);
}

function createBoxes(amount) {
  let countBox = Number(controlInput.getAttribute("count"));
  console.log(countBox);
let div
  for(let i = 0; i < amount; i += 1){
    let div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.background = getRandomHexColor();
   
    divElements.append(div);
  }
 
}


function destroyBoxes(){
  boxes.innerHTML = "";
}
