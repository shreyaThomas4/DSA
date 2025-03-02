// Find Second Smallest and Second Largest Element in an array
// There can be 3 solutions for this
// 1st Brute force, sort the array and then return the second and last second index
// 2nd we once again traverse the array and find an element that is just greater than the smallest element we just found.

// Solution 1:

function getSecondSmallestAndLargestNumber(arr) {
  if (arr.length === 0 || arr.length === 1) {
    console.log(-1 + " " + -1); // Edge case when only one element is present in the array
    return;
  }

  arr.sort((a, b) => a - b);
  let small = arr[1];
  let large = arr[arr.length - 2];
  console.log("Second smallest is " + small);
  console.log("Second largest is " + large);
}

getSecondSmallestAndLargestNumber([1, 2, 4, 6, 7, 5]);
getSecondSmallestAndLargestNumber([5]);

// Solution 2: 

function getElements(arr) {
    if (arr.length === 0 || arr.length === 1) {
      console.log(-1 + " " + -1); // Edge case when only one element is present in the array
      return;
    }
  
    let small = Infinity;
    let second_small = Infinity;
    let large = -Infinity;
    let second_large = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      small = Math.min(small, arr[i]);
      large = Math.max(large, arr[i]);
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < second_small && arr[i] !== small)
        second_small = arr[i];
      if (arr[i] > second_large && arr[i] !== large)
        second_large = arr[i];
    }
  
    console.log("Second smallest is " + second_small);
    console.log("Second largest is " + second_large);
  }
  
  const array = [1, 2, 4, 6, 7, 5];
  getElements(array);
  
  

// Solution 3:
// complexity: O(2N)
function secondSmallest(arr) {
  // [1, 2, 4, 7, 7, 5]
  if (arr.length < 2) return -1;

  let small = Infinity;
  let second_small = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      second_small = small;
      small = arr[i];
    } else if (arr[i] < second_small && arr[i] !== small) {
      second_small = arr[i];
    }
  }

  return second_small;
}

function secondLargest(arr) {
  if (arr.length < 2) return -1;

  let large = -1;
  let second_large = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      second_large = large;
      large = arr[i];
    } else if (arr[i] > second_large && arr[i] !== large) {
      second_large = arr[i];
    }
  }

  return second_large;
}

const arr = [1, 2, 4, 7, 7, 5];
const secondSmallestNumber = secondSmallest(arr);
const secondLargestNumber = secondLargest(arr);

console.log("Second smallest is " + secondSmallestNumber);
console.log("Second largest is " + secondLargestNumber);
