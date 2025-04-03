// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]


function moveZeros(nums) {
    let lastNonZeroAt = 0;

    for(i=0; i<nums.length; i++) {
        if(nums[i]!==0) {
            [nums[lastNonZeroAt], nums[i]] = [nums[i], nums[lastNonZeroAt]];
            lastNonZeroAt++;
        }
    }

    return nums;
}

console.log(moveZeros([0,1,0,3,12]));
