// check if string is a Palindrome using recursion


function isPalindrome(str, start = 0, end = str.length - 1) {
    if (start >= end) {
      return true;
    }
  
    if (str[start] !== str[end]) {
      return false;  
    }
  
    return isPalindrome(str, start + 1, end - 1);
  }
  
  console.log(isPalindrome("HannaH"));  // true
  console.log(isPalindrome("level"));    // true
  console.log(isPalindrome("Hannah"));    // false
  