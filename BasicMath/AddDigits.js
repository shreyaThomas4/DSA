// Input: num = 38
// Output: 2

function addDigits(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;  // Add the last digit
            num = Math.floor(num / 10);  // Remove the last digit
        }
        num = sum;  // Set num to the sum of its digits
    }
    return num;
}

console.log(addDigits(99));
console.log(addDigits(199));
console.log(addDigits(220));


