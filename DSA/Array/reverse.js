//Reverse an array

//<----Method 1----> using for loop---------------------------------------------------------------
// let array = [1, 2, 3, 4, 5, 6, 7];
// let reverse = []
// for (let i = array.length - 1; i >= 0; i--) {
//     reverse.push(array[i])
// }
// console.log(reverse);

//<----Method 2--------> using built in function inline-------------------------------------------
// let array = [1, 2, 3, 4, 5, 6, 7];
// array.reverse()

// console.log(array);

//Method 3 using built in function-----------------------------------------------------------------
// let array = [1, 2, 3, 4, 5, 6, 7];
// let reversed = array.toReversed()

// console.log(reversed);


//method 4 using two pointer function--------------------------------------------------------------
function reverseInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap elements using destructuring assignment
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(reverseInPlace([3, 5, 1, 2, 3])); // [40, 30, 20, 10]
