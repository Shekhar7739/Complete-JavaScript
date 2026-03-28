// IF Statement

// if (true) {
//     console.log("This will always run");
// }

// if (false) {
//     console.log("This will never run");
// }

// const isuserLoggedIn = true;
// const temeperature = 30;


// if (temeperature === 30) {
//     console.log("less than 30");

// }
// else {
//     console.log("temperature is not equal to 30");
// }

// < ,>, <=, >, <=, ==, ===, !=, !==

// const score = 200
// if (score >= 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);


// const balance = 1000;
//........... Implesit if statement.........
// if (balance > 500) console.log("test"),console.log("test2");

// if (balance > 500) {
//     console.log("Less than ");
// } else if (balance < 750) {
//     console.log("Less than 750");
// }else if (balance < 900) {
//     console.log("Less than 750");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInWithGoogle = false;
const loggedInWithEmail = true;

if (userLoggedIn && debitCard && 2==2) {
    console.log("You can buy this product");
}
if (loggedInWithGoogle || loggedInWithEmail) {
    console.log("You can login");
}