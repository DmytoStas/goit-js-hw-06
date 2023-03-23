let counterValue = 0;

function onClickDecrement() {
  counterValue -= 1;
  counterRef.textContent = counterValue;
}

function onClickIncrement() {
  counterValue += 1;
  counterRef.textContent = counterValue;
}

const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');
const counterRef = document.querySelector('#value');

decrementButtonRef.addEventListener('click', onClickDecrement);
incrementButtonRef.addEventListener('click', onClickIncrement);
