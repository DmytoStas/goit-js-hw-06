const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

textRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener('input', event => {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
});
