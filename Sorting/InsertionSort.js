// insertion sort
// assuming that 0th index number is always sorted and there after we start the comparsion with other numbers

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
const array = [12, 11, 13, 5, 6];
console.log("Sorted array:", insertionSort(array));