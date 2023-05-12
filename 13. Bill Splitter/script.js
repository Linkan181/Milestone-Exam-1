let dishes=[
    {name:"pizza",cost:200},
    {name:"burger",cost:170}
];
let no_of_person=4;


function calculateBill(dishes,no_of_person){
    let Bill={
        totalBill:0,
        perPerson:0
   }
   
   //Calculate total bill
   for(let rs of dishes){
       Bill.totalBill+=rs.cost;
   }
   
   //calculate value for perPerson
   Bill.perPerson=Bill.totalBill/no_of_person;
   return Bill;
}

console.log(calculateBill(dishes,no_of_person));

