console.log("Grocery shopping list");
const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");
shoppingList.push("Grapes");

// Function to return formatted shopping list message
function getShoppingListMsg(array) {
    return `Current Shopping List: ${array}`;
}

console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

//Use the unshift() method to add the string "Vegetable Oil" to the beginning of the shoppingList array.
shoppingList.unshift("Vegetable Oil");

console.log(getShoppingListMsg(shoppingList));

// In this step, use the push method to add the strings "Popcorn", "Beef Jerky", "Potato Chips" to the shoppingList array.
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");

console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

//Use the pop method to remove the last item from the shoppingList array.
shoppingList.pop();

console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");
shoppingList.unshift("Chocolate Cake");

console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

//Use the shift method to remove the first item from the shoppingList array.
shoppingList.shift();

//Update the first item in the shoppingList array to be "Canola Oil"
shoppingList[0] = "Canola Oil";

console.log(getShoppingListMsg(shoppingList));