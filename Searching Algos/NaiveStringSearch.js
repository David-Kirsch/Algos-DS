function stringSearch(str, substring) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substring.length; j++) {
      if (substring[j] !== str[i + j]) {
        break;
      }
      if (j === substring.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(stringSearch("aaaababaaaba", "aaab"));
