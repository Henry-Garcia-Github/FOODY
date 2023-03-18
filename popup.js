const btnOpenPopUp = document.querySelector('.open-popup');
const btnClosePopUp = document.querySelector('.close-popup');
const popUp = document.querySelector('.pop-up');
const inputMDP = document.querySelector('.input-mdp');
const container = document.querySelector('.container');
const popUpText = document.querySelector('.pop-up h3');

function popUpClose() {
  popUp.style.display = 'none';
}

btnOpenPopUp.addEventListener('click', (e) => {
  e.preventDefault();
  popUp.style.display = 'block';
  inputMDP.value = '';
  container.style.opacity = '0.2';
});

btnClosePopUp.addEventListener('click', (e) => {
  e.preventDefault();
  inputMDP.style.display = 'none';
  btnClosePopUp.style.display = 'none';
  popUpText.innerHTML = 'Mail de récupération de mot de passe envoyé';
  container.style.opacity = 'initial';
  setTimeout(popUpClose, 3000);
});
