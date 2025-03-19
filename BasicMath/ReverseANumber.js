function ReverseNumber(num) {
  let reverse = 0;
  let sign = num < 0 ? -1 : 1;
  num = Math.abs(num);
  while (num !== 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  reverse *= sign;

  return reverse;
}

console.log(ReverseNumber(1990008877));
console.log("negative",ReverseNumber(-876579));
