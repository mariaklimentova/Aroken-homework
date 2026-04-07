export const reviewsSlider = () => {
  new Swiper(".reviews__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      // prevEl: ".swiper-button-prev",
      // nextEl: ".swiper-button-next",
      prevEl: ".reviews__arrow-btn--left",
      nextEl: ".reviews__arrow-btn--right",
    },
  });
};
