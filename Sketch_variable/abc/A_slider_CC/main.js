let wSlider 
// cSlider, iSlider;
let fontRegular

//seleziono la lettera dall'HTML
const lettera = document.getElementById("text")

function preload() {
  fontRegular = loadFont('CC_provaGX.ttf');
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  fill(255);
  textFont(fontRegular);
  textSize(20);
  noStroke();

  // Slider(inizio, fine, iniziale)
  wSlider = createSlider(-100, 100, 0);
  wSlider.position(30, height-100);
  // cSlider = createSlider(75, 125, 0);
  // cSlider.position(width/2-wSlider.width/2, height-100);
  // iSlider = createSlider(0, 1, 0);
  // iSlider.position(width-iSlider.width*2, height-100);
}


function draw(){
  //miusra dimensioni pagina
  const width = window.innerWidth
  const height = window.innerHeight

  const w = wSlider.value();
  // const c = cSlider.value();
  // const i = iSlider.value();

  // push();
  // stroke(255);
  // strokeWeight(0.5);
  // line(30+wSlider.height/2, height-100+wSlider.height/2,  wSlider.x+wSlider.width, height-100 + wSlider.height/2);
  // line(width/2-cSlider.width/2+cSlider.height/2, height-100+cSlider.height/2, cSlider.x + cSlider.width, height-100+cSlider.height/2);
  // line(iSlider.x+iSlider.height/2, height-100 + iSlider.height/2, iSlider.x + iSlider.width, height-100 + iSlider.height/2);
  // pop();

  text('SAJO', wSlider.x + wSlider.width + 50, wSlider.y + wSlider.height);
  // text('width', cSlider.x + cSlider.width + 50, cSlider.y + cSlider.height);
  // text('italic', iSlider.x + iSlider.width + 50, iSlider.y + iSlider.height);

  //dimesnione font
  lettera.style["font-size"] = "500px";

  //css che va a modificare
  lettera.style["font-variation-settings"] = " 'SAJO' " + w; //+ "," + " 'wdth' " + c + "," + " 'ital' " + i;
}

// -- EVENTI ----------------------------------

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}