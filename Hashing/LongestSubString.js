var lengthOfLongestSubstring = function(s) {
    let end = 0;
    let start = 0;
    let maxlength = 0;

    if(!s) {
        return 0;
    }

const uniqueChar = new Set();

while(end< s.length) {
    if(!uniqueChar.has(s[end])){
       uniqueChar.add(s[end]);
       end++;
       maxlength=Math.max(maxlength,uniqueChar.size) 
    } else {
        uniqueChar.delete(s[start]);
        start++;
    }
}
    return maxlength;

};

const ans = lengthOfLongestSubstring('abcabcbb');
console.log("ans", ans);
