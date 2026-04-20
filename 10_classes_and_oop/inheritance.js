class user {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    Logme() {
        console.log(`USRNAME: ${this.username}`);
    }
}
class Teacher extends user {
    constructor(username, email, password) {
        super(username, email);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`Course added by ${this.username}`);
    }
}
const chai = new Teacher('Chai', 'chai@example.com', 'password123');
chai.Logme();
chai.addCourse();

const masalaChai = new Teacher('Masala Chai', 'masalachai@example.com', 'password456');
masalaChai.Logme();
// masalaChai.addCourse();
console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);