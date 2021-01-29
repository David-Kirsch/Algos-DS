function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    console.log("Top For loop");
    let currentVal = arr[i];
    let j = i - 1;
    for (j; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr, j);
    }
    console.log("Out of inner");
    console.log("*****" + arr, j);
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

console.log(insertionSort([2, 3, 5, 1, 8]));

//currentV = 3
//currentV = 1
