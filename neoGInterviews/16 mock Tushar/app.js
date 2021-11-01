const fetchBtn = document.querySelector("#fetch");
const output = document.querySelector("#output");
const url = "https://mock-practice.prakhar10v.repl.co/items";

fetchBtn.addEventListener("click", () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let max = 0;
      let text = "";
      data.forEach((element) => {
        if (element.price > max) {
          max = element.price;
          text = element.item;
        }
      });
      output.innerText = text;
    });
});
