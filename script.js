const num = 16;


function createRow(num){
  const row = document.createElement('div')
  row.setAttribute('class', 'row')
  for (let i = 0; i < num; i++){
    console.log("hello")
    createSquare(row)
  }
  return row;
}

function createSquare(row){
  console.log("hello")
  console.log(this)
  const square = document.createElement('div')
  square.setAttribute('class', 'square')
  row.appendChild(square)
}

function createGrid(num){
  const grid = document.querySelector('#grid')
  for (let i = 0; i < num; i++){
    row = createRow(num);
    grid.appendChild(row)
  }
  addHoverStyles()
}

function addHoverStyles(){
  let squares = document.querySelectorAll('.square')

  function hoverColor(square){
    square.style.backgroundColor = 'red';
  }
  
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      hoverColor(square)
    })
  })
}

// Code to Execute:

createGrid(num)