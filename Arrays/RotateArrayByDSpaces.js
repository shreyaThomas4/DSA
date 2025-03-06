// Example 1:
// Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
// Output: 6 7 1 2 3 4 5
// Explanation: array is rotated to right by 2 position .

// First check if we can rotate the array by the D spaces given,

function rotateArray(arr, k) {
    const n = arr.length;
  
    // Normalize K to avoid unnecessary full rotations
    k = k % n;
  
    // Create a new array to store the rotated result
    const rotatedArray = new Array(n);
  
    // Using a for-loop to move each element to its new position
    for (let i = 0; i < n; i++) {
      const newIndex = (i + k) % n;  // Calculate the new index
      rotatedArray[newIndex] = arr[i];  // Place the element at the new index
    }
  
    // Copy the rotated array back to the original array (optional)
    for (let i = 0; i < n; i++) {
      arr[i] = rotatedArray[i];
    }
  console.log("@@ arr", arr);
  
    return arr;
  }
  
  rotateArray([1,2,3,4,5,6,7,8], 5)