function SetUsername(username) {
    //  Complex DB Calls
    this.username = username;
    console.log("Called");
    
}
function createUser(username, email, password) {
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
    return this;
}

const chai = new createUser("ChaiaurCode", "chai@example.com", "password123");
console.log(chai);
