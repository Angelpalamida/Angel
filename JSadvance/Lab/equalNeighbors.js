function countEqualNeighborPairs(matrix) {
    let equalPairsCount = 0;
  
    // Helper function to check if two elements are equal
    const areElementsEqual = (row1, col1, row2, col2) => matrix[row1][col1] === matrix[row2][col2];
  
    // Iterate through the matrix and check neighbors
    for (let row = 0; row < matrix.length - 1; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        // Check right neighbor
        if (areElementsEqual(row, col, row, col + 1)) {
          equalPairsCount++;
        }
        
        // Check bottom neighbor
        if (areElementsEqual(row, col, row + 1, col)) {
          equalPairsCount++;
        }
      }
    }
  debugger
    return equalPairsCount;
  }
  
  // Examples
  const matrix1 = [
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
  ];
  console.log(countEqualNeighborPairs(matrix1)); // Output: 1
  
  const matrix2 = [
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
  ];
  console.log(countEqualNeighborPairs(matrix2)); // Output: 2