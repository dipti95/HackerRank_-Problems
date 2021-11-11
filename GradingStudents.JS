function gradingStudents(grades) {
  let grade = [];
  for (let ele of grades) {
    if (ele < 35) {
      grade.push(ele);
      continue;
    }
    let x = ele;
    while (x % 5 !== 0) {
      x += 1;
    }

    let diff = x - ele;
    if (diff < 3) grade.push(x);
    else if (diff >= 3) grade.push(ele);
  }
  return grade;
}
