function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const aboutParagraphs = document.querySelectorAll("#about-text p");

aboutParagraphs.forEach((paragraph) => {
    const letters = paragraph.textContent.split("");
    paragraph.innerHTML = "";

    letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.classList.add("hidden-letter");
        paragraph.appendChild(span);


        span.addEventListener("mouseenter", function () {
            span.style.color = getRandomColor();
            span.style.fontSize = "26px";
            span.style.padding = "0 2px";
            span.style.opacity = "1";
            span.classList.remove("hidden-text");

        });

        span.addEventListener("mouseleave", function () {
            span.style.color = getRandomColor();
            span.style.fontSize = "";
            span.style.padding = "0";
            span.style.fontFamily = ""
            span.style.opacity = "0";
            span.classList.add("hidden-text");
        });
    });
});


const wellingtonText = document.getElementById("wellingtonNZ");
const mapContainer = document.getElementById("mapContainer");

wellingtonText.addEventListener("mouseenter", () => {
    mapContainer.style.display = "block";
});

wellingtonText.addEventListener("mouseleave", () => {
    mapContainer.style.display = "none";
});


$(document).ready(function () {
  var nav = $("nav");
  var body = $("body");
  var main = $("main");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= nav.height()) {
      nav.addClass("nav-fixed");
      body.addClass("nav-fixed");
      main.addClass("nav-fixed");
    } else {
      nav.removeClass("nav-fixed");
      body.removeClass("nav-fixed");
      main.removeClass("nav-fixed");
    }
  });
});




