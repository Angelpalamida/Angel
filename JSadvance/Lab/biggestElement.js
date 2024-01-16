function biggestElement(arr) {
    let splitedArr = arr[0][0];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > splitedArr) {
          splitedArr = arr[i][j];
        }
      }
    }
    console.log(splitedArr);
  }
biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );
