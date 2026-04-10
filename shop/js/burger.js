export const initMobileMenu = () => {
  const menu = document.getElementById("header__menu");
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const burgerMenuIcon = document.getElementById("burger__menu-icon");
  const burgerMenuCross = document.getElementById("burger__menu-cross");
  const bodyPage = document.getElementById("body-page");

  const toggleMenu = () => {
    menu.classList.toggle("header__menu--open");
    burgerMenuIcon.classList.toggle("burger--close");
    burgerMenuCross.classList.toggle("burger--close");
    bodyPage.classList.toggle("page__body--no-scroll");
  };

  menuToggleBtn.addEventListener("click", toggleMenu);

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

export const initShopsMenu = () => {
  const shopsBtn = document.getElementById("shops-btn");
  const shopsLink = document.getElementById("shops-link");
  const shopsWrapper = document.getElementById("shops-wrapper");

  const toggleShopsList = () => {
    shopsWrapper.classList.toggle("header__shops-list-wrapper--visible");
    shopsWrapper.classList.toggle("header__shops-list-wrapper");
    shopsBtn.classList.toggle("header__menu-item-more--visible");
  };

  const handleClickOutside = event => {
    const isClickInside =
      shopsWrapper.contains(event.target) ||
      shopsBtn.contains(event.target) ||
      shopsLink.contains(event.target);

    if (
      !isClickInside &&
      shopsWrapper.classList.contains("header__shops-list-wrapper--visible")
    ) {
      toggleShopsList();
    }
  };

  shopsBtn.addEventListener("click", toggleShopsList);
  shopsLink.addEventListener("click", toggleShopsList);
  document.addEventListener("click", handleClickOutside);

  const hoverBtnShop = state => {
    shopsBtn.classList.toggle("hover", state);
    shopsLink.classList.toggle("hover", state);
  };

  [shopsBtn, shopsLink].forEach(el => {
    el.addEventListener("mouseenter", () => hoverBtnShop(true));
    el.addEventListener("mouseleave", () => hoverBtnShop(false));
  });
};
