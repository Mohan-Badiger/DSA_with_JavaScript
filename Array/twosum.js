//using brute force approach 

// function targetSum(arr, target) {

//     let output = []

//     for (let i = 0; i <= arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if ((arr[i] + arr[j]) === target) {
//                 output.push(arr[i], arr[j])
//             }
//         }
//     }
//     return output;
// }

// console.log(targetSum([2, 7, 11, 15], 9));



// //using two sum approach(best for sorted array)
// function findTargetSum(nums, target) {
//     // 1. Initialize two pointers: one at the start, one at the end
//     let left = 0;
//     let right = nums.length - 1;

//     // 2. Loop until the two pointers meet
//     while (left < right) {
//         const currentSum = nums[left] + nums[right];

//         // Condition A: Target found
//         if (currentSum === target) {
//             return [left, right]; // Returns the 0-based indices
//         }

//         // Condition B: Sum is too small, move left pointer to increase the sum
//         if (currentSum < target) {
//             left++;
//         }
//         // Condition C: Sum is too large, move right pointer to decrease the sum
//         else {
//             right--;
//         }
//     }

//     // Return empty array if no pair matches the target
//     return [];
// }

// // --- Example Usage ---
// const sortedArray = [2, 3, 4, 5, 6];
// const target = 7;

// console.log(findTargetSum(sortedArray, target));
// // Output: [1, 3] (indices of 2 and 7, because 2 + 7 = 9)


//using hashmap (best for unsorted array)
function twoSumHashMap(nums, target) {
    // Create an empty Map to store: Key -> Number, Value -> Index
    const seenNumbers = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        // Check if the complement exists in our map
        if (seenNumbers.has(complement)) {
            // If found, return the index of the complement and the current index
            return [seenNumbers.get(complement), i];
        }

        // Otherwise, save the current number and its index to the map
        seenNumbers.set(currentNum, i);
    }

    return []; // Return empty array if no pair is found
}

// Example usage:
console.log(twoSumHashMap([3, 2, 4], 6)); // Output: [1, 2] (because 2 + 4 = 6)
