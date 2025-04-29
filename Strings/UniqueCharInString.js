// Example 1:
// Input: s = "leetcode"
// Output: 0
// Explanation:
// The character 'l' at index 0 is the first character that does not occur at any other index.

var firstUniqChar = function(s) {
    let count = {};

    for(let char of s) {
        count[char] = (count[char] || 0 ) + 1;
    }

    for(i =0; i< s.length; i++) {
        if(count[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));   // Output: 0
console.log(firstUniqChar("loveleetcode"));// Output: 2
console.log(firstUniqChar("aabb"));        // Output: -1
