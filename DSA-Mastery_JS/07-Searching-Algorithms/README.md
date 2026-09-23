# 🔍 07 - Searching Algorithms Guide

> **Easy Definition:**  
> A **Searching Algorithm** is used to locate a specific element or value within a data collection.
>
> - **Linear Search**: Looking for a book by inspecting every single book on a shelf one by one from left to right. Works on unsorted data. **$O(n)$**.
> - **Binary Search**: Looking for a word in a dictionary. Open to the middle page; if your word comes after, discard the left half and open to the middle of the right half. Requires data to be **SORTED**! **$O(\log n)$**.

---

## ⚡ Big-O Power of Binary Search

If an array has **1,000,000 elements**:
- Linear search takes up to **1,000,000 steps**!
- Binary search takes at most **20 steps**! ($\log_2(1,000,000) \approx 20$).
