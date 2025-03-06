// given an array find if a number is present or not
// Example 1:
// Input: arr[]= 1 2 3 4 5, num = 3
// Output: 2
// Explanation: 3 is present in the 2nd index

// Example 2:
// Input: arr[]= 5 4 3 2 1, num = 5
// Output: 0
// Explanation: 5 is present in the 0th index

function LinearSearch(arr, num) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == num) return arr[i];
  }
  return -1;
}

const res = LinearSearch([1, 2, 3, 4, 5, 6], 4);
console.log("@@ res", res);
