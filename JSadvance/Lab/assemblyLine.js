function createAssemblyLine() {
    return {
      hasClima: function (car) {
        car.temp = 21;
        car.tempSettings = 21;
        car.adjustTemp = function () {
          if (car.temp < car.tempSettings) {
            car.temp += 1;
          } else if (car.temp > car.tempSettings) {
            car.temp -= 1;
          }
        };
      },
  
      hasAudio: function (car) {
        car.currentTrack = {
          name: null,
          artist: null
        };
  
        car.nowPlaying = function () {
          if (car.currentTrack) {
            console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
          }
        };
      },
  
      hasParktronic: function (car) {
        car.checkDistance = function (distance) {
          if (distance < 0.1) {
            console.log("Beep! Beep! Beep!");
          } else if (distance >= 0.1 && distance < 0.25) {
            console.log("Beep! Beep!");
          } else if (distance >= 0.25 && distance < 0.5) {
            console.log("Beep!");
          } else {
            console.log("");
          }
        };
      }
    };
  }
  const assemblyLine = createAssemblyLine();
const myCar = {
  make: 'Toyota',
  model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);

