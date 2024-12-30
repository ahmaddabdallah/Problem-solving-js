/*
    1- Your task is to create a function that does four basic mathematical operations.
    2- The function should take three arguments - operation(string/char), value1(number), value2(number).
    3- The function should return result of numbers after applying the chosen operation.
*/

function basicOp(operation, value1, value2) {
  //   if (operation === '+') return value1 + value2;
  //   else if (operation === '-') return value1 - value2;
  //   else if (operation === '*') return value1 * value2;
  //   else if (operation === '/') return value1 / value2;
  //   else return 'Invalid operation';
  return eval(value1 + operation + value2);
}

console.log(basicOp('*', 10, 20)); // Outputs: 12
