
let texty = document.querySelector('.textto');
let generate = document.querySelector('.outline');
/* `let sync= window.speechSynthesis;` is assigning the `speechSynthesis` object from the `window`
object to the variable `sync`. This allows the code to access the speech synthesis functionality
provided by the browser. */
let sync= window.speechSynthesis;
let speed = document.querySelector('.speedy');
let pitch = document.querySelector('.pitch');


generate.addEventListener('click',()=>{
/* The line `let utterance = new SpeechSynthesisUtterance(texty.value);` is creating a new instance of
the SpeechSynthesisUtterance object. This object represents a speech request that can be sent to the
speech synthesis engine. The `texty.value` is the text that will be spoken by the speech synthesis
engine. */
let utterance = new SpeechSynthesisUtterance(texty.value);
/* `utterance.rate=rates();` is setting the rate of speech for the `utterance` object. The `rate`
property determines the speed at which the text is spoken. The `rates()` function is called to
retrieve the value from the `speed` input field and convert it to a floating-point number. This
value is then assigned to the `rate` property of the `utterance` object. */
utterance.rate=rates();
utterance.pitch=pitchy();
/* `sync.speak(utterance);` is a method call that sends the `utterance` object to the speech synthesis
engine to be spoken. It triggers the speech synthesis engine to start speaking the text specified in
the `utterance` object. */
sync.speak(utterance);

})


function rates(){
/* The line `let rating = parseFloat(speed.value);` is converting the value of the `speed` input field
to a floating-point number and assigning it to the variable `rating`. The `parseFloat()` function is
used to parse a string and return a floating-point number. In this case, it is used to convert the
value of the `speed` input field, which is typically a string, into a number that can be used for
the speech synthesis rate. */
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
/* The line `if('speechSynthesis' in window){` is checking if the `speechSynthesis` property exists in
the `window` object. */
  if('speechSynthesis' in window){
    alert('your browser support voice to text 🗣️')
}
else{
    console.log('bye bye 🤫🧏‍♀️')
}
}

infouser();