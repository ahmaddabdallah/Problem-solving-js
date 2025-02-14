// Find max Number

// grades = [10, 29, 39, 50, 90];

// function findMax(nums) {
//     let max = 0;
//     for (let num of nums) {
//         if (num > max) {
//             max = num;
//         }
//     }
//     return max;
// }

// console.log(findMax(grades));

let students = [
    { name: "Ahmad", score: 60 },
    { name: "Ali", score: 800 },
    { name: "Asmaa", score: 70 },
];

function findTopScore(items) {
    let top = items[0];
    for (let item of items) {
        if (item.score > top.score) {
            top = item
        }
    }
    return top;
}

console.log(findTopScore(students));