const menu = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const navClose = document.querySelector(".close");

menu.addEventListener("click", function () {
  nav.classList.toggle("show-links");
  menu.style.display = "none";
  navClose.style.display = "block";
});

navClose.addEventListener("click", function () {
  nav.classList.toggle("show-links");
  menu.style.display = "block";
  navClose.style.display = "none";
});

window.sr = ScrollReveal();
sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "6rem",
  delay: 300,
  reset: true,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "6rem",
  delay: 300,
  reset: true,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "6rem",
  delay: 300,
  reset: true,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "6rem",
  delay: 300,
  reset: true,
});
