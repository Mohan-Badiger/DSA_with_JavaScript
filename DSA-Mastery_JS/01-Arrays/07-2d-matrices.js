/**
 * ==============================================================================
 * 📦 TOPIC: 2D Arrays (Matrices) in JavaScript
 * ==============================================================================
 * 
 * 📖 WHAT IS A 2D ARRAY?
 * A 2D array is an array of arrays representing a grid or table of rows and columns.
 * Elements are accessed as: `matrix[row][col]`.
 * 
 * ⚠️ COMMON JS PITFALL:
 * Never initialize with: `new Array(rows).fill([])`
 * Why? Every row will point to the SAME array in memory! Modifying one modifies all!
 * Correct way: `Array.from({ length: rows }, () => new Array(cols).fill(0))`
 * ==============================================================================
 */

console.log("=== 1. CREATING & ACCESSING A 2D MATRIX ===");

// Correct way to initialize an R x C matrix filled with 0s
const rows = 3, cols = 3;
const grid = Array.from({ length: rows }, () => new Array(cols).fill(0));
grid[0][0] = 1;
grid[1][1] = 5;
grid[2][2] = 9;

console.log("3x3 Matrix:");
console.table(grid);


console.log("\n=== 2. ROW-WISE VS COLUMN-WISE TRAVERSAL ===");

const sampleMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Row-wise traversal (Left to right, top to bottom)
console.log("Row-wise traversal:");
for (let r = 0; r < sampleMatrix.length; r++) {
  let rowStr = "";
  for (let c = 0; c < sampleMatrix[r].length; c++) {
    rowStr += sampleMatrix[r][c] + " ";
  }
  console.log(`  Row ${r}: ${rowStr}`);
}

// Column-wise traversal (Top to bottom, left to right)
console.log("\nColumn-wise traversal:");
for (let c = 0; c < sampleMatrix[0].length; c++) {
  let colStr = "";
  for (let r = 0; r < sampleMatrix.length; r++) {
    colStr += sampleMatrix[r][c] + " ";
  }
  console.log(`  Col ${c}: ${colStr}`);
}


console.log("\n=== 3. MATRIX TRANSPOSE ===");
/**
 * Transpose of a matrix flips it over its diagonal:
 * matrix[r][c] becomes matrix[c][r].
 * Time: O(rows * cols) | Space: O(1) in-place for square matrix
 */
function transposeMatrix(matrix) {
  const n = matrix.length;
  // Clone matrix to keep original intact
  const result = matrix.map(row => [...row]);

  for (let r = 0; r < n; r++) {
    for (let c = r + 1; c < n; c++) {
      // Swap elements across diagonal
      [result[r][c], result[c][r]] = [result[c][r], result[r][c]];
    }
  }
  return result;
}

console.log("Original Matrix:", sampleMatrix);
console.log("Transposed Matrix:", transposeMatrix(sampleMatrix));


console.log("\n=== 4. SPIRAL MATRIX TRAVERSAL (CLASSIC INTERVIEW) ===");
/**
 * Problem: Given an m x n matrix, return all elements in spiral order.
 * Visual Path:
 *   [ 1 -> 2 -> 3 ]
 *               |
 *   [ 8 -> 9    4 ]
 *     ^         |
 *   [ 7 <- 6 <- 5 ]
 * 
 * Time: O(m * n) | Space: O(1) auxiliary (excluding return array)
 */
function spiralOrder(matrix) {
  if (!matrix || matrix.length === 0) return [];

  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // 1. Traverse Right across top boundary
    for (let c = left; c <= right; c++) {
      result.push(matrix[top][c]);
    }
    top++; // Move top boundary down

    // 2. Traverse Down across right boundary
    for (let r = top; r <= bottom; r++) {
      result.push(matrix[r][right]);
    }
    right--; // Move right boundary left

    // 3. Traverse Left across bottom boundary (check if still within bounds)
    if (top <= bottom) {
      for (let c = right; c >= left; c--) {
        result.push(matrix[bottom][c]);
      }
      bottom--; // Move bottom boundary up
    }

    // 4. Traverse Up across left boundary (check if still within bounds)
    if (left <= right) {
      for (let r = bottom; r >= top; r--) {
        result.push(matrix[r][left]);
      }
      left++; // Move left boundary right
    }
  }

  return result;
}

const spiralInput = [
  [ 1,  2,  3,  4],
  [ 5,  6,  7,  8],
  [ 9, 10, 11, 12]
];

console.log("Spiral Order Output:", spiralOrder(spiralInput));
// [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

console.log("\n✅ 2D Matrices mastered!");
