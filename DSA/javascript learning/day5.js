// Reverse a String
// let str  = "mohan";
// let rev = str.split("").reverse().join("");
// console.log(rev);


// Palindrome
// let str = "madam";
// let rev = str.split("").reverse().join("");
// console.log(str === rev);

// Find Largest Number
// let arr = [10, 50, 30];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) max = arr[i];
// }
// console.log(max);


// Prime Number
let num = 7;
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);

