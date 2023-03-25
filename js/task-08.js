const form = document.querySelector('.login-form');

form.addEventListener('submit', hendleSubmit);

function hendleSubmit(event) {
  event.preventDefault();

  const result = {};

  const { email, password } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('All fields should be filed!');
  }

  result.email = email.value;
  result.password = password.value;

  event.currentTarget.reset();

  console.log(result);
}
