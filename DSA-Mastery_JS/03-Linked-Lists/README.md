# 🔗 03 - Linked Lists: Concepts & Operations Guide

> **Easy Definition:**  
> A **Linked List** is a linear collection of data elements called **Nodes**, where each node contains:
> 1. **Data / Value**
> 2. **Next Pointer / Reference**: An address pointing to the next node in sequence.
>
> Think of a linked list like a **scavenger hunt**: each clue tells you where to find the next clue. You cannot jump directly to clue #5 without reading clues 1, 2, 3, and 4 first!

---

## 🆚 Arrays vs Linked Lists

| Feature | Array | Linked List |
| :--- | :--- | :--- |
| **Memory Allocation** | Contiguous block | Scattered anywhere in memory |
| **Access by Index** | $O(1)$ (Instant) | $O(n)$ (Must traverse from head) |
| **Insert/Delete at Head** | $O(n)$ (Shifting required) | **$O(1)$** (Just update pointer) |
| **Size** | Fixed or dynamic resizing cost | Dynamic (grows/shrinks easily) |
| **Memory Overhead** | Minimal | Extra memory for node references (`next`) |

---

## 🎨 Visualizing a Singly Linked List

```
  Head                                          Tail
 [10 | next] ---> [20 | next] ---> [30 | next] ---> null
```
