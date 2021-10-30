const btnInc = document.querySelector('#inc')
const btnDec = document.querySelector('#dec')
const output = document.querySelector('#output')
let counter = 0;

btnInc.addEventListener('click', () =>{
    
    counter++;
    output.innerText = counter;
    btnDec.disabled = false;
})
btnDec.addEventListener('click', ()=>{
    counter--;
    output.innerText = counter;
    if(counter < 0){
        btnDec.disabled = true;
    }
});