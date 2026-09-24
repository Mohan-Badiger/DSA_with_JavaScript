/**
 * ==============================================================================
 * 📦 TOPIC: JavaScript Built-in Array Methods Deep Dive
 * ==============================================================================
 * 📖 MUTATING VS NON-MUTATING:
 * - Mutating: Modifies the original array in place (e.g. push, pop, shift, splice, sort).
 * - Non-mutating: Returns a NEW array without touching the original (e.g. slice, concat, map, filter).
 * 
 * In modern frontend & DSA, non-mutating is preferred for state immutability,
 * but in-place mutation is preferred for space efficiency (O(1) extra space).
 * ==============================================================================
 */

console.log("=== 1. MUTATING METHODS ===");

const list = [10, 20, 30, 40];

// push & pop -> O(1)
list.push(50);
console.log("After push(50):", list);
const popped = list.pop();
console.log(`Popped element: ${popped}, Array:`, list);

// unshift & shift -> O(n)
list.unshift(5);
console.log("After unshift(5):", list);
const shifted = list.shift();
console.log(`Shifted element: ${shifted}, Array:`, list);

// splice(startIndex, deleteCount, ...itemsToAdd) -> O(n)
// 1. Delete 1 element at index 1:
const removed = list.splice(1, 1);
console.log("Splice remove at index 1:", list, "Removed:", removed);

// 2. Insert without deleting:
list.splice(1, 0, 25, 28);
console.log("Splice insert 25, 28 at index 1:", list);

// 3. Replace element at index 2:
list.splice(2, 1, 99);
console.log("Splice replace index 2 with 99:", list);


console.log("\n=== 2. THE SORT() GOTCHA IN JAVASCRIPT ===");
/**
 * ⚠️ WARNING: By default, arr.sort() converts elements to STRINGS!
 * Therefore, [10, 5, 100, 2].sort() -> [10, 100, 2, 5] because "100" comes before "2"!
 */
const badSort = [10, 5, 100, 2].sort();
console.log("Default sort() bug:", badSort);

// Correct Numeric Sort using Comparator Function:
// (a, b) => a - b (Ascending: if negative, a comes first)
// (a, b) => b - a (Descending: if positive, b comes first)
const goodSortAsc = [10, 5, 100, 2].sort((a, b) => a - b);
console.log("Correct Ascending sort:", goodSortAsc);

const goodSortDesc = [10, 5, 100, 2].sort((a, b) => b - a);
console.log("Correct Descending sort:", goodSortDesc);


console.log("\n=== 3. NON-MUTATING METHODS ===");

const original = [1, 2, 3, 4, 5];

// slice(start, endExclusive) -> O(k) shallow copy
const chunk = original.slice(1, 4);
console.log("slice(1, 4):", chunk);       // [2, 3, 4]
console.log("Original untouched:", original);

// concat -> merges arrays into a new array
const merged = original.concat([6, 7], [8]);
console.log("concat:", merged);


console.log("\n=== 4. FUNCTIONAL ITERATION METHODS (HIGHER-ORDER) ===");

const numbers = [1, 2, 3, 4, 5, 6];

// map(fn) -> Transforms every element into a new array (O(n))
const squared = numbers.map(x => x * x);
console.log("map (squared):", squared);

// filter(fn) -> Selects elements matching a condition (O(n))
const evens = numbers.filter(x => x % 2 === 0);
console.log("filter (evens):", evens);

// reduce(accumulator, currentValue) -> Aggregates array into a single value (O(n))
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce (sum):", sum);

// find & findIndex -> O(n) linear search with custom predicate
const firstOverThree = numbers.find(x => x > 3);
const indexOverThree = numbers.findIndex(x => x > 3);
console.log("find > 3:", firstOverThree, "at index:", indexOverThree);

// some & every -> O(n) boolean checks
const hasNegative = numbers.some(x => x < 0); // false
const allPositive = numbers.every(x => x > 0); // true
console.log("some negative?", hasNegative, "| all positive?", allPositive);

// flat(depth) -> Flattens nested arrays
const nested = [1, [2, [3, [4]]]];
console.log("flat(1):", nested.flat(1));
console.log("flat(Infinity):", nested.flat(Infinity));

console.log("\n✅ Built-in methods mastered!");
