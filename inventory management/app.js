const inventory = [];
let addbtn = document.querySelector('#add');
let removebtn = document.querySelector('#remove');
let updatebtn = document.querySelector('#update');
let display = document.querySelector('article');

addbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    adds();
    console.log(inventory);
    show();
})

removebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    remove();
    show();
})

updatebtn.addEventListener('click',()=>{
let update = prompt('insert name of product u want to update');

for(let i=0;i<inventory.length;i++ ){
if(inventory[i].name==update){
let newName=prompt(`old name is ${inventory[i].name}`);
let newQuantity=prompt(`old quantity is ${inventory[i].quantity}`)
let newPrice=prompt(`old price is ${inventory[i].price}`)

console.log(newName,newPrice,newQuantity)

inventory[i].name=newName;
inventory[i].quantity=newQuantity;
inventory[i].price=newPrice;


}
show();
}
 


});

function adds(){
let name=prompt('add name of product');
let quantity=prompt('add quantity of product');
let price=prompt('add unit price of product');

inventory.push({name,quantity,price});
}


function remove(){
    // we are directly saving value we get from prompt in variable.
   let removeName= prompt('remove value by typing product name you added');
   //used for loop to iterate over every object inside array index i

   for(let i = 0;i < inventory.length;i++){

//for loop inventory[index].name give every product name from inventory

 
/* we also check if any inventory name match product name we 
inserted in prompt and stored in variable removeName  if true then we go inside  if statements*/

    if(inventory[i].name === removeName){

/* `inventory.splice(i,1)` is removing an element from the `inventory` array at the specified index
`i`. The `1` indicates that only one element should be removed. */
        inventory.splice(i,1);
        console.log(inventory)
    }
}
}


function show(){
    for(let i = 0;i < inventory.length;i++){
display.innerText=`name:${inventory[i].name} ,quantity:${inventory[i].quantity} ,price:${inventory[i].price}`;

    }
}



