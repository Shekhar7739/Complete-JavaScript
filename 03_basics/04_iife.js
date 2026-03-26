// Immediately Invoked Function Expressions(IIFE) are a common 
// JavaScript pattern that allows you to execute a function 
// immediately after defining it.This is often used to create
// a new scope and avoid polluting the global namespace.

(function chai() {
    // named IIFE
    console.log("DB CONNECTED");
})();

( function aurcode() {
    console.log("DB CONNECTED two");
})();
( (name) => {
    console.log("DB CONNECTED three ${name}");
})("shekhar");
// chai() ; // Output: DB CONNECTED