const loaders = document.getElementById("loaders");

window.addEventListener("load", () => {
  loaders.classList.add("loading-none");
});

// or

const loers = document.getElementById("loaders");

const loadersDuration = 12000; // 12s

setTimeout(() => {
  loaders.classList.add("loading-none");
}, loadersDuration);

const hamburger = document.querySelector(".btn-toogle");
const navLink = document.querySelector(".navbar-responsive");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hide");
  navLink.classList.toggle("hide");
});
