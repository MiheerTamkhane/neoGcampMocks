const input = document.querySelector('#input');
const inc = document.querySelector('#inc');
const dec = document.querySelector('#dec');
const output = document.querySelector('#output');
let pixel = window.getComputedStyle(output).fontSize;

let px = parseFloat(pixel)
inc.addEventListener('click' , () =>{
    let textInput = input.value;
    output.innerText = textInput;
    px = px + 2;
    output.style.fontSize = px + "px";
    // console.log(output.style.fontSize)
});
dec.addEventListener('click' , () =>{
    // let textInput = input.value;
    // output.innerText = textInput;
    px = px - 2;
    output.style.fontSize = px + "px";
})
input.addEventListener('input' , () => {
    let textInput = input.value;
    output.innerText = textInput;
    // output.style.fontSize = pixel +"px";
    // pixel = pixel - 2;
});