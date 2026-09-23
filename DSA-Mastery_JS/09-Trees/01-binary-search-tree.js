/**
 * ==============================================================================
 * 📦 TOPIC: Binary Search Tree (BST) & All 4 Traversal Methods
 * ==============================================================================
 * 
 * ⏱️ COMPLEXITIES:
 * - Insert : O(log n) average, O(n) worst (skewed tree)
 * - Search : O(log n) average, O(n) worst
 * - Delete : O(log n) average, O(n) worst
 * ==============================================================================
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into BST
  insert(val) {
    const newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val === current.val) return undefined; // Ignore duplicates
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // Search for a value in BST - O(log n)
  contains(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return true;
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // 1. In-Order DFS: Left -> Root -> Right (Yields strictly sorted order!)
  inOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    if (this.root) traverse(this.root);
    return data;
  }

  // 2. Pre-Order DFS: Root -> Left -> Right
  preOrder() {
    const data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    if (this.root) traverse(this.root);
    return data;
  }

  // 3. Post-Order DFS: Left -> Right -> Root
  postOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    if (this.root) traverse(this.root);
    return data;
  }

  // 4. Breadth-First Search (BFS / Level-Order Traversal using Queue)
  bfs() {
    const data = [];
    const queue = [];
    if (this.root) queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }
}

// ==============================================================================
// 🧪 DEMONSTRATION & TEST CASES
// ==============================================================================

const bst = new BinarySearchTree();
/**
 * Building Tree:
 *          10
 *        /    \
 *       5      15
 *      / \       \
 *     2   7       20
 */
[10, 5, 15, 2, 7, 20].forEach(val => bst.insert(val));

console.log("=== BST TRAVERSAL DEMONSTRATIONS ===");
console.log("In-Order (Sorted!):", bst.inOrder());   // [2, 5, 7, 10, 15, 20]
console.log("Pre-Order:", bst.preOrder());           // [10, 5, 2, 7, 15, 20]
console.log("Post-Order:", bst.postOrder());         // [2, 7, 5, 20, 15, 10]
console.log("BFS (Level-Order):", bst.bfs());        // [10, 5, 15, 2, 7, 20]

console.log("\n=== BST SEARCH CHECKS ===");
console.log("Tree contains 7?:", bst.contains(7));   // true
console.log("Tree contains 99?:", bst.contains(99)); // false

console.log("\n✅ Trees and BST mastered!");
