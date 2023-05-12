//cart of customer
let items=[
    {name:"Soap",price:20,quantity:2},
    {name:"Detol",price:50,quantity:1},
    {name:"Maggie",price:30,quantity:3},
    {name:"T-shirt",price:280,quantity:1}
]


let total_cost=(items)=>{
    let total=0;

    for(let item of items){
        total+=item.price*item.quantity;
    }
    return total;
}

console.log(total_cost(items));