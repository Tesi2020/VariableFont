let wSlider, cSlider, iSlider;
let fontRegular

let mic
let micInit = false;
let micLevelSmooth = 0;

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
  textSize(15);
  noStroke();

  // Slider(inizio, fine, iniziale)
  aSlider = createSlider(1, 10, 10);
  aSlider.position(30, 15);  

  bSlider = createSlider(1, 50, 0);
  bSlider.position(30, 45);

  cSlider = createSlider(10, 200, 200);
  cSlider.position(30, 75);

  dSlider = createSlider(0, 150, 0);
  dSlider.position(30, 105);

  eSlider = createSlider(0, 50, 0);
  eSlider.position(30, 135);

  fSlider = createSlider(0, 50, 0);
  fSlider.position(30, 165);

  gSlider = createSlider(0, 5, 0);
  gSlider.position(30, 195);

  hSlider = createSlider(0, 1, 0);
  hSlider.position(30, 225);

  iSlider = createSlider(0, 1, 0);
  iSlider.position(30, 255);
}

function draw(){
  let micLevel = mic.getLevel() * 100;
  micLevelSmooth += (micLevel - micLevelSmooth) * 0.08
  // const s = min(width, height) / 50
  const s = micLevelSmooth * 50

  //miusra dimensioni pagina
  background(0);
  const width = window.innerWidth
  const height = window.innerHeight

  const a = aSlider.value();
  const b = bSlider.value();
  const c = cSlider.value();
  const d = dSlider.value();
  const e = eSlider.value();
  const f = fSlider.value();
  const g = gSlider.value();
  const h = hSlider.value();
  const i = iSlider.value();

  push();
  stroke(255);
  strokeWeight(1);
  line(30+aSlider.height/2, aSlider.height+aSlider.height/2, 30 + aSlider.width, aSlider.height+aSlider.height/2);
  line(30+bSlider.height/2, aSlider.height+aSlider.height/2+30, 30 + bSlider.width, aSlider.height+aSlider.height/2+30);
  line(30+cSlider.height/2, aSlider.height+aSlider.height/2+60, 30 + cSlider.width, aSlider.height+aSlider.height/2+60);
  line(30+dSlider.height/2, aSlider.height+aSlider.height/2+90, 30 + dSlider.width, aSlider.height+aSlider.height/2+90);
  line(30+eSlider.height/2, aSlider.height+aSlider.height/2+120, 30 + eSlider.width, aSlider.height+aSlider.height/2+120);
  line(30+fSlider.height/2, aSlider.height+aSlider.height/2+150, 30 + fSlider.width, aSlider.height+aSlider.height/2+150);
  line(30+gSlider.height/2, aSlider.height+aSlider.height/2+180, 30 + gSlider.width, aSlider.height+aSlider.height/2+180);
  line(30+hSlider.height/2, aSlider.height+aSlider.height/2+210, 30 + hSlider.width, aSlider.height+aSlider.height/2+210);
  line(30+iSlider.height/2, aSlider.height+aSlider.height/2+240, 30 + iSlider.width, aSlider.height+aSlider.height/2+240);
  pop();

  text('Weight', aSlider.x + aSlider.width + 30, 30);
  text('Eyes', bSlider.x + bSlider.width + 30, 60);
  text('Mouth width', cSlider.x + cSlider.width + 30, 90);
  text('Smile', dSlider.x + dSlider.width + 30, 120);
  text('Mouth height', eSlider.x + eSlider.width + 30, 150);
  text('Eyes width', fSlider.x + fSlider.width + 30, 180);
  text('Eyes angle', gSlider.x + gSlider.width + 30, 210);
  text('Sad', hSlider.x + hSlider.width + 30, 240);
  text('Surprise', iSlider.x + iSlider.width + 30, 270);

  push()
  noStroke();
  rectMode(CENTER);
  translate(width/2-100+b, height/2-50);
  rotate(-PI / 5*g);
  rect(0, 0, a*2+f, a*2);
  pop();

  push()
  noStroke();
  rectMode(CENTER);
  translate(width/2+100-b, height/2-50);
  scale(-1,1);
  rotate(-PI / 5*g);
  rect(0, 0, a*2+f, a*2);
  pop();

  push();
  fill(255);
  noStroke();
  translate(width/2, height/2+50);


  if(i>0){
    translate(0,e)
    push();
    scale(1,-1);
    arc(0, 0, a+5+c, a-d, 0, PI);
    pop();
    push();
    scale(1,1);
    arc(0, 0, a+5+c, a-d, 0, PI);
    pop();
  } else{
    if(h>0){
      scale(1,-1);
      arc(0, 0-e, a+5+c, a-d, 0, PI);
    } else {
      scale(1,1);
      arc(0, 0-e, a+5+c, a-d, 0, PI);
    }
  }
  pop();

  // push();
  // fill(255,0,0);
  // noStroke();
  // arc(width/2, height/2+45-e, a+5+c, 5-a, 0, PI);
  // pop();

  push()
  noFill();
  stroke(255);
  strokeWeight(a);
  ellipse(width/2, height/2, 500, 500);
  pop();
}

// -- EVENTI ----------------------------------

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}