const title = document.querySelector("#title");
const fivePx = document.querySelector("#fivePx");
const tenPx = document.querySelector("#tenPx");

fivePx.addEventListener("click", () => {
  title.style.borderWidth = "5px";
});

tenPx.addEventListener("click", () => {
  title.style.borderWidth = "10px";
});
