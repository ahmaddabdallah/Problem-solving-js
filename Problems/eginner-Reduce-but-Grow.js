/*  Beginner - Reduce but Grow  */

/*
    Given a non-empty array of integers, return the result of multiplying the
    values together in order. Example:

    Example: 
        - [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x) {
    // First Solution
    let multiTotal = 1;
    for (let i = 0; i < x.length; i++) {
        multiTotal *= x[i];
    }

    return multiTotal
    // Second Solution
    return x.reduce((acc, num) => acc * num);
}

console.log(grow([4, 1, 1, 1, 4]));
