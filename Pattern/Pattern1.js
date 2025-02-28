const Pattern = (n) => {
    let row = "";
    for(i=1; i<n; i++) {
        for(j=1; j<n; j++){
            row = row + j ;
        }
        row = row + "\n";
    }
    console.log(row);
}

Pattern(5);
//Output:
// 1234
// 1234
// 1234
// 1234