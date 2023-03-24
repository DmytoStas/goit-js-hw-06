const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputValidation);

function onInputValidation(event) {
  const inputReqLength = parseInt(inputRef.getAttribute('data-length'));
  const inputCurrentLength = event.currentTarget.value.length;

  if (inputCurrentLength === inputReqLength) {
    inputRef.classList.add('valid');

    if (inputRef.classList.contains('invalid')) {
      inputRef.classList.remove('invalid');
    }
  } else {
    inputRef.classList.add('invalid');
  }

  console.log(event.currentTarget.value.length);
}
