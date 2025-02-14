/*
    Take an array and remove every second element from the array. Always keep the first
    element and start removing with the next element.
*/

/* Solution */

// Create a new Array
// Loop through Array
// Check if the element in the second position
// Remove the second position
// Return the new Array

/* First Answer */

// function removeEveryOther(arr) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 == 0) {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }

/* Another Answer*/
function removeEveryOther(arr) {
    return arr.map(x , () => {
        x % 2 == 0 ? x : ""
    })
}


console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
