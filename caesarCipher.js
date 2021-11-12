function caesarCipher(s, k) {
  // Write your code here
  let str = "";
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let alphaC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < s.length; i++) {
    if (alpha.includes(s[i])) {
      let index = alpha.indexOf(s[i]);
      if (index + k >= alpha.length) {
        str += alpha[(index + k) % alpha.length];
      } else str += alpha[index + k];
    } else if (alphaC.includes(s[i])) {
      let index = alphaC.indexOf(s[i]);
      console.log(index);
      console.log(index + k);
      if (index + k >= alphaC.length) {
        console.log(index + k);
        str += alphaC[(index + k) % alphaC.length];
      } else str += alphaC[index + k];
    } else str += s[i];
  }
  return str;
}
