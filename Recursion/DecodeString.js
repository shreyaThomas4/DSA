function decodeString(s) {
    let stack = [];
    let currentString = '';
    let currentNum = 0;

    for (i=0; i<s.length; i++) {
        const char = s[i];
        if(char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + (char - '0');
        } else if (char === '[') {
            stack.push([currentString, currentNum]);
            currentString = '';
            currentNum = 0;
        } else if (char === ']') {
            const [prevString, repeatCount] = stack.pop();
            currentString = prevString + currentString.repeat(repeatCount)
        } else {
            currentString += char;
        }
    }
    return currentString;
}

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("2[abc]3[cd]ef"));
console.log(decodeString("3[a2[c]]"));


