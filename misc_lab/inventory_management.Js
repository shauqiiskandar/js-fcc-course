// let inventory = [];

// function findProductIndex(name) {
//   // Use .findIndex() to look through the inventory
//   // Compare item.name.toLowerCase() with name.toLowerCase()
//   return inventory.findIndex(
//     (item) => item.name.toLowerCase() === String(name).toLowerCase(),
//   );
// }

// function addProduct(product) {
//   const name = String(product.name).toLowerCase();
//   const quantityToAdd = Number.parseInt(product.quantity, 10);

//   const idx = findProductIndex(name);
//   if (idx !== -1) {
//     inventory[idx].quantity += quantityToAdd;
//     console.log(`${name} quantity updated`);
//     return;
//   }

//   inventory.push({ name, quantity: quantityToAdd });
//   console.log(`${name} added to inventory`);
// }

// function removeProduct(productName, quantity) {
//   const name = String(productName).toLowerCase();
//   const quantityToRemove = Number.parseInt(quantity, 10);

//   const idx = findProductIndex(name);
//   if (idx === -1) {
//     console.log(`${name} not found`);
//     return;
//   }

//   const currentQty = inventory[idx].quantity;
//   if (currentQty < quantityToRemove) {
//     console.log(`Not enough ${name} available, remaining pieces: ${currentQty}`);
//     return;
//   }

//   inventory[idx].quantity = currentQty - quantityToRemove;
//   const remainingQty = inventory[idx].quantity;

//   if (remainingQty === 0) {
//     inventory.splice(idx, 1);
//   }

//   console.log(`Remaining ${name} pieces: ${remainingQty}`);
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++fresh start++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const inventory = [];

function findProductIndex(name) {
  name = name.toLowerCase();
  return inventory.findIndex(item => item.name.toLowerCase() === name);
}




