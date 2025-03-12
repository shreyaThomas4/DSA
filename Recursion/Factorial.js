// Factorial using recursion

function Factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * Factorial(n - 1);
}

const result = Factorial(5);

console.log(result);