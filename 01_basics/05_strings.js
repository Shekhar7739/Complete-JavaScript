const name = "Shekhar"
const repoCount = 50

//console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shekhar')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('k'));

const newstring = gameName.substring(0,4)
console.log(newstring);

const anotherString = gameName.slice(-7,3)
console.log(anotherString);

const newStringOne = "   Shekhar   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://shekhar.com/shekhar%20suman"

console.log(url.replace('%20','-'));

console.log(url.includes('shekhar'));
console.log(url.includes('Rohan'));

console.log(gameName.split(' - '));