// Find Minimum Operations to Make All Elements Divisible by Three
// Input: nums = [1,2,3,4]
// Output: 3
// Explanation:
// All array elements can be made divisible by 3 using 3 operations:
// Subtract 1 from 1.
// Add 1 to 2.
// Subtract 1 from 4.

var minimumOperations = function(nums) {
    let operations = 0;
    for(i=0; i<nums.length; i++) {
    if(nums[i] % 3 !== 0){
            operations++;
    }
    }
    return operations;
};

console.log(minimumOperations([1,2,3,4]));
