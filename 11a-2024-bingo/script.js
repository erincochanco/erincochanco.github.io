document.addEventListener('DOMContentLoaded', function () {
    // Define the size of the bingo grid
    const rows = 5;
    const cols = 5;
  
    // Get the bingo table element
    const bingoTable = document.getElementById('bingo-table');
  
    // Dynamically create the bingo grid
    for (let i = 0; i < rows; i++) {
      const row = bingoTable.insertRow(i);
      for (let j = 0; j < cols; j++) {
        const cell = row.insertCell(j);
        cell.addEventListener('click', function () {
          // Change the color of the clicked square
          toggleColor(cell);
        });
      }
    }
  
    // Function to toggle the color of a cell
    function toggleColor(cell) {
      const currentColor = cell.style.backgroundColor;
      const newColor = currentColor === '#3384E5' ? '' : '#3384E5'; // Change 'red' to the desired color
      cell.style.backgroundColor = newColor;
    }
  });
  