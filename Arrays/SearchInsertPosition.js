// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Solution 1
var searchInsert = function(nums, target) {
    const index = nums.findIndex(num => num >= target);
    return index === -1 ? nums.length : index;
};

// Solution 2 using binary search 

function searchInsert2(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;  // Target found, return the index
        } else if (nums[mid] < target) {
            left = mid + 1;  // Target is to the right
        } else {
            right = mid - 1;  // Target is to the left
        }
    }
    // If target is not found, `left` is the index where the target should be inserted
    return left;
}

console.log(searchInsert2([1,3,5,6], 7));


