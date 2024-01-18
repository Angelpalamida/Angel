function generateSpiralMatrix(rows, cols) {
    let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
  
    let startRow = 0,
      endRow = rows - 1,
      startCol = 0,
      endCol = cols - 1;
  
    let counter = 1;
  
    while (startRow <= endRow && startCol <= endCol) {
   
      for (let i = startCol; i <= endCol; i++) {
        matrix[startRow][i] = counter++;
      }
      startRow++;
  
  
      for (let i = startRow; i <= endRow; i++) {
        matrix[i][endCol] = counter++;
      }
      endCol--;
  
     
      for (let i = endCol; i >= startCol; i--) {
        matrix[endRow][i] = counter++;
      }
      endRow--;
  
    
      for (let i = endRow; i >= startRow; i--) {
        matrix[i][startCol] = counter++;
      }
      startCol++;
    }

    for (let row of matrix) {
      console.log(row.join(' '));
    }
  }
  

  generateSpiralMatrix(5, 5);
  
  

