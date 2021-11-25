/**  => A mountain is a sequence of consecutive steps above sea level, 
starting with a step up from sea level and 
ending with a step down to sea level. 
=> A mountain is a sequence of consecutive steps above sea level,
 starting with a step up from sea level and 
 ending with a step down to sea level.
*/

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
