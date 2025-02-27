const bubbleSort = (arr) =>  {
    let length = arr.length;
    for (let i=0; i<=length-1; i++){
        for(let j=0; j<length-i-1; j++ ) {
            if (arr[j] >arr[j+1]) {

  [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
}
        }
    }
    console.log("Sorted Array:", arr);
    
    return arr;
}

bubbleSort([10, 4, 29, 8, 34, 22]); // [ 4, 8, 10, 22, 29, 34 ]

// Time Complexity: O(n^2)
// Space Complexity: O(1)

