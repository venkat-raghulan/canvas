const facePlate = document.getElementById("face-plate");
const helmet = document.getElementById("helmet");
const mouthPlate = document.getElementById("mouth-plate");
const background = document.getElementById("background");

const svgFacePlate = document.getElementById("svg-faceplate");
const svgHelmet = document.getElementById("svg-helmet");
const svgMouthPlate = document.getElementById("svg-mouthplate");
const svgBackGround = document.getElementById("svg-background");

const resetButton = document.getElementById("reset");

colorBoxes = document.querySelectorAll(".color-box");

facePlate.onchange = () => {
  svgFacePlate.style.fill = facePlate.value;
};

helmet.onchange = () => {
  svgHelmet.style.fill = helmet.value;
};

mouthPlate.onchange = () => {
  svgMouthPlate.style.fill = mouthPlate.value;
};

background.onchange = () => {
  svgBackGround.style.fill = background.value;
};

resetButton.onclick = () => {
  colorBoxes.forEach((element) => {
    element.value = "#ffffff";
  });
  svgFacePlate.style.fill = facePlate.value;
  svgHelmet.style.fill = helmet.value;
  svgMouthPlate.style.fill = mouthPlate.value;
  svgBackGround.style.fill = background.value;
};
