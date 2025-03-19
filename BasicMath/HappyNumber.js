// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

const isHappy = function(n) {
    function sumOfSquares(num) {
          let sum = 0;
          while (num > 0) {
              let digit = num % 10; 
              sum += digit * digit; 
              num = Math.floor(num / 10); 
          }
          return sum;
      }
  
      let seen = [];
  
      while (n !== 1) {
          // If n has been encountered before, we've detected a cycle
          for (let i = 0; i < seen.length; i++) {
              if (seen[i] === n) {
                  return false;
              }
          }
  
          // Add the current number to the seen array
          seen.push(n);
  
          // Update n to be the sum of the squares of its digits
          n = sumOfSquares(n);
      }
  
      return true;
  };

  console.log(isHappy(19));
  console.log(isHappy(1));
  console.log(isHappy(25));


  
  