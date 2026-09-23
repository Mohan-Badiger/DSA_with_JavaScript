/**
 * ==============================================================================
 * 📦 TOPIC: SDE Fresher Must-Know Binary Tree & BST Patterns
 * ==============================================================================
 * 
 * 🏢 Target Companies: Amazon, Microsoft, Meta, Google, Adobe, Salesforce
 * 
 * 🎯 Patterns Covered:
 * 1. Breadth-First Search (Level Order Traversal with Queue)
 * 2. Depth-First Search & Subtree Aggregation (Diameter & Height)
 * 3. Lowest Common Ancestor (LCA in Binary Tree)
 * 4. BST Validation using Value Interval Ranges
 * ==============================================================================
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

console.log("=== 1. LEVEL ORDER TRAVERSAL (BFS QUEUE PATTERN) ===");
/**
 * Problem (LeetCode #102):
 * Given the root of a binary tree, return the level order traversal
 * of its nodes' values (i.e., from left to right, level by level).
 * 
 * 💡 Queue Snapshot Approach:
 * Measure queue.length at the start of each level to know exactly
 * how many nodes belong to the current depth level!
 * 
 * Time: O(n) | Space: O(n)
 */
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

// Tree:
//      3
//     / \
//    9  20
//       /  \
//      15   7
const sampleTree = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log("Level Order Traversal:", JSON.stringify(levelOrder(sampleTree))); // [[3],[9,20],[15,7]]


console.log("\n=== 2. DIAMETER OF BINARY TREE (DFS POST-ORDER) ===");
/**
 * Problem (LeetCode #543):
 * The diameter of a binary tree is the length of the longest path between any
 * two nodes in a tree. This path may or may not pass through the root.
 * 
 * 💡 Post-order Traversal:
 * At each node, longest path passing THROUGH this node is: leftDepth + rightDepth.
 * Maintain a global maximum diameter while returning max depth to parent.
 * 
 * Time: O(n) | Space: O(h) where h is tree height
 */
function diameterOfBinaryTree(root) {
  let maxDiameter = 0;

  function maxDepth(node) {
    if (!node) return 0;

    const left = maxDepth(node.left);
    const right = maxDepth(node.right);

    // Longest path through this node
    maxDiameter = Math.max(maxDiameter, left + right);

    // Return height of subtree to parent
    return 1 + Math.max(left, right);
  }

  maxDepth(root);
  return maxDiameter;
}

console.log("Diameter of sample tree:", diameterOfBinaryTree(sampleTree)); // 3 (15-20-3-9 or 7-20-3-9)


console.log("\n=== 3. LOWEST COMMON ANCESTOR (LCA) ===");
/**
 * Problem (LeetCode #236):
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes p and q.
 * 
 * 💡 Divide and Conquer DFS:
 * - If current node is null, or matches p or q, return current node.
 * - Recurse left and right.
 * - If both left and right return non-null, current node is the LCA!
 * - If only one returns non-null, propagate that node upward.
 * 
 * Time: O(n) | Space: O(h)
 */
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root; // Both nodes found in different branches -> this is LCA
  }

  return left !== null ? left : right;
}

const node15 = sampleTree.right.left;  // 15
const node7 = sampleTree.right.right;  // 7
const node9 = sampleTree.left;         // 9

console.log("LCA of (15, 7): Node", lowestCommonAncestor(sampleTree, node15, node7).val); // 20
console.log("LCA of (9, 15): Node", lowestCommonAncestor(sampleTree, node9, node15).val);   // 3


console.log("\n=== 4. VALIDATE BINARY SEARCH TREE (BST) ===");
/**
 * Problem (LeetCode #98):
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * 
 * 💡 Range Invariant Traversal:
 * Every node must satisfy: minBound < node.val < maxBound.
 * When going left: maxBound becomes node.val.
 * When going right: minBound becomes node.val.
 * 
 * Time: O(n) | Space: O(h)
 */
function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;

  if (root.val <= min || root.val >= max) {
    return false;
  }

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}

// Valid BST:
//      5
//     / \
//    1   7
//       / \
//      6   8
const validBst = new TreeNode(5,
  new TreeNode(1),
  new TreeNode(7, new TreeNode(6), new TreeNode(8))
);

console.log("Is validBst valid? :", isValidBST(validBst)); // true
console.log("Is sampleTree valid?:", isValidBST(sampleTree)); // false (20 has child 15 which is ok, but not a BST at root)

console.log("\n✅ SDE Fresher Tree Patterns Mastered!");
