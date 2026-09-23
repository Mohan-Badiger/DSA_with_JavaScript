# 🗂️ 08 - Sorting Algorithms Guide

> **Easy Definition:**  
> A **Sorting Algorithm** rearranges the elements of a collection into a specific order (ascending or descending).

---

## 📊 Comparison of Popular Sorting Algorithms

| Algorithm | Best Time | Average Time | Worst Time | Space | Stable? | When to use? |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Bubble Sort** | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Yes | Educational only |
| **Selection Sort** | $O(n^2)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | No | When memory writes are costly |
| **Insertion Sort** | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Yes | Small arrays ($n < 20$) or nearly-sorted data |
| **Merge Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(n)$ | Yes | Guaranteed $O(n \log n)$ & stability needed |
| **Quick Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$ | $O(\log n)$ | No | Default in-memory sorting, cache friendly |
