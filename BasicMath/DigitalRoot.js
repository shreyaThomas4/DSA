// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

const addDigits = function(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10; 
            num = Math.floor(num / 10); 
        }
        num = sum; 
    }
    return num; 
};

console.log(addDigits(0));
console.log(addDigits(25));
console.log(addDigits(2510));

// solution 2:
function addDigit(num) {
    if (num === 0) {
        return 0; 
    }
    return 1 + (num - 1) % 9; // The formula to get the digital root.
}

// Example usage:
console.log("@@",addDigit(38)); // Output: 2 (3 + 8 = 11, 1 + 1 = 2)
console.log("@@",addDigit(123)); // Output: 6 (1 + 2 + 3 = 6)

