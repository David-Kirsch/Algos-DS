//solved in 10

function areThereDuplicates(args) {
  if (arguments.length < 2) {
    return false;
  }

  const obj = {};
  for (let arg in arguments) {
    if (obj[arguments[arg]]) {
      return true;
    } else {
      obj[arguments[arg]] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4)); // false
console.log(areThereDuplicates(1, 1, 2, 3)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); //true
