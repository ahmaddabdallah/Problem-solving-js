/* Reversed Strings */

/* Complete the solution so that it reverses the string passed into it.
    - 'world'  =>  'dlrow'
    - 'word'   =>  'drow' 
*/

function solution(str) {
    let emptyArray = "";
    for (let i = str.length - 1; i >= 0; i--) {
        emptyArray += str[i];
    }
    return emptyArray;
    // Second Solution
    // return str.split("").reverse().join("")
}

console.log(solution("world"));
