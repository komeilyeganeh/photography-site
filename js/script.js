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
  let navMobile = document.querySelector(".navbar-mobile");
  navMobile.classList.toggle("active");
  if (navMobile.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  }
};
times.onclick = () => {
  document.querySelector(".navbar-mobile").classList.remove("active");
  document.body.style.overflow = "auto";
};

let el = document.querySelectorAll(".navbar-mobile ul li");
el.forEach((e) => {
  e.onclick = () => {
    e.querySelector("ul.submenu").classList.toggle("active");
  };
});


/* modal image - gallery page */
let btnCloseModal = document.querySelector(".btn-close-modal");
let images = document.querySelectorAll(".gallery-item img");
const modal = document.querySelector(".modal-image");
const modalImg = document.querySelector(".modal-image img");
images.forEach( (img) => {
  img.addEventListener("click", (e) => {
    let src = e.currentTarget.attributes['data-img'].value;
    modal.classList.add("active");
    modalImg.setAttribute("src", "../images/" + src);
  });
});
btnCloseModal.onclick = () => {
  modal.classList.remove("active");
}
/* modal image - gallery page */
