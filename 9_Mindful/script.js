bars.addEventListener("click", () => {
  bars.classList.toggle("fa-x");
  mainMenu.classList.toggle("-translate-x-[100%]");
});

var swiper2 = new Swiper(".testimonial", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
}); 