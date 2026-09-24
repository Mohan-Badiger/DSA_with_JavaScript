/**
 * ==============================================================================
 * 📦 TOPIC: Core Array Operations (From Scratch)
 * ==============================================================================
 * 📖 WHY BUILD FROM SCRATCH?
 * While JavaScript gives us `.push()`, `.unshift()`, `.pop()`, `.shift()`, and `.splice()`,
 * understanding the inner pointer-shifting mechanics is CRITICAL for coding interviews!
 * 
 * ⏱️ COMPLEXITIES:
 * - Insert at End       : O(1)
 * - Insert at Beginning : O(n) (Requires shifting all n items to the right)
 * - Insert at Index k   : O(n) (Requires shifting n - k items to the right)
 * - Delete from End     : O(1)
 * - Delete at Beginning : O(n) (Requires shifting all n items to the left)
 * - Delete at Index k   : O(n) (Requires shifting n - k items to the left)
 * - Search by Value     : O(n) (Linear search through array)
 * ==============================================================================
 */

// Custom Array Class to simulate low-level array behavior
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // 1. Access by Index - O(1)
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    return this.data[index];
  }

  // 2. Insert at End (push) - O(1)
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // 3. Delete from End (pop) - O(1)
  pop() {
    if (this.length === 0) return undefined;
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // 4. Insert at Beginning (unshift) - O(n)
  // Needs to shift every element one step to the right!
  insertAtBeginning(item) {
    // Shift elements right starting from the end
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.length;
  }

  // 5. Delete from Beginning (shift) - O(n)
  // Needs to shift every element one step to the left!
  deleteFromBeginning() {
    if (this.length === 0) return undefined;
    const firstItem = this.data[0];

    // Shift elements left
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  // 6. Insert at specific Index - O(n)
  insertAt(index, item) {
    if (index < 0 || index > this.length) {
      throw new RangeError("Index out of bounds");
    }
    // Shift elements right from the back up to index
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.length;
  }

  // 7. Delete at specific Index - O(n)
  deleteAt(index) {
    if (index < 0 || index >= this.length) return undefined;
    const itemToDelete = this.data[index];

    // Shift elements left from index up to the end
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return itemToDelete;
  }

  // 8. Linear Search for an item - O(n)
  indexOf(target) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === target) {
        return i; // Found at index i
      }
    }
    return -1; // Not found
  }

  // Helper method to inspect array as a regular JS array
  toArray() {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(this.data[i]);
    }
    return result;
  }
}

// ==============================================================================
// 🧪 DEMONSTRATION & TEST CASES
// ==============================================================================

const arr = new MyArray();

console.log("=== 1. INSERT AT END (PUSH) ===");
arr.push("A");
arr.push("B");
arr.push("C");
console.log("Current Array:", arr.toArray()); // ['A', 'B', 'C']

console.log("\n=== 2. INSERT AT BEGINNING (UNSHIFT) ===");
arr.insertAtBeginning("Z");
console.log("After inserting 'Z' at start:", arr.toArray()); // ['Z', 'A', 'B', 'C']

console.log("\n=== 3. INSERT AT MIDDLE INDEX ===");
arr.insertAt(2, "NEW");
console.log("After inserting 'NEW' at index 2:", arr.toArray()); // ['Z', 'A', 'NEW', 'B', 'C']

console.log("\n=== 4. SEARCHING ===");
console.log("Index of 'NEW':", arr.indexOf("NEW")); // 2
console.log("Index of 'NOT_FOUND':", arr.indexOf("X")); // -1

console.log("\n=== 5. DELETE AT INDEX ===");
console.log("Deleted item at index 2:", arr.deleteAt(2)); // 'NEW'
console.log("After delete:", arr.toArray()); // ['Z', 'A', 'B', 'C']

console.log("\n=== 6. DELETE FROM START & END ===");
console.log("Deleted from start:", arr.deleteFromBeginning()); // 'Z'
console.log("Deleted from end:", arr.pop()); // 'C'
console.log("Final Array:", arr.toArray()); // ['A', 'B']

console.log("\n✅ Core operations executed perfectly!");
