/**
 * ==============================================================================
 * 📦 TOPIC: String Fundamentals & Classic Interview Patterns
 * ==============================================================================
 * 
 * 📖 STRINGS IN JAVASCRIPT:
 * - Strings are immutable primitives.
 * - Common patterns: Two Pointers, Sliding Window, Frequency Hash Maps.
 * ==============================================================================
 */

console.log("=== 1. STRING IMMUTABILITY DEMONSTRATION ===");
let greeting = "hello";
greeting[0] = "H"; // Silently fails in non-strict mode
console.log("greeting after greeting[0] = 'H':", greeting); // Still "hello"!

// To modify, create a new string or convert to an array:
greeting = "H" + greeting.slice(1);
console.log("Correctly modified:", greeting); // "Hello"


console.log("\n=== 2. VALID PALINDROME (TWO-POINTER PATTERN) ===");
/**
 * Problem: A phrase is a palindrome if, after converting all uppercase letters
 * into lowercase letters and removing all non-alphanumeric characters,
 * it reads the same forward and backward.
 * 
 * Time: O(n) | Space: O(1)
 */
function isPalindrome(s) {
  // Clean string: remove non-alphanumeric and lowercase
  const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log("isPalindrome('A man, a plan, a canal: Panama') ->", isPalindrome("A man, a plan, a canal: Panama")); // true
console.log("isPalindrome('race a car') ->", isPalindrome("race a car")); // false


console.log("\n=== 3. VALID ANAGRAM (FREQUENCY COUNTER PATTERN) ===");
/**
 * Problem: Given two strings s and t, return true if t is an anagram of s.
 * An anagram has the exact same character frequencies.
 * 
 * Time: O(n) | Space: O(k) where k is character set size
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  // Count frequencies of s
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  // Decrement frequencies with t
  for (const char of t) {
    if (!count[char]) {
      return false; // Character missing or frequency exceeded
    }
    count[char]--;
  }

  return true;
}

console.log("isAnagram('anagram', 'nagaram') ->", isAnagram("anagram", "nagaram")); // true
console.log("isAnagram('rat', 'car') ->", isAnagram("rat", "car")); // false


console.log("\n=== 4. LONGEST COMMON PREFIX ===");
/**
 * Problem: Find the longest common prefix among an array of strings.
 * Example: ["flower", "flow", "flight"] -> "fl"
 * 
 * Time: O(S) where S is the sum of characters | Space: O(1)
 */
function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // Shrink prefix until strs[i] starts with prefix
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}

console.log("longestCommonPrefix(['flower','flow','flight']) ->", longestCommonPrefix(["flower", "flow", "flight"])); // "fl"

console.log("\n✅ String basics and patterns mastered!");
