/**
 * ==============================================================================
 * 📦 TOPIC: SDE Fresher Must-Know Dynamic Programming Patterns
 * ==============================================================================
 * 
 * 🏢 Target Companies: Amazon, Google, Microsoft, Flipkart, Walmart, TCS Digital
 * 
 * 🎯 Patterns Covered:
 * 1. 1D DP with Space Optimization (House Robber)
 * 2. Unbounded Knapsack / Minimum Coins (Coin Change)
 * 3. Subsequence Decision DP (Longest Increasing Subsequence - LIS)
 * 4. 0/1 Knapsack Classical Problem (Tabulation with 1D Array Optimization)
 * ==============================================================================
 */

console.log("=== 1. HOUSE ROBBER (1D DP WITH O(1) SPACE) ===");
/**
 * Problem (LeetCode #198):
 * You are a professional robber planning to rob houses along a street.
 * Adjacent houses have security systems connected.
 * Maximize money without robbing adjacent houses.
 * 
 * 💡 Recurrence Relation:
 * rob(i) = max(rob(i - 1), rob(i - 2) + nums[i])
 * Since we only need the last two states, reduce space to O(1)!
 * 
 * Time: O(n) | Space: O(1)
 */
function houseRobber(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev2 = 0;       // Equivalent to dp[i - 2]
  let prev1 = nums[0];  // Equivalent to dp[i - 1]

  for (let i = 1; i < nums.length; i++) {
    const current = Math.max(prev1, prev2 + nums[i]);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

const houses = [2, 7, 9, 3, 1];
console.log("House values:", houses);
console.log("Max Loot (House Robber):", houseRobber(houses)); // 12 (rob 2 + 9 + 1)


console.log("\n=== 2. COIN CHANGE (MINIMUM COINS) ===");
/**
 * Problem (LeetCode #322):
 * Given an integer array coins representing coins of different denominations and an integer amount,
 * return the fewest number of coins that you need to make up that amount. If impossible, return -1.
 * 
 * 💡 Bottom-Up Tabulation:
 * dp[i] = minimum coins needed to make amount i.
 * dp[i] = min(dp[i], dp[i - coin] + 1) for all coins <= i.
 * 
 * Time: O(amount * coins.length) | Space: O(amount)
 */
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // 0 coins needed for 0 amount

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

const coinDenoms = [1, 2, 5];
const targetAmount = 11;
console.log("Coins:", coinDenoms, "Target Amount:", targetAmount);
console.log("Minimum Coins Needed:", coinChange(coinDenoms, targetAmount)); // 3 (5 + 5 + 1)


console.log("\n=== 3. LONGEST INCREASING SUBSEQUENCE (LIS) ===");
/**
 * Problem (LeetCode #300):
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 * 
 * 💡 Tabulation Approach:
 * dp[i] = length of longest increasing subsequence ending at index i.
 * For each j < i, if nums[j] < nums[i], dp[i] = max(dp[i], dp[j] + 1).
 * 
 * Time: O(n^2) | Space: O(n)
 */
function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  const dp = new Array(nums.length).fill(1);
  let maxLIS = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLIS = Math.max(maxLIS, dp[i]);
  }

  return maxLIS;
}

const lisInput = [10, 9, 2, 5, 3, 7, 101, 18];
console.log("Input Array:", lisInput);
console.log("Length of Longest Increasing Subsequence:", lengthOfLIS(lisInput)); // 4 ([2, 3, 7, 101])


console.log("\n=== 4. 0/1 KNAPSACK PROBLEM ===");
/**
 * Problem:
 * Given weights and values of n items, put these items in a knapsack of capacity W
 * to get the maximum total value. Each item can either be picked or not (0/1).
 * 
 * 💡 1D Array Space Optimization:
 * Traverse capacity backwards from W down to weight[i] to avoid using the same item twice!
 * 
 * Time: O(n * W) | Space: O(W)
 */
function knapsack01(weights, values, capacity) {
  const n = weights.length;
  const dp = new Array(capacity + 1).fill(0);

  for (let i = 0; i < n; i++) {
    const w = weights[i];
    const v = values[i];

    // Iterate backwards so we only use values from previous items
    for (let cap = capacity; cap >= w; cap--) {
      dp[cap] = Math.max(dp[cap], dp[cap - w] + v);
    }
  }

  return dp[capacity];
}

const weights = [1, 3, 4, 5];
const values = [1, 4, 5, 7];
const capacity = 7;
console.log("Weights:", weights);
console.log("Values: ", values);
console.log("Capacity:", capacity);
console.log("Max Knapsack Value:", knapsack01(weights, values, capacity)); // 9 (weights 3 + 4 -> values 4 + 5 = 9)

console.log("\n✅ SDE Fresher Dynamic Programming Patterns Mastered!");
