function findHighestAndLowestFrequency(nums) {
  let freqMap = new Map();

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  let highestFreqElement = undefined;
  let lowestFreqElement = undefined;
  let highestFreq = Number.NEGATIVE_INFINITY;
  let lowestFreq = Number.POSITIVE_INFINITY;

  freqMap.forEach((freq, key) => {
    if (freq > highestFreq) {
      highestFreq = freq;
      highestFreqElement = key;
    }
    if (freq < lowestFreq) {
      lowestFreq = freq;
      lowestFreqElement = key;
    }
  });

  return {
    highestFreqElement,
    highestFreq,
    lowestFreqElement,
    lowestFreq
  };
}

// Example usage:
let nums = [4, 4, 2, 2, 2, 3, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
let result = findHighestAndLowestFrequency(nums);
console.log(result);
