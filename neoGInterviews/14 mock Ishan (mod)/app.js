const inputOne = document.querySelector("#inputOne");
const inputTwo = document.querySelector("#inputTwo");
const add = document.querySelector("#addition");
const sub = document.querySelector("#substraction");
const mul = document.querySelector("#multiplication");
const div = document.querySelector("#division");
const output = document.querySelector("#output");

add.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  clickHandler(inputOne.value, inputTwo.value, e.target.innerText);
});
sub.addEventListener("click", (e) => {
  clickHandler(inputOne.value, inputTwo.value, e.target.innerText);
});
mul.addEventListener("click", (e) => {
  clickHandler(inputOne.value, inputTwo.value, e.target.innerText);
});
div.addEventListener("click", (e) => {
  clickHandler(inputOne.value, inputTwo.value, e.target.innerText);
});
function clickHandler(inputValue, inputValueTwo, buttonText) {
  if (buttonText === "addition") {
    output.innerText = Number(inputValue) + Number(inputValueTwo);
  } else if (buttonText === "substraction") {
    output.innerText = Number(inputValue) - Number(inputValueTwo);
  } else if (buttonText === "multiplication") {
    output.innerText = Number(inputValue) * Number(inputValueTwo);
  } else {
    output.innerText = Number(inputValue) / Number(inputValueTwo);
  }
}
