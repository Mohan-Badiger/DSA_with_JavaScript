# 🌳 09 - Trees & Binary Search Trees Guide

> **Easy Definition:**  
> A **Tree** is a non-linear, hierarchical data structure composed of **nodes** connected by **edges**.  
> The top node is called the **Root**, and nodes with no children are called **Leaves**.
>
> - **Binary Tree**: Each node has at most **two** children (Left and Right).
> - **Binary Search Tree (BST)**: A binary tree where:
>   - All values in the **Left Subtree** are **smaller** than the root.
>   - All values in the **Right Subtree** are **greater** than the root.

---

## 🎨 Visualizing a Binary Search Tree (BST)

```
        10 (Root)
       /  \
      5    15
     / \     \
    2   7     18
```

---

## 🧭 Tree Traversals Cheat-Sheet

1. **Depth-First Search (DFS)**:
   - **In-Order** (Left, Root, Right): Visited values are in **strictly sorted order**!
   - **Pre-Order** (Root, Left, Right): Useful for cloning or serializing a tree.
   - **Post-Order** (Left, Right, Root): Useful for deleting trees or evaluating mathematical expression trees.
2. **Breadth-First Search (BFS / Level-Order)**:
   - Visits nodes level by level from top to bottom (Uses a **Queue**).
