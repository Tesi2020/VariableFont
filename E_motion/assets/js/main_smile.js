let mic;
let micInit = false;
let micLevelSmooth = 0;

//seleziono la lettera dall'HTML
const lettera = document.getElementById("smile-text");

function setup(){
  createCanvas(windowWidth,windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  let micLevel = mic.getLevel() * 100;
  micLevelSmooth += (micLevel - micLevelSmooth) * 0.08;
  //miusra dimensioni pagina
  const width = window.innerWidth;
  const height = window.innerHeight;
  // const s = min(width, height) / 50
  const d = micLevelSmooth * 100;

  //dimesnione font
  lettera.style["font-size"] = "200px";

  //rimane in ascolto delle mosse del mouse e se ci fossero fanno quello che dice la funzione
  // document.addEventListener("mousemove", function(e){

    //coordinate mouse 
    // const x = e.pageX
    // const y = e.pageY

    //Il CSS che va a modificare
    lettera.style["font-variation-settings"] = " 'SAJO' " + d;
  // })
}

window.addEventListener("deviceorientation", function(event) {
    alpha = event.alpha;
    beta = event.beta;
    gamma = event.gamma;
});

window.addEventListener('devicemotion', function(e) {
    x = parseInt(e.accelerationIncludingGravity.x);
    y = parseInt(e.accelerationIncludingGravity.y);
    z = parseInt(e.accelerationIncludingGravity.z);
});

// -- EVENTI ----------------------------------
function touchStarted() {
    getAudioContext().resume();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}