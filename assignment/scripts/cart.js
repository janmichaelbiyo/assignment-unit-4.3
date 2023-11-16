console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//- Create a global variable named `basket` and set it to an empty array.
var basket = [];

//console.log(basket);

const maxItems = 5; 

//- Create a function called `addItem`. It should:
  //- take an input parameter for a string `item`
  //- add the new item to the global array `basket`. 
  //- return `true` indicating the item was added

function addItem(item){
    basket.push(item);
    return true;
}
addItem('french fry');
console.log(addItem('steak'));
console.log(basket);

//- Create a function called `listItems`. It should:
  //- loop over the items in the `basket` array
  //- console.log each individual item on a new line

function listItems(basket){
    for (let i=0; i<basket.length; i++)
        console.log(basket[i]);

}
listItems(basket);

//- Create a function called `empty`. It should:
 // - reset the `basket` to an empty array

function empty(){
    while (basket.length > 0){
        basket.pop();
}        
}

empty(basket);

console.log(basket);

//console.log(`Basket is ${basket}`);
//console.log('Adding apples (expect true)', addItem('apples'));
//console.log(`Basket is now ${basket}`);


//1.Add a global `const` named `maxItems` and set it to 5.

//const maxItems = 5; 

//2. Create a function called isFull(). It should:
 // - return `false` if the basket contains *less* than max number of items
  //- return `true` otherwise (equal or more than maxItems)

function isFull(){
    if (maxItems > basket.length){
        return false;
    } else {
        return true;
    }
        
}

isFull(maxItems);



//3. Update the required `addItem` function to:
 // - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
  //- If an item was added to the array, return `true`
  //- If there was no room and the item could not be added return `false`

function addItem(item){
    if (!isFull()){
        basket.push(item);
        return true;
    } else {
        return false;
    }
}
addItem('banana');
console.log(basket)

//__Using Array built-in functions!__

//4. Create a function called `removeItem`. It should:
 // - Take an input parameter for a string `item`
  //- Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
  //- Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
  //- Return the item removed or `null` if the item was not found


function removeItem(item){
    let removeIndex = basket.indexOf(item);

    if (removeIndex !== -1){
        let removedItem = basket[removeIndex]
        basket.splice(removeIndex, 1);
        return removedItem;
    } else {
        return null;
    }
}






// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
