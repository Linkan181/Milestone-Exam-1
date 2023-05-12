
// Array of List items
const ar=["iphone 7","iphone 8","iphone 10","iphone 11","iphone 12","iphone 13","iphone 14"];
const list_items=document.getElementById("list_of_items");
// console.log(ar.length);
let btn=document.getElementById("button");

btn.addEventListener("click",AFunction);

// initialize index with 0 to excess the items of array(ar)
let index=0;

let OrderedList=document.createElement("ol");

OrderedList.className="order_list_tag";
OrderedList.style.fontSize="25px";


document.body.appendChild(OrderedList);
// console.log(OrderedList);

//Function for adding array item in list one after another
function AFunction(){

    if(index<ar.length){
    //creat an ordered List
    
       let list=document.createElement("li");
       list.textContent=ar[index];
    //  OrderedList.appendChild(list);
       list.innerHTML=list.innerText;
       list_items.appendChild(list);
       index++;
    }
    else{
    let message=document.createElement("p");
    message.textContent="All items have been added!";
    document.body.appendChild(message);
    }
}