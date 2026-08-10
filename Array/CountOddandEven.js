// Given an array arr[] of positive integers. The task is to return the count of the number of odd and even elements in the array.

// Note: Return two elements where the first one in the count of odd & second one is the count of even.
function countOddEven(arr) {
    // Your code here
    let even = 0;
    let odd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even++
        } else {
            odd++
        }
    }
    return [even, odd];
}

console.log(countOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
