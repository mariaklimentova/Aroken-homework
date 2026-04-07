import { closeBanner } from "./offer-banner.js";
import { initMobileMenu } from "./burger.js";
import { openSearch } from "./search.js";
import { swiper } from "./swiper.js";

document.addEventListener("DOMContentLoaded", () => {
  closeBanner();
  initMobileMenu();
  openSearch();
  swiper();
});





