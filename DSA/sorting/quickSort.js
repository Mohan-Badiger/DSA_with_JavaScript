// ─────────────────────────────────────────────────────────────
// Quick Sort
// Time Complexity : O(n log n) average | O(n²) worst case
//                  (worst case happens when pivot is always min/max)
// Space Complexity: O(log n) – call stack for recursion (in-place)
//
// How it works (Divide & Conquer):
//   1. Pick a pivot element (here: last element).
//   2. Partition – rearrange the array so all elements less than the
//      pivot come before it and all greater elements come after it.
//   3. Recursively apply the same steps to the left and right sub-arrays.
// ─────────────────────────────────────────────────────────────

// Helper: partitions the array around the pivot (last element)
// Returns the final index of the pivot
function partition(arr, low, high) {
  const pivot = arr[high]; // Choose the last element as pivot
  let i = low - 1;         // i tracks the boundary of the "smaller" region

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      // Swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Place pivot in its correct sorted position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1; // Return the pivot index
}

// Main quick sort function (sorts arr in-place between indices low..high)
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);

    // Recursively sort elements before and after the pivot
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

// Example Usage:
const arr1 = [10, 7, 8, 9, 1, 5];
console.log("Original array :", arr1);
console.log("Sorted array   :", quickSort(arr1));
// Output: [1, 5, 7, 8, 9, 10]

const arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log("\nOriginal array :", arr2);
console.log("Sorted array   :", quickSort(arr2));
// Output: [11, 12, 22, 25, 34, 64, 90]
