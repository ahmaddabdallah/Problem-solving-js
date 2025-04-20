/* 49- Printing Array elements with Comma delimiters */

/*
    Description:
    ------------
    Input: Array of elements
    Example: ["h","o","l","a"]

    Output: String with comma delimited elements of the array in the same order.
    Example: "h,o,l,a"

    Notes:
    - If this seems too simple for you, try the next level
    - The input data can be: boolean array, array of objects, array of string arrays, 
    array of number arrays, etc.
*/

function printArray(array) {
    // return array.join(",");
    return array + "";
}

console.log(printArray(["A", "h", "m", "a", "d"]));

/* Solution
    - return a+'';
*/
