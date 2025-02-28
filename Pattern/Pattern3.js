// ABC
// DEF
// GHI

const Pattern = (n) => {
  let char = 65;
  for (i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j < n; j++) {
      row += String.fromCharCode(char);
      char++;
    }
    console.log(row);
  }
};
Pattern(3);
