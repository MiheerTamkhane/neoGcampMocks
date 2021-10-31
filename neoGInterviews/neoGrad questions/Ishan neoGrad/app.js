const buyingPrice = document.querySelector("#buying-value");
const ltp = document.querySelector("#ltp");
const button = document.querySelector("#calculate");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  if (+buyingPrice.value > +ltp.value) {
    output.innerText = "you have loss";
  } else {
    output.innerText = "You gain profit";
  }
});
