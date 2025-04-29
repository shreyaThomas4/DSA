// nums = [1, 0, 1, 1], k = 1
// Duplicate 1 at index 2 and 3
// |2 - 3| = 1 → ✅ within k
// Return true


var containsNearbyDuplicate = function(nums, k) {
    const map = new Map(); 

    for(i=0; i<nums.length; i++) {
        if(map.has(nums[i])) {
        const index = map.get(nums[i]);
        if(i-index <=k) {
        return true;
}
        }
        map.set(nums[i],i);
    }
    return false; 
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
