(() => {
  const mmm = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    Menu: document.querySelector("[data-menu]"),
  };

  mmm.openMenuBtn.addEventListener("click", toggleMenu);
  mmm.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    mmm.Menu.classList.toggle("is-hidden");
  }
})();

