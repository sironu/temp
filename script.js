let copyContainer = document.querySelector("#show-hide-container");

let welcome = document.querySelector(".welcome");
let css = document.querySelector(".css");
let cssButton = document.querySelector(".css-button");
cssButton.onclick = function showCssPage() {
  welcome.classList.add("welcome", "welcome2");
  copyContainer.classList.replace("copy-container", "copy-container2");
  css.classList.remove("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
  let span1 = document.querySelector(".animate-welcome1");
  let span2 = document.querySelector(".animate-welcome2");
  let span3 = document.querySelector(".animate-welcome3");

  let cssButton = document.querySelector(".css-button");
  setInterval(() => {
    span1.classList.toggle("animate__fadeInDownBig");
    span2.classList.toggle("animate__rotateIn");
    span3.classList.toggle("animate__fadeInUpBig");
    welcome.classList.toggle("bg");
  }, 5000);
});

//copy text function
let button = document.querySelector(".copy-btn");
button.addEventListener("click", () => {
  let textToCopy = document.querySelector(".text-to-copy").innerHTML;
  // Copy text to the clipboard
  navigator.clipboard.writeText(textToCopy);
  button.innerHTML = "Copied";
  welcome.classList.replace("welcome2", "welcome");
  css.classList.add("hidden");
    copyContainer.classList.replace("copy-container2", "copy-container");
});
