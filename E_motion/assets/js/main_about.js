let mic;
let micInit = false;
let micLevelSmooth = 0;

// const letter = document.getElementById("text");
const letterAbout = document.getElementById("text-about");
const bVoice = document.querySelector("#btnVoice");
const bMouse = document.querySelector("#btnMouse");
const bSlider = document.querySelector("#btnSlider");
// bVoice.addEventListener("click", voice);
// bVoice.addEventListener("input", voice);
// bMouse.addEventListener("click", mouse);
// bMouse.addEventListener("input", mouse);
// bSlider.addEventListener("input", slider);

function setup(){
  // createCanvas(windowWidth,windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  // const width = window.innerWidth;
  // const height = window.innerHeight;

  bVoice.addEventListener("click", ()=> {
    if(bVoice.dataset.over == "false"){
      bVoice.dataset.over = "true"
    }else{
      bVoice.dataset.over ="true"
    }
  })

  bMouse.addEventListener("click", ()=> {
    if(bMouse.dataset.over == "false"){
      bMouse.dataset.over = "true"
    }else{
      bMouse.dataset.over ="true"
    }
  })


  bSlider.addEventListener("click", ()=> {
    if(bMouse.dataset.over == "true"){
      bMouse.dataset.over = "false"
    }else{
      bMouse.dataset.over ="false"
    }
  })

  bSlider.addEventListener("click", ()=> {
    if(bVoice.dataset.over == "true"){
      bVoice.dataset.over = "false"
    }else{
      bVoice.dataset.over ="false"
    }
  })

  if(bMouse.dataset.over == "false"){
    slider()  
  }else if(bMouse.dataset.over == "true"){
    mouse()
  }

  if(bVoice.dataset.over == "false"){
    //slider()  
  }else if(bVoice.dataset.over == "true"){
    voice()
  }
}

function voice(){
  bVoice.classList.add("active")
  let micLevel = mic.getLevel() * 100;
  micLevelSmooth += (micLevel - micLevelSmooth) * 0.08;
  const fontSize = micLevelSmooth * 0.01;
  // console.log(fontSize);
  letterAbout.style["font-size"] = 2 + fontSize + "rem";
  // letterAbout.style.transform = "translateY(-" + fontSize*0.7 + "px)";
  // letter.style["font-size"] = 7.5 + fontSize + "rem";
  // letter.style.transform = "translateY(-" + fontSize*0.7 + "px)";
}

function mouse(){
  var a= map(mouseY,0,height,-100,100);
  var b= map(mouseX,0,height,-100,100);
  var c= map(mouseX,0,width,-100,100);
  var d= map(mouseX,0,height,-100,100);
  letterAbout.style["font-variation-settings"] = " 'ANFE' " + c + "," + " 'SAJO' " + a + "," + " 'DITR' " + b + "," + " 'ANSU' " + d;
  // letter.style["font-variation-settings"] = " 'ANFE' " + c + "," + " 'SAJO' " + a + "," + " 'DITR' " + b + "," + " 'ANSU' " + d;
}

function slider() {
  bVoice.classList.remove("active")
  bMouse.classList.remove("active")
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