/**
 * ==============================================================================
 * 📦 TOPIC: Dynamic Programming (Memoization vs Tabulation)
 * ==============================================================================
 */

console.log("=== 1. FIBONACCI: NAIVE VS MEMOIZATION VS TABULATION ===");

// A. Naive Recursion: O(2^n) Exponential (VERY SLOW!)
function fibNaive(n) {
  if (n <= 1) return n;
  return fibNaive(n - 1) + fibNaive(n - 2);
}

// B. Top-Down Memoization: O(n) Time, O(n) Space
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n]; // Return cached answer
  if (n <= 1) return n;

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// C. Bottom-Up Tabulation: O(n) Time, O(1) Space
function fibTabulation(n) {
  if (n <= 1) return n;
  let prev2 = 0;
  let prev1 = 1;

  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

console.log("Fib(10) Memoization :", fibMemo(10));
console.log("Fib(10) Tabulation  :", fibTabulation(10));
console.log("Fib(40) with Memo (instant!):", fibMemo(40)); // Naive would freeze here!


console.log("\n=== 2. CLIMBING STAIRS PROBLEM (LEETCODE 70) ===");
/**
 * Problem: You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Observation:
 * To reach step `i`, you must come from either `i - 1` (1 step) or `i - 2` (2 steps).
 * ways(i) = ways(i - 1) + ways(i - 2) -> EXACT SAME PATTERN AS FIBONACCI!
 * 
 * Time: O(n) | Space: O(1)
 */
function climbStairs(n) {
  if (n <= 2) return n;
  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }

  return second;
}

console.log("Ways to climb 3 stairs:", climbStairs(3)); // 3
console.log("Ways to climb 5 stairs:", climbStairs(5)); // 8

console.log("\n✅ Dynamic Programming mastered!");
