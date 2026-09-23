# 🔄 06 - Recursion & Backtracking Guide

> **Easy Definitions:**
> - **Recursion**: A programming technique where a function calls **itself** to solve a smaller instance of the same problem, until it hits a **Base Case** (the stopping condition).
> - **Backtracking**: An algorithmic approach that builds candidates to a solution incrementally and abandons ("backtracks") a candidate as soon as it determines it cannot possibly lead to a valid solution. Think of it like exploring a **maze**: you walk down a path, and if you hit a dead end, you step back and try the next branch.

---

## 🧱 The Two Golden Rules of Recursion

Every recursive function MUST have:
1. **The Base Case**: When do we STOP? (Prevents `Maximum call stack size exceeded` error).
2. **The Recursive Step**: How do we break down the problem to get closer to the base case?

---

## 🎨 Call Stack Visualization: `factorial(3)`

```
Step 1: factorial(3) calls factorial(2)
Step 2: factorial(2) calls factorial(1)
Step 3: factorial(1) hits Base Case -> returns 1
Step 4: factorial(2) resolves 2 * 1 -> returns 2
Step 5: factorial(3) resolves 3 * 2 -> returns 6
```
