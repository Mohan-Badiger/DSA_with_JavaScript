/**
 * ==============================================================================
 * 📦 TOPIC: The Sliding Window Technique (Subarray & Substring Pattern)
 * ==============================================================================
 * 📖 WHAT IS A SLIDING WINDOW?
 * Instead of re-evaluating contiguous subarrays using nested loops O(n * k),
 * we maintain a "window" of elements. As the window moves 1 step forward:
 *   - We ADD the new incoming element entering on the right.
 *   - We SUBTRACT the outgoing element leaving on the left.
 * 
 * 💡 TWO MAIN VARIATIONS:
 * 1. Fixed-Size Window   : Window length `k` is constant.
 * 2. Dynamic-Size Window : Window expands or shrinks based on a condition.
 * 
 * ⏱️ COMPLEXITY:
 * - Time  : O(n) (Each element enters and exits the window at most once)
 * - Space : O(1) or O(k)
 * ==============================================================================
 */

console.log("=== 1. FIXED-SIZE SLIDING WINDOW ===");
/**
 * Problem: Find the MAXIMUM SUM of any contiguous subarray of size k.
 * Example: arr = [2, 1, 5, 1, 3, 2], k = 3
 * Windows of size 3:
 *   [2, 1, 5] -> 8
 *   [1, 5, 1] -> 7
 *   [5, 1, 3] -> 9  <-- Maximum!
 *   [1, 3, 2] -> 6
 * 
 * Time: O(n) | Space: O(1)
 */
function maxSubarraySumFixed(arr, k) {
  if (arr.length < k) return null;

  let windowSum = 0;

  // Step 1: Calculate sum of the first window of size k
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Step 2: Slide the window across the rest of the array
  for (let i = k; i < arr.length; i++) {
    // Add incoming item arr[i] and subtract outgoing item arr[i - k]
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

const arr1 = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(`Array: [${arr1}], k = ${k}`);
console.log("Maximum Subarray Sum of size 3:", maxSubarraySumFixed(arr1, k)); // 9


console.log("\n=== 2. DYNAMIC-SIZE SLIDING WINDOW ===");
/**
 * Problem: Minimum Size Subarray Sum (Target >= S)
 * Find the minimal length of a contiguous subarray of which the sum >= target.
 * If there is no such subarray, return 0.
 * 
 * Approach:
 * 1. Expand window with `right` pointer until windowSum >= target.
 * 2. Once valid, shrink window from `left` pointer to find minimal length.
 * 
 * Time: O(n) | Space: O(1)
 */
function minSubarrayLen(target, nums) {
  let minLength = Infinity;
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right]; // Expand window to the right

    // Shrink window from the left as long as the condition is satisfied
    while (windowSum >= target) {
      const currentLength = right - left + 1;
      minLength = Math.min(minLength, currentLength);

      windowSum -= nums[left]; // Remove element leaving window
      left++;                  // Shrink window from left
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

const nums = [2, 3, 1, 2, 4, 3];
const targetSum = 7;
console.log(`Array: [${nums}], Target: ${targetSum}`);
console.log("Min Length Subarray >= Target:", minSubarrayLen(targetSum, nums)); // 2 (subarray: [4, 3])


console.log("\n=== 3. SLIDING WINDOW TEMPLATE (INTERVIEW CHEAT-SHEET) ===");
/**
 * Universal Pattern for Dynamic Sliding Window:
 * 
 * let left = 0;
 * for (let right = 0; right < arr.length; right++) {
 *     // 1. Add arr[right] to current state
 * 
 *     // 2. Shrink window while invalid/valid condition met
 *     while (condition) {
 *         // update best result
 *         // remove arr[left] from state
 *         left++;
 *     }
 * }
 */
console.log("Template documented above for easy recall in interviews!");

console.log("\n✅ Sliding Window techniques mastered!");
