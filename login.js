const userLogin = 'admin@foody.com';
const userName = 'Souhael';
const userPassword = 'admin';
const btnLogin = document.querySelector('.btn-full');
const inputLogin = document.querySelector('#name');
const inputPassword = document.querySelector('#password');

window.onload = function () {
  btnLogin.addEventListener('click', function (event) {
    event.preventDefault();
    if (document.getElementById('name').value === userLogin && document.getElementById('password').value === userPassword) {
      document.location.href = './home.html';
    } else {
      inputLogin.style.border = '2px solid red';
      inputPassword.style.border = '2px solid red';
    }
  });
};

const helloUser = document.querySelector('.user-name');

helloUser.innerHTML = userName;
