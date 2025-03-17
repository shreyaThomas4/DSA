// Newton's method
var mySqrt = function (x) {
  if (x < 2) return x;

  let guess = x / 2;
  while (Math.abs(guess * guess - x) >= 1) {
    guess = (guess + x / guess) / 2;
  }
  return Math.floor(guess);
};

const ans = mySqrt(4);
console.log("ans", ans);

// binary search

function mySqrt(x) {
  if (x < 2) {
    return x; // Handle the case where x is 0 or 1
  }

  let left = 0;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid; // We found the exact square root
    } else if (square < x) {
      left = mid + 1; // We need to search in the upper half
    } else {
      right = mid - 1; // We need to search in the lower half
    }
  }

  // If we exit the loop, 'right' will be the floor of the square root
  return right;
}

// Example usage:
console.log(mySqrt(8)); // Output: 2
console.log(mySqrt(16)); // Output: 4
console.log(mySqrt(25)); // Output: 5
console.log(mySqrt(1)); // Output: 1
console.log(mySqrt(0)); // Output: 0
