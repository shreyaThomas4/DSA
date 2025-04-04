function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = []; 

    for(let num of nums2){
        if(set1.has(num)) {
            result.push(num);
            set1.delete(num);
        }
    }
    return result;
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2)); 