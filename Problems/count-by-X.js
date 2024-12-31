/*
    Create a function with two arguments that will return an array of the first n multiples of x.
    Assume both the given number and the number of times to count will be positive numbers 
    greater than 0.
    Return the results as an array or list ( depending on language ).
*/

/* Solution */

/*
    -create a New Empty Array
    - Loop through n
    - Multiply the x * n
    - add the number to the new Array
    - return the new array
*/

function countBy(x, n) {
  let emptyArray = [];
  for (let i = 1; i < n; i++) {
    emptyArray.push(x * i);
  }
  return emptyArray;
}

console.log(countBy(1, 5));
