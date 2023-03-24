function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let width = 30;
let height = 30;

function createBoxes(amount) {
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.backgroundColor = getRandomHexColor();

    width += 10;
    height += 10;

    elements.push(element);
  }

  boxesContainerRef.append(...elements);
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = '';
  width = 30;
  height = 30;
}

const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesContainerRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', () => createBoxes(inputRef.value));
destroyBtnRef.addEventListener('click', destroyBoxes);
