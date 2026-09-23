/**
 * ==============================================================================
 * 📦 TOPIC: Singly Linked List Implementation & Algorithms
 * ==============================================================================
 * 
 * 📖 OPERATIONS & COMPLEXITIES:
 * - Prepend (insert at head) : O(1)
 * - Append (insert at tail)  : O(1) with tail pointer, O(n) without
 * - Delete Head              : O(1)
 * - Search / Get by index    : O(n)
 * - Reverse List             : O(n) time, O(1) space
 * - Detect Cycle (Floyd's)   : O(n) time, O(1) space
 * ==============================================================================
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 1. Insert at Head (O(1))
  prepend(val) {
    const newNode = new ListNode(val, this.head);
    this.head = newNode;
    this.size++;
  }

  // 2. Insert at Tail (O(n))
  append(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // 3. Remove Head (O(1))
  removeHead() {
    if (!this.head) return null;
    const removedVal = this.head.val;
    this.head = this.head.next;
    this.size--;
    return removedVal;
  }

  // 4. Reverse the Linked List In-Place (O(n) time, O(1) space)
  reverse() {
    let prev = null;
    let current = this.head;

    while (current !== null) {
      const nextNode = current.next; // Save next pointer
      current.next = prev;           // Reverse link
      prev = current;                // Move prev forward
      current = nextNode;            // Move current forward
    }

    this.head = prev; // New head is the last node
    return this;
  }

  // 5. Detect Cycle using Floyd's Tortoise and Hare Algorithm (O(n) time, O(1) space)
  hasCycle() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;       // 1 step
      fast = fast.next.next;  // 2 steps

      if (slow === fast) {
        return true; // Pointers met -> Cycle exists!
      }
    }
    return false; // Reached end of list -> No cycle
  }

  // Convert to array for easy visualization
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
}

// ==============================================================================
// 🧪 DEMONSTRATION & TEST CASES
// ==============================================================================

const list = new LinkedList();

console.log("=== 1. PREPEND & APPEND ===");
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
console.log("Linked List values:", list.toArray()); // [5, 10, 20, 30]

console.log("\n=== 2. REMOVE HEAD ===");
console.log("Removed Head:", list.removeHead());     // 5
console.log("List after removal:", list.toArray());   // [10, 20, 30]

console.log("\n=== 3. REVERSE LIST IN-PLACE ===");
list.reverse();
console.log("Reversed List:", list.toArray());        // [30, 20, 10]

console.log("\n=== 4. CYCLE DETECTION ===");
console.log("Current list has cycle?:", list.hasCycle()); // false

// Create a cycle for testing: 10 -> 20 -> 30 -> points back to 20
list.head.next.next.next = list.head.next;
console.log("After creating cycle, hasCycle?:", list.hasCycle()); // true

console.log("\n✅ Linked List mastered!");
