const searchOpener = document.querySelector(".search-block-opener");

if (searchOpener) {
  const searchBlock = document.querySelector(".search-block");
  const searchCloser = document.querySelector(".search-block-closer");

  const onClickToggleSearchBlock = () => {
    searchBlock.classList.toggle("expanded");
  };

  searchOpener.addEventListener("click", onClickToggleSearchBlock);
  searchCloser.addEventListener("click", onClickToggleSearchBlock);
}
