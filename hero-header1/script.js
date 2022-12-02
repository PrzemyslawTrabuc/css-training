console.log("JavaScript execute!");

var hero = document.querySelector("#hero");
var header = document.querySelector(".header");
var mobileToggle = document.querySelector(".menu__toggle");
var menu = document.querySelector(".menu__items");
var avatar = document.querySelector("#avatar");

const toggleResponsiveHeader = () => {
  if (hero.clientWidth <= 1227) {
    header.classList.add("responsive");
    mobileToggle.classList.remove("hidden");
    menu.classList.add("mobile__menu");
    console.log("mobile");
  }
  if (hero.clientWidth > 1227) {
    header.classList.remove("responsive");
    mobileToggle.classList.add("hidden");
    menu.classList.remove("mobile__menu");
    console.log("desktop");
  }
};

toggleResponsiveHeader();
window.addEventListener("resize", function (event) {
  toggleResponsiveHeader();
});

mobileToggle.addEventListener("click", function (event) {
  console.log(menu.classList.contains("mobile__menu"));
  if (menu.classList.contains("visible")) {
    mobileToggle.innerHTML = `<i class="fa-xl fa fa-bars"></i>`;
    menu.classList.remove("visible");
    mobileToggle.style.position = "absolute";
    document.body.style.position = "static";
    document.body.style.width = "";
    return;
  }
  menu.classList.add("visible");
  mobileToggle.innerHTML = `<i class="fa-xl fa-solid fa-xmark"></i>`;
  document.body.style.position = "fixed";
  document.body.style.width = "100vw";
});

const options = {
  threshold: 0.15,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (
      entry.isIntersecting &&
      !entry.target.classList.contains("animation__slideTop")
    ) {
      entry.target.style.visibility = "visible";
      entry.target.classList.add("animation__slideTop");
    }
  });
};

var observer = new IntersectionObserver(callback, options);
observer.observe(avatar);
