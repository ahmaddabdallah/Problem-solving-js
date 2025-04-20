/* Convert a String to a Number
   
   Description:
   ------------
   We need a function that can transform a string into a number. What ways of
   achieving this do you know?
   
   Note: Don't worry, all inputs will be strings, and every string is a perfectly valid 
   representation of an integral number.
   
   Examples:
   stringToNumber("123") // returns 123
   stringToNumber("999") // returns 999
*/

const stringToNumber = function (str) {
    return Number(str);
};

console.log(typeof stringToNumber("454"));
