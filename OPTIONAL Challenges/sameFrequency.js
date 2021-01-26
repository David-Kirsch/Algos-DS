//solved in 10 min

function sameFrequency(num1, num2) {
  const num1String = num1.toString();
  const num2String = num2.toString();
  if (num1String.length !== num2String.length) {
    return false;
  }
  let obj = {};
  for (let letter of num1String) {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }

  for (let letter of num2String) {
    if (obj[letter]) {
      obj[letter]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(123, 432)); // false
console.log(sameFrequency(22, 222)); // false
console.log(sameFrequency(3821, 1238)); // true
