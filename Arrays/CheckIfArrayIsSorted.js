// check if the given array of size n is sorted

// Solution 1
function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i])
          return false;
      }
    }
  
    return true;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const ans = isSorted(arr);
  if (ans) console.log("True");
  else console.log("False");


// Solution 2


function isSorted(array) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1])
        return false;
    }
  
    return true;
  }
  
  const array = [1, 2, 3, 4, 5];
  
  console.log(isSorted(array) ? "True" : "False");
  
  
  
  
  