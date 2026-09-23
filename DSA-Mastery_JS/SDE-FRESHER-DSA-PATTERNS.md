# 🎯 SDE Fresher DSA Mastery Roadmap: 15 Must-Know Patterns

> **Targeted For**: SDE-1 / Software Engineer Fresher / Graduate Engineer Trainee interviews and Online Assessments (Amazon, Microsoft, Google, Flipkart, Uber, Adobe, Goldman Sachs, TCS Digital, Infosys SP, and top tech startups).

---

## 📌 Why "Patterns" Over Blind LeetCoding?

Blindly solving 500+ LeetCode problems often leads to burnout and forgotten solutions. **85%+ of all SDE Fresher coding problems derive from just 15 fundamental algorithmic patterns.** Once you learn how to identify the pattern from problem keywords and constraints, you can solve *any* unseen problem during your interview.

---

## 🗺️ The 15 Core Patterns at a Glance

| # | Pattern Name | Key Data Structures | Best Suited For | Common Companies |
|---|---|---|---|---|
| **01** | [**Two Pointers**](#pattern-1-two-pointers) | Array, String | Sorted arrays, pairs, partitioning | Amazon, Microsoft, Adobe |
| **02** | [**Sliding Window**](#pattern-2-sliding-window) | Array, String, Hash Map | Contiguous subarrays/substrings, min/max length | Amazon, Google, Flipkart |
| **03** | [**Fast & Slow Pointers**](#pattern-3-fast--slow-pointers-floyds-cycle) | Linked List, Array | Cycle detection, middle finding | Microsoft, TCS Digital |
| **04** | [**Prefix Sum & Kadane's**](#pattern-4-prefix-sum--kadanes-algorithm) | Array, Hash Map | Subarray sum, maximum subarray, range queries | Facebook, Amazon, Google |
| **05** | [**Monotonic Stack / Queue**](#pattern-5-monotonic-stack--queue) | Stack, Deque | Next greater/smaller element, histograms | Flipkart, Adobe, Goldman Sachs |
| **06** | [**Linked List In-Place Manipulation**](#pattern-6-linked-list-in-place-manipulation) | Linked List | Reversing, k-groups, merging, reordering | Microsoft, Amazon, Apple |
| **07** | [**Binary Search & Search on Answer**](#pattern-7-binary-search--search-on-answer) | Array | Sorted space, monotonic feasibility, bounds | Google, Uber, Flipkart |
| **08** | [**Hash Map / Frequency Counter**](#pattern-8-hash-map--frequency-counter) | Map, Set | O(1) lookups, duplicates, anagrams, groupings | Amazon, Bloomberg, Swiggy |
| **09** | [**Tree DFS (Pre / In / Post Order)**](#pattern-9-tree-dfs-pre--in--post-order) | Binary Tree, Recursion | Heights, paths, validation, LCA | Microsoft, Amazon, Meta |
| **10** | [**Tree BFS (Level Order Traversal)**](#pattern-10-tree-bfs-level-order-traversal) | Binary Tree, Queue | Level-by-level processing, zig-zag, shortest path | Amazon, Adobe, Salesforce |
| **11** | [**Matrix & Grid Traversal (2D DFS/BFS)**](#pattern-11-matrix--grid-traversal-2d-dfsbfs) | 2D Array, Queue | Islands, flood fill, pathfinding, rotting oranges | Amazon, Google, Uber |
| **12** | [**Backtracking & Recursion**](#pattern-12-backtracking--recursion) | Array, Recursion | Subsets, permutations, combinations, word search | Microsoft, Google, Adobe |
| **13** | [**Overlapping Intervals & Greedy**](#pattern-13-overlapping-intervals--greedy) | Array, Sorting | Merging intervals, meeting rooms, non-overlapping | Google, Facebook, Microsoft |
| **14** | [**Top-K Elements & Heap**](#pattern-14-top-k-elements--heap--priority-queue) | Array, Heap / Bucket | Kth largest/smallest, K frequent elements | Amazon, Walmart, Oracle |
| **15** | [**Dynamic Programming (1D & 2D)**](#pattern-15-dynamic-programming-1d--2d) | Array, Matrix | Optimization, counting paths, knapsack, subsequences | Amazon, Google, Flipkart |

---

## 🔍 Detailed Pattern Breakdown & Must-Solve Problems

---

### Pattern 1: Two Pointers

#### 💡 When to Use
- Input is an **array** or **string** that is **sorted** (or can be sorted).
- You need to find a pair, triplet, or subarray satisfying a condition with $O(n)$ time and $O(1)$ space.
- In-place partitioning (e.g. Dutch National Flag, moving zeros).

#### 🛠️ Core JavaScript Template
```javascript
function twoPointers(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}
```

#### 📋 Must-Solve Fresher Questions
1. **Two Sum II - Input Array Is Sorted** (LeetCode #167) `Easy` - *Amazon, Adobe*
2. **Valid Palindrome** (LeetCode #125) `Easy` - *Microsoft, TCS Digital*
3. **3Sum** (LeetCode #15) `Medium` - *Amazon, Google, Meta*
4. **Sort Colors (Dutch National Flag)** (LeetCode #75) `Medium` - *Microsoft, Flipkart*
5. **Container With Most Water** (LeetCode #11) `Medium` - *Adobe, Swiggy*
6. **Trapping Rain Water** (LeetCode #42) `Hard (Common in Amazon/GS)` - *Amazon, Goldman Sachs*

---

### Pattern 2: Sliding Window

#### 💡 When to Use
- Finding the longest, shortest, or target contiguous subarray / substring.
- Keywords: *"continuous subarray"*, *"longest substring with at most k distinct characters"*, *"minimum size subarray sum"*.

#### 🛠️ Core JavaScript Template (Dynamic Window)
```javascript
function dynamicSlidingWindow(arr, condition) {
  let left = 0;
  let maxLen = 0;
  const windowMap = new Map();

  for (let right = 0; right < arr.length; right++) {
    // 1. Expand window with arr[right]
    windowMap.set(arr[right], (windowMap.get(arr[right]) || 0) + 1);

    // 2. Shrink window while invalid
    while (/* window violates condition */) {
      windowMap.set(arr[left], windowMap.get(arr[left]) - 1);
      if (windowMap.get(arr[left]) === 0) windowMap.delete(arr[left]);
      left++;
    }

    // 3. Update answer
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
```

#### 📋 Must-Solve Fresher Questions
1. **Maximum Average Subarray I** (LeetCode #643) `Easy` - *Amazon*
2. **Longest Substring Without Repeating Characters** (LeetCode #3) `Medium` - *Amazon, Microsoft, Adobe*
3. **Minimum Size Subarray Sum** (LeetCode #209) `Medium` - *Google, Flipkart*
4. **Max Consecutive Ones III** (LeetCode #1004) `Medium` - *Meta, Uber*
5. **Permutation in String** (LeetCode #567) `Medium` - *Microsoft, Apple*

---

### Pattern 3: Fast & Slow Pointers (Floyd's Cycle)

#### 💡 When to Use
- Dealing with **Linked Lists** or cyclic array transitions.
- Detecting cycles, finding the middle node, finding cycle start point, or testing for "Happy Number".

#### 🛠️ Core JavaScript Template
```javascript
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true; // Cycle detected
  }
  return false;
}
```

#### 📋 Must-Solve Fresher Questions
1. **Middle of the Linked List** (LeetCode #876) `Easy` - *Amazon, TCS Digital*
2. **Linked List Cycle** (LeetCode #141) `Easy` - *Microsoft, Amazon*
3. **Linked List Cycle II (Find Start of Cycle)** (LeetCode #142) `Medium` - *Amazon, Adobe*
4. **Happy Number** (LeetCode #202) `Easy` - *Google, Uber*
5. **Palindrome Linked List** (LeetCode #234) `Easy` - *Microsoft, Infosys*

---

### Pattern 4: Prefix Sum & Kadane's Algorithm

#### 💡 When to Use
- Frequent subarray range sum queries: $\text{sum}(i, j) = \text{prefix}[j] - \text{prefix}[i - 1]$.
- Contiguous subarray sum matching target $K$ (Prefix Sum + Hash Map).
- Maximum contiguous subarray sum in $O(n)$ time (Kadane's).

#### 🛠️ Core JavaScript Template (Prefix Sum with Map)
```javascript
function subarraySumEqualsK(nums, k) {
  const prefixMap = new Map();
  prefixMap.set(0, 1); // Base case
  let sum = 0, count = 0;

  for (const num of nums) {
    sum += num;
    if (prefixMap.has(sum - k)) {
      count += prefixMap.get(sum - k);
    }
    prefixMap.set(sum, (prefixMap.get(sum) || 0) + 1);
  }
  return count;
}
```

#### 📋 Must-Solve Fresher Questions
1. **Maximum Subarray (Kadane's Algorithm)** (LeetCode #53) `Medium` - *Amazon, Microsoft, Google*
2. **Subarray Sum Equals K** (LeetCode #560) `Medium` - *Facebook, Amazon, Google*
3. **Product of Array Except Self** (LeetCode #238) `Medium` - *Amazon, Apple, Uber*
4. **Find Pivot Index** (LeetCode #724) `Easy` - *Adobe, Cognizant*
5. **Continuous Subarray Sum** (LeetCode #523) `Medium` - *Meta, Microsoft*

---

### Pattern 5: Monotonic Stack & Queue

#### 💡 When to Use
- Finding the **next greater element**, **previous smaller element**, or maintaining increasing/decreasing order.
- Stock spans, daily temperature wait times, or largest rectangle under histogram.

#### 🛠️ Core JavaScript Template (Next Greater Element)
```javascript
function nextGreaterElements(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = []; // Stores indices

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      const idx = stack.pop();
      result[idx] = nums[i];
    }
    stack.push(i);
  }
  return result;
}
```

#### 📋 Must-Solve Fresher Questions
1. **Valid Parentheses** (LeetCode #20) `Easy` - *Amazon, Microsoft, Meta*
2. **Next Greater Element I** (LeetCode #496) `Easy` - *Amazon, Flipkart*
3. **Daily Temperatures** (LeetCode #739) `Medium` - *Amazon, Bloomberg*
4. **Min Stack** (LeetCode #155) `Medium` - *Goldman Sachs, Microsoft*
5. **Largest Rectangle in Histogram** (LeetCode #84) `Hard` - *Amazon, Google*

---

### Pattern 6: Linked List In-Place Manipulation

#### 💡 When to Use
- Reversing a linked list or portion of it without extra memory.
- Rearranging alternating nodes or merging lists.

#### 📋 Must-Solve Fresher Questions
1. **Reverse Linked List** (LeetCode #206) `Easy` - *Amazon, Microsoft, Adobe*
2. **Merge Two Sorted Lists** (LeetCode #21) `Easy` - *Apple, Amazon, TCS*
3. **Remove Nth Node From End of List** (LeetCode #19) `Medium` - *Google, Flipkart*
4. **Reorder List** (LeetCode #143) `Medium` - *Amazon, Meta*
5. **Add Two Numbers** (LeetCode #2) `Medium` - *Amazon, Microsoft*
6. **Reverse Nodes in k-Group** (LeetCode #25) `Hard` - *Microsoft, Google*

---

### Pattern 7: Binary Search & Search on Answer

#### 💡 When to Use
- Any **sorted** array ($O(\log n)$ lookup).
- Rotated sorted arrays with pivots.
- **Binary Search on Answer**: When the search space is monotonic (e.g. min capacity, book allocation, square roots).

#### 🛠️ Core JavaScript Template (Search on Answer / Condition)
```javascript
function binarySearchOnAnswer(low, high, isValid) {
  let ans = high;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (isValid(mid)) {
      ans = mid;
      high = mid - 1; // Try smaller valid answer
    } else {
      low = mid + 1;  // Need bigger value
    }
  }
  return ans;
}
```

#### 📋 Must-Solve Fresher Questions
1. **Binary Search** (LeetCode #704) `Easy` - *All Companies*
2. **Search in Rotated Sorted Array** (LeetCode #33) `Medium` - *Amazon, Microsoft, Google*
3. **Find First and Last Position of Element** (LeetCode #34) `Medium` - *Adobe, Microsoft*
4. **Find Minimum in Rotated Sorted Array** (LeetCode #153) `Medium` - *Amazon, Goldman Sachs*
5. **Sqrt(x)** (LeetCode #69) `Easy` - *Bloomberg, Apple*
6. **Capacity To Ship Packages Within D Days** (LeetCode #1011) `Medium` - *Google, Uber*

---

### Pattern 8: Hash Map / Frequency Counter

#### 💡 When to Use
- Constant-time $O(1)$ lookups, counting occurrences, finding duplicates, grouping items by signature.

#### 📋 Must-Solve Fresher Questions
1. **Two Sum** (LeetCode #1) `Easy` - *Every Single Company*
2. **Group Anagrams** (LeetCode #49) `Medium` - *Amazon, Uber, Apple*
3. **Longest Consecutive Sequence** (LeetCode #128) `Medium` - *Google, Microsoft*
4. **Top K Frequent Elements** (LeetCode #347) `Medium` - *Amazon, Meta*
5. **Ransom Note** (LeetCode #383) `Easy` - *Microsoft, TCS*

---

### Pattern 9: Tree DFS (Pre / In / Post Order)

#### 💡 When to Use
- Evaluating depth, finding maximum paths, tree validation, or bottom-up recursion.

#### 📋 Must-Solve Fresher Questions
1. **Maximum Depth of Binary Tree** (LeetCode #104) `Easy` - *Amazon, Microsoft*
2. **Invert / Flip Binary Tree** (LeetCode #226) `Easy` - *Google, Meta*
3. **Diameter of Binary Tree** (LeetCode #543) `Easy` - *Amazon, Facebook*
4. **Lowest Common Ancestor of a Binary Tree** (LeetCode #236) `Medium` - *Amazon, Microsoft*
5. **Path Sum** (LeetCode #112) `Easy` - *Oracle, Adobe*
6. **Validate Binary Search Tree** (LeetCode #98) `Medium` - *Amazon, Bloomberg*

---

### Pattern 10: Tree BFS (Level Order Traversal)

#### 💡 When to Use
- Traversing a tree level by level using a Queue (`FIFO`).
- Finding shortest path in unweighted structures or printing view (left/right/zigzag).

#### 🛠️ Core JavaScript Template (Queue BFS)
```javascript
function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
}
```

#### 📋 Must-Solve Fresher Questions
1. **Binary Tree Level Order Traversal** (LeetCode #102) `Medium` - *Amazon, Microsoft*
2. **Binary Tree Zigzag Level Order Traversal** (LeetCode #103) `Medium` - *Amazon, Adobe*
3. **Binary Tree Right Side View** (LeetCode #199) `Medium` - *Meta, Amazon*
4. **Populating Next Right Pointers in Each Node** (LeetCode #116) `Medium` - *Microsoft*

---

### Pattern 11: Matrix & Grid Traversal (2D DFS/BFS)

#### 💡 When to Use
- 2D grid problems: finding connected components (islands), path finding, flood filling.
- Moving in 4 directions: `[[0,1], [0,-1], [1,0], [-1,0]]`.

#### 📋 Must-Solve Fresher Questions
1. **Number of Islands** (LeetCode #200) `Medium` - *Amazon, Google, Microsoft*
2. **Flood Fill** (LeetCode #733) `Easy` - *Adobe, Uber*
3. **Rotting Oranges (Multi-source BFS)** (LeetCode #994) `Medium` - *Amazon, Microsoft*
4. **Spiral Matrix** (LeetCode #54) `Medium` - *Microsoft, Apple*
5. **Set Matrix Zeroes** (LeetCode #73) `Medium` - *Amazon, Adobe*

---

### Pattern 12: Backtracking & Recursion

#### 💡 When to Use
- Generating all configurations, permutations, combinations, or searching across a board.
- The standard recipe: **Choose -> Recurse -> Backtrack (Un-choose)**.

#### 📋 Must-Solve Fresher Questions
1. **Subsets** (LeetCode #78) `Medium` - *Amazon, Facebook*
2. **Permutations** (LeetCode #46) `Medium` - *Microsoft, Google*
3. **Combination Sum** (LeetCode #39) `Medium` - *Amazon, Uber*
4. **Word Search** (LeetCode #79) `Medium` - *Microsoft, Bloomberg*
5. **Generate Parentheses** (LeetCode #22) `Medium` - *Amazon, Google*

---

### Pattern 13: Overlapping Intervals & Greedy

#### 💡 When to Use
- Scheduling events, finding conflicts, merging overlapping time blocks.
- **Rule of Thumb**: Sort intervals by **start time** (or sometimes end time).

#### 📋 Must-Solve Fresher Questions
1. **Merge Intervals** (LeetCode #56) `Medium` - *Google, Facebook, Microsoft*
2. **Insert Interval** (LeetCode #57) `Medium` - *Google, Amazon*
3. **Non-overlapping Intervals** (LeetCode #435) `Medium` - *Amazon, Adobe*
4. **Meeting Rooms II** (LeetCode #253 / GFG) `Medium` - *Amazon, Microsoft*

---

### Pattern 14: Top-K Elements & Heap / Priority Queue

#### 💡 When to Use
- Finding the top $K$ smallest, largest, or most frequent items in an array without full $O(n \log n)$ sort.
- Note: In JavaScript, min-heaps can be implemented with a simple heap class or bucket sorting.

#### 📋 Must-Solve Fresher Questions
1. **Kth Largest Element in an Array** (LeetCode #215) `Medium` - *Amazon, Meta*
2. **Top K Frequent Elements** (LeetCode #347) `Medium` - *Amazon, Microsoft*
3. **Find Median from Data Stream** (LeetCode #295) `Hard` - *Google, Amazon*
4. **Merge K Sorted Lists** (LeetCode #23) `Hard` - *Amazon, Microsoft*

---

### Pattern 15: Dynamic Programming (1D & 2D)

#### 💡 When to Use
- Problem asks for:
  - **Optimal value**: Minimum/maximum cost, longest length.
  - **Number of ways**: Distinct combinations, paths.
  - Presence of **overlapping subproblems** and **optimal substructure**.

#### 📋 Must-Solve Fresher Questions
1. **Climbing Stairs** (LeetCode #70) `Easy` - *Amazon, TCS Digital*
2. **House Robber** (LeetCode #198) `Medium` - *Google, Microsoft*
3. **Coin Change (Minimum Coins)** (LeetCode #322) `Medium` - *Amazon, Walmart*
4. **Longest Increasing Subsequence (LIS)** (LeetCode #300) `Medium` - *Microsoft, Google*
5. **0/1 Knapsack Problem** (Standard) `Medium` - *TCS Digital, Infosys, Flipkart*
6. **Longest Common Subsequence (LCS)** (LeetCode #1143) `Medium` - *Amazon, Adobe*
7. **Unique Paths** (LeetCode #62) `Medium` - *Amazon, Meta*

---

## 📅 SDE Fresher 60-Day Prep Schedule

| Week | Focus Areas | Daily Target | Outcome |
| :---: | :--- | :--- | :--- |
| **Week 1** | Arrays, Two Pointers & Prefix Sum | 2-3 problems | Solid foundation in in-place manipulation |
| **Week 2** | Sliding Window & String Patterns | 2-3 problems | Master contiguous subarray problems |
| **Week 3** | Linked Lists & Fast/Slow Pointers | 2 problems | Confidence in pointer-based traversal |
| **Week 4** | Stacks, Queues & Monotonic Stack | 2 problems | Master Next Greater Element & Parentheses |
| **Week 5** | Binary Search & Search on Answer | 2 problems | Master $O(\log n)$ interview traps |
| **Week 6** | Trees & BST (DFS + BFS) | 3 problems | Tree recursion, heights, & level orders |
| **Week 7** | 2D Grids, Matrices & Backtracking | 2 problems | Conquer Number of Islands & Subsets |
| **Week 8** | Overlapping Intervals & Heaps | 2 problems | Master interval scheduling |
| **Week 9** | 1D & 2D Dynamic Programming | 2 problems | Grasp memoization & tabulation |
| **Week 10** | Mock Interviews & Timed Contests | 1 contest/day | Speed, communication, and debugging |

---

## ⚡ 5 Tips to Clear SDE Fresher Technical Interviews

1. **Think Out Loud**: Never jump into code immediately. Spend the first 3-5 minutes clarifying inputs, outputs, and constraints.
2. **State the Brute Force First**: Give the brute force solution (e.g. $O(n^2)$) and state its complexity before jumping to the optimal pattern.
3. **Dry Run with Edge Cases**: Walk through an example trace with your code line-by-line using edge cases: empty array, single element, negative numbers, duplicates.
4. **Know Your JS Engine**: Understand how arrays, references, garbage collection, and call stack work in JavaScript engines (V8).
5. **Analyze Complexity Confidently**: Always state both Time Complexity and Space Complexity upfront without being asked!
