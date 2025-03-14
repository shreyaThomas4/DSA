const lengthOfLongestSubstring = function (s) {
  let end = 0;
  let start = 0;
  let maxlength = 0;
  let longestSubstring = ""; 

  if (!s) {
    return "";
  }

  const uniqueChar = new Set();

  while (end < s.length) {
    if (!uniqueChar.has(s[end])) {
      uniqueChar.add(s[end]);
      end++;
      
      // Update the longest substring if the current one is longer
      if (uniqueChar.size > maxlength) {
        maxlength = uniqueChar.size;
        longestSubstring = s.slice(start, end);  // Store the substring from start to end
      }
    } else {
      uniqueChar.delete(s[start]);
      start++;
    }
  }
  return {longestSubstring: longestSubstring, length: longestSubstring.length};
};

const ans = lengthOfLongestSubstring("abcabcbb");
console.log("Longest substring:", ans);
