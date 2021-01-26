//solved in 15 mins

function isSubsequence(str1, str2) {
  if (str1.length > str2.length) {
    return false;
  }
  let str1Index = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1[str1Index] === str2[i]) {
      str1Index++;
      if (str1Index === str1.length) {
        return true;
      }
    }
  }
  return false;
}

console.log(isSubsequence("cat", "The cat in the hat")); //true
console.log(isSubsequence("yellow", "summyellowred")); //true
console.log(isSubsequence("go", "home")); // false
console.log(isSubsequence("bye", "bluebird")); //false
console.log(isSubsequence("hello", "hello world")); //true
