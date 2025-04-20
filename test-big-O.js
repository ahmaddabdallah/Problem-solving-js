function minValue(arrayList) {
    return Math.min(...arrayList);
}

const largeArray = Array.from({ length: 1000 }, () =>
    Math.floor(Math.random() * 10000)
);

console.log("Minimum value:", minValue(largeArray));