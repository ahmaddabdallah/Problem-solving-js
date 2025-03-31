/* Is it a palindrome */

/*
    Write a function that checks if a given string (case insensitive) is a palindrome.
    A palindrome is a word, number, phrase, or other sequence of symbols that 
    reads the same backwards as forwards, such as madam or racecar.
*/

function isPalindrome(x) {
    let reverseWord = x.split("").reverse().join("")
    if (reverseWord.toLowerCase() === x.toLowerCase()) return true
    else return false
}

console.log(isPalindrome("hello"))