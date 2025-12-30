/* function largest(arr) {
    let large = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > large) {
            large = arr[i]
        }
    }
    return large;
}

console.log(largest([4, 5, 1, 3]));
*/

/*
let numbers = [1,2,3,4,5]

let doubled = numbers.map((value)=>{
    return value *2;
})

console.log(doubled)*/

/*let petrolPrices = 105;
let userNeed = 2

let pay = petrolPrices*userNeed

console.log(pay);*/


let marks = [10,15,30,20,30,40,50];

// let results = []

// for(let i =0; i< marks.length; i++){
//     if(marks[i]>20){
//         results.push(marks[i])
//     }
// }

// console.log(results);


let result = marks.filter((value)=>{
  return value>20 && [...new Set(value)]
})

console.log(result);
