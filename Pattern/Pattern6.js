// 1
// 22
// 333
// 4444
// 55555

const Pattern = (n) =>  {
    let num = 1;
    for(i=0; i<n; i++) {
        let row = "";
        for(j=0; j<=i; j++){
            row=row+num;
        }
        num++
        console.log(row);
    }
}

Pattern(5);