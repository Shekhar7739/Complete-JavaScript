const accountId = 144553
let accountEmail = "suman@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 //not allowed
accountEmail = "jksh@hhb.com"
accountCity = "bengaluru"
accountPassword = 1254657865734

console.log(accountId);
console.log(accountEmail);
console.log(accountCity);

/*
prefer not to use var
because of issue in block scope and function scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


