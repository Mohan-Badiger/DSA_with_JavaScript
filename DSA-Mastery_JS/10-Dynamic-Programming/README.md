# 💡 10 - Dynamic Programming (DP) Guide

> **Easy Definition:**  
> **Dynamic Programming (DP)** is an optimization technique that solves complex problems by breaking them down into simpler **subproblems**, solving each subproblem **only once**, and **storing their answers** to avoid repeated work.  
>
> In simple words: **"Remembering past answers so you don't calculate them again."**

---

## 🔑 Two Characteristics of a DP Problem

1. **Overlapping Subproblems**: The same smaller subproblems are computed again and again (e.g. `fib(5)` calculates `fib(3)` multiple times).
2. **Optimal Substructure**: The optimal solution of the main problem can be constructed from optimal solutions of its subproblems.

---

## 🥊 The Two Approaches: Top-Down vs Bottom-Up

| Approach | Name | Strategy | How it works |
| :--- | :--- | :--- | :--- |
| **Top-Down** | **Memoization** | Recursion + Cache | Start with the big problem, break it down recursively, cache results in a Map/Array. |
| **Bottom-Up** | **Tabulation** | Iteration + Table | Start with the smallest base cases and iteratively build up the solution table. |
