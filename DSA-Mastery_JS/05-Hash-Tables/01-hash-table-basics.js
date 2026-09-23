/**
 * ==============================================================================
 * 📦 TOPIC: Hash Table Implementation & The Unsorted Two-Sum Pattern
 * ==============================================================================
 * 
 * ⏱️ COMPLEXITIES:
 * - Insert (set) : O(1) average, O(n) worst case (with many collisions)
 * - Lookup (get) : O(1) average, O(n) worst case
 * - Delete       : O(1) average, O(n) worst case
 * ==============================================================================
 */

// 1. HASH TABLE IMPLEMENTATION FROM SCRATCH (SEPARATE CHAINING)
class HashTable {
  constructor(size = 53) { // Prime numbers reduce collisions
    this.keyMap = new Array(size);
  }

  // Simple hashing function using prime multiplication
  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return Math.abs(total);
  }

  // Set Key-Value Pair - O(1) average
  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    // Check if key already exists, if so update value
    for (const pair of this.keyMap[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.keyMap[index].push([key, value]);
  }

  // Get Value by Key - O(1) average
  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (const pair of this.keyMap[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined;
  }
}

// ==============================================================================
// 🧪 CLASSIC PROBLEM: TWO SUM (UNSORTED ARRAY - LEETCODE 1)
// ==============================================================================
/**
 * Problem: Given an array of integers `nums` and an integer `target`,
 * return indices of the two numbers such that they add up to target.
 * 
 * 💡 Hash Map Strategy:
 * As we iterate through nums, we calculate complement = target - nums[i].
 * If complement is in our Map, we found our pair!
 * Otherwise, save nums[i] -> index in the Map.
 * 
 * Time: O(n) | Space: O(n)
 */
function twoSum(nums, target) {
  const map = new Map(); // Stores: number -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

// ==============================================================================
// 🧪 DEMONSTRATION & TEST CASES
// ==============================================================================

console.log("=== 1. TESTING CUSTOM HASH TABLE ===");
const ht = new HashTable();
ht.set("grapes", 1000);
ht.set("apples", 54);
ht.set("oranges", 20);

console.log("Value for 'grapes':", ht.get("grapes"));   // 1000
console.log("Value for 'apples':", ht.get("apples"));   // 54
console.log("Value for 'bananas':", ht.get("bananas")); // undefined

console.log("\n=== 2. TESTING TWO SUM WITH MAP (O(n)) ===");
const inputNums = [2, 11, 7, 15];
const targetVal = 9;
console.log(`Nums: [${inputNums}], Target: ${targetVal}`);
console.log("Indices found:", twoSum(inputNums, targetVal)); // [0, 2] -> 2 + 7 = 9

console.log("\n✅ Hash Tables mastered!");
