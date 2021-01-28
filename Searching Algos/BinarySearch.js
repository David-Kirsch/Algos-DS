function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);
  while (arr[middle] !== value && left <= right) {
    middle = Math.floor((right + left) / 2);
    arr[middle] > value ? (right = middle - 1) : (left = middle + 1);
  }
  return arr[middle] === value ? middle : -1;
}

console.log(binarySearch([10, 15, 25, 30], 15)); //1
console.log(binarySearch([100], 100)); //0
console.log(binarySearch([1, 2, 3, 4, 5], 9)); // -1
console.log(binarySearch(["David", "Eve", "Greg", "Jordan", "Roy"], "Eve"));
