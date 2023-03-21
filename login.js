const userLogin = "admin@foody.com";
const userPassword = "admin";
const btnLogin = document.querySelector(".btn btn-full");

btnLogin.addEventListener('click', function(){
if((document.getElementById('name') == userLogin) && (document.getElementById('password') == userPassword)) {
    document.location.href="home.html"
}})