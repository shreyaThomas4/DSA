// Union of sorted Array
// Example 1:
// Input:

// n = 5,m = 5.
// arr1[] = {1,2,3,4,5}
// arr2[] = {2,3,4,4,5}
// Output:

//  {1,2,3,4,5}

// Solution 1: Using sets

function findUnion(arr1, arr2) {
  const set = new Set();
  const union = [];
  for (num of arr1) {
    set.add(num);
  }
  for (num of arr2) {
    set.add(num);
  }
  for (num of set) {
    union.push(num);
  }
  return union;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

const union = findUnion(arr1, arr2);

console.log("Union of arr1 and arr2 is:");
console.log(...union);


// Solution 2: Two pointers

function findUnion(arr1, arr2) {
    let i = 0, j = 0; // Pointers
    let union = []; // Union array
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) { // Case 1 and 2
        if (union.length === 0 || union[union.length - 1] !== arr1[i])
          union.push(arr1[i]);
        i++;
      } else { // Case 3
        if (union.length === 0 || union[union.length - 1] !== arr2[j])
          union.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) { // If any elements left in arr1
      if (union[union.length - 1] !== arr1[i])
        union.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) { // If any elements left in arr2
      if (union[union.length - 1] !== arr2[j])
        union.push(arr2[j]);
      j++;
    }
  
    return union;
  }
  
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const array2 = [2, 3, 4, 4, 5, 11, 12];
  
  const unionOfArray = findUnion(array1, array2);
  
  console.log("Union of arr1 and arr2 is:");
  console.log(unionOfArray.join(" "));
  
  
  
