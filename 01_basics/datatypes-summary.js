// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symboll, BigInt

const score = 100
const scodeValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// Symbol:-
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// BigInt:-
const bigNumber = 34876042748727623465n



// Reference (Non Primitive)

// Array, Objects, Functions,
// Array:-
const heros = ["Shaktiman", "naagraj", "doga"]
// Objects:-
let myObj = {
    name: "Shekhar",
    age: 22,
}
// Function:-
const myFunction = function () {
    console.log("Hello world");
}
// TYpe of :-
console.log(typeof bigNumber);

// Type of Operator
// Undefined => undefined
// Null => object
// Boolean => boolean
// Number => Number
// String => string
// object(native and does not implement[[call]]) ===> object
// object(native or host and does not implement[[call]]) ===> function
// object(host and does not implement[[call]]) ===> implementation-defined except may not be "undefined","boolean","number",or"string


// Stack (primitive), Heap (Non-Primitive)  =>  reference


let myYoutubename = "shekhar Suman"

let anothername = myYoutubename
anothername = "Chai aur Code"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shekhar@google.com"

console.log(userOne.email);
console.log(userTwo.email);