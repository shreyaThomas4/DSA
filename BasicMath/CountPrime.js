
const countPrimes = function(n) {
    if (n <= 2) return 0; 

   let isPrime = new Array(n).fill(true);
   isPrime[0] = isPrime[1] = false; 

   for (let i = 2; i * i < n; i++) {
       if (isPrime[i]) {
           for (let j = i * i; j < n; j += i) {
               isPrime[j] = false; 
           }
       }
   }
   // Count the primes
   let count = 0;
   for (let i = 2; i < n; i++) {
       if (isPrime[i]) {
           count++;
       }
   }

   return count;
};

let n = 10;
console.log(countPrimes(n));  