// Fibonacci Series
// fib(n) = fib(n-1) + fib(n-2)


function fibonacci(n) {
    // Base cases
    if (n <= 0) {
      return 0;
    }
    if (n === 1) {
      return 1; 
    }
    
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log(fibonacci(5));  // Example: Prints 5 
  console.log(fibonacci(10)); // Example: Prints 55 
  

//   without recursion

function fibonacciWithoutRecursion(n) {
    if (n <= 0) {
      return 0;  // fib(0) = 0
    }
    if (n === 1) {
      return 1;  // fib(1) = 1
    }
  
    let a = 0;  // fib(0)
    let b = 1;  // fib(1)
    
    for (let i = 2; i <= n; i++) {
      let next = a + b;
      a = b;  // Move b to a
      b = next;  // Set b to the new Fibonacci number
    }
  
    return b;  // Return the nth Fibonacci number
  }
  
  console.log(fibonacciWithoutRecursion(5));  // Example: Prints 5 
  console.log(fibonacciWithoutRecursion(10)); // Example: Prints 55
  