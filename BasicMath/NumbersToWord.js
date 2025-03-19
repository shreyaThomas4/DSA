// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
var numberToWords = function(num) {
    if (num === 0) return "Zero";

    const ones = [
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", 
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];

    const tens = [
        "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    const thousands = ["", "Thousand", "Million", "Billion"];
    function helper(num) {
        if (num === 0) return "";
        
        if (num < 20) {
            return ones[num];
        }
        
        if (num < 100) {
            return `${tens[Math.floor(num / 10)]}${num % 10 === 0 ? "" : " " + ones[num % 10]}`;
        }
        
        return `${ones[Math.floor(num / 100)]} Hundred${num % 100 === 0 ? "" : " " + helper(num % 100)}`;
    }

    let result = "";

    let groupIndex = 0;
    while (num > 0) {
        let chunk = num % 1000;
        if (chunk > 0) {
            let groupWords = helper(chunk) + (thousands[groupIndex] ? " " + thousands[groupIndex] : "");
            result = groupWords + (result ? " " + result : "");
        }
        num = Math.floor(num / 1000);
        groupIndex++;
    }

    return result.trim();
};

console.log(numberToWords(1234567));   
console.log(numberToWords(12345));       
console.log(numberToWords(1000000));   