function miniMaxSum(arr) {
  // Write your code here
  let min = Infinity;
  let max = -Infinity;
  for (let j = 0; j < arr.length; j++) {
    let currMin = 0;
    let currMax = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i === j) continue;
      currMin += arr[i];
      currMax += arr[i];
    }
    if (min > currMin) {
      min = currMin;
      currMin = 0;
    }
    if (max < currMax) {
      max = currMax;
      currMax = 0;
    }
    currMax = 0;
    currMin = 0;
  }
  console.log(min, max);
}
