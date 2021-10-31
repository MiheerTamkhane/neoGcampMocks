const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", () => {
  if (input.value.toLowerCase() === "tanvi") {
    output.innerText = "She is the best CEO ever!";
  } else if (input.value.toLowerCase() === "tanay") {
    output.innerText = "He is our FUNNY mentor!";
  } else if (input.value.toLowerCase() === "swapnil") {
    output.innerText = "He helps us CONQUER jobs!";
  } else if (input.value.toLowerCase() === "akanksha") {
    output.innerText = "She is our CHEERFUL Interviewer!";
  }
});
