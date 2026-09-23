# 📦 01 - Arrays: Complete Concept & Practice Guide

> **Easy Definition:**  
> An **Array** is a linear data structure that stores a collection of elements identified by an index or key.  
> Think of an array like a **row of numbered lockers** in a gym: each locker has a fixed number ($0, 1, 2, \dots$), and if you know the locker number, you can open it immediately in constant time $O(1)$.

---

## 🧠 Array Memory in JavaScript (Under the Hood)

In low-level languages like C/C++, an array is a **contiguous block of memory** of a fixed size and single data type:

```
Address:   0x100   0x104   0x108   0x10C
Elements: [  10  |  20   |  30   |  40   ]
Index:        0       1       2       3
```

In **JavaScript**, arrays are **dynamic objects** with special behaviors. The V8 engine (Chrome / Node.js) optimizes them behind the scenes:

1. **Packed Elements (Fast Elements)**:
   - When an array has continuous elements without gaps: `[1, 2, 3, 4]`.
   - V8 allocates contiguous memory for lightning-fast access.
2. **Holey Elements (Slow Elements)**:
   - When you create gaps (holes): `const arr = []; arr[0] = 1; arr[100] = 2;`
   - V8 converts this into a sparse dictionary/hash table representation, which is slower to access.
3. **Element Kinds**:
   - `PACKED_SMI_ELEMENTS`: Packed Small Integers (Fastest).
   - `PACKED_DOUBLE_ELEMENTS`: Floating-point numbers.
   - `PACKED_ELEMENTS`: Objects, strings, mixed types.

> 💡 **Golden Rule in JS**: Avoid creating holes (`delete arr[2]` leaves `empty`), avoid mixing data types in performance-critical loops, and initialize with known sizes when possible.

---

## ⏱️ Array Operations & Time Complexity

| Operation | Method / Action | Time Complexity | Space Complexity | Why? |
| :--- | :--- | :---: | :---: | :--- |
| **Access by Index** | `arr[i]` | **$O(1)$** | $O(1)$ | Direct pointer calculation |
| **Search by Value** | `arr.indexOf(x)`, `arr.includes(x)` | **$O(n)$** | $O(1)$ | May need to inspect all items |
| **Insert at End** | `arr.push(x)` | **$O(1)$** amortized | $O(1)$ | Added directly to tail |
| **Delete from End** | `arr.pop()` | **$O(1)$** | $O(1)$ | Removed directly from tail |
| **Insert at Start** | `arr.unshift(x)` | **$O(n)$** | $O(1)$ | Every item must shift right by 1 |
| **Delete from Start** | `arr.shift()` | **$O(n)$** | $O(1)$ | Every item must shift left by 1 |
| **Insert/Delete at Index $i$** | `arr.splice(i, 1, val)` | **$O(n)$** | $O(1)$ | Items after $i$ must shift |
| **Slice / Copy Subarray** | `arr.slice(start, end)` | **$O(k)$** | $O(k)$ | Creates shallow copy of $k$ items |

---

## 🎨 Visualizing Array Shifting (Why `shift()` and `unshift()` are $O(n)$)

### Inserting at index 0 (`unshift`):
```
Original: [ 10, 20, 30 ]
Step 1 (Shift 30 right): [ 10, 20, __, 30 ]
Step 2 (Shift 20 right): [ 10, __, 20, 30 ]
Step 3 (Shift 10 right): [ __, 10, 20, 30 ]
Step 4 (Insert 5 at 0) : [  5, 10, 20, 30 ]
Total Operations = n shifts -> O(n)
```

---

## 📂 Learning Files in this Folder

Run each file using `node 01-Arrays/<filename>.js` to see outputs, test cases, and code walkthroughs:

| # | File Name | Topics Covered | Key Patterns |
|---|---|---|---|
| **01** | [`01-array-basics.js`](./01-array-basics.js) | Creation, indexing, length quirks, 4 ways to loop | Traversal, iteration |
| **02** | [`02-core-operations.js`](./02-core-operations.js) | Manual insert, delete, search, update from scratch | Pointer shifting logic |
| **03** | [`03-builtin-methods-explained.js`](./03-builtin-methods-explained.js) | Deep dive into `splice`, `slice`, `map`, `filter`, `reduce` | Functional programming |
| **04** | [`04-two-pointer-technique.js`](./04-two-pointer-technique.js) | Opposite-end pointers & fast-slow pointers | Reverse, Two Sum, Remove Duplicates |
| **05** | [`05-sliding-window.js`](./05-sliding-window.js) | Fixed-size & Dynamic-size sliding windows | Max subarray sum of size K, Minimum length subarray |
| **06** | [`06-kadanes-and-prefix-sum.js`](./06-kadanes-and-prefix-sum.js) | Kadane's Algorithm & Prefix Sum queries | Maximum Subarray Sum, Range Query $O(1)$ |
| **07** | [`07-2d-matrices.js`](./07-2d-matrices.js) | 2D Arrays, Row/Col traversal, Transpose, Spiral Matrix | Grid algorithms |
| **08** | [`08-interview-challenges.js`](./08-interview-challenges.js) | Rotate Array, Move Zeroes, Merge Sorted, Stock Buy/Sell | Classic interview problems |

---

## 💡 Top 5 Tips for Array Problem Solving

1. **Is the array sorted?**  
   If yes, think **Binary Search ($O(\log n)$)** or **Two Pointers ($O(n)$)**.
2. **Looking for contiguous subarrays?**  
   Think **Sliding Window** or **Prefix Sum** or **Kadane's Algorithm**.
3. **Need constant lookup $O(1)$?**  
   Pre-compute values into a **Hash Map / Set**.
4. **Modifying while iterating?**  
   Be careful iterating forward when using `splice()`; indices shift! Iterate backwards or use two pointers.
5. **Space constraints?**  
   Check if you can solve in-place with $O(1)$ auxiliary space by swapping elements.
