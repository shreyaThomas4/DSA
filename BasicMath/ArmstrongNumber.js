// summation of cube of a number is equal to the number

function isArmStrongnumber(n) {
  let armStrongnumber = 0;
  let originalNum = n;

  while (n > 0) {
    let digit = n % 10;
    armStrongnumber =  armStrongnumber + (digit * digit * digit);
    n = Math.floor(n / 10);
  }
  return armStrongnumber === originalNum;
}

console.log("@@ Output", isArmStrongnumber(371)); // true
console.log("@@ Output", isArmStrongnumber(1234)); // false
