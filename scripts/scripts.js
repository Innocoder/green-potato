document.getElementsByClassName("year").innerText = new Date().getFullYear();
document.getElementById("year").innerHTML = new Date().getFullYear();

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});
