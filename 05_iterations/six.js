const coding = ["js", "cpp", "rb", "swift"];


// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// });
// console.log(values); 

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => {return num > 4});
// console.log(newNums);
const newNums = [];
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num);
    }
});
// console.log(newNums);

const books = [
    { title: 'Book 1', genre: 'Friction', published: 2001, edition: 2004 },
    { title: 'Book 2', genre: 'Friction', published: 2010, edition: 2012 },
    { title: 'Book 3', genre: 'Non-Friction', published: 2005, edition: 2007 },
    { title: 'Book 4', genre: 'Friction', published: 2015, edition: 2018 },
    { title: 'Book 5', genre: 'Non-Friction', published: 2000, edition: 2003 },
    { title: 'Book 6', genre: 'Friction', published: 2008, edition: 2011 },
    { title: 'Book 7', genre: 'Non-Friction', published: 2003, edition: 2006 },
    { title: 'Book 8', genre: 'Friction', published: 2012, edition: 2015 },
    { title: 'Book 9', genre: 'Non-Friction', published: 2007, edition: 2010 },
    { title: 'Book 10', genre: 'Friction', published: 2004, edition: 2006 },
];
const userBooks = books.filter( (book) => {
    return book.genre === 'Friction' && book.published > 2005;
});
console.log(userBooks);
