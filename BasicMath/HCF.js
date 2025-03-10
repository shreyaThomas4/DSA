                            
function findHcf(a, b) {
    while (a > 0 && b > 0) {
        if (a > b) {
            a = a % b;
        }
        else {
            b = b % a;
        }
    }
    if (a === 0) {
        return b;
    }
    return a;
}

// Set the values of n1 and n2
let n1 = 20, n2 = 15;

// Find the Hcf of n1 and n2
let Hcf = findHcf(n1, n2);

// Output the result
console.log("Hcf of", n1, "and", n2, "is:", Hcf);

                            
                        