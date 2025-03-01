//    1
//   121
//  12321
// 1234321

// split the pattern into 2

const Pattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    // print loop for spaces
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    // print loop for 1st half of triangle
    for (let j = 1; j <= i + 1; j++) {
      row += j;
    }
    //   console.log("row:1", row);
    // print loop for 2st half of triangle
    for (let j = i; j > 0; j--) {
      row += j;
    }
    //   console.log("row:2", row);
    console.log(row);
  }
};

Pattern(4);