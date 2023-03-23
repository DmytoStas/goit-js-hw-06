const textInputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

textInputRef.addEventListener('input', event => {
  outputRef.textContent =
    textInputRef.value === '' ? 'Anonymous' : event.currentTarget.value;
});
