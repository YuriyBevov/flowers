import { bodyLocker } from "../utils/functions";
const nav = document.querySelector(".main-nav");

if (nav) {
  const opener = nav.querySelector(".main-nav-opener");
  const closer = nav.querySelector(".main-nav-closer");

  const onClickOpenNav = () => {
    bodyLocker(true);
    nav.classList.add("expanded");

    opener.removeEventListener("click", onClickOpenNav);
    closer.addEventListener("click", onCloserBtnClickCloseNav);
    document.addEventListener("click", onOverlayClickCloseNav);
    window.addEventListener("keydown", onEscBtnCloseNav);
  };

  const closeNav = () => {
    bodyLocker(false);
    nav.classList.remove("expanded");

    opener.addEventListener("click", onClickOpenNav);
    closer.removeEventListener("click", onCloserBtnClickCloseNav);
    document.removeEventListener("click", onOverlayClickCloseNav);
    window.removeEventListener("keydown", onEscBtnCloseNav);
  };

  const onCloserBtnClickCloseNav = () => {
    closeNav();
  };

  const onOverlayClickCloseNav = (evt) => {
    if (evt.target === nav) {
      closeNav();
    }
  };

  const onEscBtnCloseNav = (evt) => {
    if (evt.code === "Escape" || evt.code === "27") {
      closeNav();
    }
  };

  opener.addEventListener("click", onClickOpenNav);
}

const expanders = document.querySelectorAll(".main-nav-expand-btn");

if (expanders) {
  const onClickExpandItem = (evt) => {
    const target = evt.currentTarget;

    const expandedItem = document.querySelector(
      ".main-nav__inner-list-wrapper.expanded"
    );

    if (!expandedItem) {
      target.nextElementSibling.classList.add("expanded");
    } else {
      expandedItem.classList.remove("expanded");
    }
  };
  expanders.forEach((expander) => {
    expander.addEventListener("click", onClickExpandItem);
  });
}
