// Print numbers from 1 to n without the help of loops.


function printNos(n) {
    if(n <= 0 ) {
        return;
    }

    printNos(n-1);
    console.log(n);
}

const result = printNos(5);
console.log(result)