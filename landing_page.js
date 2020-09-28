// Menu Toggle

function menuToggle() {
  var nav = document.getElementById("menu-overlay");
  nav.classList.toggle("active");

  var nav = document.getElementById("toggleIcon");
  nav.classList.toggle("active");
}

// Type Words

//Grabs the spans and sets them to an array of words
const words = document.querySelector(".words").children;
// Sets output to span typewords
const output = document.querySelector(".typeWords");

//setting default values
let wordIndex = 0;
let charIndex = 0;
let textArray;

// sets value of const 'text' to an array that contains the children of the span "words" from the HTML element. This is split by individual letters. I.E. ["E", "X", "A", "M", "P", "L", "E"]. Finally we will run the typing function.
function type() {
  const text = words[wordIndex].getAttribute("data-text");
  textArray = text.split("");
  output.innerHTML = "";
  typing();
}

// This is what types out our letters and outputs them onto the page. We start by creating a span and setting the value to the index of the textArray we are currently on. We then append the typeWords span with the current value of the createed span. We will then incrament the span by 1. We then can create a for loop and say "if the length of the created span is the same as the textArray then we can move onto the next step." The next loop checks to see if the word we are outputting is the last word from the child of the HTML element "words". If it is the word index is reset, if not we just move onto the next word and move on.
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

// Loads on window load
window.onload = type();
