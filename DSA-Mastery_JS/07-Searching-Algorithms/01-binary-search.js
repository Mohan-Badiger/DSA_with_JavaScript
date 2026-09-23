/**
 * ==============================================================================
 * 📦 TOPIC: Binary Search (Iterative, Recursive & Boundaries)
 * ==============================================================================
 * 
 * ⏱️ COMPLEXITY:
 * - Time  : O(log n)
 * - Space : O(1) iterative, O(log n) recursive
 * ==============================================================================
 */

console.log("=== 1. ITERATIVE BINARY SEARCH ===");
/**
 * Prerequisite: Array MUST be sorted!
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Avoid integer overflow bug in other languages: left + Math.floor((right - left) / 2)
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found at index mid!
    } else if (arr[mid] < target) {
      left = mid + 1; // Discard left half
    } else {
      right = mid - 1; // Discard right half
    }
  }

  return -1; // Target not found
}

const sortedList = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log("Sorted Array:", sortedList);
console.log("Search 23 -> Index:", binarySearch(sortedList, 23)); // 5
console.log("Search 50 -> Index:", binarySearch(sortedList, 50)); // -1


console.log("\n=== 2. FIND FIRST AND LAST POSITION IN SORTED ARRAY ===");
/**
 * Problem: Given a sorted array with duplicates, find first and last occurrence of target.
 * Example: nums = [5, 7, 7, 8, 8, 10], target = 8 -> [3, 4]
 */
function searchRange(nums, target) {
  function findBound(isFirst) {
    let left = 0;
    let right = nums.length - 1;
    let bound = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        bound = mid;
        if (isFirst) {
          right = mid - 1; // Keep searching left for first occurrence
        } else {
          left = mid + 1;  // Keep searching right for last occurrence
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return bound;
  }

  return [findBound(true), findBound(false)];
}

const dupArray = [5, 7, 7, 8, 8, 8, 10];
console.log("Array with duplicates:", dupArray);
console.log("First & Last Position of 8:", searchRange(dupArray, 8)); // [3, 5]

console.log("\n✅ Searching algorithms mastered!");
