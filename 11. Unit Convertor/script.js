let cel=5;
console.log(cel+" degree celsius")
let fahrenheit=converter(cel);
console.log(fahrenheit+" degree fahrenheit");
function converter(celsius){
    return celsius*(9/5)+32;
}