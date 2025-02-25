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

let tutorialLinks = document.querySelectorAll(".tutorial-courses");

let tutorialButton = document.querySelector(".tutorial-button");
tutorialButton.addEventListener("click", () => {
  for (let tutorialLink of tutorialLinks) {
    tutorialLink.classList.toggle("height-10");
  }
  weAreSocial.classList.add("hidden");
  footer.classList.replace("height-15", "height-20");
});

let courses = document.querySelectorAll(".course");
for (const course of courses) {
  course.addEventListener("click", () => {
    for (let tutorialLink of tutorialLinks) {
      tutorialLink.classList.toggle("height-10", false);
    }
  });
}

let smartCopy = document.querySelector(".smart-copy");
let footer = document.querySelector("footer");
let weAreSocial = document.querySelector(".we-are-social");

let yesButton = document.querySelector(".yes");
yesButton.addEventListener("click", () => {
  let copied = document.querySelector(".copied");
  let customCSS = document.querySelector(".custom-css-class2").innerHTML;
  navigator.clipboard.writeText(customCSS);
  copied.innerHTML = "Copied";
  setTimeout(() => {
    cssPage.classList.add("hidden");
    welcome.classList.replace("hidden", "show-welcome");
    smartCopy.classList.remove("height-20");
    weAreSocial.classList.remove("hidden");
    footer.classList.replace("height-20", "height-15");
  }, 3000);
});

let noButton = document.querySelector(".no");
noButton.onclick = () => {
  setTimeout(() => {
    cssPage.classList.add("hidden");
    welcome.classList.replace("hidden", "show-welcome");
    smartCopy.classList.remove("height-20");
    weAreSocial.classList.remove("hidden");
  }, 2000);
};

let editorContainer = document.querySelector(".editor-container");

let editorButton = document.querySelector(".editor-button");
editorButton.addEventListener("click", () => {
  editorContainer.classList.remove("hidden");
  welcome.classList.replace("show-welcome", "hidden");
});

/*

document.addEventListener('DOMContentLoaded', () => {
  let newsletter = document.querySelector(".newsletter");
setTimeout(() => {
  
  newsletter.classList.add("animate__fadeInDownBig");
   newsletter.classList.remove("hidden");
},15000);
setTimeout(() => {
   newsletter.classList.replace(
     "animate__fadeInDownBig",
     "animate__fadeOutDownBig"
   );
},30000);
setTimeout(() => {
   newsletter.classList.add('hidden');
}, 35000);
})
*/

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

var j = 0;
//Function for live Rendering
function update(i) {
  if (i == 0) {
    let htmlCode = document.getElementById("htmlCode").value;
    let cssCode = document.getElementById("cssCode").value;
    let javascriptCode = document.getElementById("javascriptCode").value;
    let text =
      htmlCode +
      "<style>" +
      cssCode +
      "</style>" +
      "<scri" +
      "pt>" +
      javascriptCode +
      "</scri" +
      "pt>";

    let iframe = document.getElementById("viewer").contentWindow.document;
    iframe.open();
    iframe.write(text);
    iframe.close();
  } else if (i == 1) {
    let htmlCode = document.getElementById("htmlCode").value;
    let html = htmlCode.slice(0, htmlCode.length);
    document.getElementById("htmlCode").value = html;
    j = 1;
  }
}

let switchButtons = document.querySelectorAll(".switch-buttons");
for (let switchButton of switchButtons) {
  switchButton.addEventListener("click", () => {
    if (switchButton.classList.contains("html-button")) {
      document.querySelector(".html-container").classList.remove("hidden");
      document.querySelector(".css-container").classList.add("hidden");
      document.querySelector(".js-container").classList.add("hidden");
    }
    if (switchButton.classList.contains("css-button")) {
      document.querySelector(".html-container").classList.add("hidden");
      document.querySelector(".css-container").classList.remove("hidden");
      document.querySelector(".js-container").classList.add("hidden");
    }
    if (switchButton.classList.contains("js-button")) {
      document.querySelector(".html-container").classList.add("hidden");
      document.querySelector(".css-container").classList.add("hidden");
      document.querySelector(".js-container").classList.remove("hidden");
    }
  });
}
