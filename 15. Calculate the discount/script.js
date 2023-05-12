let original_price=1500;
let discounted_price=1260;

let percentage_of_discount=(orginal,discounted)=>{
          return (discounted/orginal)*100;
}
let percentage_of_discounted_amount=percentage_of_discount(original_price,discounted_price);
let discount=100-percentage_of_discounted_amount;
console.log("You get "+discount+" percent discount");