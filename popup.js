const btnOpenPopUp = document.querySelector('.open-popup');
const btnClosePopUp = document.querySelector('.close-popup');
const popUp = document.querySelector('.pop-up');
const inputMDP = document.querySelector('.input-mdp');
const container = document.querySelector('.container');

btnOpenPopUp.addEventListener('click', (e) => {
  e.preventDefault();
  popUp.style.display = 'block';
  inputMDP.value = '';
  container.style.opacity = '0.2';
});

btnClosePopUp.addEventListener('click', (e) => {
  e.preventDefault();
  popUp.style.display = 'none';
  container.style.opacity = 'initial';
  alert('Mail de récupération de mot de passe envoyé.');
});
