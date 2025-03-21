function isPowerOfTwo(n) {
    if(n ===0) return false;
    while(n%2 === 0) {
        n = n/2;
    }

    return n === 1;
}


console.log(isPowerOfTwo(25));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(16));

