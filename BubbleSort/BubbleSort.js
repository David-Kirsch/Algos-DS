function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([3, 2, 6, 12, 67, 23]));
console.log(bubbleSort([3, 1, 2, 0, 6, 9]));
