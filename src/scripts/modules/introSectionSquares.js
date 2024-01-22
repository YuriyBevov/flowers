const container = document.querySelector(".features__container");

if (container) {
  const COUNT = 3;

  const squareBox = document.createElement("div");
  squareBox.classList.add("square-box");

  for (let i = 0; i < COUNT; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    squareBox.append(square);
  }

  container.append(squareBox);
}
