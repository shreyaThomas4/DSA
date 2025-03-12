// Print your name n no of times using recurssion

function print(name, count) {
  if (count <= 0) {
    return;
  }
  print(name, count - 1);
  console.log(" name", name);
}

print("Shreya Thomas", 10);
