function getTotalX(a, b) {
  let firstVal = a[a.length - 1];
  let secondVal = b[0];
  let factors = [];
  let hash = {};
  for (let i = firstVal; i <= secondVal; i += firstVal) {
    factors.push(i);
  }
  console.log(factors);
  for (let i = 0; i < a.length; i++) {
    for (let ele of factors) {
      if (a[i] < ele) {
        if (ele % a[i] !== 0) {
          if (ele in hash) hash[ele] += 1;
          else hash[ele] = 1;
        }
      } else {
        if (a[i] % ele !== 0) {
          if (ele in hash) hash[ele] += 1;
          else hash[ele] = 1;
        }
      }
    }
  }
  for (let i = 0; i < b.length; i++) {
    for (let ele of factors) {
      if (b[i] < ele) {
        if (ele % b[i] !== 0) {
          if (ele in hash) hash[ele] += 1;
          else hash[ele] = 1;
        }
      } else {
        if (b[i] % ele !== 0) {
          if (ele in hash) hash[ele] += 1;
          else hash[ele] = 1;
        }
      }
    }
  }
  let key = Object.keys(hash);
  return factors.length - key.length;
}
