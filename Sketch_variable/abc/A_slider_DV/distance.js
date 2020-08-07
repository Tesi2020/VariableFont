let video;
let poseNet;
let posLevelSmooth = 0
let fCenter = new p5.Vector();
let center = new p5.Vector();
let move = new p5.Vector();
let pos = new p5.Vector();
let size = new p5.Vector();
let ratio = 1;
let speed = .3;
//recupero il div #text
const letter = document.getElementById("text")
const bDistance = document.querySelector("#buttonDistance")
const bSliders = document.querySelector("#buttonSliders")

bDistance.addEventListener("click", distance)
bDistance.addEventListener("input", distance)
bSliders.addEventListener("click", sliders)

function setup() {
  //createCanvas(windowWidth,windowHeight);
  video = createCapture(VIDEO);
  video.hide();
 
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
  console.log(ml5);
  
  imageMode(CENTER);
  center.set(width/2,height/2);
}


function gotPoses(poses) {
  if(poses.length>0){
    let pose = poses[0].pose;
  
    let p1 = new p5.Vector(pose.leftEar.x,pose.leftEar.y);
    let p2 = new p5.Vector(pose.rightEar.x,pose.rightEar.y);
    
    let d = dist(p1.x,p1.y,p2.x,p2.y);
    ratio = lerp(ratio,d/200,speed);
    
    let c = p5.Vector.add(p1,p2);
    c.div(2);
    
    fCenter.lerp(c, speed);
    move = p5.Vector.sub(center,fCenter);
    let moveCal = p5.Vector.div(move,ratio);
    pos = p5.Vector.add(center,moveCal);
    size.set(width/ratio, height/ratio);
  }
}

function modelLoaded() {
  console.log('Model Loaded');
}

function draw(){

  bDistance.addEventListener("click", ()=> {
    if(bDistance.dataset.over == "false"){
        bDistance.dataset.over = "true"
        distance()   
    }else{
        bDistance.dataset.over = "false"
        sliders()
      }
  })
    bSliders.addEventListener("click", ()=> {
    if(bDistance.dataset.over == "true"){
        bDistance.dataset.over = "false"
        sliders()
      }
  })

}

function distance() {

  bDistance.classList.add("active")
  let fontSize = size.x/5
  const deep = size.x/3

  letter.style["font-size"] = fontSize + "px"; //dimensione varia alla distanza

  console.log(deep)

  //mappa il livello di  distanza deep con i valori del font variabile
  const res = floor(map(deep/4,20,200,0,300))

  //Il CSS che va a modificare
  letter.style["font-variation-settings"] = " 'SIZE' " + res

  //heightLetter deve avere lo stesso valore di "font-size"
  letter.style.transform = "translateY(-" + fontSize*0.7 + "px)";
  
}

function sliders() {

  bDistance.classList.remove("active")
  
}

