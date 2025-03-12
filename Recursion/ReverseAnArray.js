// reverse array using recursion

function reverseArray(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return;
  }

  // Swap the elements at start and end
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  // Recursively reverse the rest of the array
  reverseArray(arr, start + 1, end - 1);
}

const arr = [1, 2, 3, 4, 5];
reverseArray(arr);
console.log(arr); 
