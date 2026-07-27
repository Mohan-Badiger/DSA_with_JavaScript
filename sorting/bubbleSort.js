const bubbleSort = (arr) => {
  let swapped; // Declare a variable to track if any swaps occurred
  const n = arr.length;

  // Use a do-while loop to ensure the code runs at least once
  do {
    swapped = false; // Reset the flag at the start of each pass

    // Inner loop to traverse the array and compare adjacent elements
    // The comparison limit (n - i - 1 in a traditional for loop) 
    // can be simplified here as the do-while loop handles early exit
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements using ES6 destructuring
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; 
        swapped = true; // Set swapped to true as a swap was made
      }
    }
  } while (swapped); // Continue looping as long as swaps are occurring

  return arr;
};

// Example Usage:
const myArray = [12, 10, 3, 7, 4];
console.log(bubbleSort(myArray)); // Output: [3, 4, 7, 10, 12]
