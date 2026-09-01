let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


// for (let num of numbers) {
//     console.log(num);
// }

let ages = [10, 8, 18, 50, 41, 21, 19, 50]

let above18 = ages.some(age => age >= 18);

console.log(above18);
