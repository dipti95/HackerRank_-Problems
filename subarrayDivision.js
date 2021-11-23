function birthday(s, d, m) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let idx = i;
    for (let j = 1; j <= m; j++) {
      sum += s[idx];
      idx++;
    }
    //console.log(sum);
    if (sum === d) {
      count++;
      sum = 0;
      idx = i;
    }
    sum = 0;
    idx = i;
  }
  return count;
}
