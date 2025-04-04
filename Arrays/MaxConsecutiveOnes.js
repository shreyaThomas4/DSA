function findMaxConsecutiveOnes(nums) {
    let maxCount = 0;   // To store the maximum number of consecutive 1's
    let currentCount = 0; // To store the current number of consecutive 1's
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        currentCount++;  // Increment the count of consecutive 1's
      } else {
        // Update the max count if the current streak is larger
        maxCount = Math.max(maxCount, currentCount);
        currentCount = 0; // Reset the current streak when we encounter 0
      }
    }
  
    // After the loop, we need to check the last streak of consecutive 1's
    maxCount = Math.max(maxCount, currentCount);
  
    return maxCount;
  }
  
  // Example usage:
  console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
  console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Output: 2
  