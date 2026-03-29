$("document").ready(() => {
  $(".navbar-toggler").click(() => {
    $(".navbar-toggler ").toggleClass("activeshow");
  });
});

/*Gallery-section */

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
