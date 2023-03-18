const popUpBtn = document.querySelector('.popup-btn');

popUpBtn.addEventListener('click', () => {
  const popUp = document.createElement('div');
  const popUpText = document.createElement('p');
  popUp.classList.add('popUp');
  popUpText.innerHTML = 'Hello';
  popUp.appendChild(popUpText);
  document.body.appendChild(popUp);
  
});
