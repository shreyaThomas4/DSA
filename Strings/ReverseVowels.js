// Input: s = "IceCreAm"
// Output: "AceCreIm"

var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const splitChar = s.split('');
    let left = 0; right = splitChar.length - 1;

    while(left < right) {
        while(left < right && !vowels.has(splitChar[left])) left++;
          while(left < right && !vowels.has(splitChar[right])) right--;
          [splitChar[left],splitChar[right]] = [splitChar[right], splitChar[left]];
          left++;
          right--;
    }

    return splitChar.join('');
};

console.log(reverseVowels("IceCreAm")); // Output: "AceCreIm"
console.log(reverseVowels("hello"));    // Output: "holle"
console.log(reverseVowels("aA"));       // Output: "Aa"
