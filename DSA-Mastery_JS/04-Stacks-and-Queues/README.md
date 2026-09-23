# 🥞 04 - Stacks and Queues Guide

> **Easy Definitions:**
> - **Stack (LIFO - Last In, First Out)**: Like a **stack of plates** in a cafeteria. The last plate placed on top is the first plate you remove.
> - **Queue (FIFO - First In, First Out)**: Like a **line of people** waiting at a movie ticket counter. The first person to arrive is the first person served.

---

## ⚡ Real-World & System Applications

1. **Stack Applications**:
   - JavaScript Call Stack (Execution Contexts)
   - Browser History (Back / Forward buttons)
   - Undo/Redo operations in text editors
   - Expression evaluation and parenthesis matching
2. **Queue Applications**:
   - JavaScript Event Loop Task Queue (Macro & Micro tasks)
   - Printer job queues
   - Breadth-First Search (BFS) in trees and graphs

---

## ⏱️ Operation Complexities

| Data Structure | Operation | Method | Time Complexity |
| :--- | :--- | :--- | :---: |
| **Stack** | Push (Add to top) | `push(x)` | **$O(1)$** |
| **Stack** | Pop (Remove from top) | `pop()` | **$O(1)$** |
| **Stack** | Peek (View top item) | `peek()` | **$O(1)$** |
| **Queue** | Enqueue (Add to back) | `enqueue(x)` | **$O(1)$** |
| **Queue** | Dequeue (Remove from front) | `dequeue()` | **$O(1)$** (with pointers) |
| **Queue** | Front (View first item) | `front()` | **$O(1)$** |
