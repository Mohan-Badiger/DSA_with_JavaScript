# 🚀 Complete DSA Concepts in JavaScript (Mastery Guide)

Welcome to the **Complete Data Structures & Algorithms (DSA) Learning Guide in JavaScript**.  
This repository is engineered to teach you DSA both **theoretically** (clear definitions, visual diagrams, time & space complexity) and **practically** (runnable JavaScript code, line-by-line comments, edge case handling, and interview patterns).

---

## 🌟 SDE Fresher Job Preparation: 15 Must-Know Patterns
👉 **[Read the Full SDE Fresher Pattern Mastery Roadmap & Question Bank](./SDE-FRESHER-DSA-PATTERNS.md)**

A targeted blueprint of the **15 core algorithmic patterns** (Two Pointers, Sliding Window, Fast & Slow Pointers, Monotonic Stack, Rotated Binary Search, Tree BFS/DFS, In-place Reversals, DP, etc.) tested by top companies (Amazon, Microsoft, Google, Flipkart, Adobe, TCS Digital, Infosys SP) with curated LeetCode/GFG problems and a 60-day study plan.

---

## 📚 Table of Contents & Roadmap

| Module | Topic | Core Concepts | Level | Status |
| :---: | :--- | :--- | :---: | :---: |
| **01** | [**Arrays**](./01-Arrays/README.md) | Contiguous memory, Two Pointers, Sliding Window, Kadane's, Dutch Flag, Intervals | Beginner ➔ Advanced | ✅ Complete |
| **02** | [**Strings**](./02-Strings/README.md) | Immutability, Anagrams, Longest Substring, Expand Around Center | Beginner ➔ Intermediate | ✅ Ready |
| **03** | [**Linked Lists**](./03-Linked-Lists/README.md) | Nodes, Fast & Slow Pointers, Reversals, Merge, Nth from End | Intermediate | ✅ Ready |
| **04** | [**Stacks & Queues**](./04-Stacks-and-Queues/README.md) | LIFO, FIFO, Monotonic Stack, Next Greater Element, Min Stack | Intermediate | ✅ Ready |
| **05** | [**Hash Tables**](./05-Hash-Tables/README.md) | Key-Value hashing, Prefix Sum + Map, Longest Streak, Bucket Sort | Intermediate | ✅ Ready |
| **06** | [**Recursion & Backtracking**](./06-Recursion-and-Backtracking/README.md) | Base cases, Call stack memory, Subsets, Permutations | Intermediate ➔ Advanced | ✅ Ready |
| **07** | [**Searching Algorithms**](./07-Searching-Algorithms/README.md) | Linear search, Rotated Binary Search, Search on Answer, Peaks | Beginner ➔ Intermediate | ✅ Ready |
| **08** | [**Sorting Algorithms**](./08-Sorting-Algorithms/README.md) | Bubble, Selection, Insertion, Merge Sort, Quick Sort | Intermediate | ✅ Ready |
| **09** | [**Trees & BST**](./09-Trees/README.md) | Binary Trees, BST, Level-Order (BFS), Diameter (DFS), LCA | Advanced | ✅ Ready |
| **10** | [**Dynamic Programming**](./10-Dynamic-Programming/README.md) | 1D DP, Coin Change, LIS, 0/1 Knapsack, Tabulation & Space Optimization | Advanced | ✅ Ready |

---

## 💻 SDE Fresher Pattern-Wise Executable Code Files

| Pattern Area | Runnable File Path | Key Problems Solved |
| :--- | :--- | :--- |
| **Arrays & Intervals** | [`01-Arrays/09-dutch-national-flag-and-intervals.js`](./01-Arrays/09-dutch-national-flag-and-intervals.js) | Sort Colors (0,1,2), Merge Intervals, Trapping Rain Water, Most Water |
| **Strings & Substrings** | [`02-Strings/02-sde-string-patterns.js`](./02-Strings/02-sde-string-patterns.js) | Longest Substring Without Repeating, Group Anagrams, Palindromes, Compression |
| **Linked Lists** | [`03-Linked-Lists/02-sde-linked-list-patterns.js`](./03-Linked-Lists/02-sde-linked-list-patterns.js) | Middle of List, Merge 2 Lists, Remove Nth from End, Intersection Node |
| **Stacks & Queues** | [`04-Stacks-and-Queues/02-sde-stack-patterns.js`](./04-Stacks-and-Queues/02-sde-stack-patterns.js) | Valid Parentheses, Next Greater Element, Daily Temperatures, Min Stack |
| **Hash Tables** | [`05-Hash-Tables/02-sde-hashing-patterns.js`](./05-Hash-Tables/02-sde-hashing-patterns.js) | Subarray Sum = K, Longest Consecutive Sequence, Top K Frequent |
| **Binary Search** | [`07-Searching-Algorithms/02-binary-search-patterns.js`](./07-Searching-Algorithms/02-binary-search-patterns.js) | Search in Rotated Array, First & Last Position, Peak Element, Sqrt(x) |
| **Trees & BST** | [`09-Trees/02-sde-tree-patterns.js`](./09-Trees/02-sde-tree-patterns.js) | Level Order (BFS), Tree Diameter (DFS), LCA, Validate BST |
| **Dynamic Programming** | [`10-Dynamic-Programming/02-sde-dp-patterns.js`](./10-Dynamic-Programming/02-sde-dp-patterns.js) | House Robber (1D), Coin Change, Longest Increasing Subsequence, 0/1 Knapsack |


---

## ⚡ Big-O Complexity Quick Reference

Complexity measures how runtime or memory grows as the input size ($n$) scales.

```
Efficiency Hierarchy (Best to Worst):
O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)
```

| Big-O Notation | Name | Example Operation | Performance Rating |
| :--- | :--- | :--- | :--- |
| **O(1)** | Constant | Array index access, Map lookup | 🟢 Excellent |
| **O(log n)** | Logarithmic | Binary Search | 🟢 Good |
| **O(n)** | Linear | Loop through array / string | 🟡 Fair |
| **O(n log n)** | Linearithmic | Merge Sort, Quick Sort (average) | 🟡 Acceptable |
| **O(n²)** | Quadratic | Nested loops (Bubble Sort) | 🔴 Poor (Avoid for large $n$) |
| **O(2ⁿ)** | Exponential | Naive recursive Fibonacci | ⛔ Horrible |
| **O(n!)** | Factorial | Generating all permutations | ⛔ Catastrophic |

---

## 🏃 How to Run and Practice

Every topic contains isolated, executable JavaScript files with built-in tests and console printouts.

1. Make sure you have **Node.js** installed on your machine (`node -v`).
2. Open your terminal in this repository directory.
3. Run any file directly:
   ```bash
   node 01-Arrays/01-array-basics.js
   node 01-Arrays/04-two-pointer-technique.js
   ```
4. Observe the formatted output, examine the line-by-line comments, and experiment with the code!

---

## 🎯 Best Practices for Learning DSA

1. **Understand First, Code Second**: Don't memorize solutions. Visualize what happens step-by-step using dry-runs on paper.
2. **Analyze Constraints**: Always ask: What is $N$? ($N \le 10^3 \implies O(n^2)$ is okay; $N \le 10^5 \implies$ need $O(n)$ or $O(n \log n)$).
3. **Handle Edge Cases**: Empty arrays, 1 element, duplicate elements, negative numbers, extreme values.
4. **Speak JavaScript Fluently**: Know how JavaScript engines (like Google Chrome's V8) handle arrays, objects, references, and memory under the hood.
