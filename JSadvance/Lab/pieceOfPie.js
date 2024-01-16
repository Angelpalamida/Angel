function pieceOfPie(arr, start, stop) {
 let startIndex=arr.indexOf(start);
 let stopIndex=arr.indexOf(stop);
 let result=arr.slice(startIndex,stopIndex+1);
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
