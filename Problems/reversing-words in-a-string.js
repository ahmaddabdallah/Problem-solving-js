/*
    You need to write a function that reverses the words in a given string. Words are always 
    separated by a single space.
    As the input may have trailing spaces, you will also need to ignore unnecessary whitespace.
*/

/* Solution */

/*
    - turn the string into Array
    - reverse the Array 
    - turn the array into String
*/

function reverse(string) {
    return string.split(" ").reverse().join(" ");
}

console.log(reverse("Hello world"));
