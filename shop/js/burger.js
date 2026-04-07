export const initMobileMenu = () => {
  const menu = document.getElementById("header__menu");
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const burgerMenuIcon = document.getElementById("burger__menu-icon");
  const burgerMenuCross = document.getElementById("burger__menu-cross");
  const bodyPage = document.getElementById("body-page");
  const shopsBtn = document.getElementById("shops-btn");
  const shopsWrapper = document.getElementById("shops-wrapper");

  const toggleMenu = () => {
    menu.classList.toggle("header__menu--open");
    burgerMenuIcon.classList.toggle("burger--close");
    burgerMenuCross.classList.toggle("burger--close");
    bodyPage.classList.toggle("page__body--no-scroll");
  };
  const toggleShopsList = () => {
    shopsWrapper.classList.toggle("header__shops-list-wrapper--visible");
    shopsWrapper.classList.toggle("header__shops-list-wrapper");
    shopsBtn.classList.toggle("header__menu-item-more--visible");
  };

  menuToggleBtn.addEventListener("click", toggleMenu);
  shopsBtn.addEventListener("click", toggleShopsList);

  document.addEventListener("click", event => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnToggleBtn = menuToggleBtn.contains(event.target);

    if (
      !isClickInsideMenu &&
      !isClickOnToggleBtn &&
      menu.classList.contains("header__menu--open")
    ) {
      menu.classList.remove("header__menu--open");
    }
  });

  document.addEventListener("keydown", event => {
    if (
      event.key === "Escape" &&
      menu.classList.contains("header__menu--open")
    ) {
      menu.classList.remove("header__menu--open");
    }
  });
};
