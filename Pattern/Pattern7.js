// A
// BB
// CCC
// DDDD
// EEEEE

const Pattern = (n) =>  {
    let char = 65;
    for(i=0; i<n; i++) {
        let row = "";
        for(j=0; j<=i; j++){
            row=row+String.fromCharCode(char);
        }
        char++
        console.log(row);
    }
}

Pattern(5);