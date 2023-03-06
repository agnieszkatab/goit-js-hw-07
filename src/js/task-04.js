function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBoxes = (amount) => {
  const boxes = document.getElementById("boxes");
  let firstBox = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${firstBox}px`;
    div.style.height = `${firstBox}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(div)
    firstBox +=10;
  }
}

const createButton = document.querySelector('[data-create]')
const input = document.querySelector('input')
createButton.addEventListener("click", () => createBoxes(input.value))

const destroyBoxes = () => {
  boxes.innerHTML = ""
}

const destroyButton = document.querySelector('[data-destroy]')
destroyButton.addEventListener("click", () => destroyBoxes())