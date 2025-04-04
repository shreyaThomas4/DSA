const intersect = function (nums1, nums2) {
  const map = new Map();
  const result = [];

  for (let num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let num of nums2) {
    if (map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return result;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersect(nums1, nums2)); // Output: [2, 2]

const nums1_2 = [4, 9, 5];
const nums2_2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1_2, nums2_2)); // Output: [4, 9] (or [9, 4])
