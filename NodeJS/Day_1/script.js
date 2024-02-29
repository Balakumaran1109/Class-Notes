function operation(a, b, value) {
  switch (value) {
    case "add":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "div":
      return a / b;
    default:
      return "invalid operator value";
  }
}

console.log(operation(10, 20, "add"));
console.log(operation(10, 20, "sub"));
console.log(operation(10, 20, "mul"));
console.log(operation(10, 20, "div"));
