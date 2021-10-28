// Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.

const text = document.querySelector("#text");
const twoPlus = document.querySelector("#increase");
const twoMin = document.querySelector("#decrease");
const output = document.querySelector("#output");
const addText = document.querySelector("#addText");
let pixel = 18;

addText.addEventListener("click", () => {
  let textInput = text.value;
  output.innerText = textInput;
  console.log(textInput);
});

twoPlus.addEventListener("click", () => {
  pixel = pixel + 2;
  output.style.fontSize = pixel + "px";
});

twoMin.addEventListener("click", () => {
  pixel = pixel - 2;
  output.style.fontSize = pixel + "px";
});
