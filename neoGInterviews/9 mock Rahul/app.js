const input = document.querySelector('#input')
const button = document.querySelector('#fetch')
const output = document.querySelector('#output');

const url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';

function getURL(text){
    return url + '?text=' + text;
}

button.addEventListener('click', () =>{
   let inputText = input.value ;
   fetch(getURL(inputText))
   .then(res => res.json())
   .then(data => {
       output.innerHTML
       console.log(data.contents.text.toUpperCase());
       output.innerText = data.contents.text.toUpperCase();
})
});