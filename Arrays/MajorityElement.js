// Input: nums = [3,2,3]
// Output: 3
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

const majorityElement = function(nums) {
    const freqMap ={};
    const threshold = Math.floor(nums.length/2);

    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0 ) + 1;
    }

    for( let num in freqMap) {
        if (freqMap[num] > threshold){
            return Number(num);
        }
    }
}

const nums = [3, 2, 3];
console.log(majorityElement(nums)); 
