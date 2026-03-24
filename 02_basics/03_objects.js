//  singleton
//Object.create

// object Literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Shekhar",
    "full name": "Shekhar Suman",
    [mySym]: "mykey1",
    age: 18,
    Location: "Jaipur",
    email: "Shekhar@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Suman@google.com"
//Object.freeze(JsUser)
JsUser.email = "Hitest@google.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");

}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
