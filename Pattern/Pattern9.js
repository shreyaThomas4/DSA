//Floyd Triange Pattern
// 1
// 23
// 456
// 78910

const Pattern = (n) => {
    let num = 1;
    for (i = 1; i <= n; i++) {
        let row = "";
        for (j = 1; j <= i; j++) {
            row += num;
            num++;
        }
        console.log(row);
    }
}


Pattern(4);


