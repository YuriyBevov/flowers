const containers = document.querySelectorAll(".catalog-tile-card__top");

if (containers) {
  const COUNT = 3;

  containers.forEach((container) => {
    const squareBox = document.createElement("div");
    squareBox.classList.add("catalog-tile-card-square-box");

    for (let i = 0; i < COUNT; i++) {
      const square = document.createElement("div");
      square.classList.add("catalog-tile-card-square");
      squareBox.append(square);
    }

    container.append(squareBox);
  });
}
