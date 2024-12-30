/*
    Double Char

    Given a string, you have to return a string in which each character (case-sensitive) 
    is repeated once.

    Solution
    - Turn string to Array
    - loop through array
    - repeat the each element once
    - join the array to string
*/

function doubleChar(str) {
  return str
    .split('')
    .map((x) => x.repeat(2))
    .join('');
}

console.log(doubleChar('Hello'));
