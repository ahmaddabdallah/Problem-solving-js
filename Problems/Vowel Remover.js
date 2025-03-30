/*
    Vowel remover (retired)
    - Create a function called shortcut to remove the lowercase 
    - vowels (a, e, i, o, u ) in a given string.
*/

/* 
    Solution:
    - Create a array that contain the Vowel Letter
    - loop through the string given
    - check if the string that include the five letter
    - return the results
*/

function shortcut(string) {
    // let vowelLetters = ["e", "a", "i", "o", "u"];
    // let result = []
    // for (let i = 0; i < string.length; i++) {
    //     if (!vowelLetters.includes(string[i])) {
    //         result.push(string[i])
    //     }
    // }
    // return result.join("")
    return string.replace(/[eaiou]/g, "");
}

console.log(shortcut("hello"));
