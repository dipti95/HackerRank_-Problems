function sockMerchant(n, ar) {
  let hash = {};
  for (let ele of ar) {
    if (ele in hash) hash[ele] += 1;
    else hash[ele] = 1;
  }
  let count = 0;
  for (let key in hash) {
    let ele = hash[key];
    console.log(ele);
    while (ele >= 2) {
      ele -= 2;
      count++;
    }
    ele = 0;
  }
  return count;
}
