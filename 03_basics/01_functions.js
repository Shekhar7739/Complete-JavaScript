function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
    console.log("H");
    console.log("A");
    console.log("R");
}
// sayMyName()
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }
function addTwoNumbers(number1, number2){
    // let rsult = number1 + number2;
    // return rsult;
    return number1 + number2;

    
}
const result = addTwoNumbers(3,4);
// console.log(result);

// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

function loginUserMessage(username){
    if(username === undefined){
        // console.log("Please enter a username")
        return;
    }
    return `${username} just logged in`
}
//const message = loginUserMessage("Shekhar")
const message = loginUserMessage()
// console.log(message)


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(100,200,300,400));
const user = {
    name: "Shekhar",
    price: 1000,
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({username: "Alice",
     price: 1500
})

const myNewArray = [200,400,600,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
