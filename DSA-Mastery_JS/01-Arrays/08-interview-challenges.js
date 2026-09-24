/**
 * ==============================================================================
 * 📦 TOPIC: Top 4 Must-Know Array Interview Challenges
 * ==============================================================================
 * 📖 These 4 problems frequently appear in technical interviews for companies
 * like Google, Amazon, Microsoft, and Meta.
 * ==============================================================================
 */

console.log("=== PROBLEM 1: ROTATE ARRAY RIGHT BY K STEPS ===");
/**
 * Problem: Rotate array to the right by k steps, where k is non-negative.
 * Example: nums = [1, 2, 3, 4, 5, 6, 7], k = 3 -> [5, 6, 7, 1, 2, 3, 4]
 * 
 * 💡 The Reversal Algorithm (O(n) time, O(1) space):
 * 1. Reverse entire array:      [7, 6, 5, 4, 3, 2, 1]
 * 2. Reverse first k elements:   [5, 6, 7, 4, 3, 2, 1]
 * 3. Reverse remaining elements: [5, 6, 7, 1, 2, 3, 4]
 */
function rotateArray(nums, k) {
  k = k % nums.length; // Handle k larger than array size

  // Helper function to reverse subarray between start and end
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  // 1. Reverse entire array
  reverse(nums, 0, nums.length - 1);
  // 2. Reverse first k elements
  reverse(nums, 0, k - 1);
  // 3. Reverse remaining elements
  reverse(nums, k, nums.length - 1);

  return nums;
}

const rotateInput = [1, 2, 3, 4, 5, 6, 7];
console.log("Original:", [1, 2, 3, 4, 5, 6, 7], "k = 3");
console.log("Rotated in-place:", rotateArray(rotateInput, 3));


console.log("\n=== PROBLEM 2: FIND MISSING NUMBER (0 TO N) ===");
/**
 * Problem: Given array containing n distinct numbers in range [0, n],
 * find the one missing number.
 * Example: [3, 0, 1] -> 2 is missing (range is 0 to 3).
 * 
 * Mathematical Approach:
 * Expected Sum = n * (n + 1) / 2
 * Missing Number = Expected Sum - Actual Sum
 * Time: O(n) | Space: O(1)
 */
function findMissingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

const missingInput = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log("Array:", missingInput);
console.log("Missing Number:", findMissingNumber(missingInput)); // 8


console.log("\n=== PROBLEM 3: MERGE SORTED ARRAYS IN-PLACE ===");
/**
 * Problem: Given two sorted arrays nums1 and nums2, merge nums2 into nums1
 * as one sorted array. nums1 has a size of m + n, with the last n elements set to 0.
 * 
 * Strategy: Work BACKWARDS from the end using three pointers!
 * Time: O(m + n) | Space: O(1)
 */
function mergeSortedArrays(nums1, m, nums2, n) {
  let p1 = m - 1;         // Pointer for last valid element in nums1
  let p2 = n - 1;         // Pointer for last element in nums2
  let p = m + n - 1;      // Pointer for placement at end of nums1

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // If any elements remain in nums2, copy them over
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }

  return nums1;
}

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
console.log("nums1:", [1, 2, 3, 0, 0, 0], "m = 3 | nums2:", [2, 5, 6], "n = 3");
console.log("Merged in-place:", mergeSortedArrays(nums1, 3, nums2, 3));


console.log("\n=== PROBLEM 4: BEST TIME TO BUY AND SELL STOCK ===");
/**
 * Problem: You are given an array prices where prices[i] is the price of a given
 * stock on the ith day. Maximize your profit by choosing a single day to buy
 * and a different day in the future to sell.
 * 
 * Strategy:
 * Keep track of minimum price seen so far, and calculate max profit possible if sold today.
 * Time: O(n) | Space: O(1)
 */
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]; // Update lowest price to buy
    } else {
      const currentProfit = prices[i] - minPrice;
      maxProfit = Math.max(maxProfit, currentProfit); // Update best profit
    }
  }

  return maxProfit;
}

const stockPrices = [7, 1, 5, 3, 6, 4];
console.log("Stock Prices over days:", stockPrices);
console.log("Max Profit:", maxProfit(stockPrices)); // 5 (Buy at 1, Sell at 6)

console.log("\n✅ Array interview challenges mastered!");
