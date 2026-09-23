# 🚀 Complete DSA Concepts in JavaScript (Mastery Guide)

Welcome to the **Complete Data Structures & Algorithms (DSA) Learning Guide in JavaScript**.  
This repository is engineered to teach you DSA both **theoretically** (clear definitions, visual diagrams, time & space complexity) and **practically** (runnable JavaScript code, line-by-line comments, edge case handling, and interview patterns).

---

## 📚 Table of Contents & Roadmap

| Module | Topic | Core Concepts | Level | Status |
| :---: | :--- | :--- | :---: | :---: |
| **01** | [**Arrays**](./01-Arrays/README.md) | Contiguous memory, Two Pointers, Sliding Window, Kadane's, Matrices | Beginner ➔ Advanced | ✅ Complete |
| **02** | [**Strings**](./02-Strings/README.md) | Immutability, ASCII/Unicode, Palindromes, Anagrams | Beginner ➔ Intermediate | ✅ Ready |
| **03** | [**Linked Lists**](./03-Linked-Lists/README.md) | Nodes, Pointers, Singly, Doubly, Reversals, Fast & Slow Pointers | Intermediate | ✅ Ready |
| **04** | [**Stacks & Queues**](./04-Stacks-and-Queues/README.md) | LIFO, FIFO, Call Stack, Monotonic Stack, Priority Queue | Intermediate | ✅ Ready |
| **05** | [**Hash Tables**](./05-Hash-Tables/README.md) | Key-Value hashing, Collisions, Map vs Object, Frequency counters | Intermediate | ✅ Ready |
| **06** | [**Recursion & Backtracking**](./06-Recursion-and-Backtracking/README.md) | Base cases, Call stack memory, Subsets, Permutations | Intermediate ➔ Advanced | ✅ Ready |
| **07** | [**Searching Algorithms**](./07-Searching-Algorithms/README.md) | Linear search, Binary search variations, Lower/Upper bounds | Beginner ➔ Intermediate | ✅ Ready |
| **08** | [**Sorting Algorithms**](./08-Sorting-Algorithms/README.md) | Bubble, Selection, Insertion, Merge Sort, Quick Sort | Intermediate | ✅ Ready |
| **09** | [**Trees & BST**](./09-Trees/README.md) | Binary Trees, BST, DFS (Pre/In/Post), BFS (Level-Order) | Advanced | ✅ Ready |
| **10** | [**Dynamic Programming**](./10-Dynamic-Programming/README.md) | Overlapping subproblems, Memoization (Top-Down), Tabulation (Bottom-Up) | Advanced | ✅ Ready |

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
