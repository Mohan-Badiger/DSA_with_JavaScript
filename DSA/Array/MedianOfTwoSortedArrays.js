// Median of Two Sorted Arrays

// const median = (nums1, nums2) => {

//     let newArray = [...nums1, ...nums2]

//     let size = newArray.length

//     return (size + 1) / 2;
// }

// console.log(median([1, 2, 3], [2, 3]));

// Hard Code

var findMedianSortedArrays = function (nums1, nums2) {

    // Always perform binary search on the smaller array
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;

    let low = 0;
    let high = m;

    while (low <= high) {
        // Partition positions
        const partition1 = Math.floor((low + high) / 2);
        const partition2 = Math.floor((m + n + 1) / 2) - partition1;

        // Left and right values around partitions
        const maxLeft1 =
            partition1 === 0 ? -Infinity : nums1[partition1 - 1];

        const minRight1 =
            partition1 === m ? Infinity : nums1[partition1];

        const maxLeft2 =
            partition2 === 0 ? -Infinity : nums2[partition2 - 1];

        const minRight2 =
            partition2 === n ? Infinity : nums2[partition2];

        // Correct partition found
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {

            // Odd total number of elements
            if ((m + n) % 2 === 1) {
                return Math.max(maxLeft1, maxLeft2);
            }

            // Even total number of elements
            return (
                Math.max(maxLeft1, maxLeft2) +
                Math.min(minRight1, minRight2)
            ) / 2;
        }

        // Move binary search
        if (maxLeft1 > minRight2) {
            high = partition1 - 1;
        } else {
            low = partition1 + 1;
        }
    }
};