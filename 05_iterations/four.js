const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple',
}
for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} : ${myObject[key]}`);
}
const programming = ['JavaScript', 'C++', 'Ruby', 'Swift'];
for (const key in programming) {
    // console.log(programming[key]);   
}
// const myMap = new Map();
// myMap.set('name', 'John');
// myMap.set('age', 30);
// myMap.set('city', 'New York');
// for (const key in myMap) {
//     console.log(key);
// }