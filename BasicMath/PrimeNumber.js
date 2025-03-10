function isPrime(num) {
    if (num <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If divisible by any number other than 1 and itself, it's not prime
        }
    }
    return true; // If no divisors are found, it's a prime number
}

// Example usage
console.log(isPrime(5)); // true
console.log(isPrime(10)); // false
