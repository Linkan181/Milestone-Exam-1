//Select input-box
let input=document.getElementById('input-box');


//select all button by quarySelector
let buttons=document.querySelectorAll(".buton");


let str="";
let arr=Array.from(buttons);
//For-each loop to eccess all selected tags
arr.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{  //add eventListener to them
        if(e.target.innerHTML=="="){
            str =eval(str);
            input.value=str;
        }
        else if(e.target.innerHTML=='AC'){
            str="";
            input.value=str;
        }
        else{
            str +=e.target.innerHTML;
            input.value=str;
        }
      
    })
})




