const welcomeLinkRedirect = document.querySelector('.link-redirect');

const mediaQueryMin = window.matchMedia('(max-width: 768px)');

if (mediaQueryMin.matches) {
  welcomeLinkRedirect.href = './login.html';
} else {
  welcomeLinkRedirect.href = './home.html';
}
