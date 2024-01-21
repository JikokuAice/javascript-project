
let texty = document.querySelector('.textto');
let generate = document.querySelector('.outline');
let sync= window.speechSynthesis;
let speed = document.querySelector('.speedy');
let pitch = document.querySelector('.pitch');


generate.addEventListener('click',()=>{
let utterance = new SpeechSynthesisUtterance(texty.value);
utterance.rate=rates();
utterance.pitch=pitchy();
sync.speak(utterance);

})


function rates(){
  let rating = parseFloat(speed.value);
  console.log(rating)
  return rating;
}

function pitchy(){
  let peach = parseFloat(pitch.value);
  console.log(peach)
  return peach;
}

function infouser(){
  infouser=function(){}
  if('speechSynthesis' in window){
    alert('your browser support voice to text 🗣️')
}
else{
    console.log('bye bye 🤫🧏‍♀️')
}
}

infouser();