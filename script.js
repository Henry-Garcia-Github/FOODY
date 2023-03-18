const welcomeLinkRedirect = document.querySelector('.link-redirect');

const mediaQueryMin = window.matchMedia('(max-width: 768px)');

if (mediaQueryMin.matches) {
  welcomeLinkRedirect.href = './login.html';
} else {
  welcomeLinkRedirect.href = './home.html';
}

function popUp(string){
const popUp = document.createElement('div');
const popUpText = document.createElement('p');
popUp.classList.add('popUp');
popUpText.innerHTML = string;
popUp.appendChild(popUpText);
document.body.appendChild(popUp);
}

//const passwordLink = document.querySelector('.mdp');
//passwordLink.addEventListener('onclick',function(){
//  alert('test')
//});

popUp(test)