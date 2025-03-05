// Left Rotate the Array by One

// Example 1:
// Input:
//  N = 5, array[] = {1,2,3,4,5}
// Output:
//  2,3,4,5,1

// Solution 1:  With a temp array
function LeftRotateArray(arr, n) {
  let temp = new Array(n);
  for (i = 1; i < n; i++) {
    temp[i - 1] = arr[i];
  }
  temp[n - 1] = arr[0];
  for (i = 0; i < n; i++) {
    console.log(temp[i]);
  }
}

let n = 5;
let arr = [1, 2, 3, 4, 5];
LeftRotateArray(arr, n);

// Solution 2: with the same array

function RotateArray(array) {
  let temp = array[0];

  for (i = 0; i < array.length -1; i++) {
    array[i] = array[i+1];
  }
  array[array.length - 1] = temp;

  for (let i = 0; i < array.length; i++) {
    console.log("Solution 2", array[i] + " ");
  }
}

let array = [1, 2, 3, 4, 5];
RotateArray(array);
