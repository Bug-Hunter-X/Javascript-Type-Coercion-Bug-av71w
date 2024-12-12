function foo(a, b) {
  //Type checking before the operation
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error("Invalid input: Both arguments must be numbers.");
    return NaN; // Or handle the error appropriately 
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Invalid input: Both arguments must be numbers.
NaN