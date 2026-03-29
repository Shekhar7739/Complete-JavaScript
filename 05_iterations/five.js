const coding = ["js", "cpp", "rb", "swift"];
// coding.forEach( function (item) {
//     console.log(item);
// });
// coding.forEach( (item) => {
//     console.log(item);
// });
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach( (item, index, array) => {
//     // console.log(`Item: ${item}, Index: ${index}, Array: ${array}`);
//     console.log(item,index,array);

// });

const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'C++',
        languageFileName: 'cpp'
    },
    {
        languageName: 'Ruby',
        languageFileName: 'rb'
    },
];
myCoding.forEach( (item) =>{
    console.log(item.languageName);
    
});