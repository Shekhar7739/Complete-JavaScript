class user {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    LogMe() {
        console.log(`Username: ${this.username}`);
    }
    createId() {
        return `123`;
    }
}
const hitesh = new user('Shekhar');
// hitesh.LogMe();
console.log(hitesh.createId());

class Teacher extends user {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher('iPhone', 'iphone@example.com');
iphone.LogMe();