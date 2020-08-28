let mic;
let micInit = false;
let micLevelSmooth = 0;

const smile = document.getElementById("text");

function setup(){
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  let micLevel = mic.getLevel() * 100;
  micLevelSmooth += (micLevel - micLevelSmooth) * 0.08;
  // const width = window.innerWidth
  // const height = window.innerHeight
  const d = micLevelSmooth;

  smile.style["font-variation-settings"] = " 'SAJO' " + d + "," + " 'ANFE' " + 0 + "," + " 'DITR' " + 0 + "," + " 'ANSU' " + 0;
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
  resizeCanvas(windowWidth, windowHeight)
}