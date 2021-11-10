function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let ele of arr) {
    if (Math.sign(ele) === -1) negative += 1;
    else if (Math.sign(ele) === 1) positive += 1;
    else zero += 1;
  }
  console.log(positive / arr.length);
  console.log(negative / arr.length);
  console.log(zero / arr.length);
}
