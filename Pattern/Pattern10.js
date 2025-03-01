// Inverted Triangle Pattern
// 1111
//  222
//   33
//    4

const Pattern = (n) => {
  for (i = 0; i < n; i++) {
    let row = "";
    // loop for spaces
    for (j = 0; j < i; j++) {  
      row += " ";
    }
    // loop for numbers
    for (j = 0; j < n - i; j++) {
      row += i+1;
    }
    console.log(row);
  }
};

Pattern(4);
