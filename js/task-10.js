function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = [];
let width = 30;
let height = 30;

function makeBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.backgroundColor = getRandomHexColor();

    width += 10;
    height += 10;

    boxes.push(element);
  }

  boxesContainerRef.append(...boxes);
  inputRef.value = '';
}

function createBoxes() {
  if (inputRef.value < 1 || inputRef.value > 100) {
    alert('You have to choose from 1 to 100!');
    return;
  }

  if (boxes.length !== 0) {
    if (boxes.length === parseInt(inputRef.value)) {
      alert('You already have this number of boxes!');
      return;
    } else {
      destroyBoxes();
      makeBoxes(inputRef.value);
      return;
    }
  }

  makeBoxes(inputRef.value);
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = '';
  boxes.length = 0;
  width = 30;
  height = 30;
}

const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesContainerRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);
