/**
 * ==============================================================================
 * 📦 TOPIC: SDE Fresher Must-Know Array Patterns: Dutch Flag & Intervals
 * ==============================================================================
 * 
 * 🏢 Target Companies: Amazon, Microsoft, Google, Flipkart, Adobe, Goldman Sachs
 * 
 * 🎯 Patterns Covered:
 * 1. 3-Way Partitioning (Dutch National Flag Algorithm)
 * 2. Overlapping Interval Merge (Greedy Sorting)
 * 3. Converging Two-Pointers (Container With Most Water)
 * 4. Trapping Rain Water (Two Pointers O(1) Space)
 * ==============================================================================
 */

console.log("=== 1. SORT COLORS / DUTCH NATIONAL FLAG ALGORITHM ===");
/**
 * Problem (LeetCode #75):
 * Given array nums with n objects colored red (0), white (1), or blue (2),
 * sort them in-place so that objects of the same color are adjacent,
 * in order 0, 1, and 2.
 * Must be solved in ONE pass with O(1) extra space.
 * 
 * 💡 Three-Pointer Technique:
 * - low: Boundary for 0s (everything before low is 0)
 * - mid: Current element under inspection
 * - high: Boundary for 2s (everything after high is 2)
 * 
 * Time: O(n) | Space: O(1)
 */
function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++; // 1 is already in middle, just move ahead
    } else {
      // nums[mid] === 2
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--; // Decrement high; do not advance mid since swapped item is uninspected!
    }
  }
  return nums;
}

const colors = [2, 0, 2, 1, 1, 0];
console.log("Original Colors:", [2, 0, 2, 1, 1, 0]);
console.log("Sorted Colors (Dutch Flag):", sortColors(colors));


console.log("\n=== 2. MERGE OVERLAPPING INTERVALS ===");
/**
 * Problem (LeetCode #56):
 * Given an array of intervals where intervals[i] = [start, end],
 * merge all overlapping intervals and return non-overlapping intervals.
 * 
 * 💡 Greedy Approach:
 * 1. Sort intervals by start time.
 * 2. Iterate and compare current start with previous end.
 *    If current.start <= prev.end -> Merge: prev.end = max(prev.end, current.end)
 *    Else -> No overlap, push to result.
 * 
 * Time: O(n log n) due to sorting | Space: O(n) for result
 */
function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;

  // 1. Sort intervals by start time ascending
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    if (current[0] <= lastMerged[1]) {
      // Overlap detected: expand end boundary
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap: add as new disjoint interval
      merged.push(current);
    }
  }

  return merged;
}

const sampleIntervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log("Input Intervals:", JSON.stringify([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log("Merged Intervals:", JSON.stringify(mergeIntervals(sampleIntervals)));


console.log("\n=== 3. CONTAINER WITH MOST WATER ===");
/**
 * Problem (LeetCode #11):
 * Given n non-negative integers representing vertical lines, find two lines
 * that together with the x-axis forms a container that contains the most water.
 * 
 * 💡 Two Pointers Greedy:
 * - Start left at 0, right at length - 1.
 * - Area = (right - left) * min(height[left], height[right])
 * - Always move the pointer with the SMALLER height inward! (moving the taller one cannot help).
 * 
 * Time: O(n) | Space: O(1)
 */
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    const currentArea = width * h;

    maxWater = Math.max(maxWater, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log("Heights:", heights);
console.log("Maximum Water Area:", maxArea(heights)); // 49


console.log("\n=== 4. TRAPPING RAIN WATER (TWO POINTERS) ===");
/**
 * Problem (LeetCode #42):
 * Given n non-negative integers representing an elevation map where width of each bar is 1,
 * compute how much water it can trap after raining.
 * 
 * 💡 Two Pointers with LeftMax & RightMax:
 * Water trapped at index i is determined by min(leftMax, rightMax) - height[i].
 * We process the smaller of height[left] and height[right].
 * 
 * Time: O(n) | Space: O(1)
 */
function trapRainWater(height) {
  if (!height || height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let totalWater = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        totalWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        totalWater += rightMax - height[right];
      }
      right--;
    }
  }

  return totalWater;
}

const elevation = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log("Elevation Map:", elevation);
console.log("Trapped Water:", trapRainWater(elevation)); // 6

console.log("\n✅ SDE Fresher Array Patterns Mastered!");
