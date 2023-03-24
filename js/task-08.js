const form = document.querySelector('.login-form');

form.addEventListener('submit', hendleSubmit);

function hendleSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('All fields should be filed!');
  }

  console.log(`userLogin = {
    email: ${email.value},
    password: ${password.value}
  }`);

  event.currentTarget.reset();
}
