const container = document.querySelector(".container");
const sliders = document.querySelectorAll(".slider");
const sliderValues = document.querySelectorAll(".output");
// const buttons = document.querySelectorAll(".button");
const btnSound = document.querySelector("#btnSound")


// Display property values
for (let i = 0; i < sliders.length; i++) {
  sliderValues[i].innerHTML = sliders[i].value;
}

// Update text property and displayed property value for each slider
sliders.forEach(slider => {
    const sliderIndex = slider.getAttribute("data-index");
    const output = document.querySelector(`.output[data-index="${sliderIndex}"]`);
    const output1 = document.querySelector(`.output1[data-index="${sliderIndex}"]`);

    slider.oninput = function() {
      container.style.setProperty(`--${this.id}`, this.value);
      output.innerHTML = -this.value;

      if(output.innerHTML<0){
        output.innerHTML=0;
      } else {
        output.innerHTML = -this.value;
      };
    };

    slider.oninput1 = function() {
      container.style.setProperty(`--${this.id}`, this.value);
      output1.innerHTML = this.value;

      if(output1.innerHTML<0){
        output1.innerHTML = this.value;
      } else {
        output1.innerHTML = 0;
      };
    };
  });