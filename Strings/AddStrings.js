var addStrings = function(num1, num2) {
    let a = BigInt(num1);
    let b = BigInt(num2);
    let c = a + b;
    console.log(c.toString());
    
    return c.toString();
};

addStrings("9333852702227987", "85731737104263");
addStrings("1234", "3333");