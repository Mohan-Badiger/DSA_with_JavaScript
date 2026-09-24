/**
 * ==============================================================================
 * 📦 TOPIC: Kadane's Algorithm & Prefix Sum Techniques
 * ==============================================================================
 * 📖 TWO ESSENTIAL TECHNIQUES:
 * 1. PREFIX SUM:
 *    Pre-computes cumulative sums so any subarray sum between indices L and R
 *    can be answered in O(1) time without looping!
 * 2. KADANE'S ALGORITHM:
 *    Finds the maximum possible sum of any contiguous subarray in O(n) time
 *    and O(1) space.
 * ==============================================================================
 */

console.log("=== 1. PREFIX SUM ARRAY (O(1) RANGE SUM QUERIES) ===");

/**
 * Prefix Sum Concept:
 * Original:   [ 3,  1,  4,  1,  5 ]
 * PrefixSum:  [ 3,  4,  8,  9, 14 ]
 * 
 * Sum from index L to R:
 * If L === 0: PrefixSum[R]
 * If L > 0  : PrefixSum[R] - PrefixSum[L - 1]
 */
class RangeSumQuery {
  constructor(nums) {
    this.prefix = new Array(nums.length);
    if (nums.length === 0) return;

    this.prefix[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      this.prefix[i] = this.prefix[i - 1] + nums[i];
    }
  }

  // Query sum between index left and right in O(1)
  getRangeSum(left, right) {
    if (left === 0) return this.prefix[right];
    return this.prefix[right] - this.prefix[left - 1];
  }
}

const queryArr = [3, 1, 4, 1, 5, 9, 2];
const rsq = new RangeSumQuery(queryArr);
console.log("Array:", queryArr);
console.log("Range sum from index 1 to 4 [1, 4, 1, 5]:", rsq.getRangeSum(1, 4)); // 11
console.log("Range sum from index 0 to 2 [3, 1, 4]:", rsq.getRangeSum(0, 2));    // 8


console.log("\n=== 2. KADANE'S ALGORITHM (MAXIMUM SUBARRAY SUM) ===");
/**
 * Problem: Given an integer array nums, find the subarray with the largest sum,
 * and return its sum.
 * 
 * Intuition:
 * At each element `nums[i]`, we make a simple decision:
 *   "Is it better to add nums[i] to the running subarray sum,
 *    OR start fresh with nums[i] as the beginning of a new subarray?"
 * 
 * Recurrence:
 *   currentMax = Math.max(nums[i], currentMax + nums[i])
 *   globalMax  = Math.max(globalMax, currentMax)
 * 
 * Time: O(n) | Space: O(1)
 */
function maxSubArraySum(nums) {
  if (nums.length === 0) return 0;

  let currentMax = nums[0];
  let globalMax = nums[0];

  // Variables to also track the start and end of the max subarray
  let start = 0, end = 0, tempStart = 0;

  for (let i = 1; i < nums.length; i++) {
    // If starting fresh with nums[i] is better than adding to currentMax
    if (nums[i] > currentMax + nums[i]) {
      currentMax = nums[i];
      tempStart = i; // potential new starting point
    } else {
      currentMax += nums[i];
    }

    if (currentMax > globalMax) {
      globalMax = currentMax;
      start = tempStart;
      end = i;
    }
  }

  return {
    maxSum: globalMax,
    subarray: nums.slice(start, end + 1),
    indices: [start, end]
  };
}

const kadaneInput = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArraySum(kadaneInput);

console.log("Input Array:", kadaneInput);
console.log("Maximum Subarray Sum:", result.maxSum);           // 6
console.log("Optimal Subarray:", result.subarray);              // [4, -1, 2, 1]
console.log("Indices (start to end):", result.indices);         // [3, 6]

console.log("\n✅ Kadane's and Prefix Sum mastered!");
