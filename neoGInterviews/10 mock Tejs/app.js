const input = document.querySelector('#text-input')
const button = document.querySelector('#submit')
const output = document.querySelector('#output');
let array = []
button.addEventListener('click', (e) =>{

    let userName = "Miheer";
    let inputText = input.value ;
    output.innerHTML += `<p>user-name : ${userName}</p> </br>
    <p>${inputText}</p>
    `;
     input.value = '';
     const obj  = {
         "userName" : userName,
         "message" : inputText
     }
     array.push(obj);
     console.log(array)
});

