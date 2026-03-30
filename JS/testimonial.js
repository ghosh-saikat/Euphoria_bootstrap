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
// testimonial-review-swiper

// const swiper = new Swiper(".swiper", {
//   virtual: {
//     slides: ["test-card", "test-card", "test-card", "test-card", "test-card"],
//   },
// })();

// const swiper = Swiper(".swiper", {
//   virtual: {
//     enabled: true,
//   },
// });

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// /////////////////////////////
var swiper = new mySwiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
