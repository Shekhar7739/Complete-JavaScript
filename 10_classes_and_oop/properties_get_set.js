function User(email,password) {
    this.email = email;
    this.password = password;

    Object.defineProperty(this, "email", {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value
        }
    });
    Object.defineProperty(this, "password", {
        get: function() {
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value
        }
    });
}

const hitesh = new User("hitesh@ai.com", "abc123"); 
console.log(hitesh.email); // direct access to the property
// console.log(hitesh.password); // access to the property via getter
