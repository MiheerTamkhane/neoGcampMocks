const button = document.querySelector("#addText");
const input = document.querySelector("#text-input");
const output = document.querySelector("#output");
let array = [];
let text = input.value;
button.addEventListener("click", (e) => {
  console.log(text);

  output.innerHTML += `<li>
    ${text}
    </li>`;

  array.push(text);
  console.log(array);
  console.log(output);
  console.log(e);
  //   text.addEventListener("click", () => {
  //     console.log("hi");
  //   });
});
