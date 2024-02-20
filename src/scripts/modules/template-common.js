const contentBlock = document.querySelector(".content-block");

if (contentBlock) {
  let tables = contentBlock.getElementsByTagName("table"),
    i,
    wrapper;

  if (tables.length) {
    for (i = 0; i < tables.length; i++) {
      wrapper = document.createElement("div");
      wrapper.setAttribute("class", "table-wrapper");
      tables[i].parentNode.insertBefore(wrapper, tables[i]);
      wrapper.appendChild(tables[i]);
    }
  }

  // let imgs = contentBlock.querySelectorAll("img");

  // if (imgs.length) {
  //   imgs.forEach((img) => {
  //     console.log(img.getAttribute("style"));
  //     if (getComputedStyle(img).float === "left") {
  //       img.style.margin = "0 20px 20px 0";
  //       img.style.maxWidth = "50vw";
  //     }

  //     if (getComputedStyle(img).float === "right") {
  //       img.style.margin = "0 0 20px 20px";
  //       img.style.maxWidth = "50vw";
  //     }
  //   });

  // window.addEventListener("resize", () => {
  //   if (window.innerWidth < 535) {
  //     imgs.forEach((img) => {
  //       if (getComputedStyle(img).float === "left") {
  //         img.style.margin = "0";
  //         img.style.maxWidth = "100%";
  //       }

  //       if (getComputedStyle(img).float === "right") {
  //         img.style.margin = "0";
  //         img.style.maxWidth = "100%";
  //       }
  //     });
  //   } else {
  //     imgs.forEach((img) => {
  //       if (getComputedStyle(img).float === "left") {
  //         img.style.margin = "0 20px 20px 0";
  //         img.style.maxWidth = "50vw";
  //       }

  //       if (getComputedStyle(img).float === "right") {
  //         img.style.margin = "0 0 20px 20px";
  //         img.style.maxWidth = "50vw";
  //       }
  //     });
  //   }
  // });
  // }
}
