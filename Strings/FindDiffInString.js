// Example 1:
// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.


var findTheDifference = function(s, t) {
    let count = {};

   for(let char of s) {
       count[char] = (count[char] || 0 ) + 1;
   }
   for (let char of t) {
       if(!count[char]) {
        return char;
       } else {
        count[char]--;
       }
   }
};

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "y"));

