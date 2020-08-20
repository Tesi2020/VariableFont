//seleziono il div con l'id text
const lettera = document.getElementById("text")

const p = lettera.querySelectorAll('p')
p.forEach(e => {
  e.addEventListener('click', f => {

    p.forEach(el => {
      if (el != f.target) el.classList.remove('selected')
    })
    f.target.classList.toggle('selected')
  })
})


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


//dimensione font
//lettera.style["font-size"] = "300px";


const width = window.innerWidth
const height = window.innerHeight

// -- EVENTI ----------------------------------

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

//funzione che riprende il valore dello slider
function sliderChangeResolution(evt) {

  const v = evt.target.value
  const vmap = floor(map(v,0,300,1,150))
  lettera.querySelectorAll('.selected').forEach(e => {
    let computedFontSize = window.getComputedStyle(e).fontSize
    let computedSize = floor(parseInt(computedFontSize))
    e.previousSibling.previousSibling.innerHTML = computedSize + "</br>———</br>" + vmap
    e.previousSibling.innerHTML = computedSize + "</br>———</br>" + vmap
    e.style["font-variation-settings"] = " 'SIZE' " + v

    

  })
}

function sliderChangeTracking(evt) {

   const v = evt.target.value

  lettera.querySelectorAll('.selected').forEach(e => {
    e.style["letter-spacing"] = v +"em"
  })
}

function sliderChangeLeading(evt) {

  const v = evt.target.value

  lettera.querySelectorAll('.selected').forEach(e => {
    e.style["line-height"] = v +"%"
  })
}




// -- BOTTONI PRINCIPALI ------------------------------------------------
buttonDistance.addEventListener("click", hide)

function hide() {
  slidecontainer.style.display = "none";
}

buttonSliders.addEventListener("click", show)

function show() {
  slidecontainer.style.display = "block";
}


// -- BOTTONE ABOUT ------------------------------------------------
    const buttonAbout = document.querySelector("#buttonAbout")
    const buttonInfo = document.querySelector("#info")
    const about = document.querySelector("#about")
    const buttonClose = document.querySelector("#buttonClose")
    buttonAbout.addEventListener("click", showAbout)
    info.addEventListener("click", showAbout)
    buttonClose.addEventListener("click", hideAbout)

    function showAbout() {
        about.classList.add("active")
        buttonAbout.style.display = "none";
    }

    function hideAbout() {
        about.classList.remove("active")
        buttonAbout.style.display = "inline-block";
    }

