function limitStr(elem, str, n) {
  str = str.trim();
  if (str.length > n) {
    elem.parentNode.querySelector(".review-card-btn").style.display = "flex";
    return str.slice(0, n) + "...";
  } else {
    return str;
  }
}

const texts = document.querySelectorAll(".lw-limited-text");

if (texts.length) {
  texts.forEach((text) => {
    text.innerHTML = limitStr(text, text.innerHTML, 300);
  });
}
