// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// concept is similar to recurssion

function climbStairs(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return climbStairs(n - 1) + climbStairs(n - 2);
}

console.log(climbStairs(2)); 
console.log(climbStairs(3));  
console.log(climbStairs(4))
