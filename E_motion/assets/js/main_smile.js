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
  const fontSize = micLevelSmooth * 0.08;

  smile.style["font-size"] = 9 + fontSize + "rem";
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