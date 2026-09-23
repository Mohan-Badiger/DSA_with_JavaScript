/**
 * ==============================================================================
 * 📦 TOPIC: Implementations of Essential Sorting Algorithms
 * ==============================================================================
 */

console.log("=== 1. BUBBLE SORT (O(n^2)) ===");
function bubbleSort(arr) {
  const a = [...arr];
  let swapped;
  for (let i = 0; i < a.length; i++) {
    swapped = false;
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    // Optimization: If no elements swapped, array is already sorted!
    if (!swapped) break;
  }
  return a;
}
console.log("Bubble Sort [64, 34, 25, 12, 22] ->", bubbleSort([64, 34, 25, 12, 22]));


console.log("\n=== 2. INSERTION SORT (O(n^2)) ===");
/**
 * Like sorting playing cards in your hand.
 * Inserts each element into its proper position in already-sorted portion.
 */
function insertionSort(arr) {
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    const current = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > current) {
      a[j + 1] = a[j]; // Shift element right
      j--;
    }
    a[j + 1] = current;
  }
  return a;
}
console.log("Insertion Sort [12, 11, 13, 5, 6] ->", insertionSort([12, 11, 13, 5, 6]));


console.log("\n=== 3. MERGE SORT (O(n log n) - DIVIDE & CONQUER) ===");
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log("Merge Sort [38, 27, 43, 3, 9, 82, 10] ->", mergeSort([38, 27, 43, 3, 9, 82, 10]));


console.log("\n=== 4. QUICK SORT (O(n log n) AVERAGE) ===");
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1]; // Pick last element as pivot
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log("Quick Sort [10, 80, 30, 90, 40, 50, 70] ->", quickSort([10, 80, 30, 90, 40, 50, 70]));

console.log("\n✅ Sorting algorithms mastered!");
