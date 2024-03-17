
const BMI =document.querySelector('#BMI');
const button=document.querySelector('button');

button.addEventListener('click',function(e){
const age=parseInt(document.querySelector('#age').value);
const height=parseInt(document.querySelector('#height').value);
const weight =parseInt(document.querySelector('#weight').value);
    if(age==='' || age < 0 || isNaN(age)){
        BMI.innerHTML ="Please give a valid age"
    }else if(height==='' || height < 0 || isNaN(height)){
        BMI.innerHTML ="Please give a valid height"
    }else if(weight==='' || weight < 0 || isNaN(weight)){
        BMI.innerHTML ="Please give a valid weight"
    }
    else{
        const result = (weight/((height*height)/10000)).toFixed(2);
        BMI.innerHTML = result ;
    }
})

