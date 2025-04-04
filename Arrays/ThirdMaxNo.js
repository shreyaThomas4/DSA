function thirdMax(nums) {
    const uniqueNums = [...new Set(nums)];
  
    if (uniqueNums.length < 3) {
      return Math.max(...uniqueNums);
    }
  
    uniqueNums.sort((a, b) => b - a);
  
    return uniqueNums[2];
  }
  
  console.log(thirdMax([3, 2, 1]));  // Output: 1
  console.log(thirdMax([1, 2]));     // Output: 2
  console.log(thirdMax([2, 2, 3, 1])); // Output: 1
  