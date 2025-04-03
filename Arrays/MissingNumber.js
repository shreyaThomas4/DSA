// Input: nums = [3,0,1]
// Output: 2


function missingNumbers(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i];
  }

  return expectedSum - actualSum;
}

console.log(missingNumbers([3,0,1]));
console.log(missingNumbers([0,1]));
console.log(missingNumbers([9,6,4,2,3,5,7,0,1]));
