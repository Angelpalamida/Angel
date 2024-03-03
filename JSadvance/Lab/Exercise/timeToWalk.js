function calculateWalkingTime(steps, footprintLength, speed) {
  let distance = steps * footprintLength;

  let timeInHours = distance / (speed * 1000);

  let numberOfBreaks = Math.floor(distance / 500);

  let totalTimeInMinutes = timeInHours * 60 + numberOfBreaks;

  let hours = Math.floor(totalTimeInMinutes / 60);
  let minutes = Math.floor(totalTimeInMinutes % 60);
  let seconds = Math.round((totalTimeInMinutes % 1) * 60);

  let result = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  console.log(result);
}

calculateWalkingTime(4000, 0.6, 5);
calculateWalkingTime(2564, 0.7, 5.5);
