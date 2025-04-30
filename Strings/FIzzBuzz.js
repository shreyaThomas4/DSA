// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.


function fizzBuzz(n) {
    const answer = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            answer.push("FizzBuzz");
        } else if (i % 3 === 0) {
            answer.push("Fizz");
        } else if (i % 5 === 0) {
            answer.push("Buzz");
        } else {
            answer.push(i.toString());
        }
    }

    return answer;
}

// Example usage:
console.log(fizzBuzz(3));  // ["1", "2", "Fizz"]
console.log(fizzBuzz(5));  // ["1", "2", "Fizz", "4", "Buzz"]
console.log(fizzBuzz(15)); // ["1", "2", "Fizz", "4", "Buzz", ..., "14", "FizzBuzz"]
