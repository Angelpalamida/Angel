function pieceOfPie(arr, start, stop) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el == start) {
      for (let j = i; j < arr.length; j++) {
        const element = arr[j];
        if (element != stop) {
          result.push(element);
        } else {
          result.push(element);
          break;
        }
      }
      break;
    }
  }
  console.log(result);
}
pieceOfPie(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);
