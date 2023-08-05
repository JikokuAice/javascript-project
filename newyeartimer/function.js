let interval;
let endTime = '2024/1/1'

function operate(ms){
const day= Math.floor(((ms)/ 86400000));
const hour = Math.floor((ms % 86400000)/3600000);
const minute = Math.floor((ms % 3600000)/60000);
const second = Math.floor((ms % 60000)/1000);

let DAY = `${day.toString().padStart(2,'0')}`
let HOUR = `${hour.toString().padStart(2, '0')}`

let MIN = `${minute.toString().padStart(2,'0')}`
let SEC = `${second.toString().padStart(2, '0')}`
//Destructuring using array
return[DAY,HOUR,MIN,SEC];

}

function display(){
let currenTime = new Date(); 
let Year2024 = new Date(endTime);
let timeLeft = Year2024 - currenTime;

let[DAY,HOUR,MIN,SEC] = operate(timeLeft);
document.querySelector('#days').innerText=DAY;
document.querySelector('#hour').innerText=HOUR;
document.querySelector('#minute').innerText=MIN;
document.querySelector('#second').innerText=SEC;


}




interval = setInterval(display,1000);

