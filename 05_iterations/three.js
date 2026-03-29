// for of
// ["",'', ]
// [{},{},{}]
const arr = ['a', 'b', 'c'];

for (const num of arr){
    // console.log(num);
}
const greatings = "Hello World";
for (const greet of greatings){
    // console.log(`Each char is: ${greet}`);
}

//  Maps
const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');
console.log(myMap);
for (const key of myMap){
    console.log(key);
}
const myObject = {
    'game1': 'Chess',
    'game2': 'Football',
    'game3': 'Basketball'
};
// for (const [key, value] of myObject){
//     console.log(key,':-' , value);
// }

