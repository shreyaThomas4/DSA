// check if the given input is a palindrome

// Solution 1: using js functions

function isPalindromeNumber(num) {
    const str = num.toString();
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
    // Compare the original string with the reversed string
    return str === reversedStr;
  }
  // Example usage
  console.log(isPalindromeNumber(121));  // Output: true
  

// Solution 2: without any inbuilt function
function checkIfPalindrome(num) {
    // If the number is negative, it's not a palindrome
    if (num < 0) {
      return false;
    }
    let reversedNum = 0;
    let originalNum = num;
  
    // Reverse the number mathematically
    while (num > 0) {
      let lastDigit = num % 10; // Get the last digit
      reversedNum = reversedNum * 10 + lastDigit; // Build the reversed number
      num = Math.floor(num / 10); // Remove the last digit from num
    }
    // Compare the reversed number with the original number
    return originalNum === reversedNum;
  }
  // Example usage
  console.log(checkIfPalindrome(121));  // Output: true
  