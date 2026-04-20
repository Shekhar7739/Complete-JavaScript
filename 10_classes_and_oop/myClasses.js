//  ES6

// class User {
//     constructor(Username, email, password) {
//         this.username = Username;
//         this.email = email;
//         this.password = password;
    
//     }
//     encryptPassword() {
//         return `${this.password}123`;
//     }
//     changeUsername(newUsername) {
//         return `${this.username.toUpperCase()}`;
//     }
// }
// const chai = new User("ChaiaurCode", "chai@example.com", "password123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//  Behind the scenes, JavaScript uses prototypes to achieve inheritance and method sharing. When you create a class in JavaScript, it is essentially syntactic sugar over the existing prototype-based inheritance system. Each instance of the class has access to the methods defined on the class's prototype. This means that when you call a method on an instance, JavaScript looks up the prototype chain to find the method definition. If the method is not found on the instance itself, it checks the prototype, and if it's not found there, it continues up the chain until it reaches the end (null). This allows for efficient memory usage, as all instances share the same method definitions on the prototype rather than having their own copies.

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}123`;
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
}


const tea = new User("tea", "tea@example.com", "123");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());