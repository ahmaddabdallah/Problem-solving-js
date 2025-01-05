/*
    - Write a function which calculates the average of the numbers in a given array.
    - Note: Empty arrays should return 0.
*/

function findAverage(array) {
    // let sum = 0;
    // for (let i = 0; i < array.length; i++) {
    //     sum += array[i];
    // }
    // return sum / array.length;
    return array.map((x) => x + x);
}

console.log(findAverage([1, 2, 3]));
