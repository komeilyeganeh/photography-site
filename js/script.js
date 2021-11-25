/* script slider - swiper js */
var swiper = new Swiper(".swiper", {
    loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


/* open/close menu mobile */
let bars = document.querySelector(".header .navbar i.fa-bars");
let times = document.querySelector(".navbar-mobile .navbar i.fa-times");
bars.onclick = () => {
    document.querySelector(".navbar-mobile").classList.toggle("active");
}
times.onclick = () => {
    document.querySelector(".navbar-mobile").classList.remove("active");
}