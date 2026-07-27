// ─────────────────────────────────────────────────────────────
// Merge Sort
// Time Complexity : O(n log n) – all cases (best, average, worst)
// Space Complexity: O(n)       – extra space for temporary arrays
//
// How it works (Divide & Conquer):
//   1. Divide  – Split the array into two halves recursively until
//                each sub-array has only one element (already sorted).
//   2. Conquer – Merge two sorted halves back together in sorted order.
// ─────────────────────────────────────────────────────────────

// Helper: merges two sorted arrays into one sorted array
function merge(left, right) {
  const result = [];
  let i = 0; // pointer for left array
  let j = 0; // pointer for right array

  // Compare elements from both halves and push the smaller one
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append any remaining elements (one side will be exhausted first)
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Main merge sort function
function mergeSort(arr) {
  // Base case: an array of 0 or 1 element is already sorted
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left  = mergeSort(arr.slice(0, mid)); // Sort left half
  const right = mergeSort(arr.slice(mid));    // Sort right half

  return merge(left, right); // Merge and return
}

// Example Usage:
const arr1 = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array :", arr1);
console.log("Sorted array   :", mergeSort(arr1));
// Output: [3, 9, 10, 27, 38, 43, 82]

const arr2 = [5, 2, 4, 6, 1, 3];
console.log("\nOriginal array :", arr2);
console.log("Sorted array   :", mergeSort(arr2));
// Output: [1, 2, 3, 4, 5, 6]
