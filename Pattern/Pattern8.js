// reverse triangle
// 1
// 21
// 321
// 4321

const Pattern = (n) => {
    for (i = 1; i <= n; i++) {
        let row = "";
        for (j = i; j >= 1; j--) {
            row += j;
        }
        console.log(row);
    }
}

Pattern(4);