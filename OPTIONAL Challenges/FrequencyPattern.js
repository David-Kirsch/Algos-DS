//solved in 20 mins

function validAnagram(str1, str2) {
  let word = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (let letter of str1) {
    if (word[letter]) {
      word[letter]++;
    } else {
      word[letter] = 1;
    }
  }

  for (let letter of str2) {
    if (word[letter]) {
      word[letter] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("rat", "tar")); // true
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("sadfs", "asdf")); //false
