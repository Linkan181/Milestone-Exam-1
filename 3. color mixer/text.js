//Select required elements
const rang1 = document.getElementById("col1");
const rang2 = document.getElementById("col2");


const mixButton = document.getElementById("mix");
const color_box = document.getElementById("color-box");
const color_name = document.getElementById("color-name");

mixButton.addEventListener("click", mixColors);

function mixColors() {
  
  let result;
  
  color1 = rang1.value;
  color2 = rang2.value;
  console.log(color1);
  switch (color1) {
    case "red":
      switch (color2) {
        case "blue":
          console.log("purple");
          result = "purple";
          break;
        case "yellow":
          console.log("orange");
          result = "orange";
          break;
        default:
          console.log("Invalid color combination");
          result = "Invalid color combination";
      }
      break;
    case "blue":
      switch (color2) {
        case "red":
          console.log("purple");
          result = "purple";
          break;
        case "yellow":
          console.log("green");
          result = "green";
          break;
        default:
          console.log("Invalid color combination");
          result = "Invalid color combination";
          break;
      }
      break;
    case "yellow":
      switch (color2) {
        case "red":
          console.log("orange");
          result = "orange";
          break;
        case "blue":
          console.log("green");
          result = "green";
          break;
        default:
          console.log("Invalid color combination");
          result = "Invalid color combination";
          break;
      }
      break;
    default:
      console.log("Invalid color combination");
      break;
  }
  if (result != "Invalid color combination") {
    color_box.style.backgroundColor =result;
    color_name.textContent = result;
  } else {
    color_box.style.backgroundColor=null;
    color_name.textContent = result;
  }
}
