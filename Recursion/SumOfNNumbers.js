// Print sum of N numbers

function sumOfNNumbers(n) {
  if (n <= 0) {
    return 0;
  }
  return n + sumOfNNumbers(n - 1);
}

const result = sumOfNNumbers(5); 
console.log(result);