// // Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.

// const obj1 = {
//   name: "ram",
//   yuga: "Treta",
//   power: 2500,
// };
// const obj2 = {
//   name: "Krishna",
//   yuga: "Dwapar",
//   power: 2325,
// };

// function compares(obj1, obj2) {
//   let ramPow = obj1.name.length;
//   let krishnaPow = obj2.name.length;
//   let power1 = 35 * ramPow + obj1.power;
//   let power2 = 35 * krishnaPow + obj2.power;
//   console.log(power1 + " Ram");
//   console.log(power2 + " krishna");
//   if (power1 > power2) {
//     console.log(obj1.name + " has greater power");
//   } else {
//     console.log(obj2.name + " has greater power");
//   }
// }
// compares(obj1, obj2);

const name = document.querySelector("#name");
const rgb1 = document.querySelector("#rgb1");
const rgb2 = document.querySelector("#rgb2");
const rgb3 = document.querySelector("#rgb3");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

function nameInColor() {
  console.log(name.value);
  console.log(Number(rgb1.value));
  console.log(Number(rgb2.value));
  console.log(Number(rgb3.value));

  output.innerHTML = name.value;
  output.style.color = `rgb( ${rgb1.value}, ${rgb2.value}, ${rgb3.value})`;
  //   output.style.color ="
  // rgb(" +Number(rgb1.value)+ "," + Number(rgb2.value)
  //  + "," + Number(rgb3.value)+ ")";
}
button.addEventListener("click", nameInColor);
