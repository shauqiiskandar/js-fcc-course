const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe1Name = recipe1.name
console.log(recipe1Name);
//Next, access the cookingTime property of recipe2 and assign it to the variable recipe2CookingTime.
const recipe2CookingTime = recipe2.cookingTime;
console.log(recipe2CookingTime);


//access the ingredients property of recipe3 and assign it to the variable recipe3Ingredients.
const recipe3Ingredients = recipe3.ingredients;
console.log(recipe3Ingredients);

//Use the push() method to push all the recipe objects into the recipes array. Make sure to push recipe1, recipe2, and recipe3 in that order.

recipes.push(recipe1, recipe2, recipe3);


//Create a getTotalIngredients function that takes a single argument, representing an array with ingredients, and returns the number of ingredients from the array passed to the function
function getTotalIngredients(ingredients) {
  return ingredients.length;
}

/*Create a getDifficultyLevel function that takes a number indicating the cooking time as a parameter.

If the cooking time is less than or equal to 30, the function should return "easy". If it is less than or equal to 60, the function should return "medium". Otherwise, the function should return "hard".*/
function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

/*
It's time to test each of the functions. You can use any of the recipes for this, but this tutorial will start with recipe1.

Create two new variables: recipe1TotalIngredients and recipe1DifficultyLevel. Assign them the values by calling the corresponding function for each variable and passing in the appropriate recipe1 property.

Finally, log each variable to the console to see the results.
*/
const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

/* 
now fill in each item of the recipes array with values for the totalIngredients and difficultyLevel properties.

For now, access the totalIngredients and difficultyLevel of recipe1 and set them to the appropriate results of function calls and arguments.
*/


/* Repeat the process for the totalIngredients and difficultyLevel properties of recipe2 and recipe3. 
*/

/* recipes.forEach(recipe => {
  recipe.totalIngredients = getTotalIngredients(recipe.ingredients);
  recipe.difficultyLevel = getDifficultyLevel(recipe.cookingTime);
}); */


recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);


console.log(recipes);