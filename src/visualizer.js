const imageBox = document.getElementById('image-container');
const speak = document.getElementById ("speak")

// class Bar {
//   constructor(){

//   }

//   update{

//   }

//   draw{

//   }
// }

speak.addEventListener('click', e => {
  speak.classList.toggle("speak");
})

window.AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new window.AudioContext();
const analyser = ctx.createAnalyser();
const source = ctx.createMediaElementSource(audio);
const bufferLength = analyser.frequencyBinCount;

source.connect(analyser);
source.connect(ctx.destination);
analyser.fftSize = 64;

let dataArray = new Uint8Array(bufferLength);
let elements = []
for(let i=0; i < bufferLength; i++) {
  const el = document.createElement('span');
  elements.push(el);
  el.classList.add("element")
  imageBox.appendChild(el)

}


const update = () => {
  requestAnimationFrame(update);
  analyser.getByteFrequencyData(dataArray);

  for(let i = 0; i< bufferLength; i++){
    let item = dataArray[i];
    elements[i].style.transform = `rotateZ(${i * (360 / bufferLength)}deg) translate(-50%, ${item}px)`
  }
}