/*
    First Problem => Create a function that takes an integer as an argument and 
    returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number) {
  if (number % 2 === 0) return 'even';
  else return 'odd';

  // return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(19));
