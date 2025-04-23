var lengthOfLastWord = function(s) {
    let words = s.trim().split(" ");
    console.log("words",words.length - 1);
    
  return words[words.length - 1].length;
};


console.log(lengthOfLastWord("   fly me   to   the moon"));  // Output: 4
