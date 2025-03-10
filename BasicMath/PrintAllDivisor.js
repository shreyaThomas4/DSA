// given a number, print all the number that divides the given input


function PrintDivisor(num) {
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) {
            console.log("divisor", i);
        }
    }
}

console.log( PrintDivisor(20));