const inputfield=document.getElementById("inputField");
const list_items=document.getElementById("list_item");

console.log(inputfield);
console.log("Hellow");
function addTask(){
     if(inputfield.value==""){
          alert("you must enter something!")
     }
     else{
          let li=document.createElement("li");
          li.innerHTML=inputfield.value;
          console.log(li.innerHTML);
          list_items.appendChild(li);
          let span=document.createElement("span");
          span.innerHTML="\u00d7";
          li.appendChild(span);
     }
     inputfield.value="";
     
    
}

list_items.addEventListener("click",function(e){
     if(e.target.tagName==="LI"){
          e.target.classList.toggle("checked");
     }
     else if(e.target.tagName==="SPAN"){
          e.target.parentElement.remove();
     }
})
