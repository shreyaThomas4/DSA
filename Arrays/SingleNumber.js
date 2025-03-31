const singleNumber = function(nums) {
    let countMap = {}; 

for (let num of nums) {
    countMap[num] = (countMap[num] || 0) + 1;
}

for (let num in countMap) {
    if (countMap[num] === 1) {
        return Number(num);  
    }
}
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([1,3,3,3,4,2,2,1]));
console.log(singleNumber([1]));

