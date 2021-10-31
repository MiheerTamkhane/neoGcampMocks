const button = document.querySelector('#btn');
const output = document.querySelector('#output');
const url = "https://api.github.com/users/MiheerTamkhane";
button.addEventListener('click', () =>{
     
    fetch(url)
    .then(res => res.json())
    .then(data => {
        fetch('https://api.github.com/users/MiheerTamkhane/repos')
        .then(res => res.json())
        .then(data => {
            

            data.forEach(element => {
                output.innerHTML += `<ul><li>${element.name}</li></ul>`;
            })
           
        })
    })

})