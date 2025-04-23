var isPalindrome = function(s) {
    // regex method
    let cleaned = "";
    for (let char of s) {
        if (/[a-zA-Z0-9]/.test(char)) {
            cleaned += char.toLowerCase();
        }
    }
    let left = 0;
    let right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

// Alternate Solution
// var isPalindrome = function(s) {
//     s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
//     return s === s.split('').reverse().join('');
// };

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));

