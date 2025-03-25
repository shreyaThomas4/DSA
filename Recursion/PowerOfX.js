function PowerOfX(x, n) {
  if (n === 0) return 1;

  // If n is negative, convert it to a positive exponent and take the reciprocal of x
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  //If n is even, we calculate x^(n/2) recursively and square the result.
  // If n is odd, we compute x * x^(n-1) by reducing the exponent by 1, which turns it into an even exponent in the next ste

  if( n % 2 === 0) {
    let half = PowerOfX(x, n/2);
    return half * half; 
  } else {
    return x * PowerOfX(x, n - 1);  // If n is odd
}
}

console.log(PowerOfX(2,2));
console.log(PowerOfX(2,10));
console.log(PowerOfX(2,-2));
console.log(PowerOfX(3,20));
console.log(PowerOfX(2,2));
