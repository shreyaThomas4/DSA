// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

function isSubsequence(s, t) {
    let i=0;
    let j=0; 

    while(i< s.length && j < t.length) {
        if(s[i] === t[j]) {
            i++;
        } 
        j++;
    }
    return i === s.length;
 }

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
