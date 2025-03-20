var titleToNumber = function (columnTitle) {
  let result = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    let char = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
    result = result * 26 + char;
  }
  return result;
};

console.log(titleToNumber("Z"));
console.log(titleToNumber("AA"));
console.log(titleToNumber("ZY"));
