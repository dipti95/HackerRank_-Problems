function diagonalDifference(arr) {
  // Write your code here
  let leftDigonal = 0;
  let rightDigonal = 0;
  let x = 0;
  let y = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    leftDigonal += arr[i][x];
    rightDigonal += arr[i][y];
    x++;
    y--;
  }

  return Math.abs(leftDigonal - rightDigonal);
}
