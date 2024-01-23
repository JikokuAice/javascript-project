const inventory = [];
let addbtn = document.querySelector('#add');
let removebtn = document.querySelector('#remove');
let updatebtn = document.querySelector('#update');



addbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    adds();
    console.log(inventory);
})

removebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    remove();
})

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


/* we also check id any inventory name match product name we 
inserted in prompt and stored in variable removeName */

    if(inventory[i].name === removeName){

/* `inventory.splice(i,1)` is removing an element from the `inventory` array at the specified index
`i`. The `1` indicates that only one element should be removed. */
        inventory.splice(i,1);
        console.log(inventory)
    }
}
}




