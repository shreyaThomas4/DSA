const selectionSort = () => {
  const arr = [10, 4, 29, 8, 34, 22];

  let arrayLength = arr.length;
  for (let i = 0; i < arrayLength - 1; i++) {
    let min = i;
    for (let j = i; j < arrayLength; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
        // this swaping can be done using temp variable as well
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  console.log("Sorted Array", arr);
  return arr;
};

selectionSort();
