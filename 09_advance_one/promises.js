const promisesOne = new Promise(function (resolve, reject) {
    // Asynchronous operation task
    // DB Calls,ceyptography,network calls
    setTimeout(function () {
        console.log('Async task is complete');
        resolve("Promise One Resolved");
    }, 1000);
});
promisesOne.then(function () {
    console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve();
    }, 1000);
}).then(function () {
    console.log("Promise 2 consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('Async task 3');
        resolve({ Username: "Chai", email: "chai@example.com" });
    }, 1000);
});
promiseThree.then(function (user) {
    console.log("Promise 3 consumed", user);
});

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ Username: "Shekhar", password: "12345" });
        }
        else {
            reject("Something went wrong");
        }
    }, 1000);
});
const username = promiseFour.then((user) => {
    console.log("Promise 4 consumed", user);
    return user.Username;
}).then((username) => {
    console.log("Username is", username);
}).catch((error) => {
    console.log("Error is", error);
}).finally(() => {
    console.log("Promise 4 is either resolved or rejected");
});


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ Username: "JavaScript", password: "12345" });
        }
        else {
            reject("Something went wrong");
        }
    }, 1000);
});
// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// };
// consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await responce.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers();
fetch('https://api.github.com/users')
.then((responce) => {
    return responce.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("E:", error);
})