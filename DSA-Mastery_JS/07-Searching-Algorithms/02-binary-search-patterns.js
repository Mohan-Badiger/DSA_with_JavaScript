/**
 * ==============================================================================
 * 📦 TOPIC: SDE Fresher Must-Know Binary Search Patterns
 * ==============================================================================
 * 
 * 🏢 Target Companies: Google, Amazon, Microsoft, Adobe, Uber, Flipkart
 * 
 * 🎯 Patterns Covered:
 * 1. Modified Binary Search on Rotated Sorted Array
 * 2. Left & Right Boundary Search (First & Last Position)
 * 3. Peak Element Finding (Binary Search on Unsorted Array)
 * 4. Binary Search on Answer Space (Integer Sqrt / Monotonic Predicate)
 * ==============================================================================
 */

console.log("=== 1. SEARCH IN ROTATED SORTED ARRAY ===");
/**
 * Problem (LeetCode #33):
 * Given an integer array nums sorted in ascending order (with distinct values)
 * that is possibly rotated at an unknown pivot index, find target in O(log n).
 * 
 * 💡 Key Insight:
 * At least ONE half (left half or right half) of the array is ALWAYS sorted!
 * 1. Find which half is normally sorted:
 *    - If nums[low] <= nums[mid], left half is sorted.
 *    - Otherwise, right half is sorted.
 * 2. Check if target lies within the sorted half's range.
 * 
 * Time: O(log n) | Space: O(1)
 */
function searchRotated(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] === target) return mid;

    // Case A: Left half is sorted
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1; // Target is in left sorted half
      } else {
        low = mid + 1;  // Target is in right half
      }
    }
    // Case B: Right half is sorted
    else {
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;  // Target is in right sorted half
      } else {
        high = mid - 1; // Target is in left half
      }
    }
  }

  return -1;
}

const rotated = [4, 5, 6, 7, 0, 1, 2];
console.log("Rotated Array:", rotated);
console.log("Search target 0 -> Index:", searchRotated(rotated, 0)); // 4
console.log("Search target 3 -> Index:", searchRotated(rotated, 3)); // -1


console.log("\n=== 2. FIND FIRST AND LAST POSITION OF ELEMENT ===");
/**
 * Problem (LeetCode #34):
 * Given a sorted array of integers nums, find the starting and ending position
 * of a given target value in O(log n) time.
 * 
 * 💡 Dual Binary Search:
 * - Search for first position (bias left): when nums[mid] === target, continue high = mid - 1.
 * - Search for last position (bias right): when nums[mid] === target, continue low = mid + 1.
 * 
 * Time: O(log n) | Space: O(1)
 */
function searchRange(nums, target) {
  function findBound(isFirst) {
    let low = 0;
    let high = nums.length - 1;
    let bound = -1;

    while (low <= high) {
      const mid = Math.floor(low + (high - low) / 2);

      if (nums[mid] === target) {
        bound = mid;
        if (isFirst) {
          high = mid - 1; // Keep looking left
        } else {
          low = mid + 1;  // Keep looking right
        }
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return bound;
  }

  return [findBound(true), findBound(false)];
}

const dupSorted = [5, 7, 7, 8, 8, 10];
console.log("Array:", dupSorted, "Target: 8");
console.log("Range [First, Last]:", searchRange(dupSorted, 8)); // [3, 4]


console.log("\n=== 3. FIND PEAK ELEMENT ===");
/**
 * Problem (LeetCode #162):
 * A peak element is an element that is strictly greater than its neighbors.
 * Find any peak and return its index in O(log n) time.
 * 
 * 💡 Binary Search without Sorted Array:
 * If nums[mid] < nums[mid + 1], then a peak MUST exist to the right!
 * Else, a peak exists to the left (or mid itself is a peak).
 * 
 * Time: O(log n) | Space: O(1)
 */
function findPeakElement(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] < nums[mid + 1]) {
      // Ascending slope: Peak lies to the right
      low = mid + 1;
    } else {
      // Descending slope: Peak lies at mid or to the left
      high = mid;
    }
  }

  return low; // low === high is the peak index
}

const peakArray = [1, 2, 1, 3, 5, 6, 4];
console.log("Array with peaks:", peakArray);
console.log("Peak Element Index:", findPeakElement(peakArray)); // 5 (value 6) or 1 (value 2)


console.log("\n=== 4. BINARY SEARCH ON ANSWER: SQRT(X) ===");
/**
 * Problem (LeetCode #69):
 * Given a non-negative integer x, compute and return the square root of x rounded down.
 * 
 * 💡 Monotonic Condition Search:
 * The condition mid * mid <= x is true up to floor(sqrt(x)), then becomes false.
 * 
 * Time: O(log x) | Space: O(1)
 */
function mySqrt(x) {
  if (x < 2) return x;

  let low = 1;
  let high = Math.floor(x / 2);
  let ans = 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      ans = mid;      // Feasible answer, try larger
      low = mid + 1;
    } else {
      high = mid - 1; // Too large, decrease search space
    }
  }

  return ans;
}

console.log("sqrt(8)  ->", mySqrt(8));  // 2
console.log("sqrt(16) ->", mySqrt(16)); // 4
console.log("sqrt(25) ->", mySqrt(25)); // 5

console.log("\n✅ SDE Fresher Binary Search Patterns Mastered!");
