// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

var canConstruct = function(ransomNote, magazine) {
    const map = {};

    for(let char of magazine ) {
        map[char] = (map[char] || 0) + 1;
    }

    for(let char of ransomNote) {
        if(!map[char]) {
            return false;
        }
         map[char]--;
    }
    return true; 
};

console.log(canConstruct("a", "b"));       // false
console.log(canConstruct("aa", "ab"));     // false
console.log(canConstruct("aa", "aab"));    // true
