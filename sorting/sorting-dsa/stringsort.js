/**
 * ============================================================================
 * Problem: Sort a String (DSA Question)
 * ============================================================================
 * Given a string `s`, sort its characters in alphabetical (ascending) order.
 * Example: "edcab" -> "abcde"
 *
 * In DSA Interviews, there are 3 main approaches:
 *
 * 1. Optimal DSA Approach: COUNTING SORT / FREQUENCY ARRAY -> O(N) Time, O(1) Space
 *    - Best approach expected in DSA because strings have a fixed set of characters
 *      (e.g., 26 lowercase English letters or 256 ASCII characters).
 * 
 * 2. Divide & Conquer Approach: MERGE SORT -> O(N log N) Time, O(N) Space
 *    - Best when the interviewer asks: "Sort without built-in functions, for any characters".
 *
 * 3. Built-in JavaScript Method: split('').sort().join('') -> O(N log N) Time, O(N) Space
 *    - Concise one-liner for practical coding.
 */

// ============================================================================
// APPROACH 1: Counting Sort (Optimal DSA Approach for Lowercase Letters 'a'-'z')
// ============================================================================
// Time Complexity  : O(N) - Linear time!
// Space Complexity : O(1) auxiliary space (fixed array of size 26)

function sortStringCountingSort(s) {
  // 1. Create a frequency array of size 26 initialized with 0
  const freq = new Array(26).fill(0);

  // 2. Count the occurrences of each character
  for (let i = 0; i < s.length; i++) {
    const charIndex = s.charCodeAt(i) - 97; // 97 is ASCII for 'a'
    freq[charIndex]++;
  }

  // 3. Reconstruct the sorted string from the frequency array
  let sortedResult = "";
  for (let i = 0; i < 26; i++) {
    if (freq[i] > 0) {
      const char = String.fromCharCode(i + 97);
      sortedResult += char.repeat(freq[i]);
    }
  }

  return sortedResult;
}

// ============================================================================
// APPROACH 2: Counting Sort for All ASCII Characters (Uppercase, Lowercase, Digits)
// ============================================================================
// Time Complexity  : O(N)
// Space Complexity : O(1) auxiliary space (fixed array of size 256 for all standard ASCII)

function sortStringASCII(s) {
  const count = new Array(256).fill(0);

  // Count frequency of each character
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i)]++;
  }

  // Reconstruct sorted string
  let result = "";
  for (let i = 0; i < 256; i++) {
    while (count[i] > 0) {
      result += String.fromCharCode(i);
      count[i]--;
    }
  }

  return result;
}

// ============================================================================
// APPROACH 3: Merge Sort on Characters (Comparison-Based Sorting)
// ============================================================================
// Time Complexity  : O(N log N)
// Space Complexity : O(N)

function sortStringMergeSort(s) {
  const arr = s.split("");

  function merge(left, right) {
    const sorted = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        sorted.push(left[i++]);
      } else {
        sorted.push(right[j++]);
      }
    }

    return sorted.concat(left.slice(i)).concat(right.slice(j));
  }

  function mergeSort(chars) {
    if (chars.length <= 1) return chars;

    const mid = Math.floor(chars.length / 2);
    const left = mergeSort(chars.slice(0, mid));
    const right = mergeSort(chars.slice(mid));

    return merge(left, right);
  }

  return mergeSort(arr).join("");
}

// ============================================================================
// APPROACH 4: Clean JavaScript Built-in Way
// ============================================================================
// Time Complexity  : O(N log N)
// Space Complexity : O(N)

function sortStringBuiltIn(s) {
  return s.split("").sort().join("");
}

// ============================================================================
// TEST CASES & VERIFICATION
// ============================================================================
const sample1 = "edcab";
const sample2 = "banana";
const sample3 = "SortingDSA123!";

console.log("=== Approach 1: Counting Sort (Optimal O(N) for lowercase) ===");
console.log(`"${sample1}" -> "${sortStringCountingSort(sample1)}"`); // "abcde"
console.log(`"${sample2}" -> "${sortStringCountingSort(sample2)}"`); // "aaabnn"

console.log("\n=== Approach 2: Counting Sort for Full ASCII ===");
console.log(`"${sample3}" -> "${sortStringASCII(sample3)}"`); // "!123ADSSaginort"

console.log("\n=== Approach 3: Merge Sort (O(N log N)) ===");
console.log(`"${sample1}" -> "${sortStringMergeSort(sample1)}"`); // "abcde"

console.log("\n=== Approach 4: Built-in Sort (One-Liner) ===");
console.log(`"${sample1}" -> "${sortStringBuiltIn(sample1)}"`); // "abcde"
