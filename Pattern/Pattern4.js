// *
// **
// ***
// ****

const Pattern = () =>  {
    for(i=1; i<=4; i++) {
        let row = "";
        for(j=1; j<=i; j++){
            row = row + "*";
        }
        console.log(row);
    }
}

Pattern(4);