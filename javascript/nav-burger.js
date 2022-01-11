const burgerMenu = document.getElementById("hamburger");
const navMenu = document.getElementById("nav_menu");
const main = document.querySelector("main");
burgerMenu.addEventListener("click", mobileMenu); //gør burgermenuen klikbart

function mobileMenu() {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  main.classList.toggle("active");
} //toggler mellem åbent og lukket

const navLink = document.querySelectorAll(".nav_link");
navLink.forEach((n) => n.addEventListener("click", closeMenu)); //giver hvert links under menuen en eventlistener der lytter på klik, hænger sammen med funktionen nedenunder
function closeMenu() {
  //fjerner klassen "active" når man klikker på et link, altså menuen lukker når man går til en anden side
  burgerMenu.classList.remove("active");
  navMenu.classList.remove("active");
}
