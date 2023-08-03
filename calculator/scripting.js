//function


function appendtodisplay(values){
const display = document.querySelector('#display');
display.value += values;
}

let currentvalue = null;
let currentoperator = null;


function operate(sign){
 currentoperator = sign;
 currentvalue = parseFloat(document.querySelector('#display').value)
 document.querySelector("#display").value = "";
}


function calculate(){
    const display = document.querySelector('#display')
    let secondvalue = parseFloat(display.value)
let result; 
switch(currentoperator){
    case '+':
        result = currentvalue + secondvalue;
        break;
    case '-':
        result = currentvalue + secondvalue;
        break;
    case '*':
 
     result = currentvalue * secondvalue;
   
    break;
    case '/' :
        if(secondvalue==0){
       alert('cant divide by zero');
        }
        result= currentvalue / secondvalue
    break;
default:
   alert('plz use operator');
break;

}

display.value=result;





}


function clearall(){
    document.querySelector("#display").value = "";
     currentvalue = null;
     currentoperator = null;    
}









