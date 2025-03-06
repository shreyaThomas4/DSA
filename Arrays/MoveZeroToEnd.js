// Solution 1: Brute force using temp array
// Example 1:
// Input:
//  1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output:
//  1 ,2 ,3 ,4 ,1 ,0 ,0 ,0

function moveZeros(n, a) {
    // Temporary array
    let temp = [];

    // Copy non-zero elements from original array to temp array
    for (let i = 0; i < n; i++) {
        if (a[i] !== 0) {
            temp.push(a[i]);
        }
    }
    // Number of non-zero elements
    let nz = temp.length;
    // Copy elements from temp and fill the first nz fields of the original array
    for (let i = 0; i < nz; i++) {
        a[i] = temp[i];
    }
    // Fill the rest of the cells with 0
    for (let i = nz; i < n; i++) {
        a[i] = 0;
    }
    return a;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let k = 10;
let answer = moveZeros(k, arr);
console.log(answer.join(' '));

// Solution 2: Two pointer approach

function MoveZeroToEnd(n, arr) {
  let j = -1;
  for (i = 0; i < n; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }
  if (j === -1) return arr;

  for ( i = j + 1; i < n; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
}

let array = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n = 10;
let ans = MoveZeroToEnd(n, array);
console.log(ans.join(' '));
