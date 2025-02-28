// 1
// 12
// 123
// 1234
// 12345

const Pattern = (n) =>  {
    for(i=0; i<=n; i++) {
        let num = 1;
        let row = "";
        for(j=1; j<=i; j++){
            row=row+num;
            num++
        }
        console.log(row);
    }
}

Pattern(5);