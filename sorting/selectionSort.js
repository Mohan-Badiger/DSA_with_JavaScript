function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the current element is the minimum
        let minIndex = i;

        // Find the index of the minimum element in the remaining unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // If the minimum element is not the current element, swap them
        if (minIndex !== i) {
            // A simple way to swap elements in JavaScript
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Example Usage:
const input = [64, 25, 12, 22, 11];
console.log("Original array:", input);
const sortedArray = selectionSort(input);
console.log("Sorted array:", sortedArray);

// Output:
// Original array: [ 64, 25, 12, 22, 11 ]
// Sorted array: [ 11, 12, 22, 25, 64 ]
