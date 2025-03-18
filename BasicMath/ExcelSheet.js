// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
// For example:

// A -> 1
// B -> 2
// Z -> 26
// AA -> 27
// Example 1:

// Input: columnNumber = 1
// Output: "A"

function convertToTitle(columnNumber) {
    let result = '';

    while (columnNumber > 0) {
        columnNumber--;
        
        let remainder = columnNumber % 26;
        result = String.fromCharCode(remainder + 65) + result;  
        
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;
}

// Example usage:
console.log(convertToTitle(1));   // Output: "A"
console.log(convertToTitle(28));  // Output: "AB"
console.log(convertToTitle(701)); // Output: "ZY"
console.log(convertToTitle(52));  // Output: "AZ"
console.log(convertToTitle(702)); // Output: "ZZ"
