const output = document.querySelector("#output");
const button = document.querySelector("#btn");
const url = "https://dog.ceo/api/breeds/image/husky";
// const url = "https://unitube-server.herokuapp.com/playlists";
// const url = "https://jsonplaceholder.typicode.com/dummyUsers";

function clickHandler() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      output.innerHTML = `<img src=${data.message} />`;
      // output.innerHTML = data.message;
      // console.log(data.code);
      // if (data.code === 404) {
      //   output.innerHTML = "Page not found";
      // } else if (data.code === 401) {
      //   output.innerHTML = "You are not logged in..";
      // }
    })
    .catch(errHandler);
}
// function errHandler(err) {
//   alert(err);
//   output.innerHTML = err.message;
//   console.log(err);
// }
button.addEventListener("click", clickHandler);
