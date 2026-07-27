// ─────────────────────────────────────────────────────────────
// Insertion Sort
// Time Complexity : O(n²) average & worst | O(n) best (already sorted)
// Space Complexity: O(1) – in-place, stable sort
//
// How it works:
//   Builds a sorted portion at the left side of the array one element
//   at a time. For each element, it shifts all larger sorted elements
//   one position to the right to make room, then inserts the element
//   in its correct position.
// ─────────────────────────────────────────────────────────────

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const key = arr[i]; // The element to be positioned
    let j = i - 1;

    // Shift elements of the sorted portion that are greater than `key`
    // one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place `key` after the last element that is smaller than it
    arr[j + 1] = key;
  }

  return arr;
}

// Example Usage:
const arr1 = [12, 11, 13, 5, 6];
console.log("Original array :", arr1);
console.log("Sorted array   :", insertionSort(arr1));
// Output: [5, 6, 11, 12, 13]

const arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log("\nOriginal array :", arr2);
console.log("Sorted array   :", insertionSort(arr2));
// Output: [11, 12, 22, 25, 34, 64, 90]
