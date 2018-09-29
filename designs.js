
const color = document.querySelector('#colorPicker');
const size = document.querySelector('#sizePicker');
const row = document.querySelector('#inputHeight');
const col = document.querySelector('#inputWidth');
const table = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function(click){
  click.preventDefault();
  table.innerHTML = "";
  makeGrid();
}, false);

// makeGrid function should build Pixel Canvas
function makeGrid() {
  const table = document.querySelector('#pixelCanvas');

  for (var x = 1; x <= row.value; x++) {
    const newRow = document.createElement('tr');
    table.appendChild(newRow);

    for (var y = 1; y <= col.value; y++) {
      const newCol = document.createElement('td');
      newRow.appendChild(newCol);
    }
  }
}
