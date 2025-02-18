let span1 = document.querySelector('.animate-welcome1')
let span2 = document.querySelector('.animate-welcome2')
let span3 = document.querySelector('.animate-welcome3')
let welcome = document.querySelector(".welcome");
document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    span1.classList.toggle("animate__fadeInUpBig");
    span2.classList.toggle("animate__fadeInDownBig");
    span3.classList.toggle("animate__fadeInUpBig");
    welcome.classList.toggle("bg");

  }, 5000);
});
