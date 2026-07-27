// ─────────────────────────────────────────────────────────────
// Heap Sort
// Time Complexity : O(n log n) – all cases (best, average, worst)
// Space Complexity: O(1) – in-place, not stable
//
// How it works:
//   1. Build a Max-Heap from the input array (largest element at root).
//   2. Repeatedly extract the maximum element (root), place it at the
//      end of the array, then restore the heap property (heapify) on
//      the remaining elements.
//
// Key concept – Max-Heap:
//   A complete binary tree where each parent node is >= its children.
//   Array representation: for index i,
//     Left child  = 2*i + 1
//     Right child = 2*i + 2
//     Parent      = Math.floor((i - 1) / 2)
// ─────────────────────────────────────────────────────────────

// Helper: ensures the subtree rooted at index `i` satisfies max-heap property
// `n` is the current heap size (elements after `n` are already sorted)
function heapify(arr, n, i) {
  let largest = i;          // Assume root is the largest
  const left  = 2 * i + 1; // Left child index
  const right = 2 * i + 2; // Right child index

  // Check if left child exists and is larger than current largest
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // Check if right child exists and is larger than current largest
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest is not the root, swap and continue heapifying down
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
    heapify(arr, n, largest); // Recursively heapify the affected subtree
  }
}

// Main heap sort function
function heapSort(arr) {
  const n = arr.length;

  // Step 1: Build a Max-Heap
  // Start from the last non-leaf node and heapify downwards
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Step 2: Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move the current root (maximum) to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Heapify the reduced heap (excluding the sorted portion at the end)
    heapify(arr, i, 0);
  }

  return arr;
}

// Example Usage:
const arr1 = [12, 11, 13, 5, 6, 7];
console.log("Original array :", arr1);
console.log("Sorted array   :", heapSort(arr1));
// Output: [5, 6, 7, 11, 12, 13]

const arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log("\nOriginal array :", arr2);
console.log("Sorted array   :", heapSort(arr2));
// Output: [11, 12, 22, 25, 34, 64, 90]
