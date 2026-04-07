export const swiper = () => {
  const swiperSlide = document.querySelectorAll(".swiper-slide");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentIndex = 0;

  function scrollToSlide(index) {
    if (index < 0) {
      index = swiperSlide.length - 1;
    } else if (index >= swiperSlide.length) {
      index = 0;
    }

    swiperSlide[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });

    currentIndex = index;
  }

  prevBtn.addEventListener("click", () => {
    scrollToSlide(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    scrollToSlide(currentIndex + 1);
  });
};
