// You are given an array arr[] containing positive integers. The elements in the array arr[] range from 1 to n (where n is the size of the array), and some numbers may be repeated or absent. Your task is to count the frequency of all numbers in the range 1 to n and return an array of size n such that result[i] represents the frequency of the number i (1-based indexing).
// source geek for geeks

function countFrequencyOfNumber(arr, n) {
  let frequencyMap = new Map();

  for (let num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  let result = new Array(n).fill(0);

  for (let i = 1; i <= n; i++) {
    if (frequencyMap.has(i)) {
      result[i - 1] = frequencyMap.get(i);
    }
  }
  return result;
}

// Example usage:
let arr = [2,3,4,1,2,3,4,5,1,2,3,5,6,6,6,6,6,6];
let n = 6;
let result = countFrequencyOfNumber(arr, n);
console.log(result); 
