// const userEmail = "shekhar@gmail.com";
const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("No email found");
}
// falsy values:- false ,0, -0, BigInt, 0n, "", null, undefined, NaN
// truthy values:- " ", "0", 'false', [], {}, function(){} , true, 1, -1, BigInt, 1n, Symbol()

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

// Nulllish coalescing operator (??) :- is used to provide a default 
// value when the left-hand side is null or undefined. It is a logical 
// operator that returns the right-hand side operand when the 
// left-hand side operand is null or undefined, and otherwise returns 
// the left-hand side operand.

let val1;
val1 = 5 ?? 10; // val1 will be 5 because it is not null or undefined
val1 = null ?? 10; // val1 will be 10 because the left-hand side is null
val1 = undefined ?? 15; // val1 will be 10 because the left-hand side is undefined
val1 = null ?? 10 ?? 20; // val1 will be 20 because both left-hand sides are null or undefined


console.log(val1);

// Ternary operator (?:) :- is a conditional operator that takes three 
// operands: a condition, an expression to execute if the condition is true, 
// and an expression to execute if the condition is false. 
// It is a shorthand way of writing an if-else statement.

// condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("more than 80");