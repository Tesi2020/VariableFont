const text = document.querySelector(".text");
const sliders = document.querySelectorAll(".slider");
const sliderValues = document.querySelectorAll(".output");
// const buttons = document.querySelectorAll(".button");

// Display property values
for (let i = 0; i < sliders.length; i++) {
  sliderValues[i].innerHTML = sliders[i].value;
}

// Update text property and displayed property value for each slider
sliders.forEach(slider => {
    const sliderIndex = slider.getAttribute("data-index");
    const output = document.querySelector(`.output[data-index="${sliderIndex}"]`);
    slider.oninput = function() {
      text.style.setProperty(`--${this.id}`, this.value);
      output.innerHTML = this.value;
    };
  });