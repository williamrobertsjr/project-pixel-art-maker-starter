
const color = document.querySelector('#colorPicker');
const size = document.querySelector('#sizePicker');
const row = document.querySelector('#inputHeight');
const col = document.querySelector('#inputWidth');
const table = document.querySelector('#pixelCanvas');
const reset = document.querySelector('#resetGrid');

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function(click){
  click.preventDefault();
  table.innerHTML = "";
  makeGrid();
}, false);

// Clear table and reset grid size values when reset button is clicked
reset.addEventListener('click', function(click){
  console.log('you cliked reset')
  size.reset();
  table.innerHTML = "";
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


// change pixel canvas color when clicked to color chosen in color picker
table.addEventListener ('mousedown', function (td, event) {
    console.log(td.target);

    // if cell is white - change to color value
    if (td.target.style.backgroundColor == ""){
      console.log('background is initial');
      td.target.style.backgroundColor = color.value;
  }
  // if cell has a color value change it back to white
    else {
      td.target.style.backgroundColor = "";
  }

})
