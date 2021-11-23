function bonAppetit(bill, k, b) {
  let sum = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i === k) continue;
    sum += bill[i];
  }

  let moneyOwes = b - sum / 2;
  if (moneyOwes === 0) console.log("Bon Appetit");
  else console.log(moneyOwes);
}
