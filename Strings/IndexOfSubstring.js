 function strStr(haystack, needle) {
    // return haystack.indexOf(needle);
    if(needle == "") return 0;

    for (i = 0; i <= haystack.length - needle.length; i++) {
        let match = true;
        for (j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }
        if (match) return i;
    }

    return -1;
};

console.log(strStr("sadbutsad", "sad"));     
console.log(strStr("leetcode", "leeto"));   
console.log(strStr("abc", ""));  