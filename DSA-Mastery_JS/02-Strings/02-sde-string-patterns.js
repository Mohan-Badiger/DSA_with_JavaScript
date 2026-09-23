/**
 * ==============================================================================
 * 📦 TOPIC: SDE Fresher Must-Know String Interview Patterns
 * ==============================================================================
 * 
 * 🏢 Target Companies: Amazon, Microsoft, Adobe, Uber, Bloomberg, Google
 * 
 * 🎯 Patterns Covered:
 * 1. Sliding Window (Longest Substring Without Repeating Characters)
 * 2. Frequency Hash Map & Grouping (Group Anagrams)
 * 3. Expand Around Center (Longest Palindromic Substring)
 * 4. In-Place String/Array Compression (Two Pointers)
 * ==============================================================================
 */

console.log("=== 1. LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS ===");
/**
 * Problem (LeetCode #3):
 * Given a string s, find the length of the longest substring without repeating characters.
 * Example: "abcabcbb" -> 3 ("abc")
 * 
 * 💡 Sliding Window + Index Map:
 * - Keep left and right pointers.
 * - Store the last seen index of each character in a Map.
 * - When character is repeated, advance left pointer past the previous occurrence.
 * 
 * Time: O(n) | Space: O(min(m, n)) where m is charset size
 */
function lengthOfLongestSubstring(s) {
  const lastSeen = new Map();
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (lastSeen.has(char) && lastSeen.get(char) >= left) {
      // Jump left pointer right after the duplicate's last index
      left = lastSeen.get(char) + 1;
    }

    lastSeen.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log("Input: 'abcabcbb' -> Longest Length:", lengthOfLongestSubstring("abcabcbb")); // 3
console.log("Input: 'bbbbb'    -> Longest Length:", lengthOfLongestSubstring("bbbbb"));    // 1
console.log("Input: 'pwwkew'   -> Longest Length:", lengthOfLongestSubstring("pwwkew"));   // 3


console.log("\n=== 2. GROUP ANAGRAMS ===");
/**
 * Problem (LeetCode #49):
 * Given an array of strings strs, group the anagrams together in any order.
 * Example: ["eat","tea","tan","ate","nat","bat"] -> [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * 💡 Hash Map with Sorted Key (or Character Count):
 * Two words are anagrams if and only if their sorted versions are identical.
 * 
 * Time: O(N * K log K) where N = number of strings, K = max string length
 * Space: O(N * K)
 */
function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    // Generate signature key by sorting characters
    const key = str.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }

  return Array.from(map.values());
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("Input words:", words);
console.log("Grouped Anagrams:", groupAnagrams(words));


console.log("\n=== 3. LONGEST PALINDROMIC SUBSTRING ===");
/**
 * Problem (LeetCode #5):
 * Given a string s, return the longest palindromic substring in s.
 * Example: "babad" -> "bab" (or "aba")
 * 
 * 💡 Expand Around Center (O(n^2) time, O(1) space):
 * Every palindrome has a center:
 * - Odd length: 1-character center (e.g. "aba")
 * - Even length: 2-character center (e.g. "abba")
 * We test every possible center and expand outwards as long as s[left] === s[right].
 */
function longestPalindrome(s) {
  if (!s || s.length < 1) return "";

  let start = 0;
  let maxLen = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // Palindrome length is (right - 1) - (left + 1) + 1 = right - left - 1
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i);     // Odd length
    const len2 = expandAroundCenter(i, i + 1); // Even length
    const currentMax = Math.max(len1, len2);

    if (currentMax > maxLen) {
      maxLen = currentMax;
      start = i - Math.floor((currentMax - 1) / 2);
    }
  }

  return s.substring(start, start + maxLen);
}

console.log("Longest Palindrome of 'babad':", longestPalindrome("babad")); // "bab" or "aba"
console.log("Longest Palindrome of 'cbbd':", longestPalindrome("cbbd"));   // "bb"


console.log("\n=== 4. STRING COMPRESSION (TWO POINTERS) ===");
/**
 * Problem (LeetCode #443):
 * Given an array of characters chars, compress it using the following algorithm:
 * Consecutive duplicates are replaced by the char followed by the count.
 * Must modify the input array in-place and return the new length.
 * 
 * Time: O(n) | Space: O(1)
 */
function compress(chars) {
  let write = 0;
  let read = 0;

  while (read < chars.length) {
    const currentChar = chars[read];
    let count = 0;

    // Count consecutive occurrences
    while (read < chars.length && chars[read] === currentChar) {
      read++;
      count++;
    }

    // Write character
    chars[write++] = currentChar;

    // Write count digits if count > 1
    if (count > 1) {
      const countStr = count.toString();
      for (const digit of countStr) {
        chars[write++] = digit;
      }
    }
  }

  return write;
}

const charsToCompress = ["a", "a", "b", "b", "c", "c", "c"];
console.log("Original Characters:", ["a", "a", "b", "b", "c", "c", "c"]);
const newLen = compress(charsToCompress);
console.log("Compressed Length:", newLen);
console.log("Compressed Array Prefix:", charsToCompress.slice(0, newLen)); // ['a','2','b','2','c','3']

console.log("\n✅ SDE Fresher String Patterns Mastered!");
