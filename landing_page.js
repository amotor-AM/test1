// Menu Toggle

function menuToggle() {
  var nav = document.getElementById("menu-overlay");
  nav.classList.toggle("active");

  var nav = document.getElementById("toggleIcon");
  nav.classList.toggle("active");
}

const words = document.querySelector(".words").children;
const output = document.querySelector(".typeWords");

let wordIndex = 0;
let charIndex = 0;
let textArray;

function type() {
  const text = words[wordIndex].getAttribute("data-text");
  textArray = text.split("");
  output.innerHTML = "";
  typing();
}

function typing() {
  if (charIndex == textArray.length) {
    charIndex = 0;
    if (wordIndex == words.length - 1) {
      wordIndex = 0;
    } else {
      wordIndex++;
    }
    setTimeout(function () {
      type();
    }, 1000);
  } else {
    span = document.createElement("span");
    span.innerHTML = textArray[charIndex];
    output.appendChild(span);
    charIndex++;
    setTimeout(typing, 100);
  }
}

window.onload = type();
