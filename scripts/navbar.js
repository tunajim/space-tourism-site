console.log("connected");

function $(data) {
  return document.getElementById(data);
}

const navButton = document.querySelector(".menu-button");

navButton.addEventListener("mouseup", toggleNav);

function toggleNav(e) {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("active");
  toggleMenuButton(nav);
  toggleScroll(nav);
}

function toggleMenuButton(nav) {
  nav.classList.contains("active")
    ? (navButton.style.backgroundImage =
        "url(./assets/shared/icon-close.svg)")
    : (navButton.style.backgroundImage =
        'url("./assets/shared/icon-hamburger.svg")');
}

function toggleScroll(nav) {
  console.log(nav.classList.contains("active"));
  nav.classList.contains("active")
    ? document.body.style.height = "100vh"
    : document.body.style.height = "auto";
  nav.classList.contains("active")
    ? document.body.style.overflow = "hidden"
    : document.body.style.overflow = "auto";

}

function handleScroll(e) {
    e.preventDefault();
}

window.addEventListener("scroll", handleScroll, {passive: false});
