//seleziono testo dell'HTML
const lettera = document.getElementById("text")
//dimensione font
lettera.style["font-size"] = "200px";

//rimane in ascolto delle mosse del mouse e se ci fossero fanno quello che dice la funzione
document.addEventListener("mousemove", function(e){
	
	//miusra dimensioni pagina
	const width = window.innerWidth
	const height = window.innerHeight

	//coordinate mouse 
	const x = e.pageX
	const y = e.pageY

	//map
	const w = x / width * 900.0 + 100
	console.log(w)
	const c = y / height * 50 + 75
	// console.log(c)

	//Il CSS che va a modificare
	lettera.style["font-variation-settings"] = " 'wght' " + w + "," + " 'wdth' " + c;
})