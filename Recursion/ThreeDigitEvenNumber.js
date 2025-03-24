function countDistinctEvenNumbers(digits) {
    // Step 1: Create a frequency map for the digits
    let digitCount = {};
    for (let digit of digits) {
        digitCount[digit] = (digitCount[digit] || 0) + 1;
    }
    
    // Step 2: Identify the even digits (valid choices for the last digit)
    const evenDigits = [0, 2, 4, 6, 8];
    let distinctNumbers = new Set();

    // Step 3: Iterate over each possible even digit as the last digit (C)
    for (let C of evenDigits) {
        if (digitCount[C] > 0) {  // Check if C is available
            // Decrease the count of C temporarily for constructing the number
            digitCount[C]--;
            
            // Step 4: Now, find valid hundreds (A) and tens (B) digits
            for (let A in digitCount) {
                if (A !== '0' && digitCount[A] > 0) {  // A must be non-zero
                    // Decrease count of A temporarily
                    digitCount[A]--;
                    
                    for (let B in digitCount) {
                        if (digitCount[B] > 0) {  // B must be available
                            // Form the number and add it to the set of distinct numbers
                            let number = `${A}${B}${C}`;
                            distinctNumbers.add(number);
                        }
                    }
                    
                    // Restore the count of A after the loop
                    digitCount[A]++;
                }
            }
            
            // Restore the count of C after processing it as the last digit
            digitCount[C]++;
        }
    }

    // Step 5: Return the number of distinct valid numbers
    return distinctNumbers.size;
}

// Example usage:
console.log(countDistinctEvenNumbers([1, 2, 3, 4])); // Output: 12
console.log(countDistinctEvenNumbers([0, 2, 2]));    // Output: 2
console.log(countDistinctEvenNumbers([6, 6, 6]));    // Output: 1
console.log(countDistinctEvenNumbers([1, 3, 5]));    // Output: 0
