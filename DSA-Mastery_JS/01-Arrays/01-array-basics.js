/**
 * ==============================================================================
 * 📦 TOPIC: Array Basics, Memory & Traversal in JavaScript
 * ==============================================================================
 * 
 * 📖 EASY DEFINITION:
 * An Array is an ordered list of values. Each value is called an "element",
 * and each element has a numerical position known as its "index" (0-indexed).
 * 
 * ⏱️ COMPLEXITY:
 * - Access by Index : O(1) [Constant Time]
 * - Search by Value : O(n) [Linear Time]
 * - Traversal       : O(n) [Must visit all n elements]
 * - Space           : O(n) [Stores n elements in memory]
 * ==============================================================================
 */

console.log("=== 1. ARRAY CREATION METHODS ===");

// 1. Array Literal (Most common & recommended)
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Array Literal:", fruits);

// 2. Array Constructor
const numbers = new Array(5); // Creates an array with 5 empty slots (holey!)
console.log("Empty Constructor array:", numbers, "Length:", numbers.length);

const predefined = new Array(1, 2, 3, 4); // Creates [1, 2, 3, 4]
console.log("Populated Constructor array:", predefined);

// 3. Array.of() (Avoids the single-argument pitfall of new Array)
const singleElement = Array.of(7); // Creates [7], NOT 7 empty slots!
console.log("Array.of(7):", singleElement);

// 4. Array.from() (Creates array from iterable or array-like object)
const chars = Array.from("HELLO");
console.log("Array.from('HELLO'):", chars);

// Creating a sequence: [0, 1, 2, 3, 4]
const sequence = Array.from({ length: 5 }, (_, index) => index * 2);
console.log("Generated Sequence (x * 2):", sequence);


console.log("\n=== 2. ACCESSING & MODIFYING ELEMENTS ===");

const colors = ["Red", "Green", "Blue", "Yellow"];

// Accessing (O(1))
console.log("First element (index 0):", colors[0]);
console.log("Last element using .at(-1):", colors.at(-1)); // ES2022 feature!

// Modifying (O(1))
colors[1] = "Emerald Green";
console.log("Modified colors:", colors);


console.log("\n=== 3. JAVASCRIPT LENGTH QUIRKS ===");

const pets = ["Dog", "Cat", "Parrot", "Rabbit"];
console.log("Original pets:", pets, "Length:", pets.length);

// 1. Truncating an array by reducing length
pets.length = 2; 
console.log("After setting length = 2:", pets); // ["Dog", "Cat"]

// 2. Clearing an entire array instantly (O(1))
pets.length = 0;
console.log("After setting length = 0:", pets); // []


console.log("\n=== 4. ARRAY TRAVERSAL TECHNIQUES ===");

const scores = [85, 92, 78, 90, 88];

// Technique A: Traditional For-Loop (Fastest, full index control)
console.log("A) Traditional For-Loop:");
for (let i = 0; i < scores.length; i++) {
  console.log(`   Index ${i} -> Score: ${scores[i]}`);
}

// Technique B: For...Of Loop (Modern, clean, no index needed)
console.log("B) For...Of Loop:");
for (const score of scores) {
  console.log(`   Value: ${score}`);
}

// Technique C: forEach Method (Functional, supports element, index, array)
console.log("C) forEach Method:");
scores.forEach((score, index) => {
  console.log(`   Element at ${index} is ${score}`);
});

// Technique D: Reverse Traversal (Essential for certain algorithms!)
console.log("D) Reverse Traversal:");
for (let i = scores.length - 1; i >= 0; i--) {
  console.log(`   Index ${i} -> Score: ${scores[i]}`);
}


console.log("\n=== 5. PACKED VS HOLEY ARRAYS (V8 ENGINE INSIGHT) ===");
/**
 * In JavaScript V8 engine:
 * - PACKED: All indices are filled. Highly optimized in memory!
 * - HOLEY: Array has gaps/empty slots. De-optimizes performance.
 */
const packed = [1, 2, 3, 4]; // PACKED_SMI_ELEMENTS (Fastest)
const holey = [1, , 3, 4];    // HOLEY_SMI_ELEMENTS (Hole at index 1, slower!)

console.log("Packed array:", packed);
console.log("Holey array has empty slots:", holey);
console.log("Accessing empty slot returns:", holey[1]); // undefined

console.log("\n✅ Array Basics completed successfully!");
