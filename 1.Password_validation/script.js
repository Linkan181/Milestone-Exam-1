let inputEmail=document.getElementById("email");


let inputPassword=document.getElementById("pass");
let messageBox=document.getElementById("message");
let btn=document.getElementById("button1");

btn.addEventListener("click",checkCondition);

function checkCondition(event){
    event.preventDefault();

    let check1=inputEmail.value.includes("@");
    let check2=inputPassword.value.length>=8;
    
    if(check1 && check2){
        messageBox.textContent="Valid Email and PassWord";
        messageBox.style.color="green";
    }
    else{
        messageBox.textContent="Invalid Email and Password, check again";
        messageBox.style.color="red";
    }
}