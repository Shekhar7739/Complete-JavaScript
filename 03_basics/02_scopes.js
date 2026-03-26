// let a = 5;
// const b = 10;
// var c = 15;
let a = 300;
if (true) {
    let a = 20;
    const b = 25;
    // console.log("Inner:", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "John";

    function two() {
        const website = "youtube";
        // console.log(username);
    }
    // console.log(website);
    two();
}
one();

if (true) {
    const username = "Shekhar";
    if(username === "Shekhar") {
        const website = "youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// +++++++++++++++++++ Interesting ++++++++++++++++++++

console.log(addone(5));
function addone(num) {
    return num + 1;
}

addtwo(5);
const addtwo = function(num) {
    return num + 2;
}
