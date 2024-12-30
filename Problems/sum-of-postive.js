// You get an array of numbers, return the sum of all of the positives ones.

/*
    1- InitVale = 0
    2- Array loop
    3- Check if number is positive of negative
    4- add number to InitVale if positive
*/

// First Solution
// function sumOfPositive(arr) {
//   let initVale = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       initVale += arr[i];
//     }
//   }
//   return initVale;
// }

function sumOfPositive(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
}

console.log(sumOfPositive([1, 8, 9, -50]));
