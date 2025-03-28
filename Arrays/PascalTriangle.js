function PascalTriangle(numRows) {
  let triangle = [];

  for (row = 0; row < numRows; row++) {
    let newRow = [];
    newRow[0] = 1;
    for (let col = 1; col < row; col++) {
      newRow[col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
    }
    if (row > 0) {
      newRow[row] = 1;
    }

    triangle.push(newRow);
  }
  return triangle;
}

console.log(PascalTriangle(5));
// [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
