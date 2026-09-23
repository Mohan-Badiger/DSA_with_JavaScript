/**
 * ==============================================================================
 * 📦 TOPIC: Stacks, Queues & The Valid Parentheses Problem
 * ==============================================================================
 * 
 * 📖 IMPLEMENTATION HIGHLIGHT:
 * Many beginners implement Queue using `arr.shift()`.
 * ⚠️ WARNING: `arr.shift()` is O(n) because every item shifts in memory!
 * Below we implement an optimal O(1) Queue using object mapping with head/tail pointers.
 * ==============================================================================
 */

// 1. STACK IMPLEMENTATION (LIFO)
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// 2. OPTIMAL QUEUE IMPLEMENTATION (FIFO - O(1) Operations)
class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  // O(1) Enqueue (Add to tail)
  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  // O(1) Dequeue (Remove from head without shifting array!)
  dequeue() {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  front() {
    return this.items[this.head];
  }

  isEmpty() {
    return this.tail - this.head === 0;
  }

  size() {
    return this.tail - this.head;
  }
}

// ==============================================================================
// 🧪 CLASSIC PROBLEM: VALID PARENTHESES (LEETCODE 20)
// ==============================================================================
/**
 * Problem: Given a string containing '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * 
 * Strategy:
 * Use a Stack. If opening bracket, push matching closing bracket to stack.
 * If closing bracket, pop from stack and check if it matches!
 * 
 * Time: O(n) | Space: O(n)
 */
function isValidParentheses(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for (const char of s) {
    if (map[char]) {
      // Opening bracket: push expected closing bracket
      stack.push(map[char]);
    } else {
      // Closing bracket: pop and check
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// ==============================================================================
// 🧪 DEMONSTRATION & TEST CASES
// ==============================================================================

console.log("=== 1. TESTING STACK (LIFO) ===");
const myStack = new Stack();
myStack.push("Page 1");
myStack.push("Page 2");
myStack.push("Page 3");
console.log("Top of Stack (peek):", myStack.peek()); // "Page 3"
console.log("Popped from Stack:", myStack.pop());    // "Page 3"
console.log("New Top:", myStack.peek());              // "Page 2"

console.log("\n=== 2. TESTING OPTIMAL QUEUE (FIFO) ===");
const myQueue = new Queue();
myQueue.enqueue("User A");
myQueue.enqueue("User B");
myQueue.enqueue("User C");
console.log("First in Queue (front):", myQueue.front()); // "User A"
console.log("Dequeued:", myQueue.dequeue());             // "User A"
console.log("Next in line:", myQueue.front());           // "User B"

console.log("\n=== 3. TESTING VALID PARENTHESES ===");
console.log("isValid('()[]{}') ->", isValidParentheses("()[]{}")); // true
console.log("isValid('(]') ->", isValidParentheses("(]"));         // false
console.log("isValid('([{}])') ->", isValidParentheses("([{}])")); // true

console.log("\n✅ Stacks and Queues mastered!");
