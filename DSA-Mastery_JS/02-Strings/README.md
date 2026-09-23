# 🔤 02 - Strings: Concepts & Patterns Guide

> **Easy Definition:**  
> A **String** is a sequence of characters used to represent text. In JavaScript, strings are primitive values and are **immutable** (they cannot be modified in place).

---

## 🧠 String Characteristics in JavaScript

1. **Immutability**:
   - `let s = "hello"; s[0] = "H";` does **NOT** change the string! `s` remains `"hello"`.
   - Any string operation (like `slice()`, `replace()`, `toLowerCase()`) creates and returns a **brand new string** in memory.
2. **UTF-16 Encoding**:
   - Characters are stored as 16-bit code units.
   - Access code unit with `str.charCodeAt(i)` or code point with `str.codePointAt(i)`.

---

## ⏱️ String Operations Complexity

| Operation | Syntax | Time Complexity | Space Complexity |
| :--- | :--- | :---: | :---: |
| Access Character | `str[i]` | $O(1)$ | $O(1)$ |
| Length | `str.length` | $O(1)$ | $O(1)$ |
| Concatenation | `str1 + str2` | $O(n + m)$ | $O(n + m)$ |
| Substring / Slice | `str.slice(start, end)` | $O(k)$ | $O(k)$ |
| Search (Substring) | `str.indexOf(sub)` | $O(n \times m)$ | $O(1)$ |

---

## 📂 Key Algorithms in this Folder

- **Valid Palindrome** (Two-pointer technique)
- **Valid Anagram** (Frequency counter technique)
- **Reverse String / Words**
- **Longest Common Prefix**
