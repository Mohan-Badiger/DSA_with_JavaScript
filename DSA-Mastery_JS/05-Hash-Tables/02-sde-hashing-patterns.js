/**
 * ==============================================================================
 * 📦 TOPIC: SDE Fresher Must-Know Hash Map & Set Patterns
 * ==============================================================================
 * 
 * 🏢 Target Companies: Amazon, Google, Microsoft, Meta, Swiggy, Uber
 * 
 * 🎯 Patterns Covered:
 * 1. Prefix Sum with Hash Map (Subarray Sum Equals K)
 * 2. Hash Set Sequence Expansion (Longest Consecutive Sequence)
 * 3. Frequency Bucket Sort (Top K Frequent Elements in O(n))
 * ==============================================================================
 */

console.log("=== 1. SUBARRAY SUM EQUALS K (PREFIX SUM + HASH MAP) ===");
/**
 * Problem (LeetCode #560):
 * Given an array of integers nums and an integer k, return the total number
 * of subarrays whose sum equals to k.
 * 
 * 💡 Mathematical Insight:
 * If prefixSum[j] - prefixSum[i] = k, then the subarray between i and j sums to k.
 * Rearranging: prefixSum[i] = prefixSum[j] - k.
 * We store counts of prefix sums seen so far in a Map!
 * 
 * Time: O(n) | Space: O(n)
 */
function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1); // 1 way to have sum 0 (empty prefix)

  let prefixSum = 0;
  let count = 0;

  for (const num of nums) {
    prefixSum += num;

    // Check if there is a prefix that leaves remainder k
    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return count;
}

const arr1 = [1, 1, 1];
console.log("Array:", [1, 1, 1], "k = 2 -> Subarrays:", subarraySum(arr1, 2)); // 2: [1,1] at [0..1] and [1..2]

const arr2 = [1, 2, 3, -2, 1];
console.log("Array:", [1, 2, 3, -2, 1], "k = 3 -> Subarrays:", subarraySum(arr2, 3)); // 3


console.log("\n=== 2. LONGEST CONSECUTIVE SEQUENCE ===");
/**
 * Problem (LeetCode #128):
 * Given an unsorted array of integers nums, return the length of the longest
 * consecutive elements sequence. Must run in O(n) time!
 * 
 * 💡 HashSet Boundary Search:
 * 1. Insert all numbers into a Set (O(n) time).
 * 2. An element num starts a sequence ONLY IF (num - 1) is NOT in the set!
 * 3. Only count from sequence starters to ensure each number is visited at most twice.
 * 
 * Time: O(n) | Space: O(n)
 */
function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let longestStreak = 0;

  for (const num of numSet) {
    // Only check from the beginning of a streak
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

const sequence = [100, 4, 200, 1, 3, 2];
console.log("Input Array:", sequence);
console.log("Longest Consecutive Sequence Length:", longestConsecutive(sequence)); // 4 (1, 2, 3, 4)


console.log("\n=== 3. TOP K FREQUENT ELEMENTS (BUCKET SORT) ===");
/**
 * Problem (LeetCode #347):
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * 
 * 💡 Linear Time O(n) Bucket Sort Approach:
 * 1. Count frequencies in a Map.
 * 2. Create buckets where bucket[i] holds elements that appear exactly i times.
 *    (Max possible frequency is nums.length).
 * 3. Traverse buckets from right to left to collect top k elements.
 * 
 * Time: O(n) | Space: O(n)
 */
function topKFrequent(nums, k) {
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Buckets from 0 to nums.length
  const buckets = Array.from({ length: nums.length + 1 }, () => []);

  for (const [num, count] of freqMap.entries()) {
    buckets[count].push(num);
  }

  const result = [];
  // Traverse backwards from highest frequency bucket
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      for (const val of buckets[i]) {
        result.push(val);
        if (result.length === k) break;
      }
    }
  }

  return result;
}

const freqInput = [1, 1, 1, 2, 2, 3];
console.log("Input:", freqInput, "k = 2");
console.log("Top 2 Frequent Elements:", topKFrequent(freqInput, 2)); // [1, 2]

console.log("\n✅ SDE Fresher Hashing Patterns Mastered!");
