function breakingRecords(scores) {
  let highestScore = scores[0];
  let lowestScore = scores[0];
  let bestRecord = 0;
  let worstRecord = 0;
  for (let ele of scores) {
    if (highestScore < ele) {
      highestScore = ele;
      bestRecord++;
    }
    if (lowestScore > ele) {
      lowestScore = ele;
      worstRecord++;
    }
  }
  return [bestRecord, worstRecord];
}
