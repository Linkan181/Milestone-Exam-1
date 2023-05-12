let var1=document.getElementById("name") ;
let value=document.getElementById("put");

let but=document.getElementById("enter");
but.addEventListener("click",function(){callme(var1.value);});
function callme(str){

  // if(typeof(str)!==String){
  //   return str;
  // }
  if(str.length===0){
    return str;
  }
  // console.log(str.charAt(0));
  if(str[0]===str[0].toLowerCase()){
   
   
    var1.value=str.charAt(0).toUpperCase()+str.slice(1);
  }
  else{
    var1.value=str;
  }
}

var1.addEventListener("keyup", (e)=>{
  if(e.keyCode===13){
    callme(var1.value);
  }
})
