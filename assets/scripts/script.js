const button = document.getElementById("toggle-dark-mode");
const elements = document.querySelectorAll("html *");
const span = button.querySelector("span");

const init = function () {
  if (localStorage.getItem("darkMode") === "true") {
    elements.forEach((element) => {
      element.classList.add("dark");
    });
    span.innerHTML = "light_mode";
    button.setAttribute("data-mode", "dark");
  }
};

button.addEventListener("click", function () {
  elements.forEach((element) => {
    element.classList.toggle("dark");
  });
  
  if (button.getAttribute("data-mode") === "dark") {
    span.innerHTML = "dark_mode";
    document.getElementById("toggle-dark-mode").setAttribute("title", "Switch to dark mode");
    button.setAttribute("data-mode", "light");
    localStorage.setItem("darkMode", false);
  } else {
    span.innerHTML = "light_mode";
    document.getElementById("toggle-dark-mode").setAttribute("title", "Switch to light mode");
    button.setAttribute("data-mode", "dark");
    localStorage.setItem("darkMode", true);
  }
});

init();

const toggleButton = document.getElementById("toggle-menu");
const navigationMenu = document.querySelector(".navigation-menu");
const toggleSpan = toggleButton.querySelector("span");
const darkModeButton = document.getElementById("toggle-dark-mode");
const darkModeSpan = darkModeButton.querySelector("span");

toggleButton.addEventListener("click", function() {
  if (navigationMenu.style.display === "flex") {
    navigationMenu.style.display = "none";
    toggleSpan.innerHTML = "menu";
    document.getElementById('top-bar').style.zIndex = "0";
  } else {
    navigationMenu.style.display = "flex";
    toggleSpan.innerHTML = "menu_open";
    document.getElementById('top-bar').style.zIndex = "-1";
  }
});

document.addEventListener("click", function(event) {
  if (event.target !== toggleButton && event.target !== toggleSpan && event.target !== navigationMenu && event.target !== darkModeButton && event.target !== darkModeSpan && navigationMenu.style.display === "flex") {
    navigationMenu.style.display = "none";
    toggleSpan.innerHTML = "menu";
  }
});

const hero = document.querySelector('.hero');
const imageUrls = ['assets/images/image2.jpg', 'assets/images/image3.jpg', 'assets/images/image1.jpeg'];
let currentImageIndex = 0;

setInterval(function() {
  hero.style.backgroundImage = `url(${imageUrls[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}, 5000);