// Remove duplicates from sorted aaray

// Solution 1: Brute Force
function removeDuplicates(array) {
  // Set data structure will have unique values
  let set = new Set(array);
  // An array-like object to convert to an array.
  let uniqueArr = Array.from(set);
  for (i = 0; i < uniqueArr.length; i++) {
    array[i] = uniqueArr[i];
  }
  return uniqueArr.length;
}
// Time complexity: O(n*log(n))+O(n)
const arr = [1, 1, 2, 2, 2, 3, 3, 4, 5, 6, 6, 6, 6];
const k = removeDuplicates(arr);

console.log("Solution 1:");
for (i = 0; i < k; i++) {
  console.log(arr[i]);
}

// Solution 2: Two pointer approach

function removeDuplicate(array) {
  let i = 0;
  for (j = 1; j < array.length; j++) {
    if(array[i] !== array[j]) {
        i++;
        array[i]=array[j];
    }
  }
  return i+1;
}


const array = [1, 1, 2, 2, 2, 3, 3];
const unique = removeDuplicate(array);

// Time complexity: O(n)
console.log("Solution 2");
for (let i = 0; i < unique; i++) {
  console.log(array[i]);
}