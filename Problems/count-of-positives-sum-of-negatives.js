/*
    Given an array of integers.
    Return an array, where the first element is the count of positives numbers and the second 
    element is sum of negative numbers. 0 is neither positive nor negative.
    
    Solution
    - create a Empty Array for Positive numbers
    - create a variable for sum of Negative numbers
    - loop through given array 
    - check if number is positive the add number to the Empty array , if negative add to the sum variable
*/

function countPositivesSumNegatives(input) {
  //     let positiveArray = [];
  //     let sumNegative = 0;
  //     for (let i = 0; i < input.length; i++) {
  //   input[i] > 0 ? positiveArray.push(input[i]) : (sumNegative += input[i]);
  //       if (input[i] > 0) {
  //         positiveArray.push(input[i]);
  //       } else {
  //         sumNegative += input[i];
  //       }
  //     }
  //     return [positiveArray.length, sumNegative];

  if (!input || input.length === 0) return [];
  let positiveArray = input.filter((x) => x > 0).length;
  let sumNegative = input
    .filter((x) => x < 0)
    .reduce((acc, current) => acc + current);

  return [positiveArray, sumNegative];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) return [];
//   let positiveCount = input.filter(x => x > 0).length;
//   let sumNegative = input.filter(x => x < 0).reduce((acc, current) => acc + current, 0);
//   return [positiveCount, sumNegative];
// }
