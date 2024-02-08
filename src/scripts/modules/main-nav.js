const nav = document.querySelector(".main-nav");

if (nav) {
  const navItems = nav.querySelectorAll(
    ".main-nav__list-item:not(.main-nav__list-item-nested)"
  );

  const nestedNavItem = nav.querySelector(".main-nav__list-item-nested");
  const nestedNavList = nestedNavItem.querySelector("ul");

  const navItemsMenu = nav.querySelector(".main-nav__list-item-nested");
  const navContainer = document.querySelector(".main-header__section--nav");

  const fillNavItems = () => {
    const navContainerWidth = navContainer.getBoundingClientRect().width;
    let itemsTotalWidth = 0;

    navItems.forEach((item) => {
      item.classList.contains("desktop-hidden")
        ? item.classList.remove("desktop-hidden")
        : null;
    });

    const nestedNavListItems = nestedNavList.querySelectorAll("li");
    nestedNavListItems.forEach((item) => {
      item.remove();
    });

    !navItemsMenu.classList.contains("desktop-hidden")
      ? navItemsMenu.classList.add("desktop-hidden")
      : null;

    for (let i = 0; i < navItems.length; i++) {
      const item = navItems[i];
      itemsTotalWidth += item.getBoundingClientRect().width;

      if (navContainerWidth - 40 < itemsTotalWidth) {
        item.classList.add("desktop-hidden");

        navItemsMenu.classList.contains("desktop-hidden")
          ? navItemsMenu.classList.remove("desktop-hidden")
          : null;

        let itemClone = item.cloneNode(true);
        itemClone.classList.remove("desktop-hidden");

        if (!nestedNavList.contains(itemClone)) {
          nestedNavList.appendChild(itemClone);
        }
      }
    }
  };

  fillNavItems();

  window.addEventListener("resize", fillNavItems);

  nestedNavItem.addEventListener("click", () => {
    nestedNavList.style.display = "block";
  });
}
