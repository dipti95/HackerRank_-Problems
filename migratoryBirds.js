function migratoryBirds(arr) {
  let obj = {};
  for (let ele of arr) {
    if (ele in obj) obj[ele] += 1;
    else obj[ele] = 1;
  }
  let value = Object.values(obj);

  return Object.keys(obj).find((key) => obj[key] === Math.max(...value));
}
