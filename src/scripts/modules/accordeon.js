const accordeons = document.querySelectorAll(".accordeon");

if (accordeons) {
  const onClickExpandItem = (evt) => {
    const target = evt.currentTarget;

    const items = target
      .closest(".accordeon")
      .querySelectorAll(".accordeon-item");

    items.forEach((item) => {
      if (item !== target.parentNode && item.classList.contains("expanded")) {
        item.classList.remove("expanded");
      }
    });

    !target.parentNode.classList.contains("expanded")
      ? target.parentNode.classList.add("expanded")
      : null;
  };

  accordeons.forEach((accordeon) => {
    const expanders = accordeon.querySelectorAll(".accordeon-item-header");

    expanders.forEach((expander) => {
      expander.addEventListener("click", onClickExpandItem);
    });
  });
}
