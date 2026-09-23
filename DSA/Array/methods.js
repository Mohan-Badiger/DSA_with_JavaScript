// 1. Push

let fruits = ["Apple", "Banana"];
fruits.push("orange");
console.log(fruits);

//pop
fruits.pop()
console.log(fruits);

// unshift
fruits.unshift("mango");
console.log(fruits);

// shift
fruits.shift()
console.log(fruits);

// splice
// syntax array.splice(startIndex, deleteCount, item1, item2...)

fruits.splice(1, 0, "New from splice")
console.log(fruits);

fruits.splice(1, 1, "splice item 1", "splice item 2")
console.log(fruits);

let numbers = [10, 20, 30, 40, 50]
let removed = numbers.splice(1, 2)
console.log(numbers);
console.log(removed);


//===============================
console.log("===============================");

const Number = [2, 3, 5, 6, 8, 9, 10]
//map()
const doubled = Number.map(num => num * 2);
console.log(doubled);

const evens = Number.filter(num => num % 2 === 0)
console.log(evens);

const middle = Number.slice(2, 4);
console.log(middle);


//===============================
console.log("===============================");

const users = ["Mohan", "Chetan", "Sachin"]

const hasMohan = users.includes("Mohan");
console.log(hasMohan); //return true or false

const chetanIndex = users.indexOf("Chetan");
console.log(chetanIndex); //case sensitive if not fount or mismatch it return -1

const longName = users.find(name => name.length > 5);
console.log(longName); //find the first item matching a condition


//===============================
console.log("===============================");

const prices = [100, 200, 30, 50, 500];

//forEach = do something with every elements
prices.forEach((prices, index) => {
    console.log(prices, index);
});

prices.forEach((price, index) => {
    console.log(`Price of item ${index} is ₹${price}`);
})

//Reduce is used want to take an array and calculate one final result
//(sum, price) sum is accumulator, price current item
const total = prices.reduce((sum, price) => sum + price, 0)
console.log(total);


//some()
let ages = [10, 20, 16, 17, 18, 20];
let result = ages.some(age => age >= 18);
console.log(result); // prints true if one value condition is true / Does at least one match

//every
let resultOfEvery = ages.every(age => age >= 18);
console.log(resultOfEvery); //do all match then only return true

// sort()
// String =
let fruits1 = ["Apple", "Banana", "Mango"];
fruits1.sort();
console.log(fruits1);

//Numbers = it's diffrent than string for ascending and desceding used defferent 
let sortNumbers = [10, 3, 5, 3, 6, 4, 11];
let ascending = sortNumbers.sort((a, b) => a - b) //for ascending
console.log(ascending);
let descending = sortNumbers.sort((a, b) => b - a) //for descending
console.log(descending);


//===============================
console.log("===============================");

// Fill = fill a array with a single value
let fillArray = new Array(5).fill(0)
console.log(fillArray);

// Flat = flat a array up to a specified depth
const nestedArray = [1, 2, [3, 4, [5, 6], 7], 8, [9, 10]];
const flattened = nestedArray.flat(2);
console.log(flattened);

// CopyWithin
// const arrayCopy = [1, 2, 3, 4, 5];
// arrayCopy.copyWithin(1, 3, 5)
// console.log(arrayCopy);