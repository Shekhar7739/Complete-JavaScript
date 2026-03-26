const user = {
  name: 'Shekhar',
  price: 999,
  welcomeMessage: function() {
    console.log(`Welcome ${this.name} to our website`);
    console.log(this);
    
  }

}
// user.welcomeMessage();
// user.name = "Shekhar Kumar";
// user.welcomeMessage();
// console.log(this);

// function chai() {
//     let username = "Shekhar";
//     console.log(this);
    
// }
// chai();


// const chai = function(){
//     let username = "Shekhar";
//     console.log(this.username);
// }
// const chai = () => {
//     let username = "Shekhar";
//     console.log(this);
// }
// chai();

// const AddTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const AddTwo = (num1, num2) => num1 + num2;
// const AddTwo = (num1, num2) => (num1 + num2);
const AddTwo = (num1, num2) => ({username: "Shekhar"});

console.log(AddTwo(5, 10));
