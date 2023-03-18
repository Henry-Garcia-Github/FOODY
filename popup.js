// function popUp(string) {
//   const popUp = document.createElement('div');
//   const popUpText = document.createElement('p');
//   popUp.classList.add('popUp');
//   popUpText.innerHTML = string;
//   popUp.appendChild(popUpText);
//   document.body.appendChild(popUp);
// }

const popUpBtn = document.querySelector('.popup-btn');

popUpBtn.addEventListener('click', () => {
  alert('Hello World');
});
