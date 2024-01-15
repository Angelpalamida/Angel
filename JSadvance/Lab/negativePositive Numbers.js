function NegativetoPositive(arr) {
  let result = [];
  for (const el of arr) {
    if (el < 0) {
      result.unshift(el);
    } else {
      result.push(el);
    }
  }
  console.log(result.join(`\n`));
}
NegativetoPositive([7, -2, 8, 9]);
