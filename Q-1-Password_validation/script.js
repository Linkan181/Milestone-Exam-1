let button=document.getElementById("button1");
button.addEventListener("click",checkPassword);

function checkPassword(){
    let password=document.getElementById("pass").value ;
    let confirm_password=document.getElementById("confirm_pass").value ;
    console.log(password,confirm_password);

    let message=document.getElementById("message");


    if(password.length!=0 ){
        if(password===confirm_password){
            message.innerText="Password match";
            message.style.color="green";
            message.style.fontSize="18px"
            console.log("Password Matched. Password validation Successful.");
        }
        else{
            message.innerText="Password not match"
            message.style.color="red";
            message.style.fontSize="18px"
            console.log("Password didn't match. Password validation unsuccessful");
        }
    }
    else{
        message.innerText="Password should not be empty";
        message.style.color="red";
            message.style.fontSize="18px"
    }
}