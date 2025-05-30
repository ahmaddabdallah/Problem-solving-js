/**
 * First Problem: Variable Scope and Hoisting
 * Demonstrates the difference between var and let in different scopes
 */
console.log("-".repeat(30));
var a = 5;
var b = 10;
if (a === 5) {
    let a = 4;
    var b = 1;
    console.log(`Result one => ${a + b}`);
}
console.log(`Result two => ${a + b}`);

// Expected Output:
// Result one => 5
// Result two => 6

/**
 * Second Problem: Object Comparison
 * Shows how object comparison works in JavaScript
 */
console.log("-".repeat(30));
var a = { x: 1 };
var b = { x: 1 };

console.log(`Second Problem Is => ${a == b}`);
console.log("-".repeat(30));

/**
 * Third Problem: Type Coercion
 * Demonstrates type coercion in comparison operations
 */
let num1 = "10";
let num2 = 20;
console.log(`Third Problems => ${num1 < num2}`);

console.log("-".repeat(30));

/**
 * Fourth Problem: Array Manipulation
 * Shows the effect of delete operator on arrays
 */
var arr = [10, 20, 30, 40, 50];
delete arr[3];
console.log(`this is the length of the Array => ${arr.length}`);
console.log("-".repeat(30));

/**
 * Fifth Problem: Variable Hoisting
 * Demonstrates variable hoisting behavior in functions
 */
var x = 1;
function change() {
    x = 10;
    return;
    var x;
}

console.log(x);
change();
console.log("-".repeat(30));

/**
 * Sixth Problem: Type Conversion
 * Shows automatic type conversion in arithmetic operations
 */
var value = "5" * "6";
console.log(typeof value);

/**
 * Eighth Problem: Function Behavior
 * Demonstrates various JavaScript behaviors:
 * - String concatenation vs addition
 * - Pre-increment operator
 * - Unary minus operator
 * - Type of Date object
 */
function sum(a, b) {
    return a + b;
}

console.log(sum(3, "4"));

let num = 2;
console.log(++num);

console.log("1" - -"1");

console.log(typeof new Date());
