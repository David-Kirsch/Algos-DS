//solved in 10 mins

function countUniqueValues(values) {
  if (values.length === 1) {
    return 1;
  }
  let unique = 0;
  let j = 1;
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== values[j]) {
      unique++;
      j++;
    } else {
      j++;
    }
  }
  return unique;
}

console.log(countUniqueValues([1, 1, 2, 4, 6, 6, 7])); // 5
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1, 1])); // 4
