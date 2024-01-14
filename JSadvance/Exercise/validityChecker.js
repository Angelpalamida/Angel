function validateDistance(x1, y1, x2, y2) {
  let calculateDistance = (x1, y1, x2, y2) =>
    Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  let isInteger = (value) => Number.isInteger(value);

  let point1 = `{${x1}, ${y1}}`;
  let point2 = `{${x2}, ${y2}}`;
debugger
  let distanceToOrigin1 = calculateDistance(x1, y1, 0, 0);
  let distanceToOrigin2 = calculateDistance(x2, y2, 0, 0);
  let distanceBetweenPoints = calculateDistance(x1, y1, x2, y2);

  let isValid1 = isInteger(distanceToOrigin1);
  let isValid2 = isInteger(distanceToOrigin2);
  let isValid3 = isInteger(distanceBetweenPoints);

  if (isValid1) {
    console.log(`${point1} to {0, 0} is valid`);
  } else {
    console.log(`${point1} to {0, 0} is invalid`);
  }

  if (isValid2) {
    console.log(`${point2} to {0, 0} is valid`);
  } else {
    console.log(`${point2} to {0, 0} is invalid`);
  }

  if (isValid3) {
    console.log(`${point1} to ${point2} is valid`);
  } else {
    console.log(`${point1} to ${point2} is invalid`);
  }
  
}

validateDistance(3, 0, 0, 4);
validateDistance(2, 1, 1, 1);
