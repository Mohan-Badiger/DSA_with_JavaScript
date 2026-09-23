# 🗄️ 05 - Hash Tables: Concepts & Practice Guide

> **Easy Definition:**  
> A **Hash Table** (or Hash Map) is a data structure that stores key-value pairs.  
> It uses a **Hash Function** to convert a key into an array index where the value can be found directly.  
> Think of it like a **library index system**: you give the book title, the index system hashes it into a shelf number, and you walk straight to that shelf in **$O(1)$ time**!

---

## 🆚 JavaScript: `Map` vs Plain `Object`

| Feature | `Map` | Plain `Object` (`{}`) |
| :--- | :--- | :--- |
| **Key Types** | Any type (objects, functions, primitives) | Strings and Symbols only |
| **Key Order** | Preserves insertion order guaranteed | Complex order rules |
| **Size** | Easily read with `map.size` | Must count keys: `Object.keys(obj).length` |
| **Performance** | Optimized for frequent additions/removals | Optimized for fixed shape property lookups |
| **Prototype Pollution** | Immune (no default keys) | Can inherit prototype properties |

---

## 💥 Handling Collisions

When two different keys produce the same hash index:
1. **Separate Chaining**: Store multiple items at the same index in an array or linked list (most common).
2. **Open Addressing / Linear Probing**: Find the next open slot in the array.
