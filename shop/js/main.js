import { closeBanner } from "./offer-banner.js";
import { initMobileMenu, initShopsMenu } from "./burger.js";
import { openSearch } from "./search.js";
import { initSwiper } from "./swiper.js";

document.addEventListener("DOMContentLoaded", () => {
  closeBanner();
  initMobileMenu();
  initShopsMenu();
  openSearch();
  initSwiper();
});
