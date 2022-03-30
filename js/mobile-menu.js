(() => {
  const expo = {
    openMenuBtn: document.querySelector(".data-menu-open"),
    closeMenuBtn: document.querySelector(".data-menu-close"),
    Menu: document.querySelector(".data-menu"),
  };

  expo.openMenuBtn.addEventListener("click", toggleMenu);
  expo.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    expo.Menu.classList.toggle("is-hidden");
  }
})();

