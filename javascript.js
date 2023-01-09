const grid = document.querySelector(".container");
const grayscaleMode = document.querySelector('.grayscale');
const rainbowMode = document.querySelector('.rainbow');
const clearGrid = document.querySelector('.clear');
const resizeGrid = document.querySelector('.resize');

let size = 16;
let color = 'gray';

// overall look of the grid
grid.style.display = 'grid';
grid.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);
grid.style.setProperty('grid-template-rows', `repeat(${size}, 1fr)`);
grid.style.border = "3px solid #000000";
// grid.style.width = "960px";
// grid.style.overflow = "hidden";

// create grid
function createGrid(size) {
  for (i = 0; i < (size * size); i++) {
    let square = document.createElement("div");
    square.style.minHeight = "0";
    square.style.minWidth = "0";
    square.style.overflow = "hidden";

    grid.appendChild(square).className = "grid-item";
    square.addEventListener('mouseover', () => setColor(event));
  }
}

function getRandomColor() {
  let o = Math.round;
  let r = Math.random;
  let s = 255;
  return "rgb(" + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

function setColor(event){
  if (color == 'gray'){
    event.target.style.backgroundColor = 'gray';
  }
  
  if (color == 'rgb'){
    event.target.style.backgroundColor = getRandomColor();
  }
}

// grayscaleMode button
grayscaleMode.classList.add('active');
grayscaleMode.addEventListener('click', function(){
  rainbowMode.classList.remove('active');
  clearGrid.classList.remove('active');
  grayscaleMode.classList.add('active');
  color = 'gray';
});

// rainbowMode button
rainbowMode.addEventListener('click', function(){
  clearGrid.classList.remove('active');
  grayscaleMode.classList.remove('active');
  rainbowMode.classList.add('active');
  color = 'rgb';
});

// clearGrid button
clearGrid.addEventListener("click", (e)=>{
  grid.innerHTML = "";
  createGrid(size);
});

// resizeGrid button
resizeGrid.addEventListener('click', (e)=> {
  grid.innerHTML = "";
  size = parseInt(prompt('What is the size of the grid?'))
  createGrid(size);
})

createGrid(size);