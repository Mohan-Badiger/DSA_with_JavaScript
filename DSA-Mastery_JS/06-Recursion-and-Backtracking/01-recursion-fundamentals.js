/**
 * ==============================================================================
 * 📦 TOPIC: Recursion Fundamentals & Backtracking (Subsets)
 * ==============================================================================
 */

console.log("=== 1. FACTORIAL (BASIC RECURSION) ===");
/**
 * n! = n * (n - 1)!
 * Base Case: 0! = 1, 1! = 1
 * Time: O(n) | Space: O(n) call stack frames
 */
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive step
}

console.log("5! =", factorial(5)); // 120


console.log("\n=== 2. FIBONACCI (TREE RECURSION) ===");
/**
 * F(n) = F(n-1) + F(n-2)
 * Base Cases: F(0) = 0, F(1) = 1
 * Time: O(2^n) without memoization | Space: O(n) stack depth
 */
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(7) =", fibonacci(7)); // 13


console.log("\n=== 3. BACKTRACKING: GENERATE ALL SUBSETS (POWER SET) ===");
/**
 * Problem: Given an integer array nums of unique elements, return all possible
 * subsets (the power set).
 * 
 * Strategy:
 * At each index `i`, we have 2 choices:
 *   Choice 1: Include nums[i] in the current subset.
 *   Choice 2: Exclude nums[i] from the current subset (Backtrack!).
 * 
 * Time: O(2^n) | Space: O(n)
 */
function subsets(nums) {
  const result = [];

  function backtrack(index, currentSubset) {
    // Every state in backtracking tree is a valid subset
    result.push([...currentSubset]);

    for (let i = index; i < nums.length; i++) {
      // 1. Choose
      currentSubset.push(nums[i]);

      // 2. Explore
      backtrack(i + 1, currentSubset);

      // 3. Un-choose (Backtrack!)
      currentSubset.pop();
    }
  }

  backtrack(0, []);
  return result;
}

const inputSet = [1, 2, 3];
console.log("All Subsets of [1, 2, 3]:", subsets(inputSet));

console.log("\n✅ Recursion and Backtracking mastered!");
