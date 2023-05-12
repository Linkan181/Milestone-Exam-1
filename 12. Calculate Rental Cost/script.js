// Rental costs:
// economy=4000 / per day
// Midsize=10000 / per day
// Luxury=20,000 per day

let finalPrice=0;
let numberOfDays=prompt("Enter number of days","");
let carType=prompt("Enter the first letter of car type","")
if(carType==='e' || carType==="E"){
    finalPrice=totalCost(4000,parseInt(numberOfDays));
}
if(carType==='m' || carType==="M"){
    finalPrice=totalCost(10000,parseInt(numberOfDays));
}
if(carType==='l' || carType==="L"){
    finalPrice=totalCost(20000,parseInt(numberOfDays));
}
function totalCost(rental_price, days){
    return rental_price*days;
}

console.log("The final rental Price is : "+finalPrice)
document.write("The final rental Price is : "+finalPrice)