let num = 5; // Choose any number between 1 and 20

function factorialCalculator(number) {
  let result = 1;
  
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  
  return result;
}

let factorial = factorialCalculator(num);
let resultMsg = "Factorial of " + num + " is " + factorial;

console.log(resultMsg);
