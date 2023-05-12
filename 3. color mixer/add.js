//Select required elements

const color1=document.getElementById("col1");
const color2=document.getElementById("col2");
const mixButton=document.getElementById("mix");
const color_box=document.getElementById("color-box");
const color_name=document.getElementById("color-name");

//ADD evenListener
mixButton.addEventListener("click", callme);

// function 1
function callme(){
 
  valueOfColor1=color1.value;
  valueOfColor2=color2.value;
  console.log(valueOfColor1)

}