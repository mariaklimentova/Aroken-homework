export const openSearch = () => {
  const headerSearchForm = document.getElementById("header__search-form");
  const headerSearchBth = document.getElementById("header__search-bth");
  const headerLogo = document.getElementById("header__logo");
  const headerSearchWrapper = document.getElementById("header__search-wrapper");

  headerSearchBth.addEventListener("click", () => {
    headerSearchForm.classList.toggle("header__search-form--open");
    headerSearchForm.classList.toggle("header__search-form--close");
    headerLogo.classList.toggle("header__logo--close");
    headerSearchWrapper.classList.toggle("header__search-wrapper--search");
  });
};
