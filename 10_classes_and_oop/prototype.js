// let myName = "Shekhar     ";
// let myChannel = "CodeWithShekhar    ";
// console.log(myName);
// console.log(myName.truelength);
// console.log(myName.trim().length);
// console.log(myChannel.truelength);

let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderpower: function () {
        console.log(`Spiderman's power is ${this.spiderman}`);
    }

}

Object.prototype.shekhar = function () {
    // console.log("Shekhar is present in all objects");
}

Array.prototype.heyhekhar = function () {
    // console.log("Hey Shekhar!");
}


// heroPower.shekhar()
myHero.shekhar();
myHero.heyhekhar();
// heroPower.heyhekhar();

//  Inheritance in JavaScript is a fundamental concept that allows objects to inherit properties and methods from other objects. This is achieved through the prototype chain. When you create an object in JavaScript, it has a hidden property called [[Prototype]], which points to another object. If you try to access a property or method on an object and it doesn't exist, JavaScript will look up the prototype chain until it finds the property or reaches the end of the chain (null).

// This allows for a form of inheritance, where objects can share properties and methods defined on their prototypes. For example, if you define a method on the prototype of a constructor function, all instances created from that constructor will have access to that method through the prototype chain. This is how JavaScript implements inheritance and allows for code reuse across different objects.    

const User = {
    name: "Shekhar",
    email: " chai@domain.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false,
}
const TASupport = {
    makeAssignment: "JavaScript assignment",
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User;

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiaurCode";

String.prototype.truelength = function () {
    console.log(`Hello ${this}`);
    console.log(`The length of the string is ${this.trim().length}`);
}
anotherUsername.truelength();
"Shekhar".truelength();
"Chai".truelength();