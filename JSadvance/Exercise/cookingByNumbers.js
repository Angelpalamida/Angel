function cooking(n, n1, n2, n3, n4, n5) {
  let num = Number(n);
  let comands = [n1, n2, n3, n4, n5];
  for (const el of comands) {
    switch (el) {
      case `chop`:num = num / 2;break;
      case `dice`:num = Math.sqrt(num);break;
      case `spice`:num += 1;break;
      case `bake`:num = num * 3;break;
      case `fillet`:num -= num * 0.2;break;
    }
    console.log(num);
  }
}
cooking("9", "dice", "spice", "chop", "bake", "fillet");
