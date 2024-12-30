/*
  Convert number to reversed array of digits
  Given a random non-negative number, you have to return the digits of this number 
  within an array in reverse order.

  Solution 
  - change the number to string
  - split a string to array 
  - change the string in a array to numbers 
  - reverse the array
  */

function digitize(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map((x) => Number(x));
}

console.log(digitize(35231));
