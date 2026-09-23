/**
 * ==============================================================================
 * 📦 TOPIC: The Two-Pointer Technique (Essential DSA Pattern)
 * ==============================================================================
 * 
 * 📖 WHAT IS THE TWO-POINTER PATTERN?
 * Instead of using nested loops O(n^2), we use two index markers ("pointers")
 * that traverse the array either:
 *   1. Converging: Moving towards each other from opposite ends (left & right).
 *   2. Same Direction: Fast and Slow pointers moving in the same direction.
 * 
 * ⏱️ TYPICAL COMPLEXITY:
 * - Time  : O(n) (Each element visited at most twice)
 * - Space : O(1) (In-place manipulation without extra arrays)
 * ==============================================================================
 */

console.log("=== 1. CONVERGING POINTERS: REVERSE AN ARRAY IN-PLACE ===");
/**
 * Problem: Reverse array in-place without creating a new array.
 * Logic: Swap left and right elements, then move left++ and right--.
 * Time: O(n) | Space: O(1)
 */
function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap using ES6 destructuring
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

const arrToReverse = [1, 2, 3, 4, 5];
console.log("Original:", [1, 2, 3, 4, 5]);
console.log("Reversed in-place:", reverseArrayInPlace(arrToReverse));


console.log("\n=== 2. CONVERGING POINTERS: TWO SUM (SORTED ARRAY) ===");
/**
 * Problem: Given a SORTED array, find two numbers that sum up to target.
 * Logic:
 *  - sum = arr[left] + arr[right]
 *  - if sum === target -> return [left, right]
 *  - if sum < target   -> need bigger number -> left++
 *  - if sum > target   -> need smaller number -> right--
 * Time: O(n) | Space: O(1)
 */
function twoSumSorted(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currentSum = numbers[left] + numbers[right];

    if (currentSum === target) {
      return [left, right]; // Indices of the pair
    } else if (currentSum < target) {
      left++;  // Move right to increase sum
    } else {
      right--; // Move left to decrease sum
    }
  }

  return [-1, -1]; // No pair found
}

const sortedArr = [2, 7, 11, 15, 20];
const target = 18;
console.log(`Array: [${sortedArr}], Target: ${target}`);
console.log("Indices found:", twoSumSorted(sortedArr, target)); // [1, 2] -> 7 + 11 = 18


console.log("\n=== 3. FAST & SLOW POINTERS: REMOVE DUPLICATES FROM SORTED ARRAY ===");
/**
 * Problem: Remove duplicates in-place such that each unique element appears once.
 * Returns the number of unique elements (k).
 * 
 * Visual Logic:
 *   [1, 1, 2, 2, 3]
 *    S  F             -> nums[F] === nums[S], skip F
 *    S     F          -> nums[F] !== nums[S], increment S, copy nums[S] = nums[F]
 * 
 * Time: O(n) | Space: O(1)
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let slow = 0; // Tracks the position of unique elements

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast]; // Move unique item forward
    }
  }

  // Length of unique subarray is slow + 1
  return slow + 1;
}

const duplicatesArr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const uniqueCount = removeDuplicates(duplicatesArr);
console.log("Unique Count:", uniqueCount);
console.log("Array with unique prefix:", duplicatesArr.slice(0, uniqueCount));


console.log("\n=== 4. FAST & SLOW POINTERS: MOVE ZEROES TO END ===");
/**
 * Problem: Move all 0's to the end of the array while maintaining the
 * relative order of non-zero elements.
 * Time: O(n) | Space: O(1)
 */
function moveZeroes(nums) {
  let insertPos = 0; // Where the next non-zero should be placed

  // Step 1: Shift all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap nums[i] with nums[insertPos]
      [nums[insertPos], nums[i]] = [nums[i], nums[insertPos]];
      insertPos++;
    }
  }
  return nums;
}

const withZeroes = [0, 1, 0, 3, 12];
console.log("Original with zeroes:", [0, 1, 0, 3, 12]);
console.log("Moved zeroes to end:", moveZeroes(withZeroes)); // [1, 3, 12, 0, 0]

console.log("\n✅ Two-Pointer techniques mastered!");
