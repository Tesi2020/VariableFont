const lettera = document.getElementById("text")

let SAJO = document.getElementById("SAJO")
let DITR = document.getElementById("DITR")
let ANFE = document.getElementById("ANFE")
let ANSU = document.getElementById("ANSU")

SAJO.addEventListener('input', sliderChangeSAJO);
DITR.addEventListener('input', sliderChangeDITR);
ANFE.addEventListener('input', sliderChangeANFE);
ANSU.addEventListener('input', sliderChangeANSU);

const slidecontainer = document.querySelector("#slidecontainer")
const btnVoice = document.querySelector("#btnVoice")
const btnMouse = document.querySelector("#btnMouse")
const btnSlider = document.querySelector("#btnSliders")

let outputSAJO = document.getElementById("demoSAJO");
outputSAJO.innerHTML = SAJO.value;

let outputDITR = document.getElementById("demoDITR");
outputDITR.innerHTML = DITR.value;

let outputANFE = document.getElementById("demoANFE");
outputANFE.innerHTML = ANFE.value;

let outputANSU = document.getElementById("demoANSU");
outputANSU.innerHTML = ANSU.value;

lettera.style["font-size"] = "7.5rem";

const width = window.innerWidth;
const height = window.innerHeight;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function sliderChangeSAJO() {
  lettera.style["font-variation-settings"] = " 'SAJO' " + this.value;
  // console.log(this.value);
}

function sliderChangeDITR() {
  lettera.style["font-variation-settings"] = " 'DITR' " + this.value;
  // console.log(this.value);
}

function sliderChangeANFE() {
  lettera.style["font-variation-settings"] = " 'ANFE' " + this.value;
  // console.log(this.value);
}

function sliderChangeANSU() {
  lettera.style["font-variation-settings"] = " 'ANSU' " + this.value;
  // console.log(this.value);
}

SAJO.oninput = function() {
  outputSAJO.innerHTML = this.value;
}

DITR.oninput = function() {
  outputDITR.innerHTML = this.value;
}

ANFE.oninput = function() {
  outputANFE.innerHTML = this.value;
}

ANSU.oninput = function() {
  outputANSU.innerHTML = this.value;
}