const input = document.querySelector("#user-input");
const output = document.querySelector("#output");

input.addEventListener("input", () => {
  if (input.value >= 18) {
    output.innerText = "you are able to get vaccination";
  } else if (input.value < 18 && input.value > 0) {
    let age = 18 - Number(input.value);
    output.innerText = "you need " + age + " years to get vaccination";
  }
});
