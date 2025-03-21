function MissingNumber(nums) {
const n = nums.length;
const expectedSum = (n * (n + 1)) / 2;
let actualSum = 0;

for (let i = 0; i < nums.length; i++) {
  actualSum = actualSum + nums[i]
}

return expectedSum-actualSum
}

console.log(MissingNumber([9,6,4,2,3,5,7,0,1])); // Output 8
console.log(MissingNumber([0,1])); // Output 2
console.log(MissingNumber([3,0,1])); // Output 2


// Sol 2: using reduce method

const missingNumber = function(nums) {
    const n = nums.length;
  
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
  
    return expectedSum - actualSum;
  }
