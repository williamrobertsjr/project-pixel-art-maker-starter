
const color = document.querySelector('#colorPicker');
const size = document.querySelector('#sizePicker');
const row = document.querySelector('#inputHeight');
const col = document.querySelector('#inputWidth');
const table = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()

size.addEventListener('submit', function(click){
  click.preventDefault();
  makeGrid();
}, false);

function makeGrid() {
    
}
