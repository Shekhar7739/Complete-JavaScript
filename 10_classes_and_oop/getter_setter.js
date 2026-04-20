class user {
    constructor(email, password,) {
        this.email = email ;
        this.password = password;
    }
    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value.toUpperCase();
    }
    get password() {
        return this._password.toUpperCase();
    }
    set password(value) {
        this._password = value.toUpperCase();
    }
}

const hitesh = new user("hitesh@ai.com", "abc123");
console.log(hitesh.email); // direct access to the property
console.log(hitesh.password); // access to the property via getter
