/**
 * ==============================================================================
 * 📦 TOPIC: SDE Fresher Must-Know Linked List Patterns
 * ==============================================================================
 * 
 * 🏢 Target Companies: Amazon, Microsoft, Apple, Google, Adobe, TCS Digital
 * 
 * 🎯 Patterns Covered:
 * 1. Fast & Slow Pointers (Middle of the Linked List)
 * 2. Dummy Head Node (Merge Two Sorted Lists)
 * 3. Gap Technique (Remove Nth Node From End of List)
 * 4. Two-Pointer Alignment (Intersection of Two Linked Lists)
 * ==============================================================================
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper: Convert array to linked list
function arrayToList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper: Convert linked list to array
function listToArray(head) {
  const result = [];
  let curr = head;
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }
  return result;
}


console.log("=== 1. MIDDLE OF THE LINKED LIST (FAST & SLOW POINTERS) ===");
/**
 * Problem (LeetCode #876):
 * Given the head of a singly linked list, return the middle node.
 * If there are two middle nodes, return the second middle node.
 * 
 * 💡 Fast & Slow Pointers:
 * - Slow moves 1 step; Fast moves 2 steps.
 * - When Fast hits null or the tail, Slow is exactly at the midpoint!
 * 
 * Time: O(n) | Space: O(1)
 */
function findMiddleNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

const list1 = arrayToList([1, 2, 3, 4, 5]);
console.log("Odd List [1, 2, 3, 4, 5] -> Middle Val:", findMiddleNode(list1).val); // 3

const list2 = arrayToList([1, 2, 3, 4, 5, 6]);
console.log("Even List [1, 2, 3, 4, 5, 6] -> Middle Val:", findMiddleNode(list2).val); // 4


console.log("\n=== 2. MERGE TWO SORTED LISTS ===");
/**
 * Problem (LeetCode #21):
 * Merge two sorted linked lists into one sorted linked list.
 * 
 * 💡 Dummy Head Technique:
 * Using a dummy head removes all edge-case checks for list initialization!
 * 
 * Time: O(n + m) | Space: O(1)
 */
function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(-1);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Attach remaining tail nodes
  current.next = l1 !== null ? l1 : l2;

  return dummy.next;
}

const sortedA = arrayToList([1, 2, 4]);
const sortedB = arrayToList([1, 3, 4]);
console.log("List A:", [1, 2, 4], "| List B:", [1, 3, 4]);
console.log("Merged Sorted List:", listToArray(mergeTwoLists(sortedA, sortedB)));


console.log("\n=== 3. REMOVE N-TH NODE FROM END OF LIST ===");
/**
 * Problem (LeetCode #19):
 * Given the head of a linked list, remove the nth node from the end
 * of the list and return its head in ONE pass.
 * 
 * 💡 Two Pointers with N-step Gap:
 * Advance fast pointer by n + 1 steps first.
 * Then move both fast and slow together until fast reaches null.
 * Slow will point right BEFORE the target node to delete!
 * 
 * Time: O(n) | Space: O(1)
 */
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let fast = dummy;
  let slow = dummy;

  // Move fast n + 1 steps ahead to maintain gap
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both until fast reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Delete target node
  slow.next = slow.next.next;

  return dummy.next;
}

const listToRemove = arrayToList([1, 2, 3, 4, 5]);
console.log("Original List:", [1, 2, 3, 4, 5], "Remove 2nd from end (4)");
console.log("List after removal:", listToArray(removeNthFromEnd(listToRemove, 2))); // [1, 2, 3, 5]


console.log("\n=== 4. INTERSECTION OF TWO LINKED LISTS ===");
/**
 * Problem (LeetCode #160):
 * Given heads of two singly linked lists headA and headB, return the node
 * where the two lists intersect. If not, return null.
 * 
 * 💡 Dual Pointer Cycling Trick:
 * Pointer A traverses list A then jumps to list B.
 * Pointer B traverses list B then jumps to list A.
 * If they intersect, they meet at the node after traversing (lenA + lenB) steps!
 * 
 * Time: O(n + m) | Space: O(1)
 */
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA; // Either intersection node or null
}

// Build intersecting list:
// A: 4 -> 1 -\
//             -> 8 -> 4 -> 5
// B: 5 -> 6 -/
const shared = arrayToList([8, 4, 5]);
const headA = new ListNode(4, new ListNode(1, shared));
const headB = new ListNode(5, new ListNode(6, shared));

const intersection = getIntersectionNode(headA, headB);
console.log("Intersection Found Node Value:", intersection ? intersection.val : null); // 8

console.log("\n✅ SDE Fresher Linked List Patterns Mastered!");
