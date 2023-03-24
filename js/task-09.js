function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const buttonRef = document.querySelector('.change-color');
const colorTextRef = document.querySelector('.color');

buttonRef.addEventListener('click', hendleClick);

function hendleClick() {
  body.style.backgroundColor = getRandomHexColor();
  colorTextRef.textContent = getRandomHexColor();
}
