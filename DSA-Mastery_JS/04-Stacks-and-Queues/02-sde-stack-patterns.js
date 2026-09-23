/**
 * ==============================================================================
 * 📦 TOPIC: SDE Fresher Must-Know Stack Patterns: Monotonic Stack & Min-Stack
 * ==============================================================================
 * 
 * 🏢 Target Companies: Amazon, Microsoft, Flipkart, Adobe, Goldman Sachs, Bloomberg
 * 
 * 🎯 Patterns Covered:
 * 1. Matching Parentheses / Bracket Parsing (Valid Parentheses)
 * 2. Monotonic Decreasing Stack (Next Greater Element)
 * 3. Index Tracking Monotonic Stack (Daily Temperatures)
 * 4. Dual Stack / O(1) Auxiliary State (Min Stack Design)
 * ==============================================================================
 */

console.log("=== 1. VALID PARENTHESES ===");
/**
 * Problem (LeetCode #20):
 * Given a string s containing '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * 
 * 💡 Stack Match Approach:
 * Whenever an opening bracket is seen, push its matching closing bracket.
 * If a closing bracket appears, it must match stack.pop().
 * 
 * Time: O(n) | Space: O(n)
 */
function isValidParentheses(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of s) {
    if (map[char]) {
      stack.push(map[char]);
    } else {
      if (stack.pop() !== char) return false;
    }
  }

  return stack.length === 0;
}

console.log("isValid('()[]{}')  ->", isValidParentheses("()[]{}")); // true
console.log("isValid('(]')      ->", isValidParentheses("(]"));     // false
console.log("isValid('([{}])')  ->", isValidParentheses("([{}])")); // true


console.log("\n=== 2. NEXT GREATER ELEMENT (MONOTONIC STACK) ===");
/**
 * Problem (LeetCode #496 / GFG):
 * For each element in nums, find the first element to its right that is greater.
 * If no such element exists, output -1.
 * 
 * 💡 Monotonic Stack:
 * Maintain a stack of elements waiting for a greater number.
 * When a number greater than stack top is found, resolve that stack element!
 * 
 * Time: O(n) | Space: O(n)
 */
function nextGreaterElements(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = []; // Stores indices

  for (let i = 0; i < n; i++) {
    // While current element is greater than element at top index of stack
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const smallerIdx = stack.pop();
      result[smallerIdx] = nums[i];
    }
    stack.push(i);
  }

  return result;
}

const sampleNums = [4, 5, 2, 25, 7, 8];
console.log("Input Array:", sampleNums);
console.log("Next Greater Elements:", nextGreaterElements(sampleNums)); // [5, 25, 25, -1, 8, -1]


console.log("\n=== 3. DAILY TEMPERATURES ===");
/**
 * Problem (LeetCode #739):
 * Given an array of integers temperatures represents the daily temperatures,
 * return an array answer such that answer[i] is the number of days you have to
 * wait after the ith day to get a warmer temperature. If no future day is warmer, 0.
 * 
 * 💡 Monotonic Stack of Indices:
 * Distance = currentIndex - stackIndex.
 * 
 * Time: O(n) | Space: O(n)
 */
function dailyTemperatures(temperatures) {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack = []; // Stores indices of daily temperatures

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevDay = stack.pop();
      answer[prevDay] = i - prevDay; // Days waited
    }
    stack.push(i);
  }

  return answer;
}

const temps = [73, 74, 75, 71, 69, 72, 76, 73];
console.log("Temperatures:", temps);
console.log("Days to wait for warmer day:", dailyTemperatures(temps)); // [1, 1, 4, 2, 1, 1, 0, 0]


console.log("\n=== 4. MIN STACK (O(1) GET MINIMUM) ===");
/**
 * Problem (LeetCode #155):
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time O(1).
 * 
 * 💡 Dual Stack Technique:
 * stack: stores regular values
 * minStack: stores the minimum value at each depth
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    const currentMin = this.minStack.length === 0
      ? val
      : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(currentMin);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log("Pushed -2, 0, -3. Current Min:", minStack.getMin()); // -3
minStack.pop();
console.log("Popped. Top:", minStack.top());                    // 0
console.log("Current Min:", minStack.getMin());                 // -2

console.log("\n✅ SDE Fresher Stack Patterns Mastered!");
