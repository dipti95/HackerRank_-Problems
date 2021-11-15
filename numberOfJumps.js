function kangaroo(x1, v1, x2, v2) {
  if ((x2 > x1 && v2 > v1) || (x1 > x2 && v1 > v2)) return "NO";
  for (let i = 0; i < 10000; i++) {
    if (x1 + v1 === x2 + v2) return "YES";
    x1 += v1;
    x2 += v2;
  }
  return "NO";
}
