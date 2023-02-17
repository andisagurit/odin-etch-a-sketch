const grid = document.querySelector(".container");
const grayscaleMode = document.querySelector('.grayscale');
const rainbowMode = document.querySelector('.rainbow');
const clearGrid = document.querySelector('.clear');
const resizeGrid = document.querySelector('.resize');

let size = 16;
let color = 'gray';
let audio = new Audio("https://www.fesliyanstudios.com/play-mp3/7");

//create grid
function createGrid(size) {
  let square = grid.querySelectorAll("div");
  square.forEach((div) => div.remove());

  // grid.style.display = 'grid';
  grid.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);
  grid.style.setProperty('grid-template-rows', `repeat(${size}, 1fr)`);
  grid.style.width = "960px";
  grid.style.overflow = "hidden";
  grid.style.border = "3px solid";
  
  for (i = 0; i < (size * size); i++) {
    let square = document.createElement("div");
    square.style.overflow = "hidden";
    square.style.minHeight = "0"
    square.style.minWidth = "0"

    grid.appendChild(square).className = "grid-item";
    square.addEventListener('mouseover', () => setColor(event));
    // square.addEventListener('mousedown', () => setColor(event));
  }
}
createGrid(size);

function getRandomColor() {
  let o = Math.round;
  let r = Math.random;
  let s = 255;
  return "rgb(" + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

//choose between grayscale and rgb
function setColor(event){
  if (color == 'gray'){
    event.target.style.backgroundColor = 'gray';
  }
  
  if (color == 'rgb'){
    event.target.style.backgroundColor = getRandomColor();
  }
}

//grayscaleMode button
grayscaleMode.addEventListener('click', (e)=>{
  audio.play();
  color = 'gray';
});

//rainbowMode button
rainbowMode.addEventListener('click', (e)=>{
  audio.play();
  color = 'rgb';
});

//clearGrid button
clearGrid.addEventListener("click", (e)=>{
  audio.play();
  grid.innerHTML = "";
  createGrid(size);
});

//resizeGrid button
resizeGrid.addEventListener('click', (e)=> {
  audio.play();
  grid.innerHTML = "";
  size = parseInt(prompt('Enter Grid Size (Max of 100):'));
  if (size > 100) {
    alert("ERROR! Grid Size larger than 100. Please try again.");
    return;
  }
  createGrid(size);
});