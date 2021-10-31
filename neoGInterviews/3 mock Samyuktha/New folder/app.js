const input = document.querySelector("#input");
const button = document.querySelector("#fetch");
const output = document.querySelector("#output");
const url = "https://OTPGenerator.ishanjirety.repl.co/get-otp?name=";
const inputTwo = document.querySelector("#inputTwo");
const validateBtn = document.querySelector("#validate");
const validateOutput = document.querySelector("#outputTwo");

function getFetchURL(text) {
  return url + text;
}

button.addEventListener("click", () => {
  console.log(input.value);
  fetch(getFetchURL(input.value))
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      output.innerText = data.otp;
    });
});

validateBtn.addEventListener("click", () => {
  if (output.innerText === inputTwo.value) {
    console.log("success");
    validateOutput.innerText = "Validated!";
  } else {
    console.log("fail");
    validateOutput.innerText = "Wrong OTP!";
  }
});
