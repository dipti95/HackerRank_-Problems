function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = 0;
  for (let ele of apples) {
    if (s <= a + ele && a + ele <= t) appleCount += 1;
  }
  let orangeCount = 0;
  for (let ele of oranges) {
    if (s <= b + ele && b + ele <= t) orangeCount += 1;
  }
  console.log(appleCount);
  console.log(orangeCount);
}
