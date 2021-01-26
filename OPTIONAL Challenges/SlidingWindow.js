function maxSum(arr, num) {
  let sum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  maxSum = sum;
  for (let i = num; i < arr.length; i++) {
    sum = sum - arr[i - num] + arr[i];
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}

console.log(maxSum([1, 2, 11, 14, 1, 6, 7, 8, 9, 8, 7, 6, 5, 4], 3));
