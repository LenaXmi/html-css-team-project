(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileBtnClose = document.querySelector("[data-menu-close]");

    menuBtnRef.addEventListener("click", () => {
        mobileMenuRef.classList.toggle("is-open");
        menuBtnRef.classList.toggle("is-active");
    });

    mobileBtnClose.addEventListener("click", () => {
        mobileMenuRef.classList.toggle("is-open");
        menuBtnRef.classList.toggle("is-active");
    });
})();