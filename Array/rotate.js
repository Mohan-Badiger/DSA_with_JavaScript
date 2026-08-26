// Given an array arr, rotate the array by one position in clockwise direction.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 5]
// Output: [5, 1, 2, 3, 4]
// Explanation: If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted to the end.

// Input: arr[] = [9, 8, 7, 6, 4, 2, 1, 3]
// Output: [3, 9, 8, 7, 6, 4, 2, 1]
// Explanation: After rotating clock-wise 3 comes in first position.

// Method 1
// function rotate(arr) {
//     let item = arr.pop()
//     arr.unshift(item)
//     return arr
// }

// console.log(rotate([1, 2, 3, 4, 5, 6]));


//Method 2
// function rotate(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     arr.unshift(arr.pop())
//     return arr

// }

// console.log(rotate([1, 2, 3, 4, 5]));

//Method 3
const rotateClockwiseImmutable = (arr) => {
    if (arr.length <= 1) return [...arr];
    return [arr[arr.length - 1], ...arr.slice(0, -1)];
};

console.log(rotateClockwiseImmutable([1, 2, 3, 4, 5]));
