/*
    Square(n) Sum

    This function takes an array of numbers and returns the sum of the squares of those numbers.
    For example, if the input is [1, 2, 3], the output will be 14 (1² + 2² + 3² = 1 + 4 + 9 = 14).

    The solution will use the map() method to square each number in the array,
    and then the reduce() method to sum all the squared values.
*/

function squareSum(numbers) {
    // let initNum = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     initNum += Math.pow(numbers[i] , 2);
    // }
    // return initNum
    return numbers.map(n => n * n).reduce((acc , current) => acc + current , 0)
}


// Test cases
console.log(squareSum([1, 2, 3])); // Should return 14 (1² + 2² + 3² = 1 + 4 + 9 = 14)
console.log(squareSum([0, 3, 4, 5])); // Should return 50 (0² + 3² + 4² + 5² = 0 + 9 + 16 + 25 = 50)
console.log(squareSum([])); // Should return 0 (empty array)
console.log(squareSum([1, 2])); // Should return 5 (1² + 2² = 1 + 4 = 5)
console.log(squareSum([5, 3, 4])); // Should return 50 (5² + 3² + 4² = 25 + 9 + 16 = 50)
console.log(squareSum([-1, -2])); // Should return 5 ((-1)² + (-2)² = 1 + 4 = 5)
console.log(squareSum([2])); // Should return 4 (2² = 4)
console.log(squareSum([10, 10, 10])); // Should return 300 (10² + 10² + 10² = 100 + 100 + 100 = 300)
