var nav = document.querySelector(".main-nav");
var hamburger = document.querySelector(".menu-toggle");

hamburger.addEventListener("click", function(event) {
  event.preventDefault();
  nav.classList.toggle("main-nav--open");
  hamburger.classList.toggle("menu-toggle--close");
});
