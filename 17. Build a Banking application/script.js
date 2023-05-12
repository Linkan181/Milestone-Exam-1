var Ac={
    name:"Linkan",
    balance:5000
}


//function for deposite
function deposite(amount){
    if(amount>0 && typeof(amount)==="number"){
        Ac.balance+=amount;
        return "Balance is successfuly deposited.";
    }
    else{
        return "Please enter a Positive number"
    }
}

//function to withdrawal balance
function withdra(amount){
    if(amount>0 && typeof(amount)==="number"){
        if(amount<=Ac.balance){
            Ac.balance=Ac.balance-amount;
            return "Balance is successfully withdrawal."
        }
        else{
            return "insufficient balance"
        }
        

    }
    else{
        return "Please enter a positive number"
    }
}

function checkBalance(object){
    
         console.log("Current Balance is : "+Ac.balance);
}
// let message=deposite(5000);
// console.log(deposite(3000));
// console.log(message)
console.log(withdra(5000));
console.log(deposite(300));
console.log(deposite(200));
console.log(deposite(30));
console.log(withdra(200));
checkBalance(Ac);

