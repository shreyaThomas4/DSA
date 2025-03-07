// Solution 1: using toString

function countDigits(number) {
    // Convert number to string and count the length
    return number.toString().length;
  }
  
  // Example usage:
  let number = 12345;
  console.log(countDigits(number)); // Output: 5
  
  // Solution 2: optimal Solution
  
  function DisplayCount(number) {
    if (number === 0) {
      return 1;
    }
    // To store the count create a count variable
    let count = 0;
    while (number > 0) {
      number = Math.floor(number / 10); // Removes last digit
      count++;
    }
    return count;
  }

  const output = countDigits(12345678653)
  console.log("output", output);
  
  