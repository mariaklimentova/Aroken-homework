export const initSwiper = () => {
  const slides = document.querySelectorAll(".swiper-slide");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const wrapper = document.getElementById("reviews-wrapper");

  if (!wrapper || !slides.length || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  let isDragging = false;
  let startX = 0;
  let scrollLeftStart = 0;

  const scrollToSlide = index => {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }

    const targetSlide = slides[index];
    const slideLeft = targetSlide.offsetLeft;
    const slideWidth = targetSlide.offsetWidth;
    const wrapperWidth = wrapper.offsetWidth;
    const centerPosition = slideLeft - wrapperWidth / 2 + slideWidth / 2;

    const isWrapping =
      (currentIndex === slides.length - 1 && index === 0) ||
      (currentIndex === 0 && index === slides.length - 1);

    const behavior = isWrapping ? "auto" : "smooth";

    wrapper.scrollTo({
      left: Math.max(0, centerPosition),
      behavior: behavior,
    });

    currentIndex = index;
  };

  const onDragStart = e => {
    isDragging = true;
    wrapper.classList.add("dragging");
    wrapper.style.scrollSnapType = "none";
    startX = e.type === "mousedown" ? e.pageX : e.touches[0].pageX;
    scrollLeftStart = wrapper.scrollLeft;
  };

  const onDragMove = e => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.type === "mousemove" ? e.pageX : e.touches[0].pageX;
    const deltaX = currentX - startX;
    wrapper.scrollLeft = scrollLeftStart - deltaX;
  };

  const onDragEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    wrapper.classList.remove("dragging");
    wrapper.style.scrollSnapType = "";

    const wrapperCenter = wrapper.scrollLeft + wrapper.offsetWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(wrapperCenter - slideCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    scrollToSlide(closestIndex);
  };
  prevBtn.addEventListener("click", () => {
    scrollToSlide(currentIndex - 1); //
  });
  nextBtn.addEventListener("click", () => {
    scrollToSlide(currentIndex + 1);
  });

  wrapper.addEventListener("mousedown", onDragStart);
  wrapper.addEventListener("mousemove", onDragMove);
  wrapper.addEventListener("mouseup", onDragEnd);

  wrapper.addEventListener("touchstart", onDragStart, { passive: false });
  (wrapper.addEventListener("touchmove", onDragMove), { passive: false });
  wrapper.addEventListener("touchend", onDragEnd);
 
  const fixFirstClick = () => {
    const originalBehavior = wrapper.style.scrollBehavior;
    wrapper.style.scrollBehavior = "auto";
    wrapper.scrollLeft = wrapper.scrollWidth;
    setTimeout(() => {
      wrapper.scrollLeft = 0;
      wrapper.style.scrollBehavior = originalBehavior;
    }, 10);
  };
  
  if (document.readyState === "complete") {
    fixFirstClick();
  } else {
    window.addEventListener("load", fixFirstClick);
  }
};
