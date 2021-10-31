const input = document.querySelector("#input");
const output = document.querySelector("#counter");

input.addEventListener("input", () => {
  output.innerText = 10 - input.value.length;
  if (output.innerText < 0) {
    output.style.color = "red";
  } else {
    output.style.color = "black";
  }
});
