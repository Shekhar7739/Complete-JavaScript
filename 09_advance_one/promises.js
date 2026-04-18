const promisesOne = new Promise(function (resolve, reject) {
    // Asynchronous operation task
    // DB Calls,ceyptography,network calls
    setTimeout(function() {
        console.log('Async task is complete');
        // resolve("Promise One Resolved");
    }, 1000);
});
promisesOne.then(function () {
    console.log("Promise consumed");
});