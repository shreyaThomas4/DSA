// Reverse a number

// Solution 1:

function ReverseNumber(num) {
 const convertToString = num.toString();
 return convertToString.split('').reverse().join('');
 
}

const ans = ReverseNumber(12345);
console.log("@@ answer", ans);
     

function reverseNum(n) {
let revNum = 0;
while (n > 0) {
    let ld = n % 10;
    revNum = (revNum * 10) + ld;
    n = Math.floor(n / 10);
}
console.log("reversed number", revNum);
}
reverseNum(33456);
                            
                        
