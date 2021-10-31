const para = document.querySelector("#para");
const para2 = document.querySelector("#para2");
const readMore = document.querySelector("#read-more");
const readLess = document.querySelector("#read-less");
readLess.style.display = "none";
para2.style.display = "none";
readMore.addEventListener("click", function () {
  para2.style.display = "flex";
  readLess.style.display = "flex";
  readMore.style.display = "none";
});
readLess.addEventListener("click", function () {
  readMore.style.display = "flex";
  readLess.style.display = "none";
  para2.style.display = "none";
});
