const buttons = document.querySelectorAll('.button');
const body =document.querySelector("body");
const text= document.querySelector('#show-color');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id==='Red'){
            body.style.backgroundColor =e.target.id;
            text.innerHTML =`You Chose ${e.target.id}`;
        }else if(e.target.id==='Blue'){
            body.style.backgroundColor =e.target.id;
            text.innerHTML =`You Chose ${e.target.id}`;
        }else if(e.target.id==='Green'){
            body.style.backgroundColor =e.target.id;
            text.innerHTML =`You Chose ${e.target.id}`;
        }else if(e.target.id==='Yellow'){
            body.style.backgroundColor =e.target.id;
            text.innerHTML =`You Chose ${e.target.id}`;
        }else if(e.target.id==='Grey'){
            body.style.backgroundColor =e.target.id;
            text.innerHTML =`You Chose ${e.target.id}`;
        }
    })
})