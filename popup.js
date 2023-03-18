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
  if (inputMDP.value !== '') {
    inputMDP.style.display = 'none';
    btnClosePopUp.style.display = 'none';
    popUpText.innerHTML = 'Mail de récupération de mot de passe envoyé';
    setTimeout((container.style.opacity = 'initial'), 3000);
    container.style.opacity = 'initial';
    setTimeout(popUpClose, 3000);
  } else {
    inputMDP.style.border = '2px solid red';
    inputMDP.placeholder = 'Renseignez une adresse email valide';
    inputMDP.classList.toggle('shake');
  }
});
