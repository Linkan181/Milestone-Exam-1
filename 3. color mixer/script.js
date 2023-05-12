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
  // ------------------
  let combination,result;
  debugger;
  if(valueOfColor1==="red" && valueOfColor2==="blue" || valueOfColor1==="blue" && valueOfColor2==="red"){
       combination= 'p';
  }
  else if(valueOfColor1==="red" && valueOfColor2==="yellow" || valueOfColor1==="yellow" && valueOfColor2==="red"){
       combination= 'o';
  }
  else if(valueOfColor1=="blue" && valueOfColor2=="yellow" || valueOfColor1==="yellow" && valueOfColor2==="blue"){
      combination= 'g';
  }
  else{
      combination= 'i';

  }
  
  
  console.log(combination);
  switch (combination){
      case 'p':
          result="purple";
          break;
      case 'o':
          result="orange";
          break;
      case 'g':
          result="green";
          break;
      default:
          result="invalid color";
  
  
  }

 
  if(result!=="invalid color"){
    printColor(result); //Call function 2
  }
  else{
    color_box.style.backgroundColor=null;
    color_name.textContent=result;
  }

}

// function 2 
function printColor(c){

  color_box.style.backgroundColor=c;
  color_name.textContent=c;
  
    
}