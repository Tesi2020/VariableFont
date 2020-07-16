let mic
let micLevelSmooth = 0;

let wSlider, cSlider, iSlider;
let fontRegular

//seleziono la lettera dall'HTML
const lettera = document.getElementById("text")

function preload() {
  fontRegular = loadFont('SFNSDisplayCondensed-Regular.otf');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  mic = new p5.AudioIn()
  mic.start();

  fill(255);
  textFont(fontRegular);
  textSize(20);
  noStroke();

  // Slider(inizio, fine, iniziale)
  //wSlider = createSlider(100, 900, 0);
  //wSlider.position(30, height-100);
  cSlider = createSlider(75, 125, 0);
  cSlider.position(width/2-cSlider.width/2, height-100);
  iSlider = createSlider(0, 1, 0);
  iSlider.position(width-iSlider.width*2, height-100);
}

function draw(){
  background(0);

  let micLevel = mic.getLevel() * 100;
  micLevelSmooth += (micLevel - micLevelSmooth) * 0.08
  const width = window.innerWidth
  const height = window.innerHeight
  const d = micLevelSmooth * 150

  push();
  fill(255);
  noStroke();
  let m = dist(d/8,0,0,0);
  ellipse(30+7.5+m, 709.5, 10, 10);
  pop();

  //dimesione font
  lettera.style["font-size"] = "500px";

  const w = d;
  //console.log(w)
  const c = cSlider.value();
  const i = iSlider.value();

  push();
  stroke(255);
  push();
  strokeWeight(0.5);
  line(37.5, 709.5,  159, 709.5);
  pop();
  strokeWeight(1);
  line(width/2-cSlider.width/2+cSlider.height/2, height-100+cSlider.height/2, cSlider.x + cSlider.width, height-100+cSlider.height/2);
  line(iSlider.x+iSlider.height/2, height-100 + iSlider.height/2, iSlider.x + iSlider.width, height-100 + iSlider.height/2);
  pop();

  text('weight', 159 + 30, 717);
  text('width', cSlider.x + cSlider.width + 30, cSlider.y + cSlider.height);
  text('italic', iSlider.x + iSlider.width + 30, iSlider.y + iSlider.height);


  //Il CSS che va a modificare
  lettera.style["font-variation-settings"] = " 'wght' " + w + "," + " 'wdth' " + c + "," + " 'ital' " + i;
}

// -- EVENTI ----------------------------------

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}