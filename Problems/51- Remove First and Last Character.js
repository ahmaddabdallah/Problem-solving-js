/*
    Remove First and Last Character

        This function removes the first and last character from a string.
        For example, if the input is "Hello", the output will be "ell".

        The solution uses the slice() method which extracts a section of a string
        without modifying the original string.
*/

// let test = "Ahmad";

// console.log(test.slice(1 , test.length - 1))
// console.log(test.slice(1 , -1))

function removeChar(str) {
    return str.length > 2 ? str.slice(1, -1) : "";
    // return str.slice(1, str.length - 1) // argument -1 is the same as 'str.length -1'
}

// Test cases
console.log(removeChar("Hello")); // Should return "ell"
console.log(removeChar("Ahmad")); // Should return "hma"
console.log(removeChar("ab")); // Should return ""
console.log(removeChar("eloquent")); // Should return "loquen"
console.log(removeChar("country")); // Should return "ountr"
console.log(removeChar("person")); // Should return "erso"
console.log(removeChar("place")); // Should return "lac"
console.log(removeChar("ooopsss")); // Should return "oopss"
