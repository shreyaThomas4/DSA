// Find the largest number in an array

// Solution 1: Brute force
// -> Sort the aaray and return the last indexedDB

// Solution 2: Recusrive Approach
// -> maintain a max variable that will update whenever the current value is greater than the value in the max variable.

// Solution 1:
// Time complexity is O(nlogn)

function largestElementInArray(array) {
  array.sort((a, b) => a - b);
  console.log("@@ largest element:", array[array.length - 1]);

  return array[array.length - 1];
}

largestElementInArray([9, 2, 10, 4, 5, 100, 6, 7]);

// Solution 2:
// Time complexity is O(n)
// this is a better solution

function largestElementInArrayTwo(arr) {
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log("@@ largest element:",max);
  return max;
}

largestElementInArrayTwo([200, 2, 10, 4, 5, 100, 6, 7]);
