// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

var isValid = function(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(char of s) {
        if(char in map) {
             let topElement = stack.length ? stack.pop() : '#';
              if (topElement !== map[char]) {
                return false;
            } 
        } else {
            stack.push(char);
        }
    
    }
         return stack.length === 0;
};

console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
console.log(isValid("([)]"));    // false
console.log(isValid("{[]}"));    // true