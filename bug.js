function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This line is incorrect
  }
  return a + b;
}

console.log(foo(null, 1)); // Expected output is 1
console.log(foo(1, null)); // Expected output is 1
console.log(foo(null, null)); // Expected output is 0