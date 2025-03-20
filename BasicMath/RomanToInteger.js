function romanToInt(s) {
    // Mapping of Roman numeral characters to their integer values
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    // Iterate through the string, comparing each character to the next
    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]]; // Current Roman numeral value
        const next = romanMap[s[i + 1]]; // Next Roman numeral value (or undefined if at the end)

        // If the current value is less than the next value, subtract the current value
        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}

// Example usage:
console.log(romanToInt("III"));    // 3
console.log(romanToInt("IV"));     // 4
console.log(romanToInt("IX"));     // 9
console.log(romanToInt("LVIII"));  // 58
console.log(romanToInt("MCMXCIV")); // 1994
