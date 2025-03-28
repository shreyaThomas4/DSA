// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

const removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];  // Move valid elements to the front
            k++;  // Increment the position for the next valid element
        }
    }
    return k;  // Return the count of valid elements
};

let nums = [3, 2, 2, 3];
let result = removeElement(nums, 3);  // result will be 2
console.log(result);  // Output: 2

// Now print the modified nums array up to the result (k=2)
console.log(nums.slice(0, result));  // Output: [2, 2]
