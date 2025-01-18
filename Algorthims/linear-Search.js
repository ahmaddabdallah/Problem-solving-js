// Linear Search in Programming

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

let numbers = [10, 20, 30, 40, 50];

console.log(linearSearch(numbers, 30));


