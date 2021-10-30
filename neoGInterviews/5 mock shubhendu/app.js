const button = document.querySelector('#btn');
const output = document.querySelector('#output');
const url = 'https://mystery-api.kushanksriraj.repl.co/get';


button.addEventListener('click', () =>{
 
    fetch(url)
    .then(res => {
        if(res.status === 401){
            console.log('user is not logged in')
            output.innerText = 'user is not logged in';
            setTimeout(() =>{
                document.querySelector('body').style.backgroundColor = 'blue';
                            },2000);
        }else if(res.status === 404) {
            output.innerText = 'page not found';
            setTimeout(() =>{
document.querySelector('body').style.backgroundColor = 'red'
            },3000);
        }else if(res.status === 200){
            output.innerText = 'Success';
            setTimeout(() =>{
                document.querySelector('body').style.backgroundColor = 'green'
                            },1000);
        }
    })

});
