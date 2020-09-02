const facePlate = document.getElementById("face-plate");
const helmet = document.getElementById("helmet");
const mouthPlate = document.getElementById("mouth-plate");
const background = document.getElementById("background");

const svgFacePlate = document.getElementById("svg-faceplate");
const svgHelmet = document.getElementById("svg-helmet");
const svgMouthPlate = document.getElementById("svg-mouthplate");
const svgBackGround = document.getElementById("svg-background");

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
