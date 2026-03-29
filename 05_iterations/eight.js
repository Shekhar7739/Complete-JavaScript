const myNums = [1,2,3,4,5,6,7,8,9,10];

// const myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 3);
const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0);

// console.log(myTotal)

const shoppingCart = [
    { itemName: 'Book', price: 10 },
    { itemName: 'Pen', price: 2 },
    { itemName: 'Notebook', price: 5 },
    { itemName: 'Pencil', price: 1 },
    { itemName: 'Eraser', price: 0.5 },
];
const totalPrice = shoppingCart.reduce( (acc, currval) => acc + currval.price, 0);
console.log(totalPrice);