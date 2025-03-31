// Input: rowIndex = 3
// Output: [1,3,3,1]

function PascalTriangle(rowIndex) {
  let row = [1];

  for (i = 1; i <= rowIndex; i++) {
    let newRow = [1];
    for (j = 1; j < row.length; j++) {
      newRow[j] = row[j - 1] + row[j];
    }
    newRow.push(1);
    row = newRow;
  }

  return row;
}

console.log(PascalTriangle(3));

