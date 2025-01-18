function findMax(arr) {
    // let maxValue = arr[0];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > maxValue) {
    //         maxValue = arr[i];
    //     }
    // }
    // return maxValue;

    return Math.max(...arr);
}

console.log(findMax([1, 3, 2, 4, 60, 3]));
