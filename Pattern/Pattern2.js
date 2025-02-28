// 123;
// 456;
// 789;

const Pattern = (n) => {
  let num = 1;
  for (i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j < n; j++) {
      row += num;
      num++;
    }
    console.log(row);
  }
};
Pattern(3);
