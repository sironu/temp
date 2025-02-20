document.addEventListener("DOMContentLoaded", () => {
  let span1 = document.querySelector(".animate-welcome1");
  let span2 = document.querySelector(".animate-welcome2");
  let span3 = document.querySelector(".animate-welcome3");
  setInterval(() => {
    span1.classList.toggle("animate__fadeInDownBig");
    span2.classList.toggle("animate__rotateIn");
    span3.classList.toggle("animate__fadeInUpBig");
  }, 5000);
});

let tutorialLinks = document.querySelector(".tutorial-courses");
let tutorialButton = document.querySelector(".tutorial-button");
tutorialButton.addEventListener("click", () => {
  tutorialLinks.classList.toggle("height-10");
   weAreSocial.classList.add("hidden");
});

let courses = document.querySelectorAll(".course");
for (const course of courses) {
  course.onclick = () => tutorialLinks.classList.toggle("height-10", false);
}

let smartCopy = document.querySelector(".smart-copy");
let weAreSocial = document.querySelector(".we-are-social");
let yesButton = document.querySelector(".yes");
yesButton.onclick = () => {
  let copied = document.querySelector(".copied");
  let customCSS = document.querySelector(".custom-css-class2").innerHTML;
  navigator.clipboard.writeText(customCSS);
  copied.innerHTML = "Copied";
  setTimeout(() => {
    cssPage.classList.add("hidden");
    welcome.classList.replace("hidden", "show-welcome");
    smartCopy.classList.remove("height-20");
    weAreSocial.classList.remove("hidden");
  }, 3000);
};

let noButton = document.querySelector(".no");
noButton.onclick = () => {
  setTimeout(() => {
    cssPage.classList.add("hidden");
    welcome.classList.replace("hidden", "show-welcome");
    smartCopy.classList.remove("height-20");
     weAreSocial.classList.remove("hidden");
  }, 2000);
};

let welcome = document.querySelector(".welcome");
let customCssButton = document.querySelector(".custom-css");
let cssPage = document.querySelector(".css-page");
customCssButton.addEventListener("click", () => {
  welcome.classList.replace("show-welcome", "hidden");
  cssPage.classList.remove("hidden");
  setTimeout(() => {
    smartCopy.classList.add("height-20");
  }, 3000);
});

let exampleButton = document.querySelector(".example-button");
exampleButton.addEventListener("click", () => {
  let example = document.querySelector(".example-css").innerHTML;
  navigator.clipboard.writeText(example);
});
