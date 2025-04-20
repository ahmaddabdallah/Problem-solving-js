/* Basic Mathematical Operations
   
   Description:
   ------------
   Your task is to create a function that does four basic mathematical operations.
   
   The function should take three arguments:
   - operation (string/char): '+', '-', '*', or '/'
   - value1 (number): first operand
   - value2 (number): second operand
   
   The function should return the result of applying the chosen operation to the two values.
   
   Examples:
   basicOp('+', 4, 7) // returns 11
   basicOp('-', 15, 18) // returns -3
   basicOp('*', 5, 5) // returns 25
   basicOp('/', 49, 7) // returns 7
*/

function basicOp(operation, value1, value2) {
    //   if (operation === '+') return value1 + value2;
    //   else if (operation === '-') return value1 - value2;
    //   else if (operation === '*') return value1 * value2;
    //   else if (operation === '/') return value1 / value2;
    //   else return 'Invalid operation';
    return eval(value1 + operation + value2);
}

console.log(basicOp("*", 10, 20)); // Outputs: 12
