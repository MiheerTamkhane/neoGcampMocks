const buttonInc = document.querySelector("#increment");
const buttonDec = document.querySelector("#decrement");
const buttonReset = document.querySelector("#reset");
const output = document.querySelector("#output");

let count = 0;

function incrementByOne() {
  count++;
  if (count % 3 === 0) {
    output.style.color = "red";
  } else if (count % 5 === 0) {
    output.style.color = "green";
  } else {
    output.style.color = "black";
  }

  output.innerText = count;
  buttonDec.disabled = false;
}
buttonInc.addEventListener("click", incrementByOne);

function resetAll() {
  count = 0;
  output.innerText = count;
  buttonDec.disabled = true;
}
buttonReset.addEventListener("click", resetAll);

function decrementByOne() {
  if (count > 0) {
    count--;
    if (count === 0) {
      output.style.color = "black";
    } else if (count % 3 === 0) {
      output.style.color = "red";
    } else if (count % 5 === 0) {
      output.style.color = "green";
    } else {
      output.style.color = "black";
    }
    output.innerText = count;
  } else {
    buttonDec.disabled = true;
  }
}
buttonDec.addEventListener("click", decrementByOne);
