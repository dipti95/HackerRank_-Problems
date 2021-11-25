function countingValleys(steps, path) {
  let count = 0;
  let height = 0;
  for (let ele of path) {
    if (ele === "U") {
      height++;
      if (height === 0) {
        count++;
      }
    } else height--;
  }
  return count;
}
