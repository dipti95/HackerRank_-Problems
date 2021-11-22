// all the factors of the lastElement of a  and add into a new array;
// between last ele of a to first ele of b;
// find the number of ele of new Array which is divisible by all the elements of a and b;

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
