// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const  twoSum = function(nums, target) {
    
    const map = new Map();  

    for (let i = 0; i < nums.length; i++) {
        const num = target - nums[i];  

        if (map.has(num)) {  
            return [map.get(num), i]; 
        }

        map.set(nums[i], i);  
    }

    return [];
};

const ans = twoSum([2,3,4,5,6], 8);
console.log("ans", ans);
