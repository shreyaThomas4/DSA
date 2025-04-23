// Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longestPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];
  for (i = 0; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
}

console.log(longestPrefix(["flower","flow","flight"]));  // Output: fl
console.log(longestPrefix(["dog","racecar","car"]));  // Output: ""

