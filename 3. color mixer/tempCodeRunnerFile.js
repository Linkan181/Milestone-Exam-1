const color1=document.getElementById("col1");
const color2=document.getElementById("col2");
const mixButton = document.getElementById("mix");
const color_box = document.getElementById("color-box");
const color_name = document.getElementById("color-name");

mixButton.addEventListener("click", mixColors());

function mixColors() {
 

  color1 = color1.value;
  color2 = color2.value;
  console.log(color1);
}