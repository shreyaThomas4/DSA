// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

function plusOne(digits) {
    return (BigInt(digits.join("")) + BigInt(1)).toString().split("").map(i=>Number(i))  

}

// Solution 2
// function plusOne(digits) {
//     // Traverse the digits array from right to left
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//             digits[i] += 1; // If the digit is less than 9, just add 1 and return
//             return digits;
//         }
//         digits[i] = 0; // If the digit is 9, it becomes 0 and we need to carry over
//     }
    
//     // If we exit the loop, it means we have a carry left (e.g., 999 -> 1000)
//     digits.unshift(1); // Add 1 at the beginning of the array
//     return digits;
// }

// Example usage:
console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]
console.log(plusOne([9, 9, 9])); // Output: [1, 0, 0, 0]
console.log(plusOne([0]));       // Output: [1]
console.log(plusOne([9]));       // Output: [10]
