/*
    Get the mean of an array
    - It's the academic year's end, fateful moment of your school report. 
    - The averages must be calculated. All the students come to you and entreat 
    - you to calculate their average for them. Easy ! You just need to write a script.
    - Return the average of the given array rounded down to its nearest integer.
    - The array will never be empty.
*/

/*
    Solution (1):
        1- Declare emptyVariable to initial value
        2- Loop through the given array 
        3- Declare variable the contain the average values
        4- Add each number into a A Average Number variable
        5- return the average value with a round it
*/

function getAverage(marks) {
    // let emptyArray = 0;
    // for (let i = 0; i < marks.length; i++) {
    //     emptyArray += marks[i];
    // }
    // let AverageNumber = emptyArray / marks.length
    // return Math.round(AverageNumber)
    // Best Solution
    return Math.floor(marks.reduce((acc , num) => acc + num)/ marks.length);
}

console.log(getAverage([10, 20, 99, 89, 58, 78, 96]));
