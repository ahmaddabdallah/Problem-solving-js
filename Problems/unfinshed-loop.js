function createArray(number) {
    const newArray = [];
    // we will forget the counter++
    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}
