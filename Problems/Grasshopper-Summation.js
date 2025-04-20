/* Grasshopper - Summation */

/*
    Summation

    Write a program that finds the summation of every number from 1 to num (both inclusive).
    The number will always be a positive integer greater than 0.
    Your function only needs to return the result, what is shown between parentheses
    in the example below is how you reach that result and it's not part of it.

    For example (Input -> Output):

    2 -> 3 (1 + 2)
    8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

/* Old Way to Solve the Problem */

// function summation(num) {
//     let emptyArray = 0;
//     for (let i = 0; i <= num; i++) {
//         emptyArray += i;
//     }
//     return emptyArray;
// }

// console.log(summation(8));

/* Another Way to solve the Problem */

function summation(num) {
    return num >= 0 ? (num * (num + 1)) / 2 : false;
}

console.log(summation(8));
