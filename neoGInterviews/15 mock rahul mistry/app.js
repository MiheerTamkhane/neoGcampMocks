const button = document.querySelector("#button");
const output = document.querySelector("#output");
const arr = ["hi", "hello", "rahul", "miheer"];

button.addEventListener("click", () => {
  let random = Math.floor(Math.random() * arr.length);
  console.log(random);
  output.innerText = arr[random];
});
