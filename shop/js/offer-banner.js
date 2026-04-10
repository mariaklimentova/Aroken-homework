export const closeBanner = () => {
  const closeBtnBanner = document.getElementById("closeBtn");
  const banner = document.getElementById("myModal");

  if (closeBtnBanner && banner) {
    const closeHandler = () => {
      banner.classList.add("offer-banner--close");
    };
    
    closeBtnBanner.addEventListener("click", closeHandler);
    closeBtnBanner.addEventListener("touchstart", closeHandler);
  }
};
