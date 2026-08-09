// if array items are dublicate return true else return false

// let dublicate = (arr) => {
//     let set = new Set(arr);
//     return set.size !== arr.length
// }

// console.log(dublicate([1, 2, 1, 3, 5, 6, 7]));


let array = [10, 20, 30, 40]

array.unshift('01')

let newArray = array.map(Number)

console.log(newArray);
