//seleziono il div con l'id text
const lettera = document.getElementById("text")
//seleziono il  div per  lo slider
let Resolution = document.getElementById("Resolution")
let Tracking = document.getElementById("Tracking")
let Leading = document.getElementById("Leading")
//aggiorno il valore dello slider con addEventListener
Resolution.addEventListener('input', sliderChangeResolution);
Tracking.addEventListener('input', sliderChangeTracking);
Leading.addEventListener('input', sliderChangeLeading);

const slidecontainer = document.querySelector("#slidecontainer")
const buttonDistance = document.querySelector("#buttonDistance")
const buttonSliders = document.querySelector("#buttonSliders")


let output = document.getElementById("demo");
output.innerHTML = Resolution.value;

//dimensione font
lettera.style["font-size"] = "300px";


const width = window.innerWidth
const height = window.innerHeight

// -- EVENTI ----------------------------------

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

//funzione che riprende il valore dello slider
function sliderChangeResolution() {
  lettera.style["font-variation-settings"] = " 'SIZE' " + this.value;
  console.log(this.value);
}

function sliderChangeTracking() {
  lettera.style["letter-spacing"] = this.value +"em";
  console.log(this.value);
}

function sliderChangeLeading() {
  lettera.style["line-height"] = this.value +"%";
  console.log(this.value);
}

Resolution.oninput = function() {
  output.innerHTML = this.value;
}





buttonDistance.addEventListener("click", hide)

function hide() {
  slidecontainer.style.display = "none";
}

buttonSliders.addEventListener("click", show)

function show() {
  slidecontainer.style.display = "block";
}