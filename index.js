const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".nav");

mobile_nav.addEventListener('click', () => {
  nav_header.classList.toggle("active");
});