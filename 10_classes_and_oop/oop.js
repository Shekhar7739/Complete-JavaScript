const user = {
    username: "Shekhar",
    LoginCount: 25,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user detailes from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


const user2 = {
    username: "Shekhar",
    LoginCount: 25,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user detailes from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
        
    }
}
function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    return this
}
const userOne = new User("Shekhar", 25, true);
const userTwo = new User("Chai", 30, false);
console.log(userOne);
console.log(userTwo);