let inputTag=document.getElementById("name");
let var2=document.querySelector('#dis');

let count=0,str;
inputTag.addEventListener("keyup", (e)=>{
    if(e.keyCode===13){
   
      str=inputTag.value;
    
      let arr=Array.from(str);
    
      for(let i=0;i<arr.length;i++){
        if(arr[i]=='a' || arr[i]=='e' ||arr[i]=='i' || arr[i]=='o' ||arr[i]=='u'){
            count++;
        }
      }
    
      
     var2.innerHTML="The number of vowel in this name is : "+count;

    
    }
  })



