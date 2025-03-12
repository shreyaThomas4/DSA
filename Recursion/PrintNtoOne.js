// Print N to 1 using recurssion

function Print(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  Print(n - 1);
}

Print(5);
