function findDisappearedNumbers(nums) {
    const n = nums.length;
    const num = new Set(nums);
    const res = [];

    for (let i = 1; i <= n; i++) {
        if (!num.has(i)) {
            res.push(i);
        }
    }
    
    return res;
}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // Output: [5, 6]
console.log(findDisappearedNumbers([1,1])); 